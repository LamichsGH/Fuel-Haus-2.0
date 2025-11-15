export const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB

export async function checkImageSize(src: string): Promise<boolean> {
  try {
    // Skip data URLs
    if (src.startsWith('data:')) {
      return true;
    }

    // Skip blob URLs
    if (src.startsWith('blob:')) {
      return true;
    }

    // Skip bundled assets (Vite/webpack URLs)
    if (src.includes('/@fs/') || src.startsWith('/src/') || src.startsWith('/_app/')) {
      return true;
    }

    // For external URLs (like Shopify CDN), try to check size but don't fail on error
    try {
      const response = await fetch(src, { method: 'HEAD' });
      const contentLength = response.headers.get('content-length');
      
      if (!contentLength) {
        // If no content-length header, assume it's okay
        return true;
      }
      
      const sizeInBytes = parseInt(contentLength, 10);
      return sizeInBytes <= MAX_IMAGE_SIZE;
    } catch (fetchError) {
      // If HEAD request fails (CORS, etc.), allow the image
      return true;
    }
  } catch (error) {
    console.warn('Failed to check image size:', error);
    // On error, allow the image to load
    return true;
  }
}
