'use client';
import { Users, AlertCircle } from 'lucide-react';

const dummyLeads = [
  { id: 1, date: '17 Jun 2026', name: 'Carlos Jiménez', area: 'Derecho Civil', status: 'Nuevo' },
  { id: 2, date: '16 Jun 2026', name: 'María Fernanda Ruiz', area: 'Derecho Empresarial', status: 'Contactado' },
  { id: 3, date: '15 Jun 2026', name: 'Constructora Atlas', area: 'Consultoría Legal', status: 'En Proceso' },
];

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-serif font-light text-white mb-2">Panel de Control</h1>
        <p className="text-sm text-slate-400">Bienvenido. Aquí tiene un resumen de la actividad de su firma en la web.</p>
      </header>

      {/* Alerta de "Modo Demo" */}
      <div className="flex items-center gap-3 p-4 mb-8 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-sm">
        <AlertCircle size={18} />
        <p><strong>Modo Demostración:</strong> El panel actual contiene datos simulados. Las funciones de guardado estarán disponibles en la Fase 2 del proyecto.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-slate-950 border border-amber-500/10 rounded">
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-2">Nuevas Consultas</div>
          <div className="text-3xl font-serif text-amber-500">14</div>
        </div>
        <div className="p-6 bg-slate-950 border border-amber-500/10 rounded">
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-2">Clics en WhatsApp</div>
          <div className="text-3xl font-serif text-green-500">32</div>
        </div>
        <div className="p-6 bg-slate-950 border border-amber-500/10 rounded">
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-2">Visitas este mes</div>
          <div className="text-3xl font-serif text-white">1,240</div>
        </div>
      </div>

      {/* Tabla de Contactos Recientes */}
      <div className="bg-slate-950 border border-white/5 rounded overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <Users size={18} className="text-amber-500" /> Consultas Recientes
          </h2>
          <button className="text-xs text-amber-500 hover:text-amber-400 uppercase tracking-widest transition-colors">
            Ver todas →
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.02] text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Fecha</th>
                <th className="px-6 py-4 font-medium">Nombre / Empresa</th>
                <th className="px-6 py-4 font-medium">Área</th>
                <th className="px-6 py-4 font-medium">Estado</th>
                <th className="px-6 py-4 text-right font-medium">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {dummyLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-slate-400">{lead.date}</td>
                  <td className="px-6 py-4 font-medium">{lead.name}</td>
                  <td className="px-6 py-4 text-slate-400">{lead.area}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      lead.status === 'Nuevo' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                      lead.status === 'Contactado' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                      'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => alert("Funcionalidad en desarrollo (Fase 2)")}
                      className="text-amber-500 hover:text-amber-400 text-xs uppercase tracking-widest"
                    >
                      Ver detalle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}