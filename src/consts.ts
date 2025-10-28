import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Thomas Mages',
  description: 'Serwas di Wadln.',
  href: 'https://astro-erudite.vercel.app',
  author: 'domachh',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/details',
    label: 'details',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/domaschh',
    label: 'GitHub',
  },
  {
    href: 'mailto:magesthomas@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
