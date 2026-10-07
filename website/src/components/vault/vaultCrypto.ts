// Decrypts the Midterm Gate blob in the browser. Parameters mirror scripts/encrypt-vault.mjs:
// PBKDF2-SHA-256 → AES-256-GCM over the JSON content. A wrong password fails GCM authentication.
import type { GateContent } from './vaultTypes';

interface Blob {
  v: number;
  iter: number;
  salt: string;
  iv: string;
  ct: string;
}

const SESSION_KEY = 'miae221_gate_key';

const fromB64 = (s: string): Uint8Array<ArrayBuffer> => {
  const bin = atob(s);
  const out = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
};
const toB64 = (u8: Uint8Array) => btoa(String.fromCharCode(...u8));

const loadBlob = async (): Promise<Blob> =>
  (await import('../../data/vault/miae221-midterm-gate.enc.json')).default as Blob;

const decryptWith = async (blob: Blob, key: CryptoKey): Promise<GateContent> => {
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(blob.iv) }, key, fromB64(blob.ct));
  return JSON.parse(new TextDecoder().decode(plain)) as GateContent;
};

const importAesKey = (raw: Uint8Array<ArrayBuffer>) => crypto.subtle.importKey('raw', raw, 'AES-GCM', true, ['decrypt']);

// Returns null when the password is wrong.
export async function unlockGate(password: string): Promise<GateContent | null> {
  const blob = await loadBlob();
  const baseKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password.trim().toLowerCase()),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: fromB64(blob.salt), iterations: blob.iter, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    true,
    ['decrypt']
  );
  try {
    const content = await decryptWith(blob, key);
    try {
      // Keep the tab unlocked across reloads without storing the password itself
      sessionStorage.setItem(SESSION_KEY, toB64(new Uint8Array(await crypto.subtle.exportKey('raw', key))));
    } catch {
      // storage unavailable: the viewer re-enters the password next time
    }
    return content;
  } catch {
    return null;
  }
}

// Re-opens the gate in a tab that was already unlocked this session.
export async function resumeGate(): Promise<GateContent | null> {
  let saved: string | null = null;
  try {
    saved = sessionStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
  if (!saved) return null;
  try {
    return await decryptWith(await loadBlob(), await importAesKey(fromB64(saved)));
  } catch {
    lockGate();
    return null;
  }
}

export function lockGate() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}
