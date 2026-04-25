"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Droplets, UtensilsCrossed, Sparkles } from "lucide-react";

const products = [
  {
    title: "Sistemas de Cocina",
    tagline: "El corazón de tu hogar",
    description: "Acero quirúrgico T-304. Una inversión para generaciones.",
    image: "/images/hero.png",
    icon: <UtensilsCrossed size={20} />,
    size: "large"
  },
  {
    title: "Pureza de Agua",
    tagline: "Vida en cada gota",
    description: "Filtración avanzada con tecnología de carbón activado.",
    image: "/images/filtration.png",
    icon: <Droplets size={20} />,
    size: "small"
  },
  {
    title: "Cuchillería Elite",
    tagline: "Precisión quirúrgica",
    description: "Forjados para el rendimiento y la durabilidad extrema.",
    image: "/images/knives.png",
    icon: <Sparkles size={20} />,
    size: "small"
  }
];

export default function FeaturedProducts() {
  return (
    <section id="productos" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-gold/50" />
              <h2 className="text-gold tracking-[0.4em] uppercase text-[10px] font-black">Colecciones 2026</h2>
            </div>
            <p className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Ingeniería aplicada al <br /> <span className="text-gold/80 italic">bienestar culinario</span>.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="group flex items-center space-x-3 text-white/40 hover:text-gold transition-colors text-[10px] tracking-[0.3em] uppercase font-bold"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowUpRight size={16} className="text-gold/50 group-hover:text-gold" />
          </motion.button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-charcoal border border-white/5 ${
                product.size === "large" ? "md:col-span-2 h-[550px] md:h-[700px]" : "h-[550px] md:h-[700px]"
              }`}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">
                <div className="flex items-center gap-4 text-gold mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="p-3 bg-gold/10 rounded-xl backdrop-blur-md border border-gold/20">
                    {product.icon}
                  </div>
                  <span className="text-[12px] tracking-[0.2em] uppercase font-bold">{product.tagline}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-tight">{product.title}</h3>
                
                <p className="text-white/50 text-base md:text-lg font-light max-w-md mb-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex">
                  <button className="relative overflow-hidden bg-white/5 backdrop-blur-xl text-white border border-white/10 h-[56px] px-10 rounded-xl text-[12px] uppercase font-bold tracking-widest hover:text-black transition-all duration-500 group/btn">
                    <span className="relative z-10">Explorar Detalles</span>
                    <motion.div 
                      className="absolute inset-0 bg-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" 
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
