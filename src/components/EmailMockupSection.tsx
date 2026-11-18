import React, {useEffect, useRef, useState} from 'react';
import {Check, Copy, Mail, RotateCcw} from 'lucide-react';
import {SAMPLE_EMAIL} from '../data/sampleReport';
import {Link} from '../lib/router';
import {Reveal} from './Reveal';

export function EmailMockupSection() {
  const fullReply = SAMPLE_EMAIL.newMatch.replyToPaste;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasTriggered, setHasTriggered] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [typedCount, setTypedCount] = useState<number>(() => {
    if (typeof window === 'undefined') return fullReply.length;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? fullReply.length : 0;
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setHasTriggered(true);
      setTypedCount(fullReply.length);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasTriggered(true);
            observer.disconnect();
            break;
          }
        }
      },
      {threshold: 0.25}
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasTriggered, fullReply.length]);

  useEffect(() => {
    if (!hasTriggered) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTypedCount(fullReply.length);
      return;
    }

    if (typedCount >= fullReply.length) return;
    const timer = window.setTimeout(() => {
      setTypedCount((prev) => Math.min(prev + 3, fullReply.length));
    }, 18);
    return () => window.clearTimeout(timer);
  }, [hasTriggered, typedCount, fullReply.length]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullReply);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleReplay = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    setTypedCount(0);
    setHasTriggered(true);
  };

  const isTyping = hasTriggered && typedCount < fullReply.length;
  const visibleReply = fullReply.slice(0, typedCount);

  return (
    <section
      id="email-preview"
      aria-labelledby="email-preview-heading"
      className="py-20 sm:py-28 border-t border-[#E5DFD3]"
    >
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
            Inbox Preview
          </p>
          <h2
            id="email-preview-heading"
            className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#1A1A1A]"
          >
            See exactly what hits your inbox.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#1A1A1A]/75">
            One clean email when a buyer comment needs you, with the exact words to paste back into YouTube.
          </p>
        </Reveal>

        <Reveal delayMs={100} className="mt-12">
          <div
            ref={containerRef}
            className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#E5DFD3] bg-white shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
          >
            {/* Mail app chrome */}
            <div className="flex items-center justify-between gap-4 border-b border-[#E5DFD3] bg-[#F9F6F0] px-5 py-3.5">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#E5DFD3]" />
                <span className="h-3 w-3 rounded-full bg-[#E5DFD3]" />
                <span className="h-3 w-3 rounded-full bg-[#E5DFD3]" />
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1A1A1A]/65">
                <Mail className="h-3.5 w-3.5 text-[#1B6B52]" aria-hidden="true" />
                <span>Inbox · Harbor Cohort (invented sample)</span>
              </div>
              <button
                type="button"
                onClick={handleReplay}
                aria-label="Replay typing preview"
                className="inline-flex min-h-[44px] items-center gap-1 rounded-lg px-2 text-xs font-medium text-[#1A1A1A]/65 hover:text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Replay</span>
              </button>
            </div>

            {/* Email message metadata */}
            <div className="border-b border-[#E5DFD3] px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                  {SAMPLE_EMAIL.subject}
                </h3>
                <span className="text-xs font-medium text-[#1A1A1A]/55">Daily pass · 8:00 AM</span>
              </div>
              <p className="mt-1.5 text-sm text-[#1A1A1A]/65">
                From <span className="font-medium text-[#1A1A1A]">{SAMPLE_EMAIL.from}</span> to You
              </p>
            </div>

            {/* Email body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#1B6B52]">
                  New buyer comment
                </span>
                <blockquote className="mt-2 font-display text-2xl sm:text-[28px] font-medium leading-[1.3] text-[#1A1A1A]">
                  “{SAMPLE_EMAIL.newMatch.quote}”
                </blockquote>
                <p className="mt-2.5 text-sm text-[#1A1A1A]/70">
                  On <span className="font-medium text-[#1A1A1A]">{SAMPLE_EMAIL.newMatch.videoTitle}</span>, {SAMPLE_EMAIL.newMatch.postedWhen}. {SAMPLE_EMAIL.newMatch.statusNote}
                </p>
              </div>

              {/* Highlighted Draft Reply with Copy button & typing animation */}
              <div className="rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                    Draft Reply
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
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

                <p className="mt-3 min-h-[4.5rem] text-base leading-relaxed text-[#1A1A1A]">
                  {visibleReply}
                  {isTyping && (
                    <span
                      aria-hidden="true"
                      className="ml-0.5 inline-block h-4 w-0.5 align-middle bg-[#1A1A1A] animate-pulse"
                    />
                  )}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5DFD3] pt-4 text-sm">
                <Link
                  to="/sample"
                  className="inline-flex min-h-[44px] items-center font-semibold text-[#1B6B52] underline underline-offset-4 hover:text-[#1A1A1A]"
                >
                  Open the comment
                </Link>
                <span className="text-xs text-[#1A1A1A]/60">
                  {SAMPLE_EMAIL.inventedNote}
                </span>
              </div>

              {/* Secondary items inside the email */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-[#F9F6F0] p-4 sm:p-5 space-y-2 text-sm text-[#1A1A1A]/80">
                <p>
                  <span className="font-semibold text-[#1A1A1A]">Still unanswered. </span>
                  {SAMPLE_EMAIL.stillUnanswered.statusNote}
                </p>
                <p>
                  <span className="font-semibold text-[#1B6B52]">{SAMPLE_EMAIL.weeklyVideo.label} </span>
                  {SAMPLE_EMAIL.weeklyVideo.text}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
