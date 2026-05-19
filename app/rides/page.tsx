'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import {
  Star,
  MapPin,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  Car,
  Globe,
  Send,
  Link2,
} from 'lucide-react';

export default function RidesPage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sort, setSort] = useState('rating');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedRide, setSelectedRide] = useState<any>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [user] = useState({ name: 'Guest' });
const rides = [
  {
    name: 'Luxury SUV',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9',
    rating: 4.9,
    location: 'Chandigarh',
    type: 'SUV',
    distance: '5.2 km',
    eta: '6 mins',
    status: 'Available',
  },
  {
    name: 'Premium Sedan',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
    rating: 4.8,
    location: 'Delhi',
    type: 'Sedan',
    distance: '3.1 km',
    eta: '4 mins',
    status: 'Busy',
  },
  {
    name: 'Mini Cab',
    price: 900,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    rating: 4.7,
    location: 'Mohali',
    type: 'Mini',
    distance: '2.4 km',
    eta: '3 mins',
    status: 'Available',
  },

  // ➜ NEW CARS ADDED
  {
    name: 'Luxury Limousine',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753',
    rating: 5.0,
    location: 'Delhi Airport',
    type: 'Luxury',
    distance: '8.1 km',
    eta: '10 mins',
    status: 'Available',
  },
  {
    name: 'Electric Tesla Ride',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
    rating: 4.9,
    location: 'Gurgaon',
    type: 'EV',
    distance: '6.4 km',
    eta: '7 mins',
    status: 'Available',
  },
  {
    name: 'City Hatchback',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
    rating: 4.6,
    location: 'Noida',
    type: 'Hatchback',
    distance: '2.9 km',
    eta: '5 mins',
    status: 'Busy',
  },
  {
    name: 'Bike Taxi Rapid',
    price: 500,
    image: 'data:image/jpeg;base64,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',
    rating: 4.5,
    location: 'Chandigarh',
    type: 'Bike',
    distance: '1.2 km',
    eta: '2 mins',
    status: 'Available',
  },
];

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
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

    toast.loading('Finding nearest driver...');

    setTimeout(() => {
      toast.success('Driver assigned 🚗');

      setTimeout(() => {
        toast.success(`Payment Success & Ride Booked: ${ride.name}`);
        setSelectedRide(null);
      }, 1200);

      setPaymentLoading(false);
    }, 2000);
  };

  const filteredRides = useMemo(() => {
    let data = rides.filter((ride) => {
      const matchSearch =
        ride.name.toLowerCase().includes(search.toLowerCase()) ||
        ride.location.toLowerCase().includes(search.toLowerCase());

      const matchType = type === 'All' || ride.type === type;
      const matchPrice = ride.price <= maxPrice;

      return matchSearch && matchType && matchPrice;
    });

    if (sort === 'price') data.sort((a, b) => a.price - b.price);
    if (sort === 'rating') data.sort((a, b) => b.rating - a.rating);
    if (sort === 'distance')
      data.sort(
        (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
      );

    return data;
  }, [search, type, maxPrice, sort]);

  return (
    <main className="min-h-screen bg-black text-white px-6 lg:px-20 py-16">

      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Premium Rides
        </h1>

        <div className="bg-white/10 px-4 py-2 rounded-xl">
          👤 {user.name}
        </div>
      </div>

      {/* MAP */}
      <div className="mb-10 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          className="w-full h-72"
          loading="lazy"
          src="https://www.google.com/maps?q=Chandigarh&output=embed"
        />
      </div>

      {/* FILTERS */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl">
          <Search size={18} />
          <input
            className="bg-transparent outline-none w-full"
            placeholder="Search rides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="bg-white/10 p-3 rounded-xl"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>All</option>
          <option>SUV</option>
          <option>Sedan</option>
          <option>Mini</option>
        </select>

        <select
          className="bg-white/10 p-3 rounded-xl"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="distance">Distance</option>
        </select>

        <div className="bg-white/10 p-3 rounded-xl flex items-center justify-between">
          <span className="flex items-center gap-2">
            <SlidersHorizontal size={18} /> ₹{maxPrice}
          </span>
          <input
            type="range"
            min={500}
            max={3000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredRides.map((ride, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.03 }}
            className="rounded-[30px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl relative"
          >
            <img src={ride.image} className="h-60 w-full object-cover" />

            <button
              onClick={() => toggleFav(i)}
              className="absolute top-4 right-4 bg-black/50 p-2 rounded-full"
            >
              <Heart
                size={18}
                color={favorites.includes(i) ? 'red' : 'white'}
                fill={favorites.includes(i) ? 'red' : 'transparent'}
              />
            </button>

            <div className="p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{ride.name}</h2>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                  <Star size={14} fill="black" />
                  {ride.rating}
                </span>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 mt-2">
                <MapPin size={16} />
                {ride.location}
              </div>

              <div className="flex justify-between text-sm text-zinc-300 mt-3">
                <span>{ride.distance}</span>
                <span>{ride.eta}</span>
                <span
                  className={
                    ride.status === 'Available'
                      ? 'text-green-400'
                      : 'text-yellow-400'
                  }
                >
                  {ride.status}
                </span>
              </div>

              <div className="flex items-center justify-between mt-6">
                <h3 className="text-3xl font-black text-green-400">
                  ₹{ride.price}
                </h3>

                <button
                  onClick={() => setSelectedRide(ride)}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 px-5 py-2 rounded-xl font-bold"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selectedRide && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl w-[90%] max-w-md relative">

            <button onClick={() => setSelectedRide(null)} className="absolute top-3 right-3">
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4">Confirm Ride</h2>

            <p className="text-zinc-300">Ride: {selectedRide.name}</p>
            <p className="text-zinc-300">Price: ₹{selectedRide.price}</p>

            <button
              onClick={() => handlePayment(selectedRide)}
              className="w-full mt-4 bg-green-500 py-2 rounded-xl font-bold"
            >
              {paymentLoading ? 'Processing...' : 'Pay & Book'}
            </button>
          </div>
        </div>
      )}

      {/* PREMIUM FOOTER */}
      <footer className="mt-20 border-t border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              CABGO
            </h2>
            <p className="text-zinc-400 mt-3">
              Luxury ride booking platform with real-time experience.
            </p>

            <div className="flex gap-3 mt-4">
              <Globe className="hover:text-pink-400 cursor-pointer" />
              <Send className="hover:text-cyan-400 cursor-pointer" />
              <Link2 className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-zinc-400">
              <p>Home</p>
              <p>Rides</p>
              <p>Drivers</p>
              <p>Premium</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Support</h3>
            <div className="flex flex-col gap-2 text-zinc-400">
              <p>Help Center</p>
              <p>Safety</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 text-center py-5 text-zinc-500 text-sm">
          © {new Date().getFullYear()} CABGO. All rights reserved.
        </div>
      </footer>

    </main>
  );
}