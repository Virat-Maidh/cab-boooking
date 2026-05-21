

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Car,
  Crown,
  Bike,
  Check,
  Sparkles,
  Shield,
  ArrowRight,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export default function PricingPage() {
  const [km, setKm] = useState(10);

  const economy = 149 + km * 4;
  const premium = 299 + km * 7;
  const luxury = 599 + km * 12;

  const plans = [
    {
      name: 'Economy',
      price: '149',
      icon: Bike,
      gradient: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/20',
      button: 'from-cyan-500 to-blue-600',
      description: 'Affordable daily rides',
      features: [
        'Affordable pricing',
        'Bike & hatchback rides',
        'Verified drivers',
        'Live tracking',
      ],
    },
    {
      name: 'Premium',
      price: '299',
      icon: Car,
      gradient: 'from-amber-500 to-orange-600',
      border: 'border-amber-500/30',
      button: 'from-amber-500 to-orange-600',
      description: 'Comfortable premium sedans',
      popular: true,
      features: [
        'Premium sedan cars',
        'Priority booking',
        'Realtime tracking',
        'Premium support',
      ],
    },
    {
      name: 'Luxury',
      price: '599',
      icon: Crown,
      gradient: 'from-pink-500 to-rose-600',
      border: 'border-pink-500/20',
      button: 'from-pink-500 to-rose-600',
      description: 'Luxury executive rides',
      features: [
        'BMW / Mercedes',
        'VIP experience',
        'Luxury interiors',
        'Elite support',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden relative">

      {/* GRID */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:40px_40px]" />
      </div>

      {/* GLOW */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/[0.05]">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl">
              <Car size={22} className="text-black" />
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h1 className="text-2xl font-black text-amber-500">
                  CABGO
                </h1>

                <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] px-2 py-1 rounded-full">
                  PREMIUM
                </div>

              </div>

              <p className="text-[11px] text-zinc-500">
                Luxury Ride Experience
              </p>

            </div>

          </Link>

          <div className="hidden md:flex items-center gap-8">

            <Link href="/" className="text-zinc-400 hover:text-white">
              Home
            </Link>

            <Link href="/pricing" className="text-white font-semibold">
              Pricing
            </Link>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6">

            <Sparkles size={16} className="text-amber-400" />

            <span className="text-sm text-zinc-300">
              Flexible Pricing Plans
            </span>

          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none">

            SIMPLE & <br />

            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              PREMIUM
            </span>

          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-8 text-lg">
            Choose the perfect ride plan for daily travel, comfort, or luxury experience.
          </p>

        </motion.div>

      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`relative bg-white/5 backdrop-blur-xl border ${plan.border} rounded-[36px] p-8 overflow-hidden shadow-2xl`}
            >

              {plan.popular && (
                <div className="absolute top-5 right-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-black px-4 py-2 rounded-full animate-pulse">
                  MOST POPULAR
                </div>
              )}

              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-2xl`}
              >
                <plan.icon size={36} className="text-white" />
              </div>

              <div className="mt-8">

                <h2 className="text-4xl font-black">
                  {plan.name}
                </h2>

                <p className="text-zinc-500 mt-3">
                  {plan.description}
                </p>

              </div>

              <div className="mt-8 flex items-end gap-2">

                <h3 className="text-6xl font-black">
                  ₹{plan.price}
                </h3>

                <span className="text-zinc-500 mb-2">
                  /ride
                </span>

              </div>

              <div className="mt-10 space-y-5">

                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">

                    <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <Check size={14} className="text-green-400" />
                    </div>

                    <p className="text-zinc-300">
                      {feature}
                    </p>

                  </div>
                ))}

              </div>

              <button
                className={`mt-10 w-full bg-gradient-to-r ${plan.button} py-5 rounded-2xl font-black text-white flex items-center justify-center gap-2 hover:scale-[1.02] transition`}
              >

                Book {plan.name}

                <ArrowRight size={18} />

              </button>

            </motion.div>
          ))}

        </div>

      </section>

      {/* LIVE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10">

          <div className="flex items-center gap-3 mb-6">

            <Zap className="text-amber-400" />

            <p className="uppercase tracking-[0.2em] text-sm text-amber-300">
              Dynamic Pricing
            </p>

          </div>

          <h2 className="text-5xl font-black">
            Live Price Calculator
          </h2>

          <div className="mt-10">

            <div className="flex justify-between mb-4">

              <span className="text-zinc-400">
                Distance
              </span>

              <span className="text-3xl font-black text-amber-400">
                {km} KM
              </span>

            </div>

            <input
              type="range"
              min="1"
              max="50"
              value={km}
              onChange={(e) => setKm(Number(e.target.value))}
              className="w-full accent-amber-500"
            />

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="rounded-3xl bg-cyan-500/10 border border-cyan-500/20 p-6">
              <h3 className="text-2xl font-black">
                Economy
              </h3>

              <p className="text-5xl font-black mt-5 text-cyan-400">
                ₹{economy}
              </p>
            </div>

            <div className="rounded-3xl bg-amber-500/10 border border-amber-500/20 p-6">
              <h3 className="text-2xl font-black">
                Premium
              </h3>

              <p className="text-5xl font-black mt-5 text-amber-400">
                ₹{premium}
              </p>
            </div>

            <div className="rounded-3xl bg-pink-500/10 border border-pink-500/20 p-6">
              <h3 className="text-2xl font-black">
                Luxury
              </h3>

              <p className="text-5xl font-black mt-5 text-pink-400">
                ₹{luxury}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* LIVE DRIVER MAP */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10"
          >

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">

              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

              <span className="text-cyan-300 text-sm font-semibold">
                LIVE DRIVER STATUS
              </span>

            </div>

            <h2 className="text-5xl font-black leading-tight">

              Drivers Near <br />

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Your Location
              </span>

            </h2>

            <div className="mt-10 space-y-5">

              {[
                '12 Drivers Nearby',
                '2 Luxury Cars Active',
                'Average Pickup: 3 mins',
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-black/20 px-6 py-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                    <h3 className="font-black text-xl">
                      {item}
                    </h3>

                  </div>

                  <span className="text-green-400 text-sm font-bold">
                    LIVE
                  </span>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative min-h-[500px] rounded-[40px] border border-white/10 bg-[#0d0d0f] overflow-hidden"
          >

            {/* GRID */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:35px_35px]" />
            </div>

            {/* ROUTE */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
              fill="none"
            >

              <path
                d="M90 380 Q220 150 410 200"
                stroke="#f59e0b"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="12 12"
              />

            </svg>

            {/* PICKUP */}
            <div className="absolute bottom-24 left-20">

              <div className="w-8 h-8 rounded-full bg-green-400 border-4 border-white animate-pulse" />

              <p className="mt-2 text-sm text-zinc-400">
                Pickup
              </p>

            </div>

            {/* DESTINATION */}
            <div className="absolute top-24 right-24">

              <div className="w-8 h-8 rounded-full bg-amber-400 border-4 border-white animate-pulse" />

              <p className="mt-2 text-sm text-zinc-400">
                Destination
              </p>

            </div>

            {/* CAR */}
            <motion.div
              animate={{
                x: [0, 180],
                y: [0, -120],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
              }}
              className="absolute bottom-28 left-24"
            >

              <div className="bg-cyan-500 p-3 rounded-2xl shadow-2xl">
                <Car className="text-white" size={24} />
              </div>

            </motion.div>

            {/* ETA */}
            <div className="absolute bottom-10 right-10 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl p-6 w-[220px]">

              <p className="text-zinc-500 text-sm">
                Estimated Arrival
              </p>

              <h3 className="text-4xl font-black mt-2">
                3 MIN
              </h3>

              <div className="mt-5 h-2 bg-white/10 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 2 }}
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
                />

              </div>

            </div>

          </motion.div>

        </div>
        

      </section>
      {/* ========================================= */}
{/* FOOTER */}
{/* ========================================= */}

<footer className="relative border-t border-white/[0.06] bg-black/40 backdrop-blur-2xl overflow-hidden">

  {/* GLOW */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

    <div className="grid lg:grid-cols-4 gap-12">

      {/* BRAND */}
      <div>

        <div className="flex items-center gap-3">

          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl">
            <Car size={22} className="text-black" />
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-3xl font-black text-amber-500">
                CABGO
              </h2>

              <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] px-2 py-1 rounded-full">
                PREMIUM
              </div>

            </div>

            <p className="text-zinc-500 text-sm mt-1">
              Luxury Ride Experience
            </p>

          </div>

        </div>

        <p className="text-zinc-400 leading-relaxed mt-6 max-w-sm">
          Premium cab booking platform with realtime tracking,
          luxury rides, verified drivers, and intelligent ride experience.
        </p>

        {/* SOCIALS */}
        <div className="flex items-center gap-4 mt-8">

          {['IG', 'TW', 'FB', 'YT'].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-sm font-bold text-zinc-300 cursor-pointer hover:border-amber-500/30 hover:text-amber-400 transition"
            >
              {item}
            </motion.div>
          ))}

        </div>

      </div>

      {/* COMPANY */}
      <div>

        <h3 className="text-xl font-black mb-6">
          Company
        </h3>

        <div className="space-y-4">

          {[
            'About Us',
            'Careers',
            'Blog',
            'Press',
            'Investors',
          ].map((item, i) => (
            <p
              key={i}
              className="text-zinc-400 hover:text-white transition cursor-pointer"
            >
              {item}
            </p>
          ))}

        </div>

      </div>

      {/* SERVICES */}
      <div>

        <h3 className="text-xl font-black mb-6">
          Services
        </h3>

        <div className="space-y-4">

          {[
            'Economy Rides',
            'Premium Cars',
            'Luxury Fleet',
            'Airport Pickup',
            'Corporate Travel',
          ].map((item, i) => (
            <p
              key={i}
              className="text-zinc-400 hover:text-white transition cursor-pointer"
            >
              {item}
            </p>
          ))}

        </div>

      </div>

      {/* NEWSLETTER */}
      <div>

        <h3 className="text-xl font-black mb-6">
          Stay Updated
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Get latest offers, premium ride updates, and exclusive discounts.
        </p>

        {/* INPUT */}
        <div className="mt-6 space-y-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-white outline-none focus:border-amber-500/40 transition"
          />

          <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black hover:scale-[1.02] transition">
            Subscribe Now
          </button>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">

      <p className="text-zinc-500 text-sm">
        © 2026 CABGO Premium. All rights reserved.
      </p>

      <div className="flex items-center gap-8 text-sm">

        {[
          'Privacy Policy',
          'Terms & Conditions',
          'Support',
          'Security',
        ].map((item, i) => (
          <p
            key={i}
            className="text-zinc-500 hover:text-white transition cursor-pointer"
          >
            {item}
          </p>
        ))}

      </div>

    </div>

  </div>

</footer>

    </main>
  );
}