'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-flowcore-black relative overflow-hidden">
      <Navigation />
      
      {/* Animated Background - Client Side Only */}
      {isClient && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`bg-particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-pure-white/15 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight
                ],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 25 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ willChange: 'transform' }}
            />
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-orbitron font-black text-pure-white glitch-text mb-8" 
              data-text="CONTACT"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              CONTACT
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-3xl text-silver font-mono">
                Get In Touch
              </p>
              <motion.p 
                className="text-lg md:text-xl text-light-text/80 font-mono max-w-3xl mx-auto leading-relaxed"
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </motion.p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Contact Form - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="xl:col-span-2"
            >
              <div className="bg-flowcore-black/60 backdrop-blur-md border border-silver/30 rounded-xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pure-white/5 via-silver/5 to-light-text/5"
                  animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-orbitron font-bold text-pure-white mb-8 text-center">
                    Send Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-mono text-light-text/80 mb-3 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-silver/30 rounded-lg text-pure-white font-mono placeholder-light-text/50 focus:border-pure-white focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-mono text-light-text/80 mb-3 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-silver/30 rounded-lg text-pure-white font-mono placeholder-light-text/50 focus:border-pure-white focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-mono text-light-text/80 mb-3 uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-silver/30 rounded-lg text-pure-white font-mono focus:border-pure-white focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      >
                        <option value="">Select Subject</option>
                        <option value="artist">Artist Application</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="event">Event Organization</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="media">Media & Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-mono text-light-text/80 mb-3 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-silver/30 rounded-lg text-pure-white font-mono placeholder-light-text/50 focus:border-pure-white focus:outline-none transition-all duration-300 resize-none focus:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        placeholder="Your message..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="neon-button w-full py-4 text-lg font-mono tracking-wider uppercase"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div className="bg-flowcore-black/60 backdrop-blur-md border border-silver/30 rounded-xl p-6 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pure-white/5 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-pure-white mb-6 flex items-center gap-2">
                    <span>📧</span> Direct Contact
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-flowcore-black/30 rounded-lg border border-silver/20 hover:border-light-text/50 transition-all duration-300">
                      <span className="text-silver text-lg">✉️</span>
                      <div>
                        <a 
                          href="mailto:info@flowcore.com"
                          className="text-light-text/90 font-mono hover:text-pure-white transition-colors"
                        >
                          info@flowcore.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-flowcore-black/30 rounded-lg border border-silver/20 hover:border-light-text/50 transition-all duration-300">
                      <span className="text-silver text-lg">🎵</span>
                      <div>
                        <a 
                          href="mailto:bookings@flowcore.com"
                          className="text-light-text/90 font-mono hover:text-pure-white transition-colors"
                        >
                          bookings@flowcore.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-flowcore-black/60 backdrop-blur-md border border-text-gray/30 rounded-xl p-6 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-text-gray/5 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-text-gray mb-6 flex items-center gap-2">
                    <span>🌐</span> Social Media
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: '📸', name: 'Instagram', handle: '@flowcore_collective' },
                      { icon: '🐦', name: 'Twitter', handle: '@flowcore_music' },
                      { icon: '🎵', name: 'SoundCloud', handle: 'flowcore-collective' },
                      { icon: '📺', name: 'YouTube', handle: 'FlowcoreCollective' }
                    ].map((social) => (
                      <div
                        key={social.name}
                        className="flex items-center gap-3 p-3 border border-text-gray/20 rounded-lg hover:border-silver/50 transition-all duration-300 group bg-flowcore-black/30"
                      >
                        <span className="text-text-gray group-hover:text-silver transition-colors text-lg">{social.icon}</span>
                        <div>
                          <div className="text-text-gray font-mono text-sm group-hover:text-silver transition-colors">{social.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Community */}
              <div className="bg-flowcore-black/60 backdrop-blur-md border border-light-text/30 rounded-xl p-6 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-light-text/5 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-light-text mb-6 flex items-center gap-2">
                    <span>👥</span> Community
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 border border-light-text/30 rounded-lg hover:border-silver/60 transition-all duration-300 group bg-flowcore-black/30">
                      <span className="text-light-text group-hover:text-silver transition-colors text-xl">💬</span>
                      <div>
                        <div className="text-light-text font-mono text-sm group-hover:text-silver transition-colors">Discord Server</div>
                        <div className="text-light-text/60 font-mono text-xs">Underground community</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 border border-light-text/30 rounded-lg hover:border-silver/60 transition-all duration-300 group bg-flowcore-black/30">
                      <span className="text-light-text group-hover:text-silver transition-colors text-xl">📱</span>
                      <div>
                        <div className="text-light-text font-mono text-sm group-hover:text-silver transition-colors">Telegram</div>
                        <div className="text-light-text/60 font-mono text-xs">Event updates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20"
          >
            <div className="bg-flowcore-black/70 backdrop-blur-md border border-silver/30 rounded-xl p-10 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pure-white/3 via-silver/3 to-light-text/3"
                animate={{
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-orbitron font-black text-pure-white mb-12 text-center">
                  Frequently Asked Questions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      question: "How can I join the collective?",
                      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Send us your demo tracks and we'll get back to you."
                    },
                    {
                      question: "Do you organize events regularly?",
                      answer: "Yes, we organize monthly underground events in Istanbul. Follow our social media for updates."
                    },
                    {
                      question: "Can I book artists for my event?",
                      answer: "Absolutely! Contact us via booking email with your event details and we'll arrange everything."
                    },
                    {
                      question: "What music genres do you focus on?",
                      answer: "We specialize in electronic music: psytrance, techno, acidcore, and experimental underground sounds."
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="bg-flowcore-black/40 p-6 rounded-lg border border-silver/20 hover:border-light-text/40 transition-all duration-300 space-y-4"
                    >
                      <h4 className="text-silver font-mono font-bold text-lg leading-relaxed">
                        {faq.question}
                      </h4>
                      <p className="text-light-text/80 font-mono text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 