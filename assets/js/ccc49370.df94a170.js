"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[6103],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,d=m["".concat(o,".").concat(p)]||m[p]||f[p]||i;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3699:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7462),a=n(3366),i=n(7294),c=n(3727),l=n(8532),o=n(9962),u=n(2735),s=n(6136),f=i.createContext({collectLink:function(){}});var m=n(9524),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];function d(e,t){var n,d,v=e.isNavLink,h=e.to,g=e.href,E=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,x=void 0===O||O,Z=(0,a.Z)(e,p),w=(0,o.Z)().siteConfig,k=w.trailingSlash,j=w.baseUrl,L=(0,m.C)().withBaseUrl,_=(0,i.useContext)(f),C=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(function(){return C.current}));var N=h||g;var P,I=(0,u.Z)(N),T=null==N?void 0:N.replace("pathname://",""),S=void 0!==T?(P=T,x&&function(e){return e.startsWith("/")}(P)?L(P):P):void 0;S&&I&&(S=(0,l.applyTrailingSlash)(S,{trailingSlash:k,baseUrl:j}));var H=(0,i.useRef)(!1),M=v?c.OL:c.rU,D=s.Z.canUseIntersectionObserver,U=(0,i.useRef)();(0,i.useEffect)((function(){return!D&&I&&null!=S&&window.docusaurus.prefetch(S),function(){D&&U.current&&U.current.disconnect()}}),[U,S,D,I]);var A=null!=(n=null==(d=S)?void 0:d.startsWith("#"))&&n,R=!S||!I||A;return R||y||_.collectLink(S),R?i.createElement("a",(0,r.Z)({ref:C,href:S},N&&!I&&{target:"_blank",rel:"noopener noreferrer"},Z)):i.createElement(M,(0,r.Z)({},Z,{onMouseEnter:function(){H.current||null==S||(window.docusaurus.preload(S),H.current=!0)},innerRef:function(e){C.current=e,D&&e&&I&&(U.current=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.current.unobserve(e),U.current.disconnect(),null!=S&&window.docusaurus.prefetch(S))}))})),U.current.observe(e))},to:S},v&&{isActive:b,activeClassName:E}))}var v=i.forwardRef(d)},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],c="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,c)}},8532:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}})},4516:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),a=n(3905),i=n(4785),c=n(6790),l=n(3699),o="blogContainer_z8Z6",u="blogSidebar_pst0",s="blogSidebarContent_z43f",f="blogContent_dWM3",m="prevLink_qLD7",p="nextLink_NjQY",d="pagination_taL6";function v(e){var t=e.content,n=t.toc;return r.createElement("div",{className:o},r.createElement("aside",{className:u},r.createElement("div",{className:s},r.createElement("b",null,e.sidebar.title),r.createElement("ol",null,e.sidebar.items.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.permalink},e.title))}))))),r.createElement("main",{className:f},r.createElement("h1",null,e.content.metadata.title),r.createElement(a.Zo,{components:i.Z},r.createElement(t,null)),r.createElement("nav",{className:d},e.content.metadata.prevItem&&r.createElement("span",{className:m},r.createElement(l.Z,{to:e.content.metadata.prevItem.permalink},"Previous post: ",e.content.metadata.prevItem.title)),e.content.metadata.nextItem&&r.createElement("span",{className:p},r.createElement(l.Z,{to:e.content.metadata.nextItem.permalink},"Next post: ",e.content.metadata.nextItem.title)))),r.createElement("aside",{className:u},r.createElement("nav",{className:s},r.createElement(c.Z,{toc:n}))))}},4785:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(3366),i=n(7294),c=["as","id"];function l(e){var t=e.as,n=e.id,l=(0,a.Z)(e,c);return"h1"!==t&&n?i.createElement(t,(0,r.Z)({},l,{id:n}),i.createElement("a",{href:"#"+n},l.children)):i.createElement(t,(0,r.Z)({},l,{id:void 0}))}var o=n(1514),u=["mdxType","originalType"];var s={h1:function(e){return i.createElement(l,(0,r.Z)({},e,{as:"h1"}))},h2:function(e){return i.createElement(l,(0,r.Z)({},e,{as:"h2"}))},h3:function(e){return i.createElement(l,(0,r.Z)({},e,{as:"h3"}))},h4:function(e){return i.createElement(l,(0,r.Z)({},e,{as:"h4"}))},h5:function(e){return i.createElement(l,(0,r.Z)({},e,{as:"h5"}))},h6:function(e){return i.createElement(l,(0,r.Z)({},e,{as:"h6"}))},head:function(e){var t=i.Children.map(e.children,(function(e){return i.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,a.Z)(n,u));return i.createElement(e.props.originalType,r)}return e}(e):e}));return i.createElement(o.Z,e,t)}}},6790:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(3366),i=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,c=(0,a.Z)(e,i);n>=0?t[n].children.push(c):r.push(c)})),r}function l(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}function o(e){var t=e.items;return t.length?r.createElement("ol",null,t.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{items:e.children}))}))):null}function u(e){var t=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return l({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:e.toc,minHeadingLevel:2,maxHeadingLevel:3});return r.createElement(o,{items:t})}}}]);