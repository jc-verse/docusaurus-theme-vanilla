"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[842],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,g=m["".concat(l,".").concat(p)]||m[p]||c[p]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3609:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},6270:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),i=n(7294),r=n(6010),o=n(1048),s=n(3609),l=n(1943),d=n(2957),u="tabHeadings_mkcK",c="tabHeading_k98D",m="tabHeadingSelected_tg6b",p="tabsContainer_i8yn";function g(e){var t,n,o=e.lazy,g=e.defaultValue,h=e.values,f=e.groupId,v=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(t=null!=g?g:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),x=w.tabGroupChoices,C=w.setTabGroupChoices,T=(0,i.useState)(N),j=T[0],I=T[1],E=[],D=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var z=x[f];null!=z&&z!==j&&b.some((function(e){return e.value===z}))&&I(z)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==j&&(D(t),I(a),null!=f&&C(f,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=E.indexOf(e.currentTarget)+1;n=null!=(a=E[i])?a:E[0];break;case"ArrowLeft":var r,o=E.indexOf(e.currentTarget)-1;n=null!=(r=E[o])?r:E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:p},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)(u,v)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:_,onFocus:O,onClick:O},o,{className:(0,r.Z)(c,j===t&&m,null==o?void 0:o.className)}),null!=n?n:t)}))),o?(0,i.cloneElement)(k.filter((function(e){return e.props.value===j}))[0]):i.createElement("div",null,k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function h(e){var t=(0,o.Z)();return i.createElement(g,(0,a.Z)({key:String(t)},e))}},5629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(5261),s=n(6270),l=["components"],d={slug:"/sidebar/autogenerated"},u="Autogenerated",c={unversionedId:"guides/docs/sidebar/autogenerated",id:"guides/docs/sidebar/autogenerated",title:"Autogenerated",description:"Docusaurus can create a sidebar automatically from your filesystem structure: each folder creates a sidebar category, and each file creates a doc link.",source:"@site/docs/guides/docs/sidebar/autogenerated.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/autogenerated",permalink:"/docusaurus-theme-vanilla/docs/next/sidebar/autogenerated",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/autogenerated.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",frontMatter:{slug:"/sidebar/autogenerated"},sidebar:"docs",previous:{title:"Sidebar items",permalink:"/docusaurus-theme-vanilla/docs/next/sidebar/items"},next:{title:"Using multiple sidebars",permalink:"/docusaurus-theme-vanilla/docs/next/sidebar/multiple-sidebars"}},m={},p=[{value:"Category index convention",id:"category-index-convention",level:2},{value:"Autogenerated sidebar metadata",id:"autogenerated-sidebar-metadata",level:2},{value:"Doc item metadata",id:"doc-item-metadata",level:3},{value:"Category item metadata",id:"category-item-metadata",level:3},{value:"Using number prefixes",id:"using-number-prefixes",level:2},{value:"Customize the sidebar items generator",id:"customize-the-sidebar-items-generator",level:2}],g={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"autogenerated"},"Autogenerated"),(0,r.kt)("p",null,"Docusaurus can ",(0,r.kt)("strong",{parentName:"p"},"create a sidebar automatically")," from your ",(0,r.kt)("strong",{parentName:"p"},"filesystem structure"),": each folder creates a sidebar category, and each file creates a doc link."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type SidebarItemAutogenerated = {\n  type: "autogenerated";\n  dirName: string; // Source folder to generate the sidebar slice from (relative to docs)\n};\n')),(0,r.kt)("p",null,"Docusaurus can generate a full sidebar from your docs folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  myAutogeneratedSidebar: [\n    // highlight-start\n    {\n      type: "autogenerated",\n      dirName: ".", // \'.\' means the current docs folder\n    },\n    // highlight-end\n  ],\n};\n')),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"autogenerated")," item is converted by Docusaurus to a ",(0,r.kt)("strong",{parentName:"p"},"sidebar slice")," (also discussed in ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/sidebar/items#category-shorthand"},"category shorthands"),"): a list of items of type ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", so you can splice ",(0,r.kt)("strong",{parentName:"p"},"multiple ",(0,r.kt)("inlineCode",{parentName:"strong"},"autogenerated")," items")," from multiple directories, interleaving them with regular sidebar items, in one sidebar level."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"A real-world example"),"Consider this file structure:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docs\n\u251c\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 product1-api\n\u2502   \u2502   \u2514\u2500\u2500 api.md\n\u2502   \u2514\u2500\u2500 product2-api\n\u2502       \u251c\u2500\u2500 basic-api.md\n\u2502       \u2514\u2500\u2500 pro-api.md\n\u251c\u2500\u2500 intro.md\n\u2514\u2500\u2500 tutorials\n    \u251c\u2500\u2500 advanced\n    \u2502   \u251c\u2500\u2500 advanced1.md\n    \u2502   \u251c\u2500\u2500 advanced2.md\n    \u2502   \u2514\u2500\u2500 read-more\n    \u2502       \u251c\u2500\u2500 resource1.md\n    \u2502       \u2514\u2500\u2500 resource2.md\n    \u251c\u2500\u2500 easy\n    \u2502   \u251c\u2500\u2500 easy1.md\n    \u2502   \u2514\u2500\u2500 easy2.md\n    \u251c\u2500\u2500 tutorial-end.md\n    \u251c\u2500\u2500 tutorial-intro.md\n    \u2514\u2500\u2500 tutorial-medium.md\n")),(0,r.kt)("p",null,"And assume every doc's ID is just its file name. If you define an autogenerated sidebar like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    "intro",\n    {\n      type: "category",\n      label: "Tutorials",\n      items: [\n        "tutorial-intro",\n        // highlight-start\n        {\n          type: "autogenerated",\n          dirName: "tutorials/easy", // Generate sidebar slice from docs/tutorials/easy\n        },\n        // highlight-end\n        "tutorial-medium",\n        // highlight-start\n        {\n          type: "autogenerated",\n          dirName: "tutorials/advanced", // Generate sidebar slice from docs/tutorials/hard\n        },\n        // highlight-end\n        "tutorial-end",\n      ],\n    },\n    // highlight-start\n    {\n      type: "autogenerated",\n      dirName: "api", // Generate sidebar slice from docs/api\n    },\n    // highlight-end\n    {\n      type: "category",\n      label: "Community",\n      items: ["team", "chat"],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"It would be resolved as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    "intro",\n    {\n      type: "category",\n      label: "Tutorials",\n      items: [\n        "tutorial-intro",\n        // highlight-start\n        // Two files in docs/tutorials/easy\n        "easy1",\n        "easy2",\n        // highlight-end\n        "tutorial-medium",\n        // highlight-start\n        // Two files and a folder in docs/tutorials/hard\n        "advanced1",\n        "advanced2",\n        {\n          type: "category",\n          label: "read-more",\n          items: ["resource1", "resource2"],\n        },\n        // highlight-end\n        "tutorial-end",\n      ],\n    },\n    // highlight-start\n    // Two folders in docs/api\n    {\n      type: "category",\n      label: "product1-api",\n      items: ["api"],\n    },\n    {\n      type: "category",\n      label: "product2-api",\n      items: ["basic-api", "pro-api"],\n    },\n    // highlight-end\n    {\n      type: "category",\n      label: "Community",\n      items: ["team", "chat"],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,'Note how the autogenerate source directories themselves don\'t become categories: only the items they contain do. This is what we mean by "sidebar slice".')),(0,r.kt)("h2",{id:"category-index-convention"},"Category index convention"),(0,r.kt)("p",null,"Docusaurus can automatically link a category to its index document."),(0,r.kt)("p",null,"A category index document is a document following one of those filename conventions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Named as ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," (case-insensitive): ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/index.md")),(0,r.kt)("li",{parentName:"ul"},"Named as ",(0,r.kt)("inlineCode",{parentName:"li"},"README")," (case-insensitive): ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/README.mdx")),(0,r.kt)("li",{parentName:"ul"},"Same name as parent folder: ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/Guides.md"))),(0,r.kt)("p",null,"This is equivalent to using a category with a ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/sidebar/items#category-doc-link"},"doc link"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  docs: [\n    // highlight-start\n    {\n      type: "category",\n      label: "Guides",\n      link: { type: "doc", id: "Guides/index" },\n      items: [],\n    },\n    // highlight-end\n  ],\n};\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Naming your introductory document ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," makes it show up when browsing the folder using the GitHub interface, while using ",(0,r.kt)("inlineCode",{parentName:"p"},"index.md")," makes the behavior more in line with how HTML files are served."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If a folder only has one index page, it will be turned into a link instead of a category. This is useful for ",(0,r.kt)("strong",{parentName:"p"},"asset collocation"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"some-doc\n\u251c\u2500\u2500 index.md\n\u251c\u2500\u2500 img1.png\n\u2514\u2500\u2500 img2.png\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Customizing category index matching"),(0,r.kt)("p",null,"It is possible to opt out any of the category index conventions, or define even more conventions. You can inject your own ",(0,r.kt)("inlineCode",{parentName:"p"},"isCategoryIndex")," matcher through the ",(0,r.kt)("a",{parentName:"p",href:"#customize-the-sidebar-items-generator"},(0,r.kt)("inlineCode",{parentName:"a"},"sidebarItemsGenerator"))," callback. For example, you can also pick ",(0,r.kt)("inlineCode",{parentName:"p"},"intro")," as another file name eligible for automatically becoming the category index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex(doc) {\n              return (\n                // Also pick intro.md in addition to the default ones\n                doc.fileName.toLowerCase() === 'intro' ||\n                defaultCategoryIndexMatcher(doc)\n              );\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"Or choose to not have any category index convention."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex() {\n              // No doc will be automatically picked as category index\n              return false;\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isCategoryIndex")," matcher will be provided with three fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fileName"),", the file's name without extension and with casing preserved"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directories"),", the list of directory names ",(0,r.kt)("em",{parentName:"li"},"from the lowest level to the highest level"),", relative to the docs root directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension"),", the file's extension, with a leading dot.")),(0,r.kt)("p",null,"For example, for a doc file at ",(0,r.kt)("inlineCode",{parentName:"p"},"guides/sidebar/autogenerated.md"),", the props the matcher receives are"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const props = {\n  fileName: "autogenerated",\n  directories: ["sidebar", "guides"],\n  extension: ".md",\n};\n')),(0,r.kt)("p",null,"The default implementation is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function isCategoryIndex({ fileName, directories }) {\n  const eligibleDocIndexNames = [\n    "index",\n    "readme",\n    directories[0].toLowerCase(),\n  ];\n  return eligibleDocIndexNames.includes(fileName.toLowerCase());\n}\n'))),(0,r.kt)("h2",{id:"autogenerated-sidebar-metadata"},"Autogenerated sidebar metadata"),(0,r.kt)("p",null,"For handwritten sidebar definitions, you would provide metadata to sidebar items through ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js"),"; for autogenerated, Docusaurus would read them from the item's respective file. In addition, you may want to adjust the relative position of each item because, by default, items within a sidebar slice will be generated in ",(0,r.kt)("strong",{parentName:"p"},"alphabetical order")," (using file and folder names)."),(0,r.kt)("h3",{id:"doc-item-metadata"},"Doc item metadata"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," attributes are declared in front matter as ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_class_name"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_custom_props"),", respectively. Position can be specified in the same way, via ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_position")," front matter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/tutorials/tutorial-easy.md"',title:'"docs/tutorials/tutorial-easy.md"'},"---\n# highlight-start\nsidebar_position: 2\nsidebar_label: Easy\nsidebar_class_name: green\n# highlight-end\n---\n\n# Easy Tutorial\n\nThis is the easy tutorial!\n")),(0,r.kt)("h3",{id:"category-item-metadata"},"Category item metadata"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.yml")," file in the respective folder. You can specify any category metadata and also the ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," metadata. ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"position"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," will default to the respective values of the category's linked doc, if there is one."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="docs/tutorials/_category_.json"',title:'"docs/tutorials/_category_.json"'},'{\n  "position": 2.5,\n  "label": "Tutorial",\n  "collapsible": true,\n  "collapsed": false,\n  "className": "red",\n  "link": {\n    "type": "generated-index",\n    "title": "Tutorial overview"\n  },\n  "customProps": {\n    "description": "This description can be used in the swizzled DocCard"\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docs/tutorials/_category_.yml"',title:'"docs/tutorials/_category_.yml"'},'position: 2.5 # float position is supported\nlabel: "Tutorial"\ncollapsible: true # make the category collapsible\ncollapsed: false # keep the category open by default\nclassName: red\nlink:\n  type: generated-index\n  title: Tutorial overview\ncustomProps:\n  description: This description can be used in the swizzled DocCard\n')))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," is explicitly specified, Docusaurus will not apply any ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/sidebar/items#category-index-convention"},"default conventions"),"."),(0,r.kt)("p",{parentName:"div"},"The doc links can be specified relatively, e.g. if the category is generated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"guides")," directory, ",(0,r.kt)("inlineCode",{parentName:"p"},'"link": {"type": "doc", "id": "intro"}')," will be resolved to the ID ",(0,r.kt)("inlineCode",{parentName:"p"},"guides/intro"),", only falling back to ",(0,r.kt)("inlineCode",{parentName:"p"},"intro")," if a doc with the former ID doesn't exist."),(0,r.kt)("p",{parentName:"div"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"link: null")," to opt out of default conventions and not generate any category index page."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The position metadata is only used ",(0,r.kt)("strong",{parentName:"p"},"within a sidebar slice"),": Docusaurus does not re-order other items of your sidebar."))),(0,r.kt)("h2",{id:"using-number-prefixes"},"Using number prefixes"),(0,r.kt)("p",null,"A simple way to order an autogenerated sidebar is to prefix docs and folders by number prefixes, which also makes them appear in the file system in the same order when sorted by file name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docs\n\u251c\u2500\u2500 01-Intro.md\n\u251c\u2500\u2500 02-Tutorial Easy\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u2514\u2500\u2500 03-End.md\n\u251c\u2500\u2500 03-Tutorial Hard\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u251c\u2500\u2500 03-Third Part.md\n\u2502   \u2514\u2500\u2500 04-End.md\n\u2514\u2500\u2500 04-End.md\n")),(0,r.kt)("p",null,"To make it ",(0,r.kt)("strong",{parentName:"p"},"easier to adopt"),", Docusaurus supports ",(0,r.kt)("strong",{parentName:"p"},"multiple number prefix patterns"),"."),(0,r.kt)("p",null,"By default, Docusaurus will ",(0,r.kt)("strong",{parentName:"p"},"remove the number prefix")," from the doc id, title, label, and URL paths."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Prefer using ",(0,r.kt)("a",{parentName:"strong",href:"#autogenerated-sidebar-metadata"},"additional metadata")),"."),(0,r.kt)("p",{parentName:"div"},"Updating a number prefix can be annoying, as it can require ",(0,r.kt)("strong",{parentName:"p"},"updating multiple existing markdown links"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docs/02-Tutorial Easy/01-First Part.md"',title:'"docs/02-Tutorial',"Easy/01-First":!0,'Part.md"':!0},"- Check the [Tutorial End](../04-End.md);\n+ Check the [Tutorial End](../05-End.md);\n")))),(0,r.kt)("h2",{id:"customize-the-sidebar-items-generator"},"Customize the sidebar items generator"),(0,r.kt)("p",null,"You can provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarItemsGenerator")," function in the docs plugin (or preset) config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-content-docs",\n      {\n        // highlight-start\n        async sidebarItemsGenerator({\n          defaultSidebarItemsGenerator,\n          numberPrefixParser,\n          item,\n          version,\n          docs,\n          categoriesMetadata,\n          isCategoryIndex,\n        }) {\n          // Example: return an hardcoded list of static sidebar items\n          return [\n            { type: "doc", id: "doc1" },\n            { type: "doc", id: "doc2" },\n          ];\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Re-use and enhance the default generator")," instead of writing a generator from scratch: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-plugin-content-docs/src/sidebars/generator.ts"},"the default generator we provide")," is 250 lines long."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Add, update, filter, re-order")," the sidebar items according to your use case:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'// highlight-start\n// Reverse the sidebar items ordering (including nested category items)\nfunction reverseSidebarItems(items) {\n  // Reverse items in categories\n  const result = items.map((item) => {\n    if (item.type === "category") {\n      return { ...item, items: reverseSidebarItems(item.items) };\n    }\n    return item;\n  });\n  // Reverse items at current level\n  result.reverse();\n  return result;\n}\n// highlight-end\n\nmodule.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-content-docs",\n      {\n        // highlight-start\n        async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {\n          const sidebarItems = await defaultSidebarItemsGenerator(args);\n          return reverseSidebarItems(sidebarItems);\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n')))))}h.isMDXComponent=!0}}]);