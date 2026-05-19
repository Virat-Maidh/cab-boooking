'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 lg:px-20 py-20">

      {/* HERO */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"
      >
        About CABGO
      </motion.h1>

      <p className="mt-8 text-zinc-300 text-xl leading-[40px] max-w-4xl">
        CABGO is a premium luxury cab booking platform built for speed, safety,
        and seamless ride experience with real-time tracking, verified drivers,
        and next-gen UI experience.
      </p>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-2xl"
        >
          <h2 className="text-4xl font-black text-cyan-400">
            <CountUp end={10000} />+
          </h2>
          <p className="text-zinc-400 mt-3">Happy Riders</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-2xl"
        >
          <h2 className="text-4xl font-black text-pink-400">
            <CountUp end={500} />+
          </h2>
          <p className="text-zinc-400 mt-3">Premium Cars</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-2xl"
        >
          <h2 className="text-4xl font-black text-yellow-400">
            <CountUp end={4.9} decimals={1} />
          </h2>
          <p className="text-zinc-400 mt-3">User Rating</p>
        </motion.div>

      </div>

      {/* MISSION + VISION */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">

        <motion.div
          whileHover={{ y: -5 }}
          className="p-10 rounded-[30px] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-2xl"
        >
          <h2 className="text-3xl font-black mb-4">Our Mission</h2>
          <p className="text-zinc-300 leading-8">
            To make urban travel smart, affordable and luxury-driven using
            technology that connects riders and drivers in real-time.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-10 rounded-[30px] bg-gradient-to-br from-pink-500/10 to-yellow-500/10 border border-white/10 backdrop-blur-2xl"
        >
          <h2 className="text-3xl font-black mb-4">Our Vision</h2>
          <p className="text-zinc-300 leading-8">
            To become India’s most trusted premium mobility platform with AI
            powered routing, safety, and ultra-fast booking experience.
          </p>
        </motion.div>

      </div>

      {/* FEATURES */}
      <div className="mt-20">
        <h2 className="text-4xl font-black mb-10">
          Why Choose CABGO
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            'Instant Ride Booking',
            'Verified Drivers',
            'Live GPS Tracking',
            'Secure Payments',
            'Luxury Cars',
            '24/7 Support',
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-[25px] bg-white/10 border border-white/10 backdrop-blur-2xl text-center font-semibold text-zinc-200"
            >
              {item}
            </motion.div>
          ))}

        </div>
      </div>

    </main>
  );
}