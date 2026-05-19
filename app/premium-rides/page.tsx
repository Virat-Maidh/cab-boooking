// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import toast, { Toaster } from 'react-hot-toast';

// import {
//   Car,
//   Star,
//   Shield,
//   X,
//   Hash,
// } from 'lucide-react';

// import { API } from '../services/api';

// export default function RidesPage() {
//   const [rides, setRides] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedRide, setSelectedRide] = useState<any | null>(null);

//   const [form, setForm] = useState({
//     pickup: '',
//     destination: '',
//     cabType: '',
//     price: '',
//     user: '',
//     driver: '',
//     driverCar: '',
//     driverRating: '',
//     date: '',
//   });

//   const cities = [
//     'Chandigarh',
//     'Mohali',
//     'Delhi',
//     'Gurgaon',
//     'Panchkula',
//     'Airport',
//   ];

//   // ✅ SAFE TEXT FALLBACK
//   const safeText = (value: any, fallback: string) =>
//     value?.toString().trim() ? value : fallback;

//   // ✅ SAFE DATE FORMAT
//   const safeDate = (date: any) => {
//     if (!date) return 'Date not available';

//     const d = new Date(date);
//     if (isNaN(d.getTime())) return 'Date not available';

//     return d.toLocaleDateString('en-IN', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     });
//   };

//   // ✅ ID GENERATOR
//   const generateId = () =>
//     'RIDE-' + Math.random().toString(36).substring(2, 10).toUpperCase();

//   const getRides = async () => {
//     try {
//       const res = await API.get('/cab');
//       setRides(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getRides();
//   }, []);

//   const bookRide = async () => {
//     if (
//       !form.pickup ||
//       !form.destination ||
//       !form.cabType ||
//       !form.price ||
//       !form.user ||
//       !form.driver ||
//       !form.driverCar ||
//       !form.driverRating ||
//       !form.date
//     ) {
//       return toast.error('Please fill all fields');
//     }

//     try {
//       setLoading(true);

//       await API.post('/cab', {
//         ...form,
//         driver: form.driver || 'Assigned Driver',
//         driverCar: form.driverCar || 'Standard Sedan',
//         date: form.date || new Date().toISOString(),
//       });

//       toast.success('Ride Booked Successfully');

//       setForm({
//         pickup: '',
//         destination: '',
//         cabType: '',
//         price: '',
//         user: '',
//         driver: '',
//         driverCar: '',
//         driverRating: '',
//         date: '',
//       });

//       getRides();
//     } catch (err) {
//       toast.error('Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-10">
//       <Toaster />

//       <h1 className="text-4xl font-black mb-10">Rides Dashboard</h1>

//       <div className="grid lg:grid-cols-2 gap-10">

//         {/* FORM */}
//         <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
//           <h2 className="text-2xl font-bold mb-6">Book Ride</h2>

//           <input
//             placeholder="Passenger Name"
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.user}
//             onChange={(e) => setForm({ ...form, user: e.target.value })}
//           />

//           <input
//             placeholder="Driver Name"
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.driver}
//             onChange={(e) => setForm({ ...form, driver: e.target.value })}
//           />

//           <input
//             placeholder="Driver Car"
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.driverCar}
//             onChange={(e) => setForm({ ...form, driverCar: e.target.value })}
//           />

//           <input
//             placeholder="Driver Rating"
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.driverRating}
//             onChange={(e) => setForm({ ...form, driverRating: e.target.value })}
//           />

//           <select
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.pickup}
//             onChange={(e) =>
//               setForm({ ...form, pickup: e.target.value })
//             }
//           >
//             <option>Select Pickup</option>
//             {cities.map((c, i) => (
//               <option key={i}>{c}</option>
//             ))}
//           </select>

//           <select
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.destination}
//             onChange={(e) =>
//               setForm({ ...form, destination: e.target.value })
//             }
//           >
//             <option>Select Destination</option>
//             {cities.map((c, i) => (
//               <option key={i}>{c}</option>
//             ))}
//           </select>

//           <select
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.cabType}
//             onChange={(e) =>
//               setForm({ ...form, cabType: e.target.value })
//             }
//           >
//             <option>Choose Cab</option>
//             <option>SUV</option>
//             <option>Sedan</option>
//             <option>Mini</option>
//             <option>Premium</option>
//           </select>

//           <input
//             type="number"
//             placeholder="Price"
//             className="w-full p-3 mb-3 bg-black/40 rounded-xl"
//             value={form.price}
//             onChange={(e) =>
//               setForm({ ...form, price: e.target.value })
//             }
//           />

