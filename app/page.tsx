
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Car,
  Sparkles,
  Star,
  Phone,
  Shield,
  Bike,
  Clock3,
  Navigation,
  BadgeCheck,
  Menu,
  X,
  ArrowUpRight,
  Globe,
  Send,
  Link2,
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      title: 'FAST &',
      subtitle: 'SAFE',
      // Porsche image with dark tone for matching the aesthetic
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'LUXURY',
      subtitle: 'RIDES',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const stats = [
    { value: '10K+', label: 'Happy Riders', icon: Star, color: 'text-pink-500' },
    { value: '500+', label: 'Luxury Cars', icon: Car, color: 'text-pink-500' },
    { value: '24/7', label: 'Support', icon: Phone, color: 'text-pink-500' },
    { value: '4.9', label: 'Rating', icon: Shield, color: 'text-pink-500' },
  ];

  const features = [
    { title: 'Instant Booking', icon: Clock3, desc: 'Premium travel experience with safety and speed.' },
    { title: 'Live Tracking', icon: Navigation, desc: 'Realtime GPS integration to trace your executive cab.' },
    { title: 'Verified Drivers', icon: BadgeCheck, desc: 'Top-tier certified professional chauffeurs at your service.' },
    { title: 'Bike & Cab', icon: Bike, desc: 'Flexible options tailored from swift bikes to luxury sedans.' },
  ];

  // Animation variants for smooth orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#070708] text-white relative font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black"
    >
      {/* REAL DESIGN GRID PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-amber-500 p-2 rounded-xl shadow-md transition-transform group-hover:rotate-6">
              <Car size={20} className="text-black stroke-[2.5]" />
            </div>
            <span className="text-xl font-black tracking-wider text-amber-500">
              CABGO
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {['Home', 'Rides', 'Drivers', 'About', 'Contact','Demo'].map((link, i) => (
              <Link
                key={i}
                href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="text-zinc-400 hover:text-white transition-colors duration-200 relative py-1 group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link href="/premium">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-amber-500 shadow-md tracking-wide"
              >
                Premium 
              </motion.button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden px-6 bg-black/95 border-b border-white/5"
            >
              <div className="flex flex-col gap-4 text-zinc-300 py-4 font-medium text-sm">
                {['Home', 'Rides', 'Drivers', 'About', 'Contact'].map((name, i) => (
                  <Link
                    key={i}
                    href={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white transition py-1"
                  >
                    {name}
                  </Link>
                ))}
                <Link href="/premium-rides" onClick={() => setMenuOpen(false)}>
                  <div className="mt-2 text-center py-3 rounded-xl bg-amber-500 text-black font-bold text-xs">
                    Premium Ride
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="relative h-[520px] md:h-[600px] rounded-[32px] overflow-hidden border border-white/[0.08] shadow-2xl bg-zinc-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image}
                alt="Cabgo Premium Car"
                fill
                priority
                className="object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />

              {/* CONTENT CONTAINER */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-pink-500/10 backdrop-blur-md border border-pink-500/20 px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-pink-400"
                >
                  <Sparkles size={13} className="animate-pulse" />
                  Premium Ride Experience
                </motion.div>

                <motion.h1
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]"
                >
                  {slides[currentSlide].title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-zinc-300/90 mt-5 text-xs sm:text-sm md:text-base max-w-xl font-light"
                >
                  Luxury cab booking experience with modern UI and realtime rides.
                </motion.p>

                {/* CALL TO ACTIONS WITH GLOW EFFECTS */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-row gap-4 mt-8"
                >
                  <Link href="/rides">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(255, 70, 131, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#ff4683] text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
                    >
                      Book Ride
                    </motion.button>
                  </Link>

                  <Link href="/premium-rides">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(249, 115, 22, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-500 text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
                    >
                      Premium Rides
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* STATS SECTION WITH SPRING SCROLL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
        >
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.1)' }}
                className="bg-[#121214] border border-white/[0.03] p-5 sm:p-6 rounded-2xl flex flex-col justify-between transition-colors shadow-lg"
              >
                <Icon size={18} className={`${item.color} mb-4 stroke-[2.5]`} />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{item.value}</h2>
                  <p className="text-zinc-500 text-[11px] sm:text-xs mt-1 font-medium tracking-wide">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, bg: '#16161a', border: '1px solid rgba(255,255,255,0.08)' }}
                className="bg-[#121214] border border-white/[0.03] p-6 rounded-2xl transition-all shadow-md"
              >
                <Icon size={20} className="text-cyan-400 mb-4 stroke-" />
                <h3 className="font-bold text-base sm:text-lg tracking-wide text-zinc-100">{f.title}</h3>
                <p className="text-zinc-400 text-xs mt-2.5 leading-relaxed font-light">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-pink-500/10 via-transparent to-cyan-500/10 border border-white/[0.05] py-14 px-8 rounded-[32px] text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Ready To Ride?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-sm mx-auto font-light">
            Book your luxury ride instantly.
          </p>
        </motion.div>
      </section>

      {/* PREMIUM FOOTER WITH HOVER COLOR GLOWS */}
      <footer className="border-t border-white/[0.06] bg-[#09090b]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-wider text-amber-500">
              CABGO
            </h2>
            <p className="text-zinc-400 text-xs leading-relaxed font-light max-w-xs">
              Premium ride booking experience with luxury, speed & safety.
            </p>
            {/* Added exact interactive states as requested */}
            <div className="flex gap-4 pt-2 text-zinc-500">
              <Globe size={17} className="hover:text-pink-400 transition-colors duration-200 cursor-pointer" />
              <Send size={17} className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer" />
              <Link2 size={17} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider mb-4 text-zinc-200">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-400 font-light">
              <Link href="/rides" className="hover:text-white transition-colors">Rides</Link>
              <Link href="/drivers" className="hover:text-white transition-colors">Drivers</Link>
              <Link href="/premium-rides" className="hover:text-white transition-colors">Premium</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider mb-4 text-zinc-200">Support</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-400 font-light">
              <span className="hover:text-white transition-colors cursor-pointer">Help Center</span>
              <span className="hover:text-white transition-colors cursor-pointer">Safety</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider mb-4 text-zinc-200">Stay Updated</h4>
            <div className="flex items-center bg-white/[0.03] border border-white/[0.08] focus-within:border-amber-500/40 rounded-xl overflow-hidden p-1 transition-all">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent px-3 py-2 w-full outline-none text-xs text-white placeholder-zinc-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-amber-500 text-black p-2.5 rounded-lg transition-colors flex items-center justify-center shrink-0"
              >
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </motion.button>
            </div>
            <p className="text-zinc-500 text-[11px] mt-2.5 font-light">
              Get offers & ride updates.
            </p>
          </div>
        </div>

        <div className="border-t border-white/[0.05] text-center py-5 text-zinc-600 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} CABGO. All rights reserved.
        </div>
      </footer>
    </motion.main>
  );
}