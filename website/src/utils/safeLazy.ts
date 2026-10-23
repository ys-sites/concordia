import React, { lazy } from 'react';

// Wrap React.lazy so every route uses the same module shape. Loading failures are
// handled by the app error boundary; this helper never reloads the browser.
export function safeLazy<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T } | any>
): React.LazyExoticComponent<T> {
  return lazy(async () => {
    const mod = await factory();
    return mod.default ? mod : { default: mod };
  });
}

export default safeLazy;
