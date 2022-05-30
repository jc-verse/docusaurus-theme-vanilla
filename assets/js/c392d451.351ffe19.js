"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,u(u({ref:t},p),{},{components:n})):a.createElement(g,u({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,u=new Array(r);u[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var s=2;s<r;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3609:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},6270:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7462),i=n(7294),r=n(6010),u=n(1048),o=n(3609),l=n(1943),s=n(2957),p="tabHeadings_mkcK",c="tabHeading_k98D",d="tabHeadingSelected_tg6b",m="tabsContainer_i8yn";function g(e){var t,n,u=e.lazy,g=e.defaultValue,v=e.values,f=e.groupId,h=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(t=null!=g?g:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,i.useState)(N),C=O[0],E=O[1],j=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=x[f];null!=_&&_!==C&&k.some((function(e){return e.value===_}))&&E(_)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),a=k[n].value;a!==C&&(I(t),E(a),null!=f&&T(f,String(a)))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=j.indexOf(e.currentTarget)+1;n=null!=(a=j[i])?a:j[0];break;case"ArrowLeft":var r,u=j.indexOf(e.currentTarget)-1;n=null!=(r=j[u])?r:j[j.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:m},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)(p,h)},k.map((function(e){var t=e.value,n=e.label,u=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:z,onFocus:P,onClick:P},u,{className:(0,r.Z)(c,C===t&&d,null==u?void 0:u.className)}),null!=n?n:t)}))),u?(0,i.cloneElement)(b.filter((function(e){return e.props.value===C}))[0]):i.createElement("div",null,b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function v(e){var t=(0,u.Z)();return i.createElement(g,(0,a.Z)({key:String(t)},e))}},7483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),u=n(5261),o=n(6270),l=["components"],s={sidebar_position:5,id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},p=void 0,c={unversionedId:"api/plugins/plugin-debug",id:"version-2.0.0-beta.20/api/plugins/plugin-debug",title:"\ud83d\udce6 plugin-debug",description:"The debug plugin will display useful debug information at http3000/\\\\docusaurus/debug.",source:"@site/versioned_docs/version-2.0.0-beta.20/api/plugins/plugin-debug.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-debug",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-debug",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-debug.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-client-redirects"},next:{title:"\ud83d\udce6 plugin-google-analytics",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-google-analytics"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],g={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The debug plugin will display useful debug information at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/__docusaurus/debug"},"http://localhost:3000/","_","_","docusaurus/debug"),"."),(0,r.kt)("p",null,"It is mostly useful for plugin authors, that will be able to inspect more easily the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},".docusaurus")," folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentLoaded")," lifecycle."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use the plugin via the classic preset, the preset will ",(0,r.kt)("strong",{parentName:"p"},"enable the plugin in development and disable it in production")," by default (",(0,r.kt)("inlineCode",{parentName:"p"},"debug: undefined"),") to avoid exposing potentially sensitive information. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"debug: true")," to always enable it or ",(0,r.kt)("inlineCode",{parentName:"p"},"debug: false")," to always disable it."),(0,r.kt)("p",{parentName:"div"},"If you use a standalone plugin, you may need to achieve the same effect by checking the environment:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    // highlight-next-line\n    process.env.NODE_ENV === "production" && "@docusaurus/plugin-debug",\n  ].filter(Boolean),\n};\n')))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you report a bug, we will probably ask you to have this plugin turned on in the production, so that we can inspect your deployment config more easily."),(0,r.kt)("p",{parentName:"div"},"If you don't have any sensitive information, you can keep it on in production ",(0,r.kt)("a",{parentName:"p",href:"/__docusaurus/debug"},"like we do"),"."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-debug\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-debug\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use the preset ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,r.kt)("p",{parentName:"div"},"You can configure this plugin through the preset options."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This plugin currently has no options."),(0,r.kt)("h3",{id:"ex-config"},"Example configuration"),(0,r.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Most Docusaurus users configure this plugin through the preset options."))),(0,r.kt)(u.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Preset Options",mdxType:"TabItem"},(0,r.kt)("p",null,"If you use a preset, configure this plugin through the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/using-plugins#docusauruspreset-classic"},"preset options"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        // highlight-next-line\n        debug: true, // This will enable the plugin in production\n      },\n    ],\n  ],\n};\n'))),(0,r.kt)(o.Z,{value:"Plugin Options",mdxType:"TabItem"},(0,r.kt)("p",null,"If you are using a standalone plugin, provide options directly to the plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // highlight-next-line\n  plugins: ["@docusaurus/plugin-debug"],\n};\n')))))}v.isMDXComponent=!0}}]);