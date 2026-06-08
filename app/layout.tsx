import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

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
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

