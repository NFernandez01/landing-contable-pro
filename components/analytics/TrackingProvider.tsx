'use client';

import { useCallback, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  getAbsolutePageUrl,
  getPagePath,
  trackCTA,
  trackContactClick,
  trackNavigation,
  trackPageView,
  trackScrollDepth,
  trackTimeOnPage,
  trackWhatsappClick,
} from '@/lib/analytics';

const SCROLL_THRESHOLDS = [25, 50, 75, 100] as const;

function getCurrentPath(pathname: string, searchParams: URLSearchParams): string {
  const query = searchParams.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export default function TrackingProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const triggeredDepthsRef = useRef<Set<number>>(new Set());
  const startTimeRef = useRef<number>(0);
  const currentPathRef = useRef<string>('');

  const path = getCurrentPath(pathname, searchParams);

  const reportTimeOnPage = useCallback(() => {
    const elapsedMs = Date.now() - startTimeRef.current;
    const elapsedSeconds = Math.floor(elapsedMs / 1000);

    if (elapsedSeconds < 5 || !currentPathRef.current) {
      return;
    }

    trackTimeOnPage(elapsedSeconds, currentPathRef.current);
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    const url = getAbsolutePageUrl(path);
    trackPageView(url);

    currentPathRef.current = getPagePath(url);
    triggeredDepthsRef.current = new Set();
    startTimeRef.current = Date.now();
  }, [path]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        return;
      }

      const depth = Math.round((scrollTop / documentHeight) * 100);

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (depth >= threshold && !triggeredDepthsRef.current.has(threshold)) {
          triggeredDepthsRef.current.add(threshold);
          trackScrollDepth(threshold, currentPathRef.current || path);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [path]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        reportTimeOnPage();
      }
    };

    const onPageHide = () => reportTimeOnPage();

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', onPageHide);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', onPageHide);
      reportTimeOnPage();
    };
  }, [reportTimeOnPage]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const element = (event.target as HTMLElement)?.closest<HTMLElement>('a,button');
      if (!element) {
        return;
      }

      const source = element.dataset.trackSource || 'unknown';
      const location = element.dataset.trackLocation || source;

      if (element.dataset.trackCta === 'true') {
        const label = element.dataset.trackLabel || element.textContent?.trim() || 'cta';
        trackCTA(label, location);
      }

      if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute('href') || '';
        const label = element.dataset.trackLabel || element.textContent?.trim() || 'link';

        if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
          trackWhatsappClick(source, location);
          return;
        }

        if (href.startsWith('#')) {
          trackNavigation(label, href, location);
          return;
        }

        if (href.startsWith('tel:')) {
          trackContactClick('phone', location);
          return;
        }

        if (href.startsWith('mailto:')) {
          trackContactClick('email', location);
          return;
        }

        if (href.includes('maps.google.com') || href.includes('google.com/maps')) {
          trackContactClick('map', location);
        }
      }
    };

    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, []);

  return null;
}
