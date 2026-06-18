export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  specialties: string[];
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
    bio: 'Fundador de la firma con más de dos décadas de experiencia en litigación civil y derecho de familia. Doctor en Jurisprudencia por la Universidad Central del Ecuador y Magíster en Derecho Civil por la PUCE. Ha representado a clientes en más de 300 procesos judiciales con una tasa de éxito superior al 85%.',
    specialties: ['Derecho Civil', 'Derecho de Familia', 'Sucesiones', 'Bienes Raíces', 'Litigación'],
    email: 'r.vargas@espinosabogados.com',
    linkedinUrl: '#',
  },
  {
    id: '2',
    initials: 'LM',
    name: 'Ab. Lucía Méndez',
    role: 'Socia',
    specialty: 'Empresarial · Compliance · Especialista en derecho mercantil.',
    bio: 'Abogada con especialización en derecho corporativo y cumplimiento normativo. Egresada con honores de la Universidad San Francisco de Quito y con un LLM en Derecho Comercial Internacional por la Universidad de Barcelona. Asesora a más de 40 empresas nacionales e internacionales en sus operaciones en Ecuador.',
    specialties: ['Derecho Corporativo', 'M&A', 'Compliance', 'Contratos Internacionales', 'Regulatorio'],
    email: 'l.mendez@espinosabogados.com',
    linkedinUrl: '#',
  },
  {
    id: '3',
    initials: 'CP',
    name: 'Dr. Carlos Peña',
    role: 'Abogado Senior',
    specialty: 'Derecho Penal · Litigación y defensa estratégica.',
    bio: 'Penalista con sólida trayectoria en la defensa de casos de alta complejidad. Egresado de la PUCE y especialista en derecho procesal penal. Ha obtenido sentencias absolutorias y sobreseimientos definitivos en casos emblemáticos a nivel nacional, incluyendo procesos por delitos económicos y contra la integridad personal.',
    specialties: ['Defensa Penal', 'Recursos y Apelaciones', 'Delitos Económicos', 'Hábeas Corpus', 'Litigación Oral'],
    email: 'c.pena@espinosabogados.com',
    linkedinUrl: '#',
  },
  {
    id: '4',
    initials: 'AT',
    name: 'Ab. Andrea Torres',
    role: 'Abogada',
    specialty: 'Laboral · Derechos humanos · Negociación colectiva.',
    bio: 'Especialista en relaciones laborales y derechos fundamentales del trabajador. Egresada de la Universidad de las Américas con Maestría en Derechos Humanos por FLACSO Ecuador. Ha asesorado procesos de negociación colectiva en sectores industriales, educativos y de servicios, logrando acuerdos beneficiosos para todas las partes.',
    specialties: ['Derecho Laboral', 'Derechos Humanos', 'Negociación Colectiva', 'Acoso Laboral', 'Seguridad Social'],
    email: 'a.torres@espinosabogados.com',
    linkedinUrl: '#',
  },
];
