// Enhanced Project Card with 3D hover effects - Supports light/dark mode

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-dark-800/50 border border-gray-200 dark:border-white/10 backdrop-blur-sm transition-all duration-500 shadow-lg dark:shadow-none"
        style={{ transform, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold">
            Featured
          </div>
        )}

        {/* Image Section */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent dark:from-dark-900 dark:via-dark-900/50 dark:to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Project number badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm border border-primary-200 dark:border-primary-500/30">
            <span className="font-mono text-sm text-primary-600 dark:text-primary-400">#{String(index + 1).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 hover:bg-primary-100 dark:hover:bg-primary-500/20 transition-colors font-mono"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                +{technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">Source</span>
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors ml-auto"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-medium">{t('projects.viewProject')}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Glow effect on hover - only dark mode */}
        <div className="hidden dark:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(99,102,241,0.15)]" />
        </div>

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 dark:via-primary-500/50 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
