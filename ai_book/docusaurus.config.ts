import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Book Project',
  tagline: 'An open, structured, and authoritative body of knowledge in AI',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com', // To be updated with actual deployment URL
  baseUrl: '/',

  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'ai-book-project', // Usually your repo name.

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './book', // point directly to the book directory
          routeBasePath: '/', // Serve book chapters from the root
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          sidebarCollapsible: true,
          editUrl:
            'https://github.com/tonymark0705/hacathon_practice_1/tree/main/my-book/', // Update with actual repo
          exclude: ['history/**', 'node_modules/**', 'GEMINI.md', 'specs/**', 'blog/**', 'src/pages/markdown-page.md'], // Exclude other directories
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/', // Search all docs from the root (now only book content)
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark', // Default to dark mode
    },
    navbar: {
      title: 'AI Book Project',
      logo: {
        alt: 'AI Book Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar', // Reference the main sidebar (now only book chapters)
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/tonymark0705/hacathon_practice_1/tree/main/my-book/', // Update with actual repo
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {
              label: 'Chapters',
              to: '/chapter-01', // Link to the first chapter directly from root
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/tonymark0705/hacathon_practice_1/discussions', // Update with actual repo
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tonymark0705/hacathon_practice_1/', // Update with actual repo
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Book Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
