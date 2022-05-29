---
sidebar_position: 4
id: plugin-client-redirects
title: "📦 plugin-client-redirects"
slug: "/api/plugins/@docusaurus/plugin-client-redirects"
---

import APITable from '@site/src/components/APITable';

Docusaurus Plugin to generate **client-side redirects**.

This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript.

:::caution production only

This plugin is always inactive in development and **only active in production** because it works on the build output.

:::

:::caution

It is better to use server-side redirects whenever possible.

Before using this plugin, you should look if your hosting provider doesn't offer this feature.

:::

## Installation {#installation}

```bash npm2yarn
npm install --save @docusaurus/plugin-client-redirects
```

## Configuration {#configuration}

Accepted fields:

<APITable>

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `fromExtensions` | `string[]` | `[]` | The extensions to be removed from the route after redirecting. |
| `toExtensions` | `string[]` | `[]` | The extensions to be appended to the route after redirecting. |
| `redirects` | `RedirectRule[]` | `[]` | The list of redirect rules. |
| `createRedirects` | `CreateRedirectsFn` | `undefined` | A callback to create a redirect rule. |

</APITable>

```ts
type RedirectRule = {
  to: string;
  from: string | string[];
};

type CreateRedirectsFn = (path: string) => string[] | string | null | undefined;
```

### Example configuration {#ex-config}

Here's an example configuration:

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      // highlight-start
      {
        fromExtensions: ["html", "htm"], // /myPage.html -> /myPage
        toExtensions: ["exe", "zip"], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: "/docs/newDoc",
            from: "/docs/oldDoc",
          },
          // Redirect from multiple old paths to the new path
          {
            to: "/docs/newDoc2",
            from: ["/docs/oldDocFrom2019", "/docs/legacyDocFrom2016"],
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/community")) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace("/community", "/docs/team"),
              existingPath.replace("/community", "/docs/support"),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
      // highlight-end
    ],
  ],
};
```
