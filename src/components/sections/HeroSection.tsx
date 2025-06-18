'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<React.ReactElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    // Enhanced mouse tracking for more interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Enhanced particles with better variety - only on client with delay
    const createParticles = () => {
      if (typeof window === 'undefined') return;
      
      // Reduced particle count for better performance
      const particleElements = Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: 1.5,
            height: 1.5,
            backgroundColor: i % 2 === 0 ? '#ffffff' : '#cccccc',
            willChange: 'transform'
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0
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
            opacity: [0, 0.4, 0.2, 0.4, 0],
            scale: [0, 1, 0.8, 1, 0]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
        />
      ));
      setParticles(particleElements);
      
      // Smooth particles loading
      setTimeout(() => {
        setParticlesLoaded(true);
      }, 500);
    };

    // Delay particle creation for smooth loading
    const timer = setTimeout(createParticles, 300);

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified logo animation for better performance
      const logoTimeline = gsap.timeline();
      
      logoTimeline
        .fromTo(logoRef.current, 
          { 
            scale: 0.8,
            opacity: 0
          },
          { 
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.3
          }
        );

      // Simplified text animations
      gsap.fromTo(textRef.current?.children || [], 
        { 
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        { 
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          delay: 1.5,
          ease: "power2.out"
        }
      );

      // Simplified logo breathing
      gsap.to(logoRef.current, {
        scale: 1.03,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 3
      });

      // Simplified background pulse
      const bgTimeline = gsap.timeline({ repeat: -1 });
      bgTimeline
        .to('.cyber-grid', {
          opacity: 0.2,
          duration: 5,
          ease: "power1.inOut"
        })
        .to('.cyber-grid', {
          opacity: 0.1,
          duration: 5,
          ease: "power1.inOut"
        });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-flowcore-black pt-20"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.02) 0%, transparent 60%)`
      }}
    >
      {/* Simplified Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10">
        <div className="scanner-line"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <motion.div 
        ref={particlesRef} 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: particlesLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {particles}
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
        {/* Enhanced Main Logo */}
        <motion.div 
          ref={logoRef}
          className="mb-8 md:mb-12"
          onHoverStart={() => {
            gsap.to(logoRef.current, { filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.6))', duration: 0.3 });
          }}
          onHoverEnd={() => {
            gsap.to(logoRef.current, { filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))', duration: 0.3 });
          }}
        >
          <div className="relative inline-block">
            <Image
              src="/flowcore-logo.png"
              alt="Flowcore"
              width={280}
              height={280}
              className="mx-auto p-2"
              priority
            />
            
            {/* Simplified glowing ring */}
          {/*   <motion.div 
              className="absolute inset-[-20px] rounded-full border border-silver/20"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "linear"
              }}
            /> */}
          </div>
        </motion.div>

        {/* Enhanced Main Text Content */}
        <div ref={textRef} className="space-y-6 md:space-y-8">
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-light-text font-cs-felice tracking-cs-wide max-w-4xl mx-auto leading-relaxed px-2"
            animate={{
              textShadow: [
                "0 0 5px rgba(153,153,153,0.3)",
                "0 0 10px rgba(153,153,153,0.5)",
                "0 0 5px rgba(153,153,153,0.3)"
              ]
            }}
/*             transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} */
          >
           electronic music & art collective
          </motion.p>

