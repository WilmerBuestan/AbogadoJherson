import { Scale } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-amber-500/10 bg-gradient-to-b from-transparent to-black/80 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-2 text-amber-500 font-serif text-xl">
          <Scale size={20} />
          <span>Jherson Abogados</span>
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-amber-500 transition-colors"
          >
            Política de Privacidad
          </a>
          <a
            href="#"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-amber-500 transition-colors"
          >
            Términos de Uso
          </a>
          <a
            href="#"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-amber-500 transition-colors"
          >
            Blog Jurídico
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 pt-6 text-center text-[10px] text-slate-500 uppercase tracking-widest">
        © {new Date().getFullYear()} Jherson Abogados · Todos los derechos
        reservados · Quito, Ecuador
      </div>
    </footer>
  );
};
