export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What exactly do you read?',
    answer:
      'We read public comments and public reply threads on your recent YouTube videos using the official YouTube Data API. We do not read private Studio analytics, member-only posts, DMs, or revenue data.',
  },
  {
    question: 'Do you need access to my channel?',
    answer:
      'No. You do not connect your Google account, share a password, or grant channel permissions. You only give us your public YouTube channel URL.',
  },
  {
    question: 'Can you reply for me?',
    answer:
      'No. Threadgist is strictly read-only. We never post comments, reply to viewers, heart comments, or delete anything on your channel. Every item in your report links straight to the original YouTube comment so you can reply yourself.',
  },
  {
    question: 'How accurate is it?',
    answer:
      'Summaries and sorting are AI-assisted and can contain mistakes. Because of that, we quote the original viewer comment word for word and include a direct link back to YouTube on every item so you can check the context before acting.',
  },
  {
    question: 'How often do I get the report?',
    answer:
      'Once a week by email, covering public comments left on your videos since the previous issue.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Pricing is being finalized. Requesting a free sample report for your channel does not require a credit card or commitment.',
  },
  {
    question: 'Which languages?',
    answer:
      'Reports are currently written in English and work best on channels where most comments are in English. If your audience leaves comments in other languages, let us know when you request a sample.',
  },
  {
    question: 'How do I stop?',
    answer:
      'Reply to any report email asking to stop, and we will remove your channel from future runs right away.',
  },
];
