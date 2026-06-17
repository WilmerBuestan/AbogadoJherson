'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Subcomponente Molécula: Tarjeta de Estadística Individual
const StatCard = ({ label, target, suffix = '' }: { label: string; target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  // Lógica simple para el contador animado
  useEffect(() => {
    let current = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex-1 min-w-[150px] text-center p-6 border-[0.5px] border-amber-500/10 bg-amber-500/[0.03] hover:bg-amber-500/10 hover:border-amber-500/30 transition-all duration-500 cursor-default">
      <div className="font-serif text-4xl md:text-5xl font-semibold text-amber-500 mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs tracking-[0.12em] uppercase text-slate-400">
        {label}
      </div>
    </div>
  );
};

export const StatsBand = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-wrap justify-center max-w-5xl mx-auto px-6 pb-16"
    >
      <StatCard label="Años de experiencia" target={15} />
      <StatCard label="Casos resueltos" target={800} suffix="+" />
      <StatCard label="% Satisfacción" target={98} suffix="%" />
      <StatCard label="Abogados expertos" target={12} />
    </motion.section>
  );
};