/**
 * Homepage Social section — profile links (clean URLs, no tracking params).
 */
export const SITE_SOCIAL_CARDS = [
  {
    key: 'instagram',
    url: 'https://www.instagram.com/_fakewedding_/',
    handle: '@_fakewedding_',
    label: 'Instagram',
  },
  {
    key: 'facebook',
    url: 'https://www.facebook.com/gyorieskuvo/',
    handle: 'gyorieskuvo',
    label: 'Facebook',
  },
  {
    key: 'tiktok',
    url: 'https://www.tiktok.com/@_fakewedding_',
    handle: '@_fakewedding_',
    label: 'TikTok',
  },
];

/**
 * Instagram embed — one specific post or reel (NOT the profile URL).
 *
 * How to get it:
 * 1. Open the exact post/reel on Instagram (in app or browser).
 * 2. Copy the link — it looks like:
 *    https://www.instagram.com/reel/AbCdEfGhIjK/  or  .../p/AbCdEfGhIjK/
 * 3. Paste only the path after instagram.com/ here, e.g.:
 *    reel/AbCdEfGhIjK
 *    p/AbCdEfGhIjK
 *
 * Autoplay: Instagram’s embed usually does not autoplay video with sound in the
 * browser (policy). Users often need to tap Play inside the embed. There is no
 * supported way to force true autoplay like a native video file.
 */
export const INSTAGRAM_EMBED_SLUG = '';
