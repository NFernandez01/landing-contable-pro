'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { analyticsConfig, buildWhatsappUrl } from '@/lib/analytics';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show tooltip after 3 seconds on first load
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = buildWhatsappUrl(
    analyticsConfig.whatsappNumber,
    'Hola! Me gustaría hacer una consulta.'
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-premium p-4 max-w-xs"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f172a] text-white rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-sm text-[#0f172a] font-medium">
                  ¿Necesitás ayuda? Escribinos por WhatsApp
                </p>
                <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track-source="floating_whatsapp"
            data-track-location="floating_button"
            data-track-label="whatsapp_floating"
            data-track-cta="true"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-colors group"
          >
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
            
            {/* Pulse animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
