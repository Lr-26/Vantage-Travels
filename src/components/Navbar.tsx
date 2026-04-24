"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Globe, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Destinos", href: "#destinations" },
  { name: "Servicios", href: "#" },
  { name: "Corporativo", href: "#" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[90] transition-all duration-500",
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm" 
          : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - Professional Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <Globe className="text-black" size={20} />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-primary" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={cn(
              "text-xl md:text-2xl font-black tracking-tighter transition-colors font-serif uppercase",
              scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
            )}>
              Vantage
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Travels Global</span>
          </div>
        </motion.div>

        {/* Desktop Links - Minimalist & Elite */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "text-[9px] font-black uppercase tracking-[0.2em] transition-all hover:text-primary relative group py-2",
                scrolled ? "text-gray-500" : "text-white/80"
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Desktop Actions */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-4"
        >
          <button className={cn(
            "px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
            scrolled ? "text-gray-500 hover:text-gray-900" : "text-white/70 hover:text-white"
          )}>
            Login
          </button>
          <button
            className={cn(
              "px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all shadow-xl",
              scrolled 
                ? "bg-gray-900 text-white hover:bg-primary hover:text-black" 
                : "bg-white text-gray-900 hover:bg-primary hover:text-black"
            )}
          >
            Reservar Ahora
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            className={cn(
              "p-2.5 rounded-xl transition-all border",
              scrolled 
                ? "text-gray-900 bg-gray-50 border-gray-100" 
                : "text-white bg-white/10 border-white/20 backdrop-blur-md"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-bold text-gray-900 font-serif border-b border-gray-50 pb-4 flex justify-between items-center group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <Globe className="text-gray-200 group-hover:text-primary transition-colors" size={20} />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button className="bg-gray-900 text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl">
                  Reservar Ahora
                </button>
                <button className="border border-gray-200 py-5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                  <User size={16} /> Ingresar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