//           <input
//             type="date"
//             className="w-full p-3 mb-5 bg-black/40 rounded-xl"
//             value={form.date}
//             onChange={(e) =>
//               setForm({ ...form, date: e.target.value })
//             }
//           />

//           <button
//             onClick={bookRide}
//             className="w-full bg-gradient-to-r from-pink-500 to-orange-500 py-3 rounded-xl font-bold"
//           >
//             {loading ? 'Booking...' : 'Book Ride'}
//           </button>
//         </div>

//         {/* HISTORY */}
//         <div>
//           <h2 className="text-2xl font-bold mb-6">Ride History</h2>

//           <div className="space-y-4">
//             {rides.map((ride, i) => {
//               const rideId = ride._id || generateId();

//               return (
//                 <div
//                   key={i}
//                   onClick={() =>
//                     setSelectedRide({ ...ride, rideId })
//                   }
//                   className="cursor-pointer bg-white/10 border border-white/10 p-5 rounded-2xl hover:bg-white/20 transition"
//                 >
//                   <div className="flex justify-between">
//                     <p>
//                       {ride.pickup} → {ride.destination}
//                     </p>
//                     <Car />
//                   </div>

//                   <p className="text-sm text-gray-400 mt-2">
//                     {ride.cabType} • ₹{ride.price}
//                   </p>

//                   <p className="mt-2">
//                     Driver:{' '}
//                     {safeText(ride.driver, 'Assigned Driver')}
//                   </p>

//                   <div className="flex items-center gap-2 mt-2 text-yellow-400">
//                     <Star size={16} />
//                     {ride.driverRating}
//                   </div>

//                   <div className="flex items-center gap-2 mt-2 text-green-400">
//                     <Shield size={16} />
//                     Verified Driver
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {selectedRide && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 flex items-center justify-center p-6"
//             onClick={() => setSelectedRide(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-[#111] border border-white/10 p-6 rounded-2xl w-full max-w-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-bold">Ride Details</h2>
//                 <X
//                   className="cursor-pointer"
//                   onClick={() => setSelectedRide(null)}
//                 />
//               </div>

//               <div className="space-y-2 text-sm">
//                 <p className="flex items-center gap-2">
//                   <Hash size={16} /> ID: {selectedRide.rideId}
//                 </p>

//                 <p>Pickup: {selectedRide.pickup}</p>
//                 <p>Destination: {selectedRide.destination}</p>
//                 <p>Cab: {selectedRide.cabType}</p>
//                 <p>Price: ₹{selectedRide.price}</p>
//                 <p>User: {selectedRide.user}</p>

//                 <p>
//                   Driver:{' '}
//                   {safeText(
//                     selectedRide.driver,
//                     'Assigned Driver'
//                   )}
//                 </p>

//                 <p>
//                   Car:{' '}
//                   {safeText(
//                     selectedRide.driverCar,
//                     'Standard Sedan'
//                   )}
//                 </p>

//                 <p>Rating: ⭐ {selectedRide.driverRating}</p>

//                 <p>Date: {safeDate(selectedRide.date)}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import {
  Car,
  Star,
  Shield,
  X,
  Hash,
} from 'lucide-react';

import { API } from '../services/api';

