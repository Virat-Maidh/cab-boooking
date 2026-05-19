
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Star,
  Shield,
  Car,
  Search,
  Heart,
  X,
} from 'lucide-react';

export default function DriversPage() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedDriver, setSelectedDriver] = useState<any>(null);
  const [drivers, setDrivers] = useState<any[]>([]); // ✅ backend data

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await fetch('http://localhost:5000/drivers'); // your Nest API
        const data = await res.json();
        setDrivers(data);
      } catch (err) {
        console.log('Error fetching drivers:', err);
      }
    };

    fetchDrivers();
  }, []);

  const filteredDrivers = drivers.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.car.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 lg:px-20 py-20">

      <h1 className="text-6xl font-black mb-10 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
        Verified Drivers
      </h1>

      {/* Search */}
      <div className="mb-10 flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl border border-white/10">
        <Search size={18} className="text-zinc-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search drivers or cars..."
          className="bg-transparent w-full outline-none text-white"
        />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredDrivers.map((driver, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedDriver(driver)}
            className="cursor-pointer relative rounded-[35px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-2xl"
          >

            {/* Favorite */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(i);
              }}
              className="absolute top-4 right-4 z-10"
            >
              <Heart
                size={20}
                className={
                  favorites.includes(i)
                    ? 'text-red-500 fill-red-500'
                    : 'text-white/60'
                }
              />
            </button>

            <img
              src={driver.image}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-black">{driver.name}</h2> {/* ✅ from backend */}

              <div className="mt-3 flex items-center gap-2 text-zinc-400">
                <Car size={18} />
                {driver.car}
              </div>

              <div className="mt-2 text-sm">
                {driver.status === 'online' ? (
                  <span className="text-green-400">● Online</span>
                ) : (
                  <span className="text-red-400">● Offline</span>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold flex items-center gap-2">
                  <Star size={16} fill="currentColor" />
                  {driver.rating}
                </div>

                <div className="flex items-center gap-2 text-green-400 font-bold">
                  <Shield size={18} />
                  Verified
                </div>
              </div>

              <div className="mt-6 text-sm text-zinc-300">
                Click to view full details →
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL same as yours */}
      <AnimatePresence>
        {selectedDriver && (
          <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50">
            <motion.div className="bg-zinc-900 max-w-xl w-full rounded-3xl overflow-hidden border border-white/10">

              <img
                src={selectedDriver.image}
                className="h-72 w-full object-cover"
              />

              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-black">
                    {selectedDriver.name}
                  </h2>

                  <button onClick={() => setSelectedDriver(null)}>
                    <X />
                  </button>
                </div>

                <p className="text-zinc-400 flex items-center gap-2">
                  <Car size={16} /> {selectedDriver.car}
                </p>

                <p>📍 {selectedDriver.location}</p>
                <p>📞 {selectedDriver.phone}</p>
                <p>🚗 Trips: {selectedDriver.trips}</p>
                <p>🕒 Experience: {selectedDriver.experience}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}