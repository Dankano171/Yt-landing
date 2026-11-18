import React from 'react';
import {Link} from '../lib/router';
import {BrandMark} from './BrandMark';

export function Footer() {
  return (
    <footer className="border-t border-[#E5DFD3] bg-[#F9F6F0] text-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <Link to="/" className="inline-flex min-h-[44px] items-center">
              <BrandMark variant="light-bg" size="lg" />
            </Link>
            <p className="text-sm text-[#1A1A1A]/70">
              <a
                href="mailto:hello@threadgist.io"
                className="font-medium text-[#1B6B52] underline underline-offset-4 hover:text-[#1A1A1A]"
              >
                hello@threadgist.io
              </a>
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium"
          >
            <Link
              to="/sample"
              className="inline-flex min-h-[44px] items-center text-[#1A1A1A]/80 hover:text-[#1A1A1A] underline underline-offset-4"
            >
              Sample
            </Link>
            <Link
              to="/privacy"
              className="inline-flex min-h-[44px] items-center text-[#1A1A1A]/80 hover:text-[#1A1A1A] underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="inline-flex min-h-[44px] items-center text-[#1A1A1A]/80 hover:text-[#1A1A1A] underline underline-offset-4"
            >
              Terms
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-[#E5DFD3] pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-[#1A1A1A]/65">
          <p>Threadgist is not affiliated with or endorsed by YouTube or Google.</p>
          <p>
            We check once a day. We email only when someone is trying to buy and you have not answered.
          </p>
        </div>
      </div>
    </footer>
  );
}
