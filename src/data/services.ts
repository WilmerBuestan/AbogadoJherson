export interface ServiceItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  { id: '1', number: '01', icon: '⚖', title: 'Derecho Civil', description: 'Contratos, herencias, obligaciones y propiedad inmueble.' },
  { id: '2', number: '02', icon: '🏛', title: 'Derecho Penal', description: 'Defensa en procesos penales, recursos y apelaciones.' },
  { id: '3', number: '03', icon: '📊', title: 'Derecho Empresarial', description: 'Constitución, fusiones, contratos mercantiles y compliance.' },
  { id: '4', number: '04', icon: '👷', title: 'Derecho Laboral', description: 'Despidos, liquidaciones, acoso laboral y negociación colectiva.' },
  { id: '5', number: '05', icon: '👨‍👩‍👧', title: 'Derecho Familiar', description: 'Divorcios, custodia, adopción y pensiones alimenticias.' },
  { id: '6', number: '06', icon: '📜', title: 'Consultoría Legal', description: 'Asesoría preventiva y revisión de documentos legales.' },
];