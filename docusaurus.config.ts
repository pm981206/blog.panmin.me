import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Pan Min",
  favicon: "img/favicon.ico",
  url: "https://blog.panmin.me",
  baseUrl: "/",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  presets: [
    [
      "classic",
      {
        docs: false, // disable the docs plugin
        blog: {
          routeBasePath: "/", // Serve the blog at the site's root
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "博客",
          to: "/",
          position: "right",
        },
        {
          label: "项目",
          to: "/project",
          position: "right",
        },
        {
          label: "关于",
          to: "/about",
          position: "right",
        },
        {
          href: "https://github.com/pm981206",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          label: "哔哩哔哩",
          href: "https://www.bilibili.com/",
        },
        {
          label: "知乎",
          href: "https://www.zhihu.com/",
        },
        {
          label: "微博",
          href: "https://weibo.com/",
        },
        {
          label: "抖音",
          href: "https://www.douyin.com/",
        },
        {
          label: "Youtube",
          href: "https://youtube.com/",
        },
        {
          label: "Discord",
          href: "https://discordapp.com/invite/docusaurus",
        },
        {
          label: "Twitter",
          href: "https://twitter.com/docusaurus",
        },
        {
          label: "Instagram",
          href: "https://instagram.com/pm981206",
        },
        {
          label: "GitHub",
          href: "https://github.com/pm981206",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pan Min, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
