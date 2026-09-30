import React, { useCallback, useEffect, useRef, useState } from 'react';
// Legacy build: supports older mobile browsers (iOS Safari < 17.4) that the modern build does not
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import workerUrl from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import { ZoomIn, ZoomOut, Maximize, Loader2, AlertTriangle, ExternalLink } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

// Browsers only render PDFs in an <iframe> when they ship a PDF plugin: Android Chrome shows a
// download button instead and iOS Safari shows only the first page. PDF.js draws every page onto a
// canvas, so documents read the same on every device. Pages render lazily as they scroll into view,
// and large textbook chapters are fetched in ranges instead of downloading the whole file first.

const ZOOM_STEPS = [0.5, 0.67, 0.8, 1, 1.25, 1.5, 2, 2.5, 3];
const RENDER_MARGIN = '800px 0px'; // start rendering a page a little before it scrolls into view

interface PageSize {
  width: number;
  height: number;
}

interface PdfCanvasViewerProps {
  url: string;
  title: string;
}

const PdfPage: React.FC<{
  pdf: PDFDocumentProxy;
  pageNumber: number;
  size: PageSize;
  cssWidth: number;
  onVisible: (page: number) => void;
}> = ({ pdf, pageNumber, size, cssWidth, onVisible }) => {
  const holderRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inView, setInView] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [ownSize, setOwnSize] = useState<PageSize>(size); // placeholder shape until the page itself loads
  const cssHeight = (cssWidth * ownSize.height) / ownSize.width;

  // Render when near the viewport; report the page that is mostly on screen for the page counter
  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const near = new IntersectionObserver((entries) => setInView(entries[0].isIntersecting), { rootMargin: RENDER_MARGIN });
    const current = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && onVisible(pageNumber),
      { threshold: 0.5 }
    );
    near.observe(el);
    current.observe(el);
    return () => {
      near.disconnect();
      current.disconnect();
    };
  }, [pageNumber, onVisible]);

  useEffect(() => {
    if (!inView) return;
    let task: RenderTask | null = null;
    let cancelled = false;
    (async () => {
      const page = await pdf.getPage(pageNumber);
      if (cancelled || !canvasRef.current) return;
      const base = page.getViewport({ scale: 1 });
      if (base.width !== ownSize.width || base.height !== ownSize.height) setOwnSize({ width: base.width, height: base.height });
      // Draw at the device's pixel density so text stays sharp on phones and retina screens
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const viewport = page.getViewport({ scale: (cssWidth / base.width) * dpr });
      const canvas = canvasRef.current;
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      task = page.render({ canvasContext: ctx, viewport });
      try {
        await task.promise;
        if (!cancelled) setRendered(true);
      } catch {
        // Render cancelled by a zoom change or unmount
      }
    })();
    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [inView, pdf, pageNumber, cssWidth]);

  return (
    <div
      ref={holderRef}
      className="pdfv-page"
      style={{ width: cssWidth, height: cssHeight }}
      data-page={pageNumber}
      aria-label={`Page ${pageNumber}`}
    >
      {!rendered && <div className="pdfv-page-placeholder">Page {pageNumber}</div>}
      <canvas ref={canvasRef} style={{ width: cssWidth, height: cssHeight }} />
    </div>
  );
};

