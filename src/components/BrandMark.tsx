import React from 'react';

export const LOGO_IMAGE_SRC = '/assets/aistudio/file_00000000f76881f4814b42d068c96476_00eadb4d.png';

interface BrandMarkProps {
  variant?: 'dark-bg' | 'light-bg';
  size?: 'sm' | 'lg';
}

export function BrandMark({variant = 'light-bg', size = 'sm'}: BrandMarkProps) {
  const textColor = variant === 'dark-bg' ? 'text-[#F9F6F0]' : 'text-[#1A1A1A]';
  const imgSize = size === 'lg' ? 'h-11 w-auto' : 'h-8 sm:h-9 w-auto';
  const textSize = size === 'lg' ? 'text-2xl' : 'text-[18px] sm:text-xl';

  return (
    <span className="inline-flex items-center gap-2.5 shrink-0">
      <img
        src={LOGO_IMAGE_SRC}
        alt="Threadgist logo"
        className={`${imgSize} rounded-lg object-contain shrink-0`}
        decoding="async"
        referrerPolicy="no-referrer"
      />
      <span
        className={`font-display font-semibold tracking-tight whitespace-nowrap ${textSize} ${textColor}`}
      >
        Threadgist
      </span>
    </span>
  );
}
