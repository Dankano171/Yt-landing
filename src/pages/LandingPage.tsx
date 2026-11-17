import React from 'react';
import {ArrowUpRight, ShieldCheck} from 'lucide-react';
import {ThreadgistMark} from '../components/BrandMark';
import {FaqSection} from '../components/FaqSection';
import {PhoneEmailPreview} from '../components/PhoneEmailPreview';
import {PricingSection} from '../components/PricingSection';
import {WaitlistForm} from '../components/WaitlistForm';
import {Link, useRouter} from '../lib/router';

const REPORT_SECTIONS = [
  {
    letter: 'A',
    badgeClass: 'bg-[#E9A94B] text-[#071514]',
    title: 'No written reply yet',
    description: 'Viewers waiting on an answer from you.',
  },
  {
    letter: 'B',
    badgeClass: 'bg-[#329E7A] text-[#071514]',
    title: 'Requests and ideas',
    description: 'What viewers ask you to make, sell, or explain next.',
  },
  {
    letter: 'C',
    badgeClass: 'bg-[#B45339] text-white',
    title: 'Concerns to address',
    description: 'Friction points worth a pinned reply or clearer note.',
  },
  {
    letter: 'D',
    badgeClass: 'bg-[#1B6B52] text-white',
    title: 'What viewers loved',
    description: 'Moments and products viewers praised in their own words.',
  },
  {
    letter: 'E',
    badgeClass: 'bg-[#071514] text-[#FBF5EC]',
    title: 'Questions you already answered',
    description: 'Repeated questions ready to pin or add to your description.',
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'We read your public comments through the official YouTube API',
    detail: 'Just share your public channel URL. No login or channel access needed.',
  },
  {
    number: '02',
    title: 'We sort them into what to answer, what to make, and what to fix',
    detail: 'Every item keeps the original quote and links straight back to YouTube.',
  },
  {
    number: '03',
    title: 'You get a short report you can read in five minutes',
    detail: 'Delivered weekly by email so nothing important stays buried.',
  },
];

const TRUST_LIMITS = [
  {
    title: 'Strictly read-only',
    detail: 'We never post, reply, like or delete anything on your channel.',
  },
  {
    title: 'No login or password needed',
    detail: 'You never connect your Google account or share credentials.',
  },
  {
    title: 'Public comments only',
    detail: 'Private Studio metrics, member posts, and drafts are never touched.',
  },
  {
    title: 'Direct links for verification',
    detail:
      'Summaries are AI-assisted and can contain mistakes, so each item links to the original comment.',
  },
  {
    title: 'Creator hearts are not visible',
    detail:
      'Hearts from creators are not visible to us, so "no written reply" means no typed reply.',
  },
];

