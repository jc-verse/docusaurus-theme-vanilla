"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[8890],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3609:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},3205:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6775),i="apiTable_e8hp";function l(e,t){var n=e.name,i=e.children,l=function(e){for(var t=e;(0,a.isValidElement)(t);)t=a.Children.toArray(t.props.children)[0];return t}(i),u=n?n+"-"+l:l,o="#"+u,s=(0,r.k6)();return a.createElement("tr",{id:u,tabIndex:0,ref:s.location.hash===o?t:void 0,onClick:function(){s.push(o)},onKeyDown:function(e){"Enter"===e.key&&s.push(o)}},i.props.children)}var u=a.forwardRef(l);function o(e){var t=e.children,n=e.name,r=a.Children.toArray(t.props.children),l=r[0],o=r[1],s=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=s.current)||e.focus()}),[s]);var p=a.Children.map(o.props.children,(function(e){return a.createElement(u,{name:n,ref:s},e)}));return a.createElement("table",{className:i},l,a.createElement("tbody",null,p))}},6270:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(7294),i=n(6010),l=n(1048),u=n(3609),o=n(1943),s=n(2957),p="tabHeadings_mkcK",d="tabHeading_k98D",c="tabHeadingSelected_tg6b",m="tabsContainer_i8yn";function g(e){var t,n,l=e.lazy,g=e.defaultValue,f=e.values,k=e.groupId,h=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,o.U)(),w=C.tabGroupChoices,x=C.setTabGroupChoices,T=(0,r.useState)(y),E=T[0],O=T[1],D=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=w[k];null!=j&&j!==E&&v.some((function(e){return e.value===j}))&&O(j)}var M=function(e){var t=e.currentTarget,n=D.indexOf(t),a=v[n].value;a!==E&&(P(t),O(a),null!=k&&x(k,String(a)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=D.indexOf(e.currentTarget)+1;n=null!=(a=D[r])?a:D[0];break;case"ArrowLeft":var i,l=D.indexOf(e.currentTarget)-1;n=null!=(i=D[l])?i:D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:m},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)(p,h)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return D.push(e)},onKeyDown:R,onFocus:M,onClick:M},l,{className:(0,i.Z)(d,E===t&&c,null==l?void 0:l.className)}),null!=n?n:t)}))),l?(0,r.cloneElement)(N.filter((function(e){return e.props.value===E}))[0]):r.createElement("div",null,N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function f(e){var t=(0,l.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},5357:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(5261),u=n(6270),o=n(3205),s=["components"],p={sidebar_position:3,id:"plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",slug:"/api/plugins/@docusaurus/plugin-content-pages"},d=void 0,c={unversionedId:"api/plugins/plugin-content-pages",id:"version-2.0.0-beta.20/api/plugins/plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",description:"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides creating pages functionality.",source:"@site/versioned_docs/version-2.0.0-beta.20/api/plugins/plugin-content-pages.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-pages",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-content-pages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-content-pages.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",slug:"/api/plugins/@docusaurus/plugin-content-pages"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-content-blog"},next:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-client-redirects"}},m={},g=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}],f={toc:g};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/creating-pages"},"creating pages")," functionality."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-content-pages\n"))),(0,i.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-content-pages\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use the preset ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,i.kt)("p",{parentName:"div"},"You can configure this plugin through the preset options."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Accepted fields:"),(0,i.kt)(o.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'src/pages'")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to data on filesystem relative to site dir. Components in this directory will be automatically converted to pages.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"routeBasePath")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'/'")),(0,i.kt)("td",{parentName:"tr",align:null},"URL route for the pages section of your site. ",(0,i.kt)("strong",{parentName:"td"},"DO NOT")," include a trailing slash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"include")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['**/*.{js,jsx,ts,tsx,md,mdx}']")),(0,i.kt)("td",{parentName:"tr",align:null},"Matching files will be included and processed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"exclude")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"See example configuration")),(0,i.kt)("td",{parentName:"tr",align:null},"No route will be created for matching files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mdxPageComponent")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'@theme/MDXPage'")),(0,i.kt)("td",{parentName:"tr",align:null},"Component used by each MDX page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"remarkPlugins")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"any[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Remark plugins passed to MDX.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rehypePlugins")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"any[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Rehype plugins passed to MDX.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"beforeDefaultRemarkPlugins")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"any[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"beforeDefaultRehypePlugins")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"any[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."))))),(0,i.kt)("h3",{id:"ex-config"},"Example configuration"),(0,i.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most Docusaurus users configure this plugin through the preset options."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},'// Preset Options: pages\n// Plugin Options: @docusaurus/plugin-content-pages\n\nconst config = {\n  path: "src/pages",\n  routeBasePath: "",\n  include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],\n  exclude: [\n    "**/_*.{js,jsx,ts,tsx,md,mdx}",\n    "**/_*/**",\n    "**/*.test.{js,jsx,ts,tsx}",\n    "**/__tests__/**",\n  ],\n  mdxPageComponent: "@theme/MDXPage",\n  remarkPlugins: [require("remark-math")],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n};\n')),(0,i.kt)("h2",{id:"i18n"},"i18n"),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/i18n/introduction"},"i18n introduction")," first."),(0,i.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base path"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multi-instance path"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages-[pluginId]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JSON files"),": extracted with ",(0,i.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/cli#docusaurus-write-translations-sitedir"},(0,i.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Markdown files"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages"))),(0,i.kt)("h3",{id:"example-file-system-structure"},"Example file-system structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/[locale]/docusaurus-plugin-content-pages\n\u2502\n\u2502 # translations for website/src/pages\n\u251c\u2500\u2500 first-markdown-page.md\n\u2514\u2500\u2500 second-markdown-page.md\n")))}k.isMDXComponent=!0}}]);