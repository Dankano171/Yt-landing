import React from 'react';
import {Link} from '../lib/router';

export function NotFoundPage() {
  return (
    <main className="bg-[#FBF5EC] text-[#071514] py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold text-[#1B6B52] tabular-nums">404</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#071514]">
          Page not found
        </h1>
        <p className="mt-4 text-base text-[#071514]/80">
          The page you asked for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#E9A94B] px-5 py-2.5 text-sm font-semibold text-[#071514] hover:bg-[#efba68] transition-colors"
          >
            Go to home page
          </Link>
          <Link
            to="/sample"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#E7E1D6] bg-white px-5 py-2.5 text-sm font-medium text-[#071514] hover:border-[#071514]/35 transition-colors"
          >
            View sample report
          </Link>
        </div>
      </div>
    </main>
  );
}
