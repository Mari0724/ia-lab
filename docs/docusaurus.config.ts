import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IA Lab',
  tagline: 'Laboratorio de desarrollo y arquitectura de software',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ⚠️ IMPORTANTE para GitHub Pages
  url: 'https://Mari0724.github.io',
  baseUrl: '/ia-lab/',

  organizationName: 'Mari0724',
  projectName: 'ia-lab',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        // ❌ ELIMINAMOS BLOG
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'IA Lab',
      logo: {
        alt: 'IA Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/projects/overview',
          label: 'Proyectos',
          position: 'left',
        },
        {
          to: '/docs/tutorials/accounting-service',
          label: 'Tutoriales',
          position: 'left',
        },
        {
          href: 'https://github.com/Mari0724/ia-lab',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/', // 👈 pon tu perfil real
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://www.instagram.com/', // 👈 opcional
          label: 'Instagram',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Redes',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Mari0724',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} IA Lab`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;