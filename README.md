# 🏢 Landing Page - Estudio Contable y Jurídico

Landing page premium, moderna y profesional para un estudio contable y jurídico en Argentina. Diseñada para generar conversiones y optimizada para campañas publicitarias (Meta Ads / Google Ads).

## ✨ Características

### Diseño
- ✅ UI moderna, minimalista y elegante
- ✅ Mobile-first responsive design
- ✅ Microanimaciones sutiles con Framer Motion
- ✅ Tipografía premium (Inter)
- ✅ Paleta de colores profesional y corporativa
- ✅ Espaciados amplios y aire visual
- ✅ Gradientes y sombras premium

### Secciones Implementadas

1. **Hero Section** - Impacto inmediato con CTAs destacados
2. **Trust Section** - Métricas y pilares de confianza
3. **Services Section** - 8 servicios con cards premium
4. **Why Us Section** - 6 razones para elegir el estudio
5. **About Section** - Presentación del equipo y valores
6. **Process Section** - 4 pasos del proceso de trabajo
7. **Entities Section** - Logos de entidades oficiales (ARCA, AGIP, ARBA, ANSES, IGJ, INPI)
8. **Contact Section** - Formulario completo + info de contacto + mapa de ubicación
9. **Footer** - Completo con links, servicios y redes
10. **WhatsApp Button** - Flotante con tooltip y animación

### Funcionalidades
- ✅ Navegación suave entre secciones
- ✅ Header con menú responsive y sticky
- ✅ Botón de WhatsApp flotante
- ✅ Formulario de contacto funcional
- ✅ CTAs estratégicamente ubicados
- ✅ SEO optimizado con meta tags
- ✅ Performance optimizada
- ✅ Accesibilidad básica

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **TypeScript:** Para type safety
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
landing-contable/
├── app/
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx             # Página home con todas las secciones
│   └── globals.css          # Estilos globales y variables CSS
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Componente de botón reutilizable
│   │   ├── Card.tsx         # Card premium con animaciones
│   │   └── Container.tsx    # Contenedor responsivo
│   ├── layout/
│   │   ├── Header.tsx       # Header con navegación
│   │   ├── Footer.tsx       # Footer completo
│   │   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   └── sections/
│       ├── HeroSection.tsx        # Hero con CTAs
│       ├── TrustSection.tsx       # Métricas de confianza
│       ├── ServicesSection.tsx    # Grid de servicios
│       ├── WhyUsSection.tsx       # Razones para elegir
│       ├── AboutSection.tsx       # Sobre el estudio
│       ├── ProcessSection.tsx     # Proceso de trabajo
      ├── EntitiesSection.tsx    # Logos de entidades oficiales
      └── ContactSection.tsx     # Formulario de contacto + mapa
└── public/                  # Assets estáticos
```

## 🎨 Paleta de Colores

```css
--color-primary: #1e40af;      /* Azul profesional */
--color-primary-dark: #1e3a8a;
--color-secondary: #0f172a;    /* Azul oscuro elegante */
--color-accent: #3b82f6;       /* Azul brillante CTAs */
--color-accent-hover: #2563eb;
--color-success: #10b981;      /* Verde para checks */
--color-muted: #f8fafc;        /* Fondo suave */
```

## ⚙️ Personalización

### Cambiar información de contacto

Editar en los siguientes archivos:
- `components/layout/Header.tsx` - Teléfono en header
- `components/layout/Footer.tsx` - Todos los datos de contacto
- `components/layout/WhatsAppButton.tsx` - Número de WhatsApp
- `components/sections/ContactSection.tsx` - Info de contacto

### Cambiar mapa de ubicación

El mapa de Google Maps está en `components/sections/ContactSection.tsx`.

**Guía completa:** Ver archivo `COMO-CAMBIAR-MAPA.md` para instrucciones paso a paso.

**Resumen rápido:**
1. Ir a Google Maps y buscar tu dirección
2. Hacer clic en "Compartir" → "Insertar un mapa"
3. Copiar la URL del iframe
4. Reemplazar en `ContactSection.tsx` línea ~156

### Modificar servicios

Editar el array `services` en:
- `components/sections/ServicesSection.tsx`

### Cambiar copy y textos

Todos los textos están en español y se pueden editar directamente en cada componente de sección.

### Ajustar colores

Modificar las variables CSS en:
- `app/globals.css` (sección `@theme inline`)

## 🔧 Integraciones Pendientes

### Formulario de Contacto
Actualmente el formulario muestra un mensaje de éxito simulado. Para integrarlo:

1. **Opción A - Email (Resend/SendGrid):**
```typescript
// En ContactSection.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

2. **Opción B - Webhook (n8n/Make/Zapier):**
```typescript
const response = await fetch('TU_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

3. **Opción C - Google Sheets (API):**
Usar Google Sheets API para guardar las consultas.

### Analytics y Tracking

Agregar en `app/layout.tsx`:

```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />

// Meta Pixel
<Script id="fb-pixel">
  {`!function(f,b,e,v,n,t,s){...}`}
</Script>
```

### Variables de Entorno

Crear archivo `.env.local`:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXX

# Email
RESEND_API_KEY=re_xxxxxxxxxxxxx

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=5491112345678
```

## 📱 WhatsApp

El número de WhatsApp está configurado como `5491112345678`. 

**Para cambiar:**
1. Editar `components/layout/WhatsAppButton.tsx`
2. Formato: código país + código área + número (sin espacios ni +)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conectar el repositorio en [vercel.com](https://vercel.com)

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

## ✅ Checklist Pre-Launch

- [ ] Actualizar todos los números de teléfono
- [ ] Actualizar emails de contacto
- [ ] Configurar dominio personalizado
- [ ] Integrar formulario de contacto
- [ ] Añadir Google Analytics / Meta Pixel
- [ ] Configurar Google Search Console
- [ ] Agregar favicon y meta images
- [ ] Probar todos los links
- [ ] Validar responsive en todos los dispositivos
- [ ] Optimizar imágenes (si se agregan)
- [ ] Configurar redirects y 404
- [ ] Revisar política de privacidad

## 🎯 Optimizaciones para Ads

- ✅ Landing page de carga rápida
- ✅ CTAs claros y visibles
- ✅ Formulario simple y directo
- ✅ WhatsApp siempre accesible
- ✅ Mobile-first (mayoría del tráfico de ads)
- ✅ Secciones de confianza destacadas
- ✅ Sin distracciones innecesarias

### Tracking Sugerido

Eventos a trackear para ads:
- Click en botón WhatsApp
- Click en botón "Agendar consulta"
- Submit de formulario
- Click en teléfono
- Scroll depth (25%, 50%, 75%, 100%)
- Tiempo en página

## 📊 Performance

Optimizaciones implementadas:
- Lazy loading de secciones con Framer Motion
- Componentes optimizados con React
- CSS-in-JS mínimo (TailwindCSS)
- Fuentes optimizadas con `next/font`
- Sin imágenes pesadas por defecto

## 🤝 Soporte

Para dudas o mejoras:
1. Revisar la documentación de Next.js
2. Consultar docs de Framer Motion
3. Verificar guías de TailwindCSS

---

**Desarrollado con ❤️ para tu estudio contable y jurídico**

# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
