'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';
import Container from '../ui/Container';

export default function TrustSection() {
  const metrics = [
    {
      icon: Shield,
      value: '100%',
      label: 'Confidencialidad garantizada',
      color: 'bg-[#dbeafe] text-[#1e40af]',
    },
    {
      icon: Clock,
      value: '24hs',
      label: 'Tiempo de respuesta promedio',
      color: 'bg-[#dcfce7] text-[#10b981]',
    },
    {
      icon: Users,
      value: '+200',
      label: 'Clientes activos',
      color: 'bg-[#fef3c7] text-[#f59e0b]',
    },
    {
      icon: Award,
      value: '+10 años',
      label: 'De experiencia profesional',
      color: 'bg-[#e0e7ff] text-[#6366f1]',
    },
  ];

  const pillars = [
    {
      title: 'Experiencia profesional',
      description: 'Más de una década acompañando empresas, PyMEs y emprendedores en su crecimiento legal y contable.',
    },
    {
      title: 'Atención personalizada',
      description: 'Cada cliente es único. Nos adaptamos a tus necesidades y te acompañamos en cada etapa de tu negocio.',
    },
    {
      title: 'Soluciones integrales',
      description: 'Combinamos asesoramiento contable y jurídico para brindarte un servicio completo y eficiente.',
    },
    {
      title: 'Enfoque preventivo',
      description: 'Anticipamos problemas y te ayudamos a tomar decisiones informadas para proteger tu patrimonio.',
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Tu socio de confianza en{' '}
            <span className="gradient-text">Argentina</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Profesionalismo, experiencia y dedicación al servicio de tu empresa
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f8fafc] rounded-2xl p-6 text-center border border-[#e2e8f0] hover:border-[#3b82f6] transition-all duration-300 hover:shadow-lg"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${metric.color} mb-4`}>
                <metric.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-[#0f172a] mb-2">{metric.value}</div>
              <div className="text-sm text-[#64748b] font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#1e40af] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{pillar.title}</h3>
                <p className="text-[#64748b]">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
