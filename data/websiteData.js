import {
  aiPersonaVideos,
  brandAssets,
  finishedAdsVideos,
  heroVideos,
  whatYouGetMedia,
} from './videoData.js';

export const brandData = {
  name: 'MotionCut',
  tagline: 'Performance creative production for ecommerce brands on Meta.',
  logo: brandAssets.logo,
};

export const navLinks = [
  { label: 'The system', href: '#system' },
  { label: 'What you get', href: '#deliverables' },
  { label: 'Work', href: '#work' },
  { label: 'FAQ', href: '#faq' },
];

export const ctaData = {
  primary: {
    label: 'Get your creative testing plan',
    href: '#book',
  },
  secondary: {
    label: 'See the system',
    href: '#system',
  },
  nav: {
    label: 'Get your testing plan',
    href: '#book',
  },
};

export const heroData = {
  badgeTag: 'New',
  badgeText: 'The 30-Creative Testing System™',
  headlinePrefix: "Your next winning Meta ad shouldn't take ",
  headlineHighlight: '2 weeks',
  headlineSuffix: ' to produce.',
  supportingText:
    'We turn your product into 30 finished Meta ads every month, ready to post. No creators to recruit, brief, ship products to or manage.',
  previews: heroVideos,
};

export const statsData = {
  metrics: [
    { value: '30', label: 'finished ads a month' },
    { value: '20–30', label: 'creative concepts' },
    { value: '60+', label: 'hooks' },
    { value: '30+', label: 'scripts' },
    { value: '8–15', label: 'AI personas', spanTwo: true },
  ],
  deliveredSummary: {
    figure: '500+',
    label: 'ads delivered for DTC brands',
    clients: [
      { category: 'Skincare', country: 'Italy' },
      { category: 'Skincare', country: 'Spain' },
      { category: 'Supplements', country: 'US' },
      { category: 'Hair care', country: 'US' },
      { category: 'Copper utensils & jewelry', country: 'Netherlands' },
      { category: 'Fragrance', country: 'Australia' },
    ],
  },
};

export const bottleneckData = {
  index: '01',
  label: 'The bottleneck',
  title: "UGC isn't your problem. Creative velocity is.",
  highlight: 'Creative velocity is.',
  body: "Meta rewards brands that keep testing new ideas. Creator by creator production can't keep up.",
  traditional: {
    title: 'Traditional UGC',
    steps: [
      'Find a creator',
      'Negotiate and pay',
      'Ship the product',
      'Wait',
      'Shoot and revise',
      'Edit',
    ],
    result: '1 ad',
    footnote: 'Then start again for the next one.',
  },
  system: {
    title: 'Our system',
    steps: ['Strategy', 'Scripts', 'AI production', 'Edit and QA'],
    result: '30 ads',
    footnote: 'Every month, on repeat.',
  },
};

export const creativeMultiplicationData = {
  index: '02',
  label: 'Creative Multiplication™',
  title: 'One product. Dozens of ads to test.',
  highlight: 'Dozens of ads to test.',
  body: 'Keep scrolling to watch one product become 30 finished ads.',
  stages: [
    {
      value: '1',
      label: 'Product',
      line: 'It starts with your product, your customer and your offer.',
    },
    {
      value: '20–30',
      label: 'Concepts',
      line: 'We find the different reasons people buy, and build a concept around each one.',
    },
    {
      value: '60+',
      label: 'Hooks',
      line: 'Every concept gets several openings, so you learn which one stops the scroll.',
    },
    {
      value: '30+',
      label: 'Scripts',
      line: 'The strongest hooks become full scripts, written for the feed.',
    },
    {
      value: '8–15',
      label: 'AI personas',
      line: 'Different faces, voices and settings, so an idea never depends on one creator.',
    },
    {
      value: '30',
      label: 'Finished ads',
      line: 'Edited, captioned and checked. Ready to upload.',
    },
  ],
  concepts: [
    'Problem and solution',
    'Before and after',
    'Testimonial',
    'Founder story',
    'Ingredient deep dive',
    'Daily routine',
    'Myth busting',
    'Comparison',
    'Unboxing',
    'Street interview',
    'Expert opinion',
    'Big idea animation',
  ],
  hooks: [
    'The cholesterol girlies found this.',
    "Your 50s shouldn't scare you.",
    "There's a town in France…",
    'And your hair starts thinning.',
    'I keep seeing comments like this.',
    'Not the best looking.',
  ],
  scriptParts: ['Hook', 'Problem', 'Product', 'Proof', 'Call to action'],
  personas: aiPersonaVideos,
  finals: finishedAdsVideos,
};

