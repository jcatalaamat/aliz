import { useState } from 'react';
import { Mail, Send, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mailto for now - can be replaced with EmailJS later
    const mailtoLink = `mailto:contact@aliz.com?subject=Message from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D]">
            Let's Connect
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto leading-relaxed">
            Whether you're curious about Montessori education, seeking a space holder for your circle, or ready to explore medicine work, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#FAFAF8] rounded-lg p-8 border border-stone-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#5A5A5A] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-[#2D2D2D] placeholder-stone-400 focus:outline-none focus:border-[#8B9A87] transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5A5A5A] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-[#2D2D2D] placeholder-stone-400 focus:outline-none focus:border-[#8B9A87] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#5A5A5A] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-[#2D2D2D] placeholder-stone-400 focus:outline-none focus:border-[#8B9A87] transition-colors resize-none"
                  placeholder="Share what's calling you to connect..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#3D5A4C] text-white font-medium rounded-full hover:bg-[#2D4A3C] hover:shadow-lg transform hover:scale-[1.02] transition-all"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="bg-[#F5F1E8] rounded-lg p-8 border border-stone-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#D4837C]">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-[#2D2D2D]">Email</h3>
              </div>
              <a
                href="mailto:contact@aliz.com"
                className="text-[#3D5A4C] hover:text-[#2D4A3C] transition-colors"
              >
                contact@aliz.com
              </a>
            </div>

            {/* Social Links */}
            <div className="bg-[#F5F1E8] rounded-lg p-8 border border-stone-200">
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-6">Connect</h3>
              <div className="space-y-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com/aliz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200 hover:border-[#D4837C] transition-all group"
                >
                  <div className="p-2 rounded-full bg-[#D4837C]">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#5A5A5A] group-hover:text-[#3D5A4C] transition-colors">
                    Instagram
                  </span>
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="text-center pt-8">
              <p className="text-[#8B8B8B] italic leading-relaxed">
                All inquiries are met with care and usually responded to within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
