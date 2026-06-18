'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
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
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg z-[70] bg-white border border-gray-200 rounded-sm shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Cabecera del modal */}
            <div className="bg-[#F8F5EF] px-8 pt-8 pb-6 border-b border-gray-100">
              <button
                onClick={onClose}
                aria-label="Cerrar ventana de servicio"
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors bg-white"
              >
                <X size={14} />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 border border-[#C9A84C]/40 rounded-full flex items-center justify-center text-2xl bg-white shadow-sm flex-shrink-0">
                  {service.icon}
                </div>
                <span className="font-serif text-6xl font-semibold text-[#1C2B4A] opacity-8 leading-none select-none">
                  {service.number}
                </span>
              </div>

              <h2
                id="service-modal-title"
                className="font-serif text-3xl font-light text-[#1C2B4A] mb-1"
              >
                {service.title}
              </h2>
              <div className="w-8 h-[2px] bg-[#C9A84C] mt-3" />
            </div>

            {/* Cuerpo del modal */}
            <div className="px-8 py-7">
              <p className="text-gray-600 text-sm leading-relaxed mb-7">
                {service.modalDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-[10px] tracking-widest uppercase text-[#8B6914] mb-4 font-medium">
                  Casos que atendemos
                </h3>
                <ul className="space-y-3">
                  {service.cases.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0 font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contacto"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#1C2B4A] text-white font-semibold uppercase tracking-widest text-sm hover:bg-[#243660] transition-colors rounded-sm group"
              >
                Agendar consulta gratuita
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
