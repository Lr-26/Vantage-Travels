"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-40 bg-gray-950 relative overflow-hidden">
      {/* Premium Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-10">
                Reserva tu Lugar
              </div>
              <h2 className="text-6xl md:text-8xl font-bold font-serif text-white mb-10 tracking-tighter leading-none">
                Diseñemos <br /> tu Legado.
              </h2>
              <p className="text-gray-400 text-xl font-light mb-12 max-w-lg leading-relaxed">
                Cada detalle es orquestado por expertos para asegurar que tu paso por la Patagonia sea una obra maestra.
              </p>
            </motion.div>

            <div className="space-y-10">
              {[
                { icon: <Phone size={24} />, label: "Conserjería", value: "+54 294 4123456" },
                { icon: <Mail size={24} />, label: "Email VIP", value: "concierge@vantagetravels.com" },
                { icon: <MapPin size={24} />, label: "Sede Bariloche", value: "Calle Mitre 123, Argentina" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-1">{item.label}</p>
                    <p className="text-xl font-medium text-white group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-8 border-gray-900 relative"
          >
            {/* Visual anchor */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-2xl">
              Solicitud de Itinerario
            </div>

            <form className="space-y-8 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black px-1">Nombre</label>
                  <input type="text" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-primary focus:bg-white outline-none transition-all text-gray-900 font-bold" placeholder="Escribe tu nombre" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black px-1">Email</label>
                  <input type="email" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-primary focus:bg-white outline-none transition-all text-gray-900 font-bold" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black px-1">Experiencia Deseada</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-primary focus:bg-white outline-none transition-all appearance-none text-gray-900 font-bold">
                    <option>Expedición de Lujo</option>
                    <option>Retiro Corporativo</option>
                    <option>Aventura Privada</option>
                    <option>Ski Concierge</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black px-1">Detalles Adicionales</label>
                <textarea rows={4} className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-primary focus:bg-white outline-none transition-all resize-none text-gray-900 font-bold" placeholder="Cuéntanos más sobre tus preferencias..." />
              </div>

              <button className="w-full bg-gray-900 text-white font-black uppercase tracking-[0.4em] text-xs py-6 rounded-[2rem] hover:bg-primary hover:text-black transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex items-center justify-center gap-4 group">
                Enviar Solicitud VIP
                <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
