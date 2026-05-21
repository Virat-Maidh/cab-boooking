'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import {
  Car,
  Wifi,
  BatteryFull,
  CheckCircle2,
  Smartphone,
  ArrowLeft,
} from 'lucide-react';

// STATES

const rideStates = [
  'Searching Nearby Drivers...',
  'Driver Accepted Your Ride',
  'Driver Arriving at Pickup',
  'Ride Started',
  'Ride Completed',
];

export default function PremiumCabExperience() {

  const router = useRouter();

  const [currentState, setCurrentState] =
    useState(0);

  const [time, setTime] = useState('');

  const [progress, setProgress] =
    useState(0);

  const [eta, setEta] = useState(180);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentState((p) =>
        p === rideStates.length - 1
          ? 0
          : p + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((p) =>
        p >= 100 ? 0 : p + 1
      );

    }, 200);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    const interval = setInterval(() => {

      setEta((t) =>
        t > 0 ? t - 1 : 180
      );

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    const update = () => {

      const d = new Date();

      setTime(
        `${d.getHours()}:${String(
          d.getMinutes()
        ).padStart(2, '0')}`
      );

    };

    update();

    const i = setInterval(update, 1000);

    return () => clearInterval(i);

  }, []);

  useEffect(() => {

    const msg =
      new SpeechSynthesisUtterance(
        rideStates[currentState]
      );

    window.speechSynthesis.speak(msg);

  }, [currentState]);

  return (

    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >

        <source src="https://videos.pexels.com/video-files/855289/855289-hd_1920_1080_25fps.mp4" />

      </video>

      <div className="absolute inset-0 bg-black/70" />

      {/* MAIN WRAPPER */}

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 lg:px-16 py-10">

        {/* LEFT SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >

          {/* BACK BUTTON */}

          <button
            onClick={() =>
              router.push('/')
            }
            className="mb-8 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-3 rounded-2xl transition"
          >

            <ArrowLeft size={18} />

            Back To Home

          </button>

          <div className="flex justify-center lg:justify-start">

            <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 rounded-full text-cyan-300 text-xs sm:text-sm w-fit">

              <Smartphone size={14} />

              LIVE CAB SYSTEM

            </div>

          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mt-6 leading-tight">

            DELHI TO

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">

              YAMUNA NAGAR

            </span>

          </h1>

          <p className="text-zinc-300 mt-4 text-sm sm:text-base">

            Fully automated ride lifecycle
            system with live tracking &
            AI driver updates.

          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center lg:justify-start">

            <div className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold">

              ₹2499 FIXED

            </div>

            <div className="bg-white/10 px-4 py-2 rounded-xl">

              ETA {Math.floor(eta / 60)}:
              {String(
                eta % 60
              ).padStart(2, '0')}

            </div>

          </div>

          <div className="mt-6 text-green-400 font-bold text-sm sm:text-base">

            {rideStates[currentState]}

          </div>

        </motion.div>

        {/* RIGHT PHONE UI */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="w-full flex justify-center lg:w-1/2"
        >

          <div className="w-[320px] sm:w-[360px] lg:w-[380px] h-[650px] sm:h-[720px] bg-[#0d0d0d] border border-white/10 rounded-[35px] overflow-hidden shadow-2xl">

            {/* TOP BAR */}

            <div className="flex justify-between px-5 py-3 text-white text-xs sm:text-sm">

              <span>{time}</span>

              <div className="flex gap-2">

                <Wifi size={14} />

                <BatteryFull size={16} />

              </div>

            </div>

            {/* MAP */}

            <div className="relative h-[280px] sm:h-[320px]">

              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200"
                className="w-full h-full object-cover opacity-70"
              />

              {/* ROUTE */}

              <svg className="absolute inset-0 w-full h-full">

                <motion.path
                  d="M40 80 C120 120 220 200 320 250"
                  stroke="#facc15"
                  strokeWidth="3"
                  fill="none"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

              </svg>

              {/* CAR */}

              <motion.div
                className="absolute"
                style={{
                  left: `${progress}%`,
                  top: `${progress * 0.6}%`,
                }}
              >

                <div className="bg-yellow-400 p-2 rounded-full shadow-lg">

                  <Car
                    size={16}
                    className="text-black"
                  />

                </div>

              </motion.div>

              <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-lg text-[10px] sm:text-xs text-white">

                🚗 Live Tracking

                <br />

                📍{' '}
                {100 -
                  Math.floor(
                    progress
                  )}
                % remaining

              </div>

              <div className="absolute top-4 left-4 bg-pink-500 px-2 py-1 text-[10px] sm:text-xs rounded-full">

                Delhi

              </div>

              <div className="absolute bottom-4 right-4 bg-cyan-500 px-2 py-1 text-[10px] sm:text-xs font-bold rounded-full">

                Yamuna Nagar

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-4 sm:p-5">

              <h2 className="text-lg sm:text-xl font-bold">

                Premium Sedan

              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm">

                AI-assisted smooth ride

              </p>

              {/* DRIVER */}

              <div className="flex items-center gap-3 mt-4">

                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full"
                />

                <div>

                  <p className="font-bold text-sm sm:text-base">

                    Rajveer Singh

                  </p>

                  <p className="text-green-400 text-xs sm:text-sm flex items-center gap-1">

                    <CheckCircle2 size={12} />

                    Verified Driver

                  </p>

                </div>

              </div>

              {/* STATUS */}

              <div className="mt-5 bg-white/5 border border-white/10 rounded-2xl p-3">

                <p className="text-green-400 font-bold text-xs sm:text-sm">

                  System Managed Ride
                  Active

                </p>

                <p className="text-zinc-400 text-[10px] sm:text-xs mt-1">

                  No manual interaction
                  required

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </main>

  );

}