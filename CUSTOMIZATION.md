# 📋 Guía de Personalización y Mejoras

## 🎯 Personalización Inmediata

### 1. Información de Contacto

#### Header
**Archivo:** `components/layout/Header.tsx`
- Línea ~53: Cambiar número de teléfono
```typescript
<a href="tel:+5491112345678" className="...">
  <span>+54 9 11 1234-5678</span>
</a>
```

#### Footer
**Archivo:** `components/layout/Footer.tsx`
- Líneas ~87-107: Actualizar toda la info de contacto
```typescript
// Teléfono, email, dirección, horarios
```

#### WhatsApp Button
**Archivo:** `components/layout/WhatsAppButton.tsx`
- Línea ~29: Cambiar número
```typescript
const whatsappNumber = '5491112345678';
```

#### Contact Section
**Archivo:** `components/sections/ContactSection.tsx`
- Líneas ~26-42: Actualizar datos de contacto

### 2. Nombre del Estudio

Reemplazar "Estudio Contable" por tu nombre real en:
- `components/layout/Header.tsx` (línea ~38)
- `components/layout/Footer.tsx` (línea ~33)
- `app/layout.tsx` (meta tags)

### 3. Redes Sociales

**Archivo:** `components/layout/Footer.tsx`
- Líneas ~21-25: Agregar URLs reales de redes sociales

```typescript
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/tupagina', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/tuperfil', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/tuempresa', label: 'LinkedIn' },
];
```

## 🎨 Personalización de Diseño

### Cambiar Colores de Marca

**Archivo:** `app/globals.css`

```css
@theme inline {
  /* Tus colores de marca */
  --color-primary: #TU_COLOR_PRINCIPAL;
  --color-accent: #TU_COLOR_SECUNDARIO;
  --color-secondary: #TU_COLOR_OSCURO;
}
```

**Ejemplo con otro esquema:**
```css
/* Ejemplo: Verde corporativo */
--color-primary: #059669;      /* Verde oscuro */
--color-accent: #10b981;       /* Verde brillante */
--color-secondary: #064e3b;    /* Verde muy oscuro */
```

### Cambiar Tipografía

**Archivo:** `app/globals.css`

```css
/* Cambiar a otra fuente de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

@theme inline {
  --font-sans: 'Poppins', sans-serif;
  --font-heading: 'Poppins', sans-serif;
}
```

## ✍️ Modificar Textos y Copy

### Hero Section
**Archivo:** `components/sections/HeroSection.tsx`

- Línea ~27: Badge superior
- Línea ~34: Headline principal (muy importante)
- Línea ~46: Subheadline
- Líneas ~52-56: Benefits chips

### Servicios
**Archivo:** `components/sections/ServicesSection.tsx`

Líneas ~13-82: Array completo de servicios
```typescript
const services = [
  {
    icon: Calculator,
    title: 'TU SERVICIO',
    description: 'Descripción del servicio...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // ... más servicios
];
```

### FAQs
**Archivo:** `components/sections/FAQSection.tsx`

Líneas ~11-56: Preguntas y respuestas

## 🚀 Agregar Nuevas Funcionalidades

### 1. Integrar Formulario de Contacto

#### Opción A: EmailJS (Gratis, fácil)

1. Crear cuenta en [emailjs.com](https://emailjs.com)
2. Instalar: `npm install @emailjs/browser`
3. En `ContactSection.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus('sending');
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    setFormStatus('success');
  } catch (error) {
    alert('Error al enviar. Intenta de nuevo.');
    setFormStatus('idle');
  }
};
```

#### Opción B: Resend (Profesional)

1. Crear cuenta en [resend.com](https://resend.com)
2. Instalar: `npm install resend`
3. Crear `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  
  try {
    const data = await resend.emails.send({
      from: 'Estudio <contacto@tudominio.com>',
      to: ['tu-email@ejemplo.com'],
      subject: `Nueva consulta de ${body.name}`,
      html: `
        <h2>Nueva consulta</h2>
        <p><strong>Nombre:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Teléfono:</strong> ${body.phone}</p>
        <p><strong>Servicio:</strong> ${body.service}</p>
        <p><strong>Mensaje:</strong> ${body.message}</p>
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

4. En `ContactSection.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus('sending');
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setFormStatus('success');
  } else {
    alert('Error. Intenta de nuevo.');
    setFormStatus('idle');
  }
};
```

### 2. Agregar Google Analytics

**Archivo:** `app/layout.tsx`

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 3. Agregar Meta Pixel (Facebook Ads)

**Archivo:** `app/layout.tsx`

```typescript
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'TU_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

### 4. Agregar Sección de Testimonios

Crear `components/sections/TestimonialsSection.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'María González',
      role: 'CEO, PyME Textil',
      content: 'Excelente atención y profesionalismo. Resolvieron todas nuestras dudas contables.',
      rating: 5,
    },
    // ... más testimonios
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Lo que dicen <span className="gradient-text">nuestros clientes</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-[#64748b] mb-4">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-[#0f172a]">{testimonial.name}</div>
                <div className="text-sm text-[#64748b]">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

Luego agregar en `app/page.tsx`:
```typescript
import TestimonialsSection from '@/components/sections/TestimonialsSection';

// En el JSX después de AboutSection:
<TestimonialsSection />
```

## 📸 Agregar Imágenes

### Logo

1. Colocar logo en `public/logo.svg` o `public/logo.png`
2. En `Header.tsx`:

```typescript
import Image from 'next/image';

<a href="#inicio" className="flex items-center gap-2">
  <Image src="/logo.svg" alt="Logo" width={40} height={40} />
  <span className="text-xl font-bold">Tu Estudio</span>
</a>
```

### Hero Image

En `HeroSection.tsx`, reemplazar el placeholder:

```typescript
<div className="relative w-full aspect-square">
  <Image
    src="/hero-image.jpg"
    alt="Estudio Contable"
    fill
    className="object-cover rounded-3xl"
    priority
  />
</div>
```

### Favicon

Reemplazar `app/favicon.ico` con tu favicon.

## 🔍 SEO Avanzado

### Open Graph Images

1. Crear imagen 1200x630px
2. Guardar en `public/og-image.jpg`
3. En `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... metadata existente
  openGraph: {
    images: ['/og-image.jpg'],
  },
  twitter: {
    images: ['/og-image.jpg'],
  },
};
```

### Sitemap

Crear `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tudominio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```

### robots.txt

Crear `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://tudominio.com/sitemap.xml',
  };
}
```

## 🎯 Tracking de Eventos

### Trackear clicks en CTAs

En cualquier botón:

```typescript
<Button
  onClick={() => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'Hero WhatsApp Button',
      });
    }
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  }}
>
  Hablar por WhatsApp
</Button>
```

## 📱 Progressive Web App (PWA)

Instalar: `npm install next-pwa`

Configurar en `next.config.ts`:

```typescript
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  // ... config existente
});
```

Crear `public/manifest.json`:

```json
{
  "name": "Estudio Contable",
  "short_name": "Estudio",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#1e40af",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## 🚀 Deploy en Vercel

1. Push a GitHub
2. Conectar en vercel.com
3. Configurar variables de entorno
4. Deploy automático

## 📊 Mejoras de Performance

### Lazy Loading de Secciones

Ya implementado con Framer Motion `whileInView`

### Optimizar Fuentes

Ya implementado con Google Fonts optimizado

### Image Optimization

Al agregar imágenes, usar siempre `next/image`

---

**¿Necesitás ayuda con algo específico? Consultá la documentación oficial o contactá al desarrollador.**