export const differenceData = {
  index: '03',
  label: 'The difference',
  title: 'Stop managing creators. Start testing creative.',
  highlight: 'Start testing creative.',
  caption: 'Traditional UGC compared with the 30-Creative Testing System',
  columns: {
    traditional: 'Traditional UGC',
    system: '30-Creative Testing System™',
  },
  rows: [
    {
      topic: 'Output',
      traditional: 'One video per creator',
      system: '30 finished ads every month',
    },
    {
      topic: 'Creators',
      traditional: 'You find, vet and pay them',
      system: 'No creators to manage',
    },
    {
      topic: 'Shipping',
      traditional: 'Product sent to every creator',
      system: 'Not needed',
    },
    {
      topic: 'Strategy',
      traditional: 'Usually your job',
      system: 'Concepts, hooks and scripts included',
    },
    {
      topic: 'Speed',
      traditional: 'Weeks per video',
      system: '2 finished ads a day in production',
    },
    {
      topic: 'Testing',
      traditional: 'Not included',
      system: 'Testing order, ad copy and next steps',
    },
  ],
};

export const whatYouGetData = {
  index: '04',
  label: 'What you get',
  title: 'Everything your testing pipeline needs. Every month.',
  highlight: 'Every month.',
  featuredCard: {
    figure: '30',
    title: 'Finished ads, ready to post',
    description: 'Not raw clips or generic AI output. Scripted, voiced, captioned and checked.',
    previews: whatYouGetMedia.finishedAdPreviews,
  },
  strategyCard: {
    title: 'Creative strategy',
    items: [
      'Product and customer research',
      'Market and competitor research',
      'Angle development',
      'Testing priorities',
    ],
  },
  pipelineStats: [
    { value: '20–30', label: 'concepts' },
    { value: '60+', label: 'hooks' },
    { value: '30+', label: 'scripts' },
  ],
  personasCard: {
    title: '8–15 AI personas',
    description: 'Different ages, personalities, settings and delivery styles.',
    avatars: whatYouGetMedia.personaAvatars,
  },
  formatsCard: {
    title: 'Formats built for testing',
    formats: [
      'UGC',
      'Talking head',
      'AI testimonials',
      'Founder style',
      'Podcast',
      'Product demos',
      'Unboxings',
      'Before and after',
      'Problem and solution',
      '3D and claymation',
      'Meme style',
      'Motion graphics',
    ],
  },
  featureCards: [
    {
      icon: 'file-text',
      title: 'Ad copy and naming',
      description: 'Primary text and naming, so every test is easy to read.',
    },
    {
      icon: 'list-ordered',
      title: 'Testing plan',
      description: 'Which ads to launch first and which hooks to test against each other.',
    },
    {
      icon: 'chart-line',
      title: 'Tracking and iteration',
      description: "What's working, and what we should make next.",
      spanMd: true,
    },
  ],
};

export const deliveredData = {
  index: '06',
  label: 'Delivered',
  title: '500+ ads delivered across five countries.',
  highlight: '500+ ads',
  results: [
    {
      product: 'Skincare serum',
      country: 'Italy',
      figure: '50+',
      unit: 'video ads',
      detail: 'AI performance creative, made in Italian',
    },
    {
      product: 'Supplement',
      country: 'US',
      figure: '30+',
      unit: 'ads in about 30 days',
      detail: 'Scripts turned into ads for Meta and TikTok',
    },
    {
      product: 'Hair growth serum',
      country: 'US',
      figure: '30+',
      unit: 'video ads',
      detail: 'Realistic, UGC and animated formats',
    },
    {
      product: 'Copper utensils & jewelry',
      country: 'Netherlands',
      figure: '30+',
      unit: 'video ads',
      detail: 'Full video ad production that helped them find a winning ad within a month',
    },
    {
      product: 'Skincare',
      country: 'Spain',
      figure: '20+',
      unit: 'video ads',
      detail: 'Full video ad production that helped them find a winning ad within a month',
    },
    {
      product: 'Fragrance',
      country: 'Australia',
      figure: '10+',
      unit: 'animated ads',
      detail: '3D, claymation and stickman animation',
    },
  ],
  totalCard: {
    figure: '500+',
    label: 'ads delivered in total',
  },
};

export const howItWorksData = {
  index: '07',
  label: 'How it works',
  title: 'From first call to 30 ads in one cycle.',
  highlight: '30 ads',
  phases: [
    {
      when: 'Day 0',
      title: 'Onboarding call',
      body: "We learn your product, customer, offer and what you've already tested.",
    },
    {
      when: 'Days 1 to 5',
      title: 'Creative strategy',
      body: 'Research, angles, hooks and scripts, ranked by what to test first.',
    },
    {
      when: 'Day 6 onward',
      title: 'Production',
      body: 'Two finished ads a day until all 30 are delivered.',
    },
    {
      when: 'Every month',
      title: 'Test and iterate',
      body: "You launch. We recommend what to test next and build on what's working.",
    },
  ],
};

