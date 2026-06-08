# ✅ Checklist Rápido - Puesta en Marcha

## 🚀 Tareas Inmediatas (Antes de lanzar)

### 1. Información de Contacto (15 minutos)

- [ ] Actualizar número de teléfono en Header
  - Archivo: `components/layout/Header.tsx` (línea ~53)
  
- [ ] Actualizar número de WhatsApp flotante
  - Archivo: `components/layout/WhatsAppButton.tsx` (línea ~29)
  
- [ ] Actualizar todos los contactos en Footer
  - Archivo: `components/layout/Footer.tsx` (líneas ~87-107)
  - Teléfono
  - Email
  - Dirección
  - Horarios
  
- [ ] Actualizar contactos en sección Contact
  - Archivo: `components/sections/ContactSection.tsx` (líneas ~26-42)

- [ ] Actualizar mapa de ubicación
  - Archivo: `components/sections/ContactSection.tsx` (línea ~156)
  - Ver guía: `COMO-CAMBIAR-MAPA.md`
  - Ir a Google Maps → Tu dirección → Compartir → Insertar mapa
  - Copiar URL del iframe y reemplazar

### 2. Branding (5 minutos)

- [ ] Cambiar "Estudio Contable" por tu nombre real
  - `components/layout/Header.tsx` (línea ~38)
  - `components/layout/Footer.tsx` (línea ~33)
  - `app/layout.tsx` (meta tags)

### 3. Redes Sociales (5 minutos)

- [ ] Agregar URLs de redes sociales
  - Archivo: `components/layout/Footer.tsx` (líneas ~21-25)
  - Facebook: https://facebook.com/...
  - Instagram: https://instagram.com/...
  - LinkedIn: https://linkedin.com/company/...

### 4. Formulario de Contacto (30 minutos)

Elegir una opción e implementar:

#### Opción A: EmailJS (Gratis, fácil)
1. [ ] Crear cuenta en emailjs.com
2. [ ] Instalar: `npm install @emailjs/browser`
3. [ ] Configurar en `ContactSection.tsx`
4. [ ] Probar envío

#### Opción B: Resend (Profesional)
1. [ ] Crear cuenta en resend.com
2. [ ] Instalar: `npm install resend`
3. [ ] Crear API route en `app/api/contact/route.ts`
4. [ ] Configurar en `ContactSection.tsx`
5. [ ] Probar envío

### 5. Analytics (15 minutos)

- [ ] Crear cuenta Google Analytics
- [ ] Obtener ID de medición (G-XXXXXXXXXX)
- [ ] Agregar script en `app/layout.tsx`
- [ ] Verificar que trackea

### 6. Meta Pixel (Si usarás Facebook Ads) (10 minutos)

- [ ] Obtener Pixel ID de Facebook Business
- [ ] Agregar script en `app/layout.tsx`
- [ ] Verificar instalación con extensión de Facebook

---

## 🎨 Personalizaciones Opcionales

### Diseño

- [ ] Cambiar colores si querés
  - Archivo: `app/globals.css`
  
- [ ] Agregar logo
  - Guardar en `public/logo.svg`
  - Actualizar `Header.tsx`
  
- [ ] Agregar favicon personalizado
  - Reemplazar `app/favicon.ico`

### Contenido

- [ ] Revisar todos los textos
- [ ] Ajustar servicios según tu oferta
  - Archivo: `components/sections/ServicesSection.tsx`
  
- [ ] Personalizar FAQs
  - Archivo: `components/sections/FAQSection.tsx`
  
- [ ] Ajustar métricas (años de experiencia, clientes, etc.)
  - `components/sections/TrustSection.tsx`
  - `components/sections/HeroSection.tsx`

---

## 🚀 Deploy

### Opción 1: Vercel (Recomendada, gratis)

1. [ ] Crear cuenta en vercel.com
2. [ ] Conectar repositorio GitHub
3. [ ] Configurar variables de entorno (si usás)
4. [ ] Deploy (automático)
5. [ ] Configurar dominio personalizado

### Opción 2: Netlify

1. [ ] Crear cuenta en netlify.com
2. [ ] Conectar repositorio
3. [ ] Build command: `npm run build`
4. [ ] Deploy

---

## 🔍 Testing Final

### En Local (http://localhost:3000)

