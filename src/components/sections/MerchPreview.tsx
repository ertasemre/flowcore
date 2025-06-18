'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const featuredMerch = [
  {
    id: 1,
    name: 'FLOWCORE Logo Hoodie',
    price: 450,
    originalPrice: 550,
    category: 'Giyim',
    badge: 'Best Seller',
    description: 'Premium kalite kapüşonlu sweatshirt'
  },
  {
    id: 2,
    name: 'ACIDCORE T-Shirt',
    price: 220,
    originalPrice: 280,
    category: 'Giyim',
    badge: 'Glow Print',
    description: 'Glow-in-the-dark baskı'
  },
  {
    id: 4,
    name: 'Underground Vinyl Bundle',
    price: 350,
    originalPrice: 420,
    category: 'Vinyl & Music',
    badge: 'Limited',
    description: 'FC sanatçılarının seçilmiş 3 adet vinyl\'ı'
  }
];

export default function MerchPreview() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-flowcore-black to-flowcore-black/90">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-pure-white glitch-text mb-6" data-text="MERCH">
            MERCH
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-light-text font-cs-felice max-w-3xl mx-auto mb-8 tracking-cs-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            WEAR THE UNDERGROUND • EXPRESS YOUR IDENTITY
          </motion.p>
          
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-pure-white price-glow mb-1">
                100+
              </div>
              <div className="text-light-text/60 font-cs-felice text-sm tracking-cs-wider uppercase">
                Designs
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-pure-white price-glow mb-1">
                24h
              </div>
              <div className="text-light-text/60 font-cs-felice text-sm tracking-cs-wider uppercase">
                Shipping
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-pure-white price-glow mb-1">
                Limited
              </div>
              <div className="text-light-text/60 font-cs-felice text-sm tracking-cs-wider uppercase">
                Drops
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredMerch.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg overflow-hidden hover:border-light-text/50 product-card"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden product-placeholder">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-orbitron font-bold text-pure-white/20">
                    FC
                  </span>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-cs-felice uppercase tracking-cs-wider rounded-full backdrop-blur-md badge-pulse ${
                    item.badge === 'Limited'
                      ? 'bg-silver/80 text-flowcore-black'
                      : 'bg-pure-white/80 text-flowcore-black'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Discount Badge */}
                {item.originalPrice > item.price && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-cs-felice bg-pure-white/20 text-pure-white rounded-full">
                      -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                    </span>
                  </div>
                )}

                {/* Hover Glitch Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black via-transparent to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-pure-white group-hover:text-silver transition-colors duration-300 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-light-text/60 font-cs-felice text-sm uppercase tracking-cs-wider">
                      {item.category}
                    </p>
                  </div>
                </div>
                
                <p className="text-light-text/70 font-cs-felice text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-orbitron font-bold text-pure-white price-glow">
                    ₺{item.price}
                  </span>
                  {item.originalPrice > item.price && (
                    <span className="text-lg text-light-text/60 line-through font-cs-felice">
                      ₺{item.originalPrice}
                    </span>
                  )}
                </div>

                {/* Quick Add Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 mt-4 border-2 border-silver/30 text-pure-white font-cs-felice tracking-cs-wider uppercase text-sm hover:border-pure-white hover:bg-pure-white/10 transition-all duration-300"
                >
                  Quick View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-flowcore-black/80 via-flowcore-black to-flowcore-black/80 backdrop-blur-md border border-silver/30 rounded-2xl p-8 cyber-grid"
          >
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-pure-white mb-4">
              EXPLORE THE FULL COLLECTION
            </h3>
            <p className="text-light-text font-cs-felice mb-6 tracking-cs-wider">
              Discover exclusive underground pieces • Limited drops • Worldwide shipping
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/merch">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-button px-8 py-4 font-cs-felice tracking-cs-wider uppercase"
                >
                  SHOP ALL MERCH
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-silver/30 text-pure-white font-cs-felice tracking-cs-wider uppercase hover:border-pure-white hover:bg-pure-white/10 transition-all duration-300"
              >
                SIZE GUIDE
              </motion.button>
            </div>
            
            {/* Special Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 pt-6 border-t border-silver/20"
            >
              <p className="text-silver font-cs-felice text-sm tracking-cs-wider uppercase mb-2">
                ⚡ LIMITED TIME OFFER
              </p>
              <p className="text-light-text/80 font-cs-felice text-lg">
                FREE SHIPPING on orders over ₺500
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 