'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Masonry from 'react-masonry-css';

// Mock data - in real app this would come from an API
const eventDetails = {
    0: {
        id: 0,
        title: 'OVER:FLOW',
        date: '27 June 2025 Friday',
        time: '22:00 - 05:00',
        venue: 'Suma Han - 2 STAGES',
        location: 'Karaköy, İstanbul',
        artists: ['L\'ART CÈNE', 'ABEM', 'DUBSTRACT', 'DYLN', 'GUNSELX', 'FOLDED', 'OGIMARU', 'SARPT', 'ALL I CAN', 'SEYMEN', 'FORMAL', 'KUZEN'],
        description: 'Get ready for 2 stages of niche underground sounds and meticulously crafted decor & visuals',
        fullDescription: 'OVER:FLOW represents the pinnacle of Flowcore\'s vision - a multi-stage event showcasing the finest niche underground sounds. Taking over both floors of Suma Han, this event brings together a carefully curated lineup of local and international artists.\n\nThe main floor will feature deeper, more hypnotic sounds while the second stage offers more experimental and boundary-pushing performances. Each space is transformed with meticulously crafted decor and immersive visuals that complement the sonic journey.\n\nThis is more than just a party - it\'s a complete sensory experience designed to create moments of genuine connection and collective effervescence. Join us as we push the boundaries of Istanbul\'s electronic music scene.',
        ticketUrl: 'https://bugece.co/en/event/overflow-06-27-25',
        status: 'upcoming',
        poster: '/events/overflow-1.jpeg',
        ticketSources: [
          { name: 'Bugece', price: '' },
          { name: 'Instagram DM', price: '' }
        ],
        mediaItems: [
        ]
      },
  1: {
    id: 1,
    title: 'ROOTS OF THE FUTURE',
    date: '22 Şubat 2024',
    time: '22:00 - 04:00',
    venue: 'Suma Han Studio Stage',
    location: 'Karaköy, İstanbul',
    artists: ['Oriofonul', 'All I Can', 'Sarpt', 'Ogimaru', 'Salek', 'Oxomo'],
    description: 'Flowcore Collective, psychedelic köklerine dönüş yaparak, Suma Han\'ın stüdyo sahnesinde mistik bir atmosfer yaratıyor. Sanatçıların özgün dekorasyonları ve özel kokteyllerle duyulara hitap eden bu gece, psytrance\'ın farklı alt türlerini bir araya getiriyor.',
    fullDescription: 'Flowcore Collective\'in en büyüleyici etkinliklerinden biri olan "Roots of the Future", elektronik müziğin kökenlerine yapılan derin bir yolculuk. Suma Han\'ın eşsiz akustiğinde gerçekleşen bu gece, psytrance\'ın farklı alt türlerini harmanlayarak dinleyicilerini zamansız bir deneyime sürüklüyor.\n\nEtkinlik boyunca sahne alan her sanatçı, kendi müzikal kimliğini korurken kollektifin bütüncül vizyonuna katkıda bulunuyor. Özel olarak tasarlanan sahne dekorasyonları ve atmosferik ışık gösterileri ile desteklenen performanslar, görsel ve işitsel duyuları eş zamanlı olarak etkileyen bir sanat eseri yaratıyor.\n\nGecenin özel kokteyl menüsü, müzikal yolculuğu tamamlayan tatlar sunuyor. Her içecek, gecenin enerjisini yansıtacak şekilde özenle hazırlanmış ve etkinliğin bütüncül deneyiminin bir parçası haline getirilmiş.',
    ticketUrl: 'https://bugece.co/flowcore-roots-future',
    status: 'past',
    poster: '/events/rootofthefuture.png',
    ticketSources: [
      { name: 'Sold Out', price: 'All Venues' },
      { name: 'Legendary Night', price: '★★★★★' }
    ],
    mediaItems: [
      { type: 'image' as const, src: '/events/1/ .png', alt: 'Event Poster', aspectRatio: 'tall' as const, featured: true },
      { type: 'image' as const, src: '/artists/ogimaru.jpg', alt: 'Ogimaru Performance', aspectRatio: 'wide' as const },
      { type: 'image' as const, src: '/artists/allican.jpg', alt: 'All I Can Set', aspectRatio: 'square' as const },
      { type: 'image' as const, src: '/artists/formal.jpg', alt: 'Formal Live', aspectRatio: 'tall' as const },
      { type: 'image' as const, src: '/artists/sarpt.jpg', alt: 'Sarpt Session', aspectRatio: 'wide' as const },
      { type: 'video' as const, src: '/videos/highlight1.mp4', poster: '/events/rootofthefuture.png', alt: 'Event Highlights', aspectRatio: 'wide' as const, featured: true },
      { type: 'image' as const, src: '/events/rootofthefuture.png', alt: 'Crowd Moment 1', aspectRatio: 'square' as const },
      { type: 'image' as const, src: '/events/rootofthefuture.png', alt: 'Stage Design', aspectRatio: 'tall' as const },
      { type: 'video' as const, src: '/videos/highlight2.mp4', poster: '/events/rootofthefuture.png', alt: 'Artist Performance', aspectRatio: 'square' as const },
      { type: 'image' as const, src: '/events/rootofthefuture.png', alt: 'Crowd Moment 2', aspectRatio: 'wide' as const },
      { type: 'image' as const, src: '/events/rootofthefuture.png', alt: 'Light Show', aspectRatio: 'tall' as const, featured: true },
      { type: 'image' as const, src: '/events/rootofthefuture.png', alt: 'Behind the Scenes', aspectRatio: 'square' as const }
    ]
  },
  // Add more events as needed
};

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  aspectRatio: 'square' | 'wide' | 'tall';
  featured?: boolean;
}

