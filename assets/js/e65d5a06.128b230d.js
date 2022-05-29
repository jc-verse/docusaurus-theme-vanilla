"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[1590],{2565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),l=["components"],r={description:"How the Docusaurus client is structured"},s="Client architecture",c={unversionedId:"advanced/client",id:"advanced/client",title:"Client architecture",description:"How the Docusaurus client is structured",source:"@site/docs/advanced/client.md",sourceDirName:"advanced",slug:"/advanced/client",permalink:"/docs/next/advanced/client",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/client.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",frontMatter:{description:"How the Docusaurus client is structured"},sidebar:"docs",previous:{title:"Static site generation",permalink:"/docs/next/advanced/ssg"},next:{title:"Migration overview",permalink:"/docs/next/migration"}},p={},u=[{value:"Theme aliases",id:"theme-aliases",level:2},{value:"Client modules",id:"client-modules",level:2},{value:"Client module lifecycles",id:"client-module-lifecycles",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-architecture"},"Client architecture"),(0,i.kt)("h2",{id:"theme-aliases"},"Theme aliases"),(0,i.kt)("p",null,"A theme works by exporting a set of components, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Navbar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Footer"),", to render the data passed down from plugins. Docusaurus and users use these components by importing them using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme")," webpack alias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import Navbar from "@theme/Navbar";\n')),(0,i.kt)("p",null,"The alias ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme")," can refer to a few directories, in the following priority:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A user's ",(0,i.kt)("inlineCode",{parentName:"li"},"website/src/theme")," directory, which is a special directory that has the higher precedence."),(0,i.kt)("li",{parentName:"ol"},"A Docusaurus theme package's ",(0,i.kt)("inlineCode",{parentName:"li"},"theme")," directory."),(0,i.kt)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),(0,i.kt)("p",null,"This is called a ",(0,i.kt)("em",{parentName:"p"},"layered architecture"),": a higher-priority layer providing the component would shadow a lower-priority layer, making swizzling possible. Given the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 @docusaurus/theme-classic\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," takes precedence whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. If you are familiar with Objective C where a function's implementation can be swapped during runtime, it's the exact same concept here with changing the target ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is pointing to!"),(0,i.kt)("p",null,'We already talked about how the "userland theme" in ',(0,i.kt)("inlineCode",{parentName:"p"},"src/theme")," can re-use a theme component through the ",(0,i.kt)("a",{parentName:"p",href:"#wrapping"},(0,i.kt)("inlineCode",{parentName:"a"},"@theme-original"))," alias. One theme package can also wrap a component from another theme, by importing the component from the initial theme, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-init")," import."),(0,i.kt)("p",null,"Here's an example of using this feature to enhance the default theme ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeBlock")," component with a ",(0,i.kt)("inlineCode",{parentName:"p"},"react-live")," playground feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import InitialCodeBlock from "@theme-init/CodeBlock";\nimport React from "react";\n\nexport default function CodeBlock(props) {\n  return props.live ? (\n    <ReactLivePlayground {...props} />\n  ) : (\n    <InitialCodeBlock {...props} />\n  );\n}\n')),(0,i.kt)("p",null,"Check the code of ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," for details."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Unless you want to publish a re-usable "theme enhancer" (like ',(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock"),"), you likely don't need ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-init"),"."))),(0,i.kt)("p",null,'It can be quite hard to wrap your mind around these aliases. Let\'s imagine the following case with a super convoluted setup with three themes/plugins and the site itself all trying to define the same component. Internally, Docusaurus loads these themes as a "stack".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------+\n|        `website/src/theme/CodeBlock.js`         | <-- `@theme/CodeBlock` always points to the top\n+-------------------------------------------------+\n| `theme-live-codeblock/theme/CodeBlock/index.js` | <-- `@theme-original/CodeBlock` points to the topmost non-swizzled component\n+-------------------------------------------------+\n|  `plugin-awesome-codeblock/theme/CodeBlock.js`  |\n+-------------------------------------------------+\n|     `theme-classic/theme/CodeBlock/index.js`    | <-- `@theme-init/CodeBlock` always points to the bottom\n+-------------------------------------------------+\n")),(0,i.kt)("p",null,'The components in this "stack" are pushed in the order of ',(0,i.kt)("inlineCode",{parentName:"p"},"preset plugins > preset themes > plugins > themes > site"),", so the swizzled component in ",(0,i.kt)("inlineCode",{parentName:"p"},"website/src/theme")," always comes out on top because it's loaded last."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@theme/*")," always points to the topmost component\u2014when ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeBlock")," is swizzled, all other components requesting ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," receive the swizzled version."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@theme-original/*")," always points to the topmost non-swizzled component. That's why you can import ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),' in the swizzled component\u2014it points to the next one in the "component stack", a theme-provided one. Plugin authors should not try to use this because your component could be the topmost component and cause a self-import.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@theme-init/*")," always points to the bottommost component\u2014usually, this comes from the theme or plugin that first provides this component. Individual plugins / themes trying to enhance code block can safely use ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," to get its basic version. Site creators should generally not use this because you likely want to enhance the ",(0,i.kt)("em",{parentName:"p"},"topmost")," instead of the ",(0,i.kt)("em",{parentName:"p"},"bottommost")," component. It's also possible that the ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," alias does not exist at all\u2014Docusaurus only creates it when it points to a different one from ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),", i.e. when it's provided by more than one theme. We don't waste aliases!"),(0,i.kt)("h2",{id:"client-modules"},"Client modules"),(0,i.kt)("p",null,"Client modules are part of your site's bundle, just like theme components. However, they are usually side-effect-ful. Client modules are anything that can be ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"ed by Webpack\u2014CSS, JS, etc. JS scripts usually work on the global context, like registering event listeners, creating global variables..."),(0,i.kt)("p",null,"These modules are imported globally before React even renders the initial UI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="@docusaurus/core/App.tsx"',title:'"@docusaurus/core/App.tsx"'},'// How it works under the hood\nimport "@generated/client-modules";\n')),(0,i.kt)("p",null,"Plugins and sites can both declare client modules, through ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/plugin-methods/lifecycle-apis#getClientModules"},(0,i.kt)("inlineCode",{parentName:"a"},"getClientModules"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/docusaurus-config#clientModules"},(0,i.kt)("inlineCode",{parentName:"a"},"siteConfig.clientModules")),", respectively."),(0,i.kt)("p",null,"Client modules are called during server-side rendering as well, so remember to check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/advanced/ssg#escape-hatches"},"execution environment")," before accessing client-side globals."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mySiteGlobalJs.js"',title:'"mySiteGlobalJs.js"'},'import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";\n\nif (ExecutionEnvironment.canUseDOM) {\n  // As soon as the site loads in the browser, register a global event listener\n  window.addEventListener("keydown", (e) => {\n    if (e.code === "Period") {\n      location.assign(location.href.replace(".com", ".dev"));\n    }\n  });\n}\n')),(0,i.kt)("p",null,"CSS stylesheets imported as client modules are ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/styling-layout#global-styles"},"global"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="mySiteGlobalCss.css"',title:'"mySiteGlobalCss.css"'},"/* This stylesheet is global. */\n.globalSelector {\n  color: red;\n}\n")),(0,i.kt)("h3",{id:"client-module-lifecycles"},"Client module lifecycles"),(0,i.kt)("p",null,"Besides introducing side-effects, client modules can optionally export two lifecycle functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"onRouteUpdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate"),"."),(0,i.kt)("p",null,"Because Docusaurus builds a single-page application, ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," tags will only be executed the first time the page loads, but will not re-execute on page transitions. These lifecycles are useful if you have some imperative JS logic that should execute every time a new page has loaded, e.g., to manipulate DOM elements, to send analytics data, etc."),(0,i.kt)("p",null,"For every route transition, there will be several important timings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user clicks a link, which causes the router to change its current location."),(0,i.kt)("li",{parentName:"ol"},"Docusaurus preloads the next route's assets, while keeping displaying the current page's content."),(0,i.kt)("li",{parentName:"ol"},"The next route's assets have loaded."),(0,i.kt)("li",{parentName:"ol"},"The new location's route component gets rendered to DOM.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onRouteUpdate")," will be called at event (2), and ",(0,i.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate")," will be called at (4). They both receive the current location and the previous location (which can be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", if this is the first screen)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onRouteUpdate"),' can optionally return a "cleanup" callback, which will be called at (3). For example, if you want to display a progress bar, you can start a timeout in ',(0,i.kt)("inlineCode",{parentName:"p"},"onRouteUpdate"),", and clear the timeout in the callback. (The classic theme already provides an ",(0,i.kt)("inlineCode",{parentName:"p"},"nprogress")," integration this way.)"),(0,i.kt)("p",null,"Note that the new page's DOM is only available during event (4). If you need to manipulate the new page's DOM, you'll likely want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate"),", which will be fired as soon as the DOM on the new page has mounted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="myClientModule.js"',title:'"myClientModule.js"'},'import type { Location } from "history";\n\nexport function onRouteDidUpdate({ location, previousLocation }) {\n  // Don\'t execute if we are still on the same page; the lifecycle may be fired\n  // because the hash changes (e.g. when navigating between headings)\n  if (location.pathname !== previousLocation?.pathname) {\n    const title = document.getElementsByTagName("h1")[0];\n    if (title) {\n      title.innerText += "\u2764\ufe0f";\n    }\n  }\n}\n\nexport function onRouteUpdate({ location, previousLocation }) {\n  if (location.pathname !== previousLocation?.pathname) {\n    const progressBarTimeout = window.setTimeout(() => {\n      nprogress.start();\n    }, delay);\n    return () => window.clearTimeout(progressBarTimeout);\n  }\n  return undefined;\n}\n')),(0,i.kt)("p",null,"Or, if you are using TypeScript and you want to leverage contextual typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="myClientModule.ts"',title:'"myClientModule.ts"'},'import type { ClientModule } from "@docusaurus/types";\n\nconst module: ClientModule = {\n  onRouteUpdate({ location, previousLocation }) {\n    // ...\n  },\n  onRouteDidUpdate({ location, previousLocation }) {\n    // ...\n  },\n};\nexport default module;\n')),(0,i.kt)("p",null,"Both lifecycles will fire on first render, but they will not fire on server-side, so you can safely access browser globals in them."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Prefer using React")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Client module lifecycles are purely imperative, and you can't use React hooks or access React contexts within them. If your operations are state-driven or involve complicated DOM manipulations, you should consider ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/swizzling"},"swizzling components")," instead."))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);