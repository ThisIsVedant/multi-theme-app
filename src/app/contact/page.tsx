'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sidebar } from '@/components/SideBar';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function ContactPage() {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {!useIsMobile() && currentTheme.layout.hasSidebar && <Sidebar />}
      <main
        className={`${currentTheme.bg} ${currentTheme.font} ${currentTheme.text} min-h-screen px-6 py-12 pt-32 ${
          currentTheme.layout.hasSidebar ? 'md:ml-64 sm:ml-0' : ''
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl font-bold text-center mb-4 ${currentTheme.textSecondary}`}>
            Get in <span className={`${currentTheme.title}`}>Touch</span>
          </h1>
          <p className="text-center text-gray-600 mb-12">
            We&apos;d love to hear from you. Fill out the form and we’ll get back to you shortly.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thanks for contacting us. We’ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-800">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`placeholder-gray-500 w-full border border-gray-300 px-4 py-3 rounded-lg ${currentTheme.textArea}`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-800">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`placeholder-gray-500 w-full border border-gray-300 px-4 py-3 rounded-lg ${currentTheme.textArea}`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`placeholder-gray-500 w-full border border-gray-300 px-4 py-3 rounded-lg ${currentTheme.textArea}`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`placeholder-gray-500 w-full border border-gray-300 px-4 py-3 rounded-lg resize-none ${currentTheme.textArea}`}
                    placeholder="Tell us more about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full text-white py-3 rounded-lg font-semibold transition ${currentTheme.button}`}
                >
                  📤 Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
