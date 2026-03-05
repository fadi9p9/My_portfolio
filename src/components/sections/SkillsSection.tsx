// Enhanced Skills Section with animated cards and tech stack visualization - Supports light/dark mode

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Code2, Server, Database, Palette, Terminal,
  Shield, Cloud, GitBranch, Cpu
} from 'lucide-react';
import { staggerContainer } from '../../utils/animations';

interface Skill {
  title: string;
  titleKey?: string;
  icon: typeof Server;
  level: number;
  color: string;
  gradient: string;
  description?: string;
}

const skills: Skill[] = [
  {
    title: 'Backend Development',
    icon: Server,
    level: 90,
    color: 'text-green-500 dark:text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    description: 'NestJS, Laravel, Node.js, Express',
  },
  {
    title: 'Database Management',
    icon: Database,
    level: 85,
    color: 'text-purple-500 dark:text-purple-400',
    gradient: 'from-purple-500 to-violet-500',
    description: 'MySQL, PostgreSQL, MongoDB, Redis',
  },
  {
    title: 'API Development',
    icon: Code2,
    level: 88,
    color: 'text-blue-500 dark:text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'RESTful, GraphQL, WebSocket',
  },
  {
    title: 'Frontend Development',
    icon: Palette,
    level: 60,
    color: 'text-pink-500 dark:text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'React, TypeScript, Tailwind CSS',
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    level: 65,
    color: 'text-orange-500 dark:text-orange-400',
    gradient: 'from-orange-500 to-amber-500',
    description: 'Docker, CI/CD, Linux',
  },
  {
    title: 'Web Security',
    icon: Shield,
    level: 70,
    color: 'text-red-500 dark:text-red-400',
    gradient: 'from-red-500 to-rose-500',
    description: 'JWT, OAuth, OWASP',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    level: 85,
    color: 'text-teal-500 dark:text-teal-400',
    gradient: 'from-teal-500 to-cyan-500',
    description: 'Git, GitHub, GitLab',
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    level: 55,
    color: 'text-sky-500 dark:text-sky-400',
    gradient: 'from-sky-500 to-blue-500',
    description: 'AWS, Netlify, Vercel',
  },
];

// Technologies I work with
const techStack = [
  { name: 'Node.js', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'REST API', category: 'api' },
  { name: 'GraphQL', category: 'api' },
  { name: 'WebSocket', category: 'api' },
  { name: 'React', category: 'frontend' },
  { name: 'TailwindCSS', category: 'frontend' },
];

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section label */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-500/10 border border-accent-200 dark:border-accent-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Cpu className="w-4 h-4 text-accent-600 dark:text-accent-400" />
            <span className="text-sm text-accent-700 dark:text-accent-400 font-mono">Tech Stack</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable backend systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technologies I Work With</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">Click on any technology to learn more</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`
                  px-4 py-2 rounded-lg font-mono text-sm
                  border backdrop-blur-sm cursor-default
                  transition-all duration-200
                  ${getCategoryStyles(tech.category)}
                `}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Individual Skill Card
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-white dark:bg-dark-800/30 border border-gray-200 dark:border-white/5 hover:border-primary-200 dark:hover:border-white/20 backdrop-blur-sm transition-all duration-300 shadow-sm dark:shadow-none"
    >
      {/* Icon */}
      <motion.div
        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.gradient} mb-4 shadow-lg`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <skill.icon className="w-6 h-6 text-white" />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{skill.description}</p>

      {/* Progress bar */}
      <div className="relative">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-gray-500 dark:text-gray-500">Proficiency</span>
          <span className={skill.color}>{skill.level}%</span>
        </div>
        <div className="h-1.5 bg-gray-200 dark:bg-dark-900 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Hover glow */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${skill.gradient}`}
        style={{ opacity: 0.03 }}
      />
    </motion.div>
  );
}

// Get category-specific styles
function getCategoryStyles(category: string): string {
  const styles: Record<string, string> = {
    backend: 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20 hover:bg-green-100 dark:hover:bg-green-500/20',
    language: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/20',
    database: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20 hover:bg-purple-100 dark:hover:bg-purple-500/20',
    devops: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/20 hover:bg-orange-100 dark:hover:bg-orange-500/20',
    api: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20 hover:bg-cyan-100 dark:hover:bg-cyan-500/20',
    frontend: 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-500/20 hover:bg-pink-100 dark:hover:bg-pink-500/20',
  };
  return styles[category] || 'bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10';
}
