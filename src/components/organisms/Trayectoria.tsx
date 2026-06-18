'use client';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2008',
    title: 'Fundación de la firma',
    desc: 'Apertura de operaciones en Quito con especialización en derecho civil y familiar. Los primeros años consolidaron la reputación de rigor y compromiso del consorcio.',
  },
  {
    year: '2013',
    title: 'Expansión al área empresarial',
    desc: 'Incorporación de socios especialistas y apertura del área de derecho mercantil y corporativo. La firma comenzó a asesorar a empresas nacionales e internacionales.',
  },
  {
    year: '2018',
    title: 'Premio a la excelencia',
    desc: 'Reconocimiento del Colegio de Abogados de Pichincha por trayectoria destacada y aporte al ejercicio ético de la profesión jurídica en Ecuador.',
  },
  {
    year: '2021',
    title: 'Nuevas áreas de práctica',
    desc: 'Incorporación del área de derechos humanos y negociación colectiva, respondiendo a la creciente demanda de asesoría laboral especializada.',
  },
  {
    year: '2024',
    title: 'Transformación digital',
    desc: 'Lanzamiento de plataforma digital para gestión de casos y atención al cliente. La firma avanza hacia un modelo de práctica legal del siglo XXI.',
  },
];

export const Trayectoria = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="relative">
        {/* Línea central */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent hidden md:block" />

        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`flex flex-col md:flex-row gap-8 mb-12 items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div
              className={`flex-1 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <div className="inline-block bg-[#F8F5EF] border border-[#C9A84C]/20 rounded px-4 py-6 hover:border-[#C9A84C]/50 hover:shadow-sm transition-all">
                <div className="font-serif text-3xl font-semibold text-[#1C2B4A] mb-2">
                  {item.year}
                </div>
                <h3 className="text-base font-semibold text-[#1C2B4A] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 z-10">
              <div className="w-4 h-4 rounded-full bg-[#C9A84C] shadow-[0_0_0_4px_rgba(201,168,76,0.15),0_0_16px_rgba(201,168,76,0.25)]" />
            </div>

            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