export const capacityData = {
  title: "We don't sell AI videos. We build creative testing capacity.",
  highlight: 'We build creative testing capacity.',
  steps: [
    'More ads to test',
    'More data, faster',
    'Find what works',
    'Scale the winners',
  ],
  notes: [
    {
      icon: 'shield',
      text: 'Nobody can honestly guarantee a winning ad. We guarantee the volume and quality that give you more chances to find one.',
    },
    {
      icon: 'handshake',
      text: 'You or your media buyer run the campaigns. We supply the ads, the testing plan and what to make next.',
    },
  ],
};

export const guaranteeData = {
  sealText: '30-Creative Delivery Guarantee • 30-Creative Delivery Guarantee • ',
  figure: '30',
  label: '30-Creative Delivery Guarantee',
  title: '30 finished ads. Or we keep working.',
  body: "If we don't deliver the agreed 30 ads in your monthly cycle, we keep working at no extra fee until every one is done.",
  revisionNote: 'Every ad includes up to 2 rounds of revisions.',
};

export const whoItsForData = {
  index: '08',
  label: "Who it's for",
  title: 'Built for brands already spending on Meta.',
  highlight: 'already spending on Meta.',
  strongFit: {
    title: 'A strong fit if you’re',
    items: [
      'An ecommerce brand with a physical product',
      'Running Meta ads every month',
      'Paid acquisition already running',
      'Using UGC now, or thinking about it',
      'Ready to test often, not occasionally',
    ],
    categoriesLabel: 'Best-fit categories',
    categories: [
      'Beauty',
      'Skincare',
      'Wellness',
      'Supplements',
      'Personal care',
      'Home',
      'Food and drink',
      'Consumer products',
    ],
  },
  notFit: {
    title: 'Probably not a fit',
    items: [
      'Still searching for product market fit',
      'Little or no Meta spend',
      'Organic content only',
      'Apparel and fashion',
      'Expecting guaranteed ROAS',
      'Looking for the cheapest video possible',
    ],
  },
};

export const faqData = {
  index: '09',
  label: 'FAQ',
  title: 'Questions brands ask first.',
  promptPrefix: 'Something else on your mind?',
  promptLinkLabel: 'Ask us on the call',
  promptLinkHref: '#book',
  items: [
    {
      question: 'Why not just hire UGC creators?',
      answer:
        "You can. If you need one creator to make one video, traditional UGC works. But once you're spending seriously on Meta, the limit is creative velocity. You need enough different angles, hooks and concepts to give Meta a real pool to test. UGC makes every new ad its own production project. We turn it into a system.",
    },
    {
      question: "Isn't this just AI UGC?",
      answer:
        'AI is how we produce, not what we sell. You get a testing system: research, 20 to 30 concepts, 60+ hooks, 30+ scripts, 8 to 15 personas, 30 finished ads, ad copy and a testing plan.',
    },
    {
      question: 'Do you run our Meta ads?',
      answer:
        'No. You or your media buyer run the campaigns. We supply the finished ads, plus testing recommendations, naming, ad copy, tracking and what to make next.',
    },
    {
      question: 'How quickly do we get ads?',
      answer:
        'Onboarding happens on day 0 and strategy runs through day 5. From day 6 we deliver two finished ads a day until all 30 are done.',
    },
    {
      question: "What if an ad isn't right?",
      answer:
        'Every ad includes up to 2 rounds of revisions against the approved concept. A completely new concept counts as a new ad.',
    },
    {
      question: 'Do you guarantee results?',
      answer:
        "We don't guarantee ROAS, CPA or revenue. Those depend on your offer, funnel and budget. We guarantee delivery: if the 30 ads aren't done in the cycle, we keep working at no extra fee.",
    },
    {
      question: 'Which products work best?',
      answer:
        "Visual, physical products sold online. Beauty, skincare, wellness, supplements, personal care, home, food and drink, and everyday consumer products. We don't currently take on apparel or fashion.",
    },
  ],
};

export const finalCtaData = {
  eyebrow: 'More creative. Less waiting.',
  titlePrefix: 'Your next winning ad is ',
  titleHighlight: 'waiting to be tested.',
  body: "Book a strategy call. We'll look at your product and current ads, and map the first concepts we'd test.",
  ctaLabel: 'Get your creative testing plan',
  ctaHref: '#book',
  note: '30 minutes. No pressure. Just a clear plan.',
  booking: {
    title: 'Book your strategy call',
    subtitle: 'Pick a time and bring your current ads.',
    placeholderTitle: 'Scheduling opens here soon',
    placeholderSubtitle: 'The booking calendar will appear in this space.',
  },
};

export const footerData = {
  socials: [
    { label: 'Instagram', href: null },
    { label: 'LinkedIn', href: null },
    { label: 'Email', href: null },
  ],
  legal: [
    { label: 'Privacy', href: null },
    { label: 'Terms', href: null },
  ],
  copyright: '© 2026 MotionCut',
};
