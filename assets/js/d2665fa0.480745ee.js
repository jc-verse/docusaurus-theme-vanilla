"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[9270],{4879:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},3713:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6010),o="browserWindow_my1Q",i="browserWindowHeader_jXSR",l="buttons_uHc7",s="browserWindowAddressBar_Pd8y",d="dot_giz1",c="browserWindowMenuIcon_Vhuh",m="bar_rrRL",p="browserWindowBody_Idgs";function u(e){var t=e.children,n=e.minHeight,u=e.url,k=void 0===u?"http://localhost:3000":u;return a.createElement("div",{className:o,style:{minHeight:n}},a.createElement("div",{className:i},a.createElement("div",{className:l},a.createElement("span",{className:d,style:{background:"#f25f58"}}),a.createElement("span",{className:d,style:{background:"#fbbe3c"}}),a.createElement("span",{className:d,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(s,"text--truncate")},k),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:m}),a.createElement("span",{className:m}),a.createElement("span",{className:m})))),a.createElement("div",{className:p},t))}},6500:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.className;return Array.isArray(t)&&t.every((function(e){return"string"==typeof e}))?a.createElement("pre",{className:n},a.createElement("code",null,t.join(""))):a.createElement("pre",{className:n},a.createElement("code",null,t))}},250:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(102),o=["parentIndex"];function i(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,r.Z)(e,o);n>=0?t[n].children.push(i):a.push(i)})),a}function l(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function s(e){var t=e.items;return t.length?a.createElement("ol",null,t.map((function(e,t){return a.createElement("li",{key:t},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{items:e.children}))}))):null}function d(e){var t=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:e.toc,minHeadingLevel:2,maxHeadingLevel:3});return a.createElement(s,{items:t})}},927:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(250)},3909:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3123:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),o=n(6010),i=n(5074),l=n(4879),s=n(5425),d=n(1085);function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,p=e.values,u=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),y=w.tabGroupChoices,b=w.setTabGroupChoices,N=(0,r.useState)(v),x=N[0],T=N[1],M=[],C=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var j=y[u];null!=j&&j!==x&&g.some((function(e){return e.value===j}))&&T(j)}var I=function(e){var t=e.currentTarget,n=M.indexOf(t),a=g[n].value;a!==x&&(C(t),T(a),null!=u&&b(u,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=M.indexOf(e.currentTarget)+1;n=null!=(a=M[r])?a:M[0];break;case"ArrowLeft":var o,i=M.indexOf(e.currentTarget)-1;n=null!=(o=M[i])?o:M[M.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return M.push(e)},onKeyDown:E,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3703:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return y},assets:function(){return w},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return b}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(3713),l=n(3123),s=n(3909),d="wrappingBlock_TvGH",c=n(6500),m=n(4644),p=["components"],u={toc:[]};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",null,"Hello ",n.name),(0,o.kt)("p",null,"This is text some content from ",(0,o.kt)("inlineCode",{parentName:"p"},"_markdown-partial-example.md"),"."))}k.isMDXComponent=!0;n(927);var h=["components"],g={id:"react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},f="MDX and React",v={unversionedId:"guides/markdown-features/react",id:"version-2.0.0-beta.20/guides/markdown-features/react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",source:"@site/versioned_docs/version-2.0.0-beta.20/guides/markdown-features/markdown-features-react.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/react",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features/react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-react.mdx",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653837263,formattedLastUpdatedAt:"5/29/2022",frontMatter:{id:"react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features"},next:{title:"Tabs",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features/tabs"}},w={},y=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b=[{value:"Using JSX in Markdown",id:"using-jsx-in-markdown",level:2},{value:"Importing components",id:"importing-components",level:3},{value:"Markdown and JSX interoperability",id:"markdown-and-jsx-interoperability",level:3},{value:"Importing code snippets",id:"importing-code-snippets",level:2},{value:"Importing Markdown",id:"importing-markdown",level:2},{value:"Available exports",id:"available-exports",level:2}],N={Highlight:y,toc:b};function x(e){var t=e.components,n=(0,r.Z)(e,h);return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mdx-and-react"},"MDX and React"),(0,o.kt)("h2",{id:"using-jsx-in-markdown"},"Using JSX in Markdown"),(0,o.kt)("p",null,"Docusaurus has built-in support for ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX v1"),", which allows you to write JSX within your Markdown files and render them as React components."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While Docusaurus parses both ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files using MDX, some of the syntaxes are treated slightly differently by third-party tools. For the most accurate parsing and better editor support, we recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," extension for files containing MDX syntax."))),(0,o.kt)("p",null,"To define any custom component within an MDX file, you have to export it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n")),(0,o.kt)("p",null,"Notice how it renders both the markup from your React component and the Markdown syntax:"),(0,o.kt)(i.Z,{minHeight:240,mdxType:"BrowserWindow"},(0,o.kt)(y,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," ","and ",(0,o.kt)(y,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,o.kt)("p",null,"I can write ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,o.kt)("em",{parentName:"p"},"JSX"),"!")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"MDX is JSX")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since all doc files are parsed using MDX, anything that looks like HTML is actually JSX. Therefore, if you need to inline-style a component, follow JSX flavor and provide style objects."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* Instead of this: */\n<span style=\"background-color: red\">Foo</span>\n/* Use this: */\n<span style={{backgroundColor: 'red'}}>Foo</span>\n")),(0,o.kt)("p",{parentName:"div"},"This behavior is different from Docusaurus 1. See also ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/migration/manual#convert-style-attributes-to-style-objects-in-mdx"},"Migrating from v1 to v2"),"."),(0,o.kt)("p",{parentName:"div"},"In addition, MDX is not ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3018"},"100% compatible with CommonMark"),". Use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"},"MDX playground"))," to ensure that your syntax is valid MDX."))),(0,o.kt)("h3",{id:"importing-components"},"Importing components"),(0,o.kt)("p",null,"You can also import your own components defined in other files or third-party components installed via npm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- Docusaurus theme component --\x3e\nimport TOCInline from '@theme/TOCInline';\n\x3c!-- External component --\x3e\nimport Button from '@mui/material/Button';\n\x3c!-- Custom component --\x3e\nimport BrowserWindow from '@site/src/components/BrowserWindow';\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@site")," alias points to your website's directory, usually where the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file is. Using an alias instead of relative paths (",(0,o.kt)("inlineCode",{parentName:"p"},"'../../src/components/BrowserWindow'"),") saves you from updating import paths when moving files around, or when ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/versioning"},"versioning docs")," and ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/i18n/tutorial"},"translating"),"."))),(0,o.kt)("p",null,"While declaring components within Markdown is very convenient for simple cases, it becomes hard to maintain because of limited editor support, risks of parsing errors, and low reusability. Use a separate ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," file when your component involves complex JS logic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/Highlight.js"',title:'"src/components/Highlight.js"'},'import React from "react";\n\nexport default function Highlight({ children, color }) {\n  return (\n    <span\n      style={{\n        backgroundColor: color,\n        borderRadius: "2px",\n        color: "#fff",\n        padding: "0.2rem",\n      }}>\n      {children}\n    </span>\n  );\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="markdown-file.mdx"',title:'"markdown-file.mdx"'},"import Highlight from '@site/src/components/Highlight';\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight>\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX docs")," to see what other fancy stuff you can do with MDX."),(0,o.kt)("h3",{id:"markdown-and-jsx-interoperability"},"Markdown and JSX interoperability"),(0,o.kt)("p",null,"Docusaurus v2 is using MDX v1, which has a lot of known cases where the content fails to be correctly parsed as Markdown. Use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"},"MDX playground"))," to ensure that your syntax is valid MDX."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Samples of parsing failures"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A paragraph starting with a JSX tag will be seen entirely as a JSX string:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}>Highlighted text</span> but afterwards _Markdown_ **doesn't work**\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},"Highlighted text")," but afterwards _Markdown_ **doesn't work**"))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Use JSX for the rest of the line, or prefix the line with some plain text:"),(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}>Use JSX for the paragraph</span> to stop <i>worrying about</i> <b>Markdown</b>\n\n&#8203;<span style={{color: 'red'}}>\u2190 This is a zero-width space</span> and afterwards <i>Markdown</i> <b>works</b>\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},"Use JSX for the paragraph")," to stop ",(0,o.kt)("i",null,"worrying about")," ",(0,o.kt)("b",null,"Markdown"),(0,o.kt)("p",null,"\u200b",(0,o.kt)("span",{style:{color:"red"}},"\u2190 This is a zero-width space")," and afterwards ",(0,o.kt)("i",null,"Markdown")," ",(0,o.kt)("b",null,"works")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Markdown within a JSX tag never works:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}>**Bold doesn't work**</span>\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},"**Bold doesn't work**")))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Use JSX within JSX tag, or move the Markdown to the outer layer:"),(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}><b>Bold now works</b></span>\n\n**<span style={{color: 'red'}}>Bold now works</span>**\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},(0,o.kt)("b",null,"Bold now works")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("span",{style:{color:"red"}},"Bold now works"))))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Text immediately below a JSX tag will be seen as JSX text:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n**Bold still doesn't work**\n</div>\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},"**Bold still doesn't work**")))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Add an empty new line:"),(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n\n**Bold now works**\n\n</div>\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bold now works"))))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Markdown text indented by four spaces will be seen as a code block:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n\n    You may think I'm just some text...\n\n</div>\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You may think I'm just some text...\n")))))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Don't indent:"),(0,o.kt)("div",{className:d},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n\nNow I'm actually just text\n\n</div>\n"))),(0,o.kt)("div",{className:d},(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},(0,o.kt)("p",null,"Now I'm actually just text"))))))),(0,o.kt)("h2",{id:"importing-code-snippets"},"Importing code snippets"),(0,o.kt)("p",null,"You can not only import a file containing a component definition, but also import any code file as raw text, and then insert it in a code block, thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/raw-loader/"},"Webpack raw-loader"),". In order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"raw-loader"),", you first need to install it in your project:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save raw-loader\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add raw-loader\n")))),(0,o.kt)("p",null,"Now you can import code snippets from another file as it is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="myMarkdownFile.mdx"',title:'"myMarkdownFile.mdx"'},"import CodeBlock from '@theme/CodeBlock';\nimport MyComponentSource from '!!raw-loader!./myComponent';\n\n<CodeBlock language=\"jsx\">{MyComponentSource}</CodeBlock>\n")),(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)(c.Z,{language:"jsx",mdxType:"CodeBlock"},m.Z)),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features/code-blocks#usage-in-jsx"},"using code blocks in JSX")," for more details of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," component."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," rather than the Markdown triple-backtick ",(0,o.kt)("inlineCode",{parentName:"p"},"```"),", because the latter will ship out any of its content as-is, but you want to interpolate the imported text here."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature is experimental and might be subject to breaking API changes in the future."))),(0,o.kt)("h2",{id:"importing-markdown"},"Importing Markdown"),(0,o.kt)("p",null,"You can use Markdown files as components and import them elsewhere, either in Markdown files or in React pages."),(0,o.kt)("p",null,"By convention, using the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"_")," filename prefix")," will not create any doc page and means the markdown file is a ",(0,o.kt)("strong",{parentName:"p"},'"partial"'),", to be imported by other files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="_markdown-partial-example.mdx"',title:'"_markdown-partial-example.mdx"'},"<span>Hello {props.name}</span>\n\nThis is text some content from `_markdown-partial-example.mdx`.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="someOtherDoc.mdx"',title:'"someOtherDoc.mdx"'},'import PartialExample from "./_markdown-partial-example.mdx";\n\n<PartialExample name="Sebastien" />;\n')),(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)(k,{name:"Sebastien",mdxType:"PartialExample"})),(0,o.kt)("p",null,"This way, you can reuse content among multiple pages and avoid duplicating materials."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, the table of contents does not contain the imported Markdown headings. This is a technical limitation that we are trying to solve (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3915"},"issue"),")."))),(0,o.kt)("h2",{id:"available-exports"},"Available exports"),(0,o.kt)("p",null,"Within the MDX page, the following variables are available as globals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"frontMatter"),": the front matter as a record of string keys and values;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toc"),": the table of contents, as a tree of headings. See also ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features/toc#inline-table-of-contents"},"Inline TOC")," for a more concrete use-case."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contentTitle"),": the Markdown title, which is the first ",(0,o.kt)("inlineCode",{parentName:"li"},"h1")," heading in the Markdown text. It's ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," if there isn't one (e.g. title specified in the front matter).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\nimport CodeBlock from '@theme/CodeBlock';\n\nThe table of contents for this page, serialized:\n\n<CodeBlock className=\"language-json\">{JSON.stringify(toc, null, 2)}</CodeBlock>\n\nThe front matter of this page:\n\n<ul>\n  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}\n</ul>\n\n<p>The title of this page is: <b>{contentTitle}</b></p>\n")),(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("p",null,"The table of contents for this page, serialized:"),(0,o.kt)(c.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(b,null,2)),(0,o.kt)("p",null,"The front matter of this page:"),(0,o.kt)("ul",null,Object.entries(g).map((function(e){var t=e[0],n=e[1];return(0,o.kt)("li",{key:t},(0,o.kt)("b",null,t),": ",n)}))),(0,o.kt)("p",null,"The title of this page is: ",(0,o.kt)("b",null,f))))}x.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4644:function(e,t){t.Z='/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, { useState } from "react";\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? "true" : "false"}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}\n'}}]);