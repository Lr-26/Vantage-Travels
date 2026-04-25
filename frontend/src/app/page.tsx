import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <TechnologySection />
      
      {/* Footer / CTA Section */}
      <section id="contacto" className="py-40 px-6 border-t border-white/5 bg-matte">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-14 leading-tight">¿Listo para transformar <br /> tu manera de cocinar?</h2>
          <p className="text-white/40 text-xl mb-20 max-w-2xl mx-auto font-light leading-relaxed">
            Únete a la comunidad de familias que ya disfrutan de la excelencia de Royal Prestige. Solicita hoy tu asesoramiento personalizado.
          </p>
          <button 
            style={{ paddingLeft: '80px', paddingRight: '80px', height: '76px' }}
            className="relative bg-gold text-black rounded-2xl font-bold tracking-[0.2em] uppercase text-xs hover:bg-white hover:scale-105 transition-all shadow-2xl"
          >
            Empezar Experiencia
          </button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.4em]">
          © 2026 ROYAL PRESTIGE DIGITAL EXPERIENCE • DISEÑO DE ÉLITE
        </p>
      </footer>
    </main>
  );
}
