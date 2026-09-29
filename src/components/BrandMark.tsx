import React from 'react';

// Original mark (not the university's logo): a "C" drawn as an open engineering gear,
// in Concordia-inspired burgundy & gold. Keep in sync with the favicon in index.html.
const TEETH = [-90, -135, 180, 135, 90];

export const BrandMark: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Concordia Engineering study hub">
    <rect width="48" height="48" rx="11" fill="#912338" />
    <path
      d="M31.78 16.22 A11 11 0 1 0 31.78 31.78"
      fill="none"
      stroke="#F2C14E"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {TEETH.map((deg) => (
      <rect key={deg} x="36.5" y="21.75" width="4.5" height="4.5" rx="1" fill="#F2C14E" transform={`rotate(${deg} 24 24)`} />
    ))}
    <circle cx="24" cy="24" r="3.2" fill="#F2C14E" />
  </svg>
);
