import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { buildDocumentRegistry, listPublishedFiles } from './build/publishedFiles';

const VIRTUAL_DOCS_ID = 'virtual:course-documents';
const RESOLVED_VIRTUAL_DOCS_ID = '\0' + VIRTUAL_DOCS_ID;

// Helper to stream file with HTTP Range support (PDF.js fetches large PDFs in chunks)
function streamFileWithRanges(filePath: string, req: any, res: any) {
  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const types: Record<string, string> = {
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  res.setHeader('Content-Type', types[ext] ?? 'application/octet-stream');
  res.setHeader('Content-Disposition', 'inline');
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
    if (start >= stat.size || end >= stat.size) {
      res.statusCode = 416;
      res.setHeader('Content-Range', `bytes */${stat.size}`);
      res.end();
      return;
    }
    res.statusCode = 206;
    res.setHeader('Content-Range', `bytes ${start}-${end}/${stat.size}`);
    res.setHeader('Content-Length', end - start + 1);
    fs.createReadStream(filePath, { start, end }).pipe(res);
  } else {
    res.setHeader('Content-Length', stat.size);
    fs.createReadStream(filePath).pipe(res);
  }
}

// Serves course files in dev, bundles them into dist/courses for Vercel, and exposes the
// document registry. Both use listPublishedFiles, so the portal lists exactly what is deployed.
function coursePdfPlugin() {
  const semester1Root = path.resolve(__dirname, '..');

  return {
    name: 'course-pdf-server',
    resolveId(id: string) {
      return id === VIRTUAL_DOCS_ID ? RESOLVED_VIRTUAL_DOCS_ID : null;
    },
    load(id: string) {
      if (id !== RESOLVED_VIRTUAL_DOCS_ID) return null;
      const docs = buildDocumentRegistry(semester1Root);
      return `export default ${JSON.stringify(docs)};`;
    },
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (!req.url || !req.url.startsWith('/courses/')) return next();
        try {
          const published = decodeURIComponent(req.url.slice('/courses/'.length).split('?')[0]);
          // Re-listed per request so files added while the dev server runs are served too
          const file = listPublishedFiles(semester1Root).find((f) => f.publishedPath === published);
          if (!file) {
            res.statusCode = 404;
            res.end('File not found');
            return;
          }
          streamFileWithRanges(file.source, req, res);
        } catch (e: any) {
          res.statusCode = 500;
          res.end('Internal server error: ' + e.message);
        }
      });
    },
    closeBundle() {
      const distCoursesDir = path.resolve(__dirname, 'dist', 'courses');
      fs.rmSync(distCoursesDir, { recursive: true, force: true });
      const files = listPublishedFiles(semester1Root);
      console.log(`[Vercel Build] Bundling ${files.length} course files into dist/courses...`);
      for (const f of files) {
        const dest = path.join(distCoursesDir, f.publishedPath);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(f.source, dest);
      }
      console.log('[Vercel Build] Course assets bundled.');
    }
  };
}

export default defineConfig({
  plugins: [react(), coursePdfPlugin()],
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: ['..']
    }
  }
});
