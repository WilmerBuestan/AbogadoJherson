'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { TeamMember } from '@/data/team';

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TeamModal = ({ member, onClose }: TeamModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[60]"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm z-[70] bg-slate-950 border-l border-amber-500/20 shadow-[−24px_0_80px_rgba(0,0,0,0.5)] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar perfil del abogado"
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/40 transition-colors"
            >
              <X size={15} />
            </button>

            <div className="flex flex-col items-center pt-14 pb-8 px-8 border-b border-white/5">
              <div className="w-24 h-24 rounded-full border-2 border-amber-500/40 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center font-serif text-4xl font-semibold text-amber-500 shadow-lg mb-5">
                {member.initials}
              </div>
              <h2
                id="team-modal-title"
                className="font-serif text-2xl font-light text-white text-center"
              >
                {member.name}
              </h2>
              <p className="text-xs text-amber-500 tracking-widest uppercase mt-2">
                {member.role}
              </p>
            </div>

            <div className="p-8 space-y-7">
              <div>
                <h3 className="text-[10px] tracking-widest uppercase text-amber-500 mb-3">
                  Perfil profesional
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
              </div>

              <div>
                <h3 className="text-[10px] tracking-widest uppercase text-amber-500 mb-3">
                  Especialidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-amber-500/20 rounded-full text-xs text-slate-300 bg-amber-500/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-amber-500/30 text-amber-500 text-xs uppercase tracking-widest hover:bg-amber-500/10 transition-colors rounded-sm"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                )}
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-amber-500/30 text-amber-500 text-xs uppercase tracking-widest hover:bg-amber-500/10 transition-colors rounded-sm"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
