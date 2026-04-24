"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, MapPin, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/images/patagonia.jpg",
    title: "San Carlos de Bariloche",
    subtitle: "Tu puerta de entrada a la majestuosidad de los Andes y los lagos.",
  },
  {
    image: "/images/cerro catedral.jpg",
    title: "Cerro Catedral",
    subtitle: "El centro de esquí más importante de Sudamérica, a tu alcance.",
  },
  {
    image: "/images/llao llao.jpg",
    title: "Experiencia Llao Llao",
    subtitle: "Lujo legendario en el hotel más emblemático de la Patagonia.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden bg-gray-950">
      
      {/* Background Slider with Parallax Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 noise-overlay"
        >
          {/* Enhanced Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10 dark-overlay" />
          <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="w-full h-full object-cover scale-105 image-refinement"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - High Style */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 flex justify-between px-6 md:px-12 w-full pointer-events-none">
        <motion.button 
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-primary text-white hover:text-black backdrop-blur-xl flex items-center justify-center transition-all border border-white/20 shadow-2xl"
        >
          <ChevronLeft size={24} className="md:size-32" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-primary text-white hover:text-black backdrop-blur-xl flex items-center justify-center transition-all border border-white/20 shadow-2xl"
        >
          <ChevronRight size={24} className="md:size-32" />
        </motion.button>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 px-6 max-w-7xl mx-auto w-full text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex justify-center mb-8">
              <span className="bg-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-black flex items-center gap-2 shadow-2xl">
                <Sparkles size={12} className="animate-pulse" /> Bariloche Expert
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-6 text-white font-serif leading-[1.1] tracking-tighter text-shadow-premium">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light tracking-tight text-shadow-premium italic">
              "{slides[current].subtitle}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Robust Centered Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] items-center gap-2 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-4 px-6 md:px-10 py-4 border-b md:border-b-0 md:border-r border-gray-100 group">
            <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
            <div className="text-left flex-1">
              <label className="block text-[8px] uppercase tracking-widest text-gray-400 font-black mb-0.5">¿A dónde vamos?</label>
              <input 
                type="text" 
                placeholder="Destino" 
                className="bg-transparent border-none outline-none w-full text-gray-900 placeholder:text-gray-300 font-bold text-sm md:text-base"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 md:px-10 py-4 group">
            <Calendar className="text-primary w-5 h-5 flex-shrink-0" />
            <div className="text-left flex-1">
              <label className="block text-[8px] uppercase tracking-widest text-gray-400 font-black mb-0.5">¿Cuándo?</label>
              <input 
                type="text" 
                placeholder="Seleccionar fechas" 
                className="bg-transparent border-none outline-none w-full text-gray-900 placeholder:text-gray-300 font-bold text-sm md:text-base"
              />
            </div>
          </div>
          <button className="bg-primary text-black px-10 py-5 rounded-xl md:rounded-full font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95">
            <Search size={18} />
            Consultar
          </button>
        </motion.div>
      </div>
      
      {/* Dynamic Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-700",
              current === idx ? "w-12 bg-primary" : "w-4 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}
