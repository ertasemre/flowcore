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
              className="absolute w-0.5 h-0.5 bg-acid-green/15 rounded-full"
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
              className="text-7xl md:text-9xl font-orbitron font-black text-acid-green glitch-text mb-8" 
              data-text="CONTACT"
              animate={{
                textShadow: [
                  "0 0 20px rgba(57,255,20,0.5)",
                  "0 0 40px rgba(57,255,20,0.8)",
                  "0 0 20px rgba(57,255,20,0.5)"
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
              <p className="text-2xl md:text-3xl text-cyber-blue font-mono">
                Get In Touch
              </p>
              <motion.p 
                className="text-lg md:text-xl text-acid-green/80 font-mono max-w-3xl mx-auto leading-relaxed"
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
              <div className="bg-flowcore-black/60 backdrop-blur-md border border-acid-green/30 rounded-xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-acid-green/5 via-cyber-blue/5 to-rave-purple/5"
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
                  <h2 className="text-3xl font-orbitron font-bold text-acid-green mb-8 text-center">
                    Send Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-mono text-acid-green/80 mb-3 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-acid-green/30 rounded-lg text-acid-green font-mono placeholder-acid-green/50 focus:border-cyber-blue focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,195,255,0.3)]"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-mono text-acid-green/80 mb-3 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-acid-green/30 rounded-lg text-acid-green font-mono placeholder-acid-green/50 focus:border-cyber-blue focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,195,255,0.3)]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-mono text-acid-green/80 mb-3 uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-acid-green/30 rounded-lg text-acid-green font-mono focus:border-cyber-blue focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,195,255,0.3)]"
                      >
                        <option value="">Select Subject</option>
                        <option value="artist">Artist Application</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="event">Event Organization</option>
                        <option value="booking">Booking</option>
                        <option value="press">Press & Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-mono text-acid-green/80 mb-3 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        className="w-full px-4 py-4 bg-flowcore-black/70 border-2 border-acid-green/30 rounded-lg text-acid-green font-mono placeholder-acid-green/50 focus:border-cyber-blue focus:outline-none transition-all duration-300 resize-none focus:shadow-[0_0_20px_rgba(0,195,255,0.3)]"
                        placeholder="Your message here..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(57, 255, 20, 0.6)",
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full neon-button px-8 py-5 text-lg font-mono tracking-wider uppercase relative overflow-hidden"
                    >
                      <span className="relative z-10">Send Message</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="space-y-6"
            >
              {/* Direct Contact */}
              <motion.div 
                className="bg-flowcore-black/60 backdrop-blur-md border border-acid-green/30 rounded-xl p-6 relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(57,255,20,0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-acid-green/5 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-acid-green mb-6 flex items-center gap-2">
                    <span className="text-2xl">📧</span>
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3 p-3 bg-flowcore-black/30 rounded-lg border border-acid-green/20 hover:border-cyber-blue/50 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-cyber-blue text-lg">✉️</span>
                      <a 
                        href="mailto:info@flowcore.collective" 
                        className="text-acid-green/90 font-mono hover:text-cyber-blue transition-colors"
                      >
                        info@flowcore.collective
                      </a>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 p-3 bg-flowcore-black/30 rounded-lg border border-acid-green/20 hover:border-cyber-blue/50 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-cyber-blue text-lg">🎵</span>
                      <a 
                        href="mailto:booking@flowcore.collective" 
                        className="text-acid-green/90 font-mono hover:text-cyber-blue transition-colors"
                      >
                        booking@flowcore.collective
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="bg-flowcore-black/60 backdrop-blur-md border border-cyber-blue/30 rounded-xl p-6 relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(0,195,255,0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-cyber-blue mb-6 flex items-center gap-2">
                    <span className="text-2xl">🌐</span>
                    Social Media
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Instagram', handle: '@flowcore.collective', url: 'https://instagram.com/flowcore.collective', icon: '📷' },
                      { name: 'SoundCloud', handle: 'flowcore-collective', url: 'https://soundcloud.com/flowcore-collective', icon: '🎧' },
                      { name: 'YouTube', handle: 'Flowcore Collective', url: 'https://www.youtube.com/@FlowcoreCollective', icon: '📺' },
                      { name: 'Bandcamp', handle: 'flowcore', url: 'https://flowcore.bandcamp.com', icon: '💿' }
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-3 border border-cyber-blue/20 rounded-lg hover:border-neon-pink/50 transition-all duration-300 group bg-flowcore-black/30"
                      >
                        <span className="text-cyber-blue group-hover:text-neon-pink transition-colors text-lg">{social.icon}</span>
                        <div>
                          <div className="text-cyan-400 font-mono text-sm group-hover:text-neon-pink transition-colors">{social.name}</div>
                          <div className="text-cyan-400/60 font-mono text-xs">{social.handle}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Community */}
              <motion.div 
                className="bg-flowcore-black/60 backdrop-blur-md border border-rave-purple/30 rounded-xl p-6 relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(157,0,255,0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rave-purple/5 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-rave-purple mb-6 flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    Community
                  </h3>
                  <div className="space-y-3">
                    <motion.a
                      href="https://discord.gg/flowcore"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-4 border border-rave-purple/30 rounded-lg hover:border-neon-pink/60 transition-all duration-300 group bg-flowcore-black/30"
                    >
                      <span className="text-rave-purple group-hover:text-neon-pink transition-colors text-xl">💬</span>
                      <div>
                        <div className="text-rave-purple font-mono text-sm group-hover:text-neon-pink transition-colors">Discord Server</div>
                        <div className="text-rave-purple/60 font-mono text-xs">Underground community</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="https://t.me/flowcore_collective"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-4 border border-rave-purple/30 rounded-lg hover:border-neon-pink/60 transition-all duration-300 group bg-flowcore-black/30"
                    >
                      <span className="text-rave-purple group-hover:text-neon-pink transition-colors text-xl">📱</span>
                      <div>
                        <div className="text-rave-purple font-mono text-sm group-hover:text-neon-pink transition-colors">Telegram</div>
                        <div className="text-rave-purple/60 font-mono text-xs">Event updates</div>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* FAQ Section - Enhanced */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="mt-20"
          >
            <motion.div
              className="bg-flowcore-black/70 backdrop-blur-md border border-acid-green/30 rounded-xl p-10 relative overflow-hidden"
              whileInView={{
                boxShadow: [
                  "0 0 30px rgba(57,255,20,0.2)",
                  "0 0 50px rgba(57,255,20,0.4)",
                  "0 0 30px rgba(57,255,20,0.2)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-acid-green/3 via-cyber-blue/3 to-rave-purple/3"
                animate={{
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-orbitron font-black text-acid-green mb-12 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    {
                      q: "Lorem ipsum dolor sit amet?",
                      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    },
                    {
                      q: "Consectetur adipiscing elit sed?",
                      a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                      q: "Tempor incididunt ut labore?",
                      a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                      q: "Excepteur sint occaecat cupidatat?",
                      a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                      q: "Sed ut perspiciatis unde omnis?",
                      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    },
                    {
                      q: "At vero eos et accusamus?",
                      a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
                      className="bg-flowcore-black/40 p-6 rounded-lg border border-acid-green/20 hover:border-cyber-blue/40 transition-all duration-300 space-y-4"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(0,195,255,0.1)"
                      }}
                    >
                      <h4 className="text-cyber-blue font-mono font-bold text-lg leading-relaxed">
                        {faq.q}
                      </h4>
                      <p className="text-acid-green/80 font-mono text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </section>
    </main>
  );
} 