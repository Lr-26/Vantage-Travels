"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Star } from "lucide-react";

const destinations = [
  {
    title: "Camino de los Siete Lagos",
    location: "Ruta 40, Patagonia",
    price: "$120.000",
    image: "/images/7 lagos.jfif",
    tags: ["Aventura", "Naturaleza"],
    rating: "4.9"
  },
  {
    title: "Cerro Campanario",
    location: "Circuito Chico, Bariloche",
    price: "$45.000",
    image: "/images/cerro campanario.jfif",
    tags: ["Vistas", "Familiar"],
    rating: "5.0"
  },
  {
    title: "Villa La Angostura",
    location: "Neuquén, Argentina",
    price: "$150.000",
    image: "/images/villa langistura.jfif",
    tags: ["Lujo", "Relax"],
    rating: "4.8"
  },
  {
    title: "Isla Victoria y Arrayanes",
    location: "Lago Nahuel Huapi",
    price: "$85.000",
    image: "/images/isal victoriia.jfif",
    tags: ["Navegación", "Historia"],
    rating: "4.9"
  },
  {
    title: "El Bolsón",
    location: "Río Negro, Argentina",
    price: "$95.000",
    image: "/images/el bolson.jpg",
    tags: ["Artesanías", "Montaña"],
    rating: "4.7"
  },
  {
    title: "Circuito Chico",
    location: "Bariloche, Argentina",
    price: "$35.000",
    image: "/images/cuircuito chico.jfif",
    tags: ["Clásico", "Panorámico"],
    rating: "4.8"
  }
];

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-white relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Nuestro Legado</span>
            <div className="h-[2px] w-8 bg-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-serif text-gray-900 mb-6 tracking-tighter"
          >
            Bariloche & Alrededores
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-xl font-light"
          >
            Curamos las experiencias más auténticas de la Patagonia Norte para viajeros que buscan la perfección.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] mb-10 group-hover:shadow-primary/30 transition-all duration-700">
                <img 
                   src={dest.image} 
                   alt={dest.title} 
                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-8 right-8">
                  <div className="glass-card px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl">
                    <Star size={14} className="fill-primary text-primary" />
                    <span className="text-xs font-black text-white">{dest.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex gap-2 mb-6">
                    {dest.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-black uppercase tracking-[0.3em] text-black bg-primary px-3 py-1.5 rounded-lg shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-[0.9] tracking-tighter font-serif">
                    {dest.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
                    <MapPin size={14} className="text-primary" />
                    {dest.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-10">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-black mb-1">Inversión Elite</p>
                  <p className="text-3xl font-bold text-gray-900 tracking-tighter font-serif flex items-baseline gap-1">
                    <span className="text-sm font-medium text-gray-400">Desde</span> {dest.price}
                  </p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: -45 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-gray-950 text-white rounded-[1.5rem] flex items-center justify-center hover:bg-primary hover:text-black transition-all shadow-2xl group-hover:bg-primary group-hover:text-black"
                >
                  <ArrowRight size={24} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
