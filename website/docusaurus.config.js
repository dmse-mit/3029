// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '3.029',
  tagline: 'Mathematics and Computational Thinking for Materials Scientists and Engineers I',
  url: 'https://dmse-mit.github.io',
  baseUrl: '/3029/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dmse-mit', // Usually your GitHub org/user name.
  projectName: '3029', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dmse-mit/3029/edit/main/website/',
        },
        blog: {
	  path: 'announcements',
          routeBasePath: 'announcements',
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:'https://github.com/dmse-mit/3029/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '3.029 ',
        logo: {
          alt: '3.029 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notebooks',
          },
          {to: '/announcements', label: 'Announcements', position: 'left'},
          {
            href: 'https://github.com/dmse-mit/3029',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Notebooks',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communication',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dmse-mit/3029',
              },
              {
                label: 'Canvas',
                href: 'https://canvas.mit.edu/courses/13469',
              },
              {
                label: 'Slack',
                href: 'mit-3029-sp22.slack.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Announcements',
                to: '/announcements',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3.029 DMSE.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
