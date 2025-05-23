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
  const [isClient, setIsClient] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    // Set client-side flag with delay for smooth loading
    setIsClient(true);
    
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
            backgroundColor: i % 2 === 0 ? '#39ff14' : '#00c3ff',
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
            scale: 0,
            rotation: -90,
            opacity: 0
          },
          { 
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.5,
            ease: "back.out(1.7)",
            delay: 0.3
          }
        )
        .to(logoRef.current, {
          scale: 1.05,
          duration: 0.2,
          ease: "power2.out"
        })
        .to(logoRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });

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
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(57,255,20,0.03) 0%, transparent 60%)`
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
          whileHover={{ 
            scale: 1.1,
            rotate: 10,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          onHoverStart={() => {
            gsap.to(logoRef.current, { filter: 'drop-shadow(0 0 30px rgba(57,255,20,0.6))', duration: 0.3 });
          }}
          onHoverEnd={() => {
            gsap.to(logoRef.current, { filter: 'drop-shadow(0 0 20px rgba(57,255,20,0.3))', duration: 0.3 });
          }}
        >
          <div className="relative inline-block">
            <Image
              src="/flowcore-logo.png"
              alt="Flowcore"
              width={280}
              height={280}
              className="mx-auto filter drop-shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              priority
            />
            
            {/* Simplified glowing ring */}
            <motion.div 
              className="absolute inset-[-20px] rounded-full border border-acid-green/20"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>

        {/* Enhanced Main Text Content */}
        <div ref={textRef} className="space-y-6 md:space-y-8">
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyber-blue font-mono tracking-wide max-w-4xl mx-auto leading-relaxed px-2"
            whileHover={{
              color: "#39ff14",
              scale: 1.02,
              textShadow: "0 0 15px rgba(57,255,20,0.4)",
              transition: { duration: 0.3 }
            }}
            animate={{
              textShadow: [
                "0 0 5px rgba(0,195,255,0.3)",
                "0 0 10px rgba(0,195,255,0.5)",
                "0 0 5px rgba(0,195,255,0.3)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            underground electronic music collective
          </motion.p>

          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-acid-green/90 font-mono italic max-w-3xl mx-auto leading-relaxed px-2"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(57,255,20,0.6)",
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
          </motion.p>

          {/* Enhanced Action Buttons with better effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-12 md:mt-16 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3, duration: 1, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(57, 255, 20, 0.6)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(57, 255, 20, 0.3)",
                  "0 0 25px rgba(57, 255, 20, 0.5)",
                  "0 0 15px rgba(57, 255, 20, 0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="neon-button px-8 sm:px-10 py-3 md:py-4 text-base md:text-lg font-mono tracking-wider uppercase w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10">Enter Underground</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                color: "#ff0080", 
                borderColor: "#ff0080",
                boxShadow: "0 0 25px rgba(255, 0, 128, 0.5)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 md:py-4 text-base md:text-lg font-mono tracking-wider uppercase text-cyber-blue border-2 border-cyber-blue/50 hover:border-neon-pink transition-all duration-300 w-full sm:w-auto"
            >
              Latest Mix
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Save The Date */}
        <motion.div 
          className="mt-16 md:mt-20 p-6 md:p-8 bg-flowcore-black/60 backdrop-blur-md border border-acid-green/20 rounded-xl max-w-lg mx-auto hover:border-cyber-blue/40 transition-all duration-300 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 3.5, duration: 1.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(0, 195, 255, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-acid-green/3 via-cyber-blue/3 to-rave-purple/3 rounded-xl"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10">
            <motion.p 
              className="text-xs md:text-sm text-acid-green/60 font-mono uppercase tracking-wider mb-2 md:mb-3"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Save The Date
            </motion.p>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-orbitron font-bold text-acid-green mb-2"
              animate={{
                textShadow: [
                  "0 0 8px rgba(57,255,20,0.4)",
                  "0 0 20px rgba(57,255,20,0.8)",
                  "0 0 8px rgba(57,255,20,0.4)"
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              JUNE 27TH
            </motion.h3>
            
            <p className="text-cyber-blue font-mono mb-4 text-center text-sm md:text-base">
              STAY TUNED FOR OUR<br/>
              BIGGEST EVENT YET
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                color: "#ff0080",
                boxShadow: "0 0 20px rgba(255, 0, 128, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-mono text-rave-purple hover:text-neon-pink transition-colors duration-300 border-b border-rave-purple/50 hover:border-neon-pink pb-1 w-full text-center"
            >
              GET NOTIFIED →
            </motion.button>
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
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-acid-green/30 rounded-full flex justify-center relative">
          <motion.div 
            className="w-0.5 h-2 md:w-1 md:h-3 bg-acid-green/50 rounded-full mt-1.5 md:mt-2"
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