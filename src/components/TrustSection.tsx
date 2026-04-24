"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Aerolíneas Argentinas", logo: "/images/aerolinea ergentina.jfif" },
  { name: "Llao Llao Resort", logo: "/images/llao llao resort.jfif" },
  { name: "Hilton Hotels", logo: "/images/hotel hilton.avif" },
  { name: "LATAM Airlines", logo: "/images/latam aerorlinea.jfif" },
  { name: "Marriott", logo: "/images/marriot.jfif" }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4">Nuestras Alianzas</p>
          <h2 className="text-3xl font-serif text-gray-900">Confían en nosotros</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-12 w-auto flex items-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full object-contain filter brightness-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
