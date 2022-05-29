---
sidebar_position: 6
slug: /api/plugins/@docusaurus/plugin-google-analytics
---

# 📦 plugin-google-analytics

import APITable from '@site/src/components/APITable';

The default [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/) plugin. It is a JavaScript library for measuring how users interact with your website **in the production build**. If you are using Google Analytics 4 you might need to consider using [plugin-google-gtag](./plugin-google-gtag.md) instead.

:::caution production only

This plugin is always inactive in development and **only active in production** to avoid polluting the analytics statistics.

:::

## Installation {#installation}

```bash npm2yarn
npm install --save @docusaurus/plugin-google-analytics
```

:::tip

If you use the preset `@docusaurus/preset-classic`, you don't need to install this plugin as a dependency.

You can configure this plugin through the preset options.

:::

## Configuration {#configuration}

Accepted fields:

<APITable>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trackingID` | `string` | **Required** | The tracking ID of your analytics service. |
| `anonymizeIP` | `boolean` | `false` | Whether the IP should be anonymized when sending requests. |

</APITable>

### Example configuration {#ex-config}

You can configure this plugin through preset options or plugin options.

:::tip

Most Docusaurus users configure this plugin through the preset options.

:::

```js config-tabs
// Preset Options: googleAnalytics
// Plugin Options: @docusaurus/plugin-google-analytics

const config = {
  trackingID: "UA-141789564-1",
  anonymizeIP: true,
};
```
