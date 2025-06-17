'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

const merchCategories = [
  { key: 'all', label: 'Tümü' },
  { key: 'clothing', label: 'Giyim' },
  { key: 'accessories', label: 'Aksesuar' },
  { key: 'vinyl', label: 'Vinyl & Music' },
  { key: 'limited', label: 'Limited Edition' }
];

const merchItems = [
  {
    id: 1,
    name: 'FLOWCORE Logo Hoodie',
    category: 'clothing',
    price: 450,
    originalPrice: 550,
    image: '/merch/hoodie-black.jpg',
    images: ['/merch/hoodie-black.jpg', '/merch/hoodie-detail.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Siyah', 'Beyaz', 'Gri'],
    description: 'Underground sahnenin ruhu taşıyan premium kalite kapüşonlu sweatshirt. %100 organik pamuk.',
    isLimited: false,
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'ACIDCORE T-Shirt',
    category: 'clothing',
    price: 220,
    originalPrice: 280,
    image: '/merch/tshirt-acid.jpg',
    images: ['/merch/tshirt-acid.jpg', '/merch/tshirt-back.jpg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Siyah', 'Neon Yeşil'],
    description: 'Acid house kültürünün simgesi olan tasarım. Glow-in-the-dark baskı.',
    isLimited: false,
    inStock: true,
    badge: 'Glow Print'
  },
  {
    id: 3,
    name: 'FC Trucker Cap',
    category: 'accessories',
    price: 180,
    originalPrice: 220,
    image: '/merch/cap-trucker.jpg',
    images: ['/merch/cap-trucker.jpg', '/merch/cap-side.jpg'],
    sizes: ['Tek Beden'],
    colors: ['Siyah/Beyaz', 'Tam Siyah'],
    description: 'Klasik trucker model şapka. Mesh arka panel, ayarlanabilir.',
    isLimited: false,
    inStock: true,
    badge: null
  },
  {
    id: 4,
    name: 'Underground Vinyl Bundle',
    category: 'vinyl',
    price: 350,
    originalPrice: 420,
    image: '/merch/vinyl-bundle.jpg',
    images: ['/merch/vinyl-bundle.jpg', '/merch/vinyl-detail.jpg'],
    sizes: ['Standard'],
    colors: ['Mixed'],
    description: 'FC sanatçılarının seçilmiş 3 adet vinyl\'ı. Limited pressing.',
    isLimited: true,
    inStock: true,
    badge: 'Limited'
  },
  {
    id: 5,
    name: 'RAVE Neon Sticker Pack',
    category: 'accessories',
    price: 45,
    originalPrice: 60,
    image: '/merch/stickers-neon.jpg',
    images: ['/merch/stickers-neon.jpg'],
    sizes: ['Pack'],
    colors: ['Mixed Neon'],
    description: '12 adet farklı tasarımda neon sticker. Su geçirmez, UV dayanıklı.',
    isLimited: false,
    inStock: true,
    badge: 'New'
  },
  {
    id: 6,
    name: 'FLOWCORE X ACID Limited Tee',
    category: 'limited',
    price: 380,
    originalPrice: 450,
    image: '/merch/tshirt-limited.jpg',
    images: ['/merch/tshirt-limited.jpg', '/merch/tshirt-limited-back.jpg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Acid Wash'],
    description: 'Sadece 100 adet üretilen özel koleksiyon. Hand-distressed acid wash efekti.',
    isLimited: true,
    inStock: false,
    badge: 'Sold Out'
  }
];

