

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Car,
  Star,
  Shield,
  Bike,
  BadgeCheck,
  Menu,
  X,
  MapPin,
  Quote,
  Zap,
  Crown,
  PlayCircle,
  UserCircle2,
  Heart,
  ChevronDown,
  Navigation,
  Calendar,
  PhoneCall,
  Clock3,
  Sparkles,
  TrendingUp,
  ArrowRight,
  MapPinned,
  Headphones,
  Wifi,
  Music4,
  Coffee,
} from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);

  const [bookingStatus, setBookingStatus] = useState<'idle' | 'searching' | 'found' | 'arriving'>('idle');

  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedRide, setSelectedRide] = useState('Premium');

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI');

  const [loadingScreen, setLoadingScreen] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [eta, setEta] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'FAST & SAFE',
      subtitle: 'Luxury Ride Experience',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'PREMIUM RIDES',
      subtitle: 'Elite Chauffeur Service',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'LIVE TRACKING',
      subtitle: 'Realtime Smart Navigation',
      image:
        'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingScreen(false);
    }, 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => (prev <= 1 ? 4 : prev - 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const startBookingFlow = () => {
    setBookingStatus('searching');
    setTimeout(() => {
      setBookingStatus('found');
      setTimeout(() => {
        setBookingStatus('arriving');
      }, 4000);
    }, 3000);
  };

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const drivers = [
    {
      name: 'Rahul Kumar',
      city: 'Delhi',
      rating: 4.9,
      price: 299,
      avatar: 'RK',
      gradient: 'from-amber-500 to-orange-600',
      car: 'Honda City',
      exp: '5 yrs',
    },
    {
      name: 'Amit Singh',
      city: 'Mumbai',
      rating: 4.8,
      price: 149,
      avatar: 'AS',
      gradient: 'from-cyan-500 to-blue-600',
      car: 'Toyota Camry',
      exp: '4 yrs',
    },
    {
      name: 'Vikram Rao',
      city: 'Bangalore',
      rating: 5,
      price: 599,
      avatar: 'VR',
      gradient: 'from-pink-500 to-rose-600',
      car: 'Mercedes S-Class',
      exp: '7 yrs',
    },
  ];

  const testimonials = [
    {
      name: 'Arjun Mehta',
      city: 'Mumbai',
      text: 'Best luxury ride experience ever.',
    },
    {
      name: 'Priya Sharma',
      city: 'Delhi',
      text: 'Live tracking and premium cars are amazing.',
    },
    {
      name: 'Rohit Verma',
      city: 'Bangalore',
      text: 'Feels like a premium international ride app.',
    },
  ];

  const ridePlans = [
    { name: 'Economy', price: '149', icon: Bike },
    { name: 'Premium', price: '299', icon: Car },
    { name: 'Luxury', price: '599', icon: Crown },
  ];

  const faqs = [
    {
      q: 'How do I cancel my booking?',
      a: 'You can cancel your ride anytime directly from the booking dashboard.',
    },
    {
      q: 'Are CABGO drivers verified?',
      a: 'Yes. Every chauffeur goes through verification and security checks.',
    },
    {
      q: 'Can I pre-book a luxury ride?',
      a: 'Yes, you can schedule rides up to 7 days in advance.',
    },
  ];

  const fleetCards = [
    {
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
      title: 'Economy',
      desc: 'Affordable daily rides',
      icon: <Bike className="text-cyan-400" />,
      btnClass: 'bg-cyan-500 text-black font-black py-3 rounded-xl',
      borderClass: 'border border-white/10',
      ride: 'Economy',
    },
    {
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop',
      title: 'Premium',
      desc: 'Executive sedan experience',
      icon: <Car className="text-amber-400" />,
      btnClass: 'bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black py-3 rounded-xl',
      borderClass: 'border-2 border-amber-500',
      ride: 'Premium',
    },
    {
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
      title: 'Luxury',
      desc: 'VIP chauffeur rides',
      icon: <Crown className="text-pink-400" />,
      btnClass: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black py-3 rounded-xl',
      borderClass: 'border border-white/10',
      ride: 'Luxury',
    },
  ];

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-x-hidden font-sans">

      {/* LOADER */}
      <AnimatePresence>
        {loadingScreen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="w-24 h-24 rounded-full border-4 border-zinc-800 border-t-amber-500"
            />
            <h1 className="text-5xl font-black text-amber-500 mt-8">CABGO</h1>
            <p className="text-zinc-500 mt-2">Premium Ride Experience</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STATUS */}
      <AnimatePresence>
        {bookingStatus !== 'idle' && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[999]"
          >
            <div className="bg-[#111113]/90 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="font-bold text-sm">
                    {bookingStatus === 'searching' && 'Searching nearby drivers...'}
                    {bookingStatus === 'found' && 'Driver Found 🚗'}
                    {bookingStatus === 'arriving' && `Driver arriving in ${eta} mins`}
                  </p>
                  <p className="text-xs text-zinc-500">Realtime booking updates enabled</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl">
              <Car className="text-black" size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-amber-500">CABGO</h1>
                <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] px-2 py-1 rounded-full font-bold">
                  PREMIUM
                </div>
              </div>
              <p className="text-[11px] text-zinc-500">Luxury Ride Platform</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white font-semibold">Home</Link>
            <Link href="/rides" className="text-zinc-400 hover:text-white">Rides</Link>
            <Link href="/drivers" className="text-zinc-400 hover:text-white">Drivers</Link>
            <Link href="/pricing" className="text-zinc-400 hover:text-white">Pricing</Link>
            <Link href="/ride" className="text-zinc-400 hover:text-white">Track</Link>
            <Link href="/reviews" className="text-zinc-400 hover:text-white">
              Reviews
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* RIGHT SIDE NAVBAR ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">

              {/* LIVE STATUS PILL */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-xl"
              >
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
                </div>

                <div>
                  <p className="text-[10px] text-zinc-500 leading-none">
                    LIVE STATUS
                  </p>
                  <p className="text-sm font-bold text-white leading-none mt-1">
                    142 Drivers Online
                  </p>
                </div>
              </motion.div>

              {/* PREMIUM MEMBERSHIP BUTTON */}


            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-white/5 border border-white/10 p-3 rounded-xl"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 relative z-10">
        <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentSlide].image}
                alt="hero"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-sm mb-6 flex items-center gap-2">
              <Sparkles size={14} className="text-amber-400" />
              Premium Ride Experience
            </div>

            <motion.h1
              key={heroSlides[currentSlide].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black leading-none"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <p className="text-zinc-300 mt-6 max-w-2xl text-lg">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/book-ride"
                className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 rounded-xl text-black font-bold hover:scale-105 transition inline-block"
              >
                Book Ride
              </Link>
              <button
                onClick={() => setFleetOpen(true)}
                className="border border-white/20 bg-white/5 px-8 py-4 rounded-xl hover:bg-white/10 transition"
              >
                Explore Fleet
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl">
              {[
                { icon: TrendingUp, title: '10K+', subtitle: 'Happy Riders' },
                { icon: Clock3, title: '24/7', subtitle: 'Live Support' },
                { icon: Shield, title: '100%', subtitle: 'Verified' },
                { icon: Crown, title: '500+', subtitle: 'Luxury Cars' },
              ].map((item, i) => (
                <div key={i} className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                  <item.icon className="text-amber-400 mb-3" size={20} />
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="text-zinc-400 text-xs mt-1">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Premium Experience</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Why Choose CABGO</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Wifi, title: 'Live Tracking', text: 'Realtime GPS tracking' },
            { icon: Music4, title: 'Luxury Comfort', text: 'Premium interiors & music' },
            { icon: Coffee, title: 'Executive Rides', text: 'Business class experience' },
            { icon: Headphones, title: '24/7 Support', text: 'Instant customer support' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-[#111113] border border-white/10 rounded-3xl p-7">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <item.icon className="text-black" />
              </div>
              <h3 className="text-xl font-black mt-6">{item.title}</h3>
              <p className="text-zinc-400 text-sm mt-3">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DRIVERS */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="mb-10">
          <p className="text-amber-500 uppercase tracking-wider text-xs font-bold">Professional Chauffeurs</p>
          <h2 className="text-4xl font-black mt-2">Top Rated Drivers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {drivers.map((d, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-[#111113] border border-white/5 rounded-3xl p-6 relative">
              <button onClick={() => toggleFavorite(d.name)} className="absolute top-4 right-4">
                <Heart
                  size={18}
                  className={favorites.includes(d.name) ? 'text-pink-500 fill-pink-500' : 'text-zinc-500'}
                />
              </button>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${d.gradient} flex items-center justify-center text-xl font-black`}>
                {d.avatar}
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-lg">{d.name}</h3>
                  <BadgeCheck size={16} className="text-green-400" />
                </div>
                <p className="text-zinc-500 text-sm mt-1">{d.city} • {d.exp}</p>
                <p className="text-zinc-400 text-sm mt-2">{d.car}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black">₹{d.price}</p>
                  <p className="text-xs text-zinc-500">Starting Price</p>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-2 rounded-xl">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-sm">{d.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <p className="text-amber-500 uppercase tracking-wider text-xs font-bold">Reviews</p>
          <h2 className="text-4xl font-black mt-2">What Riders Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-[#111113] border border-white/10 rounded-3xl p-8">
              <Quote className="text-amber-400 mb-5" />
              <p className="text-zinc-300 text-sm leading-relaxed">{t.text}</p>
              <div className="mt-6">
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-zinc-500 text-xs mt-1">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-10">
          <p className="text-amber-500 uppercase tracking-wider text-xs font-bold">Help Center</p>
          <h2 className="text-4xl font-black mt-2">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#111113] border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`transition ${openFaq === idx ? 'rotate-180 text-amber-500' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-5 pb-5 text-zinc-400 text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET MODAL */}
      <AnimatePresence>
        {fleetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl bg-[#111113] border border-white/10 rounded-[35px] p-8 overflow-hidden max-h-[90vh]"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-amber-500 uppercase tracking-widest text-xs font-bold">CABGO Fleet</p>
                  <h2 className="text-4xl font-black mt-2">Explore Luxury Fleet</h2>
                </div>
                <button
                  onClick={() => setFleetOpen(false)}
                  className="bg-white/5 border border-white/10 p-3 rounded-full"
                >
                  <X />
                </button>
              </div>

              {/* ✅ SCROLLING CAROUSEL */}
              {/* ✅ SCROLLING CAROUSEL */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  style={{ width: 'max-content' }}
                  animate={{ x: ['0%', '-50%', '0%'] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 14,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  {[...fleetCards, ...fleetCards].map((card, i) => (
                    <div
                      key={i}
                      className={`bg-[#18181b] ${card.borderClass} rounded-3xl overflow-hidden w-[340px] flex-shrink-0`}
                    >
                      <img src={card.image} className="h-52 w-full object-cover" />
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-black">{card.title}</h3>
                          {card.icon}
                        </div>
                        <p className="text-zinc-400 text-sm mt-2">{card.desc}</p>
                        <button
                          onClick={() => {
                            setSelectedRide(card.ride);
                            setFleetOpen(false);
                            setBookingOpen(true);
                          }}
                          className={`w-full mt-6 ${card.btnClass}`}
                        >
                          Book {card.title}
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0b0b0d] mt-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl">
                <Car className="text-black" size={18} />
              </div>
              <h2 className="text-2xl font-black text-amber-500">CABGO</h2>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed mt-4">
              Premium luxury cab booking platform with realtime ride tracking.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Quick Links</h3>
            <div className="space-y-3 text-zinc-500 text-sm">
              <Link href="/">Home</Link><br />
              <Link href="/rides">Rides</Link><br />
              <Link href="/drivers">Drivers</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Services</h3>
            <div className="space-y-3 text-zinc-500 text-sm">
              <p>Economy Ride</p>
              <p>Premium Ride</p>
              <p>Luxury Ride</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Emergency</h3>
            <div className="bg-[#111113] border border-white/5 p-4 rounded-xl">
              <p className="text-zinc-500 text-xs">24/7 Support Hotline</p>
              <a href="tel:1800000000" className="text-amber-500 font-black mt-2 inline-flex items-center gap-2">
                <PhoneCall size={14} />
                +1800-CABGO
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} CABGO. All rights reserved.
        </div>
      </footer>

    </main>
  );
}