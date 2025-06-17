'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
}

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<'cart' | 'shipping' | 'payment' | 'confirmation'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Türkiye'
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setCurrentStep('confirmation');
    
    // Clear cart after successful payment
    setTimeout(() => {
      clearCart();
    }, 3000);
  };

  const steps = [
    { key: 'cart', label: 'Sepet', completed: true },
    { key: 'shipping', label: 'Teslimat', completed: currentStep === 'payment' || currentStep === 'confirmation' },
    { key: 'payment', label: 'Ödeme', completed: currentStep === 'confirmation' },
    { key: 'confirmation', label: 'Onay', completed: false }
  ];

  if (items.length === 0 && currentStep !== 'confirmation') {
    return (
      <main className="min-h-screen bg-flowcore-black">
        <Navigation />
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-orbitron font-bold text-pure-white mb-6">
              Sepetiniz Boş
            </h1>
            <p className="text-light-text font-cs-felice mb-8">
              Ödeme yapmak için sepetinizde ürün olması gerekiyor.
            </p>
            <Link href="/merch">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button px-8 py-4 font-cs-felice tracking-cs-wider uppercase"
              >
                Alışverişe Başla
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-flowcore-black">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-pure-white glitch-text mb-4" data-text="CHECKOUT">
              CHECKOUT
            </h1>
            <p className="text-light-text font-cs-felice tracking-cs-wider">
              SECURE UNDERGROUND SHOPPING EXPERIENCE
            </p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center space-x-8 bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg px-8 py-4">
              {steps.map((step, index) => (
                <div key={step.key} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 font-cs-felice text-sm ${
                    step.key === currentStep
                      ? 'border-pure-white bg-pure-white/10 text-pure-white'
                      : step.completed
                      ? 'border-silver bg-silver/20 text-silver'
                      : 'border-light-text/30 text-light-text/30'
                  }`}>
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <span className={`ml-2 font-cs-felice text-sm tracking-cs-wider uppercase ${
                    step.key === currentStep ? 'text-pure-white' : step.completed ? 'text-silver' : 'text-light-text/30'
                  }`}>
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`ml-8 w-8 h-0.5 ${
                      step.completed ? 'bg-silver' : 'bg-light-text/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Cart Review Step */}
                {currentStep === 'cart' && (
                  <motion.div
                    key="cart"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-8"
                  >
                    <h2 className="text-2xl font-orbitron font-bold text-pure-white mb-6">
                      Sepet Özeti
                    </h2>
                    
                    <div className="space-y-4 mb-8">
                      {items.map((item) => (
                        <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-4 p-4 bg-flowcore-black/30 rounded-lg border border-silver/10">
                          <div className="w-16 h-16 bg-gradient-to-br from-medium-gray/30 to-light-gray/30 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-orbitron font-bold text-pure-white/40">FC</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-orbitron font-bold text-pure-white">{item.name}</h3>
                            <p className="text-light-text/60 font-cs-felice text-sm">
                              {item.size} • {item.color} • Adet: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-pure-white font-orbitron font-bold">₺{item.price * item.quantity}</div>
                            {item.originalPrice && item.originalPrice > item.price && (
                              <div className="text-light-text/60 line-through text-sm">₺{item.originalPrice * item.quantity}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => setCurrentStep('shipping')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full neon-button py-4 font-cs-felice tracking-cs-wider uppercase"
                    >
                      Teslimat Bilgilerine Geç
                    </motion.button>
                  </motion.div>
                )}

                {/* Shipping Step */}
                {currentStep === 'shipping' && (
                  <motion.div
                    key="shipping"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-8"
                  >
                    <h2 className="text-2xl font-orbitron font-bold text-pure-white mb-6">
                      Teslimat Bilgileri
                    </h2>
                    
                    <form onSubmit={handleShippingSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                            Ad
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.firstName}
                            onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                            className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                            Soyad
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.lastName}
                            onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                            className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                          E-mail
                        </label>
                        <input
                          type="email"
                          required
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                          className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          required
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                          className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                          Adres
                        </label>
                        <textarea
                          required
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                          rows={3}
                          className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                            Şehir
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                            className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                            Posta Kodu
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.postalCode}
                            onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                            className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                            Ülke
                          </label>
                          <select
                            required
                            value={shippingInfo.country}
                            onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                            className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                          >
                            <option value="Türkiye">Türkiye</option>
                            <option value="Germany">Germany</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="France">France</option>
                            <option value="UK">United Kingdom</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <motion.button
                          type="button"
                          onClick={() => setCurrentStep('cart')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-3 border-2 border-silver/30 text-pure-white font-cs-felice tracking-cs-wider uppercase hover:border-pure-white hover:bg-pure-white/10 transition-all duration-300"
                        >
                          Geri
                        </motion.button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 neon-button py-3 font-cs-felice tracking-cs-wider uppercase"
                        >
                          Ödemeye Geç
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Payment Step */}
                {currentStep === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-8"
                  >
                    <h2 className="text-2xl font-orbitron font-bold text-pure-white mb-6">
                      Ödeme Bilgileri
                    </h2>
                    
                    <form onSubmit={handlePaymentSubmit} className="space-y-6">
                      <div>
                        <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                          Kart Numarası
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.cardNumber}
                          onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                          className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                            Son Kullanma
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="MM/YY"
                            value={paymentInfo.expiryDate}
                            onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                            className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                            CVV
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="123"
                            value={paymentInfo.cvv}
                            onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                            className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-silver font-cs-felice text-sm mb-2 tracking-cs-wider uppercase">
                          Kart Sahibi
                        </label>
                        <input
                          type="text"
                          required
                          value={paymentInfo.cardHolder}
                          onChange={(e) => setPaymentInfo({...paymentInfo, cardHolder: e.target.value})}
                          className="w-full p-3 bg-flowcore-black/30 border border-silver/30 rounded text-pure-white font-cs-felice focus:border-pure-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="bg-flowcore-black/30 border border-silver/20 rounded-lg p-4">
                        <p className="text-light-text/80 font-cs-felice text-sm mb-2">
                          🔒 Güvenli ödeme sistemi
                        </p>
                        <p className="text-light-text/60 font-cs-felice text-xs">
                          Kart bilgileriniz SSL sertifikası ile korunmaktadır.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <motion.button
                          type="button"
                          onClick={() => setCurrentStep('shipping')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-3 border-2 border-silver/30 text-pure-white font-cs-felice tracking-cs-wider uppercase hover:border-pure-white hover:bg-pure-white/10 transition-all duration-300"
                        >
                          Geri
                        </motion.button>
                        <motion.button
                          type="submit"
                          disabled={isProcessing}
                          whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                          whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                          className={`flex-1 py-3 font-cs-felice tracking-cs-wider uppercase ${
                            isProcessing 
                              ? 'border-2 border-silver/30 text-silver cursor-not-allowed'
                              : 'neon-button add-to-cart-button'
                          }`}
                        >
                          {isProcessing ? 'İşleniyor...' : `₺${total} Öde`}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Confirmation Step */}
                {currentStep === 'confirmation' && (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-20 h-20 bg-silver/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <svg className="w-10 h-10 text-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    
                    <h2 className="text-3xl font-orbitron font-bold text-pure-white mb-4">
                      Siparişiniz Alındı!
                    </h2>
                    
                    <p className="text-light-text font-cs-felice mb-8">
                      Sipariş numaranız: <span className="text-silver font-bold">#FC{Date.now().toString().slice(-6)}</span>
                    </p>
                    
                    <div className="bg-flowcore-black/30 border border-silver/20 rounded-lg p-6 mb-8">
                      <h3 className="font-orbitron font-bold text-pure-white mb-4">Teslimat Bilgileri</h3>
                      <p className="text-light-text/80 font-cs-felice text-sm">
                        {shippingInfo.firstName} {shippingInfo.lastName}<br />
                        {shippingInfo.address}<br />
                        {shippingInfo.city}, {shippingInfo.postalCode}<br />
                        {shippingInfo.country}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/merch">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full neon-button py-4 font-cs-felice tracking-cs-wider uppercase mb-4"
                        >
                          Alışverişe Devam Et
                        </motion.button>
                      </Link>
                      
                      <Link href="/">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-3 border-2 border-silver/30 text-pure-white font-cs-felice tracking-cs-wider uppercase hover:border-pure-white hover:bg-pure-white/10 transition-all duration-300"
                        >
                          Ana Sayfaya Dön
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Order Summary Sidebar */}
            {currentStep !== 'confirmation' && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-8 h-fit sticky top-32"
              >
                <h3 className="text-xl font-orbitron font-bold text-pure-white mb-6">
                  Sipariş Özeti
                </h3>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between">
                      <div className="flex-1">
                        <p className="text-pure-white font-cs-felice text-sm">{item.name}</p>
                        <p className="text-light-text/60 font-cs-felice text-xs">
                          {item.size} • {item.color} • {item.quantity}x
                        </p>
                      </div>
                      <div className="text-pure-white font-orbitron">₺{item.price * item.quantity}</div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-silver/30 pt-4 space-y-2">
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
                  <div className="flex justify-between text-light-text font-cs-felice text-sm">
                    <span>KDV (%18):</span>
                    <span>₺{tax}</span>
                  </div>
                  <div className="border-t border-silver/30 pt-2">
                    <div className="flex justify-between text-pure-white font-orbitron font-bold text-lg">
                      <span>Toplam:</span>
                      <span className="price-glow">₺{total}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 