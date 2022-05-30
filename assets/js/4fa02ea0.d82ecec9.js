"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2831],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},s="Markdown links",d={unversionedId:"guides/markdown-features/links",id:"version-2.0.0-beta.20/guides/markdown-features/links",title:"Markdown links",description:"Links to other pages in Markdown",source:"@site/versioned_docs/version-2.0.0-beta.20/guides/markdown-features/markdown-features-links.md",sourceDirName:"guides/markdown-features",slug:"/markdown-features/links",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features/links",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-links.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",frontMatter:{id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},sidebar:"docs",previous:{title:"Assets",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features/assets"},next:{title:"MDX Plugins",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/markdown-features/plugins"}},u={},c=[],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown-links"},"Markdown links"),(0,o.kt)("p",null,"There are two ways of adding a link to another page: through a ",(0,o.kt)("strong",{parentName:"p"},"URL path")," and a ",(0,o.kt)("strong",{parentName:"p"},"file path"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"- [URL path to another document](./installation)\n- [file path to another document](./installation.md)\n")),(0,o.kt)("p",null,"URL paths are unprocessed by Docusaurus, and you can see them as directly rendering to ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="./installation">'),", i.e. it will be resolved according to the page's URL location, rather than its file-system location."),(0,o.kt)("p",null,"If you want to reference another Markdown file ",(0,o.kt)("strong",{parentName:"p"},"included by the same plugin"),", you could use the relative path of the document you want to link to. Docusaurus' Markdown loader will convert the file path to the target file's URL path (and hence remove the ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," extension)."),(0,o.kt)("p",null,"For example, if you are in ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/folder/doc1.md")," and you want to reference ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/folder/doc2.md"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/folder/subfolder/doc3.md")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/otherFolder/doc4.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/folder/doc1.md"',title:'"docs/folder/doc1.md"'},"I am referencing a [document](doc2.md).\n\nReference to another [document in a subfolder](subfolder/doc3.md).\n\n[Relative document](../otherFolder/doc4.md) referencing works as well.\n")),(0,o.kt)("p",null,"Relative file paths are resolved against the current file's directory. Absolute file paths, on the other hand, are resolved relative to the ",(0,o.kt)("strong",{parentName:"p"},"content root"),", usually ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"blog/"),", or ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/i18n/tutorial"},"localized ones")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/zh-Hans/plugin-content-docs/current"),"."),(0,o.kt)("p",null,"Absolute file paths can also be relative to the site directory. However, beware that links that begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog/")," are ",(0,o.kt)("strong",{parentName:"p"},"not portable")," as you would need to manually update them if you create new doc versions or localize them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"You can write [links](/otherFolder/doc4.md) relative to the content root (`/docs/`).\n\nYou can also write [links](/docs/otherFolder/doc4.md) relative to the site directory, but it's not recommended.\n")),(0,o.kt)("p",null,"Using relative ",(0,o.kt)("em",{parentName:"p"},"file")," paths (with ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," extensions) instead of relative ",(0,o.kt)("em",{parentName:"p"},"URL")," links provides the following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Links will keep working on the GitHub interface and many Markdown editors"),(0,o.kt)("li",{parentName:"ul"},"You can customize the files' slugs without having to update all the links"),(0,o.kt)("li",{parentName:"ul"},"Moving files around the folders can be tracked by your editor, and some editors may automatically update file links"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/versioning"},"versioned doc")," will link to another doc of the exact same version"),(0,o.kt)("li",{parentName:"ul"},"Relative URL links are very likely to break if you update the ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/docusaurus-config#trailingSlash"},(0,o.kt)("inlineCode",{parentName:"a"},"trailingSlash")," config"))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Markdown file references only work when the source and target files are processed by the same plugin instance. This is a technical limitation of our Markdown processing architecture and will be fixed in the future. If you are linking files between plugins (e.g. linking to a doc page from a blog post), you have to use URL links."))))}m.isMDXComponent=!0}}]);