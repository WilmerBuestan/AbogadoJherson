import { Scale, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/casos", label: "Casos de éxito" },
  { href: "/equipo", label: "Nuestro equipo" },
  { href: "/contacto", label: "Contacto" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#1C2B4A] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Columna 1: Logo + descripción */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 border border-[#C9A84C]/40 rounded-full text-[#C9A84C]">
                <Scale size={18} />
              </div>
              <span className="font-serif text-xl text-white font-semibold">
                Espinos <span className="font-light text-gray-300">Abogados</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consorcio jurídico con más de 15 años de experiencia en Ecuador.
              Defendemos sus derechos con rigor, ética y compromiso en cada caso.
            </p>
            <div className="w-10 h-[1px] bg-[#C9A84C]/50 mt-6" />
            <p className="text-gray-500 text-xs mt-4 tracking-widest uppercase">
              Est. 2008 · Quito, Ecuador
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Av. Amazonas N24-250, piso 8<br />Quito, Ecuador
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm text-gray-400">+593 2 234-5678</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  info@espinosabogados.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 tracking-widest uppercase">
            © {new Date().getFullYear()} Espinos Abogados · Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors tracking-widest uppercase"
            >
              Privacidad
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors tracking-widest uppercase"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
