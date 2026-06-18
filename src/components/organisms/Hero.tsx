'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-[#F8F5EF]/60 to-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">

        {/* Columna izquierda: texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#C9A84C]/40 bg-[#C9A84C]/8 rounded-full text-xs uppercase tracking-[0.18em] text-[#8B6914]"
          >
            <Shield size={12} />
            Consorcio Jurídico · Quito, Ecuador
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#1C2B4A] leading-tight mb-6"
          >
            Defensa legal
            <br />
            que{' '}
            <em className="text-[#C9A84C] italic">transforma</em>
            <br />
            vidas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Más de 15 años representando a personas y empresas con rigor técnico,
            ética profesional y compromiso inquebrantable en cada causa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C2B4A] text-white font-semibold uppercase tracking-widest text-sm hover:bg-[#243660] transition-colors group"
            >
              Agendar Consulta
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1C2B4A] text-[#1C2B4A] font-semibold uppercase tracking-widest text-sm hover:bg-[#1C2B4A] hover:text-white transition-colors"
            >
              Nuestros Servicios
            </Link>
          </motion.div>
        </div>

        {/* Columna derecha: tarjeta decorativa */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Tarjeta principal */}
            <div className="bg-[#1C2B4A] rounded-lg p-10 shadow-2xl relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C9A84C]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="text-[#C9A84C] font-serif text-7xl leading-none mb-2 opacity-30">"</div>
                <p className="font-serif text-white text-2xl font-light leading-relaxed mb-8 italic">
                  La justicia es la constante y perpetua voluntad de dar a cada uno lo suyo.
                </p>
                <p className="text-gray-400 text-sm tracking-widest uppercase">— Justiniano</p>

                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                  {[
                    { n: '15+', l: 'Años' },
                    { n: '800+', l: 'Casos' },
                    { n: '98%', l: 'Satisfacción' },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="font-serif text-2xl font-semibold text-[#C9A84C]">{s.n}</div>
                      <div className="text-xs text-gray-400 tracking-widest uppercase mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Etiqueta flotante */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-lg px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-600 font-medium">Consulta gratuita disponible</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
