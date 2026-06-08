import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({ children, className = '', hover = true, gradient = false }: CardProps) {
  const baseStyles = 'bg-white rounded-2xl border border-[#e2e8f0] p-8 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-premium-hover hover:-translate-y-1 cursor-pointer' : '';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-[#f8fafc] to-white' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className} shadow-premium`}
    >
      {children}
    </motion.div>
  );
}
