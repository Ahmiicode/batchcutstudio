const createMediaItem = (id, slug, title, category, alt) => ({
  id,
  slug,
  title,
  format: title,
  category,
  family: category,
  src: `/assets/videos/${slug}.mp4`,
  poster: `/assets/images/${slug}.jpg`,
  alt,
});

export const brandAssets = {
  logo: {
    src: '/assets/images/motioncut-logo.png',
    alt: 'MotionCut',
    width: 2990,
    height: 488,
  },
};

export const allCreativeMedia = [
  createMediaItem(
    1,
    'ugc-realism',
    'UGC testimonial',
    'People',
    'Creator style ad of a woman holding a supplement bottle, captioned “The cholesterol girlies found this.”'
  ),
  createMediaItem(
    2,
    'ai-testimonial',
    'AI creator testimonial',
    'People',
    'A woman speaking to camera from her car in a testimonial ad.'
  ),
  createMediaItem(
    3,
    'comment-reply',
    'Comment reply',
    'People',
    'A creator replying to a customer comment about price, holding the product.'
  ),
  createMediaItem(
    4,
    'product-application',
    'Product application',
    'Product',
    'A woman demonstrating how she applies a scalp serum.'
  ),
  createMediaItem(
    5,
    'podcast',
    'Podcast',
    'People',
    'An expert speaking into a podcast microphone about scalp health.'
  ),
  createMediaItem(
    6,
    'street-interview',
    'Street interview',
    'People',
    'A street interview ad filmed at an outdoor event.'
  ),
  createMediaItem(
    7,
    'pixar-village',
    'Pixar style 3D',
    'Animated',
    'A 3D animated village scene captioned “There\'s a town in France.”'
  ),
  createMediaItem(
    8,
    'claymation',
    'Claymation',
    'Animated',
    'Claymation scene with a supplement bottle and a large number three.'
  ),
  createMediaItem(
    9,
    'expert-talking-head',
    'Expert talking head',
    'People',
    'A vet in scrubs sitting beside a black Labrador, speaking to camera.'
  ),
  createMediaItem(
    10,
    'hair-explainer',
    '3D product explainer',
    'Product',
    'A 3D cross section of a hair follicle captioned “And your hair starts thinning.”'
  ),
  createMediaItem(
    11,
    'stickman',
    '2D stickman',
    'Animated',
    'Hand drawn stickman characters in an animated ad.'
  ),
  createMediaItem(
    12,
    'lifestyle-ugc',
    'Lifestyle UGC',
    'People',
    'A woman outdoors with a caption reading “Your 50s shouldn\'t scare you.”'
  ),
  createMediaItem(
    13,
    'story-3d',
    '3D story',
    'Animated',
    'A 3D animated character looking at a booking app on her phone.'
  ),
  createMediaItem(
    14,
    'stop-motion',
    'Stop motion',
    'Animated',
    'A felt puppy in a stop motion ad.'
  ),
  createMediaItem(
    15,
    'dog-podcast',
    'Meme podcast',
    'Big ideas',
    'A golden retriever wearing headphones at a podcast microphone.'
  ),
  createMediaItem(
    16,
    'animated-explainer',
    'Animated explainer',
    'Big ideas',
    'Animated ingredient characters inside a stylised scalp.'
  ),
  createMediaItem(
    17,
    'pixar-routine',
    '3D routine story',
    'Animated',
    'A 3D animated older woman preparing breakfast in her kitchen.'
  ),
  createMediaItem(
    18,
    'claymation-village',
    'Claymation story',
    'Animated',
    'A claymation village street with a perfume shop.'
  ),
];

const bySlug = (slug) => allCreativeMedia.find((item) => item.slug === slug);

export const heroVideos = [
  'podcast',
  'street-interview',
  'pixar-village',
  'ugc-realism',
  'product-application',
  'claymation',
  'hair-explainer',
].map(bySlug);

export const creativeMultiplicationVideos = [
  'ugc-realism',
  'pixar-village',
  'product-application',
  'street-interview',
  'claymation',
  'hair-explainer',
].map(bySlug);

export const aiPersonaVideos = [
  'ugc-realism',
  'ai-testimonial',
  'comment-reply',
  'podcast',
  'street-interview',
  'expert-talking-head',
  'lifestyle-ugc',
  'product-application',
  'story-3d',
  'pixar-routine',
  'pixar-village',
  'stop-motion',
].map(bySlug);

export const finishedAdsVideos = [
  'ugc-realism',
  'claymation',
  'street-interview',
  'hair-explainer',
  'pixar-village',
  'comment-reply',
  'stickman',
  'expert-talking-head',
  'story-3d',
  'lifestyle-ugc',
].map(bySlug);

export const whatYouGetMedia = {
  finishedAdPreviews: [
    'lifestyle-ugc',
    'claymation-village',
    'expert-talking-head',
    'story-3d',
    'comment-reply',
  ].map(bySlug),
  personaAvatars: [
    'ugc-realism',
    'ai-testimonial',
    'comment-reply',
    'podcast',
    'street-interview',
    'expert-talking-head',
    'lifestyle-ugc',
    'product-application',
    'story-3d',
  ].map(bySlug),
};

export const portfolioVideos = allCreativeMedia;

export const deliveredProjectMedia = [
  { id: 1, market: 'Italy', media: bySlug('ugc-realism') },
  { id: 2, market: 'US', media: bySlug('claymation') },
  { id: 3, market: 'US', media: bySlug('hair-explainer') },
  { id: 4, market: 'Netherlands', media: bySlug('product-application') },
  { id: 5, market: 'Spain', media: bySlug('lifestyle-ugc') },
  { id: 6, market: 'Australia', media: bySlug('claymation-village') },
];