export const PdfCanvasViewer: React.FC<PdfCanvasViewerProps> = ({ url, title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [sizes, setSizes] = useState<PageSize[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1); // 1 = fit width
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Load the document
  useEffect(() => {
    let destroyed = false;
    setPdf(null);
    setSizes([]);
    setError(null);
    setProgress(0);
    setCurrentPage(1);

    const task = pdfjs.getDocument({
      url,
      rangeChunkSize: 256 * 1024,
      disableAutoFetch: true, // only fetch the byte ranges of pages being viewed
      isEvalSupported: false
    });
    task.onProgress = ({ loaded, total }: { loaded: number; total: number }) => {
      if (total) setProgress(Math.min(99, Math.round((loaded / total) * 100)));
    };
    task.promise.then(
      async (doc) => {
        if (destroyed) return;
        // Page 1's shape is the placeholder for every page; each page corrects its own when it loads
        const first = (await doc.getPage(1)).getViewport({ scale: 1 });
        if (destroyed) return;
        setSizes(Array.from({ length: doc.numPages }, () => ({ width: first.width, height: first.height })));
        setPdf(doc);
      },
      (err: Error) => {
        if (!destroyed) setError(err?.message || 'The document could not be loaded.');
      }
    );
    return () => {
      destroyed = true;
      task.destroy();
    };
  }, [url]);

  // Track the available width so pages fit the screen (phones included)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => setContainerWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onVisible = useCallback((page: number) => setCurrentPage(page), []);

  const zoomBy = (dir: 1 | -1) => {
    const idx = ZOOM_STEPS.findIndex((z) => z >= zoom - 1e-6);
    const next = ZOOM_STEPS[Math.max(0, Math.min(ZOOM_STEPS.length - 1, (idx === -1 ? 3 : idx) + dir))];
    setZoom(next);
  };

  const pageGutter = containerWidth < 600 ? 16 : 48;
  const fitWidth = Math.max(200, Math.min(containerWidth - pageGutter, 1000));
  const cssWidth = Math.round(fitWidth * zoom);

  const goToPage = (n: number) => {
    const target = scrollRef.current?.querySelector<HTMLElement>(`[data-page="${n}"]`);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pdfv-root">
      <div className="pdfv-toolbar" role="toolbar" aria-label="PDF controls">
        <div className="pdfv-pages">
          {pdf ? (
            <>
              <input
                className="pdfv-page-input"
                type="number"
                min={1}
                max={pdf.numPages}
                value={currentPage}
                aria-label="Current page"
                onChange={(e) => {
                  const n = Number(e.target.value);
                  if (n >= 1 && n <= pdf.numPages) {
                    setCurrentPage(n);
                    goToPage(n);
                  }
                }}
              />
              <span>/ {pdf.numPages}</span>
            </>
          ) : (
            <span>{error ? 'Unavailable' : `Loading… ${progress ? progress + '%' : ''}`}</span>
          )}
        </div>
        <div className="pdfv-zoom">
          <button onClick={() => zoomBy(-1)} disabled={!pdf || zoom <= ZOOM_STEPS[0]} title="Zoom out" aria-label="Zoom out">
            <ZoomOut size={16} />
          </button>
          <span className="pdfv-zoom-label">{Math.round(zoom * 100)}%</span>
          <button onClick={() => zoomBy(1)} disabled={!pdf || zoom >= ZOOM_STEPS[ZOOM_STEPS.length - 1]} title="Zoom in" aria-label="Zoom in">
            <ZoomIn size={16} />
          </button>
          <button onClick={() => setZoom(1)} disabled={!pdf || zoom === 1} title="Fit to width" aria-label="Fit to width">
            <Maximize size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="pdfv-scroll" aria-label={title}>
        {error && (
          <div className="pdfv-status pdfv-error">
            <AlertTriangle size={22} />
            <p>This document could not be displayed here.</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="pdfv-fallback-link">
              <ExternalLink size={14} /> Open the PDF directly
            </a>
          </div>
        )}
        {!pdf && !error && (
          <div className="pdfv-status">
            <Loader2 size={22} className="pdfv-spin" />
            <p>Loading document{progress ? ` · ${progress}%` : '…'}</p>
          </div>
        )}
        {pdf && containerWidth > 0 &&
          sizes.map((size, i) => (
            <PdfPage key={i} pdf={pdf} pageNumber={i + 1} size={size} cssWidth={cssWidth} onVisible={onVisible} />
          ))}
      </div>
    </div>
  );
};

export default PdfCanvasViewer;
