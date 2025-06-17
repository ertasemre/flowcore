'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 0,
    title: 'OVER:FLOW',
    date: '27 June 2025',
    time: '22:00 - 05:00',
    venue: 'Suma Han - Both Floors',
    location: 'Karaköy, İstanbul',
    artists: ['L\'ART CÈNE', 'ABEM', 'DUBSTRACT', 'DYLN', 'GUNSELX', 'FOLDED', 'OGIMARU', 'SARPT', 'ALL I CAN', 'SEYMEN', 'FORMAL', 'KUZEN'],
    description: 'Get ready for 2 stages of niche underground sounds and meticulously crafted decor & visuals',
    ticketUrl: 'https://bugece.co/en/event/overflow-06-27-25',
    status: 'upcoming',
    poster: '/events/overflow-1.jpeg',
    ticketSources: [
      { name: 'Bugece', price: '' },
      { name: 'Instagram DM', price: '' }
    ],
  },
  {
    id: 1,
    title: 'ROOTS OF THE FUTURE',
    date: '22 Şubat 2024',
    time: '22:00 - 04:00',
    venue: 'Suma Han Studio Stage',
    location: 'Karaköy, İstanbul',
    artists: ['Oriofonul', 'All I Can', 'Sarpt', 'Ogimaru', 'Salek', 'Oxomo'],
    description: 'Flowcore Collective, psychedelic köklerine dönüş yaparak, Suma Han\'ın stüdyo sahnesinde mistik bir atmosfer yaratıyor. Sanatçıların özgün dekorasyonları ve özel kokteyllerle duyulara hitap eden bu gece, psytrance\'ın farklı alt türlerini bir araya getiriyor.',
    ticketUrl: 'https://bugece.co/flowcore-roots-future',
    status: 'past',
    poster: '/events/rootofthefuture.png',
    ticketSources: [
      { name: 'Sold Out', price: 'at All Channels' },
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
    poster: '/events/newyearsevegathering.jpeg',
    ticketSources: [
      { name: 'Bugece', price: '' },
      { name: 'The Black Cave', price: '' },
      { name: 'At Door', price: '' }
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
    poster: '/events/urbanfusion.jpeg',
    ticketSources: [
      { name: 'Bugece', price: 'Sold Out' },
      { name: 'At Door', price: 'N/A' }
    ],
  },
  {
    id: 4,
    title: 'ENTER THE FLOW',
    date: '12 Ağustos 2024',
    time: '20:00 - 03:00',
    venue: 'Underground Club',
    location: 'Beyoğlu, İstanbul',
    artists: ['All I Can', 'Formal', 'Ogimaru', 'Sarpt', 'Local Support'],
    description: 'Flowcore Collective\'in en iddialı etkinliklerinden biri olan Enter The Flow, underground elektronik müziğin en karanlık ve enerjik yanlarını keşfe çıkarıyor. Progressive house\'dan hard techno\'ya uzanan bu yolculukta, katılımcılar müziğin büyüsüne kapılıyor.',
    ticketUrl: 'https://bugece.co/flowcore-enter-flow',
    status: 'past',
    poster: '/events/entertheflow.png',
    ticketSources: [
      { name: 'Bugece', price: 'Sold Out' },
      { name: 'RA', price: 'Sold Out' }
    ],
  },
  {
    id: 5,
    title: 'KANZEN CHAOS',
    date: '25 Mayıs 2024',
    time: '22:30 - 05:00',
    venue: 'Secret Location',
    location: 'İstanbul',
    artists: ['Kanzen', 'All I Can', 'Formal', 'Ogimaru', 'Sarpt'],
    description: 'Kanzen Chaos, Flowcore Collective\'in en deneysel ve sıra dışı etkinliği. Gizli bir mekanda düzenlenen bu gecede, chaos theory\'nin müzikle buluştuğu noktada, katılımcılar öngörülemez ritimler ve atmosferlerle karşılaşıyor. Sınırları zorlayan bir elektronik müzik deneyimi.',
    ticketUrl: 'https://bugece.co/flowcore-kanzen-chaos',
    status: 'past',
    poster: '/events/kanzenchaos.png',
    ticketSources: [
      { name: 'Invite Only', price: 'Free' },
      { name: 'Secret Code', price: 'Free' }
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
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-pure-white glitch-text mb-6" data-text="EVENTS">
              EVENTS
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-light-text font-cs-felice max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Underground electronic music experiences
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center gap-4 mb-12"
          >
            {[
              { key: 'all', label: 'ALL' },
              { key: 'upcoming', label: 'UPCOMING' },
              { key: 'past', label: 'PAST' }
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as 'all' | 'upcoming' | 'past')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 font-cs-felice tracking-cs-wider uppercase transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'neon-button'
                    : 'text-light-text/60 border-2 border-silver/20 hover:border-silver/50 hover:text-pure-white'
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="block group relative bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg overflow-hidden hover:border-light-text/50 hover:shadow-2xl hover:shadow-light-text/20 transition-all duration-300"
              >
                {/* Event Poster */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.poster}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-cs-felice uppercase tracking-cs-wider rounded-full backdrop-blur-md ${
                    event.status === 'upcoming' 
                      ? 'bg-pure-white/20 text-pure-white border border-pure-white/50' 
                      : 'bg-text-gray/20 text-text-gray border border-text-gray/50'
                  }`}>
                    {event.status === 'upcoming' ? 'UPCOMING' : 'PAST'}
                  </div>

                  {/* Glitch overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="scanner-line"></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black via-transparent to-transparent"></div>
                </div>

                {/* Event Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-orbitron font-bold text-pure-white">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm font-cs-felice">
                    <div className="flex items-center gap-2">
                      <span className="text-silver">📅</span>
                      <span className="text-light-text/80">{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-silver">📍</span>
                      <span className="text-light-text/80">{event.venue}, {event.location}</span>
                    </div>
                  </div>

                  <p className="text-light-text/70 font-cs-felice text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Artists */}
                  <div className="space-y-2">
                    <p className="text-xs text-silver font-cs-felice uppercase tracking-cs-wider">
                      Sanatçılar:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.artists.map((artist) => (
                        <span
                          key={artist}
                          className="px-2 py-1 text-xs font-cs-felice bg-text-gray/20 text-text-gray border border-text-gray/30 rounded hover:bg-silver/20 hover:text-silver transition-colors duration-300"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ticket Sources */}
                  {event.ticketSources && (
                    <div className="space-y-2">
                      <p className="text-xs text-silver font-cs-felice uppercase tracking-cs-wider">
                        Bilet Satış Noktaları:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.ticketSources.map((source, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs font-cs-felice bg-pure-white/20 text-pure-white border border-pure-white/30 rounded"
                          >
                            {source.name} {source.price}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <motion.div className="pt-4 space-y-3">
                    {event.status === 'upcoming' ? (
                      <div className="flex gap-3">
                        <motion.a
                          href={event.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-block neon-button px-6 py-3 text-sm font-cs-felice tracking-cs-wider uppercase flex-1 text-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GET TICKETS
                        </motion.a>
                        <Link href={`/events/${event.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 text-sm font-cs-felice tracking-cs-wider uppercase text-light-text border-2 border-silver/20 hover:border-silver/50 hover:text-pure-white transition-all duration-300 flex-1"
                          >
                            DETAILS
                          </motion.button>
                        </Link>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <div className="inline-block px-6 py-3 text-sm font-cs-felice tracking-cs-wider uppercase flex-1 text-center text-text-gray border border-text-gray/30 rounded">
                          Etkinlik Sona Erdi
                        </div>
                        <Link href={`/events/${event.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 text-sm font-cs-felice tracking-cs-wider uppercase text-light-text border-2 border-silver/20 hover:border-silver/50 hover:text-pure-white transition-all duration-300 flex-1"
                          >
                            DETAILS
                          </motion.button>
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <h2 className="text-4xl font-orbitron font-bold text-pure-white mb-8">
              Event Gallery
            </h2>
            <p className="text-light-text font-cs-felice mb-12 max-w-2xl mx-auto">
              Geçmiş etkinliklerimizden kareler ve unutulmaz anlar
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {events.filter(e => e.status === 'past').map((event, idx) => (
                <motion.div
                  key={`gallery-${event.id}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + idx * 0.1, duration: 0.6 }}
                  className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={event.poster}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-flowcore-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-pure-white font-cs-felice text-xs tracking-cs-wide text-center px-2">
                      {event.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 