import React, {useState} from 'react';
import {ChevronDown, Mail} from 'lucide-react';
import {FAQ_ITEMS} from '../data/faq';
import {useRouter} from '../lib/router';
import {Reveal} from './Reveal';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const {goToSignup} = useRouter();

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 border-t border-[#E5DFD3]"
    >
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
            Questions
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-[#1A1A1A]"
          >
            Everything you might ask first.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E5DFD3] bg-white transition-colors hover:border-[#1A1A1A]/25"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleIndex(idx)}
                    className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 sm:px-6 text-left text-base sm:text-lg font-semibold text-[#1A1A1A] cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#1A1A1A]/65 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 sm:px-6 text-base leading-relaxed text-[#1A1A1A]/75"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#E5DFD3] bg-white p-6">
          <div>
            <p className="font-semibold text-[#1A1A1A]">Still have a question?</p>
            <p className="text-sm text-[#1A1A1A]/70">
              Write directly to the founder or request a sample for your channel.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:hello@threadgist.io"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#E5DFD3] bg-[#F9F6F0] px-4 py-2.5 text-sm font-semibold text-[#1A1A1A] hover:border-[#1A1A1A]/35 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#1B6B52]" aria-hidden="true" />
              <span>Email us</span>
            </a>
            <button
              type="button"
              onClick={goToSignup}
              className="btn-primary-glow inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#F59E0B] px-4 py-2.5 text-sm font-semibold text-[#1A1A1A] cursor-pointer"
            >
              Get a free sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
