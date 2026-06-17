'use client';
import { Scale } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Acceso autorizado', {
      description: 'Bienvenido al panel de administración.',
    });
    router.push('/admin'); // Redirige al dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060911] text-white selection:bg-amber-500/30 px-6 relative overflow-hidden">
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 border border-amber-500/10 bg-slate-950/50 backdrop-blur-md p-8 rounded-lg shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 border border-amber-500/30 rounded-full text-amber-500 mb-4 bg-amber-500/5">
            <Scale size={28} />
          </div>
          <h1 className="font-serif text-2xl font-light text-white text-center">
            Portal de <em className="text-amber-500 italic">Administración</em>
          </h1>
          <p className="text-xs tracking-widest uppercase text-slate-400 mt-2">Acceso Restringido</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="space-y-1">
            <label className="text-[10px] tracking-widest uppercase text-slate-400">Usuario</label>
            <input required type="text" placeholder="admin@lexius.com" defaultValue="admin@lexius.com" className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] tracking-widest uppercase text-slate-400">Contraseña</label>
            <input required type="password" placeholder="••••••••" defaultValue="demo123" className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all" />
          </div>
          
          <button type="submit" className="mt-4 w-full bg-amber-500 text-slate-950 font-semibold uppercase tracking-widest text-sm py-4 hover:bg-amber-400 transition-colors rounded-sm cursor-pointer">
            Ingresar al Sistema
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={() => router.push('/')} className="text-xs text-slate-500 hover:text-amber-500 transition-colors uppercase tracking-widest">
            ← Volver a la página principal
          </button>
        </div>
      </div>
    </div>
  );
}