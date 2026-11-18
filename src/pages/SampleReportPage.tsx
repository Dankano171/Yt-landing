import React, {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {SAMPLE_EMAIL} from '../data/sampleReport';
import {Link, useRouter} from '../lib/router';

export function SampleReportPage() {
  const {goToSignup} = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopyReply = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLE_EMAIL.newMatch.replyToPaste);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="bg-[#F9F6F0] text-[#1A1A1A]">
      <div className="border-b border-[#E5DFD3] bg-white/70">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-2.5 text-sm">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center font-medium text-[#1B6B52] hover:text-[#1A1A1A] underline underline-offset-4"
          >
            Back to Threadgist
          </Link>
          <span className="text-[#1A1A1A]/70">{SAMPLE_EMAIL.label}</span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
            {SAMPLE_EMAIL.label}
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-[#1A1A1A]">
            Sample email
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#1A1A1A]/75">
            {SAMPLE_EMAIL.channelName} · {SAMPLE_EMAIL.channelType}
          </p>
        </div>

        <article
          aria-label="Sample email for Harbor Cohort"
          className="rounded-3xl border border-[#E5DFD3] bg-white p-6 sm:p-8 space-y-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
        >
          <div className="border-b border-[#E5DFD3] pb-4 text-sm leading-relaxed">
            <p className="text-[#1A1A1A]/65">From {SAMPLE_EMAIL.from}</p>
            <p className="mt-0.5 font-semibold text-[#1A1A1A]">{SAMPLE_EMAIL.subject}</p>
          </div>

          <section aria-labelledby="sample-new-heading" className="space-y-3">
            <h2 id="sample-new-heading" className="text-xs font-semibold uppercase tracking-wider text-[#1B6B52]">
              New
            </h2>

            <blockquote className="font-display text-2xl sm:text-[28px] font-medium leading-[1.25] text-[#1A1A1A]">
              “{SAMPLE_EMAIL.newMatch.quote}”
            </blockquote>

            <p className="text-sm text-[#1A1A1A]/70">
              On {SAMPLE_EMAIL.newMatch.videoTitle}, {SAMPLE_EMAIL.newMatch.postedWhen}. {SAMPLE_EMAIL.newMatch.statusNote}
            </p>

            <div className="rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 p-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                  Draft Reply
                </span>
                <button
                  type="button"
                  onClick={handleCopyReply}
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-[#E5DFD3] bg-white px-3.5 py-2 text-xs font-semibold text-[#1A1A1A] hover:border-[#1A1A1A]/35 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#1B6B52]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#1A1A1A]/75" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-base leading-relaxed text-[#1A1A1A]">
                {SAMPLE_EMAIL.newMatch.replyToPaste}
              </p>
            </div>

            <p className="text-sm text-[#1B6B52] font-semibold">Open the comment</p>
          </section>

          <div className="border-t border-[#E5DFD3] pt-5 space-y-2 text-sm text-[#1A1A1A]/80">
            <p>
              <span className="font-semibold text-[#1A1A1A]">Still unanswered. </span>
              “{SAMPLE_EMAIL.stillUnanswered.quote}” — on {SAMPLE_EMAIL.stillUnanswered.videoTitle}, {SAMPLE_EMAIL.stillUnanswered.postedWhen}.
            </p>
            <p>
              <span className="font-semibold text-[#1B6B52]">{SAMPLE_EMAIL.weeklyVideo.label} </span>
              {SAMPLE_EMAIL.weeklyVideo.text}
            </p>
          </div>

          <p className="border-t border-[#E5DFD3] pt-4 text-xs text-[#1A1A1A]/60">
            {SAMPLE_EMAIL.inventedNote}
          </p>
        </article>

        <section className="rounded-3xl border border-[#E5DFD3] bg-white p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between shadow-[0_12px_32px_rgba(26,26,26,0.05)]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1A1A1A]">
              Get a free sample on your own channel
            </h2>
            <p className="mt-1 text-sm text-[#1A1A1A]/70">
              No login. No card. One sample, not a subscription yet.
            </p>
          </div>
          <button
            type="button"
            onClick={goToSignup}
            className="btn-primary-glow inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-3 text-base font-bold text-[#1A1A1A] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a free sample
          </button>
        </section>
      </div>
    </main>
  );
}
