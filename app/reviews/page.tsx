// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { Star, MapPin, CarFront, PlayCircle, Clock, X, Shield } from 'lucide-react';
// import { useState } from 'react';

// const rideReviews = [
//   {
//     name: 'Priya Verma',
//     city: 'Mumbai',
//     ride: 'Luxury Cab',
//     rating: 5,
//     gender: 'Female',
//     duration: '5:12',
//     thumbGrad: 'from-[#1a0a05] via-[#3a1a08] to-[#5a2a10]',
//     text: 'Driver reached 3 minutes early. Door-to-door drop, no detours. Felt completely safe the whole ride — even shared location with family.',
//     driver: { name: 'Ramesh K.', initials: 'RK', trips: 1840, since: '2021' },
//     stats: [
//       { val: '3 min', label: 'Early pickup' },
//       { val: '100%', label: 'On-route' },
//       { val: '5★', label: 'Behavior' },
//     ],
//     timeline: ['Booked', 'Driver arrived', 'Picked up', 'Dropped safely'],
//     tags: ['Luxury Cab', 'Night Ride'],
//     desc: 'Priya shares how her 11 PM ride from Andheri to Powai went — early pickup, respectful driver, no unnecessary conversation, and safe drop at her apartment gate.',
//     videoClip: null, // Replace with actual video URL e.g. '/videos/priya-review.mp4'
//   },
//   {
//     name: 'Anjali Mehta',
//     city: 'Delhi',
//     ride: 'Premium Cab',
//     rating: 5,
//     gender: 'Female',
//     duration: '4:55',
//     thumbGrad: 'from-[#040a14] via-[#082038] to-[#0d3060]',
//     text: 'Called me before arriving, confirmed the pickup point. Car was spotless. Dropped me to the exact building gate — not just the main road.',
//     driver: { name: 'Sunil T.', initials: 'ST', trips: 2310, since: '2020' },
//     stats: [
//       { val: 'On time', label: 'Arrival' },
//       { val: 'Gate drop', label: 'Precision' },
//       { val: 'Verified', label: 'Driver ID' },
//     ],
//     timeline: ['Booked', 'Call from driver', 'Picked up', 'Exact drop'],
//     tags: ['Premium', 'Solo Travel'],
//     desc: 'Anjali recounts her late evening ride in South Delhi — how the driver called ahead, confirmed her location, and dropped her at the exact building entrance.',
//     videoClip: null,
//   },
//   {
//     name: 'Meera Nair',
//     city: 'Bangalore',
//     ride: 'Economy Cab',
//     rating: 4,
//     gender: 'Female',
//     duration: '5:03',
//     thumbGrad: 'from-[#050e05] via-[#0c2010] to-[#113018]',
//     text: 'Affordable ride, quick booking. Driver kept music low and never asked personal questions. Exactly what you want on a long daily commute.',
//     driver: { name: 'Vikram S.', initials: 'VS', trips: 974, since: '2022' },
//     stats: [
//       { val: '₹180', label: 'Fare paid' },
//       { val: '22 km', label: 'Distance' },
//       { val: 'Quiet', label: 'Cabin mood' },
//     ],
//     timeline: ['Booked', 'Driver matched', 'Ride started', 'Reached safely'],
//     tags: ['Economy', 'Daily Commute'],
//     desc: 'Meera talks about her daily Whitefield commute — how CABGO\'s economy option gave her a comfortable, quiet ride without compromising on safety.',
//     videoClip: null,
//   },
// ];

// type Review = (typeof rideReviews)[0];

// function StarRow({ rating }: { rating: number }) {
//   return (
//     <div className="flex gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={13}
//           className={i < rating ? 'text-amber-400' : 'text-zinc-700'}
//           fill={i < rating ? 'currentColor' : 'none'}
//         />
//       ))}
//     </div>
//   );
// }

// function Timeline({ steps }: { steps: string[] }) {
//   return (
//     <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0d0d10] border-b border-white/5 overflow-x-auto scrollbar-none">
//       {steps.map((step, i) => (
//         <div key={i} className="flex items-center gap-1.5 shrink-0">
//           <div className={`w-1.5 h-1.5 rounded-full ${i <= 2 ? 'bg-amber-400' : 'bg-zinc-700'}`} />
//           <span className={`text-[10.5px] ${i <= 2 ? 'text-amber-400' : 'text-zinc-600'}`}>{step}</span>
//           {i < steps.length - 1 && <div className="w-4 h-px bg-zinc-800" />}
//         </div>
//       ))}
//     </div>
//   );
// }

