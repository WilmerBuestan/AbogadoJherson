'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Award, Lock } from 'lucide-react';
import { PublicLayout } from '@/components/templates/PublicLayout';
import { Hero } from '@/components/organisms/Hero';
import { StatsBand } from '@/components/organisms/StatsBand';
import { servicesData } from '@/data/services';
import { teamData } from '@/data/team';

const features = [
  {
    icon: <Award size={22} />,
    title: 'Trayectoria comprobada',
    desc: 'Más de 15 años y 800 casos resueltos respaldan nuestra reputación jurídica en Ecuador.',
  },
  {
    icon: <Users size={22} />,
    title: 'Asesoría personalizada',
    desc: 'Cada caso recibe atención individual de un abogado especialista en el área correspondiente.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Resultados demostrados',
    desc: '98% de satisfacción de clientes. Nuestro historial habla por sí solo en cada litigio.',
  },
  {
    icon: <Lock size={22} />,
    title: 'Confidencialidad absoluta',
    desc: 'Su información y la de su caso están protegidas bajo estricto secreto profesional.',
  },
];

export default function Home() {
  return (
    <PublicLayout>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <StatsBand />

      {/* Servicios Preview */}
      <section className="py-20 px-6 bg-[#F8F5EF]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B6914] mb-3 block">
              ✦ Áreas de práctica
            </span>
            <h2 className="font-serif text-4xl font-light text-[#1C2B4A] leading-tight">
              Expertos en cada{' '}
              <em className="text-[#C9A84C] italic">rama del derecho</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {servicesData.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 p-6 rounded-sm flex items-start gap-4 hover:border-[#1C2B4A]/40 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-10 h-10 border border-[#C9A84C]/30 rounded-full flex items-center justify-center text-lg bg-[#C9A84C]/8 flex-shrink-0 group-hover:bg-[#C9A84C]/15 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1C2B4A] mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#1C2B4A] text-[#1C2B4A] text-sm uppercase tracking-widest font-semibold hover:bg-[#1C2B4A] hover:text-white transition-colors group"
            >
              Ver todas las áreas
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B6914] mb-3 block">
              ✦ Nuestro compromiso
            </span>
            <h2 className="font-serif text-4xl font-light text-[#1C2B4A] leading-tight">
              Por qué elegir{' '}
              <em className="text-[#C9A84C] italic">Espinos Abogados</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 border border-[#C9A84C]/40 rounded-full flex items-center justify-center text-[#C9A84C] bg-[#C9A84C]/8">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-[#1C2B4A] mb-2 text-sm">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Preview */}
      <section className="py-20 px-6 bg-[#F8F5EF]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B6914] mb-3 block">
              ✦ Nuestro equipo
            </span>
            <h2 className="font-serif text-4xl font-light text-[#1C2B4A] leading-tight">
              Profesionales con <em className="text-[#C9A84C] italic">vocación</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {teamData.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-md hover:border-[#1C2B4A]/30 transition-all duration-300"
              >
                <div className="h-20 bg-gradient-to-br from-[#1C2B4A] to-[#243660] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#C9A84C]/50 bg-white/10 flex items-center justify-center font-serif text-xl font-semibold text-[#C9A84C]">
                    {m.initials}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-[#1C2B4A] mb-0.5">{m.name}</h3>
                  <p className="text-[10px] text-[#8B6914] tracking-widest uppercase">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/equipo"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#1C2B4A] text-[#1C2B4A] text-sm uppercase tracking-widest font-semibold hover:bg-[#1C2B4A] hover:text-white transition-colors group"
            >
              Conocer al equipo completo
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-[#1C2B4A]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4 block">
            ✦ Primera consulta sin costo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-5">
            ¿Necesita{' '}
            <em className="text-[#C9A84C] italic">asesoría legal</em>
            <br />de confianza?
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Nuestros especialistas están listos para analizar su caso y orientarle
            sobre las mejores opciones legales disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#1C2B4A] font-bold uppercase tracking-widest text-sm hover:bg-[#D4B866] transition-colors group"
            >
              Agendar consulta gratuita
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/casos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
            >
              Ver casos de éxito
            </Link>
          </div>
        </motion.div>
      </section>
    </PublicLayout>
  );
}
