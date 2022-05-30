"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[3586],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3609:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},6270:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(7294),o=n(6010),i=n(1048),s=n(3609),l=n(1943),u=n(2957),c="tabHeadings_mkcK",d="tabHeading_k98D",p="tabsContainer_i8yn";function m(e){var t,n,i=e.lazy,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.U)(),N=b.tabGroupChoices,O=b.setTabGroupChoices,S=(0,r.useState)(y),T=S[0],C=S[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var R=N[f];null!=R&&R!==T&&k.some((function(e){return e.value===R}))&&C(R)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==T&&(E(t),C(a),null!=f&&O(f,String(a)))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;n=null!=(o=x[i])?o:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:p},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)(c,v)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:D,onClick:D},i,{className:(0,o.Z)(d,null==i?void 0:i.className)}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0]):r.createElement("div",null,g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},6640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5261),s=n(6270),l=["components"],u={sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},c="Static site generation (SSG)",d={unversionedId:"advanced/ssg",id:"version-2.0.0-beta.21/advanced/ssg",title:"Static site generation (SSG)",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO.",source:"@site/versioned_docs/version-2.0.0-beta.21/advanced/ssg.md",sourceDirName:"advanced",slug:"/advanced/ssg",permalink:"/docusaurus-theme-vanilla/docs/advanced/ssg",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/ssg.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653902082,formattedLastUpdatedAt:"5/30/2022",frontMatter:{sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},sidebar:"docs",previous:{title:"Routing",permalink:"/docusaurus-theme-vanilla/docs/advanced/routing"},next:{title:"Client architecture",permalink:"/docusaurus-theme-vanilla/docs/advanced/client"}},p={},m=[{value:"Understanding SSR",id:"understanding-ssr",level:2},{value:"Escape hatches",id:"escape-hatches",level:2},{value:"<code>&lt;BrowserOnly&gt;</code>",id:"browseronly",level:3},{value:"<code>useIsBrowser</code>",id:"useisbrowser",level:3},{value:"<code>useEffect</code>",id:"useeffect",level:3},{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"static-site-generation-ssg"},"Static site generation (SSG)"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/advanced/architecture"},"architecture"),", we mentioned that the theme is run in Webpack. But beware: that doesn't mean it always has access to browser globals! The theme is built twice:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"During ",(0,o.kt)("strong",{parentName:"li"},"server-side rendering"),", the theme is compiled in a sandbox called ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/react-dom-server.html"},"React DOM Server"),'. You can see this as a "headless browser", where there is no ',(0,o.kt)("inlineCode",{parentName:"li"},"window")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"document"),", only React. SSR produces static HTML pages."),(0,o.kt)("li",{parentName:"ul"},"During ",(0,o.kt)("strong",{parentName:"li"},"client-side rendering"),", the theme is compiled with standard React DOM, and has access to browser variables. CSR produces dynamic JavaScript.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"SSR or SSG?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Server-side rendering")," and ",(0,o.kt)("em",{parentName:"p"},"static site generation")," can be different concepts, but we use them interchangeably."))),(0,o.kt)("p",null,"Therefore, while you probably know not to access Node globals like ",(0,o.kt)("inlineCode",{parentName:"p"},"process")," (",(0,o.kt)("a",{parentName:"p",href:"#node-env"},"or can we?"),") or the ",(0,o.kt)("inlineCode",{parentName:"p"},"'fs'")," module, you can't freely access browser globals either."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nexport default function WhereAmI() {\n  return <span>{window.location.href}</span>;\n}\n')),(0,o.kt)("p",null,"This looks like idiomatic React, but if you run ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus build"),", you will get an error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ReferenceError: window is not defined\n")),(0,o.kt)("p",null,"This is because during server-side rendering, the Docusaurus app isn't actually run in browser, and it doesn't know what ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," is."),(0,o.kt)("details",{id:"node-env"},(0,o.kt)("summary",null,"What about ",(0,o.kt)("code",null,"process.env.NODE_ENV"),"?"),(0,o.kt)("p",null,'One exception to the "no Node globals" rule is ',(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),". In fact, you can use it in React, because Webpack injects this variable as a global:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nexport default function expensiveComp() {\n  if (process.env.NODE_ENV === "development") {\n    return <>This component is not shown in development</>;\n  }\n  const res = someExpensiveOperationThatLastsALongTime();\n  return <>{res}</>;\n}\n')),(0,o.kt)("p",null,"During Webpack build, the ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," will be replaced with the value, either ",(0,o.kt)("inlineCode",{parentName:"p"},"'development'")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"'production'"),". You will then get different build results after dead code elimination:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Development",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n  if ('development' === 'development') {\n+   return <>This component is not shown in development</>;\n  }\n- const res = someExpensiveOperationThatLastsALongTime();\n- return <>{res}</>;\n}\n"))),(0,o.kt)(s.Z,{value:"Production",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n- if ('production' === 'development') {\n-   return <>This component is not shown in development</>;\n- }\n+ const res = someExpensiveOperationThatLastsALongTime();\n+ return <>{res}</>;\n}\n"))))),(0,o.kt)("h2",{id:"understanding-ssr"},"Understanding SSR"),(0,o.kt)("p",null,"React is not just a dynamic UI runtime\u2014it's also a templating engine. Because Docusaurus sites mostly contain static contents, it should be able to work without any JavaScript (which React runs in), but only plain HTML/CSS. And that's what server-side rendering offers: statically rendering your React code into HTML, without any dynamic content. An HTML file has no concept of client state (it's purely markup), hence it shouldn't rely on browser APIs."),(0,o.kt)("p",null,"These HTML files are the first to arrive at the user's browser screen when a URL is visited (see ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/advanced/routing"},"routing"),'). Afterwards, the browser fetches and runs other JS code to provide the "dynamic" parts of your site\u2014anything implemented with JavaScript. However, before that, the main content of your page is already visible, allowing faster loading.'),(0,o.kt)("p",null,'In CSR-only apps, all DOM elements are generated on client side with React, and the HTML file only ever contains one root element for React to mount DOM to; in SSR, React is already facing a fully built HTML page, and it only needs to correlate the DOM elements with the virtual DOM in its model. This step is called "hydration". After React has hydrated the static markup, the app starts to work as any normal React app.'),(0,o.kt)("p",null,"Note that Docusaurus is ultimately a single-page application, so static site generation is only an optimization (",(0,o.kt)("em",{parentName:"p"},"progressive enhancement"),", as it's called), but our functionality does not fully depend on those HTML files. This is contrary to site generators like ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/"},"Jekyll")," and ",(0,o.kt)("a",{parentName:"p",href:"https://v1.docusaurus.io/"},"Docusaurus v1"),", where all files are statically transformed to markup, and interactiveness is added through external JavaScript linked with ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tags. If you inspect the build output, you will still see JS assets under ",(0,o.kt)("inlineCode",{parentName:"p"},"build/assets/js"),", which are, really, the core of Docusaurus."),(0,o.kt)("h2",{id:"escape-hatches"},"Escape hatches"),(0,o.kt)("p",null,"If you want to render any dynamic content on your screen that relies on the browser API to be functional at all, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Our ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/markdown-features/code-blocks#interactive-code-editor"},"live codeblock"),", which runs in the browser's JS runtime"),(0,o.kt)("li",{parentName:"ul"},"Our ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/markdown-features/assets#themed-images"},"themed image")," that detects the user's color scheme to display different images"),(0,o.kt)("li",{parentName:"ul"},"The JSON viewer of our debug panel which uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," global for styling")),(0,o.kt)("p",null,"You may need to escape from SSR since static HTML can't display anything useful without knowing the client state."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is important for the first client-side render to produce the exact same DOM structure as server-side rendering, otherwise, React will correlate virtual DOM with the wrong DOM elements."),(0,o.kt)("p",{parentName:"div"},"Therefore, the na\xefve attempt of ",(0,o.kt)("inlineCode",{parentName:"p"},"if (typeof window !== 'undefined) {/* render something */}")," won't work appropriately as a browser vs. server detection, because the first client render would instantly render different markup from the server-generated one."),(0,o.kt)("p",{parentName:"div"},"You can read more about this pitfall in ",(0,o.kt)("a",{parentName:"p",href:"https://www.joshwcomeau.com/react/the-perils-of-rehydration/"},"The Perils of Rehydration"),"."))),(0,o.kt)("p",null,"We provide several more reliable ways to escape SSR."),(0,o.kt)("h3",{id:"browseronly"},(0,o.kt)("inlineCode",{parentName:"h3"},"<BrowserOnly>")),(0,o.kt)("p",null,"If you need to render some component in browser only (for example, because the component relies on browser specifics to be functional at all), one common approach is to wrap your component with ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/docusaurus-core#browseronly"},(0,o.kt)("inlineCode",{parentName:"a"},"<BrowserOnly>"))," to make sure it's invisible during SSR and only rendered in CSR."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import BrowserOnly from "@docusaurus/BrowserOnly";\n\nfunction MyComponent(props) {\n  return (\n    // highlight-start\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent =\n          require("some-lib-that-accesses-window").LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n    // highlight-end\n  );\n}\n')),(0,o.kt)("p",null,"It's important to realize that the children of ",(0,o.kt)("inlineCode",{parentName:"p"},"<BrowserOnly>")," is not a JSX element, but a function that ",(0,o.kt)("em",{parentName:"p"},"returns")," an element. This is a design decision. Consider this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import BrowserOnly from \"@docusaurus/BrowserOnly\";\n\nfunction MyComponent() {\n  return (\n    <BrowserOnly>\n      {/* highlight-start */}\n      {/* DON'T DO THIS - doesn't actually work */}\n      <span>page url = {window.location.href}</span>\n      {/* highlight-end */}\n    </BrowserOnly>\n  );\n}\n")),(0,o.kt)("p",null,"While you may expect that ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserOnly")," hides away the children during server-side rendering, it actually can't. When the React renderer tries to render this JSX tree, it does see the ",(0,o.kt)("inlineCode",{parentName:"p"},"{window.location.href}")," variable as a node of this tree and tries to render it, although it's actually not used! Using a function ensures that we only let the renderer see the browser-only component when it's needed."),(0,o.kt)("h3",{id:"useisbrowser"},(0,o.kt)("inlineCode",{parentName:"h3"},"useIsBrowser")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useIsBrowser()")," hook to test if the component is currently in a browser environment. It returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in SSR and ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," is CSR, after first client render. Use this hook if you only need to perform certain conditional operations on client-side, but not render an entirely different UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import useIsBrowser from "@docusaurus/useIsBrowser";\n\nfunction MyComponent() {\n  const isBrowser = useIsBrowser();\n  const location = isBrowser ? window.location.href : "fetching location...";\n  return <span>{location}</span>;\n}\n')),(0,o.kt)("h3",{id:"useeffect"},(0,o.kt)("inlineCode",{parentName:"h3"},"useEffect")),(0,o.kt)("p",null,"Lastly, you can put your logic in ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," to delay its execution until after first CSR. This is most appropriate if you are only performing side-effects but don't ",(0,o.kt)("em",{parentName:"p"},"get")," data from the client state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function MyComponent() {\n  useEffect(() => {\n    // Only logged in the browser console; nothing is logged during server-side rendering\n    console.log("I\'m now in the browser");\n  }, []);\n  return <span>Some content...</span>;\n}\n')),(0,o.kt)("h3",{id:"executionenvironment"},(0,o.kt)("inlineCode",{parentName:"h3"},"ExecutionEnvironment")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/docusaurus-core#executionenvironment"},(0,o.kt)("inlineCode",{parentName:"a"},"ExecutionEnvironment"))," namespace contains several values, and ",(0,o.kt)("inlineCode",{parentName:"p"},"canUseDOM")," is an effective way to detect browser environment."),(0,o.kt)("p",null,"Beware that it essentially checked ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof window !== 'undefined'")," under the hood, so you should not use it for rendering-related logic, but only imperative code, like reacting to user input by sending web requests, or dynamically importing libraries, where DOM isn't updated at all."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="a-client-module.js"',title:'"a-client-module.js"'},'import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";\n\nif (ExecutionEnvironment.canUseDOM) {\n  document.title = "I\'m loaded!";\n}\n')))}f.isMDXComponent=!0}}]);