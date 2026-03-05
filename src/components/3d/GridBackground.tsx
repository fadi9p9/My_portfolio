// Animated Grid Background Component - Supports both light and dark modes

import { motion } from 'framer-motion';

interface GridBackgroundProps {
  variant?: 'default' | 'dense' | 'sparse';
  showScanline?: boolean;
  showOrbs?: boolean;
}

export function GridBackground({
  variant = 'default',
  showScanline = true,
  showOrbs = true,
}: GridBackgroundProps) {
  const gridSize = {
    default: 50,
    dense: 30,
    sparse: 80,
  }[variant];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient base - Light mode (smoky/whitish) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Gradient overlay to fade grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/80 via-transparent to-slate-100/80 dark:from-dark-900/50 dark:via-transparent dark:to-dark-900/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/80 via-transparent to-slate-100/80 dark:from-dark-900/50 dark:via-transparent dark:to-dark-900/50" />

      {/* Floating orbs */}
      {showOrbs && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-slate-200/40 dark:bg-primary-500/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gray-200/40 dark:bg-accent-500/10 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-slate-300/30 dark:bg-terminal-500/5 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Scanline effect - only in dark mode */}
      {showScanline && (
        <motion.div
          className="hidden dark:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div className="absolute top-8 left-8 w-16 h-0.5 bg-gradient-to-r from-primary-500/30 to-transparent dark:from-primary-500/50" />
        <div className="absolute top-8 left-8 w-0.5 h-16 bg-gradient-to-b from-primary-500/30 to-transparent dark:from-primary-500/50" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <div className="absolute bottom-8 right-8 w-16 h-0.5 bg-gradient-to-l from-primary-500/30 to-transparent dark:from-primary-500/50" />
        <div className="absolute bottom-8 right-8 w-0.5 h-16 bg-gradient-to-t from-primary-500/30 to-transparent dark:from-primary-500/50" />
      </div>
    </div>
  );
}
