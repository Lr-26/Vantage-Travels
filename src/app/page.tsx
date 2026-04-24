"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Headphones, Globe, ArrowRight, Camera, Car, Map } from "lucide-react";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Services Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-primary w-8 h-8" />,
                title: "Seguridad Garantizada",
                desc: "Respaldo total en cada etapa de su viaje con seguros de cobertura internacional y soporte local."
              },
              {
                icon: <Headphones className="text-primary w-8 h-8" />,
                title: "Conserjería 24/7",
                desc: "Asistencia personalizada en tiempo real para cualquier requerimiento o imprevisto en Bariloche."
              },
              {
                icon: <Globe className="text-primary w-8 h-8" />,
                title: "Red Global",
                desc: "Acceso exclusivo a los hoteles más prestigiosos y servicios de transporte de lujo privados."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-gray-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber más <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section - Full Width Impact */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden noise-overlay">
        <img 
          src="/images/main.jfif" 
          className="w-full h-full object-cover image-refinement"
          alt="Bariloche Landscape"
        />
        <div className="absolute inset-0 bg-black/40 dark-overlay flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-white font-bold leading-tight mb-8 text-shadow-premium"
            >
              Experiencias que desafían la imaginación
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto italic"
            >
              "Desde el primer contacto hasta el último atardecer en el lago, cuidamos cada detalle para que solo te preocupes de vivir el momento."
            </motion.p>
          </div>
        </div>
      </section>

      <FeaturedDestinations />
      <TrustSection />

      {/* Logistics Section - Added Visual variety */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/7 lagoss.jfif" 
                className="w-full h-full object-cover"
                alt="Luxury Transport"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white hidden md:block">
              <img 
                src="/images/patagonia.jpg" 
                className="w-full h-full object-cover"
                alt="Detail"
              />
            </div>
          </motion.div>
          <div className="space-y-8">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Logística de Clase Mundial</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">Traslados Privados y Exclusivos</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Contamos con una flota moderna y conductores profesionales bilingües. Desde traslados al aeropuerto hasta expediciones personalizadas por los Siete Lagos.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Car size={24} />
                </div>
                <span className="font-bold text-sm">Flota Premium</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Map size={24} />
                </div>
                <span className="font-bold text-sm">Rutas Escénicas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Real Experience Gallery - Bariloche Masterpiece */}
      <section className="py-40 bg-gray-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] mb-6"
            >
              #VantageMoments
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-bold font-serif text-white mb-8 tracking-tighter">La Pureza de los Andes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">Documentamos cada travesía para que el recuerdo sea tan vívido como la experiencia misma.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "/images/isal victoriia.jfif",
              "/images/huapii nauhel.jfif",
              "/images/llao llaoo.jfif",
              "/images/cerro catedral.jpg",
              "/images/7 lagos.jfif",
              "/images/el bolson.jpg",
              "/images/patagonia.jpg",
              "/images/villa langistura.jfif"
            ].map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-2xl"
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125" alt="Bariloche" />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Camera className="text-primary" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
