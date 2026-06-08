'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Search, FileCheck, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Primer Contacto',
      description: 'Nos contactás por WhatsApp, email o teléfono. Escuchamos tu situación y necesidades.',
      color: 'from-[#3b82f6] to-[#2563eb]',
    },
    {
      number: '02',
      icon: Search,
      title: 'Diagnóstico',
      description: 'Analizamos tu caso en profundidad y relevamos toda la información necesaria.',
      color: 'from-[#2563eb] to-[#1e40af]',
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Propuesta',
      description: 'Te presentamos una solución personalizada con plan de trabajo, tiempos y costos.',
      color: 'from-[#1e40af] to-[#1e3a8a]',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Seguimiento',
      description: 'Ejecutamos el plan y te mantenemos informado en cada etapa del proceso.',
      color: 'from-[#1e3a8a] to-[#1e40af]',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            ¿Cómo <span className="gradient-text">trabajamos?</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Un proceso simple, transparente y orientado a resultados
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#1e40af] to-[#1e3a8a] opacity-20"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{step.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#64748b] text-lg">
            💡 <strong>Primera consulta sin cargo:</strong> Evaluamos tu caso y te orientamos sin compromiso
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
