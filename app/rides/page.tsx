// 'use client';

// import { useEffect, useMemo, useState } from 'react';
// import { useRouter } from 'next/navigation';

// import { motion, AnimatePresence } from 'framer-motion';

// import toast, { Toaster } from 'react-hot-toast';

// import {
//   Star,
//   MapPin,
//   Heart,
//   Search,
//   SlidersHorizontal,
//   X,
//   Car,
//   Globe,
//   Send,
//   Link2,
//   ShieldCheck,
//   Clock3,
//   Sparkles,
//   Navigation,
//   BadgeCheck,
//   Zap,
//   Wallet,
//   CreditCard,
//   Bike,
//   Crown,
//   CheckCircle2,
//   ArrowLeft,
// } from 'lucide-react';

// export default function RidesPage() {
//   const router = useRouter();

//   const [search, setSearch] = useState('');
//   const [type, setType] = useState('All');
//   const [maxPrice, setMaxPrice] = useState(4000);
//   const [sort, setSort] = useState('rating');

//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [selectedRide, setSelectedRide] = useState<any>(null);

//   const [paymentLoading, setPaymentLoading] =
//     useState(false);

//   const [bookingStatus, setBookingStatus] =
//     useState('');

//   const [coupon, setCoupon] = useState('');
//   const [discount, setDiscount] = useState(0);

//   const [paymentMethod, setPaymentMethod] =
//     useState('UPI');

//   const rides = [
//     {
//       name: 'Luxury SUV',
//       price: 2500,
//       image:
//         'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9',
//       rating: 4.9,
//       location: 'Chandigarh',
//       type: 'SUV',
//       distance: '5.2 km',
//       eta: '6 mins',
//       status: 'Available',
//       driver: 'Rahul Sharma',
//       car: 'BMW X5',
//       verified: true,
//     },

//     {
//       name: 'Premium Sedan',
//       price: 1800,
//       image:
//         'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
//       rating: 4.8,
//       location: 'Delhi',
//       type: 'Sedan',
//       distance: '3.1 km',
//       eta: '4 mins',
//       status: 'Busy',
//       driver: 'Aman Verma',
//       car: 'Mercedes C-Class',
//       verified: true,
//     },

//     {
//       name: 'Mini Cab',
//       price: 900,
//       image:
//         'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
//       rating: 4.7,
//       location: 'Mohali',
//       type: 'Mini',
//       distance: '2.4 km',
//       eta: '3 mins',
//       status: 'Available',
//       driver: 'Rohit Singh',
//       car: 'Swift Dzire',
//       verified: false,
//     },

//     {
//       name: 'Electric Tesla Ride',
//       price: 2100,
//       image:
//         'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
//       rating: 5.0,
//       location: 'Gurgaon',
//       type: 'EV',
//       distance: '4.2 km',
//       eta: '5 mins',
//       status: 'Available',
//       driver: 'Karan Mehta',
//       car: 'Tesla Model 3',
//       verified: true,
//     },

//     {
//       name: 'Bike Taxi Rapid',
//       price: 500,
//       image:
//         'https://images.unsplash.com/photo-1558981806-ec527fa84c39',
//       rating: 4.5,
//       location: 'Chandigarh',
//       type: 'Bike',
//       distance: '1.2 km',
//       eta: '2 mins',
//       status: 'Available',
//       driver: 'Vikas Rana',
//       car: 'Royal Enfield',
//       verified: true,
//     },
//   ];

//   useEffect(() => {
//     const saved =
//       localStorage.getItem('favorites');

//     if (saved) {
//       setFavorites(JSON.parse(saved));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(
//       'favorites',
//       JSON.stringify(favorites)
//     );
//   }, [favorites]);

//   const toggleFav = (index: number) => {
//     setFavorites((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   const applyCoupon = () => {
//     if (coupon === 'CABGO50') {
//       setDiscount(50);
//       toast.success('Coupon Applied 🎉');
//     } else if (coupon === 'LUXURY20') {
//       setDiscount(20);
//       toast.success('20% Discount Applied');
//     } else {
//       toast.error('Invalid Coupon');
//     }
//   };

//   const handlePayment = (ride: any) => {
//     setPaymentLoading(true);

//     setBookingStatus('Searching Driver...');

