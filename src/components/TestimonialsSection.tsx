import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Working with Aliz has been transformative. Her presence creates a safe container where I could finally let my guard down and heal.",
      author: "Sarah",
      role: "Circle Participant",
    },
    {
      quote: "As a parent, watching my child flourish under Aliz's guidance has been a gift. She truly sees each child's unique light.",
      author: "Maria",
      role: "Parent",
    },
    {
      quote: "The medicine work with Aliz opened doors I didn't know existed. She holds space with such wisdom and compassion.",
      author: "James",
      role: "Medicine Journey Participant",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D]">
            Voices
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Reflections from those who have walked this path.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-[#D4837C] opacity-50 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-[#5A5A5A] leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-stone-200 pt-4">
                <p className="font-medium text-[#3D5A4C]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#8B8B8B]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
