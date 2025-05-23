'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const storyChapters = [
  {
    id: 'genesis',
    title: 'GENESIS',
    subtitle: 'The Beginning',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    year: '2024',
    color: 'acid-green',
    visual: 'city'
  },
  {
    id: 'awakening',
    title: 'AWAKENING',
    subtitle: 'The Realization',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    year: '2024',
    color: 'cyber-blue',
    visual: 'sound'
  },
  {
    id: 'collective',
    title: 'COLLECTIVE',
    subtitle: 'Unity in Diversity',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    year: '2024',
    color: 'rave-purple',
    visual: 'collective'
  },
  {
    id: 'underground',
    title: 'UNDERGROUND',
    subtitle: 'Beneath the Surface',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    year: '2024',
    color: 'neon-pink',
    visual: 'underground'
  },
  {
    id: 'present',
    title: 'PRESENT',
    subtitle: 'Here and Now',
    content: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.',
    year: '2024-∞',
    color: 'acid-green',
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
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(57,255,20,0.05) 0%, transparent 60%)`,
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      />

      {/* Animated Background Particles */}
      {isClient && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`bg-particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-acid-green/20 rounded-full"
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
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ willChange: 'transform' }}
            />
          ))}
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
              className="text-8xl md:text-9xl font-orbitron font-black text-acid-green glitch-text mb-8" 
              data-text="FLOWCORE"
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
              FLOWCORE
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl text-cyber-blue font-mono">
                The Story Begins
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

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-12 border-2 border-acid-green/40 rounded-full flex justify-center relative">
              <motion.div 
                className="w-1 h-3 bg-acid-green/60 rounded-full mt-2"
                animate={{
                  y: [0, 20, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Chapters */}
      {storyChapters.map((chapter, index) => (
        <section 
          key={chapter.id}
          className="story-chapter relative z-10 min-h-screen flex items-center px-4 py-20"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-sm font-mono text-${chapter.color} bg-${chapter.color}/10 px-3 py-1 rounded-full border border-${chapter.color}/30`}>
                      {chapter.year}
                    </span>
                    <span className="text-lg font-mono text-acid-green/60">{chapter.subtitle}</span>
                  </div>
                  
                  <motion.h2 
                    className={`text-5xl md:text-7xl font-orbitron font-black text-${chapter.color} mb-6`}
                    animate={{
                      textShadow: [
                        `0 0 10px rgba(${chapter.color === 'acid-green' ? '57,255,20' : chapter.color === 'cyber-blue' ? '0,195,255' : chapter.color === 'rave-purple' ? '157,0,255' : '255,0,128'},0.3)`,
                        `0 0 25px rgba(${chapter.color === 'acid-green' ? '57,255,20' : chapter.color === 'cyber-blue' ? '0,195,255' : chapter.color === 'rave-purple' ? '157,0,255' : '255,0,128'},0.6)`,
                        `0 0 10px rgba(${chapter.color === 'acid-green' ? '57,255,20' : chapter.color === 'cyber-blue' ? '0,195,255' : chapter.color === 'rave-purple' ? '157,0,255' : '255,0,128'},0.3)`
                      ]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {chapter.title}
                  </motion.h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-flowcore-black/60 backdrop-blur-md border border-acid-green/20 rounded-lg p-8 relative overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-${chapter.color}/5 to-transparent rounded-lg`}
                    animate={{
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <p className="text-lg md:text-xl text-acid-green/90 font-mono leading-relaxed relative z-10">
                    {chapter.content}
                  </p>
                </motion.div>

                {/* Interactive Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <motion.div 
                    className={`w-3 h-3 rounded-full bg-${chapter.color}`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-sm font-mono text-acid-green/60">
                    Chapter {index + 1} of {storyChapters.length}
                  </span>
                </motion.div>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="relative h-80 lg:h-96"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${chapter.color}/20 to-flowcore-black/60 rounded-xl backdrop-blur-sm border border-${chapter.color}/30 overflow-hidden`}>
                    {/* Visual Elements */}
                    {getVisualElement(chapter.visual, index)}
                    
                    {/* Flowcore Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Image
                          src="/flowcore-logo.png"
                          alt="Flowcore"
                          width={120}
                          height={120}
                          className={`filter drop-shadow-[0_0_20px_rgba(${chapter.color === 'acid-green' ? '57,255,20' : chapter.color === 'cyber-blue' ? '0,195,255' : chapter.color === 'rave-purple' ? '157,0,255' : '255,0,128'},0.5)] opacity-60`}
                        />
                      </motion.div>
                    </div>

                    {/* Scanner Effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          'linear-gradient(90deg, transparent 0%, rgba(57,255,20,0.1) 50%, transparent 100%)',
                          'linear-gradient(90deg, transparent 50%, rgba(57,255,20,0.1) 100%, transparent 150%)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Manifesto Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              className="bg-flowcore-black/80 backdrop-blur-md border border-acid-green/30 rounded-xl p-12 relative overflow-hidden"
              whileInView={{ 
                boxShadow: [
                  "0 0 30px rgba(57,255,20,0.3)",
                  "0 0 60px rgba(57,255,20,0.6)",
                  "0 0 30px rgba(57,255,20,0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-acid-green/5 via-cyber-blue/5 to-rave-purple/5"
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
                <h2 className="text-4xl md:text-6xl font-orbitron font-black text-acid-green mb-8">
                  WE ARE THE EVENT
                </h2>
                
                <motion.p 
                  className="text-xl md:text-2xl text-cyber-blue font-mono italic mb-6"
                  animate={{
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  &ldquo;Join the flow where wonder, music, art and connection unite!&rdquo;
                </motion.p>
                
                <p className="text-lg text-acid-green/80 font-mono leading-relaxed max-w-3xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Progress Indicator */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="space-y-3">
          {storyChapters.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-8 rounded-full border transition-all duration-300 ${
                activeChapter === index 
                  ? 'bg-acid-green border-acid-green' 
                  : 'border-acid-green/30'
              }`}
              animate={{
                backgroundColor: activeChapter === index ? '#39ff14' : 'transparent'
              }}
            />
          ))}
        </div>
      </motion.div>
    </main>
  );
} 