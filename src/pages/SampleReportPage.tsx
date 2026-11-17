import React from 'react';
import {ArrowLeft, ArrowUpRight, Heart, MessageSquare} from 'lucide-react';
import {ThreadgistMark} from '../components/BrandMark';
import {SAMPLE_REPORT} from '../data/sampleReport';
import {Link, useRouter} from '../lib/router';

const SECTION_BADGE_STYLES: Record<string, string> = {
  A: 'bg-[#E9A94B] text-[#071514]',
  B: 'bg-[#329E7A] text-[#071514]',
  C: 'bg-[#B45339] text-white',
  D: 'bg-[#1B6B52] text-white',
  E: 'bg-[#071514] text-[#FBF5EC]',
};

export function SampleReportPage() {
  const {goToSignup} = useRouter();

  return (
    <main className="bg-[#FBF5EC] text-[#071514]">
      {/* Report top bar */}
      <div className="border-b border-[#E7E1D6] bg-white">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 text-xs sm:text-sm">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#1B6B52] hover:text-[#071514] underline-offset-4 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Threadgist</span>
          </Link>
          <span className="text-[#071514]/70 tabular-nums">
            Fictional sample report · {SAMPLE_REPORT.dateRange}
          </span>
        </div>
      </div>

      {/* Report Cover Banner matching PDF page 1 */}
      <section className="relative overflow-hidden bg-[#071514] text-[#FBF5EC]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[360px] w-[480px] rounded-full bg-[#329E7A]/20 blur-[110px]"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-center gap-3">
            <ThreadgistMark className="h-10 w-10 shrink-0" />
            <span className="text-sm font-medium text-[#329E7A]">
              Weekly audience report (invented sample)
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#FBF5EC]">
            {SAMPLE_REPORT.channelName}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#FBF5EC]/80 tabular-nums">
            {SAMPLE_REPORT.dateRange} · Videos analyzed ({SAMPLE_REPORT.videosCount}):{' '}
            {SAMPLE_REPORT.videosList.map((v, i) => (
              <React.Fragment key={v}>
                “{v}”{i < SAMPLE_REPORT.videosList.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>

          <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="text-xs font-semibold text-[#E9A94B]">
              Biggest buying question
            </p>
            <p className="mt-1.5 font-display text-lg sm:text-xl italic text-[#FBF5EC]">
              Restock timing, dishwasher safety, and course access duration (5 comments)
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#FBF5EC] tabular-nums">
                {SAMPLE_REPORT.totalComments}
              </div>
              <div className="mt-1 text-xs text-[#FBF5EC]/70">Comments analyzed</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#FBF5EC] tabular-nums">
                4
              </div>
              <div className="mt-1 text-xs text-[#FBF5EC]/70">Purchase intent</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#FBF5EC] tabular-nums">
                21
              </div>
              <div className="mt-1 text-xs text-[#FBF5EC]/70">Questions</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-5 text-xs text-[#FBF5EC]/70">
            <span>Prepared for {SAMPLE_REPORT.channelName} · Generated {SAMPLE_REPORT.generatedDate}</span>
            <span className="italic">Know what your audience is telling you.</span>
          </div>
        </div>
      </section>

      {/* Main Report Sheet */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 space-y-14">
        {/* At a glance */}
        <section aria-labelledby="glance-heading" className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-[#1B6B52]">At a glance</p>
            <h2
              id="glance-heading"
              className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#071514]"
            >
              What your audience told you this week
            </h2>
          </div>

          <div className="space-y-3">
            {SAMPLE_REPORT.atAGlance.map((row) => (
              <div
                key={row.index}
                className="flex items-start gap-4 rounded-2xl border border-[#E7E1D6] bg-white p-4 sm:p-5"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FBF5EC] border border-[#E7E1D6] font-display text-sm font-semibold text-[#071514] tabular-nums">
                  {row.index}
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#1B6B52]">{row.label}</p>
                  <p className="mt-0.5 text-sm sm:text-base font-medium text-[#071514]">
                    {row.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick pulse */}
          <div className="pt-2">
            <h3 className="text-xs font-semibold text-[#071514]/70">Quick pulse</h3>
            <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-4 rounded-2xl bg-[#071514] p-6 text-[#FBF5EC] flex flex-col justify-between">
                <p className="text-xs text-[#FBF5EC]/70">Comments analyzed</p>
                <div className="mt-6">
                  <p className="font-display text-4xl font-semibold tabular-nums">
                    {SAMPLE_REPORT.totalComments}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#FBF5EC]/75">
                    Public comments read and classified for this invented sample report
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SAMPLE_REPORT.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-[#E7E1D6] bg-white p-4"
                  >
                    <div className="flex items-baseline gap-2 tabular-nums">
                      <span className="font-display text-xl font-semibold text-[#071514]">
                        {metric.count}
                      </span>
                      <span className="text-xs text-[#1B6B52] font-medium">
                        {metric.percent}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#071514]/75">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contents */}
        <section aria-labelledby="contents-heading" className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-[#1B6B52]">Inside this report</p>
            <h2
              id="contents-heading"
              className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#071514]"
            >
              Contents
            </h2>
          </div>

          <div className="divide-y divide-[#E7E1D6] rounded-2xl border border-[#E7E1D6] bg-white">
            {SAMPLE_REPORT.sections.map((section) => (
              <a
                key={section.letter}
                href={`#section-${section.letter}`}
                className="flex min-h-[64px] items-center justify-between gap-4 px-4 py-4 sm:px-6 hover:bg-[#FBF5EC]/60 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display text-sm font-semibold ${
                      SECTION_BADGE_STYLES[section.letter]
                    }`}
                  >
                    {section.letter}
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-[#071514]">
                      {section.title}
                    </p>
                    <p className="text-xs sm:text-sm text-[#071514]/75">{section.subtitle}</p>
                  </div>
                </div>
                <span className="hidden sm:inline text-xs font-medium text-[#071514]/65 whitespace-nowrap tabular-nums">
                  {section.countSummary}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Detailed Sections A - E */}
        {SAMPLE_REPORT.sections.map((section) => (
          <section
            key={section.letter}
            id={`section-${section.letter}`}
            aria-labelledby={`section-heading-${section.letter}`}
            className="space-y-6 pt-2"
          >
            <div className="border-b border-[#E7E1D6] pb-4">
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg font-display text-sm font-semibold ${
                    SECTION_BADGE_STYLES[section.letter]
                  }`}
                >
                  {section.letter}
                </span>
                <span className="text-xs font-semibold text-[#071514]/70 tabular-nums">
                  Section {section.letter} · {section.countSummary}
                </span>
              </div>
              <h2
                id={`section-heading-${section.letter}`}
                className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-[#071514]"
              >
                {section.title}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-[#071514]/75">{section.subtitle}</p>
            </div>

            <div className="space-y-6">
              {section.topics.map((topic) => (
                <div key={topic.number} className="space-y-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#071514]">
                      <span className="text-[#1B6B52] tabular-nums mr-2">{topic.number}</span>
                      {topic.title}
                    </h3>
                    <span className="text-xs text-[#071514]/70 tabular-nums">
                      {topic.viewerCount} · {topic.commentCount}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {topic.comments.map((comment, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-[#E7E1D6] bg-white p-4 sm:p-5 space-y-3"
                      >
                        <p className="text-sm sm:text-base leading-relaxed text-[#071514]">
                          “{comment.quote}”
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
                          <div className="flex flex-wrap items-center gap-3 text-[#1B6B52] font-medium">
                            <span>Video: {comment.videoTitle}</span>
                            {typeof comment.likes === 'number' && (
                              <span className="inline-flex items-center gap-1 text-[#071514]/70 tabular-nums">
                                <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                                {comment.likes} likes
                              </span>
                            )}
                            {comment.hasCreatorReply && (
                              <span className="inline-flex items-center gap-1 text-[#1B6B52]">
                                <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                                Creator replied
                              </span>
                            )}
                          </div>

                          <a
                            href={comment.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[36px] items-center gap-1 rounded-lg bg-[#E9A94B] px-3 py-1.5 font-semibold text-[#071514] hover:bg-[#efba68] transition-colors"
                          >
                            <span>Open on YouTube</span>
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {topic.suggestedMove && (
                    <div className="rounded-xl border border-[#E9A94B]/40 bg-[#E9A94B]/12 px-4 py-3 text-sm text-[#071514]">
                      <span className="block text-xs font-semibold text-[#071514]/75">
                        Suggested move
                      </span>
                      <span className="mt-0.5 block">{topic.suggestedMove}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {section.moreCount && (
              <p className="text-xs font-medium text-[#071514]/65 tabular-nums">
                Plus {section.moreCount} more items in the full weekly issue
              </p>
            )}
          </section>
        ))}

        {/* About this report card matching PDF page 10 */}
        <section
          aria-labelledby="about-report-heading"
          className="rounded-2xl bg-[#071514] p-6 sm:p-8 text-[#FBF5EC]"
        >
          <div className="flex items-center gap-3">
            <ThreadgistMark className="h-10 w-10 shrink-0" />
            <div>
              <h2 id="about-report-heading" className="font-display text-xl font-semibold">
                About this report
              </h2>
              <p className="text-xs italic text-[#FBF5EC]/75">
                Know what your audience is telling you.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-white/15 pt-6 text-sm">
            <div>
              <h3 className="font-semibold text-[#329E7A]">Read-only by design</h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#FBF5EC]/80">
                Built from public comments pulled with an API key. No write access to your channel, no auto-reply bots.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#E9A94B]">One tap to the comment</h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#FBF5EC]/80">
                Every quote links straight to the original comment on YouTube, so you can reply where it happened.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#329E7A]">Your judgment first</h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#FBF5EC]/80">
                Summaries are AI-assisted and may contain mistakes. Creator hearts are not visible, so "no written reply" means no typed answer.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-2xl border border-[#E7E1D6] bg-white p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#071514]">
              Want a free sample report for your channel?
            </h2>
            <p className="mt-1 text-sm text-[#071514]/75">
              Share your public YouTube channel URL and we will send you a sample built from your recent comments.
            </p>
          </div>
          <button
            type="button"
            onClick={goToSignup}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#E9A94B] px-5 py-3 text-sm sm:text-base font-semibold text-[#071514] hover:bg-[#efba68] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a free sample report
          </button>
        </section>
      </div>
    </main>
  );
}
