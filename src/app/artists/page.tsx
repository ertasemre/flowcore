'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

const artists = [
  {
    name: 'OGIMARU',
    realName: '@ogi.maru',
    genre: ' HITECH / Psycore / TEKNO',
    description: 'A founding member of Flowcore, drawing inspiration from the niche edges of the global scene. He is best known for his high-bpm psychedelic sounds that seamlessly blend hard-hitting beats with uplifting touches and dark twists. His productions are crafted to ignite the dancefloor, creating an intense yet joyful experience. He channels his creativity into producing tracks that are a sweet blend of familiar and experimental. \r\n\r\nBehind the decks he\'s always looking for unconventional combinations of powerful rhythms that are able to take shape into a vibrant story.',
    soundcloud: 'https://soundcloud.com/ogimaru',
    image: '/artists/ogimaru.jpg',
  },
  {
    name: 'ALL I CAN',
    realName: '@all.i.can.music',
    genre: 'Groovy Psytrance / Zenonesque',
    description: 'Straight from the heart of Istanbul\u2019s underground, ALL I CAN  \u2014 takes you on a journey that blends deep grooves with hypnotic energy. Starting out with guitar, piano, and percussion, his early passion for music evolved into a full-blown production obsession back in 2019.\r\nHe first explored the edges of Minimal Tech and Alternative, but it was during the pandemic that he dove headfirst into the world of psytrance \u2014 and never looked back.\r\nNow, as a rising name behind the decks, ALL I CAN crafts immersive sets that move bodies and minds alike. With a unique fusion of Minimal Tech textures and psychedelic drive, he\u2019s all about pushing sonic boundaries and creating unforgettable moments on the dancefloor.\r\n', soundcloud: 'https://soundcloud.com/allicanmusic',
    image: '/artists/allican.jpg',
  },
  {
    name: 'FORMAL',
    realName: '@hfrml',
    genre: 'Hard Techno / HARDCORE',
    description: 'Flowcore\u2019s dark side and one of the OG residents, F\u00F8rmal has been a lifelong music enthusiast and a hardcore electronic music fan since 2010. He dedicated his life to creating an immense archive for expressing the vibe he wants to reflect and started DJing in 2019. The music he plays ranges from frenzied and accelerating dance music to intense and hard tracks that shake the sky and the earth. \r\n',    soundcloud: 'https://soundcloud.com/hfrml',
    image: '/artists/formal.jpg',
  },
  {
    name: 'SARPT',
    realName: '@sarpterlemez',
    genre: 'ACIDCORE / BREAKBEAT / PSYTRANCE',
    description: 'One of the founders and a self-taught producer; Sarp is Dedicated to Acidcore, Breakbeat, Psytrance.\r\nHe started his musical journey by listening to PsyTrance at his young age.\r\nWith the Trance mindset Sarp has been producing music since 2019 and he is creating his own Musical universe by bringing Cinematic Sounds and hard-powerful beats together.\r\nServing the genre-bending mindset, his unique productions surprise the audience through dynamic melodical soundscapes and powerful, energetic rhythms.\r\n',
    soundcloud: 'https://soundcloud.com/sarpt',
    image: '/artists/sarpt.jpg',
  },
];

export default function ArtistsPage() {
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
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-pure-white glitch-text mb-6" data-text="ARTISTS">
              ARTISTS
            </h1>
          </motion.div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-6 hover:border-light-text/50 transition-all duration-300 min-h-[600px] flex flex-col"
              >
                {/* Artist Image */}
                <div className="relative w-full h-80 mb-6 bg-gradient-to-br from-medium-gray/20 to-light-gray/20 rounded-lg overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black/70 via-transparent to-transparent"></div>
                  
                  {/* Glitch overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="scanner-line"></div>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-pure-white">
                      {artist.name}
                    </h3>
                    {artist.realName && (
                      <p className="text-sm text-light-text/60 font-mono mt-1">
                        {artist.realName}
                      </p>
                    )}
                  </div>
                  
                  <p className="text-sm text-silver font-mono uppercase tracking-wider leading-relaxed">
                    {artist.genre}
                  </p>
                  
                  <p className="text-light-text/80 font-mono text-sm leading-relaxed flex-1">
                    {artist.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 mt-auto">
                    <motion.a
                      href={artist.soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="neon-button px-4 py-2 text-sm font-mono tracking-wider uppercase"
                    >
                      SoundCloud
                    </motion.a>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-sm font-mono tracking-wider uppercase text-text-gray border-2 border-text-gray/50 hover:border-silver hover:text-silver transition-all duration-300"
                    >
                      Latest Set
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pure-white/3 to-silver/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 text-center"
          >
            <div className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-pure-white mb-4">
                Join Us
              </h3>
              <p className="text-light-text/80 font-mono mb-6">
              If you feel that your vibe matches ours, let us know.              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button px-8 py-4 text-lg font-mono tracking-wider uppercase"
              >
                CONTACT
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 