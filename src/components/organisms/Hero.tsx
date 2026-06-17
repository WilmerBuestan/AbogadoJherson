'use client';
import { motion } from 'framer-motion';

export const Hero = () => {
  // Función para manejar el scroll de los botones
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Efectos 3D del archivo original */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
      
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08),transparent_70%)] pointer-events-none z-0" 
      />
      
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[10%] right-[10%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08),transparent_70%)] pointer-events-none z-0" 
      />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-amber-500/30 bg-amber-500/10 rounded-full text-xs uppercase tracking-[0.2em] text-amber-500"
        >
          ✦ Quito, Ecuador · Est. 2008
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-light text-white leading-tight mb-6"
        >
          Justicia con <br className="hidden md:block" />
          <span className="text-amber-500 italic">precisión</span> y elegancia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Asesoría legal de alto nivel para personas y empresas. Estrategia, rigor y compromiso en cada caso que representamos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Botones ahora con onClick */}
          <button 
            onClick={() => scrollToSection('contacto')}
            className="px-8 py-4 bg-amber-500 text-slate-950 font-semibold uppercase tracking-widest text-sm hover:bg-amber-400 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Agendar Consulta</span>
            <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full z-0" />
          </button>
          <button 
            onClick={() => scrollToSection('servicios')}
            className="px-8 py-4 border border-slate-700 text-white font-semibold uppercase tracking-widest text-sm hover:border-amber-500 hover:text-amber-500 transition-colors"
          >
            Conocer más ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
};