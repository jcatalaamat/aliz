import React from 'react';
import { Heart, Sprout, Moon } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      icon: Sprout,
      title: 'Montessori Guidance',
      description: 'Creating nurturing environments where children can unfold according to their inner blueprint, honoring their natural curiosity and innate wisdom.',
      color: '#8B9A87',
    },
    {
      icon: Heart,
      title: 'Space Holding',
      description: 'Facilitating sacred circles and containers for deep presence, authentic sharing, and collective transformation. A space where all parts are welcome.',
      color: '#D4837C',
    },
    {
      icon: Moon,
      title: 'Medicine Work',
      description: 'Walking the path of ancestral wisdom and plant medicine, guiding others to remember their connection to the earth and the healing that lives within.',
      color: '#C9A961',
    },
  ];

  return (
    <section id="offerings" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D]">
            Offerings
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Each offering is an invitation to remember, to reconnect, and to return home to yourself.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className="group bg-[#FAFAF8] rounded-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-stone-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <Icon
                    size={64}
                    style={{ color: offering.color }}
                    className="opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3
                    className="text-2xl font-medium"
                    style={{ color: offering.color }}
                  >
                    {offering.title}
                  </h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
