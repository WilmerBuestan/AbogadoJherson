export interface ServiceItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  modalDescription: string;
  cases: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    number: '01',
    icon: '⚖',
    title: 'Derecho Civil',
    description: 'Contratos, herencias, obligaciones y propiedad inmueble.',
    modalDescription:
      'Nuestra práctica civil cubre el espectro completo de las relaciones jurídicas entre particulares. Actuamos con rigor técnico en la redacción, revisión e impugnación de instrumentos legales, protegiendo el patrimonio y los derechos de nuestros clientes en cada etapa del proceso.',
    cases: [
      'Redacción y revisión de contratos de compraventa, arrendamiento y promesa',
      'Procesos sucesorios: apertura de testamentos, partición de bienes e impugnación',
      'Acciones reivindicatorias y de prescripción adquisitiva de dominio',
      'Cobro de obligaciones dinerarias y ejecución de garantías reales',
      'Nulidades e impugnaciones de actos jurídicos y escrituras públicas',
    ],
  },
  {
    id: '2',
    number: '02',
    icon: '🏛',
    title: 'Derecho Penal',
    description: 'Defensa en procesos penales, recursos y apelaciones.',
    modalDescription:
      'Brindamos una defensa técnica, estratégica y personalizada en todas las fases del proceso penal. Nuestro equipo analiza cada causa con profundidad para identificar las mejores vías procesales, garantizando el ejercicio pleno de los derechos constitucionales de nuestros defendidos.',
    cases: [
      'Defensa en investigaciones previas, instrucción fiscal y juicio oral',
      'Recursos de apelación y casación ante cortes provinciales y nacionales',
      'Delitos económicos: peculado, enriquecimiento ilícito y fraude',
      'Delitos contra la vida, integridad personal y libertad',
      'Medidas cautelares: sustitución de prisión preventiva y hábeas corpus',
    ],
  },
  {
    id: '3',
    number: '03',
    icon: '📊',
    title: 'Derecho Empresarial',
    description: 'Constitución, fusiones, contratos mercantiles y compliance.',
    modalDescription:
      'Acompañamos a empresas en cada fase de su ciclo de vida: desde la estructuración societaria hasta procesos de fusión, adquisición y liquidación. Nuestro enfoque preventivo minimiza la exposición legal y fortalece la gobernanza corporativa de su organización.',
    cases: [
      'Constitución de compañías limitadas, anónimas y sociedades por acciones simplificadas',
      'Due diligence legal en fusiones, adquisiciones y reestructuraciones societarias',
      'Negociación y redacción de contratos mercantiles internacionales',
      'Programas de compliance y gestión de riesgos legales corporativos',
      'Resolución de disputas societarias entre socios y accionistas',
    ],
  },
  {
    id: '4',
    number: '04',
    icon: '👷',
    title: 'Derecho Laboral',
    description: 'Despidos, liquidaciones, acoso laboral y negociación colectiva.',
    modalDescription:
      'Representamos tanto a empleadores como a trabajadores en el ámbito de las relaciones laborales. Nuestro enfoque busca soluciones eficientes que minimicen el conflicto y protejan los derechos de todas las partes, ya sea en sede judicial o a través de acuerdos extrajudiciales.',
    cases: [
      'Despidos intempestivos, desahucios y cálculo de liquidaciones',
      'Acoso laboral y discriminación en el trabajo: investigación y denuncia',
      'Negociación y revisión de contratos colectivos de trabajo',
      'Procedimientos ante la Inspectoría de Trabajo y el Tribunal de Conciliación',
      'Asesoría en tercerización, intermediación laboral y trabajo autónomo',
    ],
  },
  {
    id: '5',
    number: '05',
    icon: '👨‍👩‍👧',
    title: 'Derecho Familiar',
    description: 'Divorcios, custodia, adopción y pensiones alimenticias.',
    modalDescription:
      'Abordamos los asuntos de familia con la sensibilidad y discreción que merecen, sin perder de vista la defensa firme de los intereses de nuestros clientes. Priorizamos la mediación y los acuerdos consensuales, pero actuamos con contundencia cuando el litigio es inevitable.',
    cases: [
      'Divorcio por mutuo consentimiento y divorcio contencioso',
      'Tenencia, visitas y régimen de convivencia de hijos menores',
      'Fijación, revisión y ejecución de pensiones alimenticias',
      'Procesos de adopción nacional e internacional',
      'Liquidación de sociedad conyugal y bienes gananciales',
    ],
  },
  {
    id: '6',
    number: '06',
    icon: '📜',
    title: 'Consultoría Legal',
    description: 'Asesoría preventiva y revisión de documentos legales.',
    modalDescription:
      'La mejor defensa es la prevención. Nuestro servicio de consultoría ofrece análisis jurídico especializado para personas naturales y jurídicas, ayudándoles a tomar decisiones informadas antes de que surjan conflictos. Revisamos, evaluamos y optimizamos su exposición legal.',
    cases: [
      'Auditorías legales de contratos, estatutos y documentos corporativos',
      'Opiniones jurídicas (legal opinions) para transacciones e inversiones',
      'Asesoría en trámites ante organismos públicos y entidades reguladoras',
      'Revisión de cumplimiento normativo (LOSNCP, LOEI, Ley de Compañías)',
      'Acompañamiento en negociaciones complejas y procesos licitatorios',
    ],
  },
];
