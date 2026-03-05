import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection, ProjectsSection, SkillsSection, ContactSection } from './components/sections';
import { GridBackground } from './components/3d';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-800 dark:text-white transition-colors duration-300 ${i18n.language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Animated Grid Background */}
      <GridBackground variant="default" showScanline={true} showOrbs={true} />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Header / Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Fadi Henawe. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
