'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useRef, useEffect, useState } from 'react';

const storyChapters = [
  {
    id: 'first-pulse',
    title: 'FIRST PULSE',
    subtitle: 'About Us',
    content: 'Flowcore Collective started the way real things do—between friends. Under open skies, in long conversations after festivals, and over shared complaints that quietly turned into possibilities. We were a group of ravers, artists, and weirdos who kept ending up at the same parties, the same dancefloors, the same corners of the woods, renting houses and building corners of joy.',
    year: 'Beginning',
    color: 'pure-white',
    visual: 'collective'
  },
  {
    id: 'the-spark',
    title: 'THE SPARK',
    subtitle: 'The Question',
    content: 'Some of us loved to complain. Others loved to listen. One day, after yet another beautiful, chaotic festival, we asked ourselves: "Why don\'t we make our own?" Not the world\'s hardest question. Not a plan to save the universe (maybe?). Just a simple thought that felt right. That spark became a plan. The plan became a portal.',
    year: '2023',
    color: 'silver',
    visual: 'sound'
  },
  {
    id: 'enter-the-flow',
    title: 'ENTER THE FLOW',
    subtitle: 'Chapter 1',
    content: 'We named it Enter The Flow because we wanted it to serve our dream — the first chapter of our first festival. A quiet beginning with a loud dream: one day. We opened our first portal. The journey had officially begun.',
    year: '7 Oct 2023',
    color: 'light-text',
    visual: 'city'
  },
  {
    id: 'urban-fusion',
    title: 'URBAN FUSION',
    subtitle: 'Creative Convergence',
    content: 'We opened the season after summer with Urban Fusion. Till now, within the collective, this is one of the events we love the most. With the Vovzspace creative people, it was a blessed environment. It reminded us what we\'re capable of when good energy and creativity meet.',
    year: '14 Sep 2024',
    color: 'text-gray',
    visual: 'underground'
  },
  {
    id: 'kanzen-chaos',
    title: 'KANZEN CHAOS',
    subtitle: 'Anime Universe',
    content: 'We let people get into the anime vibe and did the Kanzen Chaos event. Each artist had their anime universe in the background. We enjoyed this playground pretty much! It was fun, weird, and full of surprises — just how we like it.',
    year: '30 Nov 2024',
    color: 'silver',
    visual: 'sound'
  },
  {
    id: 'slaycore',
    title: 'SLAYCORE',
    subtitle: 'Flowcore at Sahika',
    content: 'Flowcore finally appeared in the scene more! In the middle of Taksim, Sahika opened new possibilities for us. It was a super nice way of greeting 2025 — cozy, energetic, and full of flow.',
    year: '11 Jan 2025',
    color: 'pure-white',
    visual: 'present'
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeChapter, setActiveChapter] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isClient, setIsClient] = useState(false);

  // Background parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0.1]);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      
      // Scroll tracking for active chapter
      const handleScroll = () => {
        const sections = document.querySelectorAll('.story-chapter');
        let currentActive = 0;
        
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = index;
          }
        });
        
        setActiveChapter(currentActive);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const getVisualElement = (visual: string, index: number) => {
    const baseClasses = "absolute text-6xl md:text-8xl opacity-20";
    const animations = {
      animate: {
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1]
      },
      transition: {
        duration: 20 + index * 5,
        repeat: Infinity,
        ease: "linear"
      }
    };

    switch (visual) {
      case 'city':
        return <motion.div className={`${baseClasses} top-10 right-10`} {...animations}>🌃</motion.div>;
      case 'sound':
        return <motion.div className={`${baseClasses} top-20 left-10`} {...animations}>🎧</motion.div>;
      case 'collective':
        return <motion.div className={`${baseClasses} bottom-20 right-20`} {...animations}>👥</motion.div>;
      case 'underground':
        return <motion.div className={`${baseClasses} top-32 left-1/2`} {...animations}>⚡</motion.div>;
      case 'present':
        return <motion.div className={`${baseClasses} bottom-10 left-10`} {...animations}>🎵</motion.div>;
      default:
        return null;
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-flowcore-black relative overflow-hidden">
      <Navigation />
      
      {/* Dynamic Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.02) 0%, transparent 60%)`,
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      />

      {/* Animated Background Particles */}
      {isClient && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => {
            // Fixed positions to avoid hydration mismatch
            const fixedPositions = [
              { x: 200 + i * 200, y: 150 + i * 100 },
              { x: 400 + i * 150, y: 350 + i * 80 },
              { x: 600 + i * 100, y: 250 + i * 120 },
              { x: 800 + i * 180, y: 450 + i * 90 }
            ];
            
            return (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute w-0.5 h-0.5 bg-pure-white/20 rounded-full"
                initial={{
                  x: fixedPositions[i].x,
                  y: fixedPositions[i].y,
                }}
                animate={{
                  x: [
                    fixedPositions[i].x,
                    fixedPositions[i].x + 300,
                    fixedPositions[i].x
                  ],
                  y: [
                    fixedPositions[i].y,
                    fixedPositions[i].y + 200,
                    fixedPositions[i].y
                  ],
                  opacity: [0.1, 0.4, 0.1]
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ willChange: 'transform' }}
              />
            );
          })}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-orbitron font-black text-pure-white glitch-text mb-8" 
              data-text="FLOWCORE"
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
              FLOWCORE
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-3xl text-silver font-mono">
                Our Story
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
                We are individuals on our own paths of growth, some of us loud, some of us listening, but when we gather, something magic happens.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
        <div className="w-6 h-12 border-2 border-silver/40 rounded-full flex justify-center relative">
          <motion.div 
            className="w-1 h-3 bg-pure-white/60 rounded-full mt-2"
              animate={{
                y: [0, 20, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Story Chapters */}
    <section className="relative z-10 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {storyChapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            className={`story-chapter min-h-screen flex items-center py-20 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className={`relative max-w-2xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              {getVisualElement(chapter.visual, index)}
              
              <motion.div
                className="space-y-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <span className="text-lg font-mono text-light-text/60">{chapter.subtitle}</span>
                  <motion.h2 
                    className="text-6xl md:text-8xl font-orbitron font-black text-pure-white"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.3)",
                        "0 0 25px rgba(255,255,255,0.6)",
                        "0 0 10px rgba(255,255,255,0.3)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {chapter.title}
                  </motion.h2>
                </div>
                
                <div 
                  className="bg-flowcore-black/60 backdrop-blur-md border border-silver/20 rounded-lg p-8 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-medium-gray/5 via-light-gray/5 to-text-gray/5"
                    animate={{
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <p className="text-lg md:text-xl text-light-text/90 font-mono leading-relaxed relative z-10">
                    {chapter.content}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-4 relative z-10">
                    <div className="w-2 h-2 bg-pure-white/60 rounded-full"></div>
                    <span className="text-sm font-mono text-light-text/60">
                      {chapter.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Final Vision Section */}
    <section className="relative z-10 px-4 py-32">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="bg-flowcore-black/80 backdrop-blur-md border border-silver/30 rounded-xl p-12 relative overflow-hidden"
        >
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
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-pure-white mb-8">
              Our Playground
            </h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-silver font-mono italic mb-6"
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              &quot;Flowcore is our playground. For experimentation, for collaboration, for building spaces where the unheard can be loud.&quot;
            </motion.p>
            
            <p className="text-lg text-light-text/80 font-mono leading-relaxed max-w-3xl mx-auto">
              The portal became Flowcore. A space where friends become artists, conversations become experiences, and every gathering opens new possibilities. This is just the beginning.
            </p>
            
            {/* Meet the Artists Button */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="/artists"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 text-base md:text-lg font-mono tracking-wide uppercase text-light-text border-2 border-silver/50 hover:border-silver transition-all duration-300 hover:text-pure-white"
              >
                Meet the Artists
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Navigation Dots */}
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
      {storyChapters.map((_, index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
            activeChapter === index
              ? 'bg-pure-white border-pure-white'
              : 'border-silver/30'
          }`}
          whileHover={{ scale: 1.5 }}
          onClick={() => {
            const element = document.querySelectorAll('.story-chapter')[index];
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  </main>
);
} 