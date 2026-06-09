'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Users, Award, Target } from 'lucide-react';
import Container from '../ui/Container';
import { analyticsConfig, buildWhatsappUrl } from '@/lib/analytics';

export default function WhyUsSection() {
  const whatsappUrl = buildWhatsappUrl(
    analyticsConfig.whatsappNumber,
    'Hola! Quiero recibir asesoramiento profesional.'
  );

  const reasons = [
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'No sos un número más. Te conocemos, entendemos tu negocio y te brindamos soluciones a medida de tus necesidades.',
    },
    {
      icon: Zap,
      title: 'Respuesta Rápida',
      description: 'Contestamos tus consultas en menos de 24 horas. Tu tiempo es valioso y lo respetamos.',
    },
    {
      icon: Shield,
      title: 'Enfoque Preventivo',
      description: 'Anticipamos problemas antes de que ocurran. Te ayudamos a tomar decisiones informadas y proteger tu patrimonio.',
    },
    {
      icon: Users,
      title: 'Equipo Multidisciplinario',
      description: 'Contadores y abogados trabajando juntos para darte una solución integral a cada situación.',
    },
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Más de 10 años acompañando el crecimiento de empresas, PyMEs y emprendedores en Argentina.',
    },
    {
      icon: Target,
      title: 'Compromiso con tus Resultados',
      description: 'Tu éxito es nuestro éxito. Nos involucramos en tu negocio como si fuera el nuestro.',
    },
  ];

  return (
    <section id="diferencial" className="py-16 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            ¿Por qué <span className="gradient-text">elegirnos?</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Somos más que un estudio contable y jurídico. Somos tu socio estratégico.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-[#f8fafc] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#1e40af] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{reason.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-12 border border-[#e2e8f0]"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
            ¿Listo para dar el siguiente paso?
          </h3>
          <p className="text-[#64748b] mb-6 max-w-xl mx-auto">
            Hablemos de cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              data-track-source="whyus_schedule"
              data-track-location="whyus_section"
              data-track-label="agendar_consulta_gratis"
              data-track-cta="true"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3b82f6] text-white font-medium rounded-lg hover:bg-[#2563eb] transition-colors shadow-lg"
            >
              Agendar consulta gratis
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-source="whyus_whatsapp"
              data-track-location="whyus_section"
              data-track-label="escribinos_whatsapp"
              data-track-cta="true"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1e40af] text-[#1e40af] font-medium rounded-lg hover:bg-[#1e40af] hover:text-white transition-colors"
            >
              Escribinos por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
