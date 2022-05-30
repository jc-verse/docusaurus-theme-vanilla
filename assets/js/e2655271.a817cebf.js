"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2236],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3699:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7462),o=n(3366),r=n(7294),i=n(3727),s=n(8532),l=n(9962),u=n(2735),p=n(6136),d=r.createContext({collectLink:function(){}});var c=n(9524),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];function h(e,t){var n,h,g=e.isNavLink,k=e.to,f=e.href,b=e.activeClassName,v=e.isActive,N=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,C=(0,o.Z)(e,m),x=(0,l.Z)().siteConfig,P=x.trailingSlash,T=x.baseUrl,R=(0,c.C)().withBaseUrl,L=(0,r.useContext)(d),U=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(function(){return U.current}));var j=k||f;var O,D=(0,u.Z)(j),B=null==j?void 0:j.replace("pathname://",""),_=void 0!==B?(O=B,y&&function(e){return e.startsWith("/")}(O)?R(O):O):void 0;_&&D&&(_=(0,s.applyTrailingSlash)(_,{trailingSlash:P,baseUrl:T}));var S=(0,r.useRef)(!1),A=g?i.OL:i.rU,I=p.Z.canUseIntersectionObserver,E=(0,r.useRef)();(0,r.useEffect)((function(){return!I&&D&&null!=_&&window.docusaurus.prefetch(_),function(){I&&E.current&&E.current.disconnect()}}),[E,_,I,D]);var M=null!=(n=null==(h=_)?void 0:h.startsWith("#"))&&n,H=!_||!D||M;return H||N||L.collectLink(_),H?r.createElement("a",(0,a.Z)({ref:U,href:_},j&&!D&&{target:"_blank",rel:"noopener noreferrer"},C)):r.createElement(A,(0,a.Z)({},C,{onMouseEnter:function(){S.current||null==_||(window.docusaurus.preload(_),S.current=!0)},innerRef:function(e){U.current=e,I&&e&&D&&(E.current=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(E.current.unobserve(e),E.current.disconnect(),null!=_&&window.docusaurus.prefetch(_))}))})),E.current.observe(e))},to:_},g&&{isActive:v,activeClassName:b}))}var g=r.forwardRef(h)},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,r=e.split(/[#?]/)[0],i="/"===r||r===a?r:(o=r,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(r,i)}},8532:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var o=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}})},5687:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),o=n(6010),r="browserWindow_my1Q",i="browserWindowHeader_jXSR",s="buttons_uHc7",l="browserWindowAddressBar_Pd8y",u="dot_giz1",p="browserWindowBody_Idgs";function d(e){var t=e.children,n=e.minHeight,d=e.url,c=void 0===d?"http://localhost:3000":d;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:i},a.createElement("div",{className:s},a.createElement("span",{className:u,style:{background:"#f25f58"}}),a.createElement("span",{className:u,style:{background:"#fbbe3c"}}),a.createElement("span",{className:u,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,o.Z)(l,"text--truncate")},c)),a.createElement("div",{className:p},t))}},1871:function(e,t,n){n.r(t),n.d(t,{FilePath:function(){return k},PageRoute:function(){return f},URLPath:function(){return g},assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=(n(3699),n(359)),s=n(6775),l=n(5687),u=["components"],p={description:"Docusaurus' routing system follows single-page application conventions: one route, one component."},d="Routing",c={unversionedId:"advanced/routing",id:"advanced/routing",title:"Routing",description:"Docusaurus' routing system follows single-page application conventions: one route, one component.",source:"@site/docs/advanced/routing.md",sourceDirName:"advanced",slug:"/advanced/routing",permalink:"/docusaurus-theme-vanilla/docs/next/advanced/routing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/routing.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",frontMatter:{description:"Docusaurus' routing system follows single-page application conventions: one route, one component."},sidebar:"docs",previous:{title:"Plugins",permalink:"/docusaurus-theme-vanilla/docs/next/advanced/plugins"},next:{title:"Static site generation",permalink:"/docusaurus-theme-vanilla/docs/next/advanced/ssg"}},m={},h=[{value:"Routing in content plugins",id:"routing-in-content-plugins",level:2},{value:"Pages routing",id:"pages-routing",level:3},{value:"Blog routing",id:"blog-routing",level:3},{value:"Docs routing",id:"docs-routing",level:3},{value:"File paths and URL paths",id:"file-paths-and-url-paths",level:3},{value:"Routes become HTML files",id:"routes-become-html-files",level:2},{value:"Generating and accessing routes",id:"generating-and-accessing-routes",level:2},{value:"Escaping from SPA redirects",id:"escaping-from-spa-redirects",level:2}],g=function(){return(0,r.kt)("code",null,(0,s.TH)().pathname)},k=function(){var e=(0,i.Iw)("default").activeVersion.name;return(0,r.kt)("code",null,"current"===e?"./docs/":"./versioned_docs/version-"+e+"/","advanced/routing.md")};function f(){var e=(0,s.TH)();return(0,r.kt)("span",null,"We are currently on ",(0,r.kt)("code",null,e.pathname))}var b={toc:h,URLPath:g,FilePath:k,PageRoute:f};function v(e){var t=e.components,i=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"routing"},"Routing"),(0,r.kt)("p",null,"Docusaurus' routing system follows single-page application conventions: one route, one component. In this section, we will begin by talking about routing within the three content plugins (docs, blog, and pages), and then go beyond to talk about the underlying routing system."),(0,r.kt)("h2",{id:"routing-in-content-plugins"},"Routing in content plugins"),(0,r.kt)("p",null,"Every content plugin provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"routeBasePath")," option. It defines where the plugins append their routes to. By default, the docs plugin puts its routes under ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs"),"; the blog plugin, ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog"),"; and the pages plugin, ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),". You can think about the route structure like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plugin routes model",src:n(108).Z+"#gh-light-mode-only",width:"1166",height:"554"}),(0,r.kt)("img",{alt:"plugin routes model",src:n(4231).Z+"#gh-dark-mode-only",width:"1166",height:"554"})),(0,r.kt)("p",null,"Any route will be matched against this nested route config until a good match is found. For example, when given a route ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/configuration"),", Docusaurus first enters the ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," branch, and then searches among the subroutes created by the docs plugin."),(0,r.kt)("p",null,"Changing ",(0,r.kt)("inlineCode",{parentName:"p"},"routeBasePath")," can effectively alter your site's route structure. For example, in ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/docs-introduction#docs-only-mode"},"Docs-only mode"),", we mentioned that configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"routeBasePath: '/'")," for docs means that all routes that the docs plugin create would not have the ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," prefix, yet it doesn't prevent you from having more subroutes like ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," created by other plugins."),(0,r.kt)("p",null,'Next, let\'s look at how the three plugins structure their own "boxes of subroutes".'),(0,r.kt)("h3",{id:"pages-routing"},"Pages routing"),(0,r.kt)("p",null,"Pages routing are straightforward: the file paths directly map to URLs, without any other way to customize. See the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/creating-pages#routing"},"pages docs")," for more information."),(0,r.kt)("p",null,"The component used for Markdown pages is ",(0,r.kt)("inlineCode",{parentName:"p"},"@theme/MDXPage"),". React pages are directly used as the route's component."),(0,r.kt)("h3",{id:"blog-routing"},"Blog routing"),(0,r.kt)("p",null,"The blog creates the following routes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Posts list pages"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/page/2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/page/3"),"...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The component is ",(0,r.kt)("inlineCode",{parentName:"li"},"@theme/BlogListPage"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Post pages"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"/2021/11/21/algolia-docsearch-migration"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/2021/05/12/announcing-docusaurus-two-beta"),"...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generated from each Markdown post."),(0,r.kt)("li",{parentName:"ul"},"The routes are fully customizable through the ",(0,r.kt)("inlineCode",{parentName:"li"},"slug")," front matter."),(0,r.kt)("li",{parentName:"ul"},"The component is ",(0,r.kt)("inlineCode",{parentName:"li"},"@theme/BlogPostPage"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tags list page"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"/tags"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The route is customizable through the ",(0,r.kt)("inlineCode",{parentName:"li"},"tagsBasePath")," option."),(0,r.kt)("li",{parentName:"ul"},"The component is ",(0,r.kt)("inlineCode",{parentName:"li"},"@theme/BlogTagsListPage"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tag pages"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"/tags/adoption"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/tags/beta"),"...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generated through the tags defined in each post's front matter."),(0,r.kt)("li",{parentName:"ul"},"The routes always have base defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"tagsBasePath"),", but the subroutes are customizable through the tag's ",(0,r.kt)("inlineCode",{parentName:"li"},"permalink")," field."),(0,r.kt)("li",{parentName:"ul"},"The component is ",(0,r.kt)("inlineCode",{parentName:"li"},"@theme/BlogTagsPostsPage"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Archive page"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"/archive"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The route is customizable through the ",(0,r.kt)("inlineCode",{parentName:"li"},"archiveBasePath")," option."),(0,r.kt)("li",{parentName:"ul"},"The component is ",(0,r.kt)("inlineCode",{parentName:"li"},"@theme/BlogArchivePage"),".")))),(0,r.kt)("h3",{id:"docs-routing"},"Docs routing"),(0,r.kt)("p",null,"The docs is the only plugin that creates ",(0,r.kt)("strong",{parentName:"p"},"nested routes"),". At the top, it registers ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/versioning"},(0,r.kt)("strong",{parentName:"a"},"version paths")),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/next"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/2.0.0-beta.13"),"... which provide the version context, including the layout and sidebar. This ensures that when switching between individual docs, the sidebar's state is preserved, and that you can switch between versions through the navbar dropdown while staying on the same doc. The component used is ",(0,r.kt)("inlineCode",{parentName:"p"},"@theme/DocPage"),"."),(0,r.kt)("p",null,"The individual docs are rendered in the remaining space after the navbar, footer, sidebar, etc. have all been provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"DocPage")," component. For example, this page, ",(0,r.kt)(g,{mdxType:"URLPath"}),", is generated from the file at ",(0,r.kt)(k,{mdxType:"FilePath"}),". The component used is ",(0,r.kt)("inlineCode",{parentName:"p"},"@theme/DocItem"),"."),(0,r.kt)("p",null,"The doc's ",(0,r.kt)("inlineCode",{parentName:"p"},"slug")," front matter customizes the last part of the route, but the base route is always defined by the plugin's ",(0,r.kt)("inlineCode",{parentName:"p"},"routeBasePath")," and the version's ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"."),(0,r.kt)("h3",{id:"file-paths-and-url-paths"},"File paths and URL paths"),(0,r.kt)("p",null,"Throughout the documentation, we always try to be unambiguous about whether we are talking about file paths or URL paths. Content plugins usually map file paths directly to URL paths, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs/advanced/routing.md")," will become ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/advanced/routing"),". However, with ",(0,r.kt)("inlineCode",{parentName:"p"},"slug"),", you can make URLs totally decoupled from the file structure."),(0,r.kt)("p",null,"When writing links in Markdown, you could either mean a ",(0,r.kt)("em",{parentName:"p"},"file path"),", or a ",(0,r.kt)("em",{parentName:"p"},"URL path"),", which Docusaurus would use several heuristics to determine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the path has a ",(0,r.kt)("inlineCode",{parentName:"li"},"@site")," prefix, it is ",(0,r.kt)("em",{parentName:"li"},"always")," an asset file path."),(0,r.kt)("li",{parentName:"ul"},"If the path has an ",(0,r.kt)("inlineCode",{parentName:"li"},"http(s)://")," prefix, it is ",(0,r.kt)("em",{parentName:"li"},"always")," a URL path."),(0,r.kt)("li",{parentName:"ul"},"If the path doesn't have an extension, it is a URL path. For example, a link ",(0,r.kt)("inlineCode",{parentName:"li"},"[page](../plugins)")," on a page with URL ",(0,r.kt)("inlineCode",{parentName:"li"},"/docs/advanced/routing")," will link to ",(0,r.kt)("inlineCode",{parentName:"li"},"/docs/plugins"),". Docusaurus will only detect broken links when building your site (when it knows the full route structure), but will make no assumptions about the existence of a file. It is exactly equivalent to writing ",(0,r.kt)("inlineCode",{parentName:"li"},'<a href="../plugins">page</a>')," in a JSX file."),(0,r.kt)("li",{parentName:"ul"},"If the path has an ",(0,r.kt)("inlineCode",{parentName:"li"},".md(x)")," extension, Docusaurus would try to resolve that Markdown file to a URL, and replace the file path with a URL path."),(0,r.kt)("li",{parentName:"ul"},"If the path has any other extension, Docusaurus would treat it as ",(0,r.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/next/markdown-features/assets"},"an asset")," and bundle it.")),(0,r.kt)("p",null,"The following directory structure may help you visualize this file -> URL mapping. Assume that there's no slug customization in any page."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"A sample site structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 blog                            # blog plugin has routeBasePath: '/blog'\n\u2502   \u251c\u2500\u2500 2019-05-28-first-blog-post.md       # -> /blog/2019/05/28/first-blog-post\n\u2502   \u251c\u2500\u2500 2019-05-29-long-blog-post.md        # -> /blog/2019/05/29/long-blog-post\n\u2502   \u251c\u2500\u2500 2021-08-01-mdx-blog-post.mdx        # -> /blog/2021/08/01/mdx-blog-post\n\u2502   \u2514\u2500\u2500 2021-08-26-welcome\n\u2502       \u251c\u2500\u2500 docusaurus-plushie-banner.jpeg\n\u2502       \u2514\u2500\u2500 index.md                        # -> /blog/2021/08/26/welcome\n\u251c\u2500\u2500 docs                            # docs plugin has routeBasePath: '/docs'; current version has base path '/'\n\u2502   \u251c\u2500\u2500 intro.md                            # -> /docs/intro\n\u2502   \u251c\u2500\u2500 tutorial-basics\n\u2502   \u2502   \u251c\u2500\u2500 _category_.json\n\u2502   \u2502   \u251c\u2500\u2500 congratulations.md              # -> /docs/tutorial-basics/congratulations\n\u2502   \u2502   \u2514\u2500\u2500 markdown-features.mdx           # -> /docs/tutorial-basics/congratulations\n\u2502   \u2514\u2500\u2500 tutorial-extras\n\u2502       \u251c\u2500\u2500 _category_.json\n\u2502       \u251c\u2500\u2500 manage-docs-versions.md         # -> /docs/tutorial-extras/manage-docs-versions\n\u2502       \u2514\u2500\u2500 translate-your-site.md          # -> /docs/tutorial-extras/translate-your-site\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages                       # pages plugin has routeBasePath: '/'\n\u2502       \u251c\u2500\u2500 index.module.css\n\u2502       \u251c\u2500\u2500 index.tsx                       # -> /\n\u2502       \u2514\u2500\u2500 markdown-page.md                # -> /markdown-page\n\u2514\u2500\u2500 versioned_docs\n    \u2514\u2500\u2500 version-1.0.0               # version has base path '/1.0.0'\n        \u251c\u2500\u2500 intro.md                        # -> /docs/1.0.0/intro\n        \u251c\u2500\u2500 tutorial-basics\n        \u2502   \u251c\u2500\u2500 _category_.json\n        \u2502   \u251c\u2500\u2500 congratulations.md          # -> /docs/1.0.0/tutorial-basics/congratulations\n        \u2502   \u2514\u2500\u2500 markdown-features.mdx       # -> /docs/1.0.0/tutorial-basics/congratulations\n        \u2514\u2500\u2500 tutorial-extras\n            \u251c\u2500\u2500 _category_.json\n            \u251c\u2500\u2500 manage-docs-versions.md     # -> /docs/1.0.0/tutorial-extras/manage-docs-versions\n            \u2514\u2500\u2500 translate-your-site.md      # -> /docs/1.0.0/tutorial-extras/translate-your-site\n"))),(0,r.kt)("p",null,"So much about content plugins. Let's take one step back and talk about how routing works in a Docusaurus app in general."),(0,r.kt)("h2",{id:"routes-become-html-files"},"Routes become HTML files"),(0,r.kt)("p",null,"Because Docusaurus is a server-side rendering framework, all routes generated will be server-side rendered into static HTML files. If you are familiar with the behavior of HTTP servers like ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/trunk/getting-started.html"},"Apache2"),", you will understand how this is done: when the browser sends a request to the route ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/advanced/routing"),", the server interprets that as request for the HTML file ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/advanced/routing/index.html"),", and returns that."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/advanced/routing")," route can correspond to either ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/advanced/routing/index.html")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/advanced/routing.html"),". Some hosting providers differentiate between them using the presence of a trailing slash, and may or may not tolerate the other. Read more in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/slorber/trailing-slash-guide"},"trailing slash guide"),"."),(0,r.kt)("p",null,"For example, the build output of the directory above is (ignoring other assets and JS bundle):"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output of the above workspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"build\n\u251c\u2500\u2500 404.html                      # /404/\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 archive\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/archive/\n\u2502   \u251c\u2500\u2500 first-blog-post\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/first-blog-post/\n\u2502   \u251c\u2500\u2500 index.html                # /blog/\n\u2502   \u251c\u2500\u2500 long-blog-post\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/long-blog-post/\n\u2502   \u251c\u2500\u2500 mdx-blog-post\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/mdx-blog-post/\n\u2502   \u251c\u2500\u2500 tags\n\u2502   \u2502   \u251c\u2500\u2500 docusaurus\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /blog/tags/docusaurus/\n\u2502   \u2502   \u251c\u2500\u2500 hola\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /blog/tags/hola/\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/tags/\n\u2502   \u2514\u2500\u2500 welcome\n\u2502       \u2514\u2500\u2500 index.html            # /blog/welcome/\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 1.0.0\n\u2502   \u2502   \u251c\u2500\u2500 intro\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /docs/1.0.0/intro/\n\u2502   \u2502   \u251c\u2500\u2500 tutorial-basics\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 congratulations\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-basics/congratulations/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 markdown-features\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-basics/markdown-features/\n\u2502   \u2502   \u2514\u2500\u2500 tutorial-extras\n\u2502   \u2502       \u251c\u2500\u2500 manage-docs-versions\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-extras/manage-docs-versions/\n\u2502   \u2502       \u2514\u2500\u2500 translate-your-site\n\u2502   \u2502           \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-extras/translate-your-site/\n\u2502   \u251c\u2500\u2500 intro\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /docs/1.0.0/intro/\n\u2502   \u251c\u2500\u2500 tutorial-basics\n\u2502   \u2502   \u251c\u2500\u2500 congratulations\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /docs/tutorial-basics/congratulations/\n\u2502   \u2502   \u2514\u2500\u2500 markdown-features\n\u2502   \u2502       \u2514\u2500\u2500 index.html        # /docs/tutorial-basics/markdown-features/\n\u2502   \u2514\u2500\u2500 tutorial-extras\n\u2502       \u251c\u2500\u2500 manage-docs-versions\n\u2502       \u2502   \u2514\u2500\u2500 index.html        # /docs/tutorial-extras/manage-docs-versions/\n\u2502       \u2514\u2500\u2500 translate-your-site\n\u2502           \u2514\u2500\u2500 index.html        # /docs/tutorial-extras/translate-your-site/\n\u251c\u2500\u2500 index.html                    # /\n\u2514\u2500\u2500 markdown-page\n    \u2514\u2500\u2500 index.html                # /markdown-page/\n"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"trailingSlash")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the build would emit ",(0,r.kt)("inlineCode",{parentName:"p"},"intro.html")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"intro/index.html"),"."),(0,r.kt)("p",null,"All HTML files will reference its JS assets using absolute URLs, so in order for the correct assets to be located, you have to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," field. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," doesn't affect the emitted bundle's file structure: the base URL is one level above the Docusaurus routing system. You can see the aggregate of ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," as the actual location of your Docusaurus site."),(0,r.kt)("p",null,"For example, the emitted HTML would contain links like ",(0,r.kt)("inlineCode",{parentName:"p"},'<link rel="preload" href="/assets/js/runtime~main.7ed5108a.js" as="script">'),". Because absolute URLs are resolved from the host, if the bundle placed under the path ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/base/"),", the link will point to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/assets/js/runtime~main.7ed5108a.js"),", which is, well, non-existent. By specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"/base/")," as base URL, the link will correctly point to ",(0,r.kt)("inlineCode",{parentName:"p"},"/base/assets/js/runtime~main.7ed5108a.js"),"."),(0,r.kt)("p",null,"Localized sites have the locale as part of the base URL as well. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://docusaurus.io/zh-CN/docs/advanced/routing/")," has base URL ",(0,r.kt)("inlineCode",{parentName:"p"},"/zh-CN/"),"."),(0,r.kt)("h2",{id:"generating-and-accessing-routes"},"Generating and accessing routes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"addRoute")," lifecycle action is used to generate routes. It registers a piece of route config to the route tree, giving a route, a component, and props that the component needs. The props and the component are both provided as paths for the bundler to ",(0,r.kt)("inlineCode",{parentName:"p"},"require"),", because as explained in the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/advanced/architecture"},"architecture overview"),", server and client only communicate through temp files."),(0,r.kt)("p",null,"All routes are aggregated in ",(0,r.kt)("inlineCode",{parentName:"p"},".docusaurus/routes.js"),", which you can view with the debug plugin's ",(0,r.kt)("a",{parentName:"p",href:"/__docusaurus/debug/routes"},"routes panel"),"."),(0,r.kt)("p",null,"On the client side, we offer ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/router")," to access the page's route. ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/router")," is a re-export of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-router-dom/v/5.3.0"},(0,r.kt)("inlineCode",{parentName:"a"},"react-router-dom"))," package. For example, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," to get the current page's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Location"},"location"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," to access the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History"},"history object"),". (They are not the same as the browser API, although similar in functionality. Refer to the React Router documentation for specific APIs.)"),(0,r.kt)("p",null,"This API is ",(0,r.kt)("strong",{parentName:"p"},"SSR safe"),", as opposed to the browser-only ",(0,r.kt)("inlineCode",{parentName:"p"},"window.location"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="myComponent.js"',title:'"myComponent.js"'},'import React from "react";\nimport { useLocation } from "@docusaurus/router";\n\nexport function PageRoute() {\n  // React router provides the current component\'s route, even in SSR\n  const location = useLocation();\n  return (\n    <span>\n      We are currently on <code>{location.pathname}</code>\n    </span>\n  );\n}\n')),(0,r.kt)(l.Z,{mdxType:"BrowserWindow"},(0,r.kt)(f,{mdxType:"PageRoute"})),(0,r.kt)("h2",{id:"escaping-from-spa-redirects"},"Escaping from SPA redirects"),(0,r.kt)("p",null,"Docusaurus builds a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/SPA"},"single-page application"),", where route transitions are done through the ",(0,r.kt)("inlineCode",{parentName:"p"},"history.push()")," method of React router. This operation is done on the client side. However, the prerequisite for a route transition to happen this way is that the target URL is known to our router. Otherwise, the router catches this path and displays a 404 page instead."),(0,r.kt)("p",null,"If you put some HTML pages under the ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," folder, they will be copied to the build output and therefore become accessible as part of your website, yet it's not part of the Docusaurus route system. We provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"pathname://")," protocol that allows you to redirect to another part of your domain in a non-SPA fashion, as if this route is an external link. Try the following two links:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"- [/pure-html](/pure-html)\n- [pathname:///pure-html](pathname:///pure-html)\n")),(0,r.kt)(l.Z,{mdxType:"BrowserWindow"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pure-html"},"/pure-html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///pure-html"},"pathname:///pure-html")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The first link will ",(0,r.kt)("strong",{parentName:"p"},"not"),' trigger a "broken links detected" check during the production build, because the respective file actually exists. Nevertheless, when you click on the link, a "page not found" will be displayed until you refresh.'))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pathname://")," protocol is useful for referencing any content in the static folder. For example, Docusaurus would convert ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/markdown-features/assets#static-assets"},"all Markdown static assets to require() calls"),". You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"pathname://")," to keep it a regular link instead of being hashed by Webpack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"![An image from the static](pathname:///img/docusaurus.png)\n\n[An asset from the static](pathname:///files/asset.pdf)\n")),(0,r.kt)("p",null,"Docusaurus will only strip the ",(0,r.kt)("inlineCode",{parentName:"p"},"pathname://")," prefix without processing the content."))}v.isMDXComponent=!0},4231:function(e,t,n){t.Z=n.p+"assets/images/routes-dark-550f9ac44d27750b230c1cc6ebd4d511.png"},108:function(e,t,n){t.Z=n.p+"assets/images/routes-33080433eae7d3079b957fd8f4bf6e96.png"}}]);