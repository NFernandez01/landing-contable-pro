import { getPagePath } from './helpers';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function sendGaEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (!isBrowser() || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}

export function trackGaPageView(url: string, title?: string): void {
  sendGaEvent('page_view', {
    page_location: url,
    page_path: getPagePath(url),
    page_title: title ?? (isBrowser() ? document.title : undefined),
  });
}

export function sendMetaTrack(eventName: string, params: Record<string, unknown> = {}): void {
  if (!isBrowser() || typeof window.fbq !== 'function') {
    return;
  }

  window.fbq('track', eventName, params);
}

export function sendMetaCustomEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (!isBrowser() || typeof window.fbq !== 'function') {
    return;
  }

  window.fbq('trackCustom', eventName, params);
}

export function trackMetaPageView(): void {
  sendMetaTrack('PageView');
}
