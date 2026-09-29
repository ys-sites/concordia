import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Custom middleware to serve local course PDFs seamlessly
function coursePdfPlugin() {
  return {
    name: 'course-pdf-server',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url && req.url.startsWith('/api/pdf')) {
          try {
            const urlObj = new URL(req.url, 'http://localhost');
            const relativePath = urlObj.searchParams.get('path');
            if (!relativePath) {
              res.statusCode = 400;
              res.end('Missing path parameter');
              return;
            }
            
            // Resolve path relative to Semester 1 root (parent of 001 Main)
            const semester1Root = path.resolve(__dirname, '..');
            const targetPath = path.resolve(semester1Root, decodeURIComponent(relativePath));
            
            // Security check: must stay inside Semester 1
            if (!targetPath.startsWith(semester1Root)) {
              res.statusCode = 403;
              res.end('Access denied');
              return;
            }
            
            if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
              res.setHeader('Content-Type', 'application/pdf');
              res.setHeader('Content-Disposition', 'inline');
              const stream = fs.createReadStream(targetPath);
              stream.pipe(res);
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
