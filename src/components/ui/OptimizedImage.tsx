// Optimized Image component with lazy loading and placeholder

import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  containerClassName = '',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Placeholder skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-dark-800 animate-pulse" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-dark-800 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Failed to load</span>
        </div>
      )}

      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
