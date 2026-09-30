// Single source of truth for which course files are published on the site.
// Used by vite.config.ts both to copy files into dist/courses and to build the document
// registry (virtual:course-documents), so the portal only ever lists files that were deployed.
import path from 'path';
import fs from 'fs';
import { isHiddenFromSite } from '../src/data/localOnly';
import { slugSegment } from '../src/utils/pdfUrl';

export const COURSE_DIRS: Record<string, string> = {
  'Engr 213': 'ENGR213',
  'Indu 211': 'INDU211',
  'Miae 215': 'MIAE215',
  'Miae 221': 'MIAE221'
};

// Copied into dist/courses (PDFs are listed in the portal; the rest are assets PDFs/markdown may use)
export const COPIED_EXTENSIONS = ['.pdf', '.png', '.jpg', '.svg'];

// Vercel's hard limit is 100MB per static file
const MAX_FILE_BYTES = 90 * 1024 * 1024;

const isSkippedName = (name: string) =>
  name === '_Source & Archive' ||
  name.startsWith('.') ||
  name.includes('CodeBlocks') ||
  name === 'node_modules' ||
  name === 'images' ||
  name.includes('Advanced Engineering Mathematics (7th Edition)') ||
  name.includes('Materials Science and Engineering An Introduction') ||
  name.includes('z-lib.org');

export interface PublishedFile {
  source: string; // absolute path on disk
  relativePath: string; // "Engr 213/01 - Teacher Lecture Notes/Lecture 1 ....pdf"
  publishedPath: string; // URL-safe path under /courses/
  sizeBytes: number;
}

export function listPublishedFiles(semesterRoot: string): PublishedFile[] {
  const out: PublishedFile[] = [];
  const seen = new Map<string, string>();

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (isSkippedName(entry.name)) continue;
      const source = path.join(dir, entry.name);
      const relativePath = path.relative(semesterRoot, source).replace(/\\/g, '/');
      if (isHiddenFromSite(relativePath)) continue;

      if (entry.isDirectory()) {
        walk(source);
        continue;
      }
      if (!entry.isFile() || !COPIED_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) continue;

      const publishedPath = relativePath.split('/').map(slugSegment).join('/');
      const clash = seen.get(publishedPath.toLowerCase());
      if (clash) {
        console.warn(`[courses] Slug collision between "${relativePath}" and "${clash}", keeping first`);
        continue;
      }
      const sizeBytes = fs.statSync(source).size;
      if (sizeBytes > MAX_FILE_BYTES) {
        console.warn(`[courses] Skipping "${relativePath}" (${(sizeBytes / 1048576).toFixed(0)} MB is over the static file limit)`);
        continue;
      }
      seen.set(publishedPath.toLowerCase(), relativePath);
      out.push({ source, relativePath, publishedPath, sizeBytes });
    }
  };

  for (const dir of Object.keys(COURSE_DIRS)) {
    const abs = path.join(semesterRoot, dir);
    if (fs.existsSync(abs)) walk(abs);
  }
  return out;
}

// Registry entries for every published PDF (shape of CourseDocument in src/types.ts)
export function buildDocumentRegistry(semesterRoot: string) {
  return listPublishedFiles(semesterRoot)
    .filter((f) => f.relativePath.toLowerCase().endsWith('.pdf'))
    .map((f) => {
      const segments = f.relativePath.split('/');
      const courseDir = segments[0];
      const courseId = COURSE_DIRS[courseDir];
      const filename = segments[segments.length - 1];
      const folders = segments.slice(1, -1);
      const categoryId = folders.join('/') || 'General';
      const title = filename.replace(/\.pdf$/i, '');
      return {
        id: `${courseId}:${f.publishedPath}`,
        courseId,
        categoryId,
        categoryTitle: folders[folders.length - 1] ?? 'General',
        title,
        filename,
        relativePath: f.relativePath,
        fileSizeBytes: f.sizeBytes,
        isMasterGuide: /master|comprehensive|expanded/i.test(f.relativePath),
        isHighYield: /review sheet|summary|rapid/i.test(f.relativePath),
        tags: [...folders, courseDir.toUpperCase()],
        summary: `${courseDir.toUpperCase()} · ${title}`
      };
    });
}
