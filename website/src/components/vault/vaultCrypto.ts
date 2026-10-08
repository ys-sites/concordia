// Decrypts a course's Midterm Gate blob in the browser. Parameters mirror scripts/encrypt-vault.mjs:
// PBKDF2-SHA-256 → AES-256-GCM over the JSON content. A wrong password fails GCM authentication.
// All courses share one password; unlocking one course also unlocks the others for this tab.
import type { GateContent } from './vaultTypes';

interface Blob {
  v: number;
  iter: number;
  salt: string;
  iv: string;
  ct: string;
}

import { GATE_COURSES, GateCourse } from './gateCourses';
export type { GateCourse };

const LOADERS: Record<GateCourse, () => Promise<{ default: unknown }>> = {
  MIAE221: () => import('../../data/vault/miae221-midterm-gate.enc.json'),
  MIAE215: () => import('../../data/vault/miae215-midterm-gate.enc.json'),
  ENGR213: () => import('../../data/vault/engr213-midterm-gate.enc.json'),
  INDU211: () => import('../../data/vault/indu211-midterm-gate.enc.json')
};

const sessionKey = (course: GateCourse) => `gate_key_${course}`;

const fromB64 = (s: string): Uint8Array<ArrayBuffer> => {
  const bin = atob(s);
  const out = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
};
const toB64 = (u8: Uint8Array) => btoa(String.fromCharCode(...u8));

const loadBlob = async (course: GateCourse): Promise<Blob> => (await LOADERS[course]()).default as Blob;

const decryptWith = async (blob: Blob, key: CryptoKey): Promise<GateContent> => {
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(blob.iv) }, key, fromB64(blob.ct));
  return JSON.parse(new TextDecoder().decode(plain)) as GateContent;
};

const importAesKey = (raw: Uint8Array<ArrayBuffer>) => crypto.subtle.importKey('raw', raw, 'AES-GCM', true, ['decrypt']);

const deriveKey = async (blob: Blob, password: string) => {
  const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(password.trim().toLowerCase()), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: fromB64(blob.salt), iterations: blob.iter, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    true,
    ['decrypt']
  );
};

const remember = async (course: GateCourse, key: CryptoKey) => {
  try {
    sessionStorage.setItem(sessionKey(course), toB64(new Uint8Array(await crypto.subtle.exportKey('raw', key))));
  } catch {
    // storage unavailable: the viewer re-enters the password next time
  }
};

const tryUnlock = async (course: GateCourse, password: string): Promise<GateContent | null> => {
  const blob = await loadBlob(course);
  const key = await deriveKey(blob, password);
  try {
    const content = await decryptWith(blob, key);
    await remember(course, key);
    return content;
  } catch {
    return null;
  }
};

// Returns null when the password is wrong. On success the other courses are unlocked in the background,
// so the password is typed once per tab (only derived keys are stored, never the password).
export async function unlockGate(course: GateCourse, password: string): Promise<GateContent | null> {
  const content = await tryUnlock(course, password);
  if (content) {
    for (const other of GATE_COURSES) {
      if (other !== course) void tryUnlock(other, password).catch(() => null);
    }
  }
  return content;
}

// Re-opens a gate already unlocked in this tab.
export async function resumeGate(course: GateCourse): Promise<GateContent | null> {
  let saved: string | null = null;
  try {
    saved = sessionStorage.getItem(sessionKey(course));
  } catch {
    return null;
  }
  if (!saved) return null;
  try {
    return await decryptWith(await loadBlob(course), await importAesKey(fromB64(saved)));
  } catch {
    lockGate();
    return null;
  }
}

export function lockGate() {
  try {
    for (const c of GATE_COURSES) sessionStorage.removeItem(sessionKey(c));
  } catch {
    // ignore
  }
}
