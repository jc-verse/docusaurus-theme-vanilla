"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2717],{7129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:0,title:"\ud83d\udce6 create-docusaurus",slug:"/api/misc/create-docusaurus"},s=void 0,p={unversionedId:"api/misc/create-docusaurus",id:"version-2.0.0-beta.21/api/misc/create-docusaurus",title:"\ud83d\udce6 create-docusaurus",description:"A scaffolding utility to help you instantly set up a functional Docusaurus app.",source:"@site/versioned_docs/version-2.0.0-beta.21/api/misc/create-docusaurus.md",sourceDirName:"api/misc",slug:"/api/misc/create-docusaurus",permalink:"/docs/api/misc/create-docusaurus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/create-docusaurus.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\ud83d\udce6 create-docusaurus",slug:"/api/misc/create-docusaurus"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia"},next:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docs/api/misc/@docusaurus/eslint-plugin"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>-t, --typescript</code>",id:"typescript",level:3},{value:"<code>-g, --git-strategy</code>",id:"git-strategy",level:3},{value:"<code>-p, --package-manager</code>",id:"package-manager",level:3},{value:"<code>-s, --skip-install</code>",id:"skip-install",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A scaffolding utility to help you instantly set up a functional Docusaurus app."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest [name] [template] [rootDir]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," argument will be used as the site's path as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field in the created app's package.json. It can be an absolute path, or a path relative to ",(0,r.kt)("inlineCode",{parentName:"p"},"rootDir"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," argument can be one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"classic"),": Uses the classic template (recommended)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"facebook"),": Uses the Facebook/Meta template, which contains some Meta-specific setup"),(0,r.kt)("li",{parentName:"ul"},"A git repo URL (beginning with ",(0,r.kt)("inlineCode",{parentName:"li"},"https://")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"git@"),"), which can be cloned to the destination"),(0,r.kt)("li",{parentName:"ul"},"A local file path relative to CWD, which contains the files to be copied to destination")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rootDir")," will be used to resolve the absolute path to the site directory. The default is CWD."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This command should be preferably used in an interactive shell so all features are available."))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"typescript"},(0,r.kt)("inlineCode",{parentName:"h3"},"-t, --typescript")),(0,r.kt)("p",null,"Used when the template argument is a recognized name. Currently, only ",(0,r.kt)("inlineCode",{parentName:"p"},"classic")," provides a TypeScript variant."),(0,r.kt)("h3",{id:"git-strategy"},(0,r.kt)("inlineCode",{parentName:"h3"},"-g, --git-strategy")),(0,r.kt)("p",null,"Used when the template argument is a git repo. It needs to be one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deep"),": preserves full git history"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shallow"),": clones with ",(0,r.kt)("inlineCode",{parentName:"li"},"--depth=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"copy"),": does a shallow clone, but does not create a git repo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"custom"),": enter your custom git clone command. We will prompt you for it. You can write something like ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone --depth 10"),", and we will append the repository URL and destination directory.")),(0,r.kt)("h3",{id:"package-manager"},(0,r.kt)("inlineCode",{parentName:"h3"},"-p, --package-manager")),(0,r.kt)("p",null,"Value should be one of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),". If it's not explicitly provided, Docusaurus will infer one based on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The lockfile already present in the CWD (e.g. if you are setting up website in an existing project)"),(0,r.kt)("li",{parentName:"ul"},"The command used to invoke ",(0,r.kt)("inlineCode",{parentName:"li"},"create-docusaurus")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"npm init"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"npx"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn create"),", etc.)"),(0,r.kt)("li",{parentName:"ul"},"Interactive prompting, in case all heuristics are not present")),(0,r.kt)("h3",{id:"skip-install"},(0,r.kt)("inlineCode",{parentName:"h3"},"-s, --skip-install")),(0,r.kt)("p",null,"If provided, Docusaurus will not automatically install dependencies after creating the app. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--package-manager")," option is only useful when you are actually installing dependencies."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);