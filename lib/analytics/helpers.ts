const recentEventTimestamps = new Map<string, number>();

export function isDuplicateEvent(key: string, dedupeWindowMs = 1200): boolean {
  const now = Date.now();
  const lastSeen = recentEventTimestamps.get(key);

  if (typeof lastSeen === 'number' && now - lastSeen < dedupeWindowMs) {
    return true;
  }

  recentEventTimestamps.set(key, now);
  return false;
}

export function getPagePath(url: string): string {
  try {
    const parsed = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'https://example.com');
    return `${parsed.pathname}${parsed.search}`;
  } catch {
    return url;
  }
}

export function getAbsolutePageUrl(path: string): string {
  if (typeof window === 'undefined') {
    return path;
  }

  try {
    return new URL(path, window.location.origin).toString();
  } catch {
    return `${window.location.origin}${path.startsWith('/') ? path : `/${path}`}`;
  }
}

export function buildWhatsappUrl(whatsappNumber: string, message: string): string {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
