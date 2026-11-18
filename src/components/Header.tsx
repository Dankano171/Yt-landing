import React from 'react';
import {Link, useRouter} from '../lib/router';
import {BrandMark} from './BrandMark';

export function Header() {
  const {pathname, goToSignup} = useRouter();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const target = document.getElementById(id);
      if (target) {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'start'});
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F9F6F0]/90 backdrop-blur-md border-b border-[#E5DFD3]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center rounded-lg"
          aria-label="Threadgist home"
        >
          <BrandMark variant="light-bg" size="sm" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1A1A1A]/80">
          <a
            href="/#how-it-works"
            onClick={(e) => handleAnchor(e, 'how-it-works')}
            className="hover:text-[#1A1A1A] underline-offset-4 hover:underline whitespace-nowrap shrink-0"
          >
            How it works
          </a>
          <a
            href="/#email-preview"
            onClick={(e) => handleAnchor(e, 'email-preview')}
            className="hover:text-[#1A1A1A] underline-offset-4 hover:underline whitespace-nowrap shrink-0"
          >
            Preview
          </a>
          <Link
            to="/sample"
            aria-current={pathname === '/sample' ? 'page' : undefined}
            className={`hover:text-[#1A1A1A] underline-offset-4 hover:underline whitespace-nowrap shrink-0 ${
              pathname === '/sample' ? 'text-[#1A1A1A] font-semibold underline' : ''
            }`}
          >
            Sample
          </Link>
          <a
            href="/#faq"
            onClick={(e) => handleAnchor(e, 'faq')}
            className="hover:text-[#1A1A1A] underline-offset-4 hover:underline whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/sample"
            className="md:hidden inline-flex min-h-[44px] items-center px-2 text-sm font-medium text-[#1A1A1A] underline-offset-4 hover:underline whitespace-nowrap shrink-0"
          >
            Sample
          </Link>

          <button
            type="button"
            onClick={goToSignup}
            className="btn-primary-glow inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#F59E0B] px-3.5 sm:px-5 py-2 text-[13px] sm:text-sm font-semibold text-[#1A1A1A] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a free sample
          </button>
        </div>
      </div>
    </header>
  );
}
