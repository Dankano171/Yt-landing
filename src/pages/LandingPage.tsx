import React, {useState} from 'react';
import {
  Calendar,
  Check,
  Clock,
  EyeOff,
  Filter,
  Link2,
  Lock,
  MailCheck,
  Radar,
  Shield,
  Video,
  X,
} from 'lucide-react';
import {EmailMockupSection} from '../components/EmailMockupSection';
import {FaqSection} from '../components/FaqSection';
import {Reveal} from '../components/Reveal';
import {WaitlistForm} from '../components/WaitlistForm';
import {Link, useRouter} from '../lib/router';

const HERO_MOCKUP_IMAGE = '/src/assets/images/hero_ui_mockup_1795012738615.jpg';
const PLATFORMS = ['Teachable', 'Kajabi', 'Substack', 'Podia', 'Circle'];

export function LandingPage() {
  const {goToSignup} = useRouter();
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <main className="bg-[#F9F6F0] text-[#1A1A1A]">
      {/* 1. Hero Section (50/50 split) */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Copy */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
                For people who sell from YouTube
              </p>

              <h1 className="mt-4 font-display text-[42px] sm:text-[54px] lg:text-[62px] font-semibold leading-[1.06] tracking-tight text-[#1A1A1A]">
                <span className="block">Someone is trying to buy.</span>
                <span className="block">You have not answered.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#1A1A1A]/75">
                We check your latest videos every day and email you only when a viewer is trying to buy and there is no reply yet, with their words and a reply you can paste.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={goToSignup}
                  className="btn-primary-glow inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#F59E0B] px-7 py-3.5 text-base font-bold text-[#1A1A1A] cursor-pointer"
                >
                  Get a free sample
                </button>

                <Link
                  to="/sample"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-[#E5DFD3] bg-white px-6 py-3.5 text-base font-semibold text-[#1A1A1A] hover:border-[#1A1A1A]/35 transition-colors"
                >
                  See an example
                </Link>
              </div>

              <div className="mt-6 space-y-1.5">
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  Trusted by 500+ course creators
                </p>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/65">
                  Read-only · Public comments only · No Google login · No email on a quiet day
                </p>
              </div>
            </div>

            {/* Right Side: Custom 3D UI Mockup */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px] rounded-3xl border border-[#E5DFD3] bg-white p-2 shadow-[0_24px_60px_rgba(26,26,26,0.10)]">
                {heroImgFailed ? (
                  <div className="aspect-[3/4] w-full rounded-2xl bg-[#F9F6F0] p-6 flex flex-col justify-center gap-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1B6B52]">
                      Buyer comment detected
                    </p>
                    <p className="font-display text-2xl font-semibold text-[#1A1A1A]">
                      “Is the course still open? I would love to join.”
                    </p>
                    <div className="rounded-xl border border-[#E5DFD3] bg-white p-4 text-sm text-[#1A1A1A]/80">
                      Draft reply ready to paste into YouTube.
                    </div>
                  </div>
                ) : (
                  <img
                    src={HERO_MOCKUP_IMAGE}
                    alt="Floating glassmorphism interface showing a YouTube viewer asking if the course is still open transforming into a Threadgist email notification with a drafted reply"
                    className="aspect-[3/4] w-full rounded-2xl object-cover"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgFailed(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof / Platform Marquee */}
      <section aria-label="Platforms creators sell on" className="border-y border-[#E5DFD3] bg-white/60 py-6 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 mb-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A]/50">
            Built for creators selling on
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-marquee items-center gap-12 sm:gap-20">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]/45 select-none whitespace-nowrap px-4"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "The Problem" Section (Dark Charcoal) */}
      <section aria-labelledby="problem-heading" className="bg-[#141414] text-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F59E0B]">
              The problem
            </p>
            <h2
              id="problem-heading"
              className="mt-4 font-display text-3xl sm:text-5xl font-semibold leading-[1.12] tracking-tight text-[#F9F6F0]"
            >
              YouTube Studio will answer if you open it and ask. A buyer comment will not wait.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#F9F6F0]/75">
              YouTube can already summarize a video and search comments by meaning when you open Studio. It does not email you the moment a buyer is ready to pay, and it does not hand you the reply.
            </p>
          </Reveal>

          {/* Studio vs Threadgist comparison */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
            <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-[#F9F6F0]/90">
                    YouTube Studio
                  </span>
                  <span className="text-xs font-medium text-[#F9F6F0]/50">Manual inbox</span>
                </div>
                <ul className="mt-6 space-y-4 text-sm sm:text-base text-[#F9F6F0]/70">
                  <li className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-[#F9F6F0]/45" aria-hidden="true" />
                    <span>Buyer questions get buried under general praise and timestamps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-[#F9F6F0]/45" aria-hidden="true" />
                    <span>Requires logging into Studio and searching threads yourself.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-[#F9F6F0]/45" aria-hidden="true" />
                    <span>No alert when a high-intent comment stays unanswered for days.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delayMs={100} className="rounded-3xl border border-[#F59E0B]/40 bg-[#F9F6F0] p-7 sm:p-8 text-[#1A1A1A] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-[#1A1A1A]">
                    Threadgist
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1B6B52]">
                    Direct email
                  </span>
                </div>
                <ul className="mt-6 space-y-4 text-sm sm:text-base text-[#1A1A1A]/85">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B52]" aria-hidden="true" />
                    <span>Checks your latest 30 days of videos once a day automatically.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B52]" aria-hidden="true" />
                    <span>Emails you only when someone is trying to buy and has no reply.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B52]" aria-hidden="true" />
                    <span>Includes the viewer’s quote, comment link, and a draft reply to paste.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. How It Works (The 3-Step Bento Box) */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
              How it works
            </p>
            <h2
              id="how-it-works-heading"
              className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-[#1A1A1A]"
            >
              One pass a day. An email only when a buyer is waiting.
            </h2>
          </Reveal>

          <div className="relative mt-12">
            {/* Connecting dotted line on desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-14 left-[16%] right-[16%] border-t-2 border-dashed border-[#E5DFD3]"
            />

            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
              {/* Step 1 */}
              <Reveal className="card-lift rounded-3xl border border-[#E5DFD3] bg-white p-7 shadow-[0_12px_32px_rgba(26,26,26,0.05)] flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                    <Link2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1A1A]">
                    Send your URL.
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#1A1A1A]/75">
                    Share your public YouTube channel link. No Google login, OAuth token, or password needed.
                  </p>
                </div>

                {/* Mini UI text input */}
                <div className="mt-6 rounded-xl border border-[#E5DFD3] bg-[#F9F6F0] px-3.5 py-2.5 text-xs font-medium text-[#1A1A1A]/70 flex items-center justify-between gap-2">
                  <span className="truncate">https://youtube.com/@harborcohort</span>
                  <span className="rounded-md bg-[#F59E0B] px-2 py-1 text-[11px] font-bold text-[#1A1A1A] shrink-0">
                    Scan
                  </span>
                </div>
              </Reveal>

              {/* Step 2 */}
              <Reveal delayMs={80} className="card-lift rounded-3xl border border-[#E5DFD3] bg-white p-7 shadow-[0_12px_32px_rgba(26,26,26,0.05)] flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                    <Radar className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1A1A]">
                    We scan daily.
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#1A1A1A]/75">
                    Once every day we check public comments across videos from the last 30 days since our previous pass.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-[#E5DFD3] bg-[#F9F6F0] px-3.5 py-2.5 text-xs text-[#1A1A1A]/75">
                  30-day video window · Unanswered buyer threads only
                </div>
              </Reveal>

              {/* Step 3 */}
              <Reveal delayMs={160} className="card-lift rounded-3xl border border-[#E5DFD3] bg-white p-7 shadow-[0_12px_32px_rgba(26,26,26,0.05)] flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#1A1A1A]">
                    <MailCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1A1A]">
                    You get the buyer.
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#1A1A1A]/75">
                    When someone is trying to buy and has no public reply from your channel, we send their words, link, and a draft reply.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-[#E5DFD3] bg-[#F9F6F0] px-3.5 py-2.5 text-xs text-[#1A1A1A]/75">
                  Quiet days stay silent · Several matches ship in one email
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Email Preview */}
      <EmailMockupSection />

      {/* 6. "Two Checks. Not a report." (2x2 Bento Grid) */}
      <section aria-labelledby="two-checks-heading" className="py-20 sm:py-28 border-t border-[#E5DFD3]">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
              What is inside
            </p>
            <h2
              id="two-checks-heading"
              className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-[#1A1A1A]"
            >
              Two checks. Not a report.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
            <Reveal className="card-lift rounded-3xl border border-[#E5DFD3] bg-white p-7 sm:p-8 shadow-[0_12px_32px_rgba(26,26,26,0.05)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1A1A]">
                Daily
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]">
                <strong className="font-semibold">
                  Viewers trying to start or finish a purchase.
                </strong>{' '}
                <span className="text-[#1A1A1A]/70">
                  How to buy, book, or enroll; whether it is still open; price, payment, shipping, or country; or they already paid and cannot get in. Hearts and other viewers’ replies do not count.
                </span>
              </p>
            </Reveal>

            <Reveal delayMs={60} className="card-lift rounded-3xl border border-[#E5DFD3] bg-white p-7 sm:p-8 shadow-[0_12px_32px_rgba(26,26,26,0.05)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                <Calendar className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1A1A]">
                Three days later
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]">
                <strong className="font-semibold">
                  One calm reminder, then silence.
                </strong>{' '}
                <span className="text-[#1A1A1A]/70">
                  If a buyer comment we sent is still unanswered three days later, we include it once under “Still unanswered.” After that, we never email it again.
                </span>
              </p>
            </Reveal>

            <Reveal delayMs={120} className="card-lift rounded-3xl border border-[#E5DFD3] bg-white p-7 sm:p-8 shadow-[0_12px_32px_rgba(26,26,26,0.05)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                <Video className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1A1A]">
                Weekly
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]">
                <strong className="font-semibold">
                  The one video to film, in their words.
                </strong>{' '}
                <span className="text-[#1A1A1A]/70">
                  If the same request shows up more than once that week, we name it once. If nothing repeated, we do not send a weekly note.
                </span>
              </p>
            </Reveal>

            <Reveal delayMs={180} className="card-lift rounded-3xl border border-[#E5DFD3] bg-[#F9F6F0] p-7 sm:p-8 shadow-[0_8px_24px_rgba(26,26,26,0.04)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#E5DFD3] text-[#1A1A1A]/75">
                <Filter className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1A1A]">
                Zero Noise
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]">
                <strong className="font-semibold">
                  We don’t send you fluff, praise, or unnecessary analytics.
                </strong>{' '}
                <span className="text-[#1A1A1A]/70">
                  No sentiment scores, title ideas, thumbnails, or bloated digests of every comment. Built for creators selling a course, cohort, coaching, or service.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Trust & Limits (Privacy Horizontal Row) */}
      <section aria-labelledby="trust-heading" className="py-16 sm:py-24 border-t border-[#E5DFD3] bg-white/60">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
              Privacy & Limits
            </p>
            <h2
              id="trust-heading"
              className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1A1A1A]"
            >
              Read-only. Public comments. No passwords.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal className="card-lift rounded-2xl border border-[#E5DFD3] bg-white p-6 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
                  Private stays private
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#1A1A1A]/70">
                  No Google login. We never touch Studio analytics, revenue, or member posts.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={80} className="card-lift rounded-2xl border border-[#E5DFD3] bg-white p-6 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                <EyeOff className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
                  Strictly read-only
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#1A1A1A]/70">
                  We never post, reply, like, or delete anything. Every draft is yours to review and paste.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={160} className="card-lift rounded-2xl border border-[#E5DFD3] bg-white p-6 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9F6F0] border border-[#E5DFD3] text-[#1A1A1A]">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
                  Official YouTube API
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#1A1A1A]/70">
                  Public comments only. Every quote links to the original comment, and we never contact viewers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <FaqSection />

      {/* 9. Free Sample Form */}
      <WaitlistForm />
    </main>
  );
}
