import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Code AI Playbook',
  tagline: 'Intelligent Development: Performance Optimization, Security Enhancement, and Code Quality with GitHub Agent, GitHub Copilot, GitHub Code Agent, and Azure AI Foundry',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'github', 
  projectName: 'code-ai-playbook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit links removed as requested
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Edit links removed as requested
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Code AI Playbook',
      logo: {
        alt: 'Code AI Playbook Logo',
        src: 'img/custom-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Workshops',
        },
        {
          href: 'https://github.com/paulasilvatech/Code-Optimization-AI-Platform-Playbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Prerequisites',
              to: '/docs/prerequisites',
            },
            {
              label: 'Setup',
              to: '/docs/setup',
            },
          ],
        },
        {
          title: 'Modules',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/module1',
            },
            {
              label: 'Security and Governance',
              to: '/docs/security-integration',
            },
            {
              label: 'Metrics and Monitoring',
              to: '/docs/metrics',
            },
            {
              label: 'Implementation Roadmap',
              to: '/docs/implementation-roadmap',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/paulasilvatech/Code-Optimization-AI-Platform-Playbook',
            },
            {
              label: 'Azure Documentation',
              href: 'https://learn.microsoft.com/en-us/azure/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Code AI Playbook.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
