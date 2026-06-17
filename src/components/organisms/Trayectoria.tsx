'use client';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '2008', title: 'Fundación de la firma', desc: 'Inicio de operaciones en Quito con especialización en derecho civil y familiar.' },
  { year: '2013', title: 'Expansión empresarial', desc: 'Incorporación de socios y apertura del área mercantil y corporativa.' },
  { year: '2018', title: 'Premio a la excelencia', desc: 'Reconocimiento del Colegio de Abogados de Pichincha por trayectoria destacada.' },
  { year: '2024', title: 'Transformación digital', desc: 'Plataforma digital para atención al cliente y gestión de casos en línea.' },
];

export const Trayectoria = () => {
  return (
    <section id="trayectoria" className="relative z-10 py-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4 block">
          ✦ Nuestra historia
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
          Una trayectoria de <em className="text-amber-500 italic">excelencia</em>
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
      </motion.div>

      <div className="relative">
        {/* Línea central */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-500/30 to-transparent md:block hidden" />

        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row gap-8 mb-12 items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="font-serif text-3xl font-semibold text-amber-500 mb-2">{item.year}</div>
              <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
            
            <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 z-10">
              <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_0_4px_rgba(201,168,76,0.15),0_0_20px_rgba(201,168,76,0.3)]" />
            </div>
            
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};