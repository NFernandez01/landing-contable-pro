'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function HeroSection() {
  const benefits = [
    'Atención personalizada',
    'Respuesta en menos de 24hs',
    'Primera consulta sin cargo',
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e40af]/5 rounded-full blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e40af] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></span>
              Estudio Profesional – Matr. T°1 F°234
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight"
            >
              Asesoramiento{' '}
              <span className="gradient-text">contable y jurídico</span>{' '}
              para tu empresa
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-[#475569] mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Soluciones integrales para PyMEs, emprendedores y profesionales. Cuidamos tus números y tus derechos con experiencia y compromiso.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-[#0f172a]">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#10b981]/10">
                    <Check className="w-3 h-3 text-[#10b981]" />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Hablar por WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
              >
                Agendar consulta
              </Button>
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-[#64748b] mt-6"
            >
              ✓ Primera consulta sin cargo • ✓ Atención inmediata
            </motion.p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Placeholder for image or illustration */}
              <div className="absolute inset-0 gradient-primary rounded-3xl shadow-premium-hover transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-premium flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Tu tranquilidad</h3>
                  <p className="text-[#64748b]">es nuestra prioridad</p>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0f172a]">+10</div>
                  <div className="text-sm text-[#64748b]">Años de experiencia</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#dcfce7] rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0f172a]">+200</div>
                  <div className="text-sm text-[#64748b]">Clientes satisfechos</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
