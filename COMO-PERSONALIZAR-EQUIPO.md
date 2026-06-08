# 👥 Cómo Personalizar la Sección de Equipo

## 📍 Ubicación

La nueva sección de equipo profesional se encuentra en:
**`components/sections/TeamSection.tsx`**

## 🎯 Qué Incluye

Cada miembro del equipo muestra:
- ✅ **Foto profesional** (actualmente con avatares generados automáticamente)
- ✅ **Nombre completo** con título (Dr./Dra./Lic.)
- ✅ **Rol/Profesión** (Contador Público, Abogado, etc.)
- ✅ **Matrícula profesional** con badge destacado
- ✅ **Especialidades** (tags con áreas de expertise)
- ✅ **Credenciales** (universidad, posgrados, certificaciones)

## 🔧 Cómo Editar los Datos

### 1. Abrir el archivo
```
components/sections/TeamSection.tsx
```

### 2. Buscar el array `team` (línea ~9)

### 3. Modificar cada miembro del equipo

```typescript
const team = [
  {
    name: 'TU NOMBRE AQUÍ',              // Ej: "Dr. Juan Pérez"
    role: 'TU PROFESIÓN',                // Ej: "Contador Público"
    matricula: 'TU MATRÍCULA',           // Ej: "CPCE T°9 F°155"
    specialties: [                       // Máximo 3-4 especialidades
      'Especialidad 1',
      'Especialidad 2', 
      'Especialidad 3'
    ],
    credentials: 'TU FORMACIÓN',         // Universidad y títulos
    image: 'URL_DE_TU_FOTO',             // Ver instrucciones abajo
  },
  // ... más miembros
];
```

## 📸 Cómo Agregar Fotos Reales

### Opción 1: Fotos Locales (Recomendado)

1. **Crear carpeta para fotos:**
   ```
   public/team/
   ```

2. **Guardar fotos** con nombres descriptivos:
   ```
   public/team/juan-perez.jpg
   public/team/maria-gonzalez.jpg
   public/team/carlos-rodriguez.jpg
   ```

3. **Actualizar la URL en el código:**
   ```typescript
   image: '/team/juan-perez.jpg'
   ```

### Opción 2: URLs Externas

Si tenés las fotos en otro servidor:
```typescript
image: 'https://tu-servidor.com/fotos/juan-perez.jpg'
```

### Opción 3: Mantener Avatares Automáticos (Temporal)

Los avatares actuales se generan automáticamente con las iniciales:
```typescript
image: 'https://ui-avatars.com/api/?name=Juan+Perez&size=200&background=3b82f6&color=fff&bold=true'
```

## 💡 Ejemplos Reales

### Contador Público
```typescript
{
  name: 'Dra. Ana García',
  role: 'Contadora Pública',
  matricula: 'CPCE CABA T°12 F°345',
  specialties: ['Impuestos', 'Auditoría Externa', 'ARCA'],
  credentials: 'UBA - Especialización en Tributación - Posgrado en Normas Internacionales',
  image: '/team/ana-garcia.jpg',
}
```

### Abogado
```typescript
{
  name: 'Dr. Martín López',
  role: 'Abogado',
  matricula: 'CPACF T°89 F°567',
  specialties: ['Derecho Laboral', 'Contratos', 'Societario'],
  credentials: 'UBA - Especialista en Derecho del Trabajo - MBA',
  image: '/team/martin-lopez.jpg',
}
```

### Asistente Contable
```typescript
{
  name: 'Lic. Laura Fernández',
  role: 'Asistente Contable',
  matricula: 'Mat. Profesional N°1234',
  specialties: ['Liquidación Sueldos', 'Monotributo', 'Facturación'],
  credentials: 'UADE - Técnica en Administración',
  image: '/team/laura-fernandez.jpg',
}
```

## ➕ Agregar Más Miembros

Para agregar otro profesional, simplemente copiá un bloque completo y agregalo al array:

```typescript
const team = [
  { /* Miembro 1 */ },
  { /* Miembro 2 */ },
  { /* Miembro 3 */ },
  { 
    // NUEVO MIEMBRO AQUÍ
    name: 'Nuevo Profesional',
    role: 'Rol',
    matricula: 'Matrícula',
    specialties: ['Esp1', 'Esp2'],
    credentials: 'Formación',
    image: '/team/foto.jpg',
  },
];
```

## ➖ Eliminar Miembros

Para quitar un miembro del equipo, simplemente borrá su bloque completo del array.

## 🎨 Personalizar Colores de Avatares

Si usás avatares automáticos, podés cambiar los colores:

```typescript
// Azul claro
image: 'https://ui-avatars.com/api/?name=Nombre&background=3b82f6&color=fff'

// Azul oscuro
image: 'https://ui-avatars.com/api/?name=Nombre&background=1e40af&color=fff'

// Verde
image: 'https://ui-avatars.com/api/?name=Nombre&background=10b981&color=fff'
```

## 📐 Tamaño Recomendado de Fotos

- **Tamaño:** 400x400 píxeles (cuadrado)
- **Formato:** JPG o PNG
- **Peso:** Menos de 200KB (optimizado para web)
- **Fondo:** Neutro o corporativo
- **Calidad:** Alta resolución profesional

## 🔗 Navegación

La sección ya está integrada en:
- ✅ Header (link "Equipo")
- ✅ Footer (link "Equipo")
- ✅ Página principal (entre "Sobre nosotros" y "Proceso")

## ⚡ Los Cambios se Ven Inmediatamente

Una vez que edites el archivo y guardes, Next.js recargará automáticamente la página y verás los cambios.

---

**¿Necesitás ayuda?** Revisá los ejemplos o consultá la documentación en `CUSTOMIZATION.md`
