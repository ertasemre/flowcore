'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.email) {
      newErrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically handle the actual login
      console.log('Login attempt:', formData);
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
        {Array.from({ length: 6 }).map((_, i) => {
          // Fixed positions to avoid hydration mismatch
          const fixedPositions = [
            { x: 100 + i * 150, y: 100 + i * 80 },
            { x: 200 + i * 120, y: 300 + i * 60 },
            { x: 300 + i * 100, y: 200 + i * 90 },
            { x: 400 + i * 80, y: 400 + i * 70 },
            { x: 500 + i * 90, y: 150 + i * 85 },
            { x: 600 + i * 110, y: 350 + i * 75 }
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
                  fixedPositions[i].x + 200,
                  fixedPositions[i].x
                ],
                y: [
                  fixedPositions[i].y,
                  fixedPositions[i].y + 150,
                  fixedPositions[i].y
                ],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 15 + i * 3,
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
              data-text="ACCESS"
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
              ACCESS
            </motion.h1>
            <p className="text-light-text/80 font-cs-felice text-lg">
              Enter the underground
            </p>
          </motion.div>

          {/* Login Form */}
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
              {/* Email Field */}
              <div>
                <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-flowcore-black/50 border ${
                      errors.email ? 'border-red-500' : 'border-silver/30'
                    } rounded-lg px-4 py-3 text-pure-white font-cs-felice focus:outline-none focus:border-pure-white transition-colors cyber-input`}
                    placeholder="your.email@domain.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 font-cs-felice"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full bg-flowcore-black/50 border ${
                      errors.password ? 'border-red-500' : 'border-silver/30'
                    } rounded-lg px-4 py-3 text-pure-white font-cs-felice focus:outline-none focus:border-pure-white transition-colors cyber-input`}
                    placeholder="••••••••"
                  />
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 font-cs-felice"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="cyber-checkbox mr-2"
                  />
                  <span className="text-light-text/70 font-cs-felice text-sm">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-silver hover:text-pure-white font-cs-felice text-sm transition-colors"
                >
                  Forgot password?
                </Link>
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
                    Accessing...
                  </div>
                ) : (
                  'Enter'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <p className="text-light-text/70 font-cs-felice">
              New to the underground?{' '}
              <Link
                href="/signup"
                className="text-silver hover:text-pure-white transition-colors glitch-link"
                data-text="JOIN US"
              >
                JOIN US
              </Link>
            </p>
          </motion.div>

          {/* Alternative Login */}
          <motion.div variants={itemVariants} className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-silver/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-flowcore-black text-light-text/60 font-cs-felice">
                  OR
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex justify-center py-3 px-4 border border-silver/30 rounded-lg bg-flowcore-black/50 text-light-text hover:text-pure-white hover:border-silver/50 transition-colors font-cs-felice"
              >
                <span>Continue with Google</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 