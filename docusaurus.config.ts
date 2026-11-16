import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ADLC Factory',
  tagline: 'Tài liệu hệ thống ADLC — điều phối · harness · sandbox · kiểm chứng',
  favicon: 'img/favicon.ico',

  // Docusaurus 3.10 (future.v4) không tự quét thư mục src/clientModules —
  // phải khai báo tường minh tại đây.
  clientModules: [
    './src/clientModules/d3TransitionPatch.ts',
    './src/clientModules/hideBenignResizeObserverOverlay.ts',
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://vanguard-lint.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vanguard-factory/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vanguard-lint', // Usually your GitHub org/user name.
  projectName: 'vanguard-factory', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'adlc-launch',
      content:
        'Kiến trúc 4 tầng của ADLC Factory đã có tài liệu đầy đủ — <a href="/vanguard-factory/docs/architecture/tong-quan-4-tang">đọc ngay →</a>',
      backgroundColor: '#0a0a0b',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'ADLC Factory',
      logo: {
        alt: 'ADLC Factory logo',
        src: 'img/logo-vanguard.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tài liệu',
        },
        {
          type: 'dropdown',
          label: 'Kiến trúc',
          position: 'left',
          items: [
            {label: 'Tổng quan 4 tầng', to: '/docs/architecture/tong-quan-4-tang'},
            {label: 'Vòng đời 7 trạm', to: '/docs/fundamentals/vong-doi-7-tram'},
            {label: 'Tầng 4 — Sandbox', to: '/docs/architecture/tang-4-sandbox/tong-quan'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Vận hành',
          position: 'left',
          items: [
            {label: 'Chạy hệ thống lần đầu', to: '/docs/user-guides/dung-he-thong-lan-dau'},
            {label: 'API REST', to: '/docs/reference/api-rest'},
            {label: 'MCP Tools', to: '/docs/reference/mcp-tools'},
            {label: 'Thuật ngữ', to: '/docs/reference/thuat-ngu'},
          ],
        },
        {
          type: 'html',
          position: 'right',
          value: '<a class="btn btn--primary" href="/vanguard-factory/docs/">Bắt đầu</a>',
        },
        {
          type: 'html',
          position: 'right',
          value:
            '<a class="btn btn--ghost" href="https://github.com/vanguard-lint/vanguard-factory" target="_blank" rel="noopener noreferrer">GitHub</a>',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'ADLC Factory logo',
        src: 'img/logo-vanguard.svg',
        width: 32,
        height: 32,
      },
      links: [
        {
          title: 'Nền tảng',
          items: [
            {label: 'Bài toán', to: '/docs/fundamentals/bai-toan'},
            {label: 'Triết lý', to: '/docs/fundamentals/triet-ly'},
            {label: 'Vòng đời 7 trạm', to: '/docs/fundamentals/vong-doi-7-tram'},
            {label: 'Tổng quan 4 tầng', to: '/docs/architecture/tong-quan-4-tang'},
          ],
        },
        {
          title: 'Vận hành',
          items: [
            {label: 'Chạy hệ thống lần đầu', to: '/docs/user-guides/dung-he-thong-lan-dau'},
            {label: 'Giám sát & cảnh báo', to: '/docs/admin-operations/monitoring-canh-bao'},
            {label: 'Runbook sự cố', to: '/docs/admin-operations/runbook-su-co'},
          ],
        },
        {
          title: 'Tra cứu',
          items: [
            {label: 'API REST', to: '/docs/reference/api-rest'},
            {label: 'MCP Tools', to: '/docs/reference/mcp-tools'},
            {label: 'Thuật ngữ', to: '/docs/reference/thuat-ngu'},
            {label: 'FAQ', to: '/docs/reference/faq'},
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vanguard-lint/vanguard-factory',
            },
            {label: 'Đóng góp tài liệu', to: '/docs/developer-docs/dong-gop'},
            {label: 'Blog', to: '/blog'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ADLC Factory.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
