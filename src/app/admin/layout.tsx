import { AdminSidebar } from '@/components/organisms/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden">
        {/* Aquí se renderizarán las páginas internas del admin */}
        {children}
      </main>
    </div>
  );
}