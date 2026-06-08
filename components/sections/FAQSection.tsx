'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '../ui/Container';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cómo trabajan? ¿Es presencial o virtual?',
      answer: 'Trabajamos tanto de forma presencial como virtual, adaptándonos a tus necesidades. La mayoría de las gestiones las podemos realizar de forma remota, y coordinamos reuniones presenciales cuando sea necesario.',
    },
    {
      question: '¿Atienden empresas grandes o solo PyMEs?',
      answer: 'Atendemos empresas de todos los tamaños: desde emprendedores individuales y monotributistas hasta PyMEs y empresas medianas. Adaptamos nuestros servicios a las necesidades y escala de cada cliente.',
    },
    {
      question: '¿Puedo hacer una consulta online?',
      answer: 'Sí, por supuesto. Podés contactarnos por WhatsApp, email o teléfono. La primera consulta es sin cargo y nos permite entender tu situación para proponer la mejor solución.',
    },
    {
      question: '¿Qué documentación necesito para empezar?',
      answer: 'Depende del servicio que necesites. En la primera consulta te indicaremos exactamente qué documentación es necesaria. Generalmente incluye CUIT, DNI, últimas declaraciones juradas y estados contables si los tenés.',
    },
    {
      question: '¿Cuáles son sus honorarios?',
      answer: 'Nuestros honorarios varían según el servicio y la complejidad del caso. Te presentamos un presupuesto claro y detallado antes de comenzar cualquier trabajo. Sin sorpresas.',
    },
    {
      question: '¿Pueden ayudarme si tengo deudas con ARCA?',
      answer: 'Sí, nos especializamos en regularización de deudas fiscales. Analizamos tu situación, negociamos con ARCA, gestionamos planes de pago y te acompañamos en todo el proceso.',
    },
    {
      question: '¿Ofrecen servicios jurídicos además de contables?',
      answer: 'Sí, contamos con un equipo de abogados especializados en derecho comercial, laboral y tributario. Brindamos un servicio integral que combina aspectos contables y legales.',
    },
    {
      question: '¿Cuánto tiempo tardan en responder una consulta?',
      answer: 'Nuestro tiempo de respuesta promedio es menor a 24 horas. Para consultas urgentes, ofrecemos atención prioritaria por WhatsApp.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container size="md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-lg text-[#64748b]">
            Resolvemos las dudas más comunes de nuestros clientes
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] overflow-hidden hover:border-[#3b82f6] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-[#0f172a] pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#64748b] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-8 border border-[#e2e8f0]"
        >
          <p className="text-[#64748b] text-lg mb-4">
            ¿Tenés otra pregunta?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] font-semibold transition-colors"
          >
            Contactanos directamente
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
