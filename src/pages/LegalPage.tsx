import React from 'react';
import {ArrowLeft} from 'lucide-react';
import {Link} from '../lib/router';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export function LegalPage({type}: LegalPageProps) {
  const isPrivacy = type === 'privacy';

  return (
    <main className="bg-[#FBF5EC] text-[#071514] py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[#1B6B52] hover:text-[#071514] underline-offset-4 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to home</span>
        </Link>

        <article className="mt-6 rounded-2xl border border-[#E7E1D6] bg-white p-6 sm:p-10 space-y-6">
          <header className="border-b border-[#E7E1D6] pb-6">
            <p className="text-xs font-semibold text-[#1B6B52]">
              Placeholder legal document — replace before launch
            </p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#071514]">
              {isPrivacy ? 'Privacy policy' : 'Terms of service'}
            </h1>
            <p className="mt-2 text-sm text-[#071514]/70">
              Last updated: Placeholder date
            </p>
          </header>

          {isPrivacy ? (
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#071514]/85">
              <p>
                Placeholder copy: Replace this section with your final Threadgist Privacy Policy before opening public billing or onboarding.
              </p>
              <section className="space-y-2">
                <h2 className="font-display text-xl font-semibold text-[#071514]">
                  1. Information we collect from the waitlist form
                </h2>
                <p>
                  Placeholder copy: Describe the fields collected on the sample request form (name, email address, YouTube channel URL, optional description of what you sell, and explicit contact consent) and how they are stored in Supabase.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-xl font-semibold text-[#071514]">
                  2. Public YouTube data
                </h2>
                <p>
                  Placeholder copy: Explain that Threadgist only reads publicly available YouTube comments through the official YouTube Data API and never requests your Google login or private Studio analytics.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-xl font-semibold text-[#071514]">
                  3. Data deletion and contact
                </h2>
                <p>
                  Placeholder copy: Explain how creators can unsubscribe or request removal of their waitlist entry by emailing hello@threadgist.com.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#071514]/85">
              <p>
                Placeholder copy: Replace this section with your final Threadgist Terms of Service before launch.
              </p>
              <section className="space-y-2">
                <h2 className="font-display text-xl font-semibold text-[#071514]">
                  1. Scope of the service
                </h2>
                <p>
                  Placeholder copy: Describe the weekly audience report generated from public YouTube comments and note that Threadgist provides read-only summaries rather than automated replies or channel management.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-xl font-semibold text-[#071514]">
                  2. Accuracy of AI-assisted summaries
                </h2>
                <p>
                  Placeholder copy: State clearly that summaries are AI-assisted, can contain mistakes, and should be verified using the linked original YouTube comments before making business or customer decisions.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-xl font-semibold text-[#071514]">
                  3. Third-party services and disclaimers
                </h2>
                <p>
                  Placeholder copy: Include standard liability terms and note that Threadgist is not affiliated with or endorsed by YouTube or Google.
                </p>
              </section>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