{/*           <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-pure-white/90 font-cs-felice italic max-w-3xl mx-auto leading-relaxed px-2"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(255,255,255,0.6)",
              transition: { duration: 0.3 }
            }}
            animate={{
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &ldquo;Join the flow where wonder, music, art and connection unite!&rdquo;
          </motion.p> */}

          {/* Enhanced Action Buttons with better effects */}
{/*           <motion.div 
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-12 md:mt-16 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-8 sm:px-10 py-3 md:py-4 text-base md:text-lg font-cs-felice tracking-cs-wider uppercase w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10">EXPLORE Flowcore</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"
                style={{ width: '200%', left: '-100%' }}
                animate={{
                  x: ['0%', '100%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2
                }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                color: "#cccccc", 
                borderColor: "#cccccc",
                boxShadow: "0 0 25px rgba(204, 204, 204, 0.5)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 md:py-4 text-base md:text-lg font-cs-felice tracking-cs-wider uppercase text-light-text border-2 border-text-gray/50 hover:border-silver transition-all duration-300 w-full sm:w-auto"
            >
              Latest MIX
            </motion.button>
          </motion.div> */}
        </div>

        {/* Event Announcement Card */}
        <motion.div 
          className="mt-16 md:mt-20 max-w-5xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-flowcore-black/60 backdrop-blur-md border border-silver/40 transition-all duration-300 group"
            whileHover={{
              borderColor: "rgba(204, 204, 204, 0.7)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.08)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Header */}
            <div className="relative z-20 p-4 sm:p-6 border-b border-silver/20 bg-flowcore-black/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <motion.div 
                  className="flex items-center"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xs sm:text-sm font-cs-felice text-light-text uppercase tracking-cs-wider">
                    NEXT EVENT
                  </span>
                </motion.div>
                
                <motion.div 
                  className="text-xs sm:text-sm font-cs-felice text-silver uppercase tracking-cs-wider"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(204,204,204,0.4)",
                      "0 0 15px rgba(204,204,204,0.7)",
                      "0 0 5px rgba(204,204,204,0.4)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  JUNE 27TH, 2025
                </motion.div>
              </div>
            </div>

            {/* Main Event Image */}
            <motion.div 
              className="relative group/image"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Responsive Event Images */}
              <div className="relative">
                {/* Landscape image for wider screens */}
                <div className="hidden sm:block">
                  <Image
                    src="/events/overflow-2.jpeg"
                    alt="Overflow Event - Full Lineup"
                    width={1600}
                    height={591}
                    className="w-full h-auto object-cover group-hover/image:brightness-110 transition-all duration-500"
                    priority
                  />
                </div>
                
                {/* Square image for mobile/portrait */}
                <div className="block sm:hidden">
                  <Image
                    src="/events/overflow-1.jpeg"
                    alt="Overflow Event - Full Lineup"
                    width={1600}
                    height={1600}
                    className="w-full h-auto object-cover group-hover/image:brightness-110 transition-all duration-500"
                    priority
                  />
                </div>
                
                {/* Subtle overlay for interactivity */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/image:opacity-100"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />

                {/* Corner accent */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pure-white/30"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Action Footer */}
            <div className="relative z-20 p-4 sm:p-6 bg-flowcore-black/80 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Event Status */}
                <div className="flex items-center gap-4 text-xs sm:text-sm font-cs-felice text-light-text/70 uppercase tracking-cs-wider">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>TICKETS AVAILABLE</span>
                  </div>
                  <span className="text-text-gray/50">|</span>
                  <span>EARLY BIRD PRICING</span>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://bugece.co/en/event/overflow-06-27-25"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block neon-button px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-cs-felice tracking-cs-wider uppercase relative overflow-hidden group/btn min-w-[140px] text-center"
                >
                  <span className="relative z-10">GET TICKETS</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ width: '200%', left: '-100%' }}
                    animate={{
                      x: ['0%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2
                    }}
                  />
                </motion.a>
              </div>
            </div>

            {/* Subtle glow accent */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)'
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Manifesto Section */}
        <motion.div 
          className="mt-20 md:mt-32 max-w-4xl mx-auto relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="text-center space-y-8 md:space-y-12">
            {/* Opening Statement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="space-y-4"
            >
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-pure-white font-cs-felice leading-relaxed px-4"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 10px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                We are Flowcore — a collective of dreamers, movers, lovers, builders, and noisemakers.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-silver font-cs-felice italic px-4"
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Not underground. Not upperground. Somewhere else entirely.
              </motion.p>
            </motion.div>

            {/* Connection & Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              className="space-y-3"
            >
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4">
                We gather to connect, to create, and to celebrate.
              </p>
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4">
                To share moments that feel real. To spark energy in each other.
              </p>
            </motion.div>

            {/* Beliefs & Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
              className="space-y-3 relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/5 to-transparent opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4 relative z-10">
                We believe in collaboration over competition, unity over division.
              </p>
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4 relative z-10">
                In having fun while building something that matters.
              </p>
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4 relative z-10">
                In expression that goes beyond trends, beyond genres — into what&apos;s raw, bold, and new.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
              className="space-y-3"
            >
              <p className="text-lg md:text-xl text-silver/90 font-cs-felice leading-relaxed px-4">
                In a time when justice is failing and freedom is fading, we come together.
              </p>
              <p className="text-lg md:text-xl text-silver/90 font-cs-felice leading-relaxed px-4">
                To create space for art, for movement, for meaning.
              </p>
              <p className="text-lg md:text-xl text-silver/90 font-cs-felice leading-relaxed px-4">
                To be loud when silence is expected. To build something honest.
              </p>
            </motion.div>

            {/* Creative Freedom */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}
              className="space-y-3"
            >
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4">
                We welcome emotion, chaos, softness, and connection.
              </p>
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4">
                Creativity doesn&apos;t wait for permission.
              </p>
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4">
                We&apos;re not waiting for better systems — we&apos;re making our own.
              </p>
            </motion.div>

            {/* Unity Statement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
            >
              <p className="text-lg md:text-xl text-light-text/90 font-cs-felice leading-relaxed px-4">
                We believe in those who stand for unity, appreciate beauty, and lift each other up.
              </p>
            </motion.div>

            {/* Final Call */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.4 }}
              className="pt-8 md:pt-12"
            >
              <motion.p 
                className="text-3xl md:text-4xl lg:text-5xl text-pure-white font-cs-felice font-bold tracking-cs-wider uppercase"
                animate={{
                  textShadow: [
                    "0 0 15px rgba(255,255,255,0.4)",
                    "0 0 30px rgba(255,255,255,0.7)",
                    "0 0 15px rgba(255,255,255,0.4)"
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Enter the flow.
              </motion.p>
              
              {/* Subtle accent line */}
              <motion.div
                className="w-24 h-0.5 bg-silver/60 mx-auto mt-6 mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.8 }}
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
              />
              
              {/* Our Story Button */}
              <motion.div
                className="mt-8 mb-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <motion.a
                  href="/about"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 text-base md:text-lg font-cs-felice tracking-cs-wider uppercase text-light-text border-2 border-silver/50 hover:border-silver transition-all duration-300 hover:text-pure-white"
                >
                  Our Story
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-silver/30 rounded-full flex justify-center relative">
          <motion.div 
            className="w-0.5 h-2 md:w-1 md:h-3 bg-pure-white/50 rounded-full mt-1.5 md:mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 