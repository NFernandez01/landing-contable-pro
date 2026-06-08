'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Share2, Link2 } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué elegirnos', href: '#diferencial' },
    { label: 'Sobre nosotros', href: '#sobre-nosotros' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Contabilidad integral',
    'Gestión impositiva',
    'Monotributo y autónomos',
    'Constitución de sociedades',
    'Asesoramiento jurídico',
    'Derecho laboral',
  ];

  const socialLinks = [
    { icon: Globe, href: '#', label: 'Facebook' },
    { icon: Share2, href: '#', label: 'Instagram' },
    { icon: Link2, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0f172a] text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#3b82f6]">Estudio</span> Contable
              </h3>
              <p className="text-[#cbd5e1] mb-6 leading-relaxed">
                Más de 10 años brindando soluciones contables y jurídicas a empresas, PyMEs y emprendedores en Argentina.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#3b82f6] flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-bold mb-4">Navegación</h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#cbd5e1] hover:text-[#3b82f6] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-[#cbd5e1] text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+5491112345678"
                    className="flex items-start gap-3 text-[#cbd5e1] hover:text-[#3b82f6] transition-colors"
                  >
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>+54 9 11 1234-5678</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@estudiocontable.com.ar"
                    className="flex items-start gap-3 text-[#cbd5e1] hover:text-[#3b82f6] transition-colors break-all"
                  >
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>info@estudiocontable.com.ar</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[#cbd5e1]">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Buenos Aires, Argentina</span>
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="font-semibold mb-2">Horarios de atención</h5>
                <p className="text-sm text-[#cbd5e1]">
                  Lunes a Viernes: 9:00 - 18:00
                </p>
                <p className="text-sm text-[#cbd5e1]">
                  WhatsApp: 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#cbd5e1]">
              © {currentYear} Estudio Contable. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#cbd5e1] hover:text-[#3b82f6] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-[#cbd5e1] hover:text-[#3b82f6] transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
