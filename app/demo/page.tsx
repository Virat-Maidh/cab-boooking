// 'use client';

// import { motion } from 'framer-motion';
// import {
//   MapPin,
//   Car,
//   Navigation,
//   Smartphone,
//   CreditCard,
//   CheckCircle2,
//   Clock3,
// } from 'lucide-react';

// export default function UberStyleBookingAnimation() {
//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative flex items-center justify-center p-6">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

//       {/* PHONE */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//         className="relative w-[340px] h-[720px] rounded-[42px] border-[10px] border-zinc-800 bg-black overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.08)]"
//       >
//         {/* NOTCH */}
//         <div className="absolute top-0 left-0 right-0 z-50 flex justify-center">
//           <div className="w-32 h-7 bg-zinc-900 rounded-b-3xl" />
//         </div>

//         {/* MAP */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{
//               scale: [1, 1.08, 1],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 12,
//               ease: 'linear',
//             }}
//             className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"
//           />

//           <div className="absolute inset-0 bg-black/45" />

//           {/* DRIVER MOVING */}
//           <motion.div
//             animate={{
//               x: [0, 120, 80, -40, 0],
//               y: [0, -60, 120, 40, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 15,
//               ease: 'linear',
//             }}
//             className="absolute top-[45%] left-[45%] z-20"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-70 rounded-full" />

//               <div className="relative w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center border-4 border-white shadow-2xl">
//                 <Car className="text-black" size={24} />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* UI */}
//         <div className="relative z-30 flex flex-col h-full p-5">
//           {/* HEADER */}
//           <div className="mt-10 flex items-center justify-between">
//             <div>
//               <p className="text-zinc-400 text-xs">
//                 CABGO Ride
//               </p>

//               <h1 className="text-2xl font-black">
//                 Book Cab
//               </h1>
//             </div>

//             <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg">
//               <Smartphone className="text-black" size={20} />
//             </div>
//           </div>

//           {/* PICKUP + DESTINATION */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="mt-6 bg-[#151515]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-5"
//           >
//             <div className="flex gap-3">
//               <div className="flex flex-col items-center pt-1">
//                 <div className="w-3 h-3 rounded-full bg-green-400" />
//                 <div className="w-[2px] h-10 bg-white/20" />
//                 <MapPin className="text-red-400" size={16} />
//               </div>

//               <div className="flex-1 space-y-5">
//                 <div>
//                   <p className="text-[11px] text-zinc-500">
//                     Pickup
//                   </p>

//                   <h3 className="font-semibold text-sm">
//                     Connaught Place, Delhi
//                   </h3>
//                 </div>

//                 <div>
//                   <p className="text-[11px] text-zinc-500">
//                     Destination
//                   </p>

//                   <h3 className="font-semibold text-sm">
//                     Chandigarh Sector 17
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* CAB OPTIONS */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//             className="mt-5 space-y-3"
//           >
//             {[
//               {
//                 name: 'Mini',
//                 price: '₹2,450',
//                 eta: '4 min',
//               },
//               {
//                 name: 'Sedan',
//                 price: '₹3,200',
//                 eta: '2 min',
//               },
//               {
//                 name: 'Premium',
//                 price: '₹5,850',
//                 eta: '1 min',
//               },
//             ].map((cab, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.02 }}
//                 className={`flex items-center justify-between p-4 rounded-2xl border ${
//                   i === 1
//                     ? 'bg-white text-black border-white'
//                     : 'bg-[#151515]/90 border-white/10'
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   <div
//                     className={`w-12 h-12 rounded-xl flex items-center justify-center ${
//                       i === 1
//                         ? 'bg-black text-white'
//                         : 'bg-white/10'
//                     }`}
//                   >
//                     <Car size={20} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-sm">
//                       {cab.name}
//                     </h3>

//                     <p className="text-xs opacity-70 flex items-center gap-1">
//                       <Clock3 size={12} />
//                       {cab.eta}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="font-black text-sm">
//                   {cab.price}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* PAYMENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5 }}
//             className="mt-5 bg-[#151515]/90 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center">
//                 <CreditCard className="text-black" size={18} />
//               </div>

//               <div>
//                 <p className="text-xs text-zinc-500">
//                   Payment Method
//                 </p>

//                 <h3 className="font-semibold text-sm">
//                   UPI / Card
//                 </h3>
//               </div>
//             </div>

//             <p className="text-xs text-green-400 font-bold">
//               Active
//             </p>
//           </motion.div>

//           {/* DRIVER STATUS */}
//           <motion.div
//             animate={{
//               opacity: [0.6, 1, 0.6],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 2,
//             }}
//             className="mt-auto bg-[#151515]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
//           >
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-green-400 blur-xl opacity-50 rounded-full" />

