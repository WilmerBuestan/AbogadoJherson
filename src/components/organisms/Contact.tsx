'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';


export const Contact = () => {
  return (
    <section id="contacto" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4 block">
          ✦ Hablemos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
          Cuéntenos su <em className="text-amber-500 italic">caso</em>
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna Izquierda: Formulario */}
        <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex flex-col gap-5"
>
  <form 
    onSubmit={(e) => {
      e.preventDefault(); // Evita que la página se recargue
      toast.success('Consulta enviada con éxito', {
        description: 'Un abogado de nuestro equipo revisará su caso y le contactará a la brevedad.',
      });
      (e.target as HTMLFormElement).reset(); // Limpia el formulario
    }} 
    className="flex flex-col gap-5"
  >
    <div className="space-y-1">
      <label className="text-[10px] tracking-widest uppercase text-slate-400">Nombre completo</label>
      <input required type="text" placeholder="Su nombre completo" className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all" />
    </div>
    <div className="space-y-1">
      <label className="text-[10px] tracking-widest uppercase text-slate-400">Correo electrónico</label>
      <input required type="email" placeholder="correo@ejemplo.com" className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all" />
    </div>
    <div className="space-y-1">
      <label className="text-[10px] tracking-widest uppercase text-slate-400">Área de consulta</label>
      <select required className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all appearance-none">
        <option value="" className="bg-slate-900">Seleccionar...</option>
        <option value="civil" className="bg-slate-900">Derecho Civil</option>
        <option value="penal" className="bg-slate-900">Derecho Penal</option>
        <option value="empresarial" className="bg-slate-900">Derecho Empresarial</option>
      </select>
    </div>
    <div className="space-y-1">
      <label className="text-[10px] tracking-widest uppercase text-slate-400">Mensaje</label>
      <textarea required rows={4} placeholder="Describa brevemente su situación..." className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all resize-none"></textarea>
    </div>
    <button type="submit" className="mt-2 w-full bg-amber-500 text-slate-950 font-semibold uppercase tracking-widest text-sm py-4 hover:bg-amber-400 transition-colors rounded-sm cursor-pointer">
      Enviar Consulta →
    </button>
  </form>
</motion.div>

        {/* Columna Derecha: Información y Mapa */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h3 className="font-serif text-2xl font-light text-white">
            Estamos aquí para <em className="text-amber-500 italic">ayudarle</em>
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-4 border border-white/5 bg-white/[0.02] rounded hover:border-amber-500/20 hover:bg-amber-500/5 transition-colors">
              <div className="w-10 h-10 rounded-full border border-amber-500/20 bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-500">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-[11px] tracking-widest uppercase text-amber-500 mb-1">Dirección</h4>
                <p className="text-sm text-slate-300">Av. Amazonas N24-250, piso 8, Quito</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-white/5 bg-white/[0.02] rounded hover:border-amber-500/20 hover:bg-amber-500/5 transition-colors">
              <div className="w-10 h-10 rounded-full border border-amber-500/20 bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-500">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-[11px] tracking-widest uppercase text-amber-500 mb-1">Teléfono</h4>
                <p className="text-sm text-slate-300">+593 2 234-5678</p>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center gap-3 w-full py-4 border border-green-500/50 bg-green-500/10 text-green-500 text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-green-500/20 transition-colors mt-2">
            <MessageCircle size={18} /> Escribir por WhatsApp
          </button>

          {/* Caja del Mapa */}
          <div className="relative h-36 border border-white/10 rounded-sm overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center group cursor-pointer hover:border-amber-500/30 transition-colors">
            {/* Patrón de cuadrícula de fondo */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#c9a84c 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 text-3xl mb-2"
            >
              📍
            </motion.div>
            <span className="relative z-10 text-xs text-slate-400 group-hover:text-amber-500 transition-colors">
              Ver en Google Maps →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};