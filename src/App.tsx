import { useState } from 'react';
import { Heart } from 'lucide-react';
import IntegratedHero from './components/IntegratedHero';
import AboutStory from './components/AboutStory';
import OfferingsSection from './components/OfferingsSection';
import PhilosophyValues from './components/PhilosophyValues';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2D2D2D]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-stone-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Heart className="w-6 h-6 text-[#D4837C]" />
              <span className="text-2xl font-light text-[#2D2D2D]">
                Aliz
              </span>
            </button>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('offerings')}
                className="text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors text-sm font-medium"
              >
                Offerings
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors text-sm font-medium"
              >
                Philosophy
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors text-sm font-medium"
              >
                Voices
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-[#3D5A4C] text-white rounded-full font-medium hover:bg-[#2D4A3C] transition-all text-sm"
              >
                Connect
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#5A5A5A] hover:text-[#2D2D2D] transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-stone-200">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('offerings')}
                className="block w-full text-left py-2 text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors"
              >
                Offerings
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="block w-full text-left py-2 text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors"
              >
                Philosophy
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left py-2 text-[#5A5A5A] hover:text-[#3D5A4C] transition-colors"
              >
                Voices
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-[#3D5A4C] font-medium"
              >
                Connect
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <IntegratedHero />
        <AboutStory />
        <OfferingsSection />
        <PhilosophyValues />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 border-t border-stone-200 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[#D4837C]" />
              <span className="text-2xl font-light text-[#2D2D2D]">
                Aliz
              </span>
            </div>

            {/* Tagline */}
            <p className="text-[#8B8B8B] text-lg italic">
              Nurturing presence, one moment at a time
            </p>

            {/* Copyright */}
            <div className="text-center pt-8">
              <p className="text-sm text-[#8B8B8B]">
                © {new Date().getFullYear()} Aliz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
