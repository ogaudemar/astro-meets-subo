// Build-time size of a social preview image, so BaseHead can emit
// og:image:width/height. Discord (and others) otherwise download the image to
// measure it, inside a 10-second budget for the whole preview fetch.
//
// Only site-relative paths under public/ are measured. Anything else (an
// absolute URL, a missing file, sharp not installed) returns null and the tags
// are simply omitted: the preview still renders, the crawler just measures it.
// sharp ships with Astro as its image service; it is not a direct dependency.
import { join } from 'node:path';

type Size = { width: number; height: number; type?: string };

const cache = new Map<string, Size | null>();

const MIME: Record<string, string> = {
	png: 'image/png',
	jpeg: 'image/jpeg',
	webp: 'image/webp',
	gif: 'image/gif',
	avif: 'image/avif',
	heif: 'image/avif',
};

export async function ogImageSize(src: string): Promise<Size | null> {
	if (!src.startsWith('/') || src.startsWith('//')) return null;
	if (cache.has(src)) return cache.get(src)!;
	let size: Size | null = null;
	try {
		const { default: sharp } = await import('sharp');
		const meta = await sharp(join(process.cwd(), 'public', src)).metadata();
		if (meta.width && meta.height) {
			size = { width: meta.width, height: meta.height, type: meta.format ? MIME[meta.format] : undefined };
		}
	} catch {
		size = null;
	}
	cache.set(src, size);
	return size;
}
