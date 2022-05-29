const math = require("remark-math");
const katex = require("rehype-katex");
const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],

  // Before we have validation, we have to provide everything
  /** @type {import("@docusaurus/theme-common").ThemeConfig} */
  themeConfig: {
    docs: {
      versionPersistence: "localStorage",
    },
  },

  plugins: [
    [
      "content-docs",
      /** @type {import("@docusaurus/plugin-content-docs").Options} */
      ({
        // routeBasePath: '/',
        path: "docs",
        sidebarPath: "sidebars.js",
        // sidebarCollapsible: false,
        // sidebarCollapsed: true,
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
        // routeBasePath: '/',
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
