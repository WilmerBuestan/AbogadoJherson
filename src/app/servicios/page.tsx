import { Metadata } from 'next';
import { PublicLayout } from '@/components/templates/PublicLayout';
import { PageHeader } from '@/components/molecules/PageHeader';
import { Services } from '@/components/organisms/Services';

export const metadata: Metadata = {
  title: 'Servicios Legales | Espinos Abogados',
  description:
    'Áreas de práctica jurídica: Derecho Civil, Penal, Empresarial, Laboral, Familiar y Consultoría Legal. Haga clic en cada servicio para conocer los detalles.',
};

export default function ServiciosPage() {
  return (
    <PublicLayout>
      <PageHeader
        tag="Áreas de práctica"
        title="Expertos en cada"
        emphasis="rama del derecho"
        subtitle="Seleccione un área para conocer los tipos de casos que atendemos y cómo podemos ayudarle."
      />
      <Services />
    </PublicLayout>
  );
}
