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
    description: 'Plataforma Full Stack privada para gestión, análisis, infraestructura, automatización e inteligencia artificial.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789878905/Imagenes%20para%20porfolio/Laboratorio.png',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    status: 'Privado · En desarrollo',
  },
  {
    title: 'JCTechStudio Tools',
    description: 'Auditoría web con Lighthouse, análisis móvil y desktop, métricas de calidad, informes y herramientas de IA.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880392/Imagenes%20para%20porfolio/tools.png',
    url: 'https://tools.jctechstudio.es',
    stack: ['Astro', 'React', 'Lighthouse', 'IA'],
    status: 'Producto digital',
  },
];

export const clientProjects: Project[] = [
  {
    title: 'Rodar y Rodar',
    description: 'Web oficial de la productora audiovisual Rodar y Rodar, actualmente en producción.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880185/Imagenes%20para%20porfolio/rodaryrodar.png',
    url: 'https://www.rodaryrodar.com',
    stack: ['Astro', 'Tailwind', 'Producción'],
  },
  {
    title: 'Òrbita Sallent',
    description: 'Web oficial actualmente en producción. Proyecto de desarrollo y despliegue.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880199/Imagenes%20para%20porfolio/Orbitasallent.png',
    url: 'https://orbitasallent.cat',
    stack: ['Astro', 'Despliegue'],
  },
  {
    title: 'Obres i Serveis Mig Mon',
    description: 'Web oficial actualmente en producción para una empresa de obras y servicios.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880204/Imagenes%20para%20porfolio/obresiserveismigmon.png',
    url: 'https://www.obresiserveismigmon.es',
    stack: ['Astro', 'Tailwind', 'Producción'],
  },
  {
    title: 'JCTechStudio',
    description: 'Proyecto propio de desarrollo web, herramientas y soluciones digitales.',
    image: 'https://res.cloudinary.com/pruebaweb/image/upload/v1789880391/Imagenes%20para%20porfolio/jctechstudio.png',
    url: 'https://jctechstudio.es',
    stack: ['Desarrollo web', 'Soluciones digitales'],
  },
];

export const otherProjects = [
  { title: 'Alex Main', description: 'Proyecto realizado durante prácticas.', stack: 'Astro + Tailwind', url: 'https://alexmain.vercel.app' },
  { title: 'Content Studio', description: 'Proyecto individual desarrollado durante un hackathon.', stack: 'Producto digital', url: 'https://content-studio-beige.vercel.app' },
  { title: 'Memory', description: 'Proyecto personal: un juego de memoria desarrollado con Vue.', stack: 'Vue', url: 'https://memory-eight-brown.vercel.app' },
];
