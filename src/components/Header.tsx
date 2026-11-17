import React from 'react';
import {Link, useRouter} from '../lib/router';
import {BrandMark} from './BrandMark';

export function Header() {
  const {pathname, goToSignup} = useRouter();

  return (
    <header className="w-full bg-[#071514] border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center rounded-lg focus-visible:outline-[#329E7A]"
          aria-label="Threadgist home"
        >
          <BrandMark variant="dark-bg" size="sm" />
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-2 sm:gap-5 shrink-0">
          <Link
            to="/sample"
            aria-current={pathname === '/sample' ? 'page' : undefined}
            className={`inline-flex min-h-[44px] items-center px-2 text-[13px] sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors underline-offset-4 hover:underline ${
              pathname === '/sample'
                ? 'text-[#329E7A] underline'
                : 'text-[#FBF5EC]/90 hover:text-[#FBF5EC]'
            }`}
          >
            Sample report
          </Link>

          <button
            type="button"
            onClick={goToSignup}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#E9A94B] px-3 sm:px-4 py-2 text-[13px] sm:text-sm font-semibold text-[#071514] hover:bg-[#efba68] active:translate-y-px transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a free sample
          </button>
        </nav>
      </div>
    </header>
  );
}