//                 <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
//                   <Navigation className="text-black" size={24} />
//                 </div>
//               </div>

//               <div>
//                 <p className="text-zinc-500 text-xs">
//                   Driver Found
//                 </p>

//                 <h3 className="font-bold text-lg">
//                   Arriving in 3 mins
//                 </h3>

//                 <p className="text-xs text-zinc-400 mt-1">
//                   Delhi → Chandigarh Ride Confirmed
//                 </p>
//               </div>
//             </div>

//             {/* BUTTON */}
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               animate={{
//                 boxShadow: [
//                   '0 0 0px rgba(255,255,255,0)',
//                   '0 0 40px rgba(255,255,255,0.15)',
//                   '0 0 0px rgba(255,255,255,0)',
//                 ],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 2,
//               }}
//               className="w-full mt-5 bg-white text-black py-4 rounded-2xl font-black text-sm"
//             >
//               CONFIRM BOOKING
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </main>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import {
  Car,
  MapPin,
  Clock3,
  Smartphone,
  Navigation,
  CheckCircle2,
} from 'lucide-react';

export default function RealCabBookingVideo() {
  return (
    <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center p-6">
      <div className="relative w-full max-w-7xl h-[720px] rounded-[40px] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl">

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/855289/855289-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-pink-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/20 blur-[150px] rounded-full" />

        {/* LEFT SIDE */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-sm font-bold mb-6">
              <Smartphone size={16} />
              LIVE CAB BOOKING
            </div>

            <h1 className="text-6xl font-black leading-tight text-white">
              DELHI TO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-cyan-400">
                YAMUNA NAGAR
              </span>
            </h1>

            <p className="text-zinc-300 mt-6 text-lg leading-relaxed max-w-lg">
              A customer opens the CABGO app, selects pickup & destination,
              watches nearby drivers in realtime and books a premium cab
              instantly.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="bg-amber-500 text-black px-5 py-3 rounded-2xl font-black text-sm">
                ₹2499 FIXED
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-3 rounded-2xl font-bold text-sm">
                DRIVER ARRIVING • 3 MIN
              </div>
            </div>
          </motion.div>
        </div>

        {/* PHONE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute right-20 top-1/2 -translate-y-1/2 z-20"
        >
          <div className="relative w-[370px] h-[720px] rounded-[50px] border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.08)]">

            {/* STATUS BAR */}
            <div className="flex justify-between items-center px-6 py-4 text-white text-sm">
              <span>9:41</span>
              <span>5G</span>
            </div>

            {/* MAP */}
            <div className="relative h-[330px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-60"
                alt=""
              />

              <div className="absolute inset-0 bg-black/20" />

              {/* MOVING CAB */}
              <motion.div
                animate={{
                  x: [0, 120, 180],
                  y: [0, 40, 90],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute top-16 left-10"
              >
                <div className="bg-amber-500 p-3 rounded-full shadow-[0_0_30px_rgba(255,180,0,0.7)]">
                  <Car className="text-black" size={20} />
                </div>
              </motion.div>

              {/* PICKUP */}
              <div className="absolute top-12 left-8 bg-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                <MapPin size={14} />
                Delhi
              </div>

              {/* DESTINATION */}
              <div className="absolute bottom-10 right-6 bg-cyan-500 text-black px-4 py-2 rounded-full text-xs font-black flex items-center gap-2">
                <Navigation size={14} />
                Yamuna Nagar
              </div>
            </div>

            {/* DETAILS */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-white text-2xl font-black">
                    Premium Sedan
                  </h2>

                  <p className="text-zinc-500 text-sm mt-1">
                    Fastest ride available
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="text-amber-400 text-3xl font-black">
                    ₹2499
                  </h3>

                  <p className="text-zinc-500 text-xs">
                    Incl. toll & taxes
                  </p>
                </div>
              </div>

              {/* DRIVER */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-6 bg-green-500/10 border border-green-500/20 rounded-3xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-400">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                  <div>
                    <h4 className="text-white font-black">
                      Rajveer Singh
                    </h4>

                    <p className="text-green-400 text-sm mt-1 flex items-center gap-2">
                      <CheckCircle2 size={15} />
                      Driver Found
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* BOOK BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="w-full mt-8 bg-amber-500 hover:bg-amber-400 transition-all text-black font-black py-5 rounded-3xl text-lg shadow-[0_0_30px_rgba(255,180,0,0.45)]"
              >
                BOOK CAB NOW
              </motion.button>

              {/* ETA */}
              <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mt-5">
                <Clock3 size={16} />
                Driver arrives in 3 mins
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}