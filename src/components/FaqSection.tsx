import React, {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import {FAQ_ITEMS} from '../data/faq';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-14 sm:py-20 border-t border-[#E7E1D6]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#1B6B52]">Frequently asked questions</p>
          <h2
            id="faq-heading"
            className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#071514]"
          >
            Questions and answers
          </h2>
        </div>

        <div className="mt-8 divide-y divide-[#E7E1D6] rounded-2xl border border-[#E7E1D6] bg-white">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleIndex(idx)}
                    className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 sm:px-6 text-left text-base font-semibold text-[#071514] hover:bg-[#FBF5EC]/60 transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#1B6B52] transition-transform duration-200 ${
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
                  className="px-5 pb-5 sm:px-6 text-sm sm:text-base leading-relaxed text-[#071514]/80"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
