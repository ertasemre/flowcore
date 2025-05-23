'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'ROOTS OF THE FUTURE',
    date: '22 Şubat 2025',
    time: '22:00 - 04:00',
    venue: 'Suma Han Studio Stage',
    location: 'Karaköy, İstanbul',
    artists: ['Oriofonul', 'All I Can', 'Sarpt', 'Ogimaru', 'Salek', 'Oxomo'],
    description: 'Flowcore Collective, psychedelic köklerine dönüş yaparak, Suma Han\'ın stüdyo sahnesinde mistik bir atmosfer yaratıyor. Sanatçıların özgün dekorasyonları ve özel kokteyllerle duyulara hitap eden bu gece, psytrance\'ın farklı alt türlerini bir araya getiriyor.',
    ticketUrl: 'https://bugece.co/flowcore-roots-future',
    status: 'upcoming',
    poster: '/events/roots-future.jpg',
    ticketSources: [
      { name: 'Resident Advisor', price: '+5' },
      { name: 'Bugece', price: '+5' },
      { name: 'Ra', price: '+5' }
    ],
  },
  {
    id: 2,
    title: 'NEW YEAR\'S EVE GATHERING',
    date: '31 Aralık 2023',
    time: '21:00 - 05:00',
    venue: 'The Black Cave',
    location: 'Maslak, İstanbul',
    artists: ['Carbone Black', 'Formal', 'Laren', 'Ogimaru', 'Sarpt'],
    description: 'Flowcore Collective ve The Black Cave işbirliğiyle düzenlenen bu yılbaşı etkinliği, groovy ve hypnotic techno\'dan başlayıp hard techno, trance, acidcore ve hardcore\'a uzanan bir müzik yelpazesi sunuyor. Yüksek BPM tutkunları için unutulmaz bir gece vaat ediyor.',
    ticketUrl: 'https://bugece.co/flowcore-newyear',
    status: 'past',
    poster: '/events/newyear-gathering.jpg',
    ticketSources: [
      { name: 'Bugece', price: '+2' },
      { name: 'Bugece', price: '+2' },
      { name: 'Bugece', price: '+2' }
    ],
  },
  {
    id: 3,
    title: 'URBAN FUSION',
    date: '14 Eylül 2024',
    time: '11:00 - 02:00',
    venue: 'The Black Cave',
    location: 'Maslak, İstanbul',
    artists: ['ABEM (FR)', 'Gehlektek (AT)', 'All I Can', 'Formal', 'Ogimaru', 'Sarpt'],
    description: 'Flowcore Collective, sezonu farklı müzik türlerini bir araya getirerek açıyor. VOVZ işbirliğiyle oluşturulan çağdaş sanat galerisiyle başlayan etkinlik, gece boyunca hız kesmeden devam ediyor. ABEM ve Gehlektek gibi uluslararası sanatçılar, Flowcore\'un yorumuyla İstanbul sahnesinde yer alıyor.',
    ticketUrl: 'https://bugece.co/flowcore-urban-fusion',
    status: 'past',
    poster: '/events/urban-fusion.jpg',
    ticketSources: [
      { name: 'Bugece', price: 'TBA' }
    ],
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.status === filter
  );

  return (
    <main className="min-h-screen bg-flowcore-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-acid-green glitch-text mb-6" data-text="EVENTS">
              EVENTS
            </h1>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center gap-4 mb-12"
          >
            {[
              { key: 'all', label: 'Tümü' },
              { key: 'upcoming', label: 'Yaklaşan' },
              { key: 'past', label: 'Geçmiş' }
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as 'all' | 'upcoming' | 'past')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 font-mono tracking-wider uppercase transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'neon-button'
                    : 'text-acid-green/60 border-2 border-acid-green/20 hover:border-acid-green/50 hover:text-acid-green'
                }`}
              >
                {filterOption.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg overflow-hidden hover:border-cyber-blue/50 transition-all duration-300"
              >
                {/* Event Poster */}
                <div className="relative h-64 bg-gradient-to-br from-rave-purple/30 to-cyber-blue/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-orbitron font-bold text-acid-green/40">
                      {event.title.split(' ')[0]}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full ${
                    event.status === 'upcoming' 
                      ? 'bg-acid-green/20 text-acid-green border border-acid-green/50' 
                      : 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50'
                  }`}>
                    {event.status === 'upcoming' ? 'Yaklaşan' : 'Geçmiş'}
                  </div>

                  {/* Glitch overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="scanner-line"></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black via-transparent to-transparent"></div>
                </div>

                {/* Event Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-orbitron font-bold text-acid-green">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-cyber-blue">📅</span>
                      <span className="text-acid-green/80">{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyber-blue">📍</span>
                      <span className="text-acid-green/80">{event.venue}, {event.location}</span>
                    </div>
                  </div>

                  <p className="text-acid-green/70 font-mono text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Artists */}
                  <div className="space-y-2">
                    <p className="text-xs text-cyber-blue font-mono uppercase tracking-wider">
                      Sanatçılar:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.artists.map((artist) => (
                        <span
                          key={artist}
                          className="px-2 py-1 text-xs font-mono bg-rave-purple/20 text-rave-purple border border-rave-purple/30 rounded"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ticket Sources */}
                  {event.ticketSources && (
                    <div className="space-y-2">
                      <p className="text-xs text-cyber-blue font-mono uppercase tracking-wider">
                        Bilet Satış Noktaları:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.ticketSources.map((source, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs font-mono bg-acid-green/20 text-acid-green border border-acid-green/30 rounded"
                          >
                            {source.name} {source.price}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="pt-4">
                    {event.status === 'upcoming' ? (
                      <motion.a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="neon-button px-6 py-3 text-sm font-mono tracking-wider uppercase inline-block"
                      >
                        Bilet Al
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 text-sm font-mono tracking-wider uppercase text-cyber-blue/60 border-2 border-cyber-blue/30 cursor-not-allowed"
                        disabled
                      >
                        Etkinlik Bitti
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-acid-green/5 to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-acid-green/60 font-mono">
                Bu kategoride etkinlik bulunamadı.
              </p>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 text-center"
          >
            <div className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-acid-green mb-4">
                Etkinliklerden Haberdar Ol
              </h3>
              <p className="text-acid-green/80 font-mono mb-6">
                Yeni etkinliklerimizden ilk sen haberdar olmak için bültenimize katıl.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-mail adresin"
                  className="flex-1 px-4 py-3 bg-flowcore-black/50 border border-acid-green/30 rounded text-acid-green font-mono placeholder-acid-green/50 focus:border-cyber-blue focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-button px-6 py-3 font-mono tracking-wider uppercase"
                >
                  Katıl
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 