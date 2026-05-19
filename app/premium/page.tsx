'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Star,
  Crown,
  ShieldCheck,
  Zap,
  Car,
  Clock,
  BadgeCheck,
} from 'lucide-react';

export default function PremiumPage() {
  const plans = [
    {
      title: 'Silver',
      price: '₹499 / month',
      features: [
        'Priority ride booking',
        'Standard support',
        'Basic discounts',
      ],
      icon: Star,
      color: 'from-gray-400 to-gray-600',
    },
    {
      title: 'Gold',
      price: '₹999 / month',
      features: [
        'Faster pickup',
        'Verified premium drivers',
        '10% ride discount',
      ],
      icon: ShieldCheck,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Platinum',
      price: '₹1999 / month',
      features: [
        'Instant booking priority',
        'Luxury cars only',
        '20% ride discount',
        '24/7 VIP support',
      ],
      icon: Crown,
      color: 'from-pink-500 to-cyan-400',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Pickup',
      desc: 'No waiting time, priority allocation',
    },
    {
      icon: Car,
      title: 'Luxury Fleet',
      desc: 'Ride only in premium & luxury cars',
    },
    {
      icon: Clock,
      title: 'Faster Booking',
      desc: 'Skip queue and get rides instantly',
    },
    {
      icon: BadgeCheck,
      title: 'Verified Drivers',
      desc: 'Only top-rated professional drivers',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 lg:px-20 py-16 relative">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-5 py-2 rounded-full text-yellow-300 mb-6">
          <Crown size={18} />
          CABGO Premium
        </div>

        <h1 className="text-5xl font-black">
          Upgrade to <span className="text-yellow-400">Premium</span>
        </h1>

        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          Get faster rides, luxury cars, and VIP treatment with CABGO Premium membership.
        </p>
      </motion.div>

      {/* CURRENT PLAN */}
      <div className="mt-10 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
        <p className="text-zinc-400">Your Current Plan</p>
        <h3 className="text-2xl font-black text-yellow-400 mt-2">
          Free User
        </h3>
        <p className="text-zinc-500 mt-2">
          Upgrade to unlock faster rides & VIP drivers
        </p>
      </div>

      {/* PLANS */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan, i) => {
          const Icon = plan.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-5`}>
                <Icon className="text-black" />
              </div>

              <h2 className="text-3xl font-black">{plan.title}</h2>
              <p className="text-zinc-400 mt-1">{plan.price}</p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <BadgeCheck className="text-green-400" size={18} />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full py-3 rounded-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105 transition-all">
                Choose Plan
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* COMPARISON TABLE */}
      <div className="mt-16 overflow-x-auto">
        <table className="w-full text-left border border-white/10 rounded-2xl overflow-hidden">
          <thead className="bg-white/5 text-zinc-300">
            <tr>
              <th className="p-4">Features</th>
              <th className="p-4">Silver</th>
              <th className="p-4">Gold</th>
              <th className="p-4">Platinum</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-t border-white/10">
              <td className="p-4">Priority Booking</td>
              <td>✓</td>
              <td>✓✓</td>
              <td>✓✓✓</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-4">Luxury Cars</td>
              <td>-</td>
              <td>✓</td>
              <td>✓✓✓</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-4">Discounts</td>
              <td>5%</td>
              <td>10%</td>
              <td>20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BENEFITS */}
      <div className="mt-20">
        <h2 className="text-3xl font-black text-center mb-10">
          Why Go Premium?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;

            return (
              <div key={i} className="p-6 rounded-[25px] bg-white/5 border border-white/10 text-center">
                <Icon className="mx-auto text-yellow-400 mb-4" />
                <h3 className="font-bold text-lg">{b.title}</h3>
                <p className="text-zinc-400 text-sm mt-2">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="mt-20 grid md:grid-cols-3 gap-6">
        {[
          { name: "Aman", text: "Gold plan made my daily rides super fast!" },
          { name: "Riya", text: "Platinum is next level luxury experience." },
          { name: "Karan", text: "Drivers are more professional in premium." },
        ].map((t, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-zinc-300">"{t.text}"</p>
            <h4 className="mt-4 font-bold text-yellow-400">- {t.name}</h4>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-black">
          Ready for VIP Experience?
        </h2>

        <p className="text-zinc-400 mt-3">
          Join thousands of premium riders today.
        </p>

        <Link href="/rides">
          <button className="mt-6 px-10 py-4 rounded-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:scale-105 transition-all">
            Start Riding Premium
          </button>
        </Link>
      </div>

      {/* STICKY CTA */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}