- [ ] Revisar en Chrome
- [ ] Revisar en Firefox
- [ ] Revisar en Safari
- [ ] Probar en mobile (DevTools)
- [ ] Probar todos los links
- [ ] Probar formulario
- [ ] Probar botón WhatsApp
- [ ] Verificar que todas las animaciones funcionan
- [ ] Scroll smooth entre secciones
- [ ] Menú mobile

### En Producción (Después del deploy)

- [ ] Verificar en dispositivo mobile real
- [ ] Probar desde diferentes ubicaciones
- [ ] Verificar velocidad de carga
- [ ] Confirmar que Analytics trackea
- [ ] Confirmar que formulario funciona
- [ ] Verificar Open Graph (compartir en redes)

---

## 📊 Configuración de Tracking

### Eventos a Configurar

- [ ] Click en WhatsApp (Hero)
- [ ] Click en WhatsApp (Flotante)
- [ ] Click en "Agendar consulta"
- [ ] Submit de formulario
- [ ] Click en teléfono
- [ ] Click en email
- [ ] Scroll al 50%
- [ ] Scroll al 100%

---

## 📝 Contenido Legal (Importante)

- [ ] Crear página de Política de Privacidad
- [ ] Crear página de Términos y Condiciones
- [ ] Agregar links en Footer
- [ ] Agregar aviso de cookies (si corresponde)

---

## 🎯 Campaña de Ads (Si vas a usar)

### Preparación

- [ ] Definir presupuesto
- [ ] Crear cuentas (Meta Ads, Google Ads)
- [ ] Preparar creatividades
- [ ] Definir segmentación
- [ ] Configurar conversiones

### Landing Page para Ads

- [ ] Verificar velocidad de carga (< 3 seg)
- [ ] CTAs super visibles en mobile
- [ ] WhatsApp accesible con un tap
- [ ] Formulario lo más simple posible
- [ ] Sin distracciones innecesarias

---

## 📱 Post-Launch

### Primera Semana

- [ ] Monitorear Analytics diariamente
- [ ] Verificar formularios que llegan
- [ ] Responder consultas rápido (< 24hs)
- [ ] Pedir feedback de primeros visitantes
- [ ] Ajustar según necesidad

### Primera Mes

- [ ] Analizar métricas
- [ ] Identificar páginas de salida
- [ ] Optimizar conversiones
- [ ] A/B testing de headlines
- [ ] Agregar testimonios de clientes reales

---

## 🆘 Troubleshooting Rápido

### Si el formulario no funciona:
1. Verificar conexión a backend/API
2. Revisar consola del navegador (F12)
3. Verificar configuración de email service

### Si Analytics no trackea:
1. Verificar que el script esté en `layout.tsx`
2. Usar extensión de Analytics para debuggear
3. Verificar el ID de medición

### Si las animaciones no se ven:
1. Verificar que Framer Motion esté instalado
2. Revisar consola por errores
3. Probar en otro navegador

### Si no se ve bien en mobile:
1. Verificar responsive en DevTools
2. Probar en dispositivo real
3. Revisar breakpoints de Tailwind

---

## 📞 Números a Actualizar

**Buscar y reemplazar en todo el proyecto:**

```
Buscar:     +54 9 11 1234-5678
Reemplazar: [TU NÚMERO REAL]

Buscar:     5491112345678
Reemplazar: [TU NÚMERO WHATSAPP SIN ESPACIOS]

Buscar:     info@estudiocontable.com.ar
Reemplazar: [TU EMAIL REAL]
```

**Archivos afectados:**
- Header.tsx
- Footer.tsx
- WhatsAppButton.tsx
- ContactSection.tsx

---

## ✨ Tips Finales

1. **No lo hagas perfecto, lanzalo:** Es mejor una landing funcional hoy que perfecta en 3 meses.

2. **Mide todo:** Sin datos, no sabés qué optimizar.

3. **Responde rápido:** Si prometes respuesta en 24hs, cumplilo. Es tu ventaja competitiva.

4. **Mobile first:** 70% del tráfico será mobile. Optimizá para eso.

5. **Iterá:** Lanzá, mide, optimiza, repite.

---

## 🎉 Ready to Launch!

Cuando hayas completado al menos las "Tareas Inmediatas", ¡estás listo para lanzar!

**Siguiente paso:** Deploy a Vercel y ¡a generar consultas!

---

**¿Dudas? Revisá:**
- README.md (documentación completa)
- CUSTOMIZATION.md (guía de personalización)
- COPY-PROPOSALS.md (mejoras de conversión)
- PROJECT-SUMMARY.md (resumen del proyecto)
