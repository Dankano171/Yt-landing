export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What do you email me?',
    answer:
      'The comment where someone is trying to buy, the video, the link, and a reply you can paste. If we already sent it and you still have not answered three days later, we send that one comment once more.',
  },
  {
    question: 'Will I get an email every day?',
    answer:
      'No. We check every day. We write only when there is a match. A quiet day is silence.',
  },
  {
    question: 'How soon after the comment?',
    answer:
      'The same day as our daily pass, not the minute it is posted. A comment that appears after the pass waits until the next day.',
  },
  {
    question: 'What counts as trying to buy?',
    answer:
      'How to buy, book, or enroll. Whether it is still open or in stock. What is included. Price, payment, shipping, or country. They already paid and cannot get in, log in, or receive it.',
  },
  {
    question: 'What does not count?',
    answer:
      'Praise, general questions, gear questions unless the gear is what you sell, ideas for a future video, complaints that are not about the offer, and people pitching you. Repeated video requests are the weekly note, not the daily email.',
  },
  {
    question: 'Do you need access to my channel?',
    answer: 'No. The public channel URL is enough.',
  },
  {
    question: 'Can you reply for me?',
    answer: 'No. The reply is a draft for you to paste. We never post it.',
  },
  {
    question: 'What is the weekly video?',
    answer:
      'If two or more viewers ask for the same thing that week, we name that one video. We do not send a list of ideas.',
  },
  {
    question: 'What does it cost?',
    answer:
      'The sample on your channel is free. The daily check is paid, and we tell you the price before you pay. No card to see the sample.',
  },
  {
    question: 'Which languages?',
    answer:
      'The email is in English. It works best when most of the comments are in English.',
  },
  {
    question: 'How do I stop?',
    answer: 'Reply to any email and ask. We stop.',
  },
];
