export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? '',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? '5491112345678',
};

export const isGaEnabled = analyticsConfig.gaMeasurementId.length > 0;
export const isMetaPixelEnabled = analyticsConfig.metaPixelId.length > 0;
