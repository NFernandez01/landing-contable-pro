import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import TrackingProvider from "@/components/analytics/TrackingProvider";
import { analyticsConfig } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Estudio Contable y Jurídico | Asesoramiento Profesional en Argentina",
  description: "Soluciones integrales contables y jurídicas para PyMEs, emprendedores y empresas. Más de 10 años de experiencia. Primera consulta sin cargo.",
  keywords: "estudio contable, asesoramiento jurídico, contador, abogado, PyMEs, monotributo, sociedades, Argentina",
  authors: [{ name: "Estudio Contable" }],
  openGraph: {
    title: "Estudio Contable y Jurídico | Asesoramiento Profesional",
    description: "Soluciones integrales para PyMEs y emprendedores en Argentina",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Contable y Jurídico",
    description: "Asesoramiento profesional para tu empresa",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { gaMeasurementId, metaPixelId } = analyticsConfig;

  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <Header />
        {children}
        <WhatsAppButton />
        <TrackingProvider />

        {gaMeasurementId ? (
          <>
            <Script
              id="ga4-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}

        {metaPixelId ? (
          <>
            <Script id="meta-pixel-init" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        ) : null}
      </body>
    </html>
  );
}

