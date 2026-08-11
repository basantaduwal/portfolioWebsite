import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, isVisible] = useInView({ threshold: 0.05 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const mailtoSubject = encodeURIComponent(formData.subject);
      const mailtoBody = encodeURIComponent(
        `Hi Basanta,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:basantaduwal10@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Top Banner CTA */}
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/80 to-slate-900/90 text-center mb-20 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Have a project in mind?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                I'm always interested in learning, building, and working on meaningful projects.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="#contact-form"
                  className="btn-primary inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/25 transition-all text-sm"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/basantaduwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium px-6 py-3 rounded-xl border border-slate-700 transition-all text-sm"
                >
                  <GithubIcon size={18} />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-14">
            <span className="section-label">// get in touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Let's Build Something Together
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
              I'm currently open to internship opportunities, junior roles, collaborations, and interesting web development projects.
            </p>
          </div>

          {/* Contact Layout */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href="mailto:basantaduwal10@gmail.com"
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center gap-4 transition-all block group"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block">
                    Email
                  </span>
                  <span className="text-slate-200 font-medium text-sm sm:text-base group-hover:text-indigo-400 transition-colors">
                    basantaduwal10@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+9779767234983"
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center gap-4 transition-all block group"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block">
                    Phone
                  </span>
                  <span className="text-slate-200 font-medium text-sm sm:text-base group-hover:text-indigo-400 transition-colors">
                    +977 9767234983
                  </span>
                </div>
              </a>

              <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-slate-200 font-medium text-sm sm:text-base">
                    Bhaktapur, Nepal
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider">
                  Connect On Socials
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/basantaduwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/basantaduwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5"
                noValidate
              >
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-slate-950/80 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    } rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 bg-slate-950/80 border ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    } rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Web Development Opportunity / Inquiry"
                    className={`w-full px-4 py-3 bg-slate-950/80 border ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    } rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Basanta, I'd like to discuss an opportunity..."
                    className={`w-full px-4 py-3 bg-slate-950/80 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    } rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] !text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all text-sm cursor-pointer border border-indigo-500/30"
                >
                  <Send className="w-4 h-4 !text-white" />
                  <span className="!text-white font-semibold">Send Message</span>
                </button>

                <p className="text-center text-xs text-slate-500 font-mono pt-1">
                  Note: Submitting will open your default email application with pre-filled details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
