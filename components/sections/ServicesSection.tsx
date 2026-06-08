'use client';

import { motion } from 'framer-motion';
import {
  Calculator,
  FileText,
  Building2,
  Scale,
  Users,
  Briefcase,
  TrendingUp,
  Shield,
} from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ServicesSection() {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidad Integral',
      description: 'Gestión completa de tu contabilidad: registraciones, balances, informes y cumplimiento normativo.',
      features: ['Balances mensuales', 'Registraciones contables', 'Estados financieros'],
    },
    {
      icon: FileText,
      title: 'Gestión Impositiva',
      description: 'Asesoramiento y liquidación de impuestos nacionales, provinciales y municipales.',
      features: ['IVA y Ganancias', 'Ingresos Brutos', 'Planes de pago'],
    },
    {
      icon: Users,
      title: 'Monotributo y Autónomos',
      description: 'Inscripción, recategorización y seguimiento para monotributistas y autónomos.',
      features: ['Altas y bajas', 'Recategorización', 'Facturación electrónica'],
    },
    {
      icon: Building2,
      title: 'Constitución de Sociedades',
      description: 'Armado de SRL, SA, SAS y otras formas jurídicas con asesoramiento integral.',
      features: ['Estatutos sociales', 'Inscripción IGJ', 'CUIT y alta ARCA'],
    },
    {
      icon: Scale,
      title: 'Asesoramiento Jurídico',
      description: 'Consultoría legal para empresas, contratos comerciales y resolución de conflictos.',
      features: ['Contratos', 'Reclamos', 'Consultoría legal'],
    },
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Gestión de relaciones laborales, liquidación de sueldos y asesoramiento en conflictos.',
      features: ['Liquidación de sueldos', 'Altas y bajas', 'Despidos y acuerdos'],
    },
    {
      icon: TrendingUp,
      title: 'Consultoría Empresarial',
      description: 'Planificación estratégica, análisis financiero y optimización de recursos.',
      features: ['Análisis de costos', 'Proyecciones', 'Mejora continua'],
    },
    {
      icon: Shield,
      title: 'Defensa Tributaria',
      description: 'Representación ante organismos fiscales, descargos y recursos administrativos.',
      features: ['Intimaciones ARCA', 'Descargos', 'Recursos y apelaciones'],
    },
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Servicios <span className="gradient-text">profesionales</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Soluciones integrales para todas las necesidades contables y jurídicas de tu empresa
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#1e40af] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{service.title}</h3>
                <p className="text-[#64748b] mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#64748b]">
                      <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button variant="ghost" size="sm" className="w-full justify-center">
                    Más información
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#64748b] mb-6">¿No encontrás lo que necesitás?</p>
          <Button variant="primary" size="lg">
            Consultá por otros servicios
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