export default function MerchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<typeof merchItems[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const filteredItems = merchItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const openModal = (item: typeof merchItems[0]) => {
    setSelectedItem(item);
    setSelectedSize(item.sizes[0]);
    setSelectedColor(item.colors[0]);
    setQuantity(1);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    if (selectedItem && selectedItem.inStock) {
      addToCart({
        id: selectedItem.id,
        name: selectedItem.name,
        price: selectedItem.price,
        originalPrice: selectedItem.originalPrice,
        size: selectedSize,
        color: selectedColor,
        image: selectedItem.image,
        quantity: quantity
      });
      closeModal();
    }
  };

  return (
    <main className="min-h-screen bg-flowcore-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-pure-white glitch-text mb-6" data-text="MERCH">
              MERCH
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-light-text font-cs-felice max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Underground culture, wearable art
            </motion.p>
            
            {/* Stats Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-flowcore-black/30 backdrop-blur-md border border-silver/20 rounded-lg p-6">
                <div className="text-3xl font-orbitron font-bold text-pure-white mb-2 price-glow">
                  100+
                </div>
                <div className="text-light-text font-cs-felice text-sm tracking-cs-wider uppercase">
                  Unique Designs
                </div>
              </div>
              
              <div className="bg-flowcore-black/30 backdrop-blur-md border border-silver/20 rounded-lg p-6">
                <div className="text-3xl font-orbitron font-bold text-pure-white mb-2 price-glow">
                  24h
                </div>
                <div className="text-light-text font-cs-felice text-sm tracking-cs-wider uppercase">
                  Worldwide Shipping
                </div>
              </div>
              
              <div className="bg-flowcore-black/30 backdrop-blur-md border border-silver/20 rounded-lg p-6">
                <div className="text-3xl font-orbitron font-bold text-pure-white mb-2 price-glow">
                  Limited
                </div>
                <div className="text-light-text font-cs-felice text-sm tracking-cs-wider uppercase">
                  Exclusive Drops
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
                         {merchCategories.map((category) => (
               <motion.button
                 key={category.key}
                 onClick={() => setSelectedCategory(category.key)}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className={`px-6 py-3 font-cs-felice tracking-cs-wider uppercase category-button ${
                   selectedCategory === category.key
                     ? 'neon-button'
                     : 'text-light-text/60 border-2 border-silver/20 hover:border-silver/50 hover:text-pure-white'
                 }`}
               >
                 {category.label}
               </motion.button>
             ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg overflow-hidden hover:border-light-text/50 product-card cursor-pointer"
                onClick={() => openModal(item)}
              >
                {/* Product Image */}
                <div className={`relative h-80 overflow-hidden product-placeholder ${item.isLimited ? 'limited-edition' : ''}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-orbitron font-bold text-pure-white/20">
                      FC
                    </span>
                  </div>
                  
                  {!item.inStock && <div className="sold-out-overlay"></div>}
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.badge && (
                      <span className={`px-3 py-1 text-xs font-cs-felice uppercase tracking-cs-wider rounded-full backdrop-blur-md badge-pulse ${
                        item.badge === 'Sold Out' 
                          ? 'bg-text-gray/80 text-pure-white' 
                          : item.badge === 'Limited'
                          ? 'bg-silver/80 text-flowcore-black'
                          : 'bg-pure-white/80 text-flowcore-black'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {item.isLimited && (
                      <span className="px-3 py-1 text-xs font-cs-felice uppercase tracking-cs-wider rounded-full bg-silver/20 text-silver border border-silver/30 badge-pulse">
                        Limited
                      </span>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {item.originalPrice > item.price && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-cs-felice bg-pure-white/20 text-pure-white rounded-full">
                        -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}

                  {/* Glitch overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="scanner-line"></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black via-transparent to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-orbitron font-bold text-pure-white group-hover:text-silver transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-light-text/70 font-cs-felice text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Colors */}
                  <div className="flex flex-wrap gap-1">
                    {item.colors.slice(0, 3).map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-silver/30 bg-gradient-to-br from-medium-gray to-light-gray color-swatch"
                        title={color}
                      />
                    ))}
                    {item.colors.length > 3 && (
                      <span className="text-xs text-light-text/60 font-cs-felice ml-2">
                        +{item.colors.length - 3}
                      </span>
                    )}
                  </div>

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

                  {/* Stock Status */}
                  <div className={`text-sm font-cs-felice stock-indicator ${
                    item.inStock ? 'text-silver' : 'text-text-gray'
                  }`}>
                    {item.inStock ? 'Stokta Var' : 'Tükendi'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-flowcore-black to-flowcore-black/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-pure-white mb-4">
              BEST SELLERS
            </h2>
            <p className="text-light-text font-cs-felice tracking-cs-wider">
              MOST DEMANDED UNDERGROUND PIECES
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchItems.filter(item => item.badge === 'Best Seller').map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg overflow-hidden hover:border-light-text/50 product-card cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative h-64 overflow-hidden product-placeholder">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-orbitron font-bold text-pure-white/20">
                      FC
                    </span>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="scanner-line"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-cs-felice uppercase tracking-cs-wider rounded-full bg-pure-white/80 text-flowcore-black badge-pulse">
                      Best Seller
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-orbitron font-bold text-pure-white mb-3">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-orbitron font-bold text-pure-white price-glow">
                      ₺{item.price}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-light-text/60 line-through font-cs-felice">
                        ₺{item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-flowcore-black/80 via-flowcore-black to-flowcore-black/80 backdrop-blur-md border border-silver/30 rounded-2xl p-12 text-center cyber-grid"
          >
            <h2 className="text-5xl md:text-7xl font-orbitron font-black text-pure-white glitch-text mb-6" data-text="FREE SHIPPING">
              FREE SHIPPING
            </h2>
            <p className="text-xl md:text-2xl text-light-text font-cs-felice mb-8 tracking-cs-wider">
              ON ORDERS OVER ₺500 • WORLDWIDE DELIVERY
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-12 py-4 text-lg font-cs-felice tracking-cs-wider uppercase"
            >
              SHOP NOW
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedItem && (
                 <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
           onClick={closeModal}
         >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-flowcore-black/80 backdrop-blur-md border border-silver/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-pure-white hover:text-light-text transition-colors text-2xl"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="relative h-96 bg-gradient-to-br from-medium-gray/30 to-light-gray/30 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-orbitron font-bold text-pure-white/20">
                        FC
                      </span>
                    </div>
                  </div>
                  {selectedItem.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-2">
                      {selectedItem.images.slice(1).map((img: string, idx: number) => (
                        <div key={idx} className="relative h-24 bg-gradient-to-br from-medium-gray/30 to-light-gray/30 rounded-lg">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-orbitron font-bold text-pure-white/40">
                              {idx + 2}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-orbitron font-bold text-pure-white mb-2">
                      {selectedItem.name}
                    </h2>
                    {selectedItem.badge && (
                      <span className={`inline-block px-3 py-1 text-xs font-cs-felice uppercase tracking-cs-wider rounded-full ${
                        selectedItem.badge === 'Sold Out' 
                          ? 'bg-text-gray/80 text-pure-white' 
                          : 'bg-pure-white/20 text-pure-white'
                      }`}>
                        {selectedItem.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-light-text font-cs-felice leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-orbitron font-bold text-pure-white">
                      ₺{selectedItem.price}
                    </span>
                    {selectedItem.originalPrice > selectedItem.price && (
                      <span className="text-xl text-light-text/60 line-through font-cs-felice">
                        ₺{selectedItem.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Size Selection */}
                  {selectedItem.sizes.length > 1 && (
                    <div className="space-y-3">
                      <p className="text-silver font-cs-felice uppercase tracking-cs-wider text-sm">
                        Beden:
                      </p>
                                             <div className="flex flex-wrap gap-2">
                         {selectedItem.sizes.map((size: string) => (
                           <button
                             key={size}
                             onClick={() => setSelectedSize(size)}
                             className={`px-4 py-2 border rounded font-cs-felice text-sm size-selector ${
                               selectedSize === size
                                 ? 'border-pure-white text-pure-white bg-pure-white/10 selected'
                                 : 'border-silver/30 text-light-text hover:border-silver/50'
                             }`}
                           >
                             {size}
                           </button>
                         ))}
                       </div>
                    </div>
                  )}

                  {/* Color Selection */}
                  <div className="space-y-3">
                    <p className="text-silver font-cs-felice uppercase tracking-cs-wider text-sm">
                      Renk:
                    </p>
                                         <div className="flex flex-wrap gap-2">
                       {selectedItem.colors.map((color: string) => (
                         <button
                           key={color}
                           onClick={() => setSelectedColor(color)}
                           className={`px-4 py-2 border rounded font-cs-felice text-sm color-selector ${
                             selectedColor === color
                               ? 'border-pure-white text-pure-white bg-pure-white/10 selected'
                               : 'border-silver/30 text-light-text hover:border-silver/50'
                           }`}
                         >
                           {color}
                         </button>
                       ))}
                     </div>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-3">
                    <p className="text-silver font-cs-felice uppercase tracking-cs-wider text-sm">
                      Adet:
                    </p>
                                         <div className="flex items-center gap-4">
                       <button
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                         className="w-10 h-10 border border-silver/30 rounded flex items-center justify-center text-pure-white hover:border-silver/50 quantity-button"
                       >
                         -
                       </button>
                       <span className="text-xl font-cs-felice text-pure-white min-w-[3rem] text-center">
                         {quantity}
                       </span>
                       <button
                         onClick={() => setQuantity(quantity + 1)}
                         className="w-10 h-10 border border-silver/30 rounded flex items-center justify-center text-pure-white hover:border-silver/50 quantity-button"
                       >
                         +
                       </button>
                     </div>
                  </div>

                  {/* Add to Cart */}
                  <div className="pt-6 space-y-4">
                                         <motion.button
                       onClick={handleAddToCart}
                       whileHover={{ scale: selectedItem.inStock ? 1.05 : 1 }}
                       whileTap={{ scale: selectedItem.inStock ? 0.95 : 1 }}
                       disabled={!selectedItem.inStock}
                       className={`w-full py-4 font-cs-felice tracking-cs-wider uppercase text-lg add-to-cart-button ${
                         selectedItem.inStock
                           ? 'neon-button'
                           : 'border-2 border-text-gray/30 text-text-gray cursor-not-allowed'
                       }`}
                     >
                       {selectedItem.inStock ? 'Sepete Ekle' : 'Tükendi'}
                     </motion.button>
                    
                    {selectedItem.inStock && (
                      <p className="text-center text-sm text-light-text/60 font-cs-felice">
                        Toplam: ₺{selectedItem.price * quantity}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
} 