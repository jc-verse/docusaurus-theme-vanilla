"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[244],{4879:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},3909:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},3123:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(3117),i=n(7294),r=n(6010),s=n(5074),o=n(4879),l=n(5425),d=n(1085);function c(e){var t,n,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,u=e.groupId,h=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),N=y.tabGroupChoices,f=y.setTabGroupChoices,w=(0,i.useState)(v),x=w[0],C=w[1],j=[],T=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var S=N[u];null!=S&&S!==x&&k.some((function(e){return e.value===S}))&&C(S)}var D=function(e){var t=e.currentTarget,n=j.indexOf(t),a=k[n].value;a!==x&&(T(t),C(a),null!=u&&f(u,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=j.indexOf(e.currentTarget)+1;n=null!=(a=j[i])?a:j[0];break;case"ArrowLeft":var r,s=j.indexOf(e.currentTarget)-1;n=null!=(r=j[s])?r:j[j.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},k.map((function(e){var t=e.value,n=e.label,s=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:D,onClick:D},s,{className:(0,r.Z)("tabs__item",null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,s.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},3615:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),s=n(3123),o=n(3909),l=["components"],d={toc_max_heading_level:4,slug:"/sidebar/items"},c="Sidebar items",p={unversionedId:"guides/docs/sidebar/items",id:"version-2.0.0-beta.21/guides/docs/sidebar/items",title:"Sidebar items",description:"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.",source:"@site/versioned_docs/version-2.0.0-beta.21/guides/docs/sidebar/items.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/items",permalink:"/docs/sidebar/items",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/items.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",frontMatter:{toc_max_heading_level:4,slug:"/sidebar/items"},sidebar:"docs",previous:{title:"Sidebar",permalink:"/docs/sidebar"},next:{title:"Autogenerated",permalink:"/docs/sidebar/autogenerated"}},m={},u=[{value:"Doc: link to a doc",id:"sidebar-item-doc",level:2},{value:"Link: link to any page",id:"sidebar-item-link",level:2},{value:"HTML: render custom markup",id:"sidebar-item-html",level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",level:2},{value:"Category links",id:"category-link",level:3},{value:"Doc link",id:"category-doc-link",level:4},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:3},{value:"Using shorthands",id:"using-shorthands",level:2},{value:"Doc shorthand",id:"doc-shorthand",level:3},{value:"Category shorthand",id:"category-shorthand",level:3}],h={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sidebar-items"},"Sidebar items"),(0,r.kt)("p",null,"We have introduced three types of item types in the example in the previous section: ",(0,r.kt)("inlineCode",{parentName:"p"},"doc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"link"),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,r.kt)("inlineCode",{parentName:"p"},"autogenerated"),", which we will explain in detail later."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-doc"},"Doc")),": link to a doc page, associating it with the sidebar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-link"},"Link")),": link to any internal or external page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-category"},"Category")),": creates a dropdown of sidebar items"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/sidebar/autogenerated"},"Autogenerated")),": generate a sidebar slice automatically"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-html"},"HTML")),": renders pure HTML in the item's position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/sidebar/multiple-sidebars#sidebar-item-ref"},"*","Ref")),": link to a doc page, without making the item take part in navigation generation")),(0,r.kt)("h2",{id:"sidebar-item-doc"},"Doc: link to a doc"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," type to link to a doc page and assign that doc to a sidebar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: "doc";\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: "doc",\n      id: "doc1", // document ID\n      label: "Getting started", // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    "doc2", // document ID\n    // highlight-end\n  ],\n};\n')),(0,r.kt)("p",null,"If you use the doc shorthand or ",(0,r.kt)("a",{parentName:"p",href:"#sidebar-item-autogenerated"},"autogenerated")," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_label")," markdown front matter within that doc, which has higher precedence over the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," key in the sidebar item. Similarly, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_custom_props")," to declare custom metadata for a doc page."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," item sets an ",(0,r.kt)("a",{parentName:"p",href:"#sidebar-association"},"implicit sidebar association"),". Don't assign the same doc to multiple sidebars: change the type to ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," instead."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sidebar custom props is a useful way to propagate arbitrary doc metadata to the client side, so you can get additional information when using any doc-related hook that fetches a doc object."))),(0,r.kt)("h2",{id:"sidebar-item-link"},"Link: link to any page"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," type to link to any page (internal or external) that is not a doc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type SidebarItemLink = {\n  type: "link";\n  label: string;\n  href: string;\n  className?: string;\n};\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: "link",\n      label: "Facebook", // The link label\n      href: "https://facebook.com", // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: "link",\n      label: "Home", // The link label\n      href: "/", // The internal path\n    },\n    // highlight-end\n  ],\n};\n')),(0,r.kt)("h2",{id:"sidebar-item-html"},"HTML: render custom markup"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," type to render custom HTML within the item's ",(0,r.kt)("inlineCode",{parentName:"p"},"<li>")," tag."),(0,r.kt)("p",null,"This can be useful for inserting custom items such as dividers, section titles, ads, and images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type SidebarItemHtml = {\n  type: "html";\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  myHtmlSidebar: [\n    // highlight-start\n    {\n      type: "html",\n      value: \'<img src="sponsor.png" alt="Sponsor" />\', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n    // highlight-end\n  ],\n};\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The menu item is already wrapped in an ",(0,r.kt)("inlineCode",{parentName:"p"},"<li>")," tag, so if your custom item is simple, such as a title, just supply a string as the value and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," property to style it:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  myHtmlSidebar: [\n    {\n      type: "html",\n      value: "Core concepts",\n      className: "sidebar-title",\n    },\n  ],\n};\n')))),(0,r.kt)("h2",{id:"sidebar-item-category"},"Category: create a hierarchy"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," type to create a hierarchy of sidebar items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type SidebarItemCategory = {\n  type: "category";\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      collapsible: true,\n      collapsed: false,\n      items: [\n        "creating-pages",\n        {\n          type: "category",\n          label: "Docs",\n          items: ["introduction", "sidebar", "markdown-features", "versioning"],\n        },\n      ],\n    },\n  ],\n};\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"#category-shorthand"},(0,r.kt)("strong",{parentName:"a"},"shorthand syntax"))," when you don't need customizations:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  docs: {\n    Guides: [\n      "creating-pages",\n      {\n        Docs: ["introduction", "sidebar", "markdown-features", "versioning"],\n      },\n    ],\n  },\n};\n')))),(0,r.kt)("h3",{id:"category-link"},"Category links"),(0,r.kt)("p",null,"With category links, clicking on a category can navigate you to another page."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use category links to introduce a category of documents."))),(0,r.kt)("h4",{id:"category-doc-link"},"Doc link"),(0,r.kt)("p",null,"A category can link to an existing document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      // highlight-start\n      link: { type: "doc", id: "introduction" },\n      // highlight-end\n      items: ["pages", "docs", "blog", "search"],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"See it in action on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/introduction"},"i18n introduction page"),"."),(0,r.kt)("h4",{id:"generated-index-page"},"Generated index page"),(0,r.kt)("p",null,"You can auto-generate an index page that displays all the direct children of this category. The ",(0,r.kt)("inlineCode",{parentName:"p"},"slug")," allows you to customize the generated page's route, which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/category/[categoryName]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      // highlight-start\n      link: {\n        type: "generated-index",\n        title: "Docusaurus Guides",\n        description: "Learn about the most important Docusaurus concepts!",\n        slug: "/category/docusaurus-guides",\n        keywords: ["guides"],\n        image: "/img/docusaurus.png",\n      },\n      // highlight-end\n      items: ["pages", "docs", "blog", "search"],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"See it in action on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/guides"},"Docusaurus Guides page"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"generated-index")," links as a quick way to get an introductory document."))),(0,r.kt)("h4",{id:"embedding-generated-index-in-doc-page"},"Embedding generated index in doc page"),(0,r.kt)("p",null,"You can embed the generated cards list in a normal doc page as well, as long as the doc is used as a category index page. To do so, you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"DocCardList")," component, paired with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCurrentSidebarCategory")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="a-category-index-page.md"',title:'"a-category-index-page.md"'},"import DocCardList from '@theme/DocCardList';\nimport {useCurrentSidebarCategory} from '@docusaurus/theme-common';\n\nIn this section, we will introduce the following concepts:\n\n<DocCardList items={useCurrentSidebarCategory().items}/>\n")),(0,r.kt)("p",null,"See this in action on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sidebar"},"sidebar guides page"),"."),(0,r.kt)("h3",{id:"collapsible-categories"},"Collapsible categories"),(0,r.kt)("p",null,"We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsible: false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      items: [\n        "creating-pages",\n        {\n          type: "category",\n          // highlight-next-line\n          collapsible: false,\n          label: "Docs",\n          items: ["introduction", "sidebar", "markdown-features", "versioning"],\n        },\n      ],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"To make all categories non-collapsible by default, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarCollapsible")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin-content-docs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The option in ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarCollapsible")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," globally."))),(0,r.kt)("h3",{id:"expanded-categories-by-default"},"Expanded categories by default"),(0,r.kt)("p",null,"Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  docs: {\n    Guides: [\n      "creating-pages",\n      {\n        type: "category",\n        label: "Docs",\n        // highlight-next-line\n        collapsed: false,\n        items: ["markdown-features", "sidebar", "versioning"],\n      },\n    ],\n  },\n};\n')),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsible"),", you can also set the global configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"options.sidebarCollapsed")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Individual ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," options in ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," will still take precedence over this configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When a category has ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed: true")," but ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsible: false")," (either through ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded."))),(0,r.kt)("h2",{id:"using-shorthands"},"Using shorthands"),(0,r.kt)("p",null,"You can express typical sidebar items without much customization more concisely with ",(0,r.kt)("strong",{parentName:"p"},"shorthand syntaxes"),". There are two parts to this: ",(0,r.kt)("a",{parentName:"p",href:"#doc-shorthand"},(0,r.kt)("strong",{parentName:"a"},"doc shorthand"))," and ",(0,r.kt)("a",{parentName:"p",href:"#category-shorthand"},(0,r.kt)("strong",{parentName:"a"},"category shorthand")),"."),(0,r.kt)("h3",{id:"doc-shorthand"},"Doc shorthand"),(0,r.kt)("p",null,"An item with type ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," can be simply a string representing its ID:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Longhand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      type: "doc",\n      id: "myDoc",\n    },\n    // highlight-end\n  ],\n};\n'))),(0,r.kt)(o.Z,{value:"Shorthand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n    // highlight-start\n    "myDoc",\n    // highlight-end\n  ],\n};\n')))),(0,r.kt)("p",null,"So it's possible to simplify the example above to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    {\n      type: "category",\n      label: "Getting Started",\n      items: [\n        // highlight-next-line\n        "doc1",\n      ],\n    },\n    {\n      type: "category",\n      label: "Docusaurus",\n      items: [\n        // highlight-start\n        "doc2",\n        "doc3",\n        // highlight-end\n      ],\n    },\n    {\n      type: "link",\n      label: "Learn more",\n      href: "https://example.com",\n    },\n  ],\n};\n')),(0,r.kt)("h3",{id:"category-shorthand"},"Category shorthand"),(0,r.kt)("p",null,"A category item can be represented by an object whose key is its label, and the value is an array of subitems."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Longhand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      type: "category",\n      label: "Getting started",\n      items: ["doc1", "doc2"],\n    },\n    // highlight-end\n  ],\n};\n'))),(0,r.kt)(o.Z,{value:"Shorthand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      "Getting started": ["doc1", "doc2"],\n    },\n    // highlight-end\n  ],\n};\n')))),(0,r.kt)("p",null,"This permits us to simplify that example to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      "Getting started": ["doc1"],\n    },\n    {\n      Docusaurus: ["doc2", "doc3"],\n    },\n    // highlight-end\n    {\n      type: "link",\n      label: "Learn more",\n      href: "https://example.com",\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      "Getting started": ["doc1"],\n      Docusaurus: ["doc2", "doc3"],\n    },\n    // highlight-end\n    {\n      type: "link",\n      label: "Learn more",\n      href: "https://example.com",\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,r.kt)("strong",{parentName:"p"},"sidebar slice"),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,r.kt)("a",{parentName:"p",href:"/docs/sidebar/autogenerated"},"autogenerated sidebars"),"."),(0,r.kt)("p",null,"Wherever you have an array of items that is reduced to one category shorthand, you can omit that enclosing array as well."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Before",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n    {\n      "Getting started": ["doc1"],\n      Docusaurus: [\n        {\n          "Basic guides": ["doc2", "doc3"],\n          "Advanced guides": ["doc4", "doc5"],\n        },\n      ],\n    },\n  ],\n};\n'))),(0,r.kt)(o.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: {\n    "Getting started": ["doc1"],\n    Docusaurus: {\n      "Basic guides": ["doc2", "doc3"],\n      "Advanced guides": ["doc4", "doc5"],\n    },\n  },\n};\n')))))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);