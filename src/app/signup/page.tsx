'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [step, setStep] = useState(1);

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

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last name required';
    }
    if (!formData.email) {
      newErrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.password) {
      newErrors.password = 'Password required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(3); // Success step
      console.log('Registration attempt:', formData);
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

  if (step === 3) {
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
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✓
              </motion.div>
            </motion.div>
            
            <h1 className="text-4xl font-orbitron font-black text-pure-white mb-4 glitch-text" data-text="WELCOME">
              WELCOME
            </h1>
            <p className="text-light-text/80 font-cs-felice text-lg mb-8">
              You&apos;ve joined the underground collective
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/login"
                className="inline-block neon-button py-3 px-8 font-cs-felice tracking-cs-wider uppercase"
              >
                Enter Now
              </Link>
            </motion.div>
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
        {Array.from({ length: 8 }).map((_, i) => {
          // Fixed positions to avoid hydration mismatch
          const fixedPositions = [
            { x: 80 + i * 120, y: 80 + i * 90 },
            { x: 180 + i * 100, y: 280 + i * 70 },
            { x: 280 + i * 110, y: 180 + i * 80 },
            { x: 380 + i * 90, y: 380 + i * 60 },
            { x: 480 + i * 80, y: 120 + i * 95 },
            { x: 580 + i * 100, y: 320 + i * 85 },
            { x: 680 + i * 70, y: 220 + i * 75 },
            { x: 780 + i * 90, y: 420 + i * 65 }
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
                  fixedPositions[i].x + 180,
                  fixedPositions[i].x
                ],
                y: [
                  fixedPositions[i].y,
                  fixedPositions[i].y + 120,
                  fixedPositions[i].y
                ],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 12 + i * 2,
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
              data-text="JOIN"
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
              JOIN
            </motion.h1>
            <p className="text-light-text/80 font-cs-felice text-lg mb-4">
              Become part of the collective
            </p>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-cs-felice ${
                step >= 1 ? 'border-pure-white bg-pure-white text-flowcore-black' : 'border-silver/30 text-silver/30'
              }`}>
                1
              </div>
              <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-pure-white' : 'bg-silver/30'}`}></div>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-cs-felice ${
                step >= 2 ? 'border-pure-white bg-pure-white text-flowcore-black' : 'border-silver/30 text-silver/30'
              }`}>
                2
              </div>
            </div>
          </motion.div>

          {/* Sign Up Form */}
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
            
            {step === 1 ? (
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl font-orbitron font-bold text-pure-white mb-6 text-center">
                  Personal Information
                </h3>
                
                {/* First Name */}
                <div>
                  <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-flowcore-black/50 border ${
                      errors.firstName ? 'border-red-500' : 'border-silver/30'
                    } rounded-lg px-4 py-3 text-pure-white font-cs-felice focus:outline-none focus:border-pure-white transition-colors cyber-input`}
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 font-cs-felice"
                    >
                      {errors.firstName}
                    </motion.p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-flowcore-black/50 border ${
                      errors.lastName ? 'border-red-500' : 'border-silver/30'
                    } rounded-lg px-4 py-3 text-pure-white font-cs-felice focus:outline-none focus:border-pure-white transition-colors cyber-input`}
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 font-cs-felice"
                    >
                      {errors.lastName}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                    Email
                  </label>
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

                {/* Next Button */}
                <motion.button
                  type="button"
                  onClick={handleNext}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full neon-button py-3 px-6 font-cs-felice tracking-cs-wider uppercase"
                >
                  Next
                </motion.button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-orbitron font-bold text-pure-white">
                    Security & Terms
                  </h3>
                  <motion.button
                    type="button"
                    onClick={() => setStep(1)}
                    whileHover={{ scale: 1.05 }}
                    className="text-silver hover:text-pure-white font-cs-felice text-sm"
                  >
                    Back
                  </motion.button>
                </div>
                
                {/* Password */}
                <div>
                  <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                    Password
                  </label>
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

                {/* Confirm Password */}
                <div>
                  <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full bg-flowcore-black/50 border ${
                      errors.confirmPassword ? 'border-red-500' : 'border-silver/30'
                    } rounded-lg px-4 py-3 text-pure-white font-cs-felice focus:outline-none focus:border-pure-white transition-colors cyber-input`}
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 font-cs-felice"
                    >
                      {errors.confirmPassword}
                    </motion.p>
                  )}
                </div>

                {/* Newsletter Subscription */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onChange={handleChange}
                      className="cyber-checkbox mr-3"
                    />
                    <span className="text-light-text/70 font-cs-felice text-sm">
                      Subscribe to underground updates and events
                    </span>
                  </label>
                </div>

                {/* Terms Agreement */}
                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="cyber-checkbox mr-3 mt-1"
                    />
                    <span className="text-light-text/70 font-cs-felice text-sm">
                      I agree to the{' '}
                      <Link href="/terms" className="text-silver hover:text-pure-white underline">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-silver hover:text-pure-white underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 font-cs-felice"
                    >
                      {errors.agreeToTerms}
                    </motion.p>
                  )}
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
                      Joining...
                    </div>
                  ) : (
                    'Join the Collective'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Login Link */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <p className="text-light-text/70 font-cs-felice">
              Already part of the underground?{' '}
              <Link
                href="/login"
                className="text-silver hover:text-pure-white transition-colors glitch-link"
                data-text="ACCESS"
              >
                ACCESS
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 