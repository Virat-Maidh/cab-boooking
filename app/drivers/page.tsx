'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Star,
  Car,
  Search,
  Heart,
  X,
  Phone,
  Trophy,
  MapPin,
  MessageCircle,
  ArrowLeft,
} from 'lucide-react';

export default function DriversPage() {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedDriver, setSelectedDriver] = useState<any>(null);
  const [drivers, setDrivers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH DRIVERS
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await fetch('http://localhost:5000/drivers');
        const data = await res.json();
        setDrivers(data);
      } catch (err) {
        console.log('Error fetching drivers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  // FAVORITES LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem('cabgo-favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cabgo-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // FILTER
  const filteredDrivers = useMemo(() => {
    return drivers.filter(
      (d) =>
        d.name?.toLowerCase().includes(search.toLowerCase()) ||
        d.car?.toLowerCase().includes(search.toLowerCase()) ||
        d.location?.toLowerCase().includes(search.toLowerCase())
    );
  }, [drivers, search]);

  const onlineDrivers = drivers.filter((d) => d.status === 'online').length;

  const toggleFavorite = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="h-16 w-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold">Loading Drivers...</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 lg:px-20 py-20">

      {/* BACK */}
      <button
        onClick={() => router.push('/')}
        className="mb-10 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-2xl"
      >
        <ArrowLeft size={18} />
        Back To Home
      </button>

      {/* HERO */}
      <div className="mb-14">
        <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-3">
          CABGO PREMIUM
        </p>
        <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent">
          Verified Drivers
        </h1>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-black text-cyan-400">{drivers.length}</h2>
          <p className="text-zinc-400">Total Drivers</p>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-black text-green-400">{onlineDrivers}</h2>
          <p className="text-zinc-400">Online Drivers</p>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-black text-yellow-400">4.9</h2>
          <p className="text-zinc-400">Rating</p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mb-10 flex items-center gap-3 bg-white/10 px-5 py-4 rounded-2xl">
        <Search size={18} className="text-zinc-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search drivers, cars, locations..."
          className="bg-transparent w-full outline-none"
        />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredDrivers.map((driver, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -10 }}
            onClick={() => setSelectedDriver(driver)}
            className="relative cursor-pointer rounded-3xl overflow-hidden bg-white/10 border border-white/10"
          >
            {/* FAVORITE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(i);
              }}
              className="absolute top-4 right-4 z-10"
            >
              <Heart
                className={
                  favorites.includes(i)
                    ? 'text-red-500 fill-red-500'
                    : 'text-white/60'
                }
              />
            </button>

            {/* IMAGE */}
            <img
              src={driver.image}
              className="h-72 w-full object-cover"
            />

            {/* INFO */}
            <div className="p-5">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">{driver.name}</h2>
                <div className="flex items-center gap-1 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold">
                  <Star size={14} /> {driver.rating}
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 mt-2">
                <Car size={16} /> {driver.car}
              </div>

              <div className="flex items-center gap-2 text-zinc-400 mt-1">
                <MapPin size={16} /> {driver.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===================== PREMIUM MODAL ===================== */}
      <AnimatePresence>
        {selectedDriver && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDriver(null)}
          >
            <motion.div
              className="w-full max-w-5xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-[40px] overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >

              <div className="grid md:grid-cols-2">

                {/* IMAGE SIDE */}
                <div className="relative h-[420px] md:h-full">
                  <img
                    src={selectedDriver.image}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* STATUS */}
                  <div className="absolute top-5 left-5">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                      selectedDriver.status === 'online'
                        ? 'bg-green-500 text-black'
                        : 'bg-red-500 text-white'
                    }`}>
                      {selectedDriver.status || 'ONLINE'}
                    </span>
                  </div>

                  {/* RATING */}
                  <div className="absolute top-5 right-5 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold flex items-center gap-1">
                    <Star size={14} />
                    {selectedDriver.rating}
                  </div>

                  {/* NAME */}
                  <div className="absolute bottom-5 left-5">
                    <h2 className="text-3xl font-black text-white">
                      {selectedDriver.name}
                    </h2>
                    <p className="text-zinc-300 text-sm">
                      Verified Premium Driver
                    </p>
                  </div>
                </div>

                {/* DETAILS SIDE */}
                <div className="p-8 space-y-6 relative">

                  {/* CLOSE */}
                  <button
                    onClick={() => setSelectedDriver(null)}
                    className="absolute right-6 top-6 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                  >
                    <X size={18} />
                  </button>

                  {/* CAR */}
                  <div className="bg-white/10 p-5 rounded-2xl">
                    <p className="text-zinc-400 text-sm">Car</p>
                    <p className="text-xl font-bold flex items-center gap-2">
                      <Car size={18} />
                      {selectedDriver.car}
                    </p>
                  </div>

                  {/* INFO GRID */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <p className="text-zinc-400 text-sm">Location</p>
                      <p className="font-semibold flex items-center gap-2">
                        <MapPin size={16} />
                        {selectedDriver.location}
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl">
                      <p className="text-zinc-400 text-sm">Trips</p>
                      <p className="font-semibold flex items-center gap-2">
                        <Trophy size={16} />
                        {selectedDriver.trips || 1200}+
                      </p>
                    </div>
                  </div>

                  {/* ABOUT */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-sm text-zinc-400 mb-2">About</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {selectedDriver.name} is a verified CABGO premium driver
                      providing safe, luxury and comfortable rides with high customer satisfaction.
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                      <Phone size={16} />
                      Call
                    </button>

                    <button className="flex-1 bg-green-500 hover:bg-green-600 py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                      <MessageCircle size={16} />
                      Chat
                    </button>
                  </div>

                  {/* BOOK */}
                  <button className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 py-3 rounded-2xl font-black text-black">
                    BOOK THIS DRIVER
                  </button>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}