'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StatCard = ({
  label,
  target,
  suffix = '',
  delay = 0,
}: {
  label: string;
  target: number;
  suffix?: string;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
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
  }, [started, target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onViewportEnter={() => setStarted(true)}
      className="flex-1 min-w-[140px] text-center p-8 border-r border-gray-100 last:border-r-0"
    >
      <div className="font-serif text-5xl font-semibold text-[#1C2B4A] mb-2">
        {count}
        <span className="text-[#C9A84C]">{suffix}</span>
      </div>
      <div className="text-xs tracking-[0.15em] uppercase text-gray-400">{label}</div>
    </motion.div>
  );
};

export const StatsBand = () => {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center divide-x divide-gray-100">
          <StatCard label="Años de experiencia" target={15} suffix="+" delay={0} />
          <StatCard label="Casos resueltos" target={800} suffix="+" delay={0.1} />
          <StatCard label="% Satisfacción" target={98} suffix="%" delay={0.2} />
          <StatCard label="Abogados expertos" target={12} delay={0.3} />
        </div>
      </div>
    </section>
  );
};
