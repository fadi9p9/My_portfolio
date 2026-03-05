// Enhanced Hero Section with 3D elements and modern design - Supports light/dark mode

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Terminal, Server, Database, Github, Linkedin } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import image from '../../images/fadi.jpg';
import { staggerContainer, fadeInUp, slideInFromLeft, slideInFromRight } from '../../utils/animations';

export function HeroSection() {
  const { t, i18n } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/fadi9p9', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTelegram, href: 'https://t.me/@Fadi_henawe', label: 'Telegram' },
  ];

  const techStack = [
    { icon: Server, label: 'NestJS / Laravel' },
    { icon: Database, label: 'MySQL / PostgreSQL' },
    { icon: Terminal, label: 'REST API / GraphQL' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Animated code background - visible in both modes */}
      <div className="absolute inset-0 overflow-hidden opacity-[1] dark:opacity-[0.55] pointer-events-none flex items-center justify-center" style={{ filter: 'blur(1px)' }}>
        <motion.pre
          className="font-mono text-xs text-primary-1000 dark:text-accent-400 whitespace-pre leading-relaxed text-center"
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
{`const server = express();
app.use(express.json());

router.post('/api/data', async (req, res) => {
  const { query, params } = req.body;
  const result = await database.query(query, params);
  res.json({ success: true, data: result });
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.emit('welcome', { message: 'Hello!' });
});

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

const server = express();
app.use(express.json());

router.post('/api/data', async (req, res) => {
  const { query, params } = req.body;
  const result = await database.query(query, params);
  res.json({ success: true, data: result });
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.emit('welcome', { message: 'Hello!' });
});

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};`}
        </motion.pre>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={slideInFromLeft}
          >
            {/* Status indicator */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-dark-800/80 border border-primary-200 dark:border-primary-500/30 mb-6 shadow-sm dark:shadow-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-500"></span>
              </span>
              <span className="font-mono text-sm text-primary-600 dark:text-primary-400">
                {'>'} Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="text-gray-900 dark:text-white">{t('home.greeting')}</span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-terminal-500 dark:from-primary-400 dark:via-accent-400 dark:to-terminal-400 bg-clip-text text-transparent">
                {t('home.role')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              {t('home.description')}
            </motion.p>

            {/* Tech badges */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
              variants={fadeInUp}
            >
              {techStack.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(99, 102, 241, 0.5)',
                    backgroundColor: 'rgba(249, 250, 251, 1)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              variants={fadeInUp}
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg shadow-primary-500/25 overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('projects.title')}
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-white/5 backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                {t('contact.title')}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">{i18n.language === 'ar' ? 'تابعني:' : 'Follow me:'}</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-dark-800/50 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-primary-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with 3D effect */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            variants={slideInFromRight}
          >
            <div className="relative">
              {/* Glowing background rings */}
              <motion.div
                className="absolute inset-0 -m-8 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 rounded-full border border-primary-200 dark:border-primary-500/20" />
                <div className="absolute inset-4 rounded-full border border-primary-100 dark:border-primary-500/10" />
                <div className="absolute inset-8 rounded-full border border-accent-100 dark:border-accent-500/10" />
              </motion.div>

              {/* Glowing orb background */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 dark:from-primary-500/30 dark:to-accent-500/30 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Image container */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-500/30 shadow-xl"
                whileHover={{ scale: 1.02 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={image}
                  alt="Fadi Henawe"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-2 -right-2 p-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-primary-500/30 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Server className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 p-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-accent-500/30 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <Database className="w-5 h-5 text-accent-500 dark:text-accent-400" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 p-2.5 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-terminal-500/30 shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Terminal className="w-4 h-4 text-terminal-500 dark:text-terminal-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center gap-2 text-primary-500 dark:text-primary-400">
          <span className="text-xs font-mono opacity-50">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
}
