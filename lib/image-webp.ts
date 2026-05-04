/** Map a /public JPEG path to the WebP variant produced by `npm run optimize:images`. */
export function jpegPathToWebp(jpegPath: string): string {
  return jpegPath.replace(/\.jpe?g$/i, '.webp');
}
