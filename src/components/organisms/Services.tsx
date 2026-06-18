'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesData, ServiceItem } from '@/data/services';
import { ServiceModal } from '@/components/molecules/ServiceModal';

export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelectedService(service)}
              aria-label={`Ver detalles de ${service.title}`}
              className="group text-left bg-white border border-gray-200 p-8 hover:border-[#1C2B4A]/40 hover:shadow-md transition-all duration-300 cursor-pointer rounded-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-[#C9A84C]/30 rounded-full flex items-center justify-center text-xl bg-[#C9A84C]/8 group-hover:bg-[#C9A84C]/15 group-hover:border-[#C9A84C]/60 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="font-serif text-4xl font-semibold text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                  {service.number}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#1C2B4A] mb-2 tracking-wide">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                Ver detalle <ArrowRight size={12} />
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
};
