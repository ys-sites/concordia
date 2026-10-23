import React, { useState } from 'react';
import { getVideoUrl } from '../../utils/pdfUrl';

// A video's thumbnail: its poster, the title frame the video opens on. The very first frame of the course
// videos is an empty background (the title animates in), so the poster is that title once it is drawn. If the
// poster cannot load, the video shows that same opening frame itself, so no card is ever left blank.
//
// Loaded as a plain image on purpose: the media CDN sends CORS headers only to requests that ask for them, so a
// CORS image and a plain one sharing a cached copy can break each other. The player asks for its own copy.
export const VideoThumb: React.FC<{ poster?: string; videoId?: string; alt?: string }> = ({ poster, videoId, alt = '' }) => {
  const [fallback, setFallback] = useState<string | null>(null);
  const [failed, setFailed] = useState(!poster);
  if (!failed && poster) return <img src={getVideoUrl(poster)} alt={alt} loading="lazy" decoding="async" onError={() => (setFailed(true), videoId && import('../videoSources').then((m) => m.resolveVideo(videoId)).then((l) => l && setFallback(l.video)))} />;
  if (fallback) return <video src={`${getVideoUrl(fallback)}?thumb#t=2`} preload="metadata" muted playsInline aria-hidden tabIndex={-1} />;
  return null;
};
