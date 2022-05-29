"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2246],{4879:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},3909:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294);function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},3123:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),s=n(7294),l=n(6010),i=n(5074),o=n(4879),r=n(5425),u=n(1085);function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,h=e.className,g=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,r.U)(),b=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,s.useState)(k),S=w[0],C=w[1],x=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=b[d];null!=I&&I!==S&&f.some((function(e){return e.value===I}))&&C(I)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==S&&(T(t),C(a),null!=d&&N(d,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,s=x.indexOf(e.currentTarget)+1;n=null!=(a=x[s])?a:x[0];break;case"ArrowLeft":var l,i=x.indexOf(e.currentTarget)-1;n=null!=(l=x[i])?l:x[x.length-1]}null==(t=n)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,s.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,i.Z)();return s.createElement(c,(0,a.Z)({key:String(t)},e))}},7390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(3117),s=n(102),l=(n(7294),n(3905)),i=n(3123),o=n(3909),r=["components"],u={id:"styling-layout",title:"Styling and Layout",description:"A Docusaurus site is a pre-rendered single-page React application. You can style it the way you style React apps."},c=void 0,m={unversionedId:"styling-layout",id:"version-2.0.0-beta.20/styling-layout",title:"Styling and Layout",description:"A Docusaurus site is a pre-rendered single-page React application. You can style it the way you style React apps.",source:"@site/versioned_docs/version-2.0.0-beta.20/styling-layout.md",sourceDirName:".",slug:"/styling-layout",permalink:"/docs/2.0.0-beta.20/styling-layout",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/styling-layout.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",frontMatter:{id:"styling-layout",title:"Styling and Layout",description:"A Docusaurus site is a pre-rendered single-page React application. You can style it the way you style React apps."},sidebar:"docs",previous:{title:"Head Metadata",permalink:"/docs/2.0.0-beta.20/markdown-features/head-metadata"},next:{title:"Swizzling",permalink:"/docs/2.0.0-beta.20/swizzling"}},p={},d=[{value:"Global styles",id:"global-styles",level:2},{value:"Theme Class Names",id:"theme-class-names",level:3},{value:"Styling your site with Infima",id:"styling-your-site-with-infima",level:3},{value:"Dark Mode",id:"dark-mode",level:3},{value:"Mobile View",id:"mobile-view",level:3},{value:"CSS modules",id:"css-modules",level:2},{value:"CSS-in-JS",id:"css-in-js",level:2},{value:"Sass/SCSS",id:"sassscss",level:2},{value:"Global styles using Sass/SCSS",id:"global-styles-using-sassscss",level:3},{value:"Modules using Sass/SCSS",id:"modules-using-sassscss",level:3}],h={toc:d};function g(e){var t=e.components,n=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This section is focused on styling through stylesheets. For more advanced customizations (DOM structure, React code...), refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta.20/swizzling"},"swizzling guide"),"."))),(0,l.kt)("p",null,"A Docusaurus site is a single-page React application. You can style it the way you style React apps."),(0,l.kt)("p",null,"There are a few approaches/frameworks which will work, depending on your preferences and the type of website you are trying to build. Websites that are highly interactive and behave more like web apps will benefit from more modern styling approaches that co-locate styles with the components. Component styling can also be particularly useful when you wish to customize or swizzle a component."),(0,l.kt)("h2",{id:"global-styles"},"Global styles"),(0,l.kt)("p",null,"This is the most traditional way of styling that most developers (including non-front-end developers) would be familiar with. It works fine for small websites that do not have much customization."),(0,l.kt)("p",null,"If you're using ",(0,l.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you can create your own CSS files (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css"),") and import them globally by passing them as an option of the classic theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        // highlight-start\n        theme: {\n          customCss: [require.resolve("./src/css/custom.css")],\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n')),(0,l.kt)("p",null,"Any CSS you write within that file will be available globally and can be referenced directly using string literals."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},".purple-text {\n  color: rebeccapurple;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'function MyComponent() {\n  return (\n    <main>\n      <h1 className="purple-text">Purple Heading!</h1>\n    </main>\n  );\n}\n')),(0,l.kt)("p",null,"If you want to add CSS to any element, you can open the DevTools in your browser to inspect its class names. Class names come in several kinds:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Theme class names"),". These class names are listed exhaustively in ",(0,l.kt)("a",{parentName:"li",href:"#theme-class-names"},"the next subsection"),". They don't have any default properties. You should always prioritize targeting those stable class names in your custom CSS."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Infima class names"),". These class names are found in the classic theme and usually follow the ",(0,l.kt)("a",{parentName:"li",href:"http://getbem.com/naming/"},"BEM convention")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"block__element--modifier"),". They are usually stable but are still considered implementation details, so you should generally avoid targeting them. However, you can ",(0,l.kt)("a",{parentName:"li",href:"#styling-your-site-with-infima"},"modify Infima CSS variables"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CSS module class names"),". These class names have a hash in production (",(0,l.kt)("inlineCode",{parentName:"li"},"codeBlockContainer_RIuc"),") and are appended with a long file path in development. They are considered implementation details and you should almost always avoid targeting them in your custom CSS. If you must, you can use an ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"},"attribute selector")," (",(0,l.kt)("inlineCode",{parentName:"li"},"[class*='codeBlockContainer']"),") that ignores the hash.")),(0,l.kt)("h3",{id:"theme-class-names"},"Theme Class Names"),(0,l.kt)("p",null,"We provide some stable CSS class names for robust and maintainable global layout styling. These names are theme-agnostic and meant to be targeted by custom CSS."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you can't find a way to create a robust CSS selector, please ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/discussions/5468"},"report your customization use-case")," and we will consider adding new class names."))),(0,l.kt)("h3",{id:"styling-your-site-with-infima"},"Styling your site with Infima"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," uses ",(0,l.kt)("a",{parentName:"p",href:"https://infima.dev/"},"Infima")," as the underlying styling framework. Infima provides a flexible layout and common UI components styling suitable for content-centric websites (blogs, documentation, landing pages). For more details, check out the ",(0,l.kt)("a",{parentName:"p",href:"https://infima.dev/"},"Infima website"),"."),(0,l.kt)("p",null,"When you scaffold your Docusaurus project with ",(0,l.kt)("inlineCode",{parentName:"p"},"create-docusaurus"),", the website will be generated with basic Infima stylesheets and default styling. You can override Infima CSS variables globally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},":root {\n  --ifm-color-primary: #25c2a0;\n  --ifm-code-font-size: 95%;\n}\n")),(0,l.kt)("p",null,"Infima uses 7 shades of each color. We recommend using ",(0,l.kt)("a",{parentName:"p",href:"https://www.colorbox.io/"},"ColorBox")," to find the different shades of colors for your chosen primary color."),(0,l.kt)("p",null,"Alternatively, use the following tool to generate the different shades for your website and copy the variables into ",(0,l.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css"),"."),(0,l.kt)("h3",{id:"dark-mode"},"Dark Mode"),(0,l.kt)("p",null,"In light mode, the ",(0,l.kt)("inlineCode",{parentName:"p"},"<html>")," element has a ",(0,l.kt)("inlineCode",{parentName:"p"},'data-theme="light"')," attribute; in dark mode, it's ",(0,l.kt)("inlineCode",{parentName:"p"},'data-theme="dark"'),". Therefore, you can scope your CSS to dark-mode-only by targeting ",(0,l.kt)("inlineCode",{parentName:"p"},"html")," with a specific attribute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},'/* Overriding root Infima variables */\n[data-theme="dark"] {\n  --ifm-color-primary: #4e89e8;\n}\n/* Styling one class specially in dark mode */\n[data-theme="dark"] .purple-text {\n  color: plum;\n}\n')),(0,l.kt)("h3",{id:"mobile-view"},"Mobile View"),(0,l.kt)("p",null,"Docusaurus uses ",(0,l.kt)("inlineCode",{parentName:"p"},"996px")," as the cutoff between mobile screen width and desktop. If you want your layout to be different in the mobile view, you can use media queries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".banner {\n  padding: 4rem;\n}\n/** In mobile view, reduce the padding */\n@media screen and (max-width: 996px) {\n  .heroBanner {\n    padding: 2rem;\n  }\n}\n")),(0,l.kt)("h2",{id:"css-modules"},"CSS modules"),(0,l.kt)("p",null,"To style your components using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules"),", name your stylesheet files with the ",(0,l.kt)("inlineCode",{parentName:"p"},".module.css")," suffix (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome.module.css"),"). Webpack will load such CSS files as CSS modules and you have to reference the class names as properties of the imported CSS module (as opposed to using plain strings). This is similar to the convention used in ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet"},"Create React App"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'},".main {\n  padding: 12px;\n}\n\n.heading {\n  font-weight: bold;\n}\n\n.contents {\n  color: #ccc;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import styles from "./styles.module.css";\n\nfunction MyComponent() {\n  return (\n    <main className={styles.main}>\n      <h1 className={styles.heading}>Hello!</h1>\n      <article className={styles.contents}>Lorem Ipsum</article>\n    </main>\n  );\n}\n')),(0,l.kt)("p",null,"The class names will be processed by webpack into a globally unique class name during build."),(0,l.kt)("h2",{id:"css-in-js"},"CSS-in-JS"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"CSS-in-JS support is a work in progress, so libs like MUI may have display quirks. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/1640"},"Welcoming PRs"),"."))),(0,l.kt)("h2",{id:"sassscss"},"Sass/SCSS"),(0,l.kt)("p",null,"To use Sass/SCSS as your CSS preprocessor, install the unofficial Docusaurus 2 plugin ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rlamana/docusaurus-plugin-sass"},(0,l.kt)("inlineCode",{parentName:"a"},"docusaurus-plugin-sass")),". This plugin works for both global styles and the CSS modules approach:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rlamana/docusaurus-plugin-sass"},(0,l.kt)("inlineCode",{parentName:"a"},"docusaurus-plugin-sass")),":")),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save docusaurus-plugin-sass sass\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-plugin-sass sass\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Include the plugin in your ",(0,l.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  // highlight-next-line\n  plugins: ["docusaurus-plugin-sass"],\n  // ...\n};\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Write and import your stylesheets in Sass/SCSS as normal.")),(0,l.kt)("h3",{id:"global-styles-using-sassscss"},"Global styles using Sass/SCSS"),(0,l.kt)("p",null,"You can now set the ",(0,l.kt)("inlineCode",{parentName:"p"},"customCss")," property of ",(0,l.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," to point to your Sass/SCSS file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        // ...\n        theme: {\n          // highlight-next-line\n          customCss: [require.resolve("./src/css/custom.scss")],\n        },\n        // ...\n      },\n    ],\n  ],\n};\n')),(0,l.kt)("h3",{id:"modules-using-sassscss"},"Modules using Sass/SCSS"),(0,l.kt)("p",null,"Name your stylesheet files with the ",(0,l.kt)("inlineCode",{parentName:"p"},".module.scss")," suffix (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome.module.scss"),") instead of ",(0,l.kt)("inlineCode",{parentName:"p"},".css"),". Webpack will use ",(0,l.kt)("inlineCode",{parentName:"p"},"sass-loader")," to preprocess your stylesheets and load them as CSS modules."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="styles.module.scss"',title:'"styles.module.scss"'},".main {\n  padding: 12px;\n\n  article {\n    color: #ccc;\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import styles from "./styles.module.scss";\n\nfunction MyComponent() {\n  return (\n    <main className={styles.main}>\n      <article>Lorem Ipsum</article>\n    </main>\n  );\n}\n')))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,h=p["".concat(r,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);