"use client";
import { useState, useEffect } from "react";
import { Scale, Menu, X, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/casos", label: "Casos" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white shadow-md border-b border-gray-100 py-3"
          : "bg-white/95 backdrop-blur-sm py-5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 border border-[#C9A84C]/50 rounded-full text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-colors">
            <Scale size={18} />
          </div>
          <span className="font-serif text-xl text-[#1C2B4A] font-semibold">
            Espinos{" "}
            <span className="font-light text-gray-500">Abogados</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-500 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors border-b-2 pb-0.5 ${
                isActive(link.href)
                  ? "text-[#1C2B4A] border-[#C9A84C] font-medium"
                  : "border-transparent hover:text-[#1C2B4A] hover:border-[#C9A84C]/40"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-[1px] h-4 bg-gray-200" />

          <Link
            href="/login"
            className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <User size={14} />
            <span>Admin</span>
          </Link>
        </div>

        {/* CTA Desktop */}
        <Link
          href="/contacto"
          className="hidden md:block px-6 py-2.5 bg-[#1C2B4A] text-white text-xs uppercase tracking-widest hover:bg-[#243660] transition-colors"
        >
          Consulta Gratuita
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1C2B4A]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-widest transition-colors ${
                isActive(link.href)
                  ? "text-[#1C2B4A] font-medium"
                  : "text-gray-500 hover:text-[#1C2B4A]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-sm uppercase tracking-widest text-gray-400 hover:text-gray-600 border-t border-gray-100 pt-5 mt-1"
          >
            <User size={16} />
            Admin
          </Link>

          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-1 px-6 py-3 bg-[#1C2B4A] text-white text-sm uppercase tracking-widest text-center"
          >
            Consulta Gratuita
          </Link>
        </div>
      )}
    </nav>
  );
};
