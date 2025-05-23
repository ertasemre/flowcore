'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    <main className="min-h-screen bg-flowcore-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-acid-green glitch-text mb-6" data-text="CONTACT">
              CONTACT
            </h1>
            <p className="text-xl text-cyber-blue font-mono max-w-2xl mx-auto">
              Bizimle iletişime geç, underground sahnenin bir parçası ol
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-orbitron font-bold text-acid-green mb-6">
                Mesaj Gönder
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-acid-green/80 mb-2">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-flowcore-black/50 border border-acid-green/30 rounded text-acid-green font-mono placeholder-acid-green/50 focus:border-cyber-blue focus:outline-none transition-colors"
                    placeholder="Adın Soyadın"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-acid-green/80 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-flowcore-black/50 border border-acid-green/30 rounded text-acid-green font-mono placeholder-acid-green/50 focus:border-cyber-blue focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-mono text-acid-green/80 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-flowcore-black/50 border border-acid-green/30 rounded text-acid-green font-mono focus:border-cyber-blue focus:outline-none transition-colors"
                  >
                    <option value="">Konu seç</option>
                    <option value="artist">Sanatçı Başvurusu</option>
                    <option value="collaboration">İşbirliği Teklifi</option>
                    <option value="event">Etkinlik Organizasyonu</option>
                    <option value="booking">Booking</option>
                    <option value="press">Basın & Medya</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-acid-green/80 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-flowcore-black/50 border border-acid-green/30 rounded text-acid-green font-mono placeholder-acid-green/50 focus:border-cyber-blue focus:outline-none transition-colors resize-none"
                    placeholder="Mesajını buraya yaz..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full neon-button px-8 py-4 text-lg font-mono tracking-wider uppercase"
                >
                  Mesaj Gönder
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-6">
                <h3 className="text-xl font-orbitron font-bold text-acid-green mb-4">
                  Direkt İletişim
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-cyber-blue">📧</span>
                    <a 
                      href="mailto:info@flowcore.istanbul" 
                      className="text-acid-green/80 font-mono hover:text-cyber-blue transition-colors"
                    >
                      info@flowcore.istanbul
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyber-blue">📧</span>
                    <a 
                      href="mailto:booking@flowcore.istanbul" 
                      className="text-acid-green/80 font-mono hover:text-cyber-blue transition-colors"
                    >
                      booking@flowcore.istanbul
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-6">
                <h3 className="text-xl font-orbitron font-bold text-acid-green mb-4">
                  Sosyal Medya
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Instagram', handle: '@flowcore.istanbul', url: 'https://instagram.com/flowcore.istanbul' },
                    { name: 'SoundCloud', handle: 'flowcore-collective', url: 'https://soundcloud.com/flowcore-collective' },
                    { name: 'YouTube', handle: 'Flowcore Collective', url: 'https://youtube.com/@flowcore' },
                    { name: 'Bandcamp', handle: 'flowcore', url: 'https://flowcore.bandcamp.com' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 border border-acid-green/20 rounded hover:border-cyber-blue/50 transition-all duration-300 group"
                    >
                      <span className="text-cyber-blue group-hover:text-neon-pink transition-colors">🔗</span>
                      <div>
                        <div className="text-acid-green font-mono text-sm">{social.name}</div>
                        <div className="text-acid-green/60 font-mono text-xs">{social.handle}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-6">
                <h3 className="text-xl font-orbitron font-bold text-acid-green mb-4">
                  Topluluk
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href="https://discord.gg/flowcore"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 border border-rave-purple/30 rounded hover:border-rave-purple/60 transition-all duration-300 group"
                  >
                    <span className="text-rave-purple group-hover:text-neon-pink transition-colors">💬</span>
                    <div>
                      <div className="text-rave-purple font-mono text-sm">Discord Server</div>
                      <div className="text-rave-purple/60 font-mono text-xs">Underground community</div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://t.me/flowcore_istanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 border border-cyber-blue/30 rounded hover:border-cyber-blue/60 transition-all duration-300 group"
                  >
                    <span className="text-cyber-blue group-hover:text-neon-pink transition-colors">📱</span>
                    <div>
                      <div className="text-cyber-blue font-mono text-sm">Telegram</div>
                      <div className="text-cyber-blue/60 font-mono text-xs">Event updates</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-6">
                <h3 className="text-xl font-orbitron font-bold text-acid-green mb-4">
                  Lokasyon
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-cyber-blue">📍</span>
                    <span className="text-acid-green/80 font-mono">İstanbul, Türkiye</span>
                  </div>
                  <p className="text-acid-green/60 font-mono text-sm ml-6">
                    Underground sahnenin kalbi
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <div className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-8">
              <h2 className="text-2xl font-orbitron font-bold text-acid-green mb-6 text-center">
                Sık Sorulan Sorular
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    q: "Kolektife nasıl katılabilirim?",
                    a: "Sanatçı başvuru formu ile bize ulaşabilir, demo setlerini paylaşabilirsin."
                  },
                  {
                    q: "Etkinlik organizasyonu yapıyor musunuz?",
                    a: "Evet, mekan ve konsept uygunluğuna göre etkinlik organizasyonu yapıyoruz."
                  },
                  {
                    q: "Booking için nasıl başvurabilirim?",
                    a: "booking@flowcore.istanbul adresinden detaylı teklifinizi iletebilirsiniz."
                  },
                  {
                    q: "Hangi müzik türlerinde çalışıyorsunuz?",
                    a: "Acidcore, techno, hardcore, experimental ve underground electronic music."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
                    className="space-y-2"
                  >
                    <h4 className="text-cyber-blue font-mono font-bold text-sm">
                      {faq.q}
                    </h4>
                    <p className="text-acid-green/70 font-mono text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
} 