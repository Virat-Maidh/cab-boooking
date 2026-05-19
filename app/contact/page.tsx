'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import toast, { Toaster } from 'react-hot-toast';

import {
  Mail,
  Phone,
  User,
  Send,
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    if (!form.name || !form.email || !form.message) {
      return toast.error('Fill all fields');
    }

    setLoading(true);

    // fake API delay
    setTimeout(() => {
      toast.success('Message Sent Successfully 🚀');
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 lg:px-20 py-20">
      <Toaster position="top-right" />

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-black mb-14 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl"
        >

          <div className="space-y-6">

            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-4 text-pink-400" />
              <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 p-4 outline-none focus:border-pink-400 transition"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-cyan-400" />
              <input
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 p-4 outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              rows={6}
              placeholder="Your Message..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400 transition"
            />

            {/* BUTTON */}
            <button
              disabled={loading}
              onClick={submitHandler}
              className={`flex items-center justify-center gap-2 w-full px-8 py-4 rounded-2xl font-bold transition ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-[1.02]'
              }`}
            >
              <Send size={18} />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.div>

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-2xl"
          >
            <Phone className="text-green-400 mb-3" />
            <h2 className="text-xl font-bold">Call Us</h2>
            <p className="text-zinc-400">+91 9876543210</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-2xl"
          >
            <Mail className="text-cyan-400 mb-3" />
            <h2 className="text-xl font-bold">Email</h2>
            <p className="text-zinc-400">support@cabgo.com</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-2xl"
          >
            <h2 className="text-xl font-bold">24/7 Support</h2>
            <p className="text-zinc-400 mt-2">
              We are always available for your ride support and booking help.
            </p>
          </motion.div>

        </div>
      </div>
    </main>
  );
}