'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function PrivacyPage() {
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

  const privacyData = [
    {
      title: "1. INFORMATION WE COLLECT",
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes personal information like your name, email address, phone number, and payment information. We also automatically collect certain information about your device and how you interact with our platform."
    },
    {
      title: "2. HOW WE USE YOUR INFORMATION",
      content: "We use the information we collect to provide, maintain, and improve our services; process transactions; send you technical notices and support messages; communicate with you about events, products, and services; and monitor and analyze trends and usage patterns."
    },
    {
      title: "3. UNDERGROUND EVENT PRIVACY",
      content: "For underground events, we maintain strict confidentiality regarding attendee information. Event locations and participant details are kept secure and are not shared with third parties. We respect the underground culture's need for privacy and discretion."
    },
    {
      title: "4. INFORMATION SHARING",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information in limited circumstances: with your consent; to comply with legal obligations; to protect our rights and safety; or with service providers who assist us in operating our platform."
    },
    {
      title: "5. DATA SECURITY",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "6. COOKIES & TRACKING",
      content: "We use cookies and similar tracking technologies to collect and track information and to improve and analyze our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service."
    },
    {
      title: "7. DATA RETENTION",
      content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it."
    },
    {
      title: "8. YOUR RIGHTS",
      content: "You have the right to access, update, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us using the information provided below."
    },
    {
      title: "9. THIRD-PARTY SERVICES",
      content: "Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you visit."
    },
    {
      title: "10. CHILDREN'S PRIVACY",
      content: "Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us."
    },
    {
      title: "11. INTERNATIONAL TRANSFERS",
      content: "Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws than your country. We ensure appropriate safeguards are in place to protect your information."
    },
    {
      title: "12. CHANGES TO THIS POLICY",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last updated' date. You are advised to review this privacy policy periodically for any changes."
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
              data-text="PRIVACY"
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
              PRIVACY POLICY
            </motion.h1>
            <motion.p 
              className="text-xl text-light-text/80 font-cs-felice max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your data privacy matters in the underground. We protect what&apos;s yours.
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

          {/* Privacy Content */}
          <div className="space-y-8">
            {privacyData.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-flowcore-black/60 backdrop-blur-md border border-silver/20 rounded-lg p-8 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-l from-pure-white/5 via-transparent to-transparent"
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
                    {section.title}
                  </h2>
                  <p className="text-light-text/80 font-cs-felice leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data Rights Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-flowcore-black/80 to-flowcore-black/60 backdrop-blur-md border border-silver/30 rounded-xl p-8"
          >
            <h3 className="text-3xl font-orbitron font-bold text-pure-white mb-6 text-center">
              YOUR DATA RIGHTS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pure-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-pure-white mb-1">Access</h4>
                    <p className="text-light-text/70 font-cs-felice text-sm">Request a copy of your personal data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pure-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-pure-white mb-1">Rectification</h4>
                    <p className="text-light-text/70 font-cs-felice text-sm">Correct inaccurate personal information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pure-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-pure-white mb-1">Erasure</h4>
                    <p className="text-light-text/70 font-cs-felice text-sm">Request deletion of your data</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pure-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-pure-white mb-1">Portability</h4>
                    <p className="text-light-text/70 font-cs-felice text-sm">Transfer your data to another service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pure-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-pure-white mb-1">Restriction</h4>
                    <p className="text-light-text/70 font-cs-felice text-sm">Limit how we process your information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pure-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-pure-white mb-1">Objection</h4>
                    <p className="text-light-text/70 font-cs-felice text-sm">Object to certain data processing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-flowcore-black/80 backdrop-blur-md border border-silver/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-orbitron font-bold text-pure-white mb-4">
              Questions About Your Privacy?
            </h3>
            <p className="text-light-text/70 font-cs-felice mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, contact our privacy team through secure channels.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block neon-button py-3 px-8 font-cs-felice tracking-cs-wider uppercase"
            >
              Contact Privacy Team
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 