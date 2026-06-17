"use client";
import { Scale, Users, FileText, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AdminSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: <Scale size={18} />, path: "/admin" },
    {
      name: "Contactos (Leads)",
      icon: <Users size={18} />,
      path: "/admin/leads",
    },
    { name: "Casos Web", icon: <FileText size={18} />, path: "/admin/casos" },
    {
      name: "Configuración",
      icon: <Settings size={18} />,
      path: "/admin/configuracion",
    },
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-amber-500/10 min-h-screen flex flex-col">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-2 text-amber-500 font-serif text-xl">
          <Scale size={20} />
          <span>Jherson Admin</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded text-sm transition-colors ${
              pathname === item.path
                ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded text-sm text-red-400 hover:bg-red-500/10 transition-colors">
          <LogOut size={18} />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};
