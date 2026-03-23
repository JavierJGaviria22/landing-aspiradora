import { useCallback } from 'react';

interface PixelData {
  [key: string]: string | number | boolean;
}

/**
 * Hook personalizado para rastrear eventos con Meta Pixel
 * Uso: const { trackEvent } = usePixel();
 */
export function usePixel() {
  const trackEvent = useCallback(
    (eventName: string, data?: PixelData) => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, data);
      }
    },
    []
  );

  return { trackEvent };
}
