import React from 'react';
import {ArrowUpRight} from 'lucide-react';
import {SAMPLE_REPORT} from '../data/sampleReport';
import {Link} from '../lib/router';
import {ThreadgistMark} from './BrandMark';

export function PhoneEmailPreview() {
  const firstSection = SAMPLE_REPORT.sections[0];
  const firstTopic = firstSection.topics[0];
  const firstComment = firstTopic.comments[0];
  const secondSection = SAMPLE_REPORT.sections[1];
  const secondComment = secondSection.topics[0].comments[0];

  return (
    <div className="mx-auto w-full max-w-[350px]">
      <div
        className="rounded-[2.25rem] border-[6px] border-[#071514] bg-[#071514] p-1.5"
        aria-label="Phone preview of the weekly email report using invented sample data"
      >
        {/* Minimal speaker notch */}
        <div className="mx-auto mb-1.5 mt-1 h-1.5 w-16 rounded-full bg-white/20" aria-hidden="true" />

        {/* Email screen */}
        <div className="overflow-hidden rounded-[1.65rem] bg-[#FBF5EC] text-[#071514] border border-[#E7E1D6]">
          {/* Email client header bar */}
          <div className="border-b border-[#E7E1D6] bg-white px-4 py-3">
            <div className="flex items-center justify-between gap-2 text-[11px] text-[#071514]/65">
              <span className="font-medium text-[#071514]">Weekly report · {SAMPLE_REPORT.channelName}</span>
              <span className="tabular-nums">{SAMPLE_REPORT.dateRange.slice(5)}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <ThreadgistMark className="h-5 w-5 shrink-0" />
              <span className="font-display text-xs font-semibold text-[#071514]">Threadgist</span>
              <span aria-hidden="true" className="text-[#071514]/35 text-xs">·</span>
              <span className="text-[11px] text-[#1B6B52] font-medium">Sample preview</span>
            </div>
          </div>

          {/* Email body */}
          <div className="p-4 space-y-4">
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-[#1B6B52]">
                At a glance
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-[#071514]">
                What your audience told you this week
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#071514]/75 tabular-nums">
                {SAMPLE_REPORT.totalComments} public comments across {SAMPLE_REPORT.videosCount} videos
              </p>
            </div>

            {/* Compact metric strip */}
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-[#E7E1D6] bg-white p-2.5 text-center">
              <div>
                <div className="font-display text-base font-semibold text-[#071514] tabular-nums">
                  21
                </div>
                <div className="text-[11px] text-[#071514]/70">Questions</div>
              </div>
              <div className="border-x border-[#E7E1D6]">
                <div className="font-display text-base font-semibold text-[#1B6B52] tabular-nums">
                  11
                </div>
                <div className="text-[11px] text-[#071514]/70">Requests</div>
              </div>
              <div>
                <div className="font-display text-base font-semibold text-[#071514] tabular-nums">
                  4
                </div>
                <div className="text-[11px] text-[#071514]/70">Buying</div>
              </div>
            </div>

            {/* Section A excerpt */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#E7E1D6] pb-1.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#E9A94B] text-[11px] font-bold text-[#071514]">
                    A
                  </span>
                  <span className="font-display text-sm font-semibold text-[#071514]">
                    {firstSection.title}
                  </span>
                </div>
                <span className="text-[11px] text-[#071514]/65 tabular-nums">5 comments</span>
              </div>

              <div className="rounded-xl border border-[#E7E1D6] bg-white p-3 space-y-2">
                <p className="text-xs font-semibold text-[#071514]">
                  {firstTopic.number}. {firstTopic.title}
                </p>
                <p className="text-xs leading-relaxed text-[#071514]/85">
                  “{firstComment.quote}”
                </p>
                <div className="flex items-center justify-between gap-2 pt-1 text-[11px]">
                  <span className="truncate text-[#1B6B52] font-medium">
                    {firstComment.videoTitle}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded bg-[#E9A94B] px-2 py-0.5 font-semibold text-[#071514] shrink-0">
                    Open <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>

            {/* Section B excerpt */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#E7E1D6] pb-1.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#329E7A] text-[11px] font-bold text-[#071514]">
                    B
                  </span>
                  <span className="font-display text-sm font-semibold text-[#071514]">
                    {secondSection.title}
                  </span>
                </div>
                <span className="text-[11px] text-[#071514]/65 tabular-nums">4 comments</span>
              </div>

              <div className="rounded-xl border border-[#E7E1D6] bg-white p-3 space-y-1.5">
                <p className="text-xs leading-relaxed text-[#071514]/85">
                  “{secondComment.quote}”
                </p>
                <p className="text-[11px] text-[#071514]/65 truncate">
                  Video: {secondComment.videoTitle}
                </p>
              </div>
            </div>

            {/* Footer inside phone */}
            <div className="rounded-xl bg-[#071514] p-3 text-[#FBF5EC]">
              <p className="text-[11px] leading-relaxed text-[#FBF5EC]/80">
                Built from public comments only · Read-only · AI-assisted summaries may contain mistakes
              </p>
              <Link
                to="/sample"
                className="mt-2 inline-flex min-h-[44px] items-center text-xs font-semibold text-[#E9A94B] underline underline-offset-4 hover:text-[#FBF5EC]"
              >
                Read the full sample report
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-[#071514]/70">
        Fictional sample channel ({SAMPLE_REPORT.channelName}) with invented comments.
      </p>
    </div>
  );
}
