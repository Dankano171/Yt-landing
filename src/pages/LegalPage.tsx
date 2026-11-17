import React from 'react';
import {ArrowLeft} from 'lucide-react';
import {Link} from '../lib/router';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

const CONTACT_EMAIL = 'hello@threadgist.io';
const LAST_UPDATED = 'November 17, 2026';

const linkClass =
  'font-medium text-[#1B6B52] underline underline-offset-4 hover:text-[#071514] break-words';

function ContactEmail() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
      {CONTACT_EMAIL}
    </a>
  );
}

function EmailUs({children = 'email us'}: {children?: React.ReactNode}) {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
      {children}
    </a>
  );
}

function ExternalLink({href}: {href: string}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {href}
    </a>
  );
}

function Section({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-semibold text-[#071514]">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({children}: {children: React.ReactNode}) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-[#1B6B52]">{children}</ul>;
}

function InShort({items}: {items: React.ReactNode[]}) {
  return (
    <aside
      aria-label="In short"
      className="rounded-xl border border-[#1B6B52]/20 bg-[#1B6B52]/[0.07] p-5 sm:p-6"
    >
      <h2 className="font-display text-lg font-semibold text-[#1B6B52]">In short</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#1B6B52]">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

function PrivacyContent() {
  return (
    <>
      <InShort
        items={[
          'We read public YouTube comments. We never post, reply, like or delete anything on your channel.',
          'Our form asks only for your name, email and channel URL, plus an optional note about what you sell.',
          'We do not sell your data.',
          'You can ask us to delete your data at any time.',
          'AI summaries can be wrong, so every item links to the original comment.',
        ]}
      />

      <Section title="1. Who we are">
        <p>
          Threadgist is a small, independent service run by its founder from Nigeria. You can reach
          us at <ContactEmail />.
        </p>
      </Section>

      <Section title="2. What we collect">
        <Bullets>
          <li>
            From the sample request form: your name, email address, YouTube channel URL, an optional
            note about what you sell, and your consent to be contacted. Our form provider, Web3Forms,
            also records technical details such as your IP address and delivers the submission to our
            inbox.
          </li>
          <li>
            If we contact you first: the business email you list publicly on your YouTube channel,
            your channel name and URL, and a record of our messages (date sent, replies, opt-outs).
          </li>
          <li>
            Public YouTube data: through the official YouTube Data API we read public information
            about a channel, its recent public videos and their public comments (comment text, public
            display name, dates, like counts and links). We never ask for your Google login. We never
            see private Studio analytics, member-only posts, direct messages or revenue.
          </li>
          <li>This site does not use advertising or analytics tools.</li>
        </Bullets>
      </Section>

      <Section title="3. How we use it">
        <Bullets>
          <li>To prepare and send your sample report.</li>
          <li>
            To reply to you and to keep a record of who asked us to stop, so we do not write to you
            again.
          </li>
          <li>To improve how our reports work.</li>
        </Bullets>
        <p>We do not use your data for advertising.</p>
      </Section>

      <Section title="4. Public comments in reports">
        <Bullets>
          <li>Reports quote public comments and link to the original comment on YouTube.</li>
          <li>
            A report goes only to the creator it is about. We never share one creator's report with
            another creator, and we do not publish reports or viewer comments. The examples on this
            website use invented channels and invented comments.
          </li>
          <li>
            If you wrote a public comment and want it removed from our stored data,{' '}
            <EmailUs />. You can also edit or delete your comment on YouTube.
          </li>
          <li>We delete raw YouTube comment data within 30 days of collecting it.</li>
        </Bullets>
      </Section>

      <Section title="5. AI processing">
        <p>
          We use AI services (currently Google's Gemini API) to sort and summarise comment text. This
          means public comment text is sent to that provider. We cannot control how a provider
          handles data under its own terms.
        </p>
        <p>
          AI summaries can contain mistakes, so check the linked original comment before you act on
          anything.
        </p>
      </Section>

      <Section title="6. Who else handles data">
        <Bullets>
          <li>Web3Forms: delivers form submissions to us.</li>
          <li>Google: email (Gmail), YouTube API Services and the Gemini API.</li>
          <li>Netlify: hosts this website.</li>
        </Bullets>
        <p>We do not sell or rent personal data. We may disclose information if the law requires it.</p>
      </Section>

      <Section title="7. YouTube API Services">
        <p>
          Threadgist uses YouTube API Services. By using Threadgist you also agree to the YouTube
          Terms of Service: <ExternalLink href="https://www.youtube.com/t/terms" />
        </p>
        <p>
          Google's privacy policy: <ExternalLink href="https://policies.google.com/privacy" />
        </p>
      </Section>

      <Section title="8. Where data is handled">
        <p>
          We work from Nigeria. Our providers may process data in other countries, including the
          United States.
        </p>
      </Section>

      <Section title="9. How long we keep data">
        <Bullets>
          <li>Form details: up to 12 months, or less if you ask us to delete them.</li>
          <li>
            Outreach records: until you ask us to stop. After you opt out we keep only your email
            address so that we do not contact you again.
          </li>
          <li>Raw YouTube comment data: deleted within 30 days (see section 4).</li>
        </Bullets>
      </Section>

      <Section title="10. Your choices">
        <Bullets>
          <li>
            You can ask to see, correct or delete your data, or ask us to stop emailing you, at any
            time. Reply "stop" to any email from us or write to <ContactEmail />. We reply within 30
            days.
          </li>
          <li>
            Depending on where you live (for example the EU, the UK or Nigeria), you may have extra
            rights under your local data protection law, including the right to complain to your data
            protection authority. We will honour reasonable requests wherever you live.
          </li>
        </Bullets>
      </Section>

      <Section title="11. Security">
        <p>
          This site uses HTTPS. Only the founder can access the data we hold, and the accounts that
          hold it are protected by sign-in.
        </p>
        <p>No system is perfectly secure, so we collect as little as we can.</p>
      </Section>

      <Section title="12. Children">
        <p>Threadgist is not meant for children and we do not knowingly collect data from them.</p>
      </Section>

      <Section title="13. Changes">
        <p>If we change this policy, we will update the date at the top of this page.</p>
      </Section>

      <Section title="14. Contact">
        <p>
          Questions or requests: <ContactEmail />
        </p>
      </Section>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <InShort
        items={[
          'Right now Threadgist offers free sample reports. There are no paid plans and this site takes no payments.',
          'Threadgist is read-only. It never posts, replies, likes or deletes anything on your channel.',
          'AI summaries can be wrong. Check the original comment before you act.',
          'We promise no sales or growth results.',
        ]}
      />

      <Section title="1. What Threadgist is">
        <p>
          Threadgist reads public YouTube comments and writes a short audience report: viewers
          waiting for a reply, requests and ideas, concerns, and what viewers loved.
        </p>
        <p>
          Right now we offer free sample reports only. If paid plans launch, we will show the price
          and the terms before you pay.
        </p>
      </Section>

      <Section title="2. Read-only">
        <p>
          Threadgist never posts, replies, likes, edits or deletes anything on your channel, and
          never asks for your Google login.
        </p>
      </Section>

      <Section title="3. Using the service">
        <Bullets>
          <li>Request reports only for channels you own, manage or are authorised to ask about.</li>
          <li>Give accurate information.</li>
          <li>
            Do not use Threadgist or its reports to harass viewers, identify them, or collect their
            personal information.
          </li>
          <li>Do not overload or misuse the service.</li>
          <li>
            You must also follow the YouTube Terms of Service:{' '}
            <ExternalLink href="https://www.youtube.com/t/terms" />
          </li>
        </Bullets>
      </Section>

      <Section title="4. Samples we send you first">
        <p>
          If we send you a sample report without you asking, it is a one-time courtesy with no
          obligation. Reply "no" to any email from us and we will not write again.
        </p>
      </Section>

      <Section title="5. AI and accuracy">
        <p>
          Summaries are AI-assisted and can contain mistakes. Each item links to the original comment
          so you can check it.
        </p>
        <p>
          You are responsible for deciding what to do with a report, including anything you reply,
          publish or claim. Reports are information, not professional advice.
        </p>
      </Section>

      <Section title="6. Viewers' comments">
        <p>
          Viewers own their comments. Reports are for your own use. If you want to quote a viewer
          publicly, ask them first and follow YouTube's rules.
        </p>
      </Section>

      <Section title="7. Not affiliated">
        <p>Threadgist is not affiliated with or endorsed by YouTube or Google.</p>
      </Section>

      <Section title="8. Availability">
        <p>
          Threadgist depends on services such as the YouTube Data API. We may change, pause or end
          the service at any time, and delays or missing data can happen when those services change
          or fail.
        </p>
      </Section>

      <Section title="9. No guarantees">
        <p>
          The service is provided "as is" and "as available", without warranties of any kind. We do
          not promise any result, including sales, growth or views.
        </p>
      </Section>

      <Section title="10. Limit of liability">
        <p>
          To the extent the law allows, we are not liable for indirect or lost-profit losses. Our
          total liability is limited to what you paid us in the 3 months before the claim. Because
          samples are free, that may be zero.
        </p>
        <p>Nothing here limits liability that cannot be limited by law.</p>
      </Section>

      <Section title="11. Stopping">
        <p>
          You can stop using Threadgist at any time. We may refuse or stop service to anyone who
          breaks these terms.
        </p>
      </Section>

      <Section title="12. Governing law">
        <p>
          These terms are governed by the laws of Nigeria. If there is a problem, please{' '}
          <EmailUs /> first so we can try to resolve it informally.
        </p>
      </Section>

      <Section title="13. Changes">
        <p>If we change these terms, we will update the date at the top of this page.</p>
      </Section>

      <Section title="14. Contact">
        <p>
          Questions: <ContactEmail />
        </p>
      </Section>
    </>
  );
}

export function LegalPage({type}: LegalPageProps) {
  const isPrivacy = type === 'privacy';

  return (
    <main className="bg-[#FBF5EC] text-[#071514] py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[#1B6B52] hover:text-[#071514] underline-offset-4 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to home</span>
        </Link>

        <article className="mt-6 rounded-2xl border border-[#E7E1D6] bg-white p-6 sm:p-10 space-y-6">
          <header className="border-b border-[#E7E1D6] pb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#071514]">
              {isPrivacy ? 'Privacy policy' : 'Terms of service'}
            </h1>
            <p className="mt-2 text-sm text-[#071514]/70">Last updated: {LAST_UPDATED}</p>
          </header>

          <div className="space-y-7 text-sm sm:text-base leading-relaxed text-[#071514]/85">
            {isPrivacy ? <PrivacyContent /> : <TermsContent />}
          </div>
        </article>
      </div>
    </main>
  );
}
