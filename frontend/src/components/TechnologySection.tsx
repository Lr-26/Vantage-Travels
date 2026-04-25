"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Heart, Wind } from "lucide-react";

const features = [
  {
    title: "Acero Quirúrgico T-304",
    description: "El mismo material utilizado en instrumentos médicos de alta precisión. No reactivo, higiénico y eterno.",
    icon: <Shield className="text-gold" size={32} />
  },
  {
    title: "Distribución Térmica 5-Ply",
    description: "Cinco capas de metal para una conducción de calor perfecta y uniforme en toda la superficie.",
    icon: <Zap className="text-gold" size={32} />
  },
  {
    title: "Cocción Nutricional",
    description: "Sistema único que permite cocinar sin aceites ni grasas añadidas, preservando hasta un 90% más de nutrientes.",
    icon: <Heart className="text-gold" size={32} />
  },
  {
    title: "Válvula Redi-Temp®",
    description: "Tecnología patentada que te avisa cuando se alcanza la temperatura perfecta de cocción.",
    icon: <Wind className="text-gold" size={32} />
  }
];

export default function TechnologySection() {
  return (
    <section id="tecnologia" className="py-32 px-6 md:px-12 bg-matte">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-gold/50" />
              <h2 className="text-gold tracking-[0.4em] uppercase text-[10px] font-black">Ingeniería Superior</h2>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
              Más que cocina, <br /> <span className="text-gold/80 italic">biotecnología</span> en tu hogar.
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-12 max-w-xl">
              Nuestros sistemas están diseñados para durar toda la vida, utilizando materiales de grado médico que garantizan la pureza total de tus alimentos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-gold/10 transition-colors duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[600px] md:h-[800px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-full flex flex-col justify-center">
                <div className="text-center">
                  <span className="text-gold/20 text-[15vw] font-serif font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                    T-304
                  </span>
                  <div className="relative z-10 space-y-6">
                    <p className="text-white text-3xl font-serif italic">"Inmortalidad en acero"</p>
                    <div className="h-[1px] w-24 bg-gold mx-auto" />
                    <p className="text-gold tracking-[0.3em] uppercase text-[10px] font-bold">Grado Quirúrgico</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
