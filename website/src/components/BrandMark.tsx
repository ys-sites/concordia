import React from 'react';

// Original mark (not the university's logo): a "C" drawn as an open engineering gear.
// Its burgundy-and-gold palette is the established Engineering Hub mark.
const TEETH = [-90, -135, 180, 135, 90];

export const BrandMark: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Concordia Engineering study hub">
    <defs>
      <linearGradient id="hub-mark" x1="5" y1="4" x2="43" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A52C49" />
        <stop offset="1" stopColor="#7D1A32" />
      </linearGradient>
      <linearGradient id="gear-gold" x1="12" y1="12" x2="38" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE8A3" />
        <stop offset="1" stopColor="#F2C14E" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="11" fill="url(#hub-mark)" />
    <path d="M8 13.5C13.4 7.3 22.7 5.1 30.4 8.1" fill="none" stroke="#F9D779" strokeWidth="1.25" strokeLinecap="round" opacity=".58" />
    <path
      d="M32.45 15.55 A12 12 0 1 0 32.45 32.45"
      fill="none"
      stroke="url(#gear-gold)"
      strokeWidth="5.25"
      strokeLinecap="round"
    />
    {TEETH.map((deg) => (
      <rect key={deg} x="35.6" y="21.8" width="5" height="4.4" rx="1" fill="#F2C14E" transform={`rotate(${deg} 24 24)`} />
    ))}
    <circle cx="24" cy="24" r="4.7" fill="#FFE6A0" />
    <circle cx="24" cy="24" r="2.25" fill="#912338" />
    <path d="M24 17.1v2.1M24 28.8v2.1M17.1 24h2.1M28.8 24h2.1" stroke="#F9D779" strokeWidth="1.45" strokeLinecap="round" />
  </svg>
);