export default function RidesPage() {
  const [rides, setRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRide, setSelectedRide] = useState<any | null>(null);

  const [form, setForm] = useState({
    pickup: '',
    destination: '',
    cabType: '',
    price: '',
    user: '',
    driver: '',
    driverCar: '',
    driverRating: '',
    date: '',
  });

  const cities = [
    'Chandigarh',
    'Mohali',
    'Delhi',
    'Gurgaon',
    'Panchkula',
    'Airport',
  ];

  const safeText = (value: any, fallback: string) =>
    value?.toString().trim() ? value : fallback;

  const safeDate = (date: any) => {
    if (!date) return 'Date not available';

    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Date not available';

    return d.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const generateId = () =>
    'RIDE-' + Math.random().toString(36).substring(2, 10).toUpperCase();

  const getRides = async () => {
    try {
      const res = await API.get('/cab');
      setRides(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRides();
  }, []);

  const bookRide = async () => {
    if (
      !form.pickup ||
      !form.destination ||
      !form.cabType ||
      !form.price ||
      !form.user ||
      !form.driver ||
      !form.driverCar ||
      !form.driverRating ||
      !form.date
    ) {
      return toast.error('Please fill all fields');
    }

    try {
      setLoading(true);

      await API.post('/cab', {
        ...form,
        driver: form.driver || 'Assigned Driver',
        driverCar: form.driverCar || 'Standard Sedan',
        date: form.date || new Date().toISOString(),
      });

      toast.success('Ride Booked Successfully');

      setForm({
        pickup: '',
        destination: '',
        cabType: '',
        price: '',
        user: '',
        driver: '',
        driverCar: '',
        driverRating: '',
        date: '',
      });

      getRides();
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // 🔥 DELETE FUNCTION
  const deleteRide = async (id: string) => {
    try {
      await API.delete(`/cab/${id}`);

      toast.success('Ride deleted');

      // refresh list
      getRides();

      // close modal if same ride deleted
      if (selectedRide?._id === id) {
        setSelectedRide(null);
      }
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <Toaster />

      <h1 className="text-4xl font-black mb-10">Rides Dashboard</h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-6">Book Ride</h2>

          <input
            placeholder="Passenger Name"
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.user}
            onChange={(e) => setForm({ ...form, user: e.target.value })}
          />

          <input
            placeholder="Driver Name"
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.driver}
            onChange={(e) => setForm({ ...form, driver: e.target.value })}
          />

          <input
            placeholder="Driver Car"
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.driverCar}
            onChange={(e) => setForm({ ...form, driverCar: e.target.value })}
          />

          <input
            placeholder="Driver Rating"
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.driverRating}
            onChange={(e) => setForm({ ...form, driverRating: e.target.value })}
          />

          <select
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.pickup}
            onChange={(e) =>
              setForm({ ...form, pickup: e.target.value })
            }
          >
            <option>Select Pickup</option>
            {cities.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>

          <select
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.destination}
            onChange={(e) =>
              setForm({ ...form, destination: e.target.value })
            }
          >
            <option>Select Destination</option>
            {cities.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>

          <select
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.cabType}
            onChange={(e) =>
              setForm({ ...form, cabType: e.target.value })
            }
          >
            <option>Choose Cab</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Mini</option>
            <option>Premium</option>
          </select>

          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 mb-3 bg-black/40 rounded-xl"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <input
            type="date"
            className="w-full p-3 mb-5 bg-black/40 rounded-xl"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <button
            onClick={bookRide}
            className="w-full bg-gradient-to-r from-pink-500 to-orange-500 py-3 rounded-xl font-bold"
          >
            {loading ? 'Booking...' : 'Book Ride'}
          </button>
        </div>

        {/* HISTORY */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Ride History</h2>

          <div className="space-y-4">
            {rides.map((ride, i) => {
              const rideId = ride._id || generateId();

              return (
                <div
                  key={i}
                  className="bg-white/10 border border-white/10 p-5 rounded-2xl hover:bg-white/20 transition"
                >
                  <div className="flex justify-between">
                    <p>
                      {ride.pickup} → {ride.destination}
                    </p>
                    <Car />
                  </div>

                  <p className="text-sm text-gray-400 mt-2">
                    {ride.cabType} • ₹{ride.price}
                  </p>

                  <p className="mt-2">
                    Driver: {safeText(ride.driver, 'Assigned Driver')}
                  </p>

                  <div className="flex items-center gap-2 mt-2 text-yellow-400">
                    <Star size={16} />
                    {ride.driverRating}
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-green-400">
                    <Shield size={16} />
                    Verified Driver
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex gap-3 mt-4">

                    {/* VIEW */}
                    <button
                      onClick={() =>
                        setSelectedRide({ ...ride, rideId })
                      }
                      className="px-3 py-1 text-sm bg-blue-500 rounded-lg"
                    >
                      View
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => deleteRide(ride._id)}
                      className="px-3 py-1 text-sm bg-red-500 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedRide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setSelectedRide(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#111] border border-white/10 p-6 rounded-2xl w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Ride Details</h2>
                <X
                  className="cursor-pointer"
                  onClick={() => setSelectedRide(null)}
                />
              </div>

              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Hash size={16} /> ID: {selectedRide.rideId}
                </p>

                <p>Pickup: {selectedRide.pickup}</p>
                <p>Destination: {selectedRide.destination}</p>
                <p>Cab: {selectedRide.cabType}</p>
                <p>Price: ₹{selectedRide.price}</p>
                <p>User: {selectedRide.user}</p>

                <p>
                  Driver: {safeText(selectedRide.driver, 'Assigned Driver')}
                </p>

                <p>
                  Car: {safeText(selectedRide.driverCar, 'Standard Sedan')}
                </p>

                <p>Rating: ⭐ {selectedRide.driverRating}</p>

                <p>Date: {safeDate(selectedRide.date)}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}