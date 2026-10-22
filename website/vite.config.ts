import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { buildDocumentRegistry, listPublishedFiles } from './build/publishedFiles';
import { build as esbuild } from 'esbuild';

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
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.vtt': 'text/vtt'
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
      const files = listPublishedFiles(semester1Root);
      console.log(`[Vercel Build] Syncing ${files.length} course files into dist/courses...`);
      let copied = 0;
      for (const f of files) {
        // Skip .mp4 video binaries: they are streamed from Cloudflare R2 to keep Vercel build bundle lean and fast
        if (f.publishedPath.endsWith('.mp4')) continue;
        const dest = path.join(distCoursesDir, f.publishedPath);
        const needCopy = !fs.existsSync(dest) || fs.statSync(f.source).size !== fs.statSync(dest).size;
        if (needCopy) {
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.copyFileSync(f.source, dest);
          copied++;
        }
      }
      console.log(`[Vercel Build] Course assets synced (${copied} copied/updated).`);
    }
  };
}

// Question counts for the navbar and home page, computed from the question bank at build time.
// The bank itself (~1 MB) then only loads when someone opens a quiz or the question bank.
function questionCountsPlugin() {
  const ID = 'virtual:question-counts';
  const RESOLVED = '\0' + ID;
  const entry = path.resolve(__dirname, 'src/data/questionsData.ts');
  return {
    name: 'question-counts',
    resolveId(id: string) {
      return id === ID ? RESOLVED : null;
    },
    async load(this: any, id: string) {
      if (id !== RESOLVED) return null;
      const out = await esbuild({ entryPoints: [entry], bundle: true, write: false, format: 'esm', platform: 'node', metafile: true, logLevel: 'silent' });
      for (const input of Object.keys(out.metafile!.inputs)) this.addWatchFile(path.resolve(__dirname, input));
      const code = out.outputFiles[0].text;
      const mod = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
      const qs: { courseId: string }[] = mod.PRACTICE_QUESTIONS;
      const byCourse: Record<string, number> = {};
      for (const q of qs) byCourse[q.courseId] = (byCourse[q.courseId] ?? 0) + 1;
      return `export default ${JSON.stringify({ total: qs.length, byCourse })};`;
    }
  };
}

// The course curricula (sections → lessons → steps, with the question, video and document ids each step uses),
// computed at build time from the course specs in src/learn/curriculum and the course data.
//   virtual:curriculum-summary  — a few hundred bytes per course, for the home page
//   virtual:curriculum          — the full curricula, loaded with the course pages
function curriculumPlugin() {
  const IDS = ['virtual:curriculum', 'virtual:curriculum-summary'];
  const entry = path.resolve(__dirname, 'src/learn/build/entry.ts');
  const semester1Root = path.resolve(__dirname, '..');
  let built: Promise<{ curricula: Record<string, any>; inputs: string[] }> | null = null;
  const build = async () => {
    const out = await esbuild({ entryPoints: [entry], bundle: true, write: false, format: 'esm', platform: 'node', metafile: true, logLevel: 'silent', loader: { '.css': 'empty' } });
    const mod = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
    const docs = buildDocumentRegistry(semester1Root).map(([p]) => p);
    return { curricula: mod.buildAll(docs).curricula, inputs: Object.keys(out.metafile!.inputs).map((i) => path.resolve(__dirname, i)) };
  };
  return {
    name: 'curriculum',
    resolveId(id: string) {
      return IDS.includes(id) ? '\0' + id : null;
    },
    async load(this: any, id: string) {
      const name = id.startsWith('\0') ? id.slice(1) : '';
      if (!IDS.includes(name)) return null;
      built ??= build();
      const { curricula, inputs } = await built;
      for (const i of inputs) this.addWatchFile(i);
      if (name === 'virtual:curriculum') return `export default ${JSON.stringify(curricula)};`;
      const summary = Object.fromEntries(
        Object.entries(curricula).map(([c, cur]) => {
          const first = cur.sections[0].lessons[0];
          return [c, { stats: cur.stats, midterm: cur.midterm, start: { lessonId: first.id, stepId: first.steps[0].id }, thumb: cur.sections.flatMap((s: any) => s.lessons).find((l: any) => l.thumb)?.thumb ?? null }];
        })
      );
      return `export default ${JSON.stringify(summary)};`;
    },
    handleHotUpdate(ctx: any) {
      if (built && /src[\\/](learn|data)[\\/]/.test(ctx.file)) built = null;
    }
  };
}

export default defineConfig({
  plugins: [react(), coursePdfPlugin(), questionCountsPlugin(), curriculumPlugin()],
  build: {
    emptyOutDir: false
  },
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: ['..']
    }
  }
});
