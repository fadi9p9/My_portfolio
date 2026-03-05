// Reusable Button component with variants

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const variants = {
  primary: `
    bg-gradient-to-r from-primary-600 to-primary-500
    text-white font-semibold
    shadow-lg shadow-primary-500/25
    hover:shadow-xl hover:shadow-primary-500/30
  `,
  secondary: `
    bg-dark-800 text-white
    border border-white/10
    hover:bg-dark-800/80 hover:border-primary-500/30
  `,
  ghost: `
    text-gray-300 hover:text-white
    hover:bg-white/5
  `,
  outline: `
    border border-primary-500/50 text-primary-400
    hover:bg-primary-500/10 hover:border-primary-500
  `,
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={`
        inline-flex items-center justify-center gap-2
        transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </motion.button>
  );
}
