'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CaseItem {
  id: string;
  category: string;
  title: string;
  result: string;
  description: string;
}

const casesData: CaseItem[] = [
  {
    id: '1',
    category: 'Derecho Empresarial',
    title: 'Fusión societaria entre dos compañías del sector tecnológico',
    result: 'Proceso concluido en 90 días con ahorro fiscal del 23%',
    description:
      'Asesoramos integralmente el proceso de fusión por absorción entre dos empresas tecnológicas de capitales mixtos. Gestionamos la debida diligencia, la reestructuración accionaria y la coordinación con organismos reguladores, logrando una transición sin litigios y con importantes beneficios tributarios para los accionistas.',
  },
  {
    id: '2',
    category: 'Derecho Penal',
    title: 'Defensa exitosa en proceso por presunto lavado de activos',
    result: 'Sobreseimiento definitivo del cliente tras 14 meses de proceso',
    description:
      'Representamos a un empresario acusado de presunto lavado de activos. Construimos una defensa técnica basada en análisis financiero forense que demostró el origen lícito de todos los fondos. La Fiscalía fue compelida a desistir de la acusación ante la solidez de los elementos probatorios presentados.',
  },
  {
    id: '3',
    category: 'Derecho Laboral',
    title: 'Negociación de contrato colectivo para empresa de 400 trabajadores',
    result: 'Acuerdo firmado con incremento salarial del 15% y nuevas prestaciones',
    description:
      'Mediamos en la negociación del contrato colectivo de trabajo entre una empresa industrial y su sindicato. A través de mesas de diálogo y análisis de capacidad económica, logramos un acuerdo equilibrado que satisfizo las demandas laborales sin comprometer la sostenibilidad operativa de la empresa.',
  },
  {
    id: '4',
    category: 'Derecho Civil',
    title: 'Recuperación de bien inmueble en litigio sostenido por 8 años',
    result: 'Sentencia favorable en segunda instancia; propiedad recuperada íntegramente',
    description:
      'Asumimos la defensa de un propietario legítimo cuyo inmueble de alto valor estaba en disputa judicial desde hacía casi una década. Identificamos vicios procesales en la demanda contraria y aportamos prueba documental determinante que permitió revertir la sentencia de primera instancia ante la Corte Provincial.',
  },
  {
    id: '5',
    category: 'Derecho Familiar',
    title: 'Proceso de adopción internacional con tres jurisdicciones involucradas',
    result: 'Adopción legalizada en 18 meses, sin incidentes ni impugnaciones',
    description:
      'Gestionamos un complejo proceso de adopción que involucraba legislaciones de Ecuador, España y Colombia. Coordinamos con autoridades migratorias, el MIES y entidades de cooperación internacional para asegurar el pleno cumplimiento de la normativa vigente y garantizar los derechos del menor adoptado.',
  },
];

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: CaseItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`border rounded-sm overflow-hidden transition-colors duration-300 ${
      isOpen
        ? 'border-amber-500/25 bg-amber-500/[0.04]'
        : 'border-white/5 hover:border-white/10'
    }`}
  >
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
    >
      <div className="flex-1 pr-4">
        <span className="text-[10px] tracking-widest uppercase text-amber-500 block mb-1">
          {item.category}
        </span>
        <h3 className="text-sm font-medium text-white leading-snug">{item.title}</h3>
      </div>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        <ChevronDown size={18} className="text-amber-500 flex-shrink-0" />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5 space-y-3">
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
              <p className="text-xs text-amber-400 font-medium">{item.result}</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const SuccessCases = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <section id="casos" className="relative z-10 py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4 block">
          ✦ Resultados probados
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
          Casos de <em className="text-amber-500 italic">éxito</em>
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
      </motion.div>

      <div className="space-y-3">
        {casesData.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <AccordionItem
              item={c}
              isOpen={openId === c.id}
              onToggle={() => setOpenId(openId === c.id ? null : c.id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
