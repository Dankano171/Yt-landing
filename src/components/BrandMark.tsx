import React from 'react';

export const LOGO_IMAGE_SRC = '/assets/aistudio/file_00000000f76881f4814b42d068c96476_00eadb4d.png';

interface ThreadgistMarkProps {
  className?: string;
}

/**
 * Crisp vector mark faithful to the Threadgist speech bubble,
 * ascending emerald bars, and amber magnifying glass logo.
 */
export function ThreadgistMark({className = 'h-8 w-8'}: ThreadgistMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Threadgist logo"
    >
      <defs>
        <linearGradient id="tg-bubble" x1="4" y1="6" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBF5EC" />
          <stop offset="55%" stopColor="#E6F4EE" />
          <stop offset="100%" stopColor="#329E7A" />
        </linearGradient>
        <linearGradient id="tg-glass" x1="21" y1="13" x2="33" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F7DFB3" />
          <stop offset="100%" stopColor="#E9A94B" />
        </linearGradient>
      </defs>

      {/* Dark forest rounded tile */}
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#071514" stroke="#329E7A" strokeOpacity="0.35" strokeWidth="1.25" />

      {/* Speech bubble frame */}
      <path
        d="M11.5 10.5H28.5C31.2614 10.5 33.5 12.7386 33.5 15.5V22.5C33.5 25.2614 31.2614 27.5 28.5 27.5H17.2L11.8 32.1C11.15 32.65 10.15 32.19 10.15 31.33V27.4C7.95 26.82 6.5 24.83 6.5 22.5V15.5C6.5 12.7386 8.73858 10.5 11.5 10.5Z"
        stroke="url(#tg-bubble)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Three ascending bars inside bubble */}
      <rect x="11.5" y="19.5" width="2.4" height="4.2" rx="1" fill="#329E7A" />
      <rect x="15.2" y="17.2" width="2.4" height="6.5" rx="1" fill="#329E7A" />
      <rect x="18.9" y="14.8" width="2.4" height="8.9" rx="1" fill="#46B992" />

      {/* Amber magnifying glass */}
      <circle cx="26.2" cy="18.4" r="3.9" stroke="url(#tg-glass)" strokeWidth="2.2" />
      <path d="M29.1 21.3L31.9 24.1" stroke="url(#tg-glass)" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

interface BrandMarkProps {
  variant?: 'dark-bg' | 'light-bg';
  size?: 'sm' | 'md';
}

export function BrandMark({variant = 'dark-bg', size = 'sm'}: BrandMarkProps) {
  const iconSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const textSize = size === 'sm' ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl';
  const textColor = variant === 'dark-bg' ? 'text-[#FBF5EC]' : 'text-[#071514]';

  return (
    <span className="inline-flex items-center gap-2.5 shrink-0">
      <ThreadgistMark className={`${iconSize} shrink-0`} />
      <span
        className={`font-display font-semibold tracking-tight whitespace-nowrap ${textSize} ${textColor}`}
      >
        Threadgist
      </span>
    </span>
  );
}
