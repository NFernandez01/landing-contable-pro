'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase } from 'lucide-react';
import Container from '../ui/Container';

export default function TeamSection() {
  const team = [
    {
      name: 'Dr. Juan Pérez',
      role: 'Contador Público',
      matricula: 'CPCE T°9 F°155',
      specialties: ['Impuestos', 'Auditoría', 'Consultoría Financiera'],
      credentials: 'Universidad de Buenos Aires - Especialista en Tributación',
      image: 'https://ui-avatars.com/api/?name=Juan+Perez&size=200&background=3b82f6&color=fff&bold=true',
    },
    {
      name: 'Dra. María González',
      role: 'Abogada',
      matricula: 'CPACF T°45 F°289',
      specialties: ['Derecho Laboral', 'Societario', 'Contratos'],
      credentials: 'Universidad Nacional de La Plata - Especialista en Derecho Empresarial',
      image: 'https://ui-avatars.com/api/?name=Maria+Gonzalez&size=200&background=1e40af&color=fff&bold=true',
    },
    {
      name: 'Lic. Carlos Rodríguez',
      role: 'Contador Público',
      matricula: 'CPCE T°15 F°432',
      specialties: ['Contabilidad', 'Liquidación Sueldos', 'PyMEs'],
      credentials: 'Universidad Nacional de Córdoba - MBA',
      image: 'https://ui-avatars.com/api/?name=Carlos+Rodriguez&size=200&background=2563eb&color=fff&bold=true',
    },
  ];

  return (
    <section id="equipo" className="py-16 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0f172a]">
            Nuestro <span className="text-[#3b82f6]">equipo profesional</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Profesionales matriculados con amplia experiencia y credenciales reconocidas
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border-2 border-[#e2e8f0] hover:border-[#3b82f6] transition-all duration-300 overflow-hidden hover:shadow-xl">
                {/* Photo */}
                <div className="relative h-64 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-[#0f172a] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#3b82f6] font-medium mb-3">
                    {member.role}
                  </p>

                  {/* Matricula */}
                  <div className="flex items-center gap-2 bg-[#dbeafe] text-[#1e40af] px-3 py-2 rounded-lg mb-4">
                    <Award className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-semibold">{member.matricula}</span>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-[#64748b] text-sm font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Especialidades</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#f1f5f9] text-[#475569] px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="flex items-start gap-2 text-[#64748b] text-sm">
                    <GraduationCap className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{member.credentials}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#64748b] mb-4">
            ¿Querés conocer más sobre nuestro equipo?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            Agendá una reunión
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
