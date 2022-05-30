"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[1374],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7153:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},l="Static Assets",u={unversionedId:"static-assets",id:"static-assets",title:"Static Assets",description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are.",source:"@site/docs/static-assets.md",sourceDirName:".",slug:"/static-assets",permalink:"/docusaurus-theme-vanilla/docs/next/static-assets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/static-assets.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653902082,formattedLastUpdatedAt:"5/30/2022",frontMatter:{description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},sidebar:"docs",previous:{title:"Swizzling",permalink:"/docusaurus-theme-vanilla/docs/next/swizzling"},next:{title:"Search",permalink:"/docusaurus-theme-vanilla/docs/next/search"}},c={},p=[{value:"Referencing your static asset",id:"referencing-your-static-asset",level:2},{value:"In JSX",id:"in-jsx",level:3},{value:"In Markdown",id:"in-markdown",level:3},{value:"In CSS",id:"in-css",level:3},{value:"Caveats",id:"caveats",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"static-assets"},"Static Assets"),(0,r.kt)("p",null,"Static assets are the non-code files that are directly copied to the build output. They include images, stylesheets, favicons, fonts, etc."),(0,r.kt)("p",null,"By default, you are suggested to put these assets in the ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," folder. Every file you put into ",(0,r.kt)("strong",{parentName:"p"},"that directory will be copied")," into the root of the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," folder with the directory hierarchy preserved. E.g. if you add a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"sun.jpg")," to the static folder, it will be copied to ",(0,r.kt)("inlineCode",{parentName:"p"},"build/sun.jpg"),"."),(0,r.kt)("p",null,"This means that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for site ",(0,r.kt)("inlineCode",{parentName:"li"},"baseUrl: '/'"),", the image ",(0,r.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,r.kt)("inlineCode",{parentName:"li"},"/img/docusaurus.png"),"."),(0,r.kt)("li",{parentName:"ul"},"for site ",(0,r.kt)("inlineCode",{parentName:"li"},"baseUrl: '/subpath/'"),", the image ",(0,r.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,r.kt)("inlineCode",{parentName:"li"},"/subpath/img/docusaurus.png"),".")),(0,r.kt)("p",null,"You can customize the static directory sources in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". For example, we can add ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," as another possible path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  title: "My site",\n  staticDirectories: ["public", "static"],\n  // ...\n};\n')),(0,r.kt)("p",null,"Now, all files in ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," will be copied to the build output."),(0,r.kt)("h2",{id:"referencing-your-static-asset"},"Referencing your static asset"),(0,r.kt)("h3",{id:"in-jsx"},"In JSX"),(0,r.kt)("p",null,"In JSX, you can reference assets from the ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," folder in your code using absolute URLs, but this is not ideal because changing the site ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," will ",(0,r.kt)("strong",{parentName:"p"},"break those links"),". For the image ",(0,r.kt)("inlineCode",{parentName:"p"},'<img src="/img/docusaurus.png" />')," served at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/test"),", the browser will try to resolve it from the URL root, i.e. as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/img/docusaurus.png"),", which will fail because it's actually served at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/test/img/docusaurus.png"),"."),(0,r.kt)("p",null,"You can ",(0,r.kt)("inlineCode",{parentName:"p"},"import()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," the static asset (recommended), or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function: both prepend the ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," to paths for you."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},'import DocusaurusImageUrl from "@site/static/img/docusaurus.png";\n\n<img src={DocusaurusImageUrl} />;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},'<img src={require("@site/static/img/docusaurus.png").default} />\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},'import useBaseUrl from "@docusaurus/useBaseUrl";\n\n<img src={useBaseUrl("/img/docusaurus.png")} />;\n')),(0,r.kt)("p",null,"You can also import SVG files: they will be transformed into React components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},'import DocusaurusLogoWithKeytar from "@site/static/img/docusaurus_keytar.svg";\n\n<DocusaurusLogoWithKeytar title="Docusaurus Logo" className="logo" />;\n')),(0,r.kt)("h3",{id:"in-markdown"},"In Markdown"),(0,r.kt)("p",null,"In Markdown, you can stick to using absolute paths when writing links or images ",(0,r.kt)("strong",{parentName:"p"},"in Markdown syntax")," because Docusaurus handles them as ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," calls instead of URLs when parsing the Markdown. See ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/markdown-features/assets"},"Markdown static assets"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"You write a link like this: [Download this document](/files/note.docx)\n\nDocusaurus changes that to: <a href={require('static/files/note.docx')}>Download this document</a>\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"use markdown syntax")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Docusaurus will only parse links that are in Markdown syntax. If your asset references are using the JSX tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>"),", nothing will be done."))),(0,r.kt)("h3",{id:"in-css"},"In CSS"),(0,r.kt)("p",null,"In CSS, the ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," function is commonly used to reference assets like fonts and images. To reference a static asset, use absolute paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@font-face {\n  font-family: "Caroline";\n  src: url("/font/Caroline.otf");\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"static/font/Caroline.otf")," asset will be loaded by the bundler."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"important takeaway")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"One important takeaway: ",(0,r.kt)("strong",{parentName:"p"},"never hardcode your base URL!")," The base URL is considered an implementation detail and should be easily changeable. All paths, even when they look like URL slugs, are actually file paths."),(0,r.kt)("p",{parentName:"div"},"If you find the URL slug mental model more understandable, here's a rule of thumb:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Pretend you have a base URL like ",(0,r.kt)("inlineCode",{parentName:"li"},"/test/")," when writing JSX so you don't use an absolute URL path like ",(0,r.kt)("inlineCode",{parentName:"li"},'src="/img/thumbnail.png"')," but instead ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," the asset."),(0,r.kt)("li",{parentName:"ul"},"Pretend it's ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," when writing Markdown or CSS so you always use absolute paths without the base URL.")))),(0,r.kt)("h2",{id:"caveats"},"Caveats"),(0,r.kt)("p",null,"Keep in mind that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, none of the files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"static")," folder will be post-processed, hashed, or minified.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"However, as we've demonstrated above, we are usually able to convert them to ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," calls for you so they do get processed. This is good for aggressive caching and better user experience."))),(0,r.kt)("li",{parentName:"ul"},"Missing files referenced via hard-coded absolute paths will not be detected at compilation time and will result in a 404 error."),(0,r.kt)("li",{parentName:"ul"},"By default, GitHub Pages runs published files through ",(0,r.kt)("a",{parentName:"li",href:"https://jekyllrb.com/"},"Jekyll"),". Since Jekyll will discard any files that begin with ",(0,r.kt)("inlineCode",{parentName:"li"},"_"),", it is recommended that you disable Jekyll by adding an empty file named ",(0,r.kt)("inlineCode",{parentName:"li"},".nojekyll")," file to your ",(0,r.kt)("inlineCode",{parentName:"li"},"static")," directory if you are using GitHub pages for hosting.")))}m.isMDXComponent=!0}}]);