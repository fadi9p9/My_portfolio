// GlassMorphism Card with 3D hover effect

import { motion } from 'framer-motion';
import { ReactNode, useState, useRef } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glowColor?: string;
}

export function GlassCard({
  children,
  className = '',
  hover3D = true,
  glowColor = 'rgba(99, 102, 241, 0.3)'
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        shadow-xl
        transition-all duration-300 ease-out
        ${className}
      `}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 pointer-events-none" />

      {/* Shine effect on hover */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"
        />
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `0 0 40px ${glowColor}` }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
