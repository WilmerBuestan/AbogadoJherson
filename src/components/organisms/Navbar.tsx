"use client";
import { useState, useEffect } from "react";
import { Scale, Menu, X, User } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 text-amber-500 font-serif text-2xl font-semibold">
          <div className="p-2 border border-amber-500 rounded-full">
            <Scale size={20} />
          </div>
          <span>Jherson</span>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-slate-300 items-center">
          <a
            href="#servicios"
            className="hover:text-amber-500 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#trayectoria"
            className="hover:text-amber-500 transition-colors"
          >
            Trayectoria
          </a>
          <a href="#equipo" className="hover:text-amber-500 transition-colors">
            Equipo
          </a>
          <a
            href="#contacto"
            className="hover:text-amber-500 transition-colors"
          >
            Contacto
          </a>

          {/* Separador visual */}
          <div className="w-[1px] h-4 bg-white/20"></div>

          {/* Botón de Iniciar Sesión (Admin) */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-amber-500/70 hover:text-amber-500 transition-colors font-medium"
          >
            <User size={16} />
            <span className="text-xs">INICIAR SESIÓN</span>
          </Link>
        </div>

        {/* CTA Desktop */}
        <a
          href="#contacto"
          className="hidden md:block px-6 py-2 border border-amber-500 text-amber-500 text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 text-center cursor-pointer"
        >
          Consulta Gratuita
        </a>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden text-amber-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Despliegue del Menú Móvil */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-amber-500/20 py-6 px-6 flex flex-col gap-6 shadow-2xl">
          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-300 hover:text-amber-500"
          >
            Servicios
          </a>
          <a
            href="#trayectoria"
            onClick={() => setIsOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-300 hover:text-amber-500"
          >
            Trayectoria
          </a>
          <a
            href="#equipo"
            onClick={() => setIsOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-300 hover:text-amber-500"
          >
            Equipo
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-300 hover:text-amber-500"
          >
            Contacto
          </a>

          {/* Enlace móvil para Login */}
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-sm uppercase tracking-widest text-amber-500/70 hover:text-amber-500 border-t border-white/10 pt-6 mt-2"
          >
            <User size={18} />
            Iniciar Sesión
          </Link>

          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-3 border border-amber-500 text-amber-500 text-sm uppercase tracking-widest text-center"
          >
            Consulta Gratuita
          </a>
        </div>
      )}
    </nav>
  );
};
