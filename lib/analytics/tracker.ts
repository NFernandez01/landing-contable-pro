import { isDuplicateEvent } from './helpers';
import { sendGaEvent, sendMetaCustomEvent, sendMetaTrack, trackGaPageView, trackMetaPageView } from './providers';

export type TrackingPayload = Record<string, string | number | boolean | undefined>;

export function trackPageView(url: string): void {
  const dedupeKey = `pv:${url}`;
  if (isDuplicateEvent(dedupeKey, 800)) {
    return;
  }

  trackGaPageView(url);
  trackMetaPageView();
}

export function trackEvent(eventName: string, payload: TrackingPayload = {}): void {
  const serialized = JSON.stringify(payload);
  const dedupeKey = `event:${eventName}:${serialized}`;

  if (isDuplicateEvent(dedupeKey)) {
    return;
  }

  sendGaEvent(eventName, payload);
  sendMetaCustomEvent(eventName, payload);
}

export function trackLead(payload: TrackingPayload = {}): void {
  const normalizedPayload = { ...payload, conversion_type: 'lead' };
  sendGaEvent('generate_lead', normalizedPayload);
  sendMetaTrack('Lead', normalizedPayload);
}

export function trackWhatsappClick(source: string, location?: string): void {
  const payload = {
    source,
    location: location ?? source,
    channel: 'whatsapp',
  };

  sendGaEvent('whatsapp_click', payload);
  sendMetaCustomEvent('whatsapp_click', payload);
  sendMetaTrack('Contact', payload);
}

export function trackCTA(label: string, location: string): void {
  const payload = {
    cta_label: label,
    location,
  };

  sendGaEvent('cta_click', payload);
  sendMetaCustomEvent('cta_click', payload);
}

export function trackNavigation(label: string, href: string, location: string): void {
  trackEvent('navigation_click', {
    nav_label: label,
    nav_href: href,
    location,
  });
}

export function trackFormSubmit(formName: string, payload: TrackingPayload = {}): void {
  const data = {
    form_name: formName,
    ...payload,
  };

  sendGaEvent('form_submit', data);
  sendMetaCustomEvent('form_submit', data);
  trackLead(data);
}

export function trackScrollDepth(depthPercent: number, path: string): void {
  trackEvent('scroll_depth', {
    depth_percent: depthPercent,
    page_path: path,
  });
}

export function trackTimeOnPage(seconds: number, path: string): void {
  trackEvent('time_on_page', {
    engagement_seconds: seconds,
    page_path: path,
  });

  if (seconds >= 30) {
    sendGaEvent('user_engagement', {
      engagement_time_msec: seconds * 1000,
      page_path: path,
    });
  }
}

export function trackContactClick(method: 'phone' | 'email' | 'map', location: string): void {
  trackEvent('contact_click', {
    method,
    location,
  });
}
