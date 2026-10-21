// Script to upload all course AI motion lesson media (.mp4, .vtt, .jpg) to Cloudflare R2
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const semesterRoot = path.resolve(__dirname, '..', '..');

const BUCKET = 'ysmarketingsolution';
const R2_DEV_URL = 'https://pub-5cc0664f25874108bacca04abca6da5a.r2.dev';
const PREFIX = 'Concordia';
const CONCURRENCY = 4;

const slugSegment = (name) =>
  name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-(?=\.[A-Za-z0-9]+$)|-$/g, '');

const publicCoursePath = (relativePath) =>
  relativePath.split('/').map(slugSegment).join('/');

const MIME_TYPES = {
  '.mp4': 'video/mp4',
  '.vtt': 'text/vtt',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png'
};

function getFiles() {
  const targets = [
    { courseDir: 'Engr 213', subDir: 'Tutor Videos' },
    { courseDir: 'Miae 221', subDir: '08 - Teacher Topics Explained AI Videos' }
  ];

  const files = [];

  for (const { courseDir, subDir } of targets) {
    const fullDir = path.join(semesterRoot, courseDir, subDir);
    if (!fs.existsSync(fullDir)) continue;

    function walk(dir) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        const rel = path.relative(semesterRoot, fullPath).replace(/\\/g, '/');

        if (entry.isDirectory()) {
          walk(fullPath);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (['.mp4', '.vtt', '.jpg', '.jpeg'].includes(ext)) {
            const size = fs.statSync(fullPath).size;
            files.push({
              localPath: fullPath,
              relativePath: rel,
              key: `${PREFIX}/${publicCoursePath(rel)}`,
              contentType: MIME_TYPES[ext] || 'application/octet-stream',
              size
            });
          }
        }
      }
    }

    walk(fullDir);
  }

  return files;
}

async function checkRemoteExists(key, localSize) {
  try {
    const res = await fetch(`${R2_DEV_URL}/${key}`, { method: 'HEAD' });
    if (res.status === 200) {
      const len = parseInt(res.headers.get('content-length') || '0', 10);
      if (len === localSize) return true;
    }
  } catch {
    // Network or other issue, proceed to upload
  }
  return false;
}

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    const cmd = `npx wrangler r2 object put "${BUCKET}/${file.key}" --file "${file.localPath}" --content-type "${file.contentType}" --remote`;

    exec(cmd, { cwd: semesterRoot, maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) {
        reject(new Error(stderr || stdout || err.message));
      } else {
        resolve(stdout);
      }
    });
  });
}

async function run() {
  const files = getFiles();
  console.log(`Discovered ${files.length} media files across courses.`);
  const totalMB = (files.reduce((acc, f) => acc + f.size, 0) / 1024 / 1024).toFixed(1);
  console.log(`Total payload size: ${totalMB} MB`);
  console.log(`Target Cloudflare R2 bucket: ${BUCKET}`);
  console.log(`Public CDN URL: ${R2_DEV_URL}`);
  console.log('------------------------------------------------------------');

  let uploadedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  // Queue runner with bounded concurrency
  let index = 0;

  async function worker(id) {
    while (index < files.length) {
      const file = files[index++];
      const mb = (file.size / 1024 / 1024).toFixed(1);

      const exists = await checkRemoteExists(file.key, file.size);
      if (exists) {
        console.log(`[Worker ${id}] ⏭️  [SKIP - already on R2] ${file.key} (${mb} MB)`);
        skippedCount++;
        continue;
      }

      console.log(`[Worker ${id}] ⬆️  [UPLOADING] ${file.key} (${mb} MB)...`);
      try {
        await uploadFile(file);
        console.log(`[Worker ${id}] ✅ [DONE] ${file.key}`);
        uploadedCount++;
      } catch (err) {
        console.error(`[Worker ${id}] ❌ [ERROR] ${file.key}:`, err.message);
        errorCount++;
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1));
  await Promise.all(workers);

  console.log('------------------------------------------------------------');
  console.log(`Upload summary: ${uploadedCount} uploaded, ${skippedCount} skipped (already present), ${errorCount} errors.`);
  console.log(`Public CDN base: ${R2_DEV_URL}`);
}

run().catch((e) => {
  console.error('Fatal error during upload:', e);
  process.exit(1);
});