interface MediaGridProps {
  items: MediaItem[];
}

// Individual media item component
function MediaItem({ item }: { item: MediaItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const getAspectRatioClasses = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'tall':
        return 'aspect-[3/4] lg:aspect-[2/3]';
      case 'wide':
        return 'aspect-[16/9]';
      case 'square':
      default:
        return 'aspect-square';
    }
  };

  const getFeaturedClasses = (featured?: boolean) => {
    if (featured) {
      return 'lg:col-span-2 lg:row-span-2';
    }
    return '';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60,
        scale: 0.8,
        rotateX: 15,
        rotateY: Math.random() * 10 - 5
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0
      } : {}}
      transition={{ 
        duration: 0.8,
        delay: Math.random() * 0.3,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.1
      }}
      className={`
        group relative mb-4 break-inside-avoid
        ${getAspectRatioClasses(item.aspectRatio)}
        ${getFeaturedClasses(item.featured)}
        bg-gradient-to-br from-flowcore-black/90 to-flowcore-black/60 
        rounded-xl overflow-hidden 
        border border-silver/10 hover:border-light-text/40
        backdrop-blur-sm
        transform-gpu
        hover:shadow-2xl hover:shadow-pure-white/5
        transition-all duration-700 ease-out
      `}
      style={{
        transform: `perspective(1000px) ${isInView ? 'rotateX(0deg) rotateY(0deg)' : 'rotateX(15deg) rotateY(5deg)'}`,
      }}
      whileHover={{ 
        scale: 1.02,
        rotateZ: Math.random() * 2 - 1,
        transition: { duration: 0.3 }
      }}
    >
      {/* Media Content */}
      <div className="relative w-full h-full">
        {item.type === 'image' ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              filter: 'grayscale(0.3) contrast(1.1)',
            }}
          />
        ) : (
          <video
            src={item.src}
            poster={item.poster}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => e.currentTarget.pause()}
            style={{
              filter: 'grayscale(0.2) contrast(1.05)',
            }}
          />
        )}

        {/* Artistic overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black/80 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-pure-white/5 via-transparent to-flowcore-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glitch lines effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-pure-white/30 transform skew-x-12 animate-pulse" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-light-text/20 transform -skew-x-12 animate-pulse delay-150" />
        </div>

        {/* Content overlay */}
        <motion.div 
          className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <p className="text-pure-white font-cs-felice text-sm lg:text-base mb-2 leading-tight">
              {item.alt}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-pure-white/80 rounded-full pulse" />
              <span className="text-xs lg:text-sm text-light-text/90 font-cs-felice tracking-wider uppercase">
                {item.type === 'video' ? '● Video' : '○ Photo'}
              </span>
              {item.featured && (
                <span className="text-xs text-silver/80 font-cs-felice tracking-wider uppercase">
                  Featured
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Play button for videos */}
        {item.type === 'video' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 lg:w-20 lg:h-20 bg-pure-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-pure-white/20 shadow-lg"
            >
              <div className="w-0 h-0 border-l-[16px] border-l-pure-white border-y-[10px] border-y-transparent ml-1 drop-shadow-lg" />
            </motion.div>
          </motion.div>
        )}

        {/* Featured badge */}
        {item.featured && (
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 bg-pure-white/10 backdrop-blur-md border border-pure-white/20 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="text-xs text-pure-white/90 font-cs-felice tracking-wider">★</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function MediaGrid({ items }: MediaGridProps) {
  const [visibleItems, setVisibleItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 6;

  const loadMoreItems = useCallback(() => {
    if (loading) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const start = page * itemsPerPage;
      const end = start + itemsPerPage;
      const newItems = items.slice(start, end);
      
      setVisibleItems(prev => [...prev, ...newItems]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  }, [items, page, loading]);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && visibleItems.length < items.length) {
          loadMoreItems();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreItems, loading, visibleItems.length, items.length]);

  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    1000: 2,
    700: 1
  };

  return (
    <div className="w-full">
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4 lg:-ml-6"
        columnClassName="pl-4 lg:pl-6 bg-clip-padding"
      >
        {visibleItems.map((item, index) => (
          <MediaItem key={`${item.src}-${index}`} item={item} />
        ))}
      </Masonry>

      {/* Loading indicator */}
      <div ref={loaderRef} className="flex justify-center py-12">
        {loading ? (
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 border-2 border-silver/20 border-t-pure-white border-r-light-text/50 rounded-full" />
            <div className="absolute inset-2 w-8 h-8 border-2 border-light-text/20 border-b-pure-white rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
          </motion.div>
        ) : visibleItems.length < items.length ? (
          <motion.button
            onClick={loadMoreItems}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative neon-button px-8 py-4 font-cs-felice tracking-cs-wider uppercase overflow-hidden"
          >
            <span className="relative z-10">Reveal More</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pure-white/10 to-silver/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <p className="text-light-text/60 font-cs-felice text-sm">
              The complete gallery has been revealed
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-1 bg-silver/40 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-silver/40 rounded-full animate-pulse delay-150" />
              <div className="w-1 h-1 bg-silver/40 rounded-full animate-pulse delay-300" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = Array.isArray(params.id) ? params.id[0] : params.id;
  const event = eventId ? eventDetails[parseInt(eventId) as keyof typeof eventDetails] : undefined;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!event) {
    return (
      <main className="min-h-screen bg-flowcore-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-orbitron font-bold text-pure-white mb-4">
              Event Not Found
            </h1>
            <p className="text-light-text/80 font-cs-felice">
              The event you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-flowcore-black relative overflow-hidden">
      <Navigation />
      
      {/* Dynamic Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.02) 0%, transparent 60%)`,
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-orbitron font-black text-pure-white glitch-text mb-6" 
              data-text={event.title}
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {event.title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-silver font-cs-felice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {event.date} • {event.venue}
            </motion.p>
          </motion.div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Event Poster */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative aspect-square bg-flowcore-black/50 rounded-lg overflow-hidden border border-silver/20"
            >
              <Image
                src={event.poster}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flowcore-black/70 via-transparent to-transparent"></div>
              
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-cs-felice uppercase tracking-cs-wider rounded-full backdrop-blur-md ${
                event.status === 'upcoming' 
                  ? 'bg-pure-white/20 text-pure-white border border-pure-white/50' 
                  : 'bg-text-gray/20 text-text-gray border border-text-gray/50'
              }`}>
                {event.status === 'upcoming' ? 'UPCOMING' : 'PAST'}
              </div>
            </motion.div>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-orbitron font-bold text-pure-white mb-4">
                  Event Details
                </h3>
                
                <div className="space-y-3 text-sm font-cs-felice">
                  <div className="flex items-center gap-3">
                    <span className="text-silver text-lg">📅</span>
                    <span className="text-light-text">{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-silver text-lg">📍</span>
                    <span className="text-light-text">{event.venue}, {event.location}</span>
                  </div>
                </div>

                {/* Artists - Made More Prominent */}
                <div className="space-y-4">
                  <h4 className="text-lg font-orbitron font-bold text-pure-white">
                    Artist Lineup
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {event.artists.map((artist) => (
                      <motion.span
                        key={artist}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-3 text-sm font-cs-felice bg-pure-white/10 text-pure-white border border-pure-white/30 rounded-lg hover:bg-pure-white/20 hover:border-pure-white/50 transition-all duration-300 text-center backdrop-blur-sm"
                      >
                        {artist}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Ticket Sources */}
                {event.ticketSources && (
                  <div className="space-y-3">
                    <p className="text-xs text-silver font-cs-felice uppercase tracking-cs-wider">
                      TICKET INFO:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.ticketSources.map((source, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-cs-felice bg-pure-white/20 text-pure-white border border-pure-white/30 rounded"
                        >
                          {source.name} {source.price}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <motion.div className="pt-4">
                  {event.status === 'upcoming' ? (
                    <motion.a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block neon-button px-6 py-3 text-sm font-cs-felice tracking-cs-wider uppercase w-full text-center"
                    >
                      GET TICKETS
                    </motion.a>
                  ) : (
                    <div className="inline-block px-6 py-3 text-sm font-cs-felice tracking-cs-wider uppercase w-full text-center text-text-gray border border-text-gray/30 rounded">
                      EVENT ENDED
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Event Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-flowcore-black/50 backdrop-blur-md border border-silver/20 rounded-lg p-8 mb-16"
          >
            <h3 className="text-2xl font-orbitron font-bold text-pure-white mb-6">
              About This Event
            </h3>
            <div className="space-y-4 text-light-text/90 font-cs-felice leading-relaxed">
              {event.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Media Gallery - Only show if there are media items */}
          {event.mediaItems && event.mediaItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-4xl font-orbitron font-bold text-pure-white mb-4">
                  Event Gallery
                </h3>
                <p className="text-light-text/80 font-cs-felice">
                  Photos and videos from the event
                </p>
              </div>
              
              <MediaGrid items={event.mediaItems} />
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
} 