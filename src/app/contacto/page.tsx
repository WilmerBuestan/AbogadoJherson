import { Metadata } from 'next';
import { PublicLayout } from '@/components/templates/PublicLayout';
import { PageHeader } from '@/components/molecules/PageHeader';
import { Contact } from '@/components/organisms/Contact';

export const metadata: Metadata = {
  title: 'Contacto | Espinos Abogados',
  description:
    'Cuéntenos su caso. Nuestros abogados especialistas le responderán dentro de 24 horas. Primera consulta gratuita.',
};

export default function ContactoPage() {
  return (
    <PublicLayout>
      <PageHeader
        tag="Hablemos"
        title="Cuéntenos su"
        emphasis="caso"
        subtitle="Complete el formulario o escríbanos directamente. La primera consulta es completamente gratuita."
      />
      <Contact />
    </PublicLayout>
  );
}
