'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

const artists = [
  {
    name: 'OGIMARU',
    genre: 'Psytrance / Hitech / Psycore / Freetekno',
    description: 'Yüksek enerjili ve deneysel psychedelic sesleriyle tanınan DJ/prodüktör. Sert ritimleri melodik dokunuşlarla harmanlayarak dinleyicilerini dansa teşvik eder. 2016\'dan bu yana müzik üretimine devam etmektedir.',
    soundcloud: 'https://soundcloud.com/ogimaru',
    image: '/artists/ogimaru.jpg',
  },
  {
    name: 'ALL I CAN',
    realName: 'Alican',
    genre: 'Afro House / Psytrance',
    description: 'Müzik kariyerine genç yaşta başlayan Alican, çeşitli enstrümanlarla ilgilenmiş ve 2019\'da müzik prodüksiyonuna yönelmiştir. Afro House ile başladığı yolculuğu, derin ritimleri ve etkileyici melodileriyle psytrance\'e evrilmiştir. İstanbul\'da çeşitli etkinliklerde performans sergilemektedir.',
    soundcloud: 'https://soundcloud.com/allican',
    image: '/artists/allican.jpg',
  },
  {
    name: 'FORMAL',
    genre: 'Hard Techno / Acidcore / Alternatif Dans Müziği',
    description: '2019\'dan beri DJ\'lik yapan Formal, geniş bir müzik arşivine sahiptir ve setlerinde alternatif dans müziğinden sert ritimlere kadar geniş bir yelpazeyi yansıtır. Elektronik müziğe olan tutkusu 2010\'lara dayanmaktadır.',
    soundcloud: 'https://soundcloud.com/formal',
    image: '/artists/formal.jpg',
  },
  {
    name: 'SARPT',
    genre: 'Groovy Techno / Psychedelic / Tribal / Epik Soundlar',
    description: 'Sarpt, dinleyicilerini hipnotik bir yolculuğa çıkaran setleriyle tanınır. Groovy şehir seslerinden tribal ve epik dokunuşlara kadar uzanan geniş bir müzikal yelpazeye sahiptir. Hem kulüp hem de festival sahnelerinde aktif olarak performans sergilemektedir.',
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
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-acid-green glitch-text mb-6" data-text="ARTISTS">
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
                className="group relative bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-6 hover:border-cyber-blue/50 transition-all duration-300 min-h-[600px] flex flex-col"
              >
                {/* Artist Image */}
                <div className="relative w-full h-80 mb-6 bg-gradient-to-br from-rave-purple/20 to-cyber-blue/20 rounded-lg overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
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
                    <h3 className="text-2xl font-orbitron font-bold text-acid-green">
                      {artist.name}
                    </h3>
                    {artist.realName && (
                      <p className="text-sm text-acid-green/60 font-mono mt-1">
                        ({artist.realName})
                      </p>
                    )}
                  </div>
                  
                  <p className="text-sm text-cyber-blue font-mono uppercase tracking-wider leading-relaxed">
                    {artist.genre}
                  </p>
                  
                  <p className="text-acid-green/80 font-mono text-sm leading-relaxed flex-1">
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
                      className="px-4 py-2 text-sm font-mono tracking-wider uppercase text-rave-purple border-2 border-rave-purple/50 hover:border-neon-pink hover:text-neon-pink transition-all duration-300"
                    >
                      Latest Set
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-acid-green/5 to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
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
            <div className="bg-flowcore-black/50 backdrop-blur-md border border-acid-green/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-acid-green mb-4">
                Kolektife Katıl
              </h3>
              <p className="text-acid-green/80 font-mono mb-6">
                Underground elektronik müzik sahnesinin bir parçası olmak istiyorsan, bizimle iletişime geç.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button px-8 py-4 text-lg font-mono tracking-wider uppercase"
              >
                İletişime Geç
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 