// Any component can open a course document (a lesson's slides, a resource) without prop drilling; the app shell
// listens and shows the viewer.
import type { DocRef } from './model';

const EVENT = 'lx-open-doc';

export const openDoc = (doc: DocRef) => window.dispatchEvent(new CustomEvent<DocRef>(EVENT, { detail: doc }));

export const onOpenDoc = (fn: (d: DocRef) => void) => {
  const h = (e: Event) => fn((e as CustomEvent<DocRef>).detail);
  window.addEventListener(EVENT, h);
  return () => window.removeEventListener(EVENT, h);
};
