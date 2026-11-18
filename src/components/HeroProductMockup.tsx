import React, {useState} from 'react';

export function HeroProductMockup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [highlightComment, setHighlightComment] = useState(false);

  const handleNotificationClick = () => {
    setHighlightComment(true);
    window.setTimeout(() => setHighlightComment(false), 900);
  };

  return (
    <div className="relative flex w-full justify-center lg:justify-end font-sans select-none">
      <div className="relative">
        {/* Ambient Ground Shadow underneath the tall phone to lift it off the cream page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-5 inset-x-6 h-8 rounded-full bg-[#141418]/25 blur-2xl"
        />

        {/* Sleek Tall iPhone-17-Style Hardware Frame */}
        <div className="relative w-[300px] sm:w-[312px] h-[636px] sm:h-[660px] max-w-full rounded-[48px] border border-[#2D2D32] bg-[#111113] p-[8px] shadow-[0_44px_92px_-18px_rgba(17,17,19,0.44),0_20px_42px_-12px_rgba(17,17,19,0.28)] ring-1 ring-white/10">
          {/* Metallic Inner Rim Highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[6px] rounded-[42px] ring-1 ring-white/15"
          />

          {/* Refined, Thinner & Taller Physical Side Buttons */}
          <span
            aria-hidden="true"
            className="absolute -left-[2.5px] top-[98px] h-6 w-[2.5px] rounded-l-full bg-[#3A3A40]"
          />
          <span
            aria-hidden="true"
            className="absolute -left-[2.5px] top-[140px] h-14 w-[2.5px] rounded-l-full bg-[#3A3A40]"
          />
          <span
            aria-hidden="true"
            className="absolute -left-[2.5px] top-[206px] h-14 w-[2.5px] rounded-l-full bg-[#3A3A40]"
          />
          <span
            aria-hidden="true"
            className="absolute -right-[2.5px] top-[160px] h-20 w-[2.5px] rounded-r-full bg-[#3A3A40]"
          />

          {/* Inner Clipped Screen */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[40px] bg-white">
            {/* Compact, Proportional Dynamic Island Cutout */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-2.5 z-[60] flex h-[20px] w-[76px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E293B] ring-1 ring-white/15" />
            </div>

            {/* Top-Screen Push Notification Overlay (z-50, gracefully clearing the Dynamic Island) */}
            <div className="absolute inset-x-3 top-12 z-50">
              {/* Subtle Amber Glow behind notification */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 rounded-2xl bg-[#EAA63E]/30 blur-xl"
              />

              <button
                type="button"
                onClick={handleNotificationClick}
                className="relative w-full rounded-2xl border border-[#EAA63E]/55 bg-white/94 p-3 text-left shadow-[0_14px_34px_-6px_rgba(26,26,26,0.24),0_0_24px_-4px_rgba(234,166,62,0.28)] backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
                aria-label="Threadgist notification: New buyer comment. Someone is trying to buy. You have not answered."
              >
                {/* Notification Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {/* White envelope icon inside a red circle */}
                    <span
                      aria-hidden="true"
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EA4335]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <span className="truncate text-xs font-semibold text-[#1A1A1A]">
                      Threadgist
                    </span>
                  </div>
                  <span className="shrink-0 text-[11px] font-medium text-[#6B7280]">
                    now
                  </span>
                </div>

                {/* Notification Body */}
                <div className="mt-1.5">
                  <p className="text-[12.5px] font-bold leading-snug text-[#1A1A1A]">
                    New buyer comment
                  </p>
                  <p className="mt-0.5 text-[12px] leading-snug text-[#374151]">
                    Someone is trying to buy. You have not answered.
                  </p>
                </div>
              </button>
            </div>

            {/* TOP 40% OF SCREEN: Status Bar + YouTube Mobile Video Player */}
            <div className="relative flex h-[40%] shrink-0 flex-col justify-between bg-gradient-to-br from-[#18181B] via-[#0F0F12] to-[#27272A]">
              {/* Ambient thumbnail lighting */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 bottom-6 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl"
              />

              {/* Mobile Status Bar */}
              <div className="relative z-10 flex h-10 items-center justify-between px-6 pt-0.5 text-[11px] font-semibold text-white/90">
                <span className="tabular-nums">9:41</span>
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <svg viewBox="0 0 16 12" className="h-2.5 w-3.5 fill-current">
                    <rect x="1" y="7" width="2.2" height="4" rx="0.5" />
                    <rect x="4.6" y="5" width="2.2" height="6" rx="0.5" />
                    <rect x="8.2" y="3" width="2.2" height="8" rx="0.5" />
                    <rect x="11.8" y="1" width="2.2" height="10" rx="0.5" />
                  </svg>
                  <svg viewBox="0 0 22 12" className="h-2.5 w-5 fill-current">
                    <rect
                      x="0.5"
                      y="1"
                      width="18"
                      height="10"
                      rx="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <rect x="2.2" y="2.7" width="13.5" height="6.6" rx="1" />
                    <rect x="19.5" y="4" width="1.8" height="4" rx="0.7" />
                  </svg>
                </div>
              </div>

              {/* White YouTube Play Button centered in unobstructed lower half of video */}
              <button
                type="button"
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? 'Pause YouTube video' : 'Play YouTube video'}
                className="group absolute inset-x-0 bottom-7 top-[142px] flex items-center justify-center cursor-pointer focus-visible:outline-none"
              >
                <span className="inline-flex h-11 w-[62px] items-center justify-center rounded-2xl bg-[#FF0000] shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-white">
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                      <rect x="7" y="5.5" width="3.5" height="13" rx="1" />
                      <rect x="13.5" y="5.5" width="3.5" height="13" rx="1" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white" aria-hidden="true">
                      <polygon points="8,5.5 19,12 8,18.5" />
                    </svg>
                  )}
                </span>
              </button>

              {/* Bottom YouTube Time & Red Scrubber Bar */}
              <div className="relative z-10 px-3.5 pb-2.5">
                <div className="mb-1.5 flex items-center justify-between text-[10px] font-medium tabular-nums text-white/80">
                  <span>{isPlaying ? '04:19 · Playing' : '04:18'}</span>
                  <span>12:40</span>
                </div>
                <div className="relative h-1 w-full rounded-full bg-white/25">
                  <div
                    className={`h-full rounded-full bg-[#FF0000] transition-all duration-300 ${
                      isPlaying ? 'w-[42%]' : 'w-[36%]'
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#FF0000] ring-2 ring-white transition-all duration-300 ${
                      isPlaying ? 'left-[41%]' : 'left-[35%]'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM 60% OF SCREEN: YouTube Video Info & Generous Comments Section */}
            <div className="flex flex-1 flex-col bg-white">
              {/* Mobile YouTube Video Title & Channel Row */}
              <div className="border-b border-[#EFEFEF] px-4 py-3.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-sans text-[14px] font-bold leading-snug text-[#0F0F0F]">
                    How to structure your online cohort
                  </p>
                  <svg
                    viewBox="0 0 28 20"
                    className="mt-0.5 h-3.5 w-5 shrink-0"
                    aria-hidden="true"
                  >
                    <rect width="28" height="20" rx="5" fill="#FF0000" />
                    <polygon points="11,5.5 19.5,10 11,14.5" fill="#FFFFFF" />
                  </svg>
                </div>
                <p className="mt-1 text-[11.5px] text-[#606060]">
                  Harbor Cohort · 4.8K views · 6 hours ago
                </p>
              </div>

              {/* Mobile YouTube Comment Section with Extra Vertical Breathing Room */}
              <div className="flex flex-1 flex-col px-4 pt-4 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[13px] font-bold text-[#0F0F0F]">Comments</span>
                    <span className="text-xs font-medium tabular-nums text-[#606060]">148</span>
                  </div>
                  <span className="text-[11px] font-medium text-[#606060]">Top</span>
                </div>

                {/* Alex Chen Unanswered Comment */}
                <div
                  className={`mt-4 rounded-xl p-2 -mx-2 transition-colors duration-300 ${
                    highlightComment ? 'bg-[#EAA63E]/15' : 'bg-transparent'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {/* Orange 'A' Avatar */}
                    <div
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EA580C] text-xs font-bold text-white"
                    >
                      A
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 text-[11.5px]">
                        <span className="font-semibold text-[#0F0F0F]">Alex Chen</span>
                        <span className="text-[#606060]" aria-hidden="true">·</span>
                        <span className="text-[#606060]">4 hours ago</span>
                      </div>

                      <p className="mt-1.5 text-[13px] leading-relaxed text-[#0F0F0F]">
                        Is this course still open? I&apos;d love to join!
                      </p>

                      {/* Standard YouTube Thumbs Up / Down / Reply Buttons (NO creator reply beneath) */}
                      <div className="mt-1.5 flex flex-wrap items-center gap-0.5 text-[#606060]">
                        <button
                          type="button"
                          onClick={() => setLiked((prev) => !prev)}
                          aria-pressed={liked}
                          aria-label="Like comment"
                          className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-2 text-[11.5px] font-medium transition-colors cursor-pointer hover:bg-[#F2F2F2] ${
                            liked ? 'text-[#0F0F0F]' : 'text-[#606060]'
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            fill={liked ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 10v12" />
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                          </svg>
                          <span className="tabular-nums">{liked ? 5 : 4}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setLiked(false)}
                          aria-label="Dislike comment"
                          className="inline-flex min-h-[44px] items-center rounded-full px-2 text-[#606060] transition-colors cursor-pointer hover:bg-[#F2F2F2]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M17 14V2" />
                            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
                          </svg>
                        </button>

                        <button
                          type="button"
                          onClick={handleNotificationClick}
                          className="inline-flex min-h-[44px] items-center gap-1 rounded-full px-2.5 text-[11.5px] font-semibold text-[#0F0F0F] transition-colors cursor-pointer hover:bg-[#F2F2F2]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5 text-[#606060]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Open vertical breathing room showing the comment left unanswered */}
                <div className="mt-auto pt-6 text-center">
                  <span className="text-[11px] font-medium text-[#6B7280]">
                    No reply from channel yet
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom iOS Gesture Bar with Semi-Transparent White Home Indicator */}
            <div
              aria-hidden="true"
              className="flex h-6 shrink-0 items-center justify-center bg-[#0F0F12]"
            >
              <span className="h-1 w-28 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
