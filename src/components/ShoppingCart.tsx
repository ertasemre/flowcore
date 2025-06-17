'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function ShoppingCart() {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    getTotalItems, 
    isCartOpen, 
    setIsCartOpen,
    clearCart 
  } = useCart();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-flowcore-black/80 backdrop-blur-sm z-[200]"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-flowcore-black/95 backdrop-blur-md border-l border-silver/30 z-[201] overflow-y-auto"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-orbitron font-bold text-pure-white">
                  SEPET ({getTotalItems()})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-pure-white hover:text-light-text transition-colors text-2xl p-2"
                >
                  ×
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 mx-auto mb-4 text-light-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5M7 13l-1.5 5m0 0h9.5" />
                    </svg>
                    <p className="text-light-text/60 font-cs-felice text-sm">
                      Sepetiniz boş
                    </p>
                    <Link href="/merch">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 neon-button px-6 py-3 font-cs-felice tracking-cs-wider uppercase text-sm"
                      >
                        Alışverişe Başla
                      </motion.button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.size}-${item.color}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-4"
                      >
                        {/* Product Image & Info */}
                        <div className="flex gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-medium-gray/30 to-light-gray/30 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-orbitron font-bold text-pure-white/40">
                              FC
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-orbitron font-bold text-pure-white text-sm mb-1">
                              {item.name}
                            </h3>
                            <p className="text-light-text/60 font-cs-felice text-xs mb-2">
                              {item.size} • {item.color}
                            </p>
                            
                            {/* Price & Quantity */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-pure-white font-orbitron font-bold">
                                  ₺{item.price}
                                </span>
                                {item.originalPrice && item.originalPrice > item.price && (
                                  <span className="text-light-text/60 line-through text-sm font-cs-felice">
                                    ₺{item.originalPrice}
                                  </span>
                                )}
                              </div>
                              
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                                  className="w-6 h-6 border border-silver/30 rounded flex items-center justify-center text-pure-white hover:border-silver/50 quantity-button text-sm"
                                >
                                  -
                                </button>
                                <span className="text-pure-white font-cs-felice text-sm min-w-[2rem] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                                  className="w-6 h-6 border border-silver/30 rounded flex items-center justify-center text-pure-white hover:border-silver/50 quantity-button text-sm"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <div className="mt-3 pt-3 border-t border-silver/20">
                          <button
                            onClick={() => removeFromCart(item.id, item.size, item.color)}
                            className="text-light-text/60 hover:text-text-gray font-cs-felice text-xs tracking-cs-wider uppercase transition-colors"
                          >
                            Kaldır
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Summary */}
              {items.length > 0 && (
                <div className="border-t border-silver/30 pt-6 mt-6 space-y-4">
                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-light-text font-cs-felice text-sm">
                      <span>Ara Toplam:</span>
                      <span>₺{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-light-text font-cs-felice text-sm">
                      <span>Kargo:</span>
                      <span className={shipping === 0 ? 'text-silver' : ''}>
                        {shipping === 0 ? 'Ücretsiz' : `₺${shipping}`}
                      </span>
                    </div>
                    {subtotal < 500 && (
                      <p className="text-light-text/60 font-cs-felice text-xs">
                        ₺{500 - subtotal} daha harcayın, ücretsiz kargo kazanın
                      </p>
                    )}
                    <div className="border-t border-silver/30 pt-2">
                      <div className="flex justify-between text-pure-white font-orbitron font-bold">
                        <span>Toplam:</span>
                        <span className="price-glow">₺{total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href="/checkout">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsCartOpen(false)}
                        className="w-full neon-button py-4 font-cs-felice tracking-cs-wider uppercase text-sm add-to-cart-button"
                      >
                        Satın Al
                      </motion.button>
                    </Link>
                    
                    <div className="flex gap-3">
                      <Link href="/merch" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsCartOpen(false)}
                          className="w-full py-3 border-2 border-silver/30 text-pure-white font-cs-felice tracking-cs-wider uppercase text-sm hover:border-pure-white hover:bg-pure-white/10 transition-all duration-300"
                        >
                          Alışverişe Devam
                        </motion.button>
                      </Link>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={clearCart}
                        className="px-4 py-3 border-2 border-text-gray/30 text-text-gray font-cs-felice tracking-cs-wider uppercase text-sm hover:border-text-gray/50 transition-all duration-300"
                      >
                        Temizle
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 