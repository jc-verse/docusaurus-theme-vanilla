"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[7870],{4879:function(e,n,t){function a(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,a){return e.findIndex((function(e){return n(e,t)}))!==a}))}t.d(n,{l:function(){return a}})},6500:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294);function i(e){var n=e.children,t=e.className;return Array.isArray(n)&&n.every((function(e){return"string"==typeof e}))?a.createElement("pre",{className:t},a.createElement("code",null,n.join(""))):a.createElement("pre",{className:t},a.createElement("code",null,n))}},3909:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},3123:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),i=t(7294),o=t(6010),r=t(5074),l=t(4879),s=t(5425),p=t(1085);function u(e){var n,t,r=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,g=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),b=w.tabGroupChoices,N=w.setTabGroupChoices,y=(0,i.useState)(v),x=y[0],C=y[1],T=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=b[m];null!=A&&A!==x&&h.some((function(e){return e.value===A}))&&C(A)}var P=function(e){var n=e.currentTarget,t=T.indexOf(n),a=h[t].value;a!==x&&(j(n),C(a),null!=m&&N(m,String(a)))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,i=T.indexOf(e.currentTarget)+1;t=null!=(a=T[i])?a:T[0];break;case"ArrowLeft":var o,r=T.indexOf(e.currentTarget)-1;t=null!=(o=T[r])?o:T[T.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},g)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:P,onClick:P},r,{className:(0,o.Z)("tabs__item",null==r?void 0:r.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),r?(0,i.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function c(e){var n=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},1531:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),r=t(3123),l=t(3909),s=t(6500),p=["components"],u={sidebar_position:9,id:"plugin-pwa",title:"\ud83d\udce6 plugin-pwa",slug:"/api/plugins/@docusaurus/plugin-pwa"},c=void 0,d={unversionedId:"api/plugins/plugin-pwa",id:"version-2.0.0-beta.21/api/plugins/plugin-pwa",title:"\ud83d\udce6 plugin-pwa",description:"Docusaurus Plugin to add PWA support using Workbox. This plugin generates a Service Worker in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support.",source:"@site/versioned_docs/version-2.0.0-beta.21/api/plugins/plugin-pwa.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-pwa",permalink:"/docs/api/plugins/@docusaurus/plugin-pwa",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-pwa.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"plugin-pwa",title:"\ud83d\udce6 plugin-pwa",slug:"/api/plugins/@docusaurus/plugin-pwa"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-ideal-image",permalink:"/docs/api/plugins/@docusaurus/plugin-ideal-image"},next:{title:"\ud83d\udce6 plugin-sitemap",permalink:"/docs/api/plugins/@docusaurus/plugin-sitemap"}},m={},g=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Progressive Web App",id:"progressive-web-app",level:2},{value:"App installation support",id:"app-installation-support",level:2},{value:"Offline mode (precaching)",id:"offline-mode-precaching",level:2},{value:"Options",id:"options",level:2},{value:"<code>debug</code>",id:"debug",level:3},{value:"<code>offlineModeActivationStrategies</code>",id:"offlinemodeactivationstrategies",level:3},{value:"<code>injectManifestConfig</code>",id:"injectmanifestconfig",level:3},{value:"<code>pwaHead</code>",id:"pwahead",level:3},{value:"<code>swCustom</code>",id:"swcustom",level:3},{value:"<code>swRegister</code>",id:"swregister",level:3},{value:"Manifest example",id:"manifest-example",level:2},{value:"Customizing reload popup",id:"customizing-reload-popup",level:2}],f={toc:g};function h(e){var n=e.components,u=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},f,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docusaurus Plugin to add PWA support using ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox"},"Workbox"),". This plugin generates a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers"},"Service Worker")," in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-pwa\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-pwa\n")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/add-manifest/"},"PWA manifest")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"./static/manifest.json"),"."),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," with a minimal PWA config, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-pwa",\n      {\n        debug: true,\n        offlineModeActivationStrategies: [\n          "appInstalled",\n          "standalone",\n          "queryString",\n        ],\n        pwaHead: [\n          {\n            tagName: "link",\n            rel: "icon",\n            href: "/img/docusaurus.png",\n          },\n          {\n            tagName: "link",\n            rel: "manifest",\n            href: "/manifest.json", // your PWA manifest\n          },\n          {\n            tagName: "meta",\n            name: "theme-color",\n            content: "rgb(37, 194, 160)",\n          },\n        ],\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("h2",{id:"progressive-web-app"},"Progressive Web App"),(0,o.kt)("p",null,"Having a service worker installed is not enough to make your application a PWA. You'll need to at least include a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},"Web App Manifest")," and have the correct tags in ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," (",(0,o.kt)("a",{parentName:"p",href:"#pwahead"},"Options > pwaHead"),")."),(0,o.kt)("p",null,"After deployment, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/lighthouse"},"Lighthouse")," to run an audit on your site."),(0,o.kt)("p",null,"For a more exhaustive list of what it takes for your site to be a PWA, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/progressive-web-apps/checklist"},"PWA Checklist")),(0,o.kt)("h2",{id:"app-installation-support"},"App installation support"),(0,o.kt)("p",null,"If your browser supports it, you should be able to install a Docusaurus site as an app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pwa_install.gif",src:t(6746).Z,width:"640",height:"505"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"App installation requires the https protocol and a valid manifest."))),(0,o.kt)("h2",{id:"offline-mode-precaching"},"Offline mode (precaching)"),(0,o.kt)("p",null,"We enable users to browse a Docusaurus site offline, by using service-worker precaching."),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"what-is-precaching"},(0,o.kt)("a",{parentName:"h3",href:"https://developers.google.com/web/tools/workbox/modules/workbox-precaching"},"What is Precaching?")),(0,o.kt)("p",{parentName:"blockquote"},'One feature of service workers is the ability to save a set of files to the cache when the service worker is installing. This is often referred to as "precaching", since you are caching content ahead of the service worker being used.'),(0,o.kt)("p",{parentName:"blockquote"},"The main reason for doing this is that it gives developers control over the cache, meaning they can determine when and how long a file is cached as well as serve it to the browser without going to the network, meaning it can be used to create web apps that work offline."),(0,o.kt)("p",{parentName:"blockquote"},"Workbox takes a lot of the heavy lifting out of precaching by simplifying the API and ensuring assets are downloaded efficiently.")),(0,o.kt)("p",null,"By default, offline mode is enabled when the site is installed as an app. See the ",(0,o.kt)("inlineCode",{parentName:"p"},"offlineModeActivationStrategies")," option for details."),(0,o.kt)("p",null,"After the site has been precached, the service worker will serve cached responses for later visits. When a new build is deployed along with a new service worker, the new one will begin installing and eventually move to a waiting state. During this waiting state, a reload popup will show and ask the user to reload the page for new content. Until the user either clears the application cache or clicks the ",(0,o.kt)("inlineCode",{parentName:"p"},"reload")," button on the popup, the service worker will continue serving the old content."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Offline mode / precaching requires downloading all the static assets of the site ahead of time, and can consume unnecessary bandwidth. It may not be a good idea to activate it for all kind of sites."))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"debug"},(0,o.kt)("inlineCode",{parentName:"h3"},"debug")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Turn debug mode on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Workbox logs"),(0,o.kt)("li",{parentName:"ul"},"Additional Docusaurus logs"),(0,o.kt)("li",{parentName:"ul"},"Unoptimized SW file output"),(0,o.kt)("li",{parentName:"ul"},"Source maps")),(0,o.kt)("h3",{id:"offlinemodeactivationstrategies"},(0,o.kt)("inlineCode",{parentName:"h3"},"offlineModeActivationStrategies")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"('appInstalled' | 'mobile' | 'saveData'| 'queryString' | 'always')[]")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"['appInstalled', 'queryString', 'standalone']"))),(0,o.kt)("p",null,"Strategies used to turn the offline mode on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appInstalled"),": activates for users having installed the site as an app (not 100% reliable)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"standalone"),": activates for users running the app as standalone (often the case once a PWA is installed)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryString"),": activates if queryString contains ",(0,o.kt)("inlineCode",{parentName:"li"},"offlineMode=true")," (convenient for PWA debugging)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mobile"),": activates for mobile users (width <= 940px)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"saveData"),": activates for users with ",(0,o.kt)("inlineCode",{parentName:"li"},"navigator.connection.saveData === true")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"always"),": activates for all users")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use this carefully: some users may not like to be forced to use the offline mode."))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is not possible to detect if an as a PWA in a very reliable way."),(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"appinstalled")," event has been ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3c/manifest/pull/836"},"removed from the specification"),", and the ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/get-installed-related-apps/"},(0,o.kt)("inlineCode",{parentName:"a"},"navigator.getInstalledRelatedApps()"))," API is only supported in recent Chrome versions and require ",(0,o.kt)("inlineCode",{parentName:"p"},"related_applications")," declared in the manifest."),(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://petelepage.com/blog/2019/07/is-my-pwa-installed/"},(0,o.kt)("inlineCode",{parentName:"a"},"standalone")," strategy")," is a nice fallback to activate the offline mode (at least when running the installed app)."))),(0,o.kt)("h3",{id:"injectmanifestconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"injectManifestConfig")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.injectManifest"},"Workbox options")," to pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"workbox.injectManifest()"),". This gives you control over which assets will be precached, and be available offline."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"InjectManifestOptions")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-pwa",\n      {\n        injectManifestConfig: {\n          manifestTransforms: [\n            //...\n          ],\n          modifyURLPrefix: {\n            //...\n          },\n          // We already add regular static assets (html, images...) to be available offline\n          // You can add more files according to your needs\n          globPatterns: ["**/*.{pdf,docx,xlsx}"],\n          // ...\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("h3",{id:"pwahead"},(0,o.kt)("inlineCode",{parentName:"h3"},"pwaHead")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"({ tagName: string; [attributeName: string]: string })[]")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"))),(0,o.kt)("p",null,"Array of objects containing ",(0,o.kt)("inlineCode",{parentName:"p"},"tagName")," and key-value pairs for attributes to inject into the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," tag. Technically you can inject any head tag through this, but it's ideally used for tags to make your site PWA compliant. Here's a list of tag to make your app fully compliant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-pwa",\n      {\n        pwaHead: [\n          {\n            tagName: "link",\n            rel: "icon",\n            href: "/img/docusaurus.png",\n          },\n          {\n            tagName: "link",\n            rel: "manifest",\n            href: "/manifest.json",\n          },\n          {\n            tagName: "meta",\n            name: "theme-color",\n            content: "rgb(37, 194, 160)",\n          },\n          {\n            tagName: "meta",\n            name: "apple-mobile-web-app-capable",\n            content: "yes",\n          },\n          {\n            tagName: "meta",\n            name: "apple-mobile-web-app-status-bar-style",\n            content: "#000",\n          },\n          {\n            tagName: "link",\n            rel: "apple-touch-icon",\n            href: "/img/docusaurus.png",\n          },\n          {\n            tagName: "link",\n            rel: "mask-icon",\n            href: "/img/docusaurus.svg",\n            color: "rgb(37, 194, 160)",\n          },\n          {\n            tagName: "meta",\n            name: "msapplication-TileImage",\n            content: "/img/docusaurus.png",\n          },\n          {\n            tagName: "meta",\n            name: "msapplication-TileColor",\n            content: "#000",\n          },\n        ],\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("h3",{id:"swcustom"},(0,o.kt)("inlineCode",{parentName:"h3"},"swCustom")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string | undefined")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"Useful for additional Workbox rules. You can do whatever a service worker can do here, and use the full power of workbox libraries. The code is transpiled, so you can use modern ES6+ syntax here."),(0,o.kt)("p",null,"For example, to cache files from external routes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { registerRoute } from "workbox-routing";\nimport { StaleWhileRevalidate } from "workbox-strategies";\n\n// default fn export receiving some useful params\nexport default function swCustom(params) {\n  const {\n    debug, // :boolean\n    offlineMode, // :boolean\n  } = params;\n\n  // Cache responses from external resources\n  registerRoute((context) => {\n    return [\n      /graph\\.facebook\\.com\\/.*\\/picture/,\n      /netlify\\.com\\/img/,\n      /avatars1\\.githubusercontent/,\n    ].some((regex) => context.url.href.match(regex));\n  }, new StaleWhileRevalidate());\n}\n')),(0,o.kt)("p",null,"The module should have a ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," function export, and receives some params."),(0,o.kt)("h3",{id:"swregister"},(0,o.kt)("inlineCode",{parentName:"h3"},"swRegister")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string | false")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'docusaurus-plugin-pwa/src/registerSW.js'"))),(0,o.kt)("p",null,"Adds an entry before the Docusaurus app so that registration can happen before the app runs. The default ",(0,o.kt)("inlineCode",{parentName:"p"},"registerSW.js")," file is enough for simple registration."),(0,o.kt)("p",null,"Passing ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," will disable registration entirely."),(0,o.kt)("h2",{id:"manifest-example"},"Manifest example"),(0,o.kt)("p",null,"The Docusaurus site manifest can serve as an inspiration:"),(0,o.kt)(s.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(t(8047),null,2)),(0,o.kt)("h2",{id:"customizing-reload-popup"},"Customizing reload popup"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/PwaReloadPopup")," component is rendered when a new service worker is waiting to be installed, and we suggest a reload to the user. You can ",(0,o.kt)("a",{parentName:"p",href:"/docs/swizzling"},"swizzle")," this component and implement your own UI. It will receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"onReload")," callback as props, which should be called when the ",(0,o.kt)("inlineCode",{parentName:"p"},"reload")," button is clicked. This will tell the service worker to install the waiting service worker and reload the page."),(0,o.kt)("p",null,"The default theme includes an implementation for the reload popup and uses ",(0,o.kt)("a",{parentName:"p",href:"https://infima.dev/docs/components/alert"},"Infima Alerts"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pwa_reload.gif",src:t(736).Z,width:"1000",height:"502"})),(0,o.kt)("p",null,"Your component can render ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", but this is not recommended: users won't have a way to get up-to-date content."))}h.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6746:function(e,n,t){n.Z=t.p+"assets/images/pwa_install-169e763a3e99bb01e41be11c1a4af51f.gif"},736:function(e,n,t){n.Z=t.p+"assets/images/pwa_reload-6af462b35d0ed752c44ad0899559bedf.gif"},8047:function(e){e.exports=JSON.parse('{"name":"Docusaurus v2","short_name":"Docusaurus","theme_color":"#2196f3","background_color":"#424242","display":"standalone","scope":"./","start_url":"./index.html","related_applications":[{"platform":"webapp","url":"https://docusaurus.io/manifest.json"}],"icons":[{"src":"img/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"img/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"img/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"img/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"img/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"img/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"img/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"img/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]}')}}]);