import React from 'react';
import {Link} from '../lib/router';
import {BrandMark} from './BrandMark';

export function Footer() {
  return (
    <footer className="border-t border-[#E7E1D6] bg-[#FBF5EC] text-[#071514]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link to="/" className="inline-flex min-h-[44px] items-center self-start">
              <BrandMark variant="light-bg" size="sm" />
            </Link>
            <p className="text-sm text-[#071514]/75">
              Contact:{' '}
              <a
                href="mailto:hello@threadgist.com"
                className="font-medium text-[#1B6B52] underline underline-offset-4 hover:text-[#071514] inline-flex min-h-[44px] items-center sm:min-h-0"
              >
                hello@threadgist.com
              </a>
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              to="/sample"
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#071514]/85 hover:text-[#1B6B52] underline-offset-4 hover:underline"
            >
              Sample report
            </Link>
            <Link
              to="/privacy"
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#071514]/85 hover:text-[#1B6B52] underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#071514]/85 hover:text-[#1B6B52] underline-offset-4 hover:underline"
            >
              Terms
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-[#E7E1D6] pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[#071514]/70">
          <p>Threadgist is not affiliated with or endorsed by YouTube or Google.</p>
          <p className="tabular-nums">Know what your audience is telling you.</p>
        </div>
      </div>
    </footer>
  );
}
