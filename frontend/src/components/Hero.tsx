"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Cinematic Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.png"
          alt="Luxury Kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </motion.div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-start pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-gold" 
            />
            <span className="text-gold tracking-[0.5em] uppercase text-[9px] font-semibold">
              The Art of Fine Living
            </span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif text-white mb-10 leading-[0.95] tracking-tight">
            Maestría en <br /> 
            <span className="font-light italic text-gold/90">Cada Detalle</span>
          </h1>
          
          <p className="text-white/50 text-xl md:text-2xl max-w-2xl mb-14 font-light leading-relaxed tracking-wide font-serif italic">
            "Donde la ingeniería quirúrgica se encuentra con la pasión culinaria para crear legos que duran toda la vida."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-32">
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ paddingLeft: '60px', paddingRight: '60px', height: '60px' }}
              className="group relative flex items-center justify-center gap-3 bg-gold text-black rounded-2xl font-bold tracking-tight text-[14px] transition-all duration-300 shadow-[0_20px_40px_rgba(197,160,89,0.2)]"
            >
              <span className="relative z-10 whitespace-nowrap">Explorar Catálogo</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-2xl border-t border-white/30 pointer-events-none" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              style={{ paddingLeft: '60px', paddingRight: '60px', height: '60px' }}
              className="relative flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-2xl font-bold tracking-tight text-[14px] transition-all duration-300 backdrop-blur-xl group"
            >
              <span className="whitespace-nowrap">Solicitar Demostración</span>
              <div className="absolute inset-0 rounded-2xl border-t border-white/10 pointer-events-none" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-12 right-12 hidden lg:block z-20">
        <div className="flex items-center space-x-6 text-white/20">
          <span className="text-[10px] tracking-[0.5em] uppercase vertical-text">Premium Experience</span>
          <div className="h-32 w-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
}
