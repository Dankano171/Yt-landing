export interface SampleComment {
  quote: string;
  videoTitle: string;
  likes?: number;
  hasCreatorReply?: boolean;
  youtubeUrl: string;
}

export interface SampleTopic {
  number: string;
  title: string;
  viewerCount: string;
  commentCount: string;
  comments: SampleComment[];
  suggestedMove?: string;
}

export interface SampleSection {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  title: string;
  subtitle: string;
  countSummary: string;
  accentHex: string;
  topics: SampleTopic[];
  moreCount?: number;
}

export const SAMPLE_REPORT = {
  channelName: 'Northwind Pottery',
  dateRange: '2026-10-12 to 2026-11-09',
  generatedDate: 'November 10, 2026',
  videosCount: 4,
  videosList: [
    'Throwing tall stoneware mugs without wobble',
    'Inside our November kiln unloading',
    'Three glaze tests for beginners',
    'How I pack ceramic mugs for winter shipping',
  ],
  totalComments: 284,
  metrics: [
    {label: 'Questions', count: 21, percent: '7%'},
    {label: 'Praise', count: 148, percent: '52%'},
    {label: 'Viewer tips', count: 67, percent: '24%'},
    {label: 'Requests', count: 11, percent: '4%'},
    {label: 'Objections', count: 4, percent: '1%'},
    {label: 'Noise', count: 19, percent: '7%'},
    {label: 'Suspected bot/promo', count: 2, percent: '1%'},
    {label: 'Purchase intent', count: 4, percent: '1%'},
    {label: 'Creator replied', count: 38, percent: '13%'},
  ],
  atAGlance: [
    {
      index: '1',
      label: 'Buying question waiting',
      text: 'Four viewers asked when speckled coffee mugs restock and whether gift boxes are included (4 comments)',
    },
    {
      index: '2',
      label: 'Recurring friction',
      text: 'Shipping rates to Canada and glaze food-safety details were unclear in the description (3 comments)',
    },
    {
      index: '3',
      label: 'What viewers praised',
      text: 'Step-by-step handle attachment and honest kiln misfire walkthrough (5 comments)',
    },
  ],
  sections: [
    {
      letter: 'A',
      title: 'No written reply yet',
      subtitle: 'Viewers waiting on an answer from you.',
      countSummary: '2 topics · 5 comments',
      accentHex: '#E9A94B',
      topics: [
        {
          number: '01',
          title: 'Questions about restock dates and mug sizing',
          viewerCount: '3 viewers',
          commentCount: '3 comments',
          comments: [
            {
              quote:
                'I have been waiting to order a pair of the 12 oz speckled mugs for my sister. Do you know roughly when the next batch goes up in your shop?',
              videoTitle: 'Inside our November kiln unloading',
              youtubeUrl: 'https://www.youtube.com',
            },
            {
              quote:
                'Are the stoneware mugs microwave and dishwasher safe, or hand-wash only? I looked in the video description and could not find it.',
              videoTitle: 'Throwing tall stoneware mugs without wobble',
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
        {
          number: '02',
          title: 'Course access and beginner clay recommendations',
          viewerCount: '2 viewers',
          commentCount: '2 comments',
          comments: [
            {
              quote:
                'If I join your wheel-throwing course this week, do I keep access through the winter or does it close after six weeks?',
              videoTitle: 'Three glaze tests for beginners',
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
      ],
      moreCount: 3,
    },
    {
      letter: 'B',
      title: 'Requests and ideas',
      subtitle: 'What your audience is asking you to make, sell, or explain next.',
      countSummary: '3 topics · 4 comments',
      accentHex: '#329E7A',
      topics: [
        {
          number: '01',
          title: 'Tutorial request on trimming wide soup bowls',
          viewerCount: '2 viewers',
          commentCount: '2 comments',
          comments: [
            {
              quote:
                'Could you film a full trimming session on wide bowls? Mine always chatter near the foot ring when the clay is leather-hard.',
              videoTitle: 'Throwing tall stoneware mugs without wobble',
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
        {
          number: '02',
          title: 'Request for smaller glaze sample kits',
          viewerCount: '1 viewer',
          commentCount: '1 comment',
          comments: [
            {
              quote:
                'Would you ever sell a three-jar test set of your studio glazes for home kilns? Full pints are too much for a small tabletop kiln.',
              videoTitle: 'Three glaze tests for beginners',
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
        {
          number: '03',
          title: 'Follow-up on recycled clay reclaiming setup',
          viewerCount: '1 viewer',
          commentCount: '1 comment',
          comments: [
            {
              quote:
                'You mentioned plaster bats briefly at the five-minute mark. A short video on how you wedge reclaimed scraps would help a lot.',
              videoTitle: 'Inside our November kiln unloading',
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
      ],
      moreCount: 7,
    },
    {
      letter: 'C',
      title: 'Concerns to address',
      subtitle: 'Objections and friction points worth a pinned reply or clearer note.',
      countSummary: '2 topics · 3 comments',
      accentHex: '#B45339',
      topics: [
        {
          number: '01',
          title: 'Confusion over international shipping costs at checkout',
          viewerCount: '2 viewers',
          commentCount: '2 comments',
          comments: [
            {
              quote:
                'I tried to order two mugs to Toronto and shipping was almost the cost of a third mug. Is there a flat rate for two or more items?',
              videoTitle: 'How I pack ceramic mugs for winter shipping',
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
        {
          number: '02',
          title: 'Audio volume drop during the wheel close-up',
          viewerCount: '1 viewer',
          commentCount: '1 comment',
          comments: [
            {
              quote:
                'The overhead wheel camera is helpful, though your voice gets very quiet whenever you lean over the splash pan.',
              videoTitle: 'Throwing tall stoneware mugs without wobble',
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
      ],
    },
    {
      letter: 'D',
      title: 'What viewers loved',
      subtitle: 'Specific parts of your videos and products viewers responded to.',
      countSummary: '3 comments',
      accentHex: '#1B6B52',
      topics: [
        {
          number: '01',
          title: 'Viewer appreciation and product notes',
          viewerCount: '3 viewers',
          commentCount: '3 comments',
          comments: [
            {
              quote:
                'My cedar-glazed mug arrived yesterday without a scratch. The double-box packing method you showed here clearly works.',
              videoTitle: 'How I pack ceramic mugs for winter shipping',
              likes: 4,
              youtubeUrl: 'https://www.youtube.com',
            },
            {
              quote:
                'Showing the cracked bowl straight out of the kiln instead of hiding it made me feel much better about my own studio mistakes.',
              videoTitle: 'Inside our November kiln unloading',
              likes: 6,
              youtubeUrl: 'https://www.youtube.com',
            },
            {
              quote:
                'Your pacing on the handle pull finally made sense to me after three months of struggling with flat straps.',
              videoTitle: 'Throwing tall stoneware mugs without wobble',
              likes: 2,
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
        },
      ],
    },
    {
      letter: 'E',
      title: 'Questions you already answered',
      subtitle: 'Already covered in your replies or description. Worth pinning or adding to an FAQ.',
      countSummary: '2 topics · 3 comments',
      accentHex: '#1E3A3A',
      topics: [
        {
          number: '01',
          title: 'Clay body name and firing cone',
          viewerCount: '2 viewers',
          commentCount: '2 answered comments',
          comments: [
            {
              quote: 'Which clay body are you throwing with here, and is this fired to cone 6?',
              videoTitle: 'Throwing tall stoneware mugs without wobble',
              hasCreatorReply: true,
              youtubeUrl: 'https://www.youtube.com',
            },
            {
              quote: 'Does that speckle come from the clay itself or from an iron wash?',
              videoTitle: 'Three glaze tests for beginners',
              hasCreatorReply: true,
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
          suggestedMove: 'Consider pinning your clay body and cone 6 answer on new throwing videos.',
        },
        {
          number: '02',
          title: 'Wheel brand and bat pin spacing',
          viewerCount: '1 viewer',
          commentCount: '1 answered comment',
          comments: [
            {
              quote: 'What size bat pins fit that splash pan? I want to make sure my wooden bats fit.',
              videoTitle: 'Throwing tall stoneware mugs without wobble',
              hasCreatorReply: true,
              youtubeUrl: 'https://www.youtube.com',
            },
          ],
          suggestedMove: 'Consider adding your wheel model and bat spacing to your default description block.',
        },
      ],
    },
  ] as SampleSection[],
};
