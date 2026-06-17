'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { teamData } from '@/data/team';

export const Team = () => {
  return (
    <section id="equipo" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4 block">
          ✦ Nuestro equipo
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
          Profesionales con <em className="text-amber-500 italic">vocación</em>
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative border border-amber-500/10 rounded-md overflow-hidden bg-slate-900/50 hover:-translate-y-2 hover:border-amber-500/30 transition-all duration-500"
          >
            {/* Cabecera de la tarjeta */}
            <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center relative">
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="w-16 h-16 rounded-full border-2 border-amber-500/40 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center font-serif text-2xl font-semibold text-amber-500 shadow-lg z-10">
                {member.initials}
              </div>
            </div>

            {/* Cuerpo de la tarjeta */}
            <div className="p-5 pb-6">
              <h3 className="text-lg font-medium text-white mb-1">{member.name}</h3>
              <p className="text-xs text-amber-500 tracking-widest uppercase mb-3">
                {member.role}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {member.specialty}
              </p>
            </div>

            {/* Superposición (Hover) */}
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-5">
              <div className="flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<button className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
</button>
                <button className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                  <Mail size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};