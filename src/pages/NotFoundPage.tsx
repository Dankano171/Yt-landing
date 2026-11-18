import React from 'react';
import {Link} from '../lib/router';

export function NotFoundPage() {
  return (
    <main className="bg-[#F9F6F0] text-[#1A1A1A] py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <p className="text-sm font-semibold text-[#1B6B52] tabular-nums">404</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#1A1A1A]">
          Page not found
        </h1>
        <p className="mt-4 text-base text-[#1A1A1A]/75">
          The page you asked for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-primary-glow inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#F59E0B] px-5 py-2.5 text-sm font-bold text-[#1A1A1A]"
          >
            Go to home page
          </Link>
          <Link
            to="/sample"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#E5DFD3] bg-white px-5 py-2.5 text-sm font-medium text-[#1A1A1A] hover:border-[#1A1A1A]/35 transition-colors"
          >
            See sample email
          </Link>
        </div>
      </div>
    </main>
  );
}
