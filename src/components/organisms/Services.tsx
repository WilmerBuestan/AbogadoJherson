'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData, ServiceItem } from '@/data/services';
import { ServiceModal } from '@/components/molecules/ServiceModal';

export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
      <section id="servicios" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4 block">
            ✦ Áreas de práctica
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
            Expertos en cada <em className="text-amber-500 italic">rama del derecho</em>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
          <p className="text-slate-500 text-sm mt-4">
            Haga clic en cualquier servicio para conocer más detalles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-amber-500/10 rounded-lg overflow-hidden">
          {servicesData.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              aria-label={`Ver detalles de ${service.title}`}
              className="group relative bg-slate-900 p-8 hover:bg-slate-950 transition-all duration-500 cursor-pointer overflow-hidden text-left w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="absolute top-4 right-4 font-serif text-5xl font-semibold text-amber-500 opacity-5 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 border border-amber-500/20 rounded-full flex items-center justify-center text-xl mb-6 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-[10px] tracking-widest uppercase text-amber-500/60 group-hover:text-amber-500 transition-colors">
                  Ver detalle →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};
