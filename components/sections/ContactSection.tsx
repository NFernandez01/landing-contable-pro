'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2, Clock } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 9 11 1234-5678',
      href: 'tel:+5491112345678',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@estudiocontable.com.ar',
      href: 'mailto:info@estudiocontable.com.ar',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Formosa 395, B1804 Ezeiza, Provincia de Buenos Aires',
      href: 'https://www.google.com/maps/search/Formosa+395,+B1804+Ezeiza,+Provincia+de+Buenos+Aires',
    },
    {
      icon: Clock,
      title: 'Horario laboral',
      content: 'Lunes a Viernes 9:00 a 18:00 Hs.',
      href: '#',
    },
  ];

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
      
      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Empecemos a <span className="text-[#3b82f6]">trabajar juntos</span>
          </h2>
          <p className="text-lg text-[#cbd5e1] max-w-2xl mx-auto">
            Completá el formulario y nos comunicamos con vos en menos de 24 horas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#1e40af] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#cbd5e1] mb-1">{item.title}</div>
                      <div className="font-semibold">{item.content}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">¿Preferís contactarnos directamente?</h4>
              <p className="text-[#cbd5e1] mb-6">
                Escribinos por WhatsApp y te respondemos al instante
              </p>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                  <p className="text-[#cbd5e1]">Nos comunicaremos con vos a la brevedad</p>
                </div>
              ) : (
                <>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white placeholder-white/50"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white placeholder-white/50"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white placeholder-white/50"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        ¿Qué servicio necesitás? *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white"
                      >
                        <option value="" className="bg-[#1e293b]">Seleccionar servicio</option>
                        <option value="contabilidad" className="bg-[#1e293b]">Contabilidad integral</option>
                        <option value="impuestos" className="bg-[#1e293b]">Gestión impositiva</option>
                        <option value="monotributo" className="bg-[#1e293b]">Monotributo/Autónomos</option>
                        <option value="sociedades" className="bg-[#1e293b]">Constitución de sociedades</option>
                        <option value="juridico" className="bg-[#1e293b]">Asesoramiento jurídico</option>
                        <option value="laboral" className="bg-[#1e293b]">Derecho laboral</option>
                        <option value="otro" className="bg-[#1e293b]">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white placeholder-white/50 resize-none"
                        placeholder="Contanos brevemente qué necesitás..."
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Send className="w-5 h-5" />}
                    disabled={formStatus === 'sending'}
                    className="mt-6"
                  >
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar consulta'}
                  </Button>

                  <p className="text-sm text-[#cbd5e1] text-center mt-4">
                    Al enviar este formulario aceptás nuestra política de privacidad
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 overflow-hidden">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.966714505946!2d-58.50684529803924!3d-34.85706367903668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd6d5fdd397e3%3A0xb865cfdebdfa2f59!2sFormosa%20395%2C%20B1804%20Ezeiza%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1780877591299!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Ubicación del estudio"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#cbd5e1] text-sm">
                📍 Ubicación aproximada - Consultá la dirección exacta al contactarnos
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
