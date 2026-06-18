'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { teamData, TeamMember } from '@/data/team';
import { TeamModal } from '@/components/molecules/TeamModal';

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <motion.button
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              onClick={() => setSelectedMember(member)}
              aria-label={`Ver perfil de ${member.name}`}
              className="group text-left bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-[#1C2B4A]/40 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Cabecera de la tarjeta */}
              <div className="h-28 bg-gradient-to-br from-[#1C2B4A] to-[#243660] flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />
                <div className="w-16 h-16 rounded-full border-2 border-[#C9A84C]/50 bg-white/10 flex items-center justify-center font-serif text-2xl font-semibold text-[#C9A84C] z-10">
                  {member.initials}
                </div>
              </div>

              {/* Cuerpo */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-[#1C2B4A] mb-1">{member.name}</h3>
                <p className="text-[10px] text-[#8B6914] tracking-widest uppercase mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.specialty}</p>
              </div>

              {/* Footer de la tarjeta */}
              <div className="px-5 pb-5">
                <span className="text-[10px] tracking-widest uppercase text-[#1C2B4A] opacity-0 group-hover:opacity-100 transition-opacity font-medium flex items-center gap-1">
                  Ver perfil →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </>
  );
};
