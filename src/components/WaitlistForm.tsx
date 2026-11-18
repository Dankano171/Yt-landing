import React, {useState} from 'react';
import {CheckCircle2} from 'lucide-react';
import {trackEvent} from '../lib/analytics';
import {Link} from '../lib/router';
import {Reveal} from './Reveal';

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
      next.consent = 'Please check the box to agree to be contacted about the sample.';
    }

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
          general: 'Something went wrong. Please email hello@threadgist.io.',
        });
        return;
      }

      setSubmitted(true);
      trackEvent('waitlist_submitted');
    } catch {
      setErrors({
        general: 'Something went wrong. Please email hello@threadgist.io.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="signup"
      aria-labelledby="signup-heading"
      className="py-20 sm:py-28 border-t border-[#E5DFD3]"
    >
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1B6B52]">
            Free sample
          </p>
          <h2
            id="signup-heading"
            className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-[#1A1A1A]"
          >
            We’ll run your latest videos and send what we find.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#1A1A1A]/75">
            Send the public channel URL. We read recent public comments and email you the buyer comments that have no reply, with a draft you can paste. If there are none, we say so. That is the sample.
          </p>
        </Reveal>

        <Reveal delayMs={100} className="mt-10">
          <div className="rounded-3xl border border-[#E5DFD3] bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
            {submitted ? (
              <div role="status" aria-live="polite" className="py-8 text-center space-y-4">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1B6B52]/10 text-[#1B6B52]">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#1A1A1A]">
                  Request received
                </h3>
                <p className="text-base leading-relaxed text-[#1A1A1A]/80">
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

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="waitlist-name"
                      className="block text-sm font-semibold text-[#1A1A1A]"
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
                      className={`mt-1.5 block w-full min-h-[48px] rounded-xl border bg-[#F9F6F0]/60 px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#1A1A1A] focus:bg-white focus:outline-none ${
                        errors.name ? 'border-[#B91C1C]' : 'border-[#E5DFD3]'
                      }`}
                    />
                    {errors.name && (
                      <p id="error-name" role="alert" className="mt-1.5 text-sm text-[#B91C1C]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-email"
                      className="block text-sm font-semibold text-[#1A1A1A]"
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
                      className={`mt-1.5 block w-full min-h-[48px] rounded-xl border bg-[#F9F6F0]/60 px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#1A1A1A] focus:bg-white focus:outline-none ${
                        errors.email ? 'border-[#B91C1C]' : 'border-[#E5DFD3]'
                      }`}
                    />
                    {errors.email && (
                      <p id="error-email" role="alert" className="mt-1.5 text-sm text-[#B91C1C]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="waitlist-channel"
                    className="block text-sm font-semibold text-[#1A1A1A]"
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
                    className={`mt-1.5 block w-full min-h-[48px] rounded-xl border bg-[#F9F6F0]/60 px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#1A1A1A] focus:bg-white focus:outline-none ${
                      errors.channel_url ? 'border-[#B91C1C]' : 'border-[#E5DFD3]'
                    }`}
                  />
                  {errors.channel_url && (
                    <p id="error-channel" role="alert" className="mt-1.5 text-sm text-[#B91C1C]">
                      {errors.channel_url}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="waitlist-sells"
                    className="block text-sm font-semibold text-[#1A1A1A]"
                  >
                    What you sell <span className="font-normal text-[#1A1A1A]/60">(optional)</span>
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
                    placeholder="Course, cohort, coaching, or service"
                    className={`mt-1.5 block w-full min-h-[48px] rounded-xl border bg-[#F9F6F0]/60 px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#1A1A1A] focus:bg-white focus:outline-none ${
                      errors.what_you_sell ? 'border-[#B91C1C]' : 'border-[#E5DFD3]'
                    }`}
                  />
                  {errors.what_you_sell && (
                    <p id="error-sells" role="alert" className="mt-1.5 text-sm text-[#B91C1C]">
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
                      className="mt-1 h-5 w-5 rounded border-[#E5DFD3] accent-[#1A1A1A] shrink-0 cursor-pointer"
                    />
                    <span className="text-sm leading-relaxed text-[#1A1A1A]/80">
                      I agree to be contacted about the sample
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="error-consent" role="alert" className="mt-1 text-sm text-[#B91C1C]">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {errors.general && (
                  <div
                    role="alert"
                    className="rounded-xl border border-[#B91C1C]/30 bg-[#B91C1C]/5 p-4 text-sm text-[#B91C1C]"
                  >
                    {errors.general}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary-glow inline-flex w-full min-h-[56px] items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-4 text-lg font-bold text-[#1A1A1A] disabled:opacity-60 cursor-pointer"
                >
                  {submitting ? 'Sending request...' : 'Get a free sample'}
                </button>

                <div className="space-y-1 text-center pt-1">
                  <p className="text-sm text-[#1A1A1A]/70">
                    No login. No card. One sample, not a subscription yet.
                  </p>
                  <p className="text-sm text-[#1A1A1A]/65">
                    <Link
                      to="/privacy"
                      className="inline-flex min-h-[44px] items-center font-medium text-[#1B6B52] underline underline-offset-4 hover:text-[#1A1A1A]"
                    >
                      Privacy
                    </Link>
                    <span aria-hidden="true" className="mx-2">·</span>
                    <Link
                      to="/terms"
                      className="inline-flex min-h-[44px] items-center font-medium text-[#1B6B52] underline underline-offset-4 hover:text-[#1A1A1A]"
                    >
                      Terms
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
