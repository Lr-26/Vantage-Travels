import React from "react";
import { Plane, Camera, Globe, Briefcase, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-32 pb-16 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-black">
                <Globe size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tighter font-serif uppercase">
                Vantage Travels
              </span>
            </div>
            <p className="text-sm leading-relaxed font-light">
              Redefiniendo el estándar de los viajes de lujo y la gestión corporativa en la Patagonia. Compromiso, excelencia y exclusividad en cada detalle.
            </p>
            <div className="flex gap-4">
              {[Camera, Globe, Briefcase].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-black transition-all border border-gray-800 hover:border-primary shadow-xl">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Experiencia del Cliente</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <MapPin size={18} />
                </div>
                <span className="group-hover:text-white transition-colors">Calle Mitre 123, Centro Cívico<br/><span className="text-gray-600">Bariloche, Argentina</span></span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-white transition-colors">+54 294 442-1234</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail size={18} />
                </div>
                <span className="group-hover:text-white transition-colors">concierge@vantagetravels.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Nuestra Firma</h4>
            <ul className="space-y-4 text-sm font-light">
              {["Filosofía de Viaje", "Servicios Corporativos", "Membresía Elite", "Legales & Privacidad", "Carreras"].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Vantage Insider</h4>
            <p className="text-sm font-light mb-8">
              Suscríbase a nuestro boletín exclusivo para recibir aperturas de hoteles, destinos emergentes y ofertas privadas.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email corporativo" 
                className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 text-sm outline-none focus:border-primary transition-all text-white placeholder:text-gray-600"
              />
              <button className="w-full bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] py-4 rounded-2xl hover:bg-yellow-300 transition-all shadow-xl shadow-primary/10">
                Suscribirse
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
          <p>© 2026 Vantage Travels Global. Legajo N° 12345.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