//     toast.loading('Finding nearest driver...');

//     setTimeout(() => {
//       setBookingStatus('Driver Found 🚗');

//       toast.success('Driver Assigned');

//       setTimeout(() => {
//         setBookingStatus('Driver Arriving 📍');

//         toast.success(
//           `Ride Booked Successfully`
//         );

//         setTimeout(() => {
//           setBookingStatus('Ride Started 🛣️');

//           setTimeout(() => {
//             setBookingStatus(
//               'Trip Completed ✅'
//             );

//             setTimeout(() => {
//               setSelectedRide(null);
//               setPaymentLoading(false);
//               setBookingStatus('');
//             }, 2000);
//           }, 3000);
//         }, 2500);
//       }, 2000);
//     }, 2000);
//   };

//   const filteredRides = useMemo(() => {
//     let data = rides.filter((ride) => {
//       const matchSearch =
//         ride.name
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         ride.location
//           .toLowerCase()
//           .includes(search.toLowerCase());

//       const matchType =
//         type === 'All' || ride.type === type;

//       const matchPrice =
//         ride.price <= maxPrice;

//       return (
//         matchSearch &&
//         matchType &&
//         matchPrice
//       );
//     });

//     if (sort === 'price') {
//       data.sort((a, b) => a.price - b.price);
//     }

//     if (sort === 'rating') {
//       data.sort((a, b) => b.rating - a.rating);
//     }

//     return data;
//   }, [search, type, maxPrice, sort]);

//   return (
//     <main className="min-h-screen bg-black text-white overflow-hidden">

//       <Toaster position="top-right" />

//       {/* HERO */}

//       <section className="relative px-6 lg:px-20 py-20">

//         <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10" />

//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10 text-center"
//         >

//           {/* BACK BUTTON */}

//          {/* FIXED NAVBAR */}
// <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
//   <div className="px-6 lg:px-20 py-4 flex items-center justify-between">

//     {/* LOGO */}
//     <div
//       onClick={() => router.push('/')}
//       className="text-2xl font-black cursor-pointer"
//     >
//       <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
//         CABGO
//       </span>
//     </div>

//     {/* MENU */}
//     <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
//       <button onClick={() => router.push('/')} className="hover:text-white transition">
//         Home
//       </button>

//       <button className="hover:text-white transition">
//         Rides
//       </button>

//       <button className="hover:text-white transition">
//         Drivers
//       </button>

//       <button className="hover:text-white transition">
//         Pricing
//       </button>
//     </div>

//     {/* RIGHT BUTTON */}
//     <div className="flex items-center gap-3">
//       <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm">
//         Download App
//       </button>

//       <button
//         onClick={() => router.push('/')}
//         className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-sm font-bold"
//       >
//         Book Ride
//       </button>
//     </div>
//   </div>
// </nav>

//           <h1 className="text-6xl lg:text-7xl font-black leading-tight">

//             <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
//               CABGO
//             </span>

//             <br />

//             Luxury Ride Experience

//           </h1>

//           <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg">
//             Realtime luxury ride booking
//             platform with live tracking,
//             verified drivers and premium
//             cars.
//           </p>

//           {/* STATS */}

//           <div className="grid md:grid-cols-4 gap-5 mt-14">

//             {[
//               {
//                 title: '10K+',
//                 sub: 'Happy Riders',
//               },

//               {
//                 title: '500+',
//                 sub: 'Luxury Cars',
//               },

//               {
//                 title: '24/7',
//                 sub: 'Support',
//               },

//               {
//                 title: '4.9',
//                 sub: 'Rating',
//               },
//             ].map((item, i) => (

//               <motion.div
//                 key={i}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.03,
//                 }}
//                 className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
//               >

//                 <h2 className="text-4xl font-black text-yellow-400">
//                   {item.title}
//                 </h2>

//                 <p className="text-zinc-400 mt-2">
//                   {item.sub}
//                 </p>

//               </motion.div>

//             ))}

//           </div>

//         </motion.div>

//       </section>

//       {/* STATUS */}

//       <AnimatePresence>

//         {bookingStatus && (

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -80,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               y: -80,
//             }}
//             className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 rounded-2xl shadow-2xl font-bold"
//           >

