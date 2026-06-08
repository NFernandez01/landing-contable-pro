import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noPadding?: boolean;
}

export default function Container({ children, className = '', size = 'xl', noPadding = false }: ContainerProps) {
  const sizes = {
    sm: 'max-w-4xl',
    md: 'max-w-6xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };
  
  const padding = noPadding ? '' : 'px-2 sm:px-3 lg:px-4';
  
  return (
    <div className={`mx-auto ${padding} ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
