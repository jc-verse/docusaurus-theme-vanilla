"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[4481],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3699:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(7462),a=t(3366),i=t(7294),s=t(3727),o=t(8532),l=t(9962),u=t(2735),d=t(6136),c=i.createContext({collectLink:function(){}});var p=t(9524),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];function g(e,n){var t,g,f=e.isNavLink,b=e.to,h=e.href,y=e.activeClassName,v=e.isActive,k=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,N=void 0===w||w,j=(0,a.Z)(e,m),x=(0,l.Z)().siteConfig,C=x.trailingSlash,O=x.baseUrl,S=(0,p.C)().withBaseUrl,E=(0,i.useContext)(c),P=(0,i.useRef)(null);(0,i.useImperativeHandle)(n,(function(){return P.current}));var T=b||h;var D,Z=(0,u.Z)(T),A=null==T?void 0:T.replace("pathname://",""),I=void 0!==A?(D=A,N&&function(e){return e.startsWith("/")}(D)?S(D):D):void 0;I&&Z&&(I=(0,o.applyTrailingSlash)(I,{trailingSlash:C,baseUrl:O}));var _=(0,i.useRef)(!1),U=f?s.OL:s.rU,B=d.Z.canUseIntersectionObserver,L=(0,i.useRef)();(0,i.useEffect)((function(){return!B&&Z&&null!=I&&window.docusaurus.prefetch(I),function(){B&&L.current&&L.current.disconnect()}}),[L,I,B,Z]);var M=null!=(t=null==(g=I)?void 0:g.startsWith("#"))&&t,W=!I||!Z||M;return W||k||E.collectLink(I),W?i.createElement("a",(0,r.Z)({ref:P,href:I},T&&!Z&&{target:"_blank",rel:"noopener noreferrer"},j)):i.createElement(U,(0,r.Z)({},j,{onMouseEnter:function(){_.current||null==I||(window.docusaurus.preload(I),_.current=!0)},innerRef:function(e){P.current=e,B&&e&&Z&&(L.current=new window.IntersectionObserver((function(n){n.forEach((function(n){e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(L.current.unobserve(e),L.current.disconnect(),null!=I&&window.docusaurus.prefetch(I))}))})),L.current.observe(e))},to:I},f&&{isActive:v,activeClassName:y}))}var f=i.forwardRef(g)},4136:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,i=e.split(/[#?]/)[0],s="/"===i||i===r?i:(a=i,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,s)}},8532:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.applyTrailingSlash=n.blogPostContainerID=void 0,n.blogPostContainerID="post-content";var a=t(4136);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}})},5639:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.className;return Array.isArray(n)&&n.every((function(e){return"string"==typeof e}))?r.createElement("pre",{className:t},r.createElement("code",null,n.join(""))):r.createElement("pre",{className:t},r.createElement("code",null,n))}},1803:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7294),a=t(6108),i=t(2735),s=t(3699);function o(e){var n=e.href,t=e.children;return r.createElement(s.Z,{href:n},t)}function l(e){var n=e.href,t=e.icon,a=e.title,i=e.description;return r.createElement(o,{href:n},r.createElement("h2",{title:a},t," ",a),i&&r.createElement("p",{title:i},i))}function u(e){var n=e.item,t=(0,a.Wl)(n);return t?r.createElement(l,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label}):null}function d(e){var n,t=e.item,s=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(n=t.docId)?n:void 0);return r.createElement(l,{href:t.href,icon:s,title:t.label,description:null==o?void 0:o.description})}function c(e){var n=e.item;switch(n.type){case"link":return r.createElement(d,{item:n});case"category":return r.createElement(u,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function p(e){var n=e.items,t=e.className;return r.createElement("section",{className:t},function(e){return e.filter((function(e){return"category"!==e.type||Boolean((0,a.Wl)(e))}))}(n).map((function(e,n){return r.createElement("article",{key:n},r.createElement(c,{item:e}))})))}},9478:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return g}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=t(1803),o=t(6108),l=t(5639),u=["components"],d={slug:"/sidebar"},c="Sidebar",p={unversionedId:"guides/docs/sidebar/index",id:"version-2.0.0-beta.20/guides/docs/sidebar/index",title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/versioned_docs/version-2.0.0-beta.20/guides/docs/sidebar/index.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/sidebar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/index.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",frontMatter:{slug:"/sidebar"},sidebar:"docs",previous:{title:"Create a doc",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/create-doc"},next:{title:"Sidebar items",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/sidebar/items"}},m={},g=[{value:"Default sidebar",id:"default-sidebar",level:2},{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Theme configuration",id:"theme-configuration",level:2},{value:"Hideable sidebar",id:"hideable-sidebar",level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",level:3},{value:"Passing custom props",id:"passing-custom-props",level:2},{value:"Sidebar Breadcrumbs",id:"sidebar-breadcrumbs",level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",level:2}],f={toc:g};function b(e){var n=e.components,d=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,d,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sidebar"},"Sidebar"),(0,i.kt)("p",null,"Creating a sidebar is useful to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group multiple ",(0,i.kt)("strong",{parentName:"li"},"related documents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display a sidebar")," on each of those documents"),(0,i.kt)("li",{parentName:"ul"},"Provide ",(0,i.kt)("strong",{parentName:"li"},"paginated navigation"),", with next/previous button")),(0,i.kt)("p",null,"To use sidebars on your Docusaurus site:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a file that exports a dictionary of ",(0,i.kt)("a",{parentName:"li",href:"#sidebar-object"},"sidebar objects"),"."),(0,i.kt)("li",{parentName:"ol"},"Pass this object into the ",(0,i.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-docs")," plugin directly or via ",(0,i.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: require.resolve("./sidebars.js"),\n        },\n      },\n    ],\n  ],\n};\n')),(0,i.kt)("p",null,"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"),(0,i.kt)(s.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"default-sidebar"},"Default sidebar"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebarPath")," is unspecified, Docusaurus ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/sidebar/autogenerated"},"automatically generates a sidebar")," for you, by using the filesystem structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    {\n      type: "autogenerated",\n      dirName: ".", // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n')),(0,i.kt)("p",null,"You can also define your sidebars explicitly."),(0,i.kt)("h2",{id:"sidebar-object"},"Sidebar object"),(0,i.kt)("p",null,"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | { [categoryLabel: string]: SidebarItem[] };\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    {\n      type: "category",\n      label: "Getting Started",\n      items: [\n        {\n          type: "doc",\n          id: "doc1",\n        },\n      ],\n    },\n    {\n      type: "category",\n      label: "Docusaurus",\n      items: [\n        {\n          type: "doc",\n          id: "doc2",\n        },\n        {\n          type: "doc",\n          id: "doc3",\n        },\n      ],\n    },\n    {\n      type: "link",\n      label: "Learn more",\n      href: "https://example.com",\n    },\n  ],\n};\n')),(0,i.kt)("p",null,"This is a sidebars file that exports one sidebar, called ",(0,i.kt)("inlineCode",{parentName:"p"},"mySidebar"),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."),(0,i.kt)("p",null,"A sidebars file can contain ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/sidebar/multiple-sidebars"},(0,i.kt)("strong",{parentName:"a"},"multiple sidebar objects")),", identified by their object keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n")),(0,i.kt)("h2",{id:"theme-configuration"},"Theme configuration"),(0,i.kt)("h3",{id:"hideable-sidebar"},"Hideable sidebar"),(0,i.kt)("p",null,"By enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.docs.sidebar.hideable")," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        hideable: true,\n      },\n    },\n    // highlight-end\n  },\n};\n")),(0,i.kt)("h3",{id:"auto-collapse-sidebar-categories"},"Auto-collapse sidebar categories"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.docs.sidebar.autoCollapseCategories")," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        autoCollapseCategories: true,\n      },\n    },\n    // highlight-end\n  },\n};\n")),(0,i.kt)("h2",{id:"passing-custom-props"},"Passing custom props"),(0,i.kt)("p",null,"To pass in custom props to a swizzled sidebar item, add the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"customProps")," object to any of the items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'doc',\n  id: 'doc1',\n  customProps: {\n    /* props */\n  },\n};\n")),(0,i.kt)("h2",{id:"sidebar-breadcrumbs"},"Sidebar Breadcrumbs"),(0,i.kt)("p",null,'By default, breadcrumbs are rendered at the top, using the "sidebar path" of the current page.'),(0,i.kt)("p",null,"This behavior can be disabled with plugin options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          breadcrumbs: false,\n        },\n      },\n    ],\n  ],\n};\n')),(0,i.kt)("h2",{id:"complex-sidebars-example"},"Complex sidebars example"),(0,i.kt)("p",null,"A real-world example from the Docusaurus site:"),(0,i.kt)(l.Z,{className:"language-js",title:"sidebars.js",mdxType:"CodeBlock"},t(6322).Z.split("\n").map((function(e){return!["//","/*","*"].some((function(n){return e.trim().startsWith(n)}))&&e})).filter(Boolean).join("\n")))}b.isMDXComponent=!0},6322:function(e,n){n.Z='// @ts-check\n\n/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */\nconst sidebars = {\n  docs: [\n    "introduction",\n    {\n      type: "category",\n      label: "Getting Started",\n      link: {\n        type: "generated-index",\n      },\n      collapsed: false,\n      items: [\n        "installation",\n        "configuration",\n        "playground",\n        "typescript-support",\n      ],\n    },\n    {\n      type: "category",\n      label: "Guides",\n      link: {\n        type: "generated-index",\n        title: "Docusaurus Guides",\n        description:\n          "Let\'s learn about the most important Docusaurus concepts!",\n        keywords: ["guides"],\n        image: "/img/docusaurus.png",\n      },\n      items: [\n        "guides/creating-pages",\n        {\n          type: "category",\n          label: "Docs",\n          link: {\n            type: "doc",\n            id: "guides/docs/introduction",\n          },\n          items: [\n            "guides/docs/create-doc",\n            {\n              type: "category",\n              label: "Sidebar",\n              link: {\n                type: "doc",\n                id: "guides/docs/sidebar/index",\n              },\n              items: [\n                "guides/docs/sidebar/items",\n                "guides/docs/sidebar/autogenerated",\n                "guides/docs/sidebar/multiple-sidebars",\n              ],\n            },\n            "guides/docs/versioning",\n            "guides/docs/multi-instance",\n          ],\n        },\n        "blog",\n        {\n          type: "category",\n          label: "Markdown Features",\n          link: {\n            type: "doc",\n            id: "guides/markdown-features/introduction",\n          },\n          items: [\n            "guides/markdown-features/react",\n            "guides/markdown-features/tabs",\n            "guides/markdown-features/code-blocks",\n            "guides/markdown-features/admonitions",\n            "guides/markdown-features/toc",\n            "guides/markdown-features/assets",\n            "guides/markdown-features/links",\n            "guides/markdown-features/plugins",\n            "guides/markdown-features/math-equations",\n            "guides/markdown-features/head-metadata",\n          ],\n        },\n        "styling-layout",\n        "swizzling",\n        "static-assets",\n        "search",\n        "browser-support",\n        "seo",\n        "using-plugins",\n        "deployment",\n        {\n          type: "category",\n          label: "Internationalization",\n          link: { type: "doc", id: "i18n/introduction" },\n          items: [\n            {\n              type: "doc",\n              id: "i18n/tutorial",\n              label: "Tutorial",\n            },\n            {\n              type: "doc",\n              id: "i18n/git",\n              label: "Using Git",\n            },\n            {\n              type: "doc",\n              id: "i18n/crowdin",\n              label: "Using Crowdin",\n            },\n          ],\n        },\n        "guides/whats-next",\n      ],\n    },\n    {\n      type: "category",\n      label: "Advanced Guides",\n      link: { type: "doc", id: "advanced/index" },\n      items: [\n        "advanced/architecture",\n        "advanced/plugins",\n        "advanced/routing",\n        "advanced/ssg",\n        "advanced/client",\n      ],\n    },\n    {\n      type: "category",\n      label: "Migrating from v1 to v2",\n      items: [\n        "migration/migration-overview",\n        "migration/migration-automated",\n        "migration/migration-manual",\n        "migration/migration-versioned-sites",\n        "migration/migration-translated-sites",\n      ],\n    },\n  ],\n  api: [\n    "cli",\n    "docusaurus-core",\n    {\n      type: "autogenerated",\n      dirName: "api",\n    },\n  ],\n};\n\nmodule.exports = sidebars;\n'}}]);