//             {bookingStatus}

//           </motion.div>

//         )}

//       </AnimatePresence>

//       {/* MAP */}

//       <div className="px-6 lg:px-20 mb-14">

//         <div className="rounded-[35px] overflow-hidden border border-white/10 shadow-2xl">

//           <iframe
//             className="w-full h-[350px]"
//             loading="lazy"
//             src="https://www.google.com/maps?q=Yamunanagar&output=embed"
//           />

//         </div>

//       </div>
//       {/* RIDES GRID */}
// <section className="px-6 lg:px-20 mb-20">
//   <h2 className="text-3xl font-bold mb-10 text-center">
//     Available <span className="text-yellow-400">Rides</span>
//   </h2>

//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//     {rides.map((ride, index) => (
//       <motion.div
//         key={index}
//         whileHover={{ y: -8, scale: 1.02 }}
//         className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-xl"
//       >
//         {/* IMAGE */}
//         <div className="relative">
//           <img
//             src={ride.image}
//             alt={ride.name}
//             className="w-full h-48 object-cover"
//           />

//           {/* FAVORITE */}
//           <button
//             onClick={() => toggleFav(index)}
//             className="absolute top-3 right-3 bg-black/50 p-2 rounded-full"
//           >
//             <Heart
//               className={`w-5 h-5 ${
//                 favorites.includes(index)
//                   ? 'fill-red-500 text-red-500'
//                   : 'text-white'
//               }`}
//             />
//           </button>

//           {/* VERIFIED */}
//           {ride.verified && (
//             <div className="absolute top-3 left-3 bg-green-500/90 text-xs px-3 py-1 rounded-full flex items-center gap-1">
//               <BadgeCheck size={14} />
//               Verified
//             </div>
//           )}
//         </div>

//         {/* CONTENT */}
//         <div className="p-5">
//           <h3 className="text-xl font-bold">{ride.name}</h3>

//           <p className="text-zinc-400 text-sm flex items-center gap-2 mt-1">
//             <MapPin size={14} />
//             {ride.location}
//           </p>

//           <div className="flex justify-between mt-4 text-sm text-zinc-300">
//             <span>🚗 {ride.car}</span>
//             <span>👨‍✈️ {ride.driver}</span>
//           </div>

//           <div className="flex justify-between mt-3 text-sm">
//             <span className="text-yellow-400 flex items-center gap-1">
//               <Star size={14} /> {ride.rating}
//             </span>

//             <span className="text-zinc-400">
//               {ride.distance} • {ride.eta}
//             </span>
//           </div>

//           <div className="flex justify-between items-center mt-5">
//             <h4 className="text-lg font-bold text-green-400">
//               ₹{ride.price}
//             </h4>

//             <span
//               className={`text-xs px-3 py-1 rounded-full ${
//                 ride.status === 'Available'
//                   ? 'bg-green-500/20 text-green-400'
//                   : 'bg-red-500/20 text-red-400'
//               }`}
//             >
//               {ride.status}
//             </span>
//           </div>

//           {/* BUTTON */}
//           <button
//             onClick={() => {
//               setSelectedRide(ride);
//               handlePayment(ride);
//             }}
//             className="w-full mt-5 bg-gradient-to-r from-pink-500 to-orange-500 py-3 rounded-2xl font-bold hover:scale-105 transition"
//           >
//             Book Now
//           </button>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>
// <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl px-6 lg:px-20 py-12">
//   <div className="grid md:grid-cols-3 gap-10">
    
//     {/* BRAND */}
//     <div>
//       <h2 className="text-2xl font-black text-yellow-400">
//         CABGO
//       </h2>
//       <p className="text-zinc-400 mt-3">
//         Luxury ride booking platform with realtime tracking,
//         premium cars and verified drivers.
//       </p>
//     </div>

//     {/* LINKS */}
//     <div>
//       <h3 className="font-bold mb-4">Quick Links</h3>
//       <ul className="space-y-2 text-zinc-400">
//         <li>Home</li>
//         <li>Rides</li>
//         <li>Drivers</li>
//         <li>Pricing</li>
//       </ul>
//     </div>

