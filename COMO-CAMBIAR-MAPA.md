# 🗺️ Cómo Cambiar el Mapa a Tu Dirección Real

## ✅ El Mapa Ya Está Agregado

Ya agregué un mapa de Google Maps en la sección de contacto con una dirección de ejemplo (Obelisco, Buenos Aires).

## 📍 Cómo Obtener la URL de Tu Dirección

### Opción 1: Desde Google Maps (Recomendado)

1. **Abrí Google Maps** en tu navegador: https://www.google.com/maps

2. **Buscá tu dirección** (Ej: "Av. Corrientes 1234, CABA")

3. **Hacé clic en "Compartir"** (botón a la izquierda)

4. **Seleccioná la pestaña "Insertar un mapa"**

5. **Copiá el código iframe** que aparece (todo el texto que empieza con `<iframe src="https://www.google.com/maps/embed?pb=...`)

6. **Extraé solo la URL** de dentro del atributo `src="..."` (desde `https://` hasta el último carácter antes de `"`)

### Ejemplo de URL:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016890252841!2d-58.38375908477025!3d-34.603722480460784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf08c6fd3b%3A0x5c1b7779d00ea4f7!2sObelisco!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar
```

## 🔧 Cómo Cambiar el Mapa en el Código

### Archivo a Modificar:
📁 `components/sections/ContactSection.tsx`

### Línea a Cambiar:
Buscar la línea **~56** que tiene el `iframe` con el atributo `src`

### Cambio a Realizar:

**ANTES (ejemplo actual):**
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016890252841!2d-58.38375908477025!3d-34.603722480460784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf08c6fd3b%3A0x5c1b7779d00ea4f7!2sObelisco!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
  width="100%"
  height="100%"
  ...
/>
```

**DESPUÉS (tu dirección):**
```tsx
<iframe
  src="TU_URL_DE_GOOGLE_MAPS_AQUI"
  width="100%"
  height="100%"
  ...
/>
```

## 📝 También Actualizar la Dirección de Texto

En el **mismo archivo** `ContactSection.tsx`, buscar línea **~47**:

```tsx
{
  icon: MapPin,
  title: 'Ubicación',
  content: 'Av. Corrientes 1234, CABA, Buenos Aires', // ← CAMBIAR ESTO
  href: 'https://www.google.com/maps/search/...',     // ← Y ESTO
},
```

**Cambiar por tu dirección real:**
```tsx
{
  icon: MapPin,
  title: 'Ubicación',
  content: 'Tu Calle 1234, Tu Ciudad, Tu Provincia',
  href: 'https://www.google.com/maps/search/Tu+Direccion+Completa',
},
```

## 🎯 Ejemplo Completo

Si tu estudio está en **Av. Santa Fe 2020, Recoleta, CABA**:

### 1. Obtener URL del mapa:
- Ir a Google Maps
- Buscar "Av. Santa Fe 2020, Recoleta, CABA"
- Compartir → Insertar mapa
- Copiar la URL del iframe

### 2. Actualizar el código:
```tsx
// Información de contacto (línea ~47)
{
  icon: MapPin,
  title: 'Ubicación',
  content: 'Av. Santa Fe 2020, Recoleta, CABA',
  href: 'https://www.google.com/maps/search/Av.+Santa+Fe+2020,+Recoleta,+CABA',
},

// Y más abajo en el iframe (línea ~156)
<iframe
  src="LA_URL_QUE_COPIASTE_DE_GOOGLE_MAPS"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="absolute inset-0"
  title="Ubicación del estudio"
/>
```

## ⚠️ Importante

- **No borres** las comillas (`"`) que envuelven la URL
- **Asegurate** de que la URL empiece con `https://www.google.com/maps/embed?pb=`
- **No uses** URLs acortadas o de otros servicios
- **Guardá el archivo** después de hacer los cambios
- **El servidor se recargará automáticamente** y verás tu nuevo mapa

## 🔍 Verificar que Funcione

1. Guardá el archivo modificado
2. Abrí http://localhost:3000 en tu navegador
3. Scrolleá hasta la sección de **Contacto** (al final de la página)
4. Deberías ver tu mapa con la ubicación correcta

## 💡 Tip Pro

Si querés **centrar mejor el mapa** o cambiar el zoom:
- En Google Maps, antes de hacer clic en "Compartir"
- Ajustá el zoom y la posición del mapa como querés que se vea
- Recién ahí hacé clic en "Compartir → Insertar mapa"
- Eso respetará tu vista personalizada

---

¿Necesitás ayuda? Revisá el archivo `CUSTOMIZATION.md` para más opciones de personalización.
