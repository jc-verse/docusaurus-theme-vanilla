"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[3482],{9372:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),i=n(102),a=n(7294),o=n(3727),c=n(4854),u=n(9966),l=n(7333),s=n(1427),d=a.createContext({collectLink:function(){}});var f=n(5555),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];function v(e,t){var n,v,m=e.isNavLink,h=e.to,b=e.href,y=e.activeClassName,g=e.isActive,w=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,k=void 0===O||O,E=(0,i.Z)(e,p),j=(0,u.Z)().siteConfig,x=j.trailingSlash,C=j.baseUrl,P=(0,f.C)().withBaseUrl,T=(0,a.useContext)(d),A=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,(function(){return A.current}));var Z=h||b;var _,D=(0,l.Z)(Z),N=null==Z?void 0:Z.replace("pathname://",""),U=void 0!==N?(_=N,k&&function(e){return e.startsWith("/")}(_)?P(_):_):void 0;U&&D&&(U=(0,c.applyTrailingSlash)(U,{trailingSlash:x,baseUrl:C}));var S=(0,a.useRef)(!1),I=m?o.OL:o.rU,L=s.Z.canUseIntersectionObserver,M=(0,a.useRef)();(0,a.useEffect)((function(){return!L&&D&&null!=U&&window.docusaurus.prefetch(U),function(){L&&M.current&&M.current.disconnect()}}),[M,U,L,D]);var W=null!=(n=null==(v=U)?void 0:v.startsWith("#"))&&n,R=!U||!D||W;return R||w||T.collectLink(U),R?a.createElement("a",(0,r.Z)({ref:A,href:U},Z&&!D&&{target:"_blank",rel:"noopener noreferrer"},E)):a.createElement(I,(0,r.Z)({},E,{onMouseEnter:function(){S.current||null==U||(window.docusaurus.preload(U),S.current=!0)},innerRef:function(e){A.current=e,L&&e&&D&&(M.current=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.current.unobserve(e),M.current.disconnect(),null!=U&&window.docusaurus.prefetch(U))}))})),M.current.observe(e))},to:U},m&&{isActive:g,activeClassName:y}))}var m=a.forwardRef(v)},3139:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},4854:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var i=n(3139);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}})},3863:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),i=n(1872),a=n(7333),o=n(9372);function c(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t},n)}function u(e){var t=e.href,n=e.icon,i=e.title,a=e.description;return r.createElement(c,{href:t},r.createElement("h2",{title:i},n," ",i),a&&r.createElement("p",{title:a},a))}function l(e){var t=e.item,n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label}):null}function s(e){var t,n=e.item,o=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(u,{href:n.href,icon:o,title:n.label,description:null==c?void 0:c.description})}function d(e){var t=e.item;switch(t.type){case"link":return r.createElement(s,{item:t});case"category":return r.createElement(l,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){var t=e.items,n=e.className;return r.createElement("section",{className:n},function(e){return e.filter((function(e){return"category"!==e.type||Boolean((0,i.Wl)(e))}))}(t).map((function(e,t){return r.createElement("article",{key:t},r.createElement(d,{item:e}))})))}},4609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=n(3863),c=n(1872),u=["components"],l={},s="Advanced Tutorials",d={unversionedId:"advanced/index",id:"version-2.0.0-beta.20/advanced/index",title:"Advanced Tutorials",description:"This section is not going to be very structured, but we will cover the following topics:",source:"@site/versioned_docs/version-2.0.0-beta.20/advanced/index.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/advanced/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/index.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653837263,formattedLastUpdatedAt:"5/29/2022",frontMatter:{},sidebar:"docs",previous:{title:"What's next?",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/guides/whats-next"},next:{title:"Architecture",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/advanced/architecture"}},f={},p=[],v={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-tutorials"},"Advanced Tutorials"),(0,a.kt)("p",null,"This section is not going to be very structured, but we will cover the following topics:"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("p",null,"We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/plugin-methods/"},"plugin APIs")," or other architecture details. Don't panic if you don't understand everything\ud83d\ude09"))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,v=f["".concat(u,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);