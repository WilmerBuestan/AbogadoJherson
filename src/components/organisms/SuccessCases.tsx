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
      'Mediamos en la negociación del contrato colectivo de trabajo entre una empresa industrial y su sindicato. A través de mesas de diálogo y análisis de capacidad económica, logramos un acuerdo que satisfizo las demandas laborales sin comprometer la sostenibilidad operativa de la empresa.',
  },
  {
    id: '4',
    category: 'Derecho Civil',
    title: 'Recuperación de bien inmueble en litigio sostenido por 8 años',
    result: 'Sentencia favorable en segunda instancia; propiedad recuperada íntegramente',
    description:
      'Asumimos la defensa de un propietario legítimo cuyo inmueble de alto valor estaba en disputa judicial desde hacía casi una década. Identificamos vicios procesales en la demanda contraria y aportamos prueba documental determinante que permitió revertir la sentencia ante la Corte Provincial.',
  },
  {
    id: '5',
    category: 'Derecho Familiar',
    title: 'Proceso de adopción internacional con tres jurisdicciones involucradas',
    result: 'Adopción legalizada en 18 meses, sin incidentes ni impugnaciones',
    description:
      'Gestionamos un complejo proceso de adopción que involucraba legislaciones de Ecuador, España y Colombia. Coordinamos con autoridades migratorias, el MIES y entidades de cooperación internacional para asegurar el pleno cumplimiento normativo y garantizar los derechos del menor adoptado.',
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
    className={`border rounded-sm overflow-hidden transition-all duration-300 ${
      isOpen
        ? 'border-[#C9A84C]/40 shadow-sm'
        : 'border-gray-200 hover:border-gray-300'
    }`}
  >
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-white"
    >
      <div className="flex-1 pr-4">
        <span className="text-[10px] tracking-widest uppercase text-[#8B6914] block mb-1.5">
          {item.category}
        </span>
        <h3 className="text-sm font-semibold text-[#1C2B4A] leading-snug">{item.title}</h3>
      </div>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        <ChevronDown size={18} className={`flex-shrink-0 transition-colors ${isOpen ? 'text-[#C9A84C]' : 'text-gray-400'}`} />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 bg-[#F8F5EF]/50 space-y-3">
            <div className="flex items-start gap-2.5 pt-4 border-t border-[#C9A84C]/20">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0 mt-1.5" />
              <p className="text-xs font-semibold text-[#8B6914]">{item.result}</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed pl-4">{item.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const SuccessCases = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-3">
        {casesData.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 16 }}
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
