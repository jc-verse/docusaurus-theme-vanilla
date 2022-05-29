"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[7462],{3713:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7294),i=t(6010),s="browserWindow_my1Q",l="browserWindowHeader_jXSR",o="buttons_uHc7",u="browserWindowAddressBar_Pd8y",c="dot_giz1",r="browserWindowMenuIcon_Vhuh",m="bar_rrRL",d="browserWindowBody_Idgs";function p(e){var n=e.children,t=e.minHeight,p=e.url,b=void 0===p?"http://localhost:3000":p;return a.createElement("div",{className:s,style:{minHeight:t}},a.createElement("div",{className:l},a.createElement("div",{className:o},a.createElement("span",{className:c,style:{background:"#f25f58"}}),a.createElement("span",{className:c,style:{background:"#fbbe3c"}}),a.createElement("span",{className:c,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,i.Z)(u,"text--truncate")},b),a.createElement("div",{className:r},a.createElement("div",null,a.createElement("span",{className:m}),a.createElement("span",{className:m}),a.createElement("span",{className:m})))),a.createElement("div",{className:d},n))}},250:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),i=t(102),s=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,i.Z)(e,s);t>=0?n[t].children.push(l):a.push(l)})),a}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function u(e){var n=e.items;return n.length?a.createElement("ol",null,n.map((function(e,n){return a.createElement("li",{key:n},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{items:e.children}))}))):null}function c(e){var n=function(e){var n=e.toc,t=e.minHeadingLevel,i=e.maxHeadingLevel;return(0,a.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:i})}),[n,t,i])}({toc:e.toc,minHeadingLevel:2,maxHeadingLevel:3});return a.createElement(u,{items:n})}},927:function(e,n,t){t.d(n,{Z:function(){return a.Z}});var a=t(250)},4492:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var a=t(3117),i=t(102),s=(t(7294),t(3905)),l=t(3713),o=t(927),u=["components"],c={id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},r="Headings and Table of contents",m={unversionedId:"guides/markdown-features/toc",id:"version-2.0.0-beta.21/guides/markdown-features/toc",title:"Headings and Table of contents",description:"Customizing headings and table-of-contents in Markdown",source:"@site/versioned_docs/version-2.0.0-beta.21/guides/markdown-features/markdown-features-toc.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/toc",permalink:"/docusaurus-theme-vanilla/docs/markdown-features/toc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-toc.mdx",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653837263,formattedLastUpdatedAt:"5/29/2022",frontMatter:{id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},sidebar:"docs",previous:{title:"Admonitions",permalink:"/docusaurus-theme-vanilla/docs/markdown-features/admonitions"},next:{title:"Assets",permalink:"/docusaurus-theme-vanilla/docs/markdown-features/assets"}},d={},p=[{value:"Markdown headings",id:"markdown-headings",level:2},{value:"Heading IDs",id:"heading-ids",level:3},{value:"Inline table of contents",id:"inline-table-of-contents",level:2},{value:"Customizing table of contents generation",id:"customizing-table-of-contents-generation",level:2},{value:"Example Section 1",id:"example-section-1",level:2},{value:"Example Subsection 1 a",id:"example-subsection-1-a",level:3},{value:"Example subsubsection 1 a I",id:"example-subsubsection-1-a-i",level:4},{value:"Example subsubsection 1 a II",id:"example-subsubsection-1-a-ii",level:4},{value:"Example subsubsection 1 a III",id:"example-subsubsection-1-a-iii",level:4},{value:"Example Subsection 1 b",id:"example-subsection-1-b",level:3},{value:"Example subsubsection 1 b I",id:"example-subsubsection-1-b-i",level:4},{value:"Example subsubsection 1 b II",id:"example-subsubsection-1-b-ii",level:4},{value:"Example subsubsection 1 b III",id:"example-subsubsection-1-b-iii",level:4},{value:"Example Subsection 1 c",id:"example-subsection-1-c",level:3},{value:"Example subsubsection 1 c I",id:"example-subsubsection-1-c-i",level:4},{value:"Example subsubsection 1 c II",id:"example-subsubsection-1-c-ii",level:4},{value:"Example subsubsection 1 c III",id:"example-subsubsection-1-c-iii",level:4},{value:"Example Section 2",id:"example-section-2",level:2},{value:"Example Subsection 2 a",id:"example-subsection-2-a",level:3},{value:"Example subsubsection 2 a I",id:"example-subsubsection-2-a-i",level:4},{value:"Example subsubsection 2 a II",id:"example-subsubsection-2-a-ii",level:4},{value:"Example subsubsection 2 a III",id:"example-subsubsection-2-a-iii",level:4},{value:"Example Subsection 2 b",id:"example-subsection-2-b",level:3},{value:"Example subsubsection 2 b I",id:"example-subsubsection-2-b-i",level:4},{value:"Example subsubsection 2 b II",id:"example-subsubsection-2-b-ii",level:4},{value:"Example subsubsection 2 b III",id:"example-subsubsection-2-b-iii",level:4},{value:"Example Subsection 2 c",id:"example-subsection-2-c",level:3},{value:"Example subsubsection 2 c I",id:"example-subsubsection-2-c-i",level:4},{value:"Example subsubsection 2 c II",id:"example-subsubsection-2-c-ii",level:4},{value:"Example subsubsection 2 c III",id:"example-subsubsection-2-c-iii",level:4},{value:"Example Section 3",id:"example-section-3",level:2},{value:"Example Subsection 3 a",id:"example-subsection-3-a",level:3},{value:"Example subsubsection 3 a I",id:"example-subsubsection-3-a-i",level:4},{value:"Example subsubsection 3 a II",id:"example-subsubsection-3-a-ii",level:4},{value:"Example subsubsection 3 a III",id:"example-subsubsection-3-a-iii",level:4},{value:"Example Subsection 3 b",id:"example-subsection-3-b",level:3},{value:"Example subsubsection 3 b I",id:"example-subsubsection-3-b-i",level:4},{value:"Example subsubsection 3 b II",id:"example-subsubsection-3-b-ii",level:4},{value:"Example subsubsection 3 b III",id:"example-subsubsection-3-b-iii",level:4},{value:"Example Subsection 3 c",id:"example-subsection-3-c",level:3},{value:"Example subsubsection 3 c I",id:"example-subsubsection-3-c-i",level:4},{value:"Example subsubsection 3 c II",id:"example-subsubsection-3-c-ii",level:4},{value:"Example subsubsection 3 c III",id:"example-subsubsection-3-c-iii",level:4}],b={toc:p};function h(e){var n=e.components,t=(0,i.Z)(e,u);return(0,s.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"headings-and-table-of-contents"},"Headings and Table of contents"),(0,s.kt)("h2",{id:"markdown-headings"},"Markdown headings"),(0,s.kt)("p",null,"You can use regular Markdown headings."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n")),(0,s.kt)("p",null,"Each Markdown heading will appear as a table of contents entry."),(0,s.kt)("h3",{id:"heading-ids"},"Heading IDs"),(0,s.kt)("p",null,"Each heading has an ID that can be automatically generated or explicitly specified. Heading IDs allow you to link to a specific document heading in Markdown or JSX:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"[link](#heading-id)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="#heading-id">link</Link>\n')),(0,s.kt)("p",null,"By default, Docusaurus will generate heading IDs for you, based on the heading text. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"### Hello World")," will have id ",(0,s.kt)("inlineCode",{parentName:"p"},"hello-world"),"."),(0,s.kt)("p",null,"Generated IDs have ",(0,s.kt)("strong",{parentName:"p"},"some limitations"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ID might not look good"),(0,s.kt)("li",{parentName:"ul"},"You might want to ",(0,s.kt)("strong",{parentName:"li"},"change or translate")," the text without updating the existing ID")),(0,s.kt)("p",null,"A special Markdown syntax lets you set an ",(0,s.kt)("strong",{parentName:"p"},"explicit heading id"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"### Hello World {#my-explicit-id}\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Use the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/docusaurus-theme-vanilla/docs/cli#docusaurus-write-heading-ids-sitedir"},"write-heading-ids"))," CLI command to add explicit ids to all your Markdown documents."))),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Avoid colliding IDs")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Generated heading IDs will be guaranteed to be unique on each page, but if you use custom IDs, make sure each one appears exactly once on each page, or there will be two DOM elements with the same ID, which is invalid HTML semantics, and will lead to one heading being unlinkable."))),(0,s.kt)("h2",{id:"inline-table-of-contents"},"Inline table of contents"),(0,s.kt)("p",null,"Each Markdown document displays a table of contents on the top-right corner. But it is also possible to display an inline table of contents directly inside a markdown document, thanks to MDX."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"toc")," variable is available in any MDX document and contains all the headings of an MDX document. By default, only ",(0,s.kt)("inlineCode",{parentName:"p"},"h2")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"h3")," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"minHeadingLevel")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"maxHeadingLevel")," for individual ",(0,s.kt)("inlineCode",{parentName:"p"},"TOCInline")," components."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n")),(0,s.kt)(l.Z,{mdxType:"BrowserWindow"},(0,s.kt)(o.Z,{toc:p,mdxType:"TOCInline"})),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"toc")," global is just a list of heading items:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"declare const toc: {\n  value: string;\n  id: string;\n  level: number;\n}[];\n")),(0,s.kt)("p",null,"Note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"toc")," global is a flat array, so you can easily cut out unwanted nodes or insert extra nodes, and create a new TOC tree."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n")),(0,s.kt)(l.Z,{mdxType:"BrowserWindow"},(0,s.kt)(o.Z,{toc:p.filter((function(e){return 2===e.level||4===e.level})),minHeadingLevel:2,maxHeadingLevel:4,mdxType:"TOCInline"})),(0,s.kt)("h2",{id:"customizing-table-of-contents-generation"},"Customizing table of contents generation"),(0,s.kt)("p",null,"The table-of-contents is generated by parsing the Markdown source with a ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/markdown-features/plugins"},"Remark plugin"),". There are known edge-cases where it generates false-positives and false-negatives."),(0,s.kt)("p",null,"Markdown headings within hideable areas will still show up in the TOC. For example, headings within ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/markdown-features/tabs"},(0,s.kt)("inlineCode",{parentName:"a"},"Tabs"))," and ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/markdown-features#details"},(0,s.kt)("inlineCode",{parentName:"a"},"details"))," will not be excluded."),(0,s.kt)("p",null,"Non-markdown headings will not show up in the TOC. This can be used to your advantage to tackle the aforementioned issue."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},'<details>\n<summary>Some details containing headings</summary>\n<h2 id="#heading-id">I\'m a heading that will not show up in the TOC</h2>\n\nSome content...\n\n</details>\n')),(0,s.kt)("p",null,"The ability to ergonomically insert extra headings or ignore certain headings is a work-in-progress. If this feature is important to you, please report your use-case in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/6201"},"this issue"),"."),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Below is just some dummy content to have more table of contents items available on the current page."))),(0,s.kt)("h2",{id:"example-section-1"},"Example Section 1"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h3",{id:"example-subsection-1-a"},"Example Subsection 1 a"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-1-a-i"},"Example subsubsection 1 a I"),(0,s.kt)("h4",{id:"example-subsubsection-1-a-ii"},"Example subsubsection 1 a II"),(0,s.kt)("h4",{id:"example-subsubsection-1-a-iii"},"Example subsubsection 1 a III"),(0,s.kt)("h3",{id:"example-subsection-1-b"},"Example Subsection 1 b"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-1-b-i"},"Example subsubsection 1 b I"),(0,s.kt)("h4",{id:"example-subsubsection-1-b-ii"},"Example subsubsection 1 b II"),(0,s.kt)("h4",{id:"example-subsubsection-1-b-iii"},"Example subsubsection 1 b III"),(0,s.kt)("h3",{id:"example-subsection-1-c"},"Example Subsection 1 c"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-1-c-i"},"Example subsubsection 1 c I"),(0,s.kt)("h4",{id:"example-subsubsection-1-c-ii"},"Example subsubsection 1 c II"),(0,s.kt)("h4",{id:"example-subsubsection-1-c-iii"},"Example subsubsection 1 c III"),(0,s.kt)("h2",{id:"example-section-2"},"Example Section 2"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h3",{id:"example-subsection-2-a"},"Example Subsection 2 a"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-2-a-i"},"Example subsubsection 2 a I"),(0,s.kt)("h4",{id:"example-subsubsection-2-a-ii"},"Example subsubsection 2 a II"),(0,s.kt)("h4",{id:"example-subsubsection-2-a-iii"},"Example subsubsection 2 a III"),(0,s.kt)("h3",{id:"example-subsection-2-b"},"Example Subsection 2 b"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-2-b-i"},"Example subsubsection 2 b I"),(0,s.kt)("h4",{id:"example-subsubsection-2-b-ii"},"Example subsubsection 2 b II"),(0,s.kt)("h4",{id:"example-subsubsection-2-b-iii"},"Example subsubsection 2 b III"),(0,s.kt)("h3",{id:"example-subsection-2-c"},"Example Subsection 2 c"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-2-c-i"},"Example subsubsection 2 c I"),(0,s.kt)("h4",{id:"example-subsubsection-2-c-ii"},"Example subsubsection 2 c II"),(0,s.kt)("h4",{id:"example-subsubsection-2-c-iii"},"Example subsubsection 2 c III"),(0,s.kt)("h2",{id:"example-section-3"},"Example Section 3"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h3",{id:"example-subsection-3-a"},"Example Subsection 3 a"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-3-a-i"},"Example subsubsection 3 a I"),(0,s.kt)("h4",{id:"example-subsubsection-3-a-ii"},"Example subsubsection 3 a II"),(0,s.kt)("h4",{id:"example-subsubsection-3-a-iii"},"Example subsubsection 3 a III"),(0,s.kt)("h3",{id:"example-subsection-3-b"},"Example Subsection 3 b"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-3-b-i"},"Example subsubsection 3 b I"),(0,s.kt)("h4",{id:"example-subsubsection-3-b-ii"},"Example subsubsection 3 b II"),(0,s.kt)("h4",{id:"example-subsubsection-3-b-iii"},"Example subsubsection 3 b III"),(0,s.kt)("h3",{id:"example-subsection-3-c"},"Example Subsection 3 c"),(0,s.kt)("p",null,"Lorem ipsum"),(0,s.kt)("h4",{id:"example-subsubsection-3-c-i"},"Example subsubsection 3 c I"),(0,s.kt)("h4",{id:"example-subsubsection-3-c-ii"},"Example subsubsection 3 c II"),(0,s.kt)("h4",{id:"example-subsubsection-3-c-iii"},"Example subsubsection 3 c III"))}h.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return r},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},r=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,r=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,b=d["".concat(u,".").concat(p)]||d[p]||m[p]||s;return t?a.createElement(b,l(l({ref:n},r),{},{components:t})):a.createElement(b,l({ref:n},r))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);