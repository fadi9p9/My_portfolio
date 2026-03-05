// 3D Floating Geometric Elements using CSS transforms

import { motion } from 'framer-motion';

// Floating Cube Component
export function FloatingCube({ className = '', size = 80 }: { className?: string; size?: number }) {
  const halfSize = size / 2;

  const faces = [
    { name: 'front', transform: `translateZ(${halfSize}px)` },
    { name: 'back', transform: `translateZ(${-halfSize}px) rotateY(180deg)` },
    { name: 'right', transform: `translateX(${halfSize}px) rotateY(90deg)` },
    { name: 'left', transform: `translateX(${-halfSize}px) rotateY(-90deg)` },
    { name: 'top', transform: `translateY(${-halfSize}px) rotateX(90deg)` },
    { name: 'bottom', transform: `translateY(${halfSize}px) rotateX(-90deg)` },
  ];

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size, perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {faces.map((face) => (
          <div
            key={face.name}
            className="absolute border border-primary-500/30 bg-primary-500/5 backdrop-blur-sm"
            style={{
              width: size,
              height: size,
              transform: face.transform,
              backfaceVisibility: 'visible',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Floating Sphere Component
export function FloatingSphere({ className = '', size = 96 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={`rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.8), rgba(99, 102, 241, 0.1))',
        boxShadow: `
          inset -10px -10px 30px rgba(0, 0, 0, 0.3),
          inset 10px 10px 30px rgba(255, 255, 255, 0.1),
          0 0 60px rgba(99, 102, 241, 0.3)
        `,
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

// Floating Ring Component
export function FloatingRing({ className = '', size = 100 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={`rounded-full border-4 border-primary-500/30 ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow: `
          0 0 20px rgba(99, 102, 241, 0.2),
          inset 0 0 20px rgba(99, 102, 241, 0.1)
        `,
      }}
      animate={{
        rotateZ: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// Floating Pyramid (Tetrahedron)
export function FloatingPyramid({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`relative w-20 h-20 ${className}`}
      style={{ perspective: '1000px' }}
      animate={{
        rotateY: [0, 360],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-30deg)',
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-0 h-0"
            style={{
              left: '50%',
              bottom: 0,
              borderLeft: '40px solid transparent',
              borderRight: '40px solid transparent',
              borderBottom: '70px solid rgba(99, 102, 241, 0.2)',
              transform: `rotateY(${i * 90}deg) translateZ(23px)`,
              transformOrigin: 'center bottom',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Floating Code Symbol
export function FloatingCodeSymbol({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center justify-center text-4xl font-mono text-primary-500/50 ${className}`}
      animate={{
        y: [0, -10, 0],
        rotateY: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {'</>'}
    </motion.div>
  );
}

// Floating Server Icon
export function FloatingServerIcon({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="w-16 h-20 rounded-lg bg-gradient-to-b from-primary-500/20 to-primary-500/5 border border-primary-500/30 backdrop-blur-sm">
        <div className="flex flex-col gap-1 p-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full bg-primary-500/50"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          <motion.div
            className="w-2 h-2 rounded-full bg-terminal-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <div className="w-2 h-2 rounded-full bg-primary-500/50" />
        </div>
      </div>
    </motion.div>
  );
}
