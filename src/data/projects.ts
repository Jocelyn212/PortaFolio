export type Project = {
  title: string;
  description: string;
  image: string;
  url?: string;
  stack: string[];
  status?: string;
};

export const featuredProjects: Project[] = [
  {
    title: 'LaboratorioJCTech',
    description: 'Plataforma Full Stack privada que centraliza gestión, análisis e infraestructura. Automatiza procesos e integra herramientas de inteligencia artificial.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789878905/Imagenes%20para%20porfolio/Laboratorio.png',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    status: 'Privado · En desarrollo',
  },
  {
    title: 'JCTechStudio Tools',
    description: 'Herramienta de auditoría web basada en Lighthouse. Analiza móvil y desktop, organiza métricas de calidad y genera informes con apoyo de IA.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880392/Imagenes%20para%20porfolio/tools.png',
    url: 'https://tools.jctechstudio.es',
    stack: ['Astro', 'React', 'Lighthouse', 'IA'],
    status: 'Producto digital',
  },
];

export const clientProjects: Project[] = [
  {
    title: 'Rodar y Rodar',
    description: 'Web oficial de la productora audiovisual Rodar y Rodar. Organiza su catálogo, servicios e información corporativa y está desplegada en producción.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880185/Imagenes%20para%20porfolio/rodaryrodar.png',
    url: 'https://www.rodaryrodar.com',
    stack: ['Astro', 'Tailwind', 'Producción'],
  },
  {
    title: 'Òrbita Sallent',
    description: 'Web oficial de Òrbita Sallent. El proyecto cubre el desarrollo de la interfaz y su despliegue en producción.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880199/Imagenes%20para%20porfolio/Orbitasallent.png',
    url: 'https://orbitasallent.cat',
    stack: ['Astro', 'Despliegue'],
  },
  {
    title: 'Obres i Serveis Mig Mon',
    description: 'Web corporativa para una empresa de obras y servicios. Estructura sus servicios, trabajos y vías de contacto para consulta directa.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880204/Imagenes%20para%20porfolio/obresiserveismigmon.png',
    url: 'https://www.obresiserveismigmon.es',
    stack: ['Astro', 'Tailwind', 'Producción'],
  },
  {
    title: 'JCTechStudio',
    description: 'Web de JCTechStudio para presentar servicios de desarrollo y herramientas digitales. Centraliza la oferta técnica y los canales de contacto.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880391/Imagenes%20para%20porfolio/jctechstudio.png',
    url: 'https://jctechstudio.es',
    stack: ['Desarrollo web', 'Soluciones digitales'],
  },
];

export const otherProjects = [
  { title: 'Alex Main', description: 'Web desarrollada durante prácticas con Astro y Tailwind.', stack: 'Astro + Tailwind', url: 'https://alexmain.vercel.app' },
  { title: 'Content Studio', description: 'Producto digital desarrollado de forma individual durante un hackathon.', stack: 'Producto digital', url: 'https://content-studio-beige.vercel.app' },
  { title: 'Memory', description: 'Juego de memoria personal desarrollado con Vue.', stack: 'Vue', url: 'https://memory-eight-brown.vercel.app' },
];
