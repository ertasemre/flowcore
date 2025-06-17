'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (isEmailSent) {
    return (
      <main className="min-h-screen bg-flowcore-black relative overflow-hidden">
        <Navigation />
        
        <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-md"
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-8 border-4 border-pure-white rounded-full flex items-center justify-center"
              animate={{
                borderColor: ["rgba(255,255,255,1)", "rgba(192,192,192,1)", "rgba(255,255,255,1)"],
                boxShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="text-pure-white text-4xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ✉
              </motion.div>
            </motion.div>
            
            <h1 className="text-4xl font-orbitron font-black text-pure-white mb-4 glitch-text" data-text="CHECK EMAIL">
              CHECK EMAIL
            </h1>
            <p className="text-light-text/80 font-cs-felice text-lg mb-4">
              Reset instructions sent to
            </p>
            <p className="text-silver font-cs-felice text-lg mb-8 break-all">
              {email}
            </p>
            <p className="text-light-text/60 font-cs-felice text-sm mb-8 leading-relaxed">
              Check your email for a link to reset your password. If it doesn&apos;t appear within a few minutes, check your spam folder.
            </p>
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/login"
                  className="inline-block neon-button py-3 px-8 font-cs-felice tracking-cs-wider uppercase"
                >
                  Back to Login
                </Link>
              </motion.div>
              
              <motion.button
                onClick={() => {
                  setIsEmailSent(false);
                  setEmail('');
                }}
                whileHover={{ scale: 1.05 }}
                className="block w-full text-silver hover:text-pure-white font-cs-felice text-sm transition-colors"
              >
                Try different email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-flowcore-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid"></div>
        </div>
        
        {/* Floating Particles */}
        {Array.from({ length: 5 }).map((_, i) => {
          const fixedPositions = [
            { x: 120 + i * 160, y: 120 + i * 100 },
            { x: 220 + i * 140, y: 320 + i * 80 },
            { x: 320 + i * 120, y: 220 + i * 90 },
            { x: 420 + i * 100, y: 420 + i * 70 },
            { x: 520 + i * 110, y: 170 + i * 95 }
          ];
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-pure-white/20 rounded-full"
              initial={{
                x: fixedPositions[i].x,
                y: fixedPositions[i].y,
              }}
              animate={{
                x: [
                  fixedPositions[i].x,
                  fixedPositions[i].x + 150,
                  fixedPositions[i].x
                ],
                y: [
                  fixedPositions[i].y,
                  fixedPositions[i].y + 100,
                  fixedPositions[i].y
                ],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 18 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.h1 
              className="text-5xl md:text-6xl font-orbitron font-black text-pure-white glitch-text mb-4"
              data-text="RECOVER"
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
              RECOVER
            </motion.h1>
            <p className="text-light-text/80 font-cs-felice text-lg">
              Reset your access code
            </p>
          </motion.div>

          {/* Forgot Password Form */}
          <motion.div
            variants={itemVariants}
            className="bg-flowcore-black/60 backdrop-blur-md border border-silver/20 rounded-lg p-8 relative overflow-hidden"
          >
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pure-white/5 via-silver/5 to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="text-center mb-6">
                <p className="text-light-text/70 font-cs-felice text-sm leading-relaxed">
                  Enter your email address and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className={`w-full bg-flowcore-black/50 border ${
                      error ? 'border-red-500' : 'border-silver/30'
                    } rounded-lg px-4 py-3 text-pure-white font-cs-felice focus:outline-none focus:border-pure-white transition-colors cyber-input`}
                    placeholder="your.email@domain.com"
                    autoFocus
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 font-cs-felice"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 font-cs-felice tracking-cs-wider uppercase transition-all duration-300 ${
                  isLoading
                    ? 'bg-medium-gray/50 text-light-text/50 cursor-not-allowed'
                    : 'neon-button hover:shadow-cyber'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="cyber-loader mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Reset Link'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Back to Login */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <p className="text-light-text/70 font-cs-felice">
              Remember your password?{' '}
              <Link
                href="/login"
                className="text-silver hover:text-pure-white transition-colors glitch-link"
                data-text="BACK TO LOGIN"
              >
                BACK TO LOGIN
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 