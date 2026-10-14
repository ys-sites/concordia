// Pre-renders human-voice MP3s for every practice question (overnight job).
// The quiz player chains these tiny clips at runtime — tap => instant human
// voice, no model download, no on-device inference, no iOS issues.
//
// Layout (website/public/voice/v1/):
//   <questionId>.mp3            — the question stem
//   <questionId>_o<0-3>.mp3     — options in STORED order
//   _l_a.mp3 … _l_d.mp3         — shared "A." "B." "C." "D." letter clips
// The player maps displayed position -> stored index via the shuffle
// permutation (order[newPos] = oldPos) and plays: stem, letter, option…
//
// Run:
//   1. node generate-voiceovers.mjs predownload        # fetch model once (~90MB)
//   2. node generate-voiceovers.mjs <worker> <total>   # e.g. 0 4, 1 4, 2 4, 3 4
// Skips files that already exist, so it resumes cleanly.
import { KokoroTTS } from 'kokoro-js';
import { PRACTICE_QUESTIONS } from '../src/data/questionsData';
import { cleanTextForSpeech } from '../src/utils/speechEngine';
import { spawn } from 'node:child_process';
import { mkdirSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public', 'voice', 'v1');
const VOICE = 'af_heart';
const SPEED = 0.95; // matches the quiz's former default rate
const SAMPLE_RATE = 24000;

mkdirSync(OUT, { recursive: true });

function mp3Encode(raw: Float32Array, outPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const ff = spawn('ffmpeg', [
      '-hide_banner', '-loglevel', 'error',
      '-f', 'f32le', '-ar', String(SAMPLE_RATE), '-ac', '1', '-i', 'pipe:0',
      '-codec:a', 'libmp3lame', '-b:a', '32k', '-y', outPath,
    ]);
    ff.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))));
    ff.on('error', reject);
    ff.stdin.on('error', () => {});
    ff.stdin.write(Buffer.from(raw.buffer, raw.byteOffset, raw.byteLength));
    ff.stdin.end();
  });
}

async function renderClip(tts: any, text: string, outPath: string): Promise<boolean> {
  if (existsSync(outPath)) return false; // resume
  const cleaned = cleanTextForSpeech(text);
  if (!cleaned) return false;
  const audio = await tts.generate(cleaned, { voice: VOICE, speed: SPEED });
  await mp3Encode(audio.audio as Float32Array, outPath);
  return true;
}

async function main() {
  const mode = process.argv[2];
  if (mode === 'predownload') {
    console.log('Downloading Kokoro q8 model once…');
    await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', { dtype: 'q8' });
    console.log('Model cached.');
    return;
  }

  const wi = Number(process.argv[2] ?? 0);
  const wt = Number(process.argv[3] ?? 1);
  const tts = await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', { dtype: 'q8' });
  console.log(`[worker ${wi}/${wt}] model ready`);

  // Shared letter clips (only worker 0)
  if (wi === 0) {
    for (const [i, letter] of ['A', 'B', 'C', 'D'].entries()) {
      const p = join(OUT, `_l_${'abcd'[i]}.mp3`);
      if (await renderClip(tts, `${letter}.`, p)) console.log(`[worker 0] letter ${letter} done`);
    }
  }

  let done = 0;
  let n = 0;
  for (const q of PRACTICE_QUESTIONS) {
    if (n++ % wt !== wi) continue;
    const jobs: Array<[string, string]> = [[cleanTextForSpeech(q.question), join(OUT, `${q.id}.mp3`)]];
    q.options.forEach((opt, i) => jobs.push([opt, join(OUT, `${q.id}_o${i}.mp3`)]));
    for (const [text, outPath] of jobs) {
      try {
        if (await renderClip(tts, text, outPath)) done++;
      } catch (e: any) {
        console.error(`[worker ${wi}] FAILED ${outPath}: ${e.message}`);
      }
    }
    if (n % 25 === 0) console.log(`[worker ${wi}] ${n} questions scanned, ${done} clips rendered`);
  }
  console.log(`[worker ${wi}] DONE — ${done} clips rendered`);

  if (wi === 0) {
    let bytes = 0;
    let files = 0;
    for (const f of readdirSync(OUT)) {
      if (f.endsWith('.mp3')) { files++; bytes += statSync(join(OUT, f)).size; }
    }
    console.log(`[worker 0] TOTAL: ${files} mp3 files, ${(bytes / 1048576).toFixed(1)} MB`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
