// Technology badge component with hover effects

import { motion } from 'framer-motion';

interface TechBadgeProps {
  tech: string;
  variant?: 'default' | 'primary' | 'accent' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  default: 'bg-primary-500/10 text-primary-400 border-primary-500/20 hover:bg-primary-500/20',
  primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30 hover:bg-primary-500/30',
  accent: 'bg-accent-500/10 text-accent-400 border-accent-500/20 hover:bg-accent-500/20',
  terminal: 'bg-terminal-500/10 text-terminal-400 border-terminal-500/20 hover:bg-terminal-500/20',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
};

export function TechBadge({ tech, variant = 'default', size = 'md' }: TechBadgeProps) {
  return (
    <motion.span
      className={`
        inline-flex items-center rounded-full
        border font-mono
        transition-colors duration-200
        ${variants[variant]}
        ${sizes[size]}
      `}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {tech}
    </motion.span>
  );
}

// Multiple badges container
export function TechBadgeList({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          <TechBadge tech={tech} />
        </motion.div>
      ))}
    </div>
  );
}
