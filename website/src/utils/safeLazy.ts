import React, { lazy } from 'react';

// Wraps React.lazy to automatically reload the page when a chunk load error occurs
// (e.g. after a new deployment changes the chunk file hashes) instead of failing.
export function safeLazy<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T } | any>
): React.LazyExoticComponent<T> {
  return lazy(async () => {
    try {
      const mod = await factory();
      return mod.default ? mod : { default: mod };
    } catch (err: any) {
      const isChunk =
        /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Loading (CSS )?chunk|ChunkLoadError|Unable to preload CSS/i.test(
          String(err?.message ?? err)
        );
      if (isChunk && typeof window !== 'undefined') {
        const attempts = Number(sessionStorage.getItem('chunk_reload_attempts') || '0');
        if (attempts < 3) {
          sessionStorage.setItem('chunk_reload_attempts', String(attempts + 1));
          window.location.reload();
          return new Promise(() => {}); // Wait for browser reload
        }
      }
      throw err;
    }
  });
}

export default safeLazy;
