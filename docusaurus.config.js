// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Xing312101's Life Notes",
  tagline: 'Life, Travel, Program, ect...',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xing312101.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xing312101', // Usually your GitHub org/user name.
  projectName: 'xing312101.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: '/', // ** this sets the homepage
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          postsPerPage: 5,
          blogSidebarTitle: 'My Lifes',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Xing312101's life notes",
        logo: {
          alt: "Xing312101's life",
          src: 'img/xing_icon.svg',
        },
        items: [
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'techniqueSidebar',
            position: 'left',
            label: 'Technique',
          },
          {
            type: 'docSidebar',
            sidebarId: 'englishSidebar',
            position: 'left',
            label: 'English',
          },
          {
            type: 'docSidebar',
            sidebarId: 'japaneseSidebar',
            position: 'left',
            label: 'Japanese',
          },
          {
            href: 'https://github.com/xing312101',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Life',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xing312101',
              },
              {
                label: 'Tags',
                href: '/tags',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Technique',
                to: '/docs/technique',
              },
              {
                label: 'English',
                to: '/docs/english',
              },
              {
                label: 'Japanese',
                to: '/docs/japanese',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/xing312101',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © 2020-${new Date().getFullYear()} Xing312101, https://github.com/xing312101`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
