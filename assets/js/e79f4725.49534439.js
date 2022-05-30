"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[4411],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return d}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=s,h=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return t?n.createElement(h,i(i({ref:a},m),{},{components:t})):n.createElement(h,i({ref:a},m))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3609:function(e,a,t){function n(e,a){return void 0===a&&(a=function(e,a){return e===a}),e.filter((function(t,n){return e.findIndex((function(e){return a(e,t)}))!==n}))}t.d(a,{l:function(){return n}})},6270:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(7294);function s(e){var a=e.children,t=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},a)}},5261:function(e,a,t){t.d(a,{Z:function(){return h}});var n=t(7462),s=t(7294),r=t(6010),i=t(1048),l=t(3609),o=t(1943),p=t(2957),m="tabHeadings_mkcK",u="tabHeading_k98D",c="tabsContainer_i8yn";function d(e){var a,t,i=e.lazy,d=e.defaultValue,h=e.values,k=e.groupId,g=e.className,N=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:N.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,l.l)(f,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(a=null!=d?d:null==(t=N.find((function(e){return e.props.default})))?void 0:t.props.value)?a:N[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),x=w.tabGroupChoices,b=w.setTabGroupChoices,M=(0,s.useState)(y),T=M[0],C=M[1],j=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=x[k];null!=O&&O!==T&&f.some((function(e){return e.value===O}))&&C(O)}var S=function(e){var a=e.currentTarget,t=j.indexOf(a),n=f[t].value;n!==T&&(D(a),C(n),null!=k&&b(k,String(n)))},X=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n,s=j.indexOf(e.currentTarget)+1;t=null!=(n=j[s])?n:j[0];break;case"ArrowLeft":var r,i=j.indexOf(e.currentTarget)-1;t=null!=(r=j[i])?r:j[j.length-1]}null==(a=t)||a.focus()};return s.createElement("div",{className:c},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)(m,g)},f.map((function(e){var a=e.value,t=e.label,i=e.attributes;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return j.push(e)},onKeyDown:X,onFocus:S,onClick:S},i,{className:(0,r.Z)(u,null==i?void 0:i.className)}),null!=t?t:a)}))),i?(0,s.cloneElement)(N.filter((function(e){return e.props.value===T}))[0]):s.createElement("div",null,N.map((function(e,a){return(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function h(e){var a=(0,i.Z)();return s.createElement(d,(0,n.Z)({key:String(a)},e))}},83:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),i=t(5261),l=t(6270),o=["components"],p={id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},m="MDX Plugins",u={unversionedId:"guides/markdown-features/plugins",id:"guides/markdown-features/plugins",title:"MDX Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",source:"@site/docs/guides/markdown-features/markdown-features-plugins.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/plugins",permalink:"/docusaurus-theme-vanilla/docs/next/markdown-features/plugins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-plugins.mdx",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653902082,formattedLastUpdatedAt:"5/30/2022",frontMatter:{id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},sidebar:"docs",previous:{title:"Markdown links",permalink:"/docusaurus-theme-vanilla/docs/next/markdown-features/links"},next:{title:"Math Equations",permalink:"/docusaurus-theme-vanilla/docs/next/markdown-features/math-equations"}},c={},d=[{value:"Default plugins",id:"default-plugins",level:2},{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Creating new rehype/remark plugins",id:"creating-new-rehyperemark-plugins",level:2}],h={toc:d};function k(e){var a=e.components,t=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mdx-plugins"},"MDX Plugins"),(0,r.kt)("p",null,"Sometimes, you may want to extend or tweak your Markdown syntax. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How do I embed youtube videos using the image syntax (",(0,r.kt)("inlineCode",{parentName:"li"},"![](https://youtu.be/yKNxeF4KMsY)"),")?"),(0,r.kt)("li",{parentName:"ul"},"How do I style links that are on their own lines differently, e.g., as a social card?"),(0,r.kt)("li",{parentName:"ul"},"How do I make every page start with a copyright notice?")),(0,r.kt)("p",null,"And the answer is: create an MDX plugin! MDX has a built-in ",(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/advanced/plugins/"},"plugin system")," that can be used to customize how the Markdown files will be parsed and transformed to JSX. There are three typical use-cases of MDX plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using existing ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins"},"remark plugins")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins"},"rehype plugins"),";"),(0,r.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to transform the elements generated by existing MDX syntax;"),(0,r.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to introduce new syntaxes to MDX.")),(0,r.kt)("p",null,"If you play with the ",(0,r.kt)("a",{parentName:"p",href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"},"MDX playground"),", you would notice that the MDX transpilation has two intermediate steps: Markdown AST (MDAST), and Hypertext AST (HAST), before arriving at the final JSX output. MDX plugins also come in two forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/remarkjs/remark/"},"Remark")),": processes the Markdown AST."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/rehypejs/rehype/"},"Rehype")),": processes the Hypertext AST.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project. The ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/markdown-features/admonitions"},"admonition")," syntax that we offer is also generated by a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/elviswolcott/remark-admonitions"},"Remark plugin"),", and you could do the same for your own use case."))),(0,r.kt)("h2",{id:"default-plugins"},"Default plugins"),(0,r.kt)("p",null,"Docusaurus injects ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-mdx-loader/src/remark"},"some default Remark plugins")," during Markdown processing. These plugins would:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate the table of contents;"),(0,r.kt)("li",{parentName:"ul"},"Add anchor links to each heading;"),(0,r.kt)("li",{parentName:"ul"},"Transform images and links to ",(0,r.kt)("inlineCode",{parentName:"li"},"require()")," calls."),(0,r.kt)("li",{parentName:"ul"},"\u2026")),(0,r.kt)("p",null,"These are all typical use-cases of Remark plugins, which can also be a source of inspiration if you want to implement your own plugin."),(0,r.kt)("h2",{id:"installing-plugins"},"Installing plugins"),(0,r.kt)("p",null,"An MDX plugin is usually an npm package, so you install them like other npm packages using npm. Take the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/markdown-features/math-equations"},"math plugins")," as an example."),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save remark-math@3 rehype-katex@4\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add remark-math@3 rehype-katex@4\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There's recently a trend in the Remark/Rehype ecosystem to migrate to ES Modules, a new JavaScript module system, which Docusaurus doesn't support yet. Please make sure your installed plugin version is CommonJS-compatible before we officially support ESM. Alternatively, you can read about using dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import()")," as a workaround in the tutorial of installing ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/markdown-features/math-equations#upgrading-rehype-katex-beyond-recommended-version"},(0,r.kt)("inlineCode",{parentName:"a"},"rehype-katex")),"."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How are ",(0,r.kt)("code",null,"remark-math")," and ",(0,r.kt)("code",null,"rehype-katex")," different?"),(0,r.kt)("p",null,"In case you are wondering how Remark and Rehype are different, here is a good example. ",(0,r.kt)("inlineCode",{parentName:"p"},"remark-math")," operates on the Markdown AST, where it sees text like ",(0,r.kt)("inlineCode",{parentName:"p"},"$...$"),", and all it does is transform that to the JSX ",(0,r.kt)("inlineCode",{parentName:"p"},'<span class="math math-inline">...</span>')," without doing too much with the content. This decouples the extraction of math formulae from their rendering, which means you can swap ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"KaTeX")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\KaTeX")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"K"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.17em"}}),(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,r.kt)("span",{parentName:"span"})))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," out with other math renderers, like MathJax (with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax"},(0,r.kt)("inlineCode",{parentName:"a"},"rehype-mathjax")),"), just by replacing the Rehype plugin."),(0,r.kt)("p",null,"Next, the ",(0,r.kt)("inlineCode",{parentName:"p"},"rehype-katex")," operates on the Hypertext AST where everything has been converted to HTML-like tags already. It traverses all the elements with ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," class and uses ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"KaTeX")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\KaTeX")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"K"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.17em"}}),(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,r.kt)("span",{parentName:"span"})))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," to parse and render the content to actual HTML.")),(0,r.kt)("p",null,"Next, add them to the plugin options through plugin or preset config in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'// highlight-start\nconst math = require("remark-math");\nconst katex = require("rehype-katex");\n// highlight-end\n\nmodule.exports = {\n  title: "Docusaurus",\n  tagline: "Build optimized websites quickly, focus on your content",\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-start\n          remarkPlugins: [math],\n          rehypePlugins: [katex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("h2",{id:"configuring-plugins"},"Configuring plugins"),(0,r.kt)("p",null,"Some plugins can be configured and accept their own options. In that case, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"[plugin, pluginOptions]")," syntax, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          remarkPlugins: [math],\n          rehypePlugins: [\n            // highlight-next-line\n            [katex, { strict: false }],\n          ],\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("p",null,"You should check your plugin's documentation for the options it supports."),(0,r.kt)("h2",{id:"creating-new-rehyperemark-plugins"},"Creating new rehype/remark plugins"),(0,r.kt)("p",null,"If there isn't an existing package that satisfies your customization need, you can create your own MDX plugin."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The writeup below is ",(0,r.kt)("strong",{parentName:"p"},"not")," meant to be a comprehensive guide to creating a plugin, but just an illustration of how to make it work with Docusaurus. Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"},"Remark")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"},"Rehype")," documentation for a more in-depth explanation of how they work."))),(0,r.kt)("p",null,"For example, let's make a plugin that visits every ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," heading and adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"Section X. ")," prefix. First, create your plugin source file anywhere\u2014you can even publish it as a separate npm package and install it like explained above. We would put ours at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/remark/section-prefix.js"),". A remark/rehype plugin is just a function that receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"transformer")," that operates on the AST."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'"src/remark/section-prefix.js"','"src/remark/section-prefix.js"':!0},'const visit = require("unist-util-visit");\n\nconst plugin = (options) => {\n  const transformer = async (ast) => {\n    let number = 1;\n    visit(ast, "heading", (node) => {\n      if (node.depth === 2 && node.children.length > 0) {\n        node.children.unshift({\n          type: "text",\n          value: `Section ${number}. `,\n        });\n        number++;\n      }\n    });\n  };\n  return transformer;\n};\n\nmodule.exports = plugin;\n')),(0,r.kt)("p",null,"You can now import your plugin in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," and use it just like an installed plugin!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'// highlight-next-line\nconst sectionPrefix = require("./src/remark/section-prefix");\n\nmodule.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          remarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transformer")," has a second parameter ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vfile/vfile"},(0,r.kt)("inlineCode",{parentName:"a"},"vfile"))," which is useful if you need to access the current Markdown file's path."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const plugin = (options) => {\n  const transformer = async (ast, vfile) => {\n    ast.children.unshift({\n      type: "text",\n      value: `The current file path is ${vfile.path}`,\n    });\n  };\n  return transformer;\n};\n')),(0,r.kt)("p",{parentName:"div"},"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"transformImage")," plugin uses this parameter, for example, to transform relative image references to ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," calls."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The default plugins of Docusaurus would operate before the custom remark plugins, and that means the images or links have been converted to JSX with ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," calls already. For example, in the example above, the table of contents generated is still the same even when all ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," headings are now prefixed by ",(0,r.kt)("inlineCode",{parentName:"p"},"Section X."),", because the TOC-generating plugin is called before our custom plugin. If you need to process the MDAST before the default plugins do, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDefaultRemarkPlugins")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDefaultRehypePlugins"),"."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          beforeDefaultRemarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("p",{parentName:"div"},"This would make the table of contents generated contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"Section X.")," prefix as well."))))}k.isMDXComponent=!0}}]);