export function LandingPage() {
  const {goToSignup} = useRouter();

  return (
    <main>
      {/* 2. Hero */}
      <section className="relative overflow-hidden bg-[#071514] text-[#FBF5EC]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-[#329E7A]/20 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-3xl font-semibold leading-[1.14] tracking-tight text-[#FBF5EC] sm:text-5xl">
                Know what your audience is telling you.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#FBF5EC]/85 sm:text-lg">
                A short weekly report from your public YouTube comments: who is waiting on an answer, what viewers are asking for, and what they are pushing back on.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={goToSignup}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#E9A94B] px-6 py-3 text-base font-semibold text-[#071514] hover:bg-[#efba68] transition-colors cursor-pointer"
                >
                  Get a free sample report
                </button>

                <Link
                  to="/sample"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-base font-medium text-[#FBF5EC] hover:border-white/45 hover:bg-white/10 transition-colors"
                >
                  See an example
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm text-[#FBF5EC]/75">
                <span>Read-only</span>
                <span aria-hidden="true" className="text-[#329E7A]">·</span>
                <span>Public comments only</span>
                <span aria-hidden="true" className="text-[#329E7A]">·</span>
                <span>Every finding links to the original comment</span>
              </div>
            </div>

            {/* Clean editorial report digest preview instead of a large standalone logo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E7E1D6] bg-[#FBF5EC] p-5 text-[#071514]">
                <div className="flex items-center justify-between gap-3 border-b border-[#E7E1D6] pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <ThreadgistMark className="h-7 w-7 shrink-0" />
                    <div>
                      <p className="font-display text-sm font-semibold text-[#071514]">
                        Weekly audience report
                      </p>
                      <p className="text-xs text-[#071514]/65">
                        Example · Northwind Pottery
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#1B6B52] tabular-nums">
                    5 min read
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-[#E7E1D6] bg-white p-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[#1B6B52]">
                        A · No written reply yet
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#071514]/70">
                        Open on YouTube <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-snug text-[#071514]">
                      “Do you know roughly when the next batch of 12 oz speckled mugs goes up in your shop?”
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E7E1D6] bg-white p-3.5">
                    <span className="text-xs font-semibold text-[#1B6B52]">
                      B · Requests and ideas
                    </span>
                    <p className="mt-1 text-sm leading-snug text-[#071514]">
                      “Could you film a full trimming session on wide soup bowls?”
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E7E1D6] bg-white p-3.5">
                    <span className="text-xs font-semibold text-[#B45339]">
                      C · Concerns to address
                    </span>
                    <p className="mt-1 text-sm leading-snug text-[#071514]">
                      Two viewers asked about international shipping rates at checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem */}
      <section aria-labelledby="problem-heading" className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-left sm:text-center">
          <p className="text-sm font-semibold text-[#1B6B52]">Why Threadgist exists</p>
          <h2
            id="problem-heading"
            className="mt-2 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#071514]"
          >
            Important questions get buried under the volume
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#071514]/80">
            Creators get thousands of comments and can only read a fraction. Questions about buying, access and next videos get buried.
          </p>
        </div>
      </section>

      {/* 4. How it works */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="py-14 sm:py-20 border-t border-[#E7E1D6]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#1B6B52]">How it works</p>
            <h2
              id="how-it-works-heading"
              className="mt-2 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#071514]"
            >
              From public comments to a five-minute read
            </h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <li key={step.number} className="border-t-2 border-[#1B6B52]/30 pt-5">
                <span className="font-display text-lg font-semibold text-[#1B6B52] tabular-nums">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-[#071514]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#071514]/80">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. What's inside */}
      <section
        id="whats-inside"
        aria-labelledby="whats-inside-heading"
        className="py-14 sm:py-20 border-t border-[#E7E1D6]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#1B6B52]">What is inside</p>
            <h2
              id="whats-inside-heading"
              className="mt-2 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#071514]"
            >
              Five sections in every weekly email
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="divide-y divide-[#E7E1D6] rounded-2xl border border-[#E7E1D6] bg-white">
                {REPORT_SECTIONS.map((item) => (
                  <div key={item.letter} className="flex items-start gap-4 p-5">
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display text-sm font-semibold ${item.badgeClass}`}
                      aria-hidden="true"
                    >
                      {item.letter}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#071514]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm sm:text-base text-[#071514]/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/sample"
                  className="inline-flex min-h-[44px] items-center text-base font-semibold text-[#1B6B52] underline underline-offset-4 hover:text-[#071514]"
                >
                  Read the full sample report
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PhoneEmailPreview />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who it's for */}
      <section
        aria-labelledby="who-its-for-heading"
        className="py-14 sm:py-20 border-t border-[#E7E1D6]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#1B6B52]">Who it is for</p>
              <h2
                id="who-its-for-heading"
                className="mt-2 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#071514]"
              >
                Creators who sell something and want to hear their audience
              </h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#071514]/80">
                Built for channels selling courses, plants, tools, memberships, or services where viewer questions directly affect trust and product decisions.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={goToSignup}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#E9A94B] px-6 py-3 text-base font-semibold text-[#071514] hover:bg-[#efba68] transition-colors cursor-pointer"
              >
                Get a free sample report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trust and limits */}
      <section
        aria-labelledby="trust-limits-heading"
        className="py-14 sm:py-20 bg-[#071514] text-[#FBF5EC]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#329E7A]">Trust and limits</p>
            <h2
              id="trust-limits-heading"
              className="mt-2 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#FBF5EC]"
            >
              Read-only by design, with clear boundaries
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/15 pt-8">
            {TRUST_LIMITS.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-1 h-5 w-5 shrink-0 text-[#329E7A]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#FBF5EC]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#FBF5EC]/75">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Early access */}
      <PricingSection />

      {/* 9. FAQ */}
      <FaqSection />

      {/* 10. Sign-up form */}
      <WaitlistForm />
    </main>
  );
}
