"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, User, Search, PhoneCall } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Sistemas", href: "#productos" },
  { name: "Tecnología", href: "#tecnologia" },
  { name: "Recetas", href: "#recetas" },
  { name: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out flex items-center",
        isScrolled 
          ? "h-24 bg-background/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_50px_rgba(0,0,0,0.5)]" 
          : "h-32 bg-transparent"
      )}
    >
      <div className="w-full max-w-[1920px] mx-auto px-10 md:px-20 flex items-center justify-between">
        
        {/* BRAND IDENTITY */}
        <Link href="/" className="group flex flex-col items-start space-y-1">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-[1px] bg-gold/50 scale-y-75 group-hover:scale-y-100 transition-transform duration-700" />
            <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter text-white transition-all group-hover:text-gold uppercase">
              Royal <span className="text-gold italic font-light lowercase">Prestige</span>
            </span>
          </div>
          <span className="text-[8px] tracking-[0.6em] uppercase text-white/30 ml-4 group-hover:text-gold/50 transition-colors">
            Estándar de Excelencia
          </span>
        </Link>

        {/* HIGH-END NAVIGATION */}
        <div className="hidden lg:flex items-center justify-center gap-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="relative text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-all duration-500 group py-2"
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 h-[1.5px] bg-gold shadow-[0_0_10px_rgba(197,160,89,0.8)]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "circOut" }}
              />
            </Link>
          ))}
        </div>

        {/* PREMIUM ACTIONS */}
        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden xl:flex items-center gap-6 pr-6 border-r border-white/10">
            <button className="text-white/40 hover:text-white transition-colors duration-500">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="text-white/40 hover:text-white transition-colors duration-500">
              <User size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/cart" className="relative group">
              <ShoppingCart size={20} strokeWidth={1.5} className="text-white/60 group-hover:text-gold transition-colors duration-500" />
              <span className="absolute -top-2.5 -right-2.5 bg-gold text-black text-[9px] font-black rounded-full w-4.5 h-4.5 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                2
              </span>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 1)", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-3 border border-gold/40 text-gold px-8 py-3.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:border-gold"
            >
              <PhoneCall size={14} />
              <span>Consultoría VIP</span>
            </motion.button>
            
            {/* MOBILE TRIGGER */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* LUXURY MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-matte z-40 flex flex-col items-center justify-center space-y-12 text-4xl font-serif pt-20"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-gold transition-all duration-500 hover:tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-16 flex gap-12 text-gold/30">
              <Search size={32} />
              <User size={32} />
              <ShoppingCart size={32} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
