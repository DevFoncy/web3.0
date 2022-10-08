import { pathServer } from '../../../lib/shared/constants/Strings';

export const SOCIAL_NETWORK = [
  {
    id: 3,
    name: 'Facebook',
    src: `${pathServer.PATH_ICONS}ic_facebook-circle.svg`,
    srcHover: `${pathServer.PATH_ICONS}ic_facebook-circle-hover.svg`,
    url: 'https://www.facebook.com/PizzaPeru.pe/',
  },
  // {
  //   id: 1,
  //   name: 'Linkedin',
  //   src: `${pathServer.PATH_ICONS  }ic_linkedin-circle.svg`,
  //   srcHover: `${pathServer.PATH_ICONS}ic_linkedin-circle-hover.svg`,
  //   url: '',
  // },
  {
    id: 2,
    name: 'Instagram',
    src: `${pathServer.PATH_ICONS}ic_instagram-circle.svg`,
    srcHover: `${pathServer.PATH_ICONS}ic_instagram-circle-hover.svg`,
    url: 'https://www.instagram.com/pizzaperu.pe/?hl=en',
  },
];

export const PAGE_OPTIONS = [
  { id: 1, name: 'Inicio' },
  { id: 2, name: 'Talento Humano' },
  { id: 3, name: 'Servicios' },
  { id: 4, name: 'Noticias' },
  { id: 5, name: 'Nosotros' },
  { id: 6, name: 'Unete' },
];
