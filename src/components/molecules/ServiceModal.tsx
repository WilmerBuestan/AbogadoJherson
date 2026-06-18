'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ServiceItem } from '@/data/services';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
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
            aria-labelledby="service-modal-title"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.96 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg z-[70] bg-slate-950 border border-amber-500/20 rounded-lg shadow-[0_24px_80px_rgba(0,0,0,0.6)] p-8 overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar ventana de servicio"
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/40 transition-colors"
            >
              <X size={15} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-amber-500/30 rounded-full flex items-center justify-center text-2xl bg-amber-500/10 flex-shrink-0">
                {service.icon}
              </div>
              <span className="font-serif text-6xl font-semibold text-amber-500 opacity-10 leading-none select-none">
                {service.number}
              </span>
            </div>

            <h2
              id="service-modal-title"
              className="font-serif text-3xl font-light text-white mb-2"
            >
              {service.title}
            </h2>
            <div className="w-10 h-[1px] bg-amber-500/60 mb-6" />

            <p className="text-slate-300 text-sm leading-relaxed mb-7">
              {service.modalDescription}
            </p>

            <div className="mb-8">
              <h3 className="text-[10px] tracking-widest uppercase text-amber-500 mb-4">
                Casos que atendemos
              </h3>
              <ul className="space-y-3">
                {service.cases.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contacto"
              onClick={onClose}
              className="block w-full text-center px-6 py-3.5 bg-amber-500 text-slate-950 font-semibold uppercase tracking-widest text-sm hover:bg-amber-400 transition-colors rounded-sm"
            >
              Agendar consulta gratuita →
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
