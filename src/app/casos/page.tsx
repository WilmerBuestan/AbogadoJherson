import { Metadata } from 'next';
import { PublicLayout } from '@/components/templates/PublicLayout';
import { PageHeader } from '@/components/molecules/PageHeader';
import { SuccessCases } from '@/components/organisms/SuccessCases';

export const metadata: Metadata = {
  title: 'Casos de Éxito | Espinos Abogados',
  description:
    'Resultados reales en derecho civil, penal, laboral, empresarial y familiar. Conozca algunos de los casos más relevantes que hemos representado exitosamente.',
};

export default function CasosPage() {
  return (
    <PublicLayout>
      <PageHeader
        tag="Resultados probados"
        title="Casos de"
        emphasis="éxito"
        subtitle="Una selección de casos representativos que evidencian nuestra capacidad técnica y compromiso con el resultado."
      />
      <SuccessCases />
    </PublicLayout>
  );
}
