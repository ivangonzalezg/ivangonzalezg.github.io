
import { Project, ValueProp, TechCategory } from './types';

interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    h1: string;
    h1_highlight: string;
    p: string;
    btn_primary: string;
    btn_secondary: string;
  };
  valueProps: ValueProp[];
  projects: {
    section_label: string;
    section_title: string;
    items: Project[];
  };
  techStack: {
    title: string;
    title_highlight: string;
    description: string;
    categories: TechCategory[];
  };
  footer: {
    title: string;
    subtitle: string;
    direct_email: string;
    social_networks: string;
    form_title: string;
    label_name: string;
    label_email: string;
    label_message: string;
    btn_send: string;
    btn_sending: string;
    btn_sent: string;
    copyright: string;
    credits: string;
    tech: string;
  };
}

const techStackData: TechCategory[] = [
  {
    category: "Mobile & Native",
    skills: ["React Native", "Expo", "Android (Java/Kotlin)", "iOS (Swift)", "Native Modules"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & Cloud",
    skills: ["Node.js", "Django", "Supabase (PostgreSQL)", "Firebase", "Strapi CMS"]
  }
];

export const content: Record<'en' | 'es', Translation> = {
  en: {
    meta: {
      title: "Ivan Gonzalez | Senior Full Stack Developer",
      description: "Scalable Software Architecture & Native Solutions. Specialized in React Native, Applied AI, and High-Performance Backends."
    },
    nav: {
      work: "Work",
      about: "Stack",
      contact: "Contact"
    },
    hero: {
      h1: "Scalable Software Architecture & ",
      h1_highlight: "Native Solutions.",
      p: "Full Stack Developer with 6+ years of experience building robust digital ecosystems. Specialized in React Native with Native Modules, Applied AI, and High-Performance Backends.",
      btn_primary: "View Selected Work",
      btn_secondary: "Available for Contracts"
    },
    valueProps: [
      {
        title: "Robustness & Scalability",
        description: "Code designed to grow. Architectures built to withstand high concurrency and future expansion without refactoring.",
        icon: "layers"
      },
      {
        title: "Hybrid + Native Mastery",
        description: "The best of both worlds. Agile development with Expo/React Native, powered by custom Native Modules (Java/Kotlin/Swift) when performance demands it.",
        icon: "smartphone"
      },
      {
        title: "Data & AI Integration",
        description: "Advanced backend ecosystems. Seamless integrations with Supabase, Strapi, and Firebase, featuring Vector Memory and AI Agents implementation.",
        icon: "cpu"
      }
    ],
    projects: {
      section_label: "Selected Work",
      section_title: "Engineering Case Studies",
      items: [
        {
          id: "bussride",
          title: "BussRide",
          tags: ["React Native", "Java Modules", "Firebase", "BLE/RFID"],
          description: "Comprehensive corporate logistics platform used by giants like MercadoLibre and AT&T. It orchestrates massive personnel transport via two native apps and a resilient background GPS tracking engine. Key features include offline boarding validation (BLE/RFID) to eliminate fraud and real-time fleet synchronization.",
          logoUrl: "/assets/images/bussride.webp",
          links: [
            { type: 'app-store', url: 'https://apps.apple.com/us/app/bussride/id6448958853', label: 'User App' },
            { type: 'play-store', url: 'https://play.google.com/store/apps/details?id=com.custint.bussride', label: 'User App' },
            { type: 'app-store', url: 'https://apps.apple.com/hn/app/bussride-driver/id6470038567', label: 'Driver App' },
            { type: 'play-store', url: 'https://play.google.com/store/apps/details?id=com.custint.bussrideconductor', label: 'Driver App' },
          ]
        },
        {
          id: "gloflow",
          title: "Gloflow",
          tags: ["Expo", "AI Agents", "Supabase", "Vector Embeddings"],
          description: "A 'Second Brain' for personal wellness. Unlike static trackers, Gloflow uses AI Agents and Vector Memory to learn from your daily habits, injuries, and routines. It provides hyper-personalized recovery plans and health insights that adapt over time, preventing burnout before it happens.",
          logoUrl: "/assets/images/gloflow.webp",
          links: [
            { type: 'app-store', url: 'https://apps.apple.com/us/app/gloflow/id6749468474' },
            { type: 'play-store', url: 'https://play.google.com/store/apps/details?id=com.gloflow.app' },
          ]
        },
        {
          id: "autotur",
          title: "Autotur",
          tags: ["React", "Strapi", "Google Maps API", "Complex Logic"],
          description: "Enterprise quoting engine for ADO (Mexico's largest bus fleet). It digitalizes the charter process, reducing quote generation time from days to seconds. The system dynamically optimizes operational costs—tolls, fuel, driver shifts—using real-time geospatial algorithms.",
          logoUrl: "/assets/images/autotur.webp",
          links: [
            { type: 'web', url: 'https://autotur.com.mx', label: 'Website' },
            { type: 'web', url: 'https://agencias.autotur.com.mx', label: 'Agency Portal' },
          ]
        }
      ]
    },
    techStack: {
      title: "Technical ",
      title_highlight: "Arsenal",
      description: "I don't just use frameworks; I understand their internals. My stack is chosen for stability, performance, and long-term maintainability.",
      categories: techStackData
    },
    footer: {
      title: "Ready to scale your product?",
      subtitle: "I am currently open to select freelance projects and technical consulting. If you need robust engineering, let's talk.",
      direct_email: "Direct Email",
      social_networks: "Social Networks",
      form_title: "Send a Message",
      label_name: "Name",
      label_email: "Email",
      label_message: "Project Details",
      btn_send: "Send Message",
      btn_sending: "Sending...",
      btn_sent: "Message Sent",
      copyright: "Ivan Gonzalez. All rights reserved.",
      credits: "Designed with Swiss Precision",
      tech: "Built with React & Tailwind"
    }
  },
  es: {
    meta: {
      title: "Ivan Gonzalez | Desarrollador Senior Full Stack",
      description: "Arquitectura de Software Escalable y Soluciones Nativas. Especializado en React Native, IA Aplicada y Backends de Alto Rendimiento."
    },
    nav: {
      work: "Proyectos",
      about: "Stack",
      contact: "Contacto"
    },
    hero: {
      h1: "Arquitectura de Software Escalable y ",
      h1_highlight: "Soluciones Nativas.",
      p: "Desarrollador Full Stack con más de 6 años de experiencia construyendo ecosistemas digitales robustos. Especializado en React Native con Módulos Nativos, IA Aplicada y Backends de Alto Rendimiento.",
      btn_primary: "Ver Proyectos",
      btn_secondary: "Disponible para Contratos"
    },
    valueProps: [
      {
        title: "Robustez y Escalabilidad",
        description: "Código diseñado para crecer. Arquitecturas construidas para soportar alta concurrencia y futuras expansiones sin refactorización.",
        icon: "layers"
      },
      {
        title: "Maestría Híbrida + Nativa",
        description: "Lo mejor de ambos mundos. Desarrollo ágil con Expo/React Native, potenciado por Módulos Nativos personalizados (Java/Kotlin/Swift) cuando el rendimiento lo exige.",
        icon: "smartphone"
      },
      {
        title: "Integración de Datos e IA",
        description: "Ecosistemas backend avanzados. Integraciones fluidas con Supabase, Strapi y Firebase, implementando Memoria Vectorial y Agentes de IA.",
        icon: "cpu"
      }
    ],
    projects: {
      section_label: "Portafolio Selecto",
      section_title: "Casos de Estudio de Ingeniería",
      items: [
        {
          id: "bussride",
          title: "BussRide",
          tags: ["React Native", "Java Modules", "Firebase", "BLE/RFID"],
          description: "Plataforma integral de logística utilizada por corporativos como MercadoLibre y AT&T. Gestiona la operación de transporte de personal mediante dos apps nativas y un motor de tracking GPS resiliente en background. Integra validación de abordaje offline (BLE/RFID/QR) para eliminar fraudes y garantizar la seguridad operativa.",
          logoUrl: "https://play-lh.googleusercontent.com/bKaAtRPrffAWhPtb17pOvA93K4kSnAVT4zj1WwICZO-9Qgu3N1QvTf9o9YZ8VSJKTDI=w240-h480-rw",
          links: [
            { type: 'app-store', url: 'https://apps.apple.com/us/app/bussride/id6448958853', label: 'App Usuario' },
            { type: 'play-store', url: 'https://play.google.com/store/apps/details?id=com.custint.bussride', label: 'App Usuario' },
            { type: 'app-store', url: 'https://apps.apple.com/hn/app/bussride-driver/id6470038567', label: 'App Conductor' },
            { type: 'play-store', url: 'https://play.google.com/store/apps/details?id=com.custint.bussrideconductor', label: 'App Conductor' },
          ]
        },
        {
          id: "gloflow",
          title: "Gloflow",
          tags: ["Expo", "AI Agents", "Supabase", "Vector Embeddings"],
          description: "Un 'Segundo Cerebro' para tu bienestar. A diferencia de trackers estáticos, Gloflow utiliza Agentes de IA y Memoria Vectorial para aprender de tus hábitos, lesiones y rutinas diarias. Ofrece planes de recuperación y prevención hiper-personalizados que evitan el desgaste físico antes de que ocurra.",
          logoUrl: "https://play-lh.googleusercontent.com/7k4PKKiuBmvbtOXlSrgYjq_ofhhK7Upw6SPYfSjZKWWG7RTDgt_T3WLbKr4wTz0XGij7sUjOrw7RPwZ0K7i0hg=w240-h480-rw",
          links: [
            { type: 'app-store', url: 'https://apps.apple.com/us/app/gloflow/id6749468474' },
            { type: 'play-store', url: 'https://play.google.com/store/apps/details?id=com.gloflow.app' },
          ]
        },
        {
          id: "autotur",
          title: "Autotur",
          tags: ["React", "Strapi", "Google Maps API", "Lógica Compleja"],
          description: "Motor de cotización empresarial para ADO (la mayor flota de autobuses de México). Digitaliza el proceso de renta de unidades, reduciendo tiempos de respuesta de días a segundos. El sistema optimiza costos operativos (peajes, combustible, viáticos) en tiempo real mediante algoritmos geoespaciales.",
          logoUrl: "https://agencias.autotur.com.mx/favicon.ico",
          links: [
            { type: 'web', url: 'https://autotur.com.mx', label: 'Sitio Web' },
            { type: 'web', url: 'https://agencias.autotur.com.mx', label: 'Portal Agencias' },
          ]
        }
      ]
    },
    techStack: {
      title: "Arsenal ",
      title_highlight: "Técnico",
      description: "No solo uso frameworks; entiendo sus componentes internos. Mi stack es elegido por su estabilidad, rendimiento y mantenibilidad a largo plazo.",
      categories: techStackData
    },
    footer: {
      title: "¿Listo para escalar tu producto?",
      subtitle: "Actualmente estoy abierto a proyectos freelance selectos y consultoría técnica. Si necesitas ingeniería robusta, hablemos.",
      direct_email: "Email Directo",
      social_networks: "Redes Sociales",
      form_title: "Enviar Mensaje",
      label_name: "Nombre",
      label_email: "Email",
      label_message: "Detalles del Proyecto",
      btn_send: "Enviar Mensaje",
      btn_sending: "Enviando...",
      btn_sent: "Mensaje Enviado",
      copyright: "Ivan Gonzalez. Todos los derechos reservados.",
      credits: "Diseñado con Precisión Suiza",
      tech: "Construido con React y Tailwind"
    }
  }
};
