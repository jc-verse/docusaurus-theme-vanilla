const math = require("remark-math");
const katex = require("rehype-katex");
const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "docusaurus-theme-vanilla",
  url: "https://jc-verse.github.io",
  baseUrl: "/docusaurus-theme-vanilla/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  stylesheets: [
    {
      href: "/docusaurus-theme-vanilla/katex/katex.min.css",
      type: "text/css",
    },
  ],

  // Before we have validation, we have to provide everything
  /** @type {import("@docusaurus/theme-common").ThemeConfig} */
  themeConfig: {
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  },

  plugins: [
    [
      "content-docs",
      /** @type {import("@docusaurus/plugin-content-docs").Options} */
      ({
        path: "docs",
        sidebarPath: "sidebars.js",
        editUrl: ({ locale, docPath }) => {
          if (locale !== "en")
            return `https://crowdin.com/project/docusaurus-v2/${locale}`;

          // We want users to submit doc updates to the upstream/next version!
          // Otherwise we risk losing the update on the next release.
          const nextVersionDocsDirPath = "docs";
          return `https://github.com/facebook/docusaurus/edit/main/website/${nextVersionDocsDirPath}/${docPath}`;
        },
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        remarkPlugins: [math, [npm2yarn, { sync: true }]],
        rehypePlugins: [katex],
        versions: {
          current: {
            label: `2.0.0-beta.22 🚧`,
          },
        },
      }),
    ],
    [
      "content-blog",
      /** @type {import("@docusaurus/plugin-content-blog").Options} */
      ({
        path: "blog",
        editUrl: ({ locale, blogDirPath, blogPath }) => {
          if (locale !== "en")
            return `https://crowdin.com/project/docusaurus-v2/${locale}`;
          return `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`;
        },
        postsPerPage: 5,
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
        },
        blogSidebarCount: "ALL",
        blogSidebarTitle: "All our posts",
      }),
    ],
    "content-pages",
    "ideal-image",
  ],
  themes: [require.resolve("./theme/index.js")],
};

module.exports = config;
