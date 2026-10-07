/**
 * Shared Kokoro-82M neural voice loader (human-quality TTS, 100% in-browser via ONNX).
 * No server, no API key, no cost. The engine lazy-loads via dynamic import on first
 * use (~90MB q8 model, cached by the browser afterwards), so the main bundle stays lean.
 *
 * Used by:
 *  - utils/speechEngine.ts  (quiz narration: listen / robot-repeat / auto-read)
 *  - components/ReadAloudButton.tsx (worked-solution "Listen" button)
 */
import type { KokoroTTS as KokoroTTSType } from 'kokoro-js';

export const KOKORO_MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
// af_heart: warm, natural female voice — best overall grade in the Kokoro set
export const KOKORO_VOICE = 'af_heart' as const;
export type { KokoroTTSType };

let kokoroPromise: Promise<KokoroTTSType> | null = null;

/** Load (once) the Kokoro voice engine. Safe to call from many places. */
export function loadKokoroVoice(onProgress?: (pct: number) => void): Promise<KokoroTTSType> {
  if (!kokoroPromise) {
    kokoroPromise = import('kokoro-js').then(({ KokoroTTS }) =>
      KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {
        dtype: 'q8',
        progress_callback: (info: any) => {
          if (info && typeof info.progress === 'number') onProgress?.(Math.round(info.progress));
        },
      }),
    ).catch((err) => {
      kokoroPromise = null;
      throw err;
    });
  }
  return kokoroPromise;
}

/* ----------------------------------------------------------------------------
 * Simple fire-and-forget speaker (used by ReadAloudButton)
 * ------------------------------------------------------------------------- */

export type VoiceStatus = 'idle' | 'loading' | 'ready' | 'speaking' | 'error';

let status: VoiceStatus = 'idle';
let loadProgress = 0;
let currentAudio: HTMLAudioElement | null = null;
let currentUrl: string | null = null;

type Listener = (s: VoiceStatus, progress?: number) => void;
const listeners = new Set<Listener>();

function setStatus(s: VoiceStatus, progress?: number) {
  status = s;
  if (progress !== undefined) loadProgress = progress;
  listeners.forEach((l) => l(s, loadProgress));
}

export function getVoiceStatus(): VoiceStatus {
  return status;
}

export function subscribeVoiceStatus(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/** Light cleanup for plain prose (the quiz engine uses the richer math-aware cleaner). */
export function cleanForSpeech(text: string): string {
  return text
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$\n]*\$/g, ' ')
    .replace(/\\\(.*?\\\)/g, ' ')
    .replace(/\\\[.*?\\\]/g, ' ')
    .replace(/\\[a-zA-Z]+\{[^}]*\}/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_#>|~^]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function stopSpeaking(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  if (currentUrl) {
    URL.revokeObjectURL(currentUrl);
    currentUrl = null;
  }
  if (status === 'speaking') setStatus('ready');
}

/** Speak text with the human Kokoro voice. First call downloads the model. */
export async function speakText(rawText: string): Promise<void> {
  const text = cleanForSpeech(rawText);
  if (!text) return;
  stopSpeaking();
  setStatus('loading', 0);
  const tts = await loadKokoroVoice((p) => setStatus('loading', p));
  setStatus('speaking');
  try {
    const audio = await tts.generate(text, { voice: KOKORO_VOICE });
    const blob = audio.toBlob();
    currentUrl = URL.createObjectURL(blob);
    currentAudio = new Audio(currentUrl);
    currentAudio.onended = () => stopSpeaking();
    currentAudio.onerror = () => stopSpeaking();
    await currentAudio.play();
  } catch {
    setStatus('error');
    throw new Error('Voice generation failed');
  }
}
