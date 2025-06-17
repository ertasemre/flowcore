'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
            </motion.div>
          </motion.div>

          {/* Social Media Links - Larger and Single Line on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-flowcore-black/60 backdrop-blur-md border border-text-gray/30 rounded-xl p-8 relative overflow-hidden">
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
                <h3 className="text-2xl font-orbitron font-bold text-text-gray mb-8 text-center flex items-center justify-center gap-2">
                  <span>🌐</span> Social Media
                </h3>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                  <a 
                    href="https://www.instagram.com/flowcore.collective/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-text-gray/20 rounded-lg hover:border-silver/50 transition-all duration-300 group bg-flowcore-black/30 w-full md:w-auto"
                  >
                    <span className="text-text-gray group-hover:text-silver transition-colors text-3xl">📸</span>
                    <div>
                      <div className="text-text-gray font-mono text-lg group-hover:text-silver transition-colors">Instagram</div>
                      <div className="text-text-gray/60 font-mono">@flowcore.collective</div>
                    </div>
                  </a>

                  <a 
                    href="https://www.youtube.com/channel/UCTlmqVTxnLd3_GoFTcOli7A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-text-gray/20 rounded-lg hover:border-silver/50 transition-all duration-300 group bg-flowcore-black/30 w-full md:w-auto"
                  >
                    <span className="text-text-gray group-hover:text-silver transition-colors text-3xl">📺</span>
                    <div>
                      <div className="text-text-gray font-mono text-lg group-hover:text-silver transition-colors">YouTube</div>
                      <div className="text-text-gray/60 font-mono">FlowcoreCollective</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

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
                      answer: "Please contact us via our Instagram page and introduce yourself with your experiences, motivations, and musical background."
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