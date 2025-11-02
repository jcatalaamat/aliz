import React from 'react';

const PhilosophyValues: React.FC = () => {
  const values = [
    {
      title: 'Presence',
      description: 'Being fully here, now, with what is.',
    },
    {
      title: 'Trust',
      description: 'Honoring the innate wisdom in each being.',
    },
    {
      title: 'Connection',
      description: 'Remembering we belong to each other and the earth.',
    },
    {
      title: 'Reverence',
      description: 'Approaching life with wonder and sacred attention.',
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 px-6 bg-gradient-to-b from-[#F5F1E8] to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D]">
            Philosophy
          </h2>
          <p className="text-xl text-[#5A5A5A] leading-relaxed italic max-w-3xl mx-auto">
            "The work of education is not to fill the child with facts, but to cultivate their natural desire for knowledge. We are here to serve life as it unfolds."
          </p>
        </div>

        {/* Philosophy Text */}
        <div className="prose prose-lg max-w-none mb-12 space-y-6 text-[#5A5A5A]">
          <p className="leading-relaxed">
            My approach is rooted in deep listening—to children, to the earth, to the quiet knowing that lives beneath the noise of our modern world.
          </p>
          <p className="leading-relaxed">
            I believe that healing and learning are not separate. They are both acts of remembering: remembering how to trust ourselves, how to be in relationship with all of life, how to honor the cycles and seasons that move through us.
          </p>
          <p className="leading-relaxed">
            Whether working with children in a Montessori setting, holding space for adults in circle, or guiding plant medicine journeys, the intention is the same: to create conditions where transformation can occur naturally, organically, in its own time.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-stone-200 hover:border-[#8B9A87] transition-all duration-300"
            >
              <h3 className="text-2xl font-medium text-[#3D5A4C] mb-3">
                {value.title}
              </h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyValues;
