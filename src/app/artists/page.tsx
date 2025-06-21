'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

interface CoreTeamMember {
  name: string;
  realName: string;
  genre: string;
  description: string;
  soundcloud?: string;
  website?: string;
  instagram?: string;
  image: string;
}

interface CreativeAlly {
  name: string;
  realName: string;
  discipline: string;
  description: string;
  website?: string;
  instagram?: string;
  image: string;
}

const coreTeam: CoreTeamMember[] = [
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
  {
    name: 'KUZEN',
    realName: '@kuzenflow',
    genre: 'ACID / BOUNCE / TRANCE',
    description: 'With years of background crafting events and working with music organisations, Kuzen is now stepping into the DJ booth as the brand new resident DJ of Flowcore Collective, performing unique, uplifting sets.His sound blends genres by fusing Acid, Bounce, and Trance at varying BPMs and intensities, ensuring the community always feels the vibe.With his Flowcore inspired genre-bending style, Kuzen always keep the crowd alive and connected.',
    soundcloud: 'https://soundcloud.com/mete-emin',
    image: '/artists/kuzen.png',
  },
  {
    name: 'GIZ THINGS',
    realName: '@gizthings',
    genre: 'STAGE & ART DIRECTOR',
    description: 'With a background in fine arts and interior architecture, Gizem Demir (aka Gizthings) is the visual brain behind Flowcore\u2019s immersive environments. From concept to execution, her eye for detail, material, and mood transforms every party into a visual journey.\r\n Thanks to her direction, Flowcore stages aren\u2019t just stages \u2014 they\u2019re living installations.\r\nHer brilliant \u201CEye\u201D installation at our ARTEK collaboration even caught the attention of venue owners, who approached us afterward, eager to learn more.\r\nFrom hand-built installations to subtle aesthetic cues, she crafts experiences you feel before the music even begins.\r\nWith Gizthings behind the visuals, Flowcore isn\u2019t just an event \u2014 it\u2019s a world you step into.',
    instagram: 'https://instagram.com/gizthings',
    image: '/artists/gizthings.jpeg',
  },
  {
    name: 'BEGE',
    realName: '@bege.flow',
    genre: 'VISUAL MAPPER / TECH ARCHITECT',
    description: 'Bege is the mind we trust when it comes to making the impossible... possible. A natural-born builder, he taught himself how to craft electrical, electronic, and mechanical systems long before stepping into formal education. From custom light rigs to projection mapping to 3D-printed stage elements, Bege doesn\u2019t just solve problems \u2014 he invents the tools to solve them.\r\nAlways one step ahead with tech, he\'s our go-to for everything wired, mapped, or projected. Whether it\u2019s syncing visuals to sound or bringing complex installations to life, he brings precision, patience, and passion to every setup.\r\nNo matter the challenge, Bege shows up with energy \u2014 ready to prototype, install, and optimize. With him around, we know the lights will shine, the visuals will hit, and everything will just work.',
    instagram: 'https://instagram.com/bege.flow',
    image: '/artists/bege.jpg',
  },
  {
    name: 'AHMET',
    realName: '@ahmet.sisman77',
    genre: 'STAGE DESIGN / DECOR',
    description: 'Ahmet brings psychedelic stages and spaces to life, allowing audiences to fully immerse themselves in the atmosphere of festivals, events, and gatherings. Since 2020, he has been crafting unforgettable visuals for his guests. Over the years, his approach to event design has evolved into a true art form \u2014 one that leaves a lasting impression long after the lights go out.\r\nWith each project, Ahmet transforms event decoration into a form of storytelling, turning fleeting moments into long-lasting impressions. ',
    soundcloud: 'https://soundcloud.com/ahmet.sisman77',
    image: '/artists/ahmet.jpeg',
  },
  {
    name: 'GATE 11',
    realName: '@g_ate11',
    genre: 'VISUAL ARTIST / STRING ARTIST / UV DECO',
    description: 'Gate 11 is a project where sacred geometry comes to life through string art on wooden panels. Each design is crafted with perfect measurements and simple, captivating patterns. I use UV-reactive threads that glow under UV light, creating a mesmerizing, psychedelic effect.\r\n\r\nThis project is more than just an art form for me; it began as a way to process the trauma and difficulties I faced after moving from Syria to Turkey in 2013. I started creating art in 2017, and it became a sanctuary, a tool for healing and self-reflection. Through Gate 11, my goal is to share this transformative experience with the world, one pattern at a time, and to inspire others on their journeys through exhibitions.',
    website: '',
    instagram: 'https://instagram.com/g_ate11',
    image: '/artists/allies/gate11.jpeg',
  },
  {
    name: 'MERIDA',
    realName: '@e.irmkkk',
    genre: 'FLOW ARTS / FIRE DANCE',
    description: 'When Merida discovered flow arts and performance in 2022, everything changed. The moment she first encountered fire, something deep within her ignited \u2014 a spark of freedom and passion that would soon become her path. Since then, fire has been more than just an element to her; it has become a tool for storytelling on stage.\r\n\r\nThrough her mesmerizing solo acts and powerful choreographies with her team, Merida creates unforgettable moments for her audience. With her commanding stage presence, dynamic energy, and sharp aesthetic, she has performed in countless events and festivals across Turkey, captivating crowds in every city she visits.\r\n\r\nInfused with mystical atmospheres, unique costumes, and fierce feminine energy, Merida turns every show into a ritual. Her performances are not just seen \u2014 they are deeply felt.\r\n\r\nToday, Merida continues to carve her path in the world of performance art, guided by the flame that first lit her soul.',
    website: '',
    instagram: 'https://instagram.com/e.irmkkk',
    image: '/artists/merida.jpeg',
  },
  {
    name: 'OXY',
    realName: '@oxy.flowart',
    genre: 'FLOW ARTS / CIRCUS ARTS / DANCE',
    description: 'When Oxy was introduced to circus arts in 2017, she immediately knew she had found her place in this mesmerizing world. Transforming the powerful element of fire into art, Oxy creates unforgettable moments for audiences through her captivating fire shows. Not only with her solo performances, but also with the striking choreographies she presents alongside her team, she continues to receive great acclaim.\r\n\r\nHaving performed in numerous cities across Turkey, Oxy has also represented her country internationally, sharing her art with audiences around the world. With her commanding stage presence, vibrant energy, and unique style, Oxy has become one of the most prominent figures in performance art in Turkey.',
    website: '',
    instagram: 'https://instagram.com/oxy.flowart',
    image: '/artists/allies/oxy.jpg',
  },
  {
    name: 'APOFIRE',
    realName: '@apofireee',
    genre: 'FLOW ARTS / CIRCUS ARTS / ACRO YOGA',
    description: 'Since 2020, Apofire has been captivating audiences with the magical dance of fire on stage. Since 2021, he has been professionally enchanting audiences with the rhythm of fire. His journey from mathematics to stage arts has led him to tell stories with the warmth and light of fire in every performance, making his art felt in every move. Since 2023, he has been combining AcroYoga with his fire shows, bringing innovation to his performances and delivering unforgettable experiences to his audience. With every performance, he invites us to witness the magic of fire and the power of movement.',
    website: '',
    instagram: 'https://instagram.com/apofireee',
    image: '/artists/allies/apofire.jpeg',
  },

];

