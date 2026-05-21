// app/book-ride/page.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Car,
  MapPin,
  Navigation,
  Calendar,
  CreditCard,
  Phone,
  User,
  ArrowRight,
  Crown,
  Bike,
  CheckCircle2,
  X,
} from 'lucide-react';

export default function BookRidePage() {
  const [rideType, setRideType] = useState('Premium');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = () => {
    setBookingSuccess(true);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white px-6 py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
            <Car size={15} className="text-amber-400" />
            <span className="text-sm text-amber-300 font-semibold">
              CABGO Premium Booking
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none">
            Book Your
            <span className="block text-amber-500">
              Luxury Ride
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Experience premium chauffeur rides with realtime tracking,
            luxury interiors and verified drivers.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              'Live GPS Tracking',
              'Verified Drivers',
              'Luxury Cars',
              '24/7 Support',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#111113] border border-white/10 rounded-2xl p-4"
              >
                <p className="font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111113] border border-white/10 rounded-[35px] p-8"
        >
          <div className="mb-8">
            <p className="text-amber-500 uppercase text-xs tracking-widest font-bold">
              Ride Booking
            </p>

            <h2 className="text-4xl font-black mt-2">
              Enter Ride Details
            </h2>
          </div>

          <div className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Full Name
              </label>

              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-2xl px-4 py-4">
                <User className="text-amber-400" size={18} />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Phone Number
              </label>

              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-2xl px-4 py-4">
                <Phone className="text-amber-400" size={18} />

                <input
                  type="text"
                  placeholder="+91 9876543210"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

            {/* PICKUP */}
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Pickup Location
              </label>

              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-2xl px-4 py-4">
                <MapPin className="text-green-400" size={18} />

                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

            {/* DESTINATION */}
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Destination
              </label>

              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-2xl px-4 py-4">
                <Navigation className="text-cyan-400" size={18} />

                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

            {/* DATE */}
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Ride Date
              </label>

              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-2xl px-4 py-4">
                <Calendar className="text-pink-400" size={18} />

                <input
                  type="date"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

            {/* RIDE TYPE */}
            <div>
              <label className="text-sm text-zinc-400 mb-3 block">
                Select Ride
              </label>

              <div className="grid grid-cols-3 gap-3">

                <button
                  onClick={() => setRideType('Economy')}
                  className={`rounded-2xl p-4 border transition ${
                    rideType === 'Economy'
                      ? 'bg-cyan-500 text-black border-cyan-500'
                      : 'bg-black/30 border-white/10'
                  }`}
                >
                  <Bike className="mx-auto mb-2" />

                  <p className="font-bold text-sm">Economy</p>
                </button>

                <button
                  onClick={() => setRideType('Premium')}
                  className={`rounded-2xl p-4 border transition ${
                    rideType === 'Premium'
                      ? 'bg-amber-500 text-black border-amber-500'
                      : 'bg-black/30 border-white/10'
                  }`}
                >
                  <Car className="mx-auto mb-2" />

                  <p className="font-bold text-sm">Premium</p>
                </button>

                <button
                  onClick={() => setRideType('Luxury')}
                  className={`rounded-2xl p-4 border transition ${
                    rideType === 'Luxury'
                      ? 'bg-pink-500 text-white border-pink-500'
                      : 'bg-black/30 border-white/10'
                  }`}
                >
                  <Crown className="mx-auto mb-2" />

                  <p className="font-bold text-sm">Luxury</p>
                </button>

              </div>
            </div>

            {/* PAYMENT */}
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Payment Method
              </label>

              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-2xl px-4 py-4">
                <CreditCard className="text-violet-400" size={18} />

                <select className="bg-transparent outline-none w-full">
                  <option className="bg-black">UPI</option>
                  <option className="bg-black">Cash</option>
                  <option className="bg-black">Card</option>
                </select>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleBooking}
              className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition"
            >
              Confirm Booking
              <ArrowRight size={20} />
            </button>

          </div>
        </motion.div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {bookingSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-5"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="relative w-full max-w-md bg-[#111113] border border-white/10 rounded-[35px] p-8 text-center overflow-hidden"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setBookingSuccess(false)}
                className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 transition p-2 rounded-full"
              >
                <X size={18} />
              </button>

              {/* SUCCESS ICON */}
              <div className="w-24 h-24 mx-auto rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle2
                  size={55}
                  className="text-green-400"
                />
              </div>

              <h2 className="text-3xl font-black mb-3">
                Booking Confirmed 🎉
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Your {rideType} ride has been booked successfully.
                Driver details will be shared shortly.
              </p>

              {/* INFO CARDS */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                  <p className="text-zinc-500 text-xs mb-1">
                    Estimated Arrival
                  </p>

                  <h3 className="font-black text-lg">
                    5 mins
                  </h3>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                  <p className="text-zinc-500 text-xs mb-1">
                    Ride Type
                  </p>

                  <h3 className="font-black text-lg">
                    {rideType}
                  </h3>
                </div>
              </div>

              {/* DONE BUTTON */}
              <button
                onClick={() => setBookingSuccess(false)}
                className="w-full mt-8 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-black py-4 rounded-2xl hover:scale-[1.02] transition"
              >
                Awesome
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}