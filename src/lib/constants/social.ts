import { Github, Instagram, ExternalLink } from 'lucide-react';
import type { SocialLink } from '../types/social';

export const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/arthurseerig'
  },
  {
    icon: ExternalLink,
    label: 'Threads',
    href: 'https://threads.net/@arthurseerig'
  },
  {
    icon: ExternalLink,
    label: 'X',
    href: 'https://x.com/arthurseerig'
  },
  {
    icon: ExternalLink,
    label: 'Bluesky',
    href: 'https://bsky.app/profile/arthurseerig.bsky.social'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/arthurseerig'
  },
  {
    icon: ExternalLink,
    label: 'Discord',
    href: 'https://discord.gg/arthurseerig'
  },
  {
    icon: ExternalLink,
    label: 'Data Science Portfolio',
    href: 'https://www.datascienceportfol.io/arthurseerig'
  },
  {
    icon: ExternalLink,
    label: 'Resume',
    href: '/resume.pdf'
  }
];

export const navigationLinks = [
  { label: 'Writings', href: '/writings' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Articles', href: '/articles' },
  { label: 'Digital Art', href: '/art' },
  { label: 'Valuable Content', href: '/content' },
  { label: 'About Me', href: '/about' }
];