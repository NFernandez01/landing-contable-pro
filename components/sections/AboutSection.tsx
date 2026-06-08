'use client';

import { motion } from 'framer-motion';
import { Users, Lightbulb, CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';

export default function AboutSection() {
  const values = [
    'Integridad y transparencia',
    'Compromiso con el cliente',
    'Excelencia profesional',
    'Innovación y adaptabilidad',
  ];

  return (
    <section id="sobre-nosotros" className="py-16 lg:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Sobre <span className="text-[#3b82f6]">nuestro estudio</span>
            </h2>
            <p className="text-lg text-[#cbd5e1] mb-6">
              Somos un equipo de profesionales especializados en contabilidad y derecho, con más de una década acompañando el crecimiento de empresas, PyMEs y emprendedores en toda Argentina.
            </p>
            <p className="text-lg text-[#cbd5e1] mb-8">
              Nuestra misión es brindar soluciones integrales que combinen expertise técnico con un servicio personalizado y cercano. Creemos que cada cliente es único y merece una atención dedicada y profesional.
            </p>

            {/* Values */}
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-[#3b82f6]" />
              Nuestros valores
            </h3>
            <ul className="space-y-3 mb-8">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-[#cbd5e1]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                  {value}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Team Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#1e40af] flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Nuestro equipo</h3>
                  <p className="text-[#cbd5e1]">Profesionales dedicados</p>
                </div>
              </div>
              <p className="text-[#cbd5e1] leading-relaxed">
                Contamos con un equipo multidisciplinario de contadores públicos, abogados y especialistas tributarios que trabajan de forma coordinada para ofrecerte el mejor servicio.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Nuestra visión</h3>
              <p className="text-[#cbd5e1] leading-relaxed">
                Ser el estudio de referencia en Argentina, reconocido por la calidad de nuestro servicio, la cercanía con nuestros clientes y nuestra capacidad para resolver problemas complejos con soluciones simples y efectivas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">+10</div>
                <div className="text-sm text-[#cbd5e1]">Años</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">+200</div>
                <div className="text-sm text-[#cbd5e1]">Clientes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-[#cbd5e1]">Soporte</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
