import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Helper to recursively copy curriculum files
function copyDirFiltered(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (
      entry.name === '_Source & Archive' || 
      entry.name.startsWith('.') || 
      entry.name.includes('CodeBlocks') || 
      entry.name === 'node_modules'
    ) {
      continue;
    }
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirFiltered(srcPath, destPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.pdf', '.md', '.ino', '.cpp', '.png', '.jpg', '.svg'].includes(ext)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// Custom middleware to serve local course PDFs seamlessly and bundle for Vercel
function coursePdfPlugin() {
  const semester1Root = path.resolve(__dirname, '..');

  return {
    name: 'course-pdf-server',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        // Handle /courses/... static route in dev
        if (req.url && req.url.startsWith('/courses/')) {
          try {
            const rawPath = req.url.slice('/courses/'.length).split('?')[0];
            const decodedPath = decodeURIComponent(rawPath);
            const targetPath = path.resolve(semester1Root, decodedPath);
            
            if (!targetPath.startsWith(semester1Root)) {
              res.statusCode = 403;
              res.end('Access denied');
              return;
            }

            if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
              res.setHeader('Content-Type', targetPath.endsWith('.pdf') ? 'application/pdf' : 'text/plain');
              res.setHeader('Content-Disposition', 'inline');
              fs.createReadStream(targetPath).pipe(res);
              return;
            }
          } catch (e: any) {
            console.error('Error serving /courses in dev:', e);
          }
        }

        // Handle /api/pdf?path=... in dev
        if (req.url && req.url.startsWith('/api/pdf')) {
          try {
            const urlObj = new URL(req.url, 'http://localhost');
            const relativePath = urlObj.searchParams.get('path');
            if (!relativePath) {
              res.statusCode = 400;
              res.end('Missing path parameter');
              return;
            }
            
            const targetPath = path.resolve(semester1Root, decodeURIComponent(relativePath));
            
            if (!targetPath.startsWith(semester1Root)) {
              res.statusCode = 403;
              res.end('Access denied');
              return;
            }
            
            if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
              res.setHeader('Content-Type', 'application/pdf');
              res.setHeader('Content-Disposition', 'inline');
              fs.createReadStream(targetPath).pipe(res);
              return;
            } else {
              res.statusCode = 404;
              res.end('File not found');
              return;
            }
          } catch (e: any) {
            res.statusCode = 500;
            res.end('Internal server error: ' + e.message);
            return;
          }
        }
        next();
      });
    },
    closeBundle() {
      // Automatically copy course curriculum assets into dist/courses for Vercel deployment
      try {
        const distCoursesDir = path.resolve(__dirname, 'dist', 'courses');
        const courseDirs = ['Engr 213', 'Indu 211', 'Miae 215', 'Miae 221'];
        console.log('[Vercel Build] Bundling course curriculum files into dist/courses...');
        for (const c of courseDirs) {
          const src = path.resolve(semester1Root, c);
          const dest = path.resolve(distCoursesDir, c);
          copyDirFiltered(src, dest);
        }
        console.log('[Vercel Build] Course assets bundled successfully for Vercel CDN!');
      } catch (err) {
        console.warn('[Vercel Build] Notice bundling assets:', err);
      }
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

