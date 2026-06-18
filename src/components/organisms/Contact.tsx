'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl font-light text-[#1C2B4A] mb-2">
            Envíenos su <em className="text-[#C9A84C] italic">consulta</em>
          </h2>
          <p className="text-sm text-gray-500 mb-7">
            Un abogado especializado revisará su caso y le contactará dentro de 24 horas.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success('Consulta enviada con éxito', {
                description: 'Un abogado de nuestro equipo le contactará a la brevedad.',
              });
              (e.target as HTMLFormElement).reset();
            }}
            className="flex flex-col gap-5"
          >
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                Nombre completo
              </label>
              <input
                required
                type="text"
                placeholder="Su nombre completo"
                className="w-full border border-gray-200 rounded-sm p-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#1C2B4A] focus:ring-1 focus:ring-[#1C2B4A]/20 transition-all bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                Correo electrónico
              </label>
              <input
                required
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full border border-gray-200 rounded-sm p-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#1C2B4A] focus:ring-1 focus:ring-[#1C2B4A]/20 transition-all bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                Área de consulta
              </label>
              <select
                required
                className="w-full border border-gray-200 rounded-sm p-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#1C2B4A] focus:ring-1 focus:ring-[#1C2B4A]/20 transition-all bg-white appearance-none"
              >
                <option value="">Seleccionar área...</option>
                <option value="civil">Derecho Civil</option>
                <option value="penal">Derecho Penal</option>
                <option value="empresarial">Derecho Empresarial</option>
                <option value="laboral">Derecho Laboral</option>
                <option value="familiar">Derecho Familiar</option>
                <option value="consultoria">Consultoría Legal</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                Describa su caso
              </label>
              <textarea
                required
                rows={4}
                placeholder="Explique brevemente su situación legal..."
                className="w-full border border-gray-200 rounded-sm p-3.5 text-sm text-gray-700 focus:outline-none focus:border-[#1C2B4A] focus:ring-1 focus:ring-[#1C2B4A]/20 transition-all resize-none bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1C2B4A] text-white font-semibold uppercase tracking-widest text-sm py-4 hover:bg-[#243660] transition-colors cursor-pointer rounded-sm"
            >
              Enviar Consulta →
            </button>
          </form>
        </motion.div>

        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h3 className="font-serif text-2xl font-light text-[#1C2B4A]">
            Estamos aquí para <em className="text-[#C9A84C] italic">ayudarle</em>
          </h3>

          <div className="space-y-4">
            {[
              { Icon: MapPin, label: 'Dirección', value: 'Av. Amazonas N24-250, piso 8, Quito' },
              { Icon: Phone, label: 'Teléfono', value: '+593 2 234-5678' },
              { Icon: Mail, label: 'Correo', value: 'info@espinosabogados.com' },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex gap-4 p-4 border border-gray-200 rounded-sm hover:border-[#C9A84C]/40 hover:bg-[#F8F5EF]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                  <Icon size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-[#8B6914] mb-1">{label}</h4>
                  <p className="text-sm text-gray-600">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/593999999999?text=Hola,%20deseo%20agendar%20una%20consulta%20legal."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 border border-green-600/40 bg-green-50 text-green-700 text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-green-100 transition-colors"
          >
            <MessageCircle size={18} /> Escribir por WhatsApp
          </a>

          {/* Horario */}
          <div className="border border-gray-200 rounded-sm p-5 bg-[#F8F5EF]/50">
            <h4 className="text-[10px] tracking-widest uppercase text-[#8B6914] mb-4">
              Horario de atención
            </h4>
            <div className="space-y-2">
              {[
                { d: 'Lunes – Viernes', h: '08:00 – 18:00' },
                { d: 'Sábados', h: '09:00 – 13:00' },
                { d: 'Domingos', h: 'Solo emergencias' },
              ].map(({ d, h }) => (
                <div key={d} className="flex justify-between text-sm">
                  <span className="text-gray-500">{d}</span>
                  <span className="text-[#1C2B4A] font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
