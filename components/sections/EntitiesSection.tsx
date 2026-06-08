'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Image from 'next/image';

export default function EntitiesSection() {
  const entities = [
    {
      name: 'ARCA',
      logo: '/entities/arca-logo.svg',
      alt: 'Logo ARCA - Agencia de Recaudación y Control Aduanero',
    },
    {
      name: 'AGIP',
      logo: 'https://svyasociados.com.ar/wp-content/uploads/2024/01/logo-agip.svg',
      alt: 'Logo AGIP - Administración Gubernamental de Ingresos Públicos',
    },
    {
      name: 'ARBA',
      logo: 'https://svyasociados.com.ar/wp-content/uploads/2024/01/logo-arba.svg',
      alt: 'Logo ARBA - Agencia de Recaudación de Buenos Aires',
    },
    {
      name: 'ANSES',
      logo: 'https://svyasociados.com.ar/wp-content/uploads/2024/01/logo-anses.svg',
      alt: 'Logo ANSES - Administración Nacional de la Seguridad Social',
    },
    {
      name: 'IGJ',
      logo: 'https://svyasociados.com.ar/wp-content/uploads/2024/01/logo-igj.svg',
      alt: 'Logo IGJ - Inspección General de Justicia',
    },
    {
      name: 'INPI',
      logo: 'https://svyasociados.com.ar/wp-content/uploads/2024/01/logo-inpi.svg',
      alt: 'Logo INPI - Instituto Nacional de la Propiedad Industrial',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0f172a]">
            Trabajamos con todas las <span className="text-[#3b82f6]">entidades oficiales</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Gestionamos tus trámites en los principales organismos públicos de Argentina
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10"
        >
          {entities.map((entity, index) => (
            <motion.div
              key={entity.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center gap-3 group"
            >
              <div className="relative w-full h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-[#1e40af]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={entity.logo}
                  alt={entity.alt}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300 p-2"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-semibold text-[#64748b] group-hover:text-[#3b82f6] transition-colors">
                {entity.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Info adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#64748b] max-w-3xl mx-auto">
            Contamos con experiencia y conocimiento actualizado en todas las plataformas y sistemas de los organismos públicos. 
            Realizamos tus trámites de forma rápida, eficiente y sin errores.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