//     {/* CONTACT */}
//     <div>
//       <h3 className="font-bold mb-4">Contact</h3>
//       <p className="text-zinc-400">support@cabgo.com</p>
//       <p className="text-zinc-400">+91 99999 88888</p>

//       <div className="flex gap-3 mt-4">
//         <button className="p-2 bg-white/10 rounded-xl">
//           <Globe size={18} />
//         </button>
//         <button className="p-2 bg-white/10 rounded-xl">
//           <Send size={18} />
//         </button>
//         <button className="p-2 bg-white/10 rounded-xl">
//           <Link2 size={18} />
//         </button>
//       </div>
//     </div>
//   </div>

//   <div className="text-center text-zinc-500 mt-10 text-sm">
//     © 2026 CABGO. All rights reserved.
//   </div>
// </footer>
//     </main>
//   );
// }


'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';

import toast, { Toaster } from 'react-hot-toast';

import {
  Star,
  MapPin,
  Heart,
  X,
  Globe,
  Send,
  Link2,
  ShieldCheck,
  Clock3,
  Navigation,
  BadgeCheck,
  CheckCircle2,
} from 'lucide-react';

export default function RidesPage() {
  const router = useRouter();

  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedRide, setSelectedRide] =
    useState<any>(null);

  const [paymentLoading, setPaymentLoading] =
    useState(false);

  const [bookingStatus, setBookingStatus] =
    useState('');

  const rides = [
    {
      name: 'Luxury SUV',
      price: 2500,
      image:
        'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9',
      rating: 4.9,
      location: 'Chandigarh',
      distance: '5.2 km',
      eta: '6 mins',
      status: 'Available',
      driver: 'Rahul Sharma',
      car: 'BMW X5',
      verified: true,
    },

    {
      name: 'Premium Sedan',
      price: 1800,
      image:
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
      rating: 4.8,
      location: 'Delhi',
      distance: '3.1 km',
      eta: '4 mins',
      status: 'Busy',
      driver: 'Aman Verma',
      car: 'Mercedes C-Class',
      verified: true,
    },

    {
      name: 'Mini Cab',
      price: 900,
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      rating: 4.7,
      location: 'Mohali',
      distance: '2.4 km',
      eta: '3 mins',
      status: 'Available',
      driver: 'Rohit Singh',
      car: 'Swift Dzire',
      verified: false,
    },
  ];

  useEffect(() => {
    const saved =
      localStorage.getItem('favorites');

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFav = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handlePayment = (ride: any) => {
    setPaymentLoading(true);

    setBookingStatus('Searching Driver...');

    toast.loading('Finding nearest driver...');

    setTimeout(() => {
      setBookingStatus('Driver Found 🚗');

      toast.success('Driver Assigned');

      setTimeout(() => {
        setBookingStatus('Driver Arriving 📍');

        toast.success(
          `Ride Booked Successfully`
        );

        setTimeout(() => {
          setBookingStatus('Ride Started 🛣️');

          setTimeout(() => {
            setBookingStatus(
              'Trip Completed ✅'
            );

            setTimeout(() => {
              setSelectedRide(null);
              setPaymentLoading(false);
              setBookingStatus('');
            }, 2000);
          }, 3000);
        }, 2500);
      }, 2000);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Toaster position="top-right" />

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">

        <div className="px-6 lg:px-20 py-4 flex items-center justify-between">

          <div
            onClick={() => router.push('/')}
            className="text-2xl font-black cursor-pointer"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              CABGO
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

            <button className="hover:text-white transition">
              Home
            </button>

            <button className="hover:text-white transition">
              Rides
            </button>

            <button className="hover:text-white transition">
              Drivers
            </button>

            <button className="hover:text-white transition">
              Pricing
            </button>

          </div>

          <div className="flex items-center gap-3">

            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm">
              Download App
            </button>

            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-sm font-bold">
              Book Ride
            </button>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative px-6 lg:px-20 py-32">

        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">

            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              CABGO
            </span>

            <br />

            Luxury Ride Experience

          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg">
            Realtime luxury ride booking
            platform with live tracking,
            verified drivers and premium
            cars.
          </p>

        </motion.div>

      </section>

      {/* STATUS */}

      <AnimatePresence>

        {bookingStatus && (

          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -80,
            }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 rounded-2xl shadow-2xl font-bold"
          >

            {bookingStatus}

          </motion.div>

        )}

      </AnimatePresence>

      {/* MAP SECTION */}

      <section className="px-6 lg:px-20 mb-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative rounded-[35px] overflow-hidden border border-white/10 shadow-2xl"
        >

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

          <iframe
            className="w-full h-[420px]"
            loading="lazy"
            src="https://www.google.com/maps?q=Yamunanagar&output=embed"
          />

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="absolute top-6 left-6 z-20 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex items-center gap-4"
          >

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-14 h-14 rounded-2xl object-cover"
            />

            <div>

              <h3 className="font-bold text-lg">
                Rahul Sharma
              </h3>

              <p className="text-zinc-400 text-sm">
                BMW X5 • 2 mins away
              </p>

              <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                ⭐ 4.9 Rating
              </div>

            </div>

          </motion.div>

        </motion.div>

      </section>

      {/* RIDES */}

      <section className="px-6 lg:px-20 mb-20">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Available{' '}
          <span className="text-yellow-400">
            Rides
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {rides.map((ride, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-xl"
            >

              <div className="relative">

                <img
                  src={ride.image}
                  alt={ride.name}
                  className="w-full h-48 object-cover"
                />

                <button
                  onClick={() =>
                    toggleFav(index)
                  }
                  className="absolute top-3 right-3 bg-black/50 p-2 rounded-full"
                >

                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(index)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />

                </button>

                {ride.verified && (

                  <div className="absolute top-3 left-3 bg-green-500/90 text-xs px-3 py-1 rounded-full flex items-center gap-1">

                    <BadgeCheck size={14} />

                    Verified

                  </div>

                )}

              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {ride.name}
                </h3>

                <p className="text-zinc-400 text-sm flex items-center gap-2 mt-1">

                  <MapPin size={14} />

                  {ride.location}

                </p>

                <div className="flex justify-between mt-4 text-sm text-zinc-300">

                  <span>
                    🚗 {ride.car}
                  </span>

                  <span>
                    👨‍✈️ {ride.driver}
                  </span>

                </div>

                <div className="flex justify-between mt-3 text-sm">

                  <span className="text-yellow-400 flex items-center gap-1">

                    <Star size={14} />

                    {ride.rating}

                  </span>

                  <span className="text-zinc-400">

                    {ride.distance} •{' '}
                    {ride.eta}

                  </span>

                </div>

                <div className="flex justify-between items-center mt-5">

                  <h4 className="text-lg font-bold text-green-400">
                    ₹{ride.price}
                  </h4>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      ride.status ===
                      'Available'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >

                    {ride.status}

                  </span>

                </div>

                {/* BUTTONS */}

                <div className="grid grid-cols-2 gap-3 mt-5">

                  <button
                    onClick={() =>
                      setSelectedRide(ride)
                    }
                    className="bg-white/10 py-3 rounded-2xl font-bold hover:bg-white/20 transition"
                  >
                    Details
                  </button>

                  <button
                    onClick={() => {
                      setSelectedRide(ride);
                      handlePayment(ride);
                    }}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 py-3 rounded-2xl font-bold hover:scale-105 transition"
                  >
                    Book Now
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* DETAILS MODAL */}

      <AnimatePresence>

        {selectedRide && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              className="bg-[#0f0f0f] border border-white/10 rounded-[35px] overflow-hidden max-w-5xl w-full shadow-2xl"
            >

              {/* TOP IMAGE */}

              <div className="relative">

                <img
                  src={selectedRide.image}
                  alt={selectedRide.name}
                  className="w-full h-[320px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <button
                  onClick={() =>
                    setSelectedRide(null)
                  }
                  className="absolute top-5 right-5 bg-black/60 p-3 rounded-full backdrop-blur-xl"
                >

                  <X />

                </button>

                <div className="absolute bottom-6 left-6">

                  <h2 className="text-4xl font-black">
                    {selectedRide.name}
                  </h2>

                  <p className="text-zinc-300 mt-2">
                    {selectedRide.car}
                  </p>

                </div>

              </div>

              {/* CONTENT */}

              <div className="grid lg:grid-cols-2 gap-8 p-8">

                {/* LEFT */}

                <div>

                  <div className="flex items-center gap-3 flex-wrap">

                    <div className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl flex items-center gap-2">

                      <Star size={16} />

                      {selectedRide.rating}

                    </div>

                    <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

                      {selectedRide.status}

                    </div>

                    {selectedRide.verified && (

                      <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl flex items-center gap-2">

                        <BadgeCheck size={16} />

                        Verified

                      </div>

                    )}

                  </div>

                  {/* INFO */}

                  <div className="mt-8 space-y-5">

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">

                      <MapPin className="text-pink-400" />

                      <div>

                        <p className="text-zinc-400 text-sm">
                          Location
                        </p>

                        <h4 className="font-bold">
                          {selectedRide.location}
                        </h4>

                      </div>

                    </div>

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">

                      <Navigation className="text-yellow-400" />

                      <div>

                        <p className="text-zinc-400 text-sm">
                          Distance
                        </p>

                        <h4 className="font-bold">
                          {selectedRide.distance}
                        </h4>

                      </div>

                    </div>

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">

                      <Clock3 className="text-green-400" />

                      <div>

                        <p className="text-zinc-400 text-sm">
                          Arrival Time
                        </p>

                        <h4 className="font-bold">
                          {selectedRide.eta}
                        </h4>

                      </div>

                    </div>

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">

                      <ShieldCheck className="text-blue-400" />

                      <div>

                        <p className="text-zinc-400 text-sm">
                          Driver
                        </p>

                        <h4 className="font-bold">
                          {selectedRide.driver}
                        </h4>

                      </div>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="bg-white/5 border border-white/10 rounded-[30px] p-6">

                  <h3 className="text-2xl font-black">
                    Ride Summary
                  </h3>

                  <div className="mt-6 space-y-4">

                    <div className="flex justify-between">

                      <span className="text-zinc-400">
                        Base Fare
                      </span>

                      <span>
                        ₹{selectedRide.price}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-zinc-400">
                        Platform Fee
                      </span>

                      <span>₹99</span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-zinc-400">
                        GST
                      </span>

                      <span>₹49</span>

                    </div>

                    <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-black">

                      <span>Total</span>

                      <span className="text-green-400">

                        ₹
                        {selectedRide.price +
                          99 +
                          49}

                      </span>

                    </div>

                  </div>

                  {/* FEATURES */}

                  <div className="mt-8">

                    <h4 className="font-bold mb-4">
                      Features Included
                    </h4>

                    <div className="grid grid-cols-2 gap-3">

                      {[
                        'AC',
                        'Music',
                        'WiFi',
                        'Luxury Seats',
                        'Charging',
                        'Fast Pickup',
                      ].map((item, i) => (

                        <div
                          key={i}
                          className="bg-white/5 border border-white/10 rounded-2xl p-3 text-sm flex items-center gap-2"
                        >

                          <CheckCircle2
                            size={16}
                            className="text-green-400"
                          />

                          {item}

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* BUTTON */}

                  <button
                    onClick={() =>
                      handlePayment(
                        selectedRide
                      )
                    }
                    className="w-full mt-8 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 py-4 rounded-2xl font-black text-lg hover:scale-105 transition"
                  >

                    Confirm Booking

                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl px-6 lg:px-20 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-2xl font-black text-yellow-400">
              CABGO
            </h2>

            <p className="text-zinc-400 mt-3">
              Luxury ride booking platform
              with realtime tracking,
              premium cars and verified
              drivers.
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-zinc-400">

              <li>Home</li>

              <li>Rides</li>

              <li>Drivers</li>

              <li>Pricing</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <p className="text-zinc-400">
              support@cabgo.com
            </p>

            <p className="text-zinc-400">
              +91 99999 88888
            </p>

            <div className="flex gap-3 mt-4">

              <button className="p-2 bg-white/10 rounded-xl">
                <Globe size={18} />
              </button>

              <button className="p-2 bg-white/10 rounded-xl">
                <Send size={18} />
              </button>

              <button className="p-2 bg-white/10 rounded-xl">
                <Link2 size={18} />
              </button>

            </div>

          </div>

        </div>

        <div className="text-center text-zinc-500 mt-10 text-sm">
          © 2026 CABGO. All rights reserved.
        </div>

      </footer>

    </main>
  );
}