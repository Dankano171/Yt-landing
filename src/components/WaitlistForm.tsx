import React, {useState} from 'react';
import {CheckCircle2} from 'lucide-react';
import {trackEvent} from '../lib/analytics';

interface FormErrors {
  name?: string;
  email?: string;
  channel_url?: string;
  what_you_sell?: string;
  consent?: string;
  general?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WEB3FORMS_ACCESS_KEY = '7d816d99-dc5b-42fe-aec6-55e7ce273ef7';

function isValidYouTubeChannelUrl(raw: string): boolean {
  const trimmed = raw.trim();
  const hasValidPrefix =
    trimmed.startsWith('https://www.youtube.com/') ||
    trimmed.startsWith('https://youtube.com/');
  if (!hasValidPrefix || trimmed.length > 300) {
    return false;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.pathname.length > 1;
  } catch {
    return false;
  }
}

export function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [channelUrl, setChannelUrl] = useState('');
  const [whatYouSell, setWhatYouSell] = useState('');
  const [consent, setConsent] = useState(false);
  const [botcheck, setBotcheck] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedChannel = channelUrl.trim();
    const trimmedSells = whatYouSell.trim();

    if (trimmedName.length < 2) {
      next.name = 'Please enter your name.';
    } else if (trimmedName.length > 120) {
      next.name = 'Please keep your name under 120 characters.';
    }

    if (!EMAIL_RE.test(trimmedEmail)) {
      next.email = 'Please enter a valid email address.';
    }

    if (!isValidYouTubeChannelUrl(trimmedChannel)) {
      next.channel_url =
        'Channel URL must start with https://www.youtube.com/ or https://youtube.com/.';
    }

    if (trimmedSells.length > 300) {
      next.what_you_sell = 'Please keep this note under 300 characters.';
    }

    if (!consent) {
      next.consent = 'Please check the box to agree to be contacted about your free sample report.';
    }

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hidden honeypot check: if filled, do not submit
    if (botcheck.trim().length > 0) {
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Threadgist sample request',
          name: name.trim(),
          email: email.trim(),
          channel_url: channelUrl.trim(),
          what_you_sell: whatYouSell.trim(),
          consent: consent ? 'Yes' : 'No',
          botcheck,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        setErrors({
          general: 'Something went wrong. Please email hello@threadgist.com.',
        });
        return;
      }

