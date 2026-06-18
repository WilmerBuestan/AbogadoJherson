import { Metadata } from 'next';
import { PublicLayout } from '@/components/templates/PublicLayout';
import { PageHeader } from '@/components/molecules/PageHeader';
import { Team } from '@/components/organisms/Team';

export const metadata: Metadata = {
  title: 'Nuestro Equipo | Espinos Abogados',
  description:
    'Conozca a los abogados que integran Espinos Abogados: sus especialidades, trayectorias y áreas de práctica. Haga clic en cada perfil para más información.',
};

export default function EquipoPage() {
  return (
    <PublicLayout>
      <PageHeader
        tag="Nuestro equipo"
        title="Profesionales con"
        emphasis="vocación"
        subtitle="Cada miembro de nuestro equipo aporta especialización, experiencia y un compromiso genuino con la justicia."
      />
      <Team />
    </PublicLayout>
  );
}
