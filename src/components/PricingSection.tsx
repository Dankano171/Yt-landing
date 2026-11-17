import React from 'react';
import {useRouter} from '../lib/router';

export function PricingSection() {
  const {goToSignup} = useRouter();

  return (
    <section
      id="founding-customers"
      aria-labelledby="founding-customers-heading"
      className="py-14 sm:py-20 border-t border-[#E7E1D6]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#E7E1D6] bg-white p-6 sm:p-10 text-left sm:text-center">
          <p className="text-sm font-semibold text-[#1B6B52]">Early access</p>
          <h2
            id="founding-customers-heading"
            className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#071514]"
          >
            Founding customers
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#071514]/85">
            Start with a free sample report for your channel. After you&apos;ve seen it, we&apos;ll share founding pricing. No credit card.
          </p>
          <div className="mt-7">
            <button
              type="button"
              onClick={goToSignup}
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#E9A94B] px-6 py-3 text-base font-semibold text-[#071514] hover:bg-[#efba68] transition-colors cursor-pointer"
            >
              Get a free sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
