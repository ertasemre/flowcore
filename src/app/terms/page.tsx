'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function TermsPage() {
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

  const termsData = [
    {
      title: "1. ACCEPTANCE OF TERMS",
      content: "By accessing and using FLOWCORE platform, you accept and agree to be bound by the terms and provision of this agreement. You must be at least 18 years old to use our services. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. USE LICENSE",
      content: "Permission is granted to temporarily access FLOWCORE for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; remove any copyright or other proprietary notations from the materials."
    },
    {
      title: "3. USER ACCOUNTS",
      content: "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the service and for all activities that occur under your account. You must immediately notify us of any unauthorized uses of your account."
    },
    {
      title: "4. UNDERGROUND EVENTS",
      content: "Attendance at FLOWCORE events is at your own risk. We are not responsible for any injuries, losses, or damages that may occur during events. All attendees must respect the underground culture and maintain the confidentiality of event locations and details."
    },
    {
      title: "5. MERCHANDISE",
      content: "All merchandise sales are final. We reserve the right to limit quantities and refuse service. Product descriptions and pricing are subject to change without notice. Limited edition items are subject to availability and may not be restocked."
    },
    {
      title: "6. INTELLECTUAL PROPERTY",
      content: "The service and its original content, features and functionality are and will remain the exclusive property of FLOWCORE and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without our prior written consent."
    },
    {
      title: "7. PRIVACY & DATA",
      content: "Your privacy is important to us. We collect and use information in accordance with our Privacy Policy. By using our service, you consent to the collection and use of information in accordance with our policy. We employ industry-standard security measures to protect your data."
    },
    {
      title: "8. PROHIBITED USES",
      content: "You may not use our service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction including but not limited to copyright laws. You are prohibited from using the site to transmit any illegal, harmful, or offensive content."
    },
    {
      title: "9. TERMINATION",
      content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
    },
    {
      title: "10. DISCLAIMER",
      content: "The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, FLOWCORE excludes all representations, warranties, conditions and terms whether express or implied, statutory or otherwise."
    },
    {
      title: "11. LIMITATION OF LIABILITY",
      content: "In no case shall FLOWCORE, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, consequential, or special damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
      title: "12. CHANGES TO TERMS",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
    }
  ];

  return (
    <main className="min-h-screen bg-flowcore-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          <div className="cyber-grid"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-4xl"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1 
              className="text-6xl md:text-7xl font-orbitron font-black text-pure-white glitch-text mb-6"
              data-text="TERMS"
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
              TERMS OF SERVICE
            </motion.h1>
            <motion.p 
              className="text-xl text-light-text/80 font-cs-felice max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Underground collective agreement for digital access and event participation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 inline-block px-4 py-2 border border-silver/30 rounded text-silver font-cs-felice text-sm"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </motion.div>
          </motion.div>

          {/* Terms Content */}
          <div className="space-y-8">
            {termsData.map((term, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-flowcore-black/60 backdrop-blur-md border border-silver/20 rounded-lg p-8 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pure-white/5 via-transparent to-transparent"
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-orbitron font-bold text-pure-white mb-4">
                    {term.title}
                  </h2>
                  <p className="text-light-text/80 font-cs-felice leading-relaxed">
                    {term.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-flowcore-black/80 backdrop-blur-md border border-silver/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-orbitron font-bold text-pure-white mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-light-text/70 font-cs-felice mb-6 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our underground channels.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block neon-button py-3 px-8 font-cs-felice tracking-cs-wider uppercase"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 