const creativeAllies: CreativeAlly[] = [
  {
    name: 'GATE 11',
    realName: '@g_ate11',
    discipline: 'VISUAL ARTIST / STRING ARTIST / UV DECO',
    description: 'Gate 11 is a project where sacred geometry comes to life through string art on wooden panels. Each design is crafted with perfect measurements and simple, captivating patterns. I use UV-reactive threads that glow under UV light, creating a mesmerizing, psychedelic effect.\r\n\r\nThis project is more than just an art form for me; it began as a way to process the trauma and difficulties I faced after moving from Syria to Turkey in 2013. I started creating art in 2017, and it became a sanctuary, a tool for healing and self-reflection. Through Gate 11, my goal is to share this transformative experience with the world, one pattern at a time, and to inspire others on their journeys through exhibitions.',
    website: '',
    instagram: 'https://instagram.com/g_ate11',
    image: '/artists/allies/gate11.jpeg',
  },
  {
    name: 'ECEM GULEC',
    realName: '@ecemgulec',
    discipline: 'VISUAL ARTS / DESIGN / STRING ART',
    description: 'Ecem G\u00FCle\u00E7 was born in 1993 in Istanbul. After graduating from the Visual Arts and Visual Communication Design program at Sabanc\u0131 University, she has continued her work as both a visual designer and a multidisciplinary artist. Since 2022, she has been an active member of Wunjo, a creative initiative where she explores geometric forms and rhythmic structures using string art as a medium of expression.\r\nHer artistic practice operates at the intersection of digital and physical production processes, embracing a structure where research and experimentation are deeply intertwined.Focusing on themes such as the nonlinear nature of time, the re-coding of perception, and the individual\'s existence within systemic structures, Ecem centers processes of abstraction, distortion, and reconstruction in her experimental compositions. Through this approach, she aims to construct intuitive experiences that open space for meditative awareness.\r\nBy building connections between visual and conceptual layers, Ecem seeks to create a reflective and transformative space of intellectual play\u2014one that invites viewers to question perceived reality and explore alternative possibilities.',
    website: '',
    instagram: 'https://instagram.com/ecemgulec',
    image: '/artists/allies/ecem.jpg',
  },
  {
    name: 'ORGELPUNKT',
    realName: '@orgelpunkt_',
    discipline: 'DESIGNER / HANDCRAFT / WEARABLE ART',
    description: 'In a world born in the shadow of industrial society\u2014where consumption is glorified, production rapidly mechanized, and everything shaped by a disposable mentality\u2014the obsession with the \"new\" placed at the center of the world has rendered the old worthless, functionless, and invisible. Out of this invisibility, she gathers the remnants of industrialization\u2014motor and bicycle tires\u2014reshaping them into narratives carried by the body.\r\nWhat she does is not merely a transformation; it is a questioning and a form of resistance. Through wearable art, she gives new memory to materials the system has quickly forgotten, using them to stand against the amnesia of consumer society. The tires she uses are those that have exhausted their paths, yet haven\u2019t finished telling their stories.\r\nWith wearable art, she doesn\u2019t just adorn the body\u2014she turns it into a poster, a banner, a cry of resistance against the system. Recycling and upcycling, for her, are not just environmental choices, but political acts.',
    website: '',
    instagram: 'https://instagram.com/orgelpunkt_',
    image: '/artists/allies/orgelpunkt.jpeg',
  }

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

          {/* Core Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-orbitron font-bold text-pure-white text-center mb-12">
              CORE TEAM
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {coreTeam.map((artist, index) => (
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
                      {artist.soundcloud && (
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
                      )}
                      
                      {artist.website && (
                        <motion.a
                          href={artist.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="neon-button px-4 py-2 text-sm font-mono tracking-wider uppercase"
                        >
                          Website
                        </motion.a>
                      )}
                      
                      {artist.instagram && (
                        <motion.a
                          href={artist.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 text-sm font-mono tracking-wider uppercase text-text-gray border-2 border-text-gray/50 hover:border-silver hover:text-silver transition-all duration-300"
                        >
                          Instagram
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pure-white/3 to-silver/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Creative Allies Section */}
          {creativeAllies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-orbitron font-bold text-pure-white text-center mb-12">
                CREATIVE ALLIES
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {creativeAllies.map((ally, index) => (
                  <motion.div
                    key={ally.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="group relative bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-6 hover:border-light-text/50 transition-all duration-300 min-h-[600px] flex flex-col"
                  >
                    {/* Ally Image */}
                    <div className="relative w-full h-80 mb-6 bg-gradient-to-br from-medium-gray/20 to-light-gray/20 rounded-lg overflow-hidden">
                      <Image
                        src={ally.image}
                        alt={ally.name}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black/70 via-transparent to-transparent"></div>
                      
                      {/* Glitch overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
                      </div>
                    </div>

                    {/* Ally Info */}
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-2xl font-orbitron font-bold text-pure-white">
                          {ally.name}
                        </h3>
                        {ally.realName && (
                          <p className="text-sm text-light-text/60 font-mono mt-1">
                            {ally.realName}
                          </p>
                        )}
                      </div>
                      
                      <p className="text-sm text-silver font-mono uppercase tracking-wider leading-relaxed">
                        {ally.discipline}
                      </p>
                      
                      <p className="text-light-text/80 font-mono text-sm leading-relaxed flex-1">
                        {ally.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4 mt-auto">
                        {ally.website && (
                          <motion.a
                            href={ally.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="neon-button px-4 py-2 text-sm font-mono tracking-wider uppercase"
                          >
                            Website
                          </motion.a>
                        )}
                        
                        {ally.instagram && (
                          <motion.a
                            href={ally.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-sm font-mono tracking-wider uppercase text-text-gray border-2 border-text-gray/50 hover:border-silver hover:text-silver transition-all duration-300"
                          >
                            Instagram
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pure-white/3 to-silver/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

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
              <motion.a
                href="https://www.instagram.com/flowcore.collective/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button px-8 py-4 text-lg font-mono tracking-wider uppercase inline-block"
              >
                CONTACT
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 