import { NavigationItem } from '../types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    title: 'Writings',
    items: [
      { title: 'Analytical Psychology', href: '/writings/psychology' },
      { title: 'Philosophy', href: '/writings/philosophy' },
      { title: 'Linguistics', href: '/writings/linguistics' },
      { title: 'AI', href: '/writings/ai' },
      { title: 'Future Perspectives', href: '/writings/future' },
      { title: 'Personal Stories', href: '/writings/personal' },
    ],
  },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Articles', href: '/articles' },
  { title: 'Digital Art', href: '/art' },
  { title: 'Valuable Content', href: '/content' },
  { title: 'About Me', href: '/about' },
];

export const navigationLinks = [
  { label: 'Writings', href: '/writings' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Articles', href: '/articles' },
  { label: 'Digital Art', href: '/art' },
  { label: 'Valuable Content', href: '/content' },
  { label: 'About Me', href: '/about' }
];