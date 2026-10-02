import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: '#' },
    { text: 'Sobre mí', href: '#sobre-mi' },
    { text: 'Stack', href: '#stack' },
    { text: 'Trayectoria', href: '#evolucion' },
    { text: 'Proyectos', href: '#proyectos' },
    { text: 'Habilidades', href: '#habilidades' },
  ],
  actions: [{ text: 'Contacto', href: '#contacto' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'martinlescano.com.ar', href: getPermalink('/') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mlescano' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/martinlescano/' },
  ],
  footNote: `
    © 2026 Martín Lescano · Responsable de Área de TI
  `,
};