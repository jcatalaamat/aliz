import React from 'react';

const AboutStory: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] bg-stone-300 rounded-lg flex items-center justify-center">
              <span className="text-stone-400 text-sm">Image placeholder</span>
            </div>
          </div>

          {/* Story Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D] leading-tight">
              Meet Aliz
            </h2>

            <div className="space-y-4 text-lg text-[#5A5A5A] leading-relaxed">
              <p>
                A journey guided by presence, rooted in nature, and devoted to nurturing the sacred in everyday life.
              </p>

              <p>
                As a Montessori teacher, I believe in the innate wisdom of each child and the transformative power of prepared environments that honor their natural development.
              </p>

              <p>
                As a space holder, I create containers for deep listening, authentic expression, and collective healing. In circle, we remember what it means to be truly seen and held.
              </p>

              <p>
                As a medicine teacher, I walk alongside those who seek to reconnect with ancestral wisdom, plant allies, and the ancient rhythms that live within us all.
              </p>
            </div>

            <div className="pt-6">
              <div className="inline-block px-6 py-3 bg-[#3D5A4C] text-white rounded-full text-sm font-medium hover:bg-[#2D4A3C] transition-all duration-300">
                Learn more about my offerings
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
