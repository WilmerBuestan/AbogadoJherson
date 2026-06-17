export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  specialty: string;
  linkedinUrl?: string;
  email?: string;
}

export const teamData: TeamMember[] = [
  {
    id: '1',
    initials: 'RV',
    name: 'Dr. Roberto Vargas',
    role: 'Socio Fundador',
    specialty: 'Civil · Familiar · 20 años de ejercicio profesional en Ecuador.',
  },
  {
    id: '2',
    initials: 'LM',
    name: 'Ab. Lucía Méndez',
    role: 'Socia',
    specialty: 'Empresarial · Compliance · Especialista en derecho mercantil.',
  },
  {
    id: '3',
    initials: 'CP',
    name: 'Dr. Carlos Peña',
    role: 'Abogado Senior',
    specialty: 'Derecho Penal · Litigación y defensa estratégica.',
  },
  {
    id: '4',
    initials: 'AT',
    name: 'Ab. Andrea Torres',
    role: 'Abogada',
    specialty: 'Laboral · Derechos humanos · Negociación colectiva.',
  },
];