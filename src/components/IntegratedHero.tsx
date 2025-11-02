import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const IntegratedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4837C] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A8B5A1] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C9A961] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
      </div>

      {/* Gentle spotlight following mouse */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 181, 161, 0.12), transparent 40%)`
        }}
      />

      {/* Content Container */}
      <div className={`relative z-10 container mx-auto px-6 py-20 md:py-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-light text-[#2D2D2D] tracking-tight">
            Aliz
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-[#5A5A5A] font-light">
              Montessori Teacher · Space Holder · Medicine Teacher
            </p>
            <p className="text-lg md:text-xl text-[#8B8B8B] max-w-2xl mx-auto leading-relaxed">
              Guiding children and adults back to their natural wisdom, one present moment at a time.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={scrollToContent}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#3D5A4C] text-white font-medium rounded-full hover:bg-[#2D4A3C] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Explore</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#8B9A87] text-[#3D5A4C] font-medium rounded-full hover:bg-white hover:border-[#3D5A4C] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#8B9A87] opacity-50" />
      </div>
    </section>
  );
};

export default IntegratedHero;