      setSubmitted(true);
      trackEvent('waitlist_submitted');
    } catch {
      setErrors({
        general: 'Something went wrong. Please email hello@threadgist.com.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="signup"
      aria-labelledby="signup-heading"
      className="py-14 sm:py-20 border-t border-[#E7E1D6]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#1B6B52]">Free sample report</p>
            <h2
              id="signup-heading"
              className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#071514]"
            >
              Get a free sample report for your channel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#071514]/80">
              Send us your public channel URL. We will read your recent public comments through the official YouTube API and email you a sample report.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-[#071514]/80">
              <li>Read-only access using public comments only</li>
              <li>No Google login or channel password required</li>
              <li>No credit card or commitment</li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E7E1D6] bg-white p-6 sm:p-8">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-6 space-y-4"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1B6B52]/10 text-[#1B6B52]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#071514]">
                    Request received
                  </h3>
                  <p className="text-base leading-relaxed text-[#071514]/85">
                    Thanks. We&apos;ll email your sample report to the address you gave.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Hidden honeypot field */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="waitlist-botcheck">Leave this field empty</label>
                    <input
                      id="waitlist-botcheck"
                      name="botcheck"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={botcheck}
                      onChange={(e) => setBotcheck(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-name"
                      className="block text-sm font-semibold text-[#071514]"
                    >
                      Name
                    </label>
                    <input
                      id="waitlist-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({...prev, name: undefined}));
                      }}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      placeholder="Your name"
                      className="mt-1.5 block w-full min-h-[44px] rounded-xl border border-[#E7E1D6] bg-[#FBF5EC]/50 px-3.5 py-2.5 text-base text-[#071514] placeholder:text-[#071514]/40 focus:border-[#1B6B52] focus:bg-white focus:outline-none"
                    />
                    {errors.name && (
                      <p id="error-name" role="alert" className="mt-1.5 text-sm text-[#A83228]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-email"
                      className="block text-sm font-semibold text-[#071514]"
                    >
                      Email
                    </label>
                    <input
                      id="waitlist-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({...prev, email: undefined}));
                      }}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      placeholder="you@example.com"
                      className="mt-1.5 block w-full min-h-[44px] rounded-xl border border-[#E7E1D6] bg-[#FBF5EC]/50 px-3.5 py-2.5 text-base text-[#071514] placeholder:text-[#071514]/40 focus:border-[#1B6B52] focus:bg-white focus:outline-none"
                    />
                    {errors.email && (
                      <p id="error-email" role="alert" className="mt-1.5 text-sm text-[#A83228]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-channel"
                      className="block text-sm font-semibold text-[#071514]"
                    >
                      Channel URL
                    </label>
                    <input
                      id="waitlist-channel"
                      name="channel_url"
                      type="url"
                      inputMode="url"
                      required
                      value={channelUrl}
                      onChange={(e) => {
                        setChannelUrl(e.target.value);
                        if (errors.channel_url)
                          setErrors((prev) => ({...prev, channel_url: undefined}));
                      }}
                      aria-invalid={Boolean(errors.channel_url)}
                      aria-describedby={errors.channel_url ? 'error-channel' : undefined}
                      placeholder="https://www.youtube.com/@yourchannel"
                      className="mt-1.5 block w-full min-h-[44px] rounded-xl border border-[#E7E1D6] bg-[#FBF5EC]/50 px-3.5 py-2.5 text-base text-[#071514] placeholder:text-[#071514]/40 focus:border-[#1B6B52] focus:bg-white focus:outline-none"
                    />
                    {errors.channel_url && (
                      <p id="error-channel" role="alert" className="mt-1.5 text-sm text-[#A83228]">
                        {errors.channel_url}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-sells"
                      className="block text-sm font-semibold text-[#071514]"
                    >
                      What do you sell? <span className="font-normal text-[#071514]/65">(optional)</span>
                    </label>
                    <input
                      id="waitlist-sells"
                      name="what_you_sell"
                      type="text"
                      value={whatYouSell}
                      onChange={(e) => {
                        setWhatYouSell(e.target.value);
                        if (errors.what_you_sell)
                          setErrors((prev) => ({...prev, what_you_sell: undefined}));
                      }}
                      aria-invalid={Boolean(errors.what_you_sell)}
                      aria-describedby={errors.what_you_sell ? 'error-sells' : undefined}
                      placeholder="Courses, plants, tools, memberships, services"
                      className="mt-1.5 block w-full min-h-[44px] rounded-xl border border-[#E7E1D6] bg-[#FBF5EC]/50 px-3.5 py-2.5 text-base text-[#071514] placeholder:text-[#071514]/40 focus:border-[#1B6B52] focus:bg-white focus:outline-none"
                    />
                    {errors.what_you_sell && (
                      <p id="error-sells" role="alert" className="mt-1.5 text-sm text-[#A83228]">
                        {errors.what_you_sell}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-consent"
                      className="flex min-h-[44px] items-start gap-3 py-1 cursor-pointer"
                    >
                      <input
                        id="waitlist-consent"
                        name="consent"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors((prev) => ({...prev, consent: undefined}));
                        }}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? 'error-consent' : undefined}
                        className="mt-1 h-5 w-5 rounded border-[#E7E1D6] accent-[#1B6B52] shrink-0 cursor-pointer"
                      />
                      <span className="text-sm leading-relaxed text-[#071514]/85">
                        I agree to be contacted about my free sample report
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="error-consent" role="alert" className="mt-1 text-sm text-[#A83228]">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {errors.general && (
                    <div
                      role="alert"
                      className="rounded-xl border border-[#A83228]/30 bg-[#A83228]/5 p-3.5 text-sm text-[#A83228]"
                    >
                      {errors.general}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full min-h-[48px] items-center justify-center rounded-xl bg-[#E9A94B] px-5 py-3 text-base font-semibold text-[#071514] hover:bg-[#efba68] disabled:opacity-60 transition-colors cursor-pointer"
                  >
                    {submitting ? 'Sending request...' : 'Get a free sample report'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
