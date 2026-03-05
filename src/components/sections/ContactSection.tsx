// Enhanced Contact Section with modern design - Supports light/dark mode

import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Mail, Send, Instagram,
  MapPin, Clock, MessageSquare
} from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { staggerContainer } from '../../utils/animations';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/fadi9p9',
    label: 'GitHub',
    color: 'hover:bg-gray-800 hover:text-white hover:border-gray-700',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600 hover:text-white hover:border-blue-500',
  },
  {
    icon: Mail,
    href: 'mailto:fadeaboemad@gmail.com',
    label: 'Email',
    color: 'hover:bg-red-500 hover:text-white hover:border-red-400',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/fade_henawe',
    label: 'Instagram',
    color: 'hover:bg-pink-500 hover:text-white hover:border-pink-400',
  },
  {
    icon: FaTelegram,
    href: 'https://t.me/@Fadi_henawe',
    label: 'Telegram',
    color: 'hover:bg-blue-500 hover:text-white hover:border-blue-400',
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fadeaboemad@gmail.com',
    href: 'mailto:fadeaboemad@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available Worldwide',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

export function ContactSection() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_zta1l1e',
        'template_9bg2qbp',
        form.current,
        '1RGCQGGLiicPsakSC'
      );
      setSubmitStatus('success');
      form.current.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section label */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terminal-100 dark:bg-terminal-500/10 border border-terminal-200 dark:border-terminal-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="w-4 h-4 text-terminal-600 dark:text-terminal-400" />
            <span className="text-sm text-terminal-700 dark:text-terminal-400 font-mono">Get in Touch</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info & Social Links */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <motion.div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-dark-800/30 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none"
                    whileHover={{ x: 5, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                  >
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-500/10">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('contact.getInTouch')}</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 transition-all duration-300 ${color}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                    >
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 outline-none transition-all shadow-sm dark:shadow-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                    >
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 outline-none transition-all shadow-sm dark:shadow-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 outline-none transition-all shadow-sm dark:shadow-none"
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                  >
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 outline-none transition-all resize-none shadow-sm dark:shadow-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full px-6 py-4 rounded-xl font-semibold
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-accent-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30'
                    }
                  `}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.send')}
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-terminal-100 dark:bg-terminal-500/10 border border-terminal-200 dark:border-terminal-500/30 text-terminal-700 dark:text-terminal-400 text-center"
                  >
                    {t('contact.successMessage')}
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 text-center"
                  >
                    {t('contact.errorMessage')}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
