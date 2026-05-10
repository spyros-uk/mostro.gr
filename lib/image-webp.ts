/** Map a /public JPEG path to the WebP variant produced by `npm run optimize:images`. */
export function jpegPathToWebp(jpegPath: string): string {
  if (!jpegPath) return '';
  return jpegPath.replace(/\.jpe?g$/i, '.webp');
}
