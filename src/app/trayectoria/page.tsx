import { Metadata } from 'next';
import { PublicLayout } from '@/components/templates/PublicLayout';
import { PageHeader } from '@/components/molecules/PageHeader';
import { Trayectoria } from '@/components/organisms/Trayectoria';

export const metadata: Metadata = {
  title: 'Nuestra Trayectoria | Espinos Abogados',
  description:
    'Más de 15 años de historia jurídica en Ecuador. Conoce los hitos más importantes de Espinos Abogados desde su fundación en 2008.',
};

export default function TrayectoriaPage() {
  return (
    <PublicLayout>
      <PageHeader
        tag="Nuestra historia"
        title="Una trayectoria de"
        emphasis="excelencia"
        subtitle="Desde 2008 construimos un legado de rigor jurídico, compromiso ético y resultados comprobados."
      />
      <Trayectoria />
    </PublicLayout>
  );
}