// function VideoModal({ review, onClose }: { review: Review; onClose: () => void }) {
//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//       >
//         <motion.div
//           className="bg-[#111115] border border-white/10 rounded-2xl overflow-hidden w-full max-w-lg"
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Video area */}
//           <div className="relative w-full aspect-video bg-black flex items-center justify-center">
//             {review.videoClip ? (
//               <video
//                 src={review.videoClip}
//                 controls
//                 autoPlay
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="flex flex-col items-center gap-3 text-zinc-600">
//                 <PlayCircle size={48} className="opacity-30" />
//                 <p className="text-xs">{review.duration} ride review · {review.ride}</p>
//                 <p className="text-[10px] text-zinc-700 max-w-[200px] text-center">
//                   Replace <code>videoClip: null</code> with actual MP4/HLS URL to show real clip
//                 </p>
//               </div>
//             )}
//             <button
//               onClick={onClose}
//               className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
//             >
//               <X size={14} />
//             </button>
//           </div>

//           <div className="p-5">
//             <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white mb-1">
//               {review.name} — {review.city}
//             </h3>
//             <p className="text-sm text-zinc-500 leading-relaxed mb-5">{review.desc}</p>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-2.5 mb-5">
//               {review.stats.map((s, i) => (
//                 <div key={i} className="bg-[#0d0d10] rounded-xl p-3 text-center">
//                   <div className="font-['Syne',sans-serif] text-lg font-extrabold text-amber-400">{s.val}</div>
//                   <div className="text-[10px] text-zinc-600 uppercase tracking-wide mt-0.5">{s.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Driver */}
//             <div className="flex items-center gap-3 bg-[#0d0d10] rounded-xl p-3">
//               <div className="w-9 h-9 rounded-full bg-[#1e1e24] border border-zinc-700 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0">
//                 {review.driver.initials}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-xs font-medium text-zinc-300">Driver: {review.driver.name}</p>
//                 <p className="text-[10.5px] text-zinc-600">{review.driver.trips.toLocaleString()} trips · since {review.driver.since}</p>
//               </div>
//               <span className="text-[10px] px-2.5 py-1 rounded-full bg-green-950 border border-green-900/60 text-green-500">
//                 Top Driver
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default function ReviewsPage() {
//   const [activeModal, setActiveModal] = useState<Review | null>(null);

//   return (
//     <main className="min-h-screen bg-[#08080a] text-white px-5 py-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>

//       {/* HEADER */}
//       <div className="text-center mb-14">
//         <p className="text-amber-500 text-[11px] font-medium tracking-[0.18em] uppercase mb-3">
//           ● Real CABGO Riders
//         </p>
//         <h1
//           className="text-4xl md:text-6xl font-extrabold leading-tight mb-3"
//           style={{ fontFamily: "'Syne', sans-serif" }}
//         >
//           Rider Experience Stories
//         </h1>
//         <p className="text-zinc-500 text-sm font-light">
//           Real women sharing their cab experience — pickup, drop, driver behavior & more
//         </p>
//       </div>

//       {/* CARDS GRID */}
//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {rideReviews.map((r, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ y: -6 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             className="bg-[#111115] border border-white/[0.07] rounded-2xl overflow-hidden cursor-pointer hover:border-amber-400/25 transition-colors"
//             onClick={() => setActiveModal(r)}
//           >
//             {/* THUMBNAIL */}
//             <div className="relative h-52">
//               <div className={`absolute inset-0 bg-gradient-to-br ${r.thumbGrad}`} />
//               {/* noise texture overlay */}
//               <div className="absolute inset-0 opacity-20"
//                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'%23ffffff08\'/%3E%3C/svg%3E") repeat' }} />

//               {/* Badge */}
//               <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
//                 <PlayCircle size={11} className="text-amber-400" />
//                 <span className="text-[10.5px] text-amber-400 font-medium">Ride Review</span>
//               </div>

//               {/* Play button */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-14 h-14 rounded-full bg-amber-400/90 flex items-center justify-center shadow-[0_0_0_12px_rgba(232,164,34,0.12)]">
//                   <PlayCircle size={26} className="text-black ml-0.5" fill="black" />
//                 </div>
//               </div>

//               {/* Duration */}
//               <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 rounded-md px-2 py-1">
//                 <Clock size={10} className="text-zinc-400" />
//                 <span className="text-[11px] text-zinc-300">{r.duration}</span>
//               </div>
//             </div>

//             {/* TIMELINE */}
//             <Timeline steps={r.timeline} />

//             {/* CONTENT */}
//             <div className="p-4">
//               <div className="flex items-start justify-between mb-3">
//                 <div>
//                   <h3 className="font-bold text-sm text-zinc-100" style={{ fontFamily: "'Syne', sans-serif" }}>
//                     {r.name}
//                   </h3>
//                   <div className="flex items-center gap-2 mt-1 text-zinc-600 text-[11px]">
//                     <span className="flex items-center gap-1">
//                       <MapPin size={10} /> {r.city}
//                     </span>
//                     <span>·</span>
//                     <span>{r.gender} Rider</span>
//                   </div>
//                 </div>
//                 <StarRow rating={r.rating} />
//               </div>

//               <p className="text-zinc-500 text-[12.5px] leading-relaxed italic border-l-2 border-amber-400/20 pl-3 mb-4">
//                 "{r.text}"
//               </p>

//               <div className="flex items-center gap-2 flex-wrap">
//                 <span className="text-[10.5px] px-2.5 py-1 rounded-full border border-amber-400/20 text-amber-400/70">
//                   {r.ride}
//                 </span>
//                 {r.tags.map((tag, idx) => (
//                   <span key={idx} className="text-[10.5px] px-2.5 py-1 rounded-full border border-white/8 text-zinc-600">
//                     {tag}
//                   </span>
//                 ))}
//                 <span className="text-[10.5px] px-2.5 py-1 rounded-full bg-green-950 border border-green-900/50 text-green-500 flex items-center gap-1">
//                   <Shield size={9} /> Verified
//                 </span>
//               </div>
//             </div>

//             {/* DRIVER STRIP */}
//             <div className="flex items-center gap-2.5 bg-[#0d0d10] border-t border-white/5 px-4 py-3">
//               <div className="w-8 h-8 rounded-full bg-[#1e1e24] border border-zinc-800 flex items-center justify-center text-amber-400 text-[11px] font-bold shrink-0">
//                 {r.driver.initials}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-[11.5px] font-medium text-zinc-300">Driver: {r.driver.name}</p>
//                 <p className="text-[10px] text-zinc-600">{r.driver.trips.toLocaleString()} trips · CABGO since {r.driver.since}</p>
//               </div>
//               <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-950 border border-green-900/50 text-green-500 shrink-0">
//                 Top Driver
//               </span>
//             </div>

//           </motion.div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {activeModal && (
//         <VideoModal review={activeModal} onClose={() => setActiveModal(null)} />
//       )}
      
//     </main>
//   );
  
// }

'use client';

import { useState } from 'react';

import CountUp from 'react-countup';

import { motion, AnimatePresence } from 'framer-motion';

import {
  Star,
  MapPin,
  PlayCircle,
  Clock,
  X,
  Shield,
  TrendingUp,
  ShieldCheck,
  Siren,
  Navigation,
  PhoneCall,
  Sparkles,
  Volume2,
} from 'lucide-react';

const rideReviews = [
  {
    name: 'Priya Verma',
    city: 'Mumbai',
    ride: 'Luxury Cab',
    rating: 5,
    gender: 'Female',
    duration: '5:12',
    thumbGrad: 'from-[#1a0a05] via-[#3a1a08] to-[#5a2a10]',
    text:
      'Driver reached 3 minutes early. Door-to-door drop, no detours. Felt completely safe the whole ride.',
    driver: {
      name: 'Ramesh K.',
      initials: 'RK',
      trips: 1840,
      since: '2021',
    },
    stats: [
      { val: '3 min', label: 'Early pickup' },
      { val: '100%', label: 'On-route' },
      { val: '5★', label: 'Behavior' },
    ],
    timeline: ['Booked', 'Driver arrived', 'Picked up', 'Dropped safely'],
    tags: ['Luxury Cab', 'Night Ride'],
    desc:
      'Priya shares how her late night ride went with CABGO.',
    videoClip: null,
  },

  {
    name: 'Anjali Mehta',
    city: 'Delhi',
    ride: 'Premium Cab',
    rating: 5,
    gender: 'Female',
    duration: '4:55',
    thumbGrad: 'from-[#040a14] via-[#082038] to-[#0d3060]',
    text:
      'Driver called before arriving. Car was spotless and drop was exact.',
    driver: {
      name: 'Sunil T.',
      initials: 'ST',
      trips: 2310,
      since: '2020',
    },
    stats: [
      { val: 'On time', label: 'Arrival' },
      { val: 'Gate drop', label: 'Precision' },
      { val: 'Verified', label: 'Driver ID' },
    ],
    timeline: ['Booked', 'Call from driver', 'Picked up', 'Exact drop'],
    tags: ['Premium', 'Solo Travel'],
    desc:
      'Anjali recounts her premium ride experience.',
    videoClip: null,
  },

  {
    name: 'Meera Nair',
    city: 'Bangalore',
    ride: 'Economy Cab',
    rating: 4,
    gender: 'Female',
    duration: '5:03',
    thumbGrad: 'from-[#050e05] via-[#0c2010] to-[#113018]',
    text:
      'Affordable ride, quick booking and very peaceful journey.',
    driver: {
      name: 'Vikram S.',
      initials: 'VS',
      trips: 974,
      since: '2022',
    },
    stats: [
      { val: '₹180', label: 'Fare paid' },
      { val: '22 km', label: 'Distance' },
      { val: 'Quiet', label: 'Cabin mood' },
    ],
    timeline: ['Booked', 'Driver matched', 'Ride started', 'Reached safely'],
    tags: ['Economy', 'Daily Commute'],
    desc:
      'Meera talks about her comfortable CABGO daily commute.',
    videoClip: null,
  },
];

type Review = (typeof rideReviews)[0];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'text-amber-400' : 'text-zinc-700'}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

function Timeline({ steps }: { steps: string[] }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0d0d10] border-b border-white/5 overflow-x-auto scrollbar-none">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1.5 shrink-0">

          <div
            className={`w-1.5 h-1.5 rounded-full ${
              i <= 2 ? 'bg-amber-400' : 'bg-zinc-700'
            }`}
          />

          <span
            className={`text-[10.5px] ${
              i <= 2 ? 'text-amber-400' : 'text-zinc-600'
            }`}
          >
            {step}
          </span>

          {i < steps.length - 1 && (
            <div className="w-4 h-px bg-zinc-800" />
          )}
        </div>
      ))}
    </div>
  );
}

function VideoModal({
  review,
  onClose,
}: {
  review: Review;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >

        <motion.div
          className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden w-full max-w-lg"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >

          <div className="relative w-full aspect-video bg-black flex items-center justify-center">

            {review.videoClip ? (
              <video
                src={review.videoClip}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-zinc-500">

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <PlayCircle size={54} className="text-amber-400" />
                </motion.div>

                <p className="text-xs">
                  {review.duration} review clip
                </p>

              </div>
            )}

            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white"
            >
              <X size={14} />
            </button>

          </div>

          <div className="p-5">

            <h3 className="text-xl font-black mb-2">
              {review.name}
            </h3>

            <p className="text-sm text-zinc-500 mb-5">
              {review.desc}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-5">

              {review.stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#0d0d10] rounded-2xl p-4 text-center"
                >
                  <div className="text-xl font-black text-amber-400">
                    {s.val}
                  </div>

                  <div className="text-[10px] text-zinc-600 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}

            </div>

            <div className="flex items-center gap-3 bg-[#0d0d10] rounded-2xl p-4">

              <div className="w-10 h-10 rounded-full bg-[#1e1e24] flex items-center justify-center text-amber-400 font-bold">
                {review.driver.initials}
              </div>

              <div className="flex-1">
                <p className="text-sm text-zinc-300">
                  Driver: {review.driver.name}
                </p>

                <p className="text-[11px] text-zinc-600">
                  {review.driver.trips.toLocaleString()} trips
                </p>
              </div>

              <span className="text-[10px] px-3 py-1 rounded-full bg-green-950 border border-green-900 text-green-400">
                Verified
              </span>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default function ReviewsPage() {
  const [activeModal, setActiveModal] = useState<Review | null>(null);

  return (
    <main className="relative min-h-screen bg-[#08080a] text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source
            src="/videos/city-night.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/70" />

      </div>

      {/* AURORA */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
            }}
          />
        ))}

      </div>

      {/* LUXURY BUTTON */}
      <div className="fixed top-5 right-5 z-50">

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="flex items-center gap-2 bg-amber-400 text-black font-bold px-5 py-3 rounded-full shadow-2xl"
        >

          <Sparkles size={16} />

          Luxury Mode ON

        </motion.button>

      </div>

      {/* LIVE FEED */}
      <div className="fixed bottom-24 left-5 z-50 space-y-3 hidden md:block">

        {[
          'Priya booked Premium Ride • 2m ago',
          'Neha rated driver 5★',
          'Anjali completed safe trip',
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.3,
            }}
            className="bg-[#111115]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
          >
            <p className="text-xs text-zinc-300">
              <span className="text-green-400">●</span> {item}
            </p>
          </motion.div>
        ))}

      </div>

      <div className="relative z-10 px-5 py-16">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-amber-500 text-[11px] tracking-[0.2em] uppercase mb-3">
            ● Real CABGO Riders
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            Rider Experience Stories
          </h1>

          <p className="text-zinc-500 text-sm">
            Real women sharing their ride experience
          </p>

        </div>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-white/5 bg-[#0d0d10] py-3 mb-16 rounded-full">

          <motion.div
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
            className="flex gap-12 whitespace-nowrap"
          >

            {[
              'Trusted by 50,000+ riders',
              '4.9★ average safety rating',
              'Live ride tracking enabled',
              'Verified drivers only',
              '24/7 emergency support',
            ].map((item, i) => (
              <span
                key={i}
                className="text-sm text-zinc-400 uppercase tracking-[0.2em]"
              >
                ✦ {item}
              </span>
            ))}

          </motion.div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto mb-20">

          {[
            [50000, 'Safe Rides'],
            [4.9, 'App Rating'],
            [10000, 'Verified Drivers'],
            [24, 'Support Hours'],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-7"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-40" />

              <div className="relative z-10">

                <h3 className="text-4xl font-black text-amber-400 mb-2">

                  {num === 4.9 ? (
                    <CountUp end={4.9} decimals={1} duration={2} />
                  ) : (
                    <CountUp end={Number(num)} duration={2.5} />
                  )}

                  {num !== 4.9 && '+'}

                </h3>

                <p className="text-zinc-500 text-sm uppercase tracking-wide">
                  {label}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* REVIEWS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {rideReviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              onClick={() => setActiveModal(r)}
              className="group relative overflow-hidden bg-[#111115]/90 backdrop-blur-xl border border-white/[0.07] rounded-3xl cursor-pointer"
            >

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,180,50,0.12),transparent_70%)]" />

              {/* ribbon */}
              <div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl z-20">
                VERIFIED
              </div>

              {/* thumbnail */}
              <div className="relative h-56 overflow-hidden">

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${r.thumbGrad}`}
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'%23ffffff08\'/%3E%3C/svg%3E") repeat',
                  }}
                />

                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 z-10">

                  <TrendingUp
                    size={11}
                    className="text-amber-400"
                  />

                  <span className="text-[10px] text-amber-400">
                    Trending Review
                  </span>

                </div>

                {/* play */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-16 h-16 rounded-full bg-amber-400/90 flex items-center justify-center shadow-[0_0_0_12px_rgba(232,164,34,0.12)]"
                  >

                    <PlayCircle
                      size={28}
                      className="text-black ml-0.5"
                      fill="black"
                    />

                  </motion.div>

                </div>

                {/* duration */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 rounded-md px-2 py-1">

                  <Clock
                    size={10}
                    className="text-zinc-400"
                  />

                  <span className="text-[11px] text-zinc-300">
                    {r.duration}
                  </span>

                </div>

              </div>

              {/* timeline */}
              <Timeline steps={r.timeline} />

              {/* content */}
              <div className="p-5">

                <div className="flex items-start justify-between mb-3">

                  <div>

                    <h3 className="font-bold text-lg text-zinc-100">
                      {r.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 text-zinc-600 text-[11px]">

                      <span className="flex items-center gap-1">

                        <MapPin size={10} />

                        {r.city}

                      </span>

                      <span>•</span>

                      <span>{r.gender} Rider</span>

                    </div>

                  </div>

                  <StarRow rating={r.rating} />

                </div>

                <p className="text-zinc-400 text-[13px] leading-relaxed italic border-l-2 border-amber-400/20 pl-3 mb-5">
                  "{r.text}"
                </p>

                {/* route */}
                <div className="flex items-center gap-2 mb-5">

                  <div className="w-2 h-2 rounded-full bg-green-500" />

                  <div className="flex-1 h-[2px] bg-gradient-to-r from-green-500 to-amber-400" />

                  <MapPin
                    size={12}
                    className="text-amber-400"
                  />

                </div>

                {/* tags */}
                <div className="flex items-center gap-2 flex-wrap">

                  <span className="text-[10px] px-3 py-1 rounded-full border border-amber-400/20 text-amber-400">
                    {r.ride}
                  </span>

                  {r.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}

                  <span className="text-[10px] px-3 py-1 rounded-full bg-green-950 border border-green-900/50 text-green-400 flex items-center gap-1">

                    <Shield size={9} />

                    Verified

                  </span>

                </div>

                {/* voice */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    const utterance =
                      new SpeechSynthesisUtterance(r.text);

                    speechSynthesis.speak(utterance);
                  }}
                  className="flex items-center gap-2 text-xs text-amber-400 mt-4 hover:text-amber-300 transition"
                >

                  <Volume2 size={14} />

                  Listen Review

                </button>

              </div>

              {/* driver */}
              <div className="flex items-center gap-3 bg-[#0d0d10] border-t border-white/5 px-5 py-4">

                <div className="w-9 h-9 rounded-full bg-[#1e1e24] border border-zinc-800 flex items-center justify-center text-amber-400 text-[11px] font-bold">
                  {r.driver.initials}
                </div>

                <div className="flex-1">

                  <p className="text-[12px] text-zinc-300">
                    Driver: {r.driver.name}
                  </p>

                  <p className="text-[10px] text-zinc-600">
                    {r.driver.trips.toLocaleString()} trips • since{' '}
                    {r.driver.since}
                  </p>

                </div>

                <span className="text-[10px] px-2 py-1 rounded-full bg-green-950 border border-green-900/50 text-green-400">
                  Top Driver
                </span>

              </div>

            </motion.div>
          ))}

        </div>

        {/* SAFETY SECTION */}
        <section className="max-w-7xl mx-auto mt-28">

          <div className="text-center mb-14">

            <p className="text-amber-500 text-xs tracking-[0.25em] uppercase mb-3">
              Women Safety First
            </p>

            <h2 className="text-5xl font-black mb-4">
              Designed For Safe Travel
            </h2>

            <p className="text-zinc-500 text-sm">
              Every ride is protected with advanced safety tools
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                icon: ShieldCheck,
                title: 'Verified Drivers',
                text: 'Every CABGO driver passes strict verification.',
              },

              {
                icon: Navigation,
                title: 'Live Tracking',
                text: 'Track your ride live and share with family.',
              },

              {
                icon: Siren,
                title: 'Emergency SOS',
                text: 'One tap emergency alert inside the app.',
              },

              {
                icon: PhoneCall,
                title: '24/7 Support',
                text: 'Dedicated support team available anytime.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,180,50,0.15),transparent_70%)]" />

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5">

                    <feature.icon
                      size={28}
                      className="text-amber-400"
                    />

                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {feature.text}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </section>

      </div>

      {/* TRUST BAR */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#111115]/90 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 flex items-center gap-4 z-40 shadow-2xl">

        <span className="text-green-400 text-sm">
          ● 124 riders reviewed today
        </span>

      </div>

      {/* MODAL */}
      {activeModal && (
        <VideoModal
          review={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

    </main>
  );
}