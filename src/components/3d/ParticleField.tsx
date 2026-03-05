// Animated Particle Field Background

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ParticleFieldProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
}

export function ParticleField({
  count = 50,
  color = 'rgba(99, 102, 241, 0.5)',
  minSize = 2,
  maxSize = 6,
}: ParticleFieldProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, [count, minSize, maxSize]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            boxShadow: `0 0 ${particle.size * 2}px ${color}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Code Rain Effect (Matrix-style)
export function CodeRain({ className = '' }: { className?: string }) {
  const columns = 20;
  const chars = '0123456789ABCDEF{}[]<>/;:'.split('');

  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

  return (
    <div className={`absolute inset-0 overflow-hidden opacity-10 ${className}`}>
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-primary-500"
          style={{ left: `${(i / columns) * 100}%` }}
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j} className="opacity-50">
              {getRandomChar()}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
