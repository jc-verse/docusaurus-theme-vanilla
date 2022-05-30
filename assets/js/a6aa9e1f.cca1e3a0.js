"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[3089],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3699:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7462),a=n(3366),i=n(7294),o=n(3727),c=n(8532),l=n(9962),u=n(2735),s=n(6136),f=i.createContext({collectLink:function(){}});var p=n(9524),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];function d(e,t){var n,d,v=e.isNavLink,h=e.to,b=e.href,y=e.activeClassName,g=e.isActive,E=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,w=void 0===O||O,Z=(0,a.Z)(e,m),k=(0,l.Z)().siteConfig,P=k.trailingSlash,C=k.baseUrl,_=(0,p.C)().withBaseUrl,j=(0,i.useContext)(f),T=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(function(){return T.current}));var x=h||b;var N,S=(0,u.Z)(x),L=null==x?void 0:x.replace("pathname://",""),U=void 0!==L?(N=L,w&&function(e){return e.startsWith("/")}(N)?_(N):N):void 0;U&&S&&(U=(0,c.applyTrailingSlash)(U,{trailingSlash:P,baseUrl:C}));var D=(0,i.useRef)(!1),I=v?o.OL:o.rU,R=s.Z.canUseIntersectionObserver,A=(0,i.useRef)();(0,i.useEffect)((function(){return!R&&S&&null!=U&&window.docusaurus.prefetch(U),function(){R&&A.current&&A.current.disconnect()}}),[A,U,R,S]);var B=null!=(n=null==(d=U)?void 0:d.startsWith("#"))&&n,W=!U||!S||B;return W||E||j.collectLink(U),W?i.createElement("a",(0,r.Z)({ref:T,href:U},x&&!S&&{target:"_blank",rel:"noopener noreferrer"},Z)):i.createElement(I,(0,r.Z)({},Z,{onMouseEnter:function(){D.current||null==U||(window.docusaurus.preload(U),D.current=!0)},innerRef:function(e){T.current=e,R&&e&&S&&(A.current=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.current.unobserve(e),A.current.disconnect(),null!=U&&window.docusaurus.prefetch(U))}))})),A.current.observe(e))},to:U},v&&{isActive:g,activeClassName:y}))}var v=i.forwardRef(d)},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8532:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}})},245:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(3699),i=n(3905),o=n(4785),c="blogContainer_Otnm",l="blogSidebar_uXV_",u="blogSidebarContent_BPXu",s="blogContent_Tcrc",f="prevLink_zOV8",p="nextLink_rINW",m="pagination_nUL5";function d(e){return r.createElement("div",{className:c},r.createElement("aside",{className:l},r.createElement("div",{className:u},r.createElement("b",null,e.sidebar.title),r.createElement("ol",null,e.sidebar.items.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.permalink},e.title))}))))),r.createElement("main",{className:s},r.createElement("h1",null,e.metadata.blogTitle),e.items.map((function(e,t){var n=e.content;return r.createElement("div",{key:t},r.createElement("h2",null,r.createElement(a.Z,{to:e.content.metadata.permalink},e.content.metadata.title)),r.createElement(i.Zo,{components:o.Z},r.createElement(n,null)))})),r.createElement("nav",{className:m},e.metadata.previousPage&&r.createElement("span",{className:f},r.createElement(a.Z,{to:e.metadata.previousPage},"Previous page")),e.metadata.nextPage&&r.createElement("span",{className:p},r.createElement(a.Z,{to:e.metadata.nextPage},"Next page")))))}},4785:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(3366),i=n(7294),o=["as","id"];function c(e){var t=e.as,n=e.id,c=(0,a.Z)(e,o);return"h1"!==t&&n?i.createElement(t,(0,r.Z)({},c,{id:n}),i.createElement("a",{href:"#"+n},c.children)):i.createElement(t,(0,r.Z)({},c,{id:void 0}))}var l=n(1514),u=["mdxType","originalType"];var s={h1:function(e){return i.createElement(c,(0,r.Z)({},e,{as:"h1"}))},h2:function(e){return i.createElement(c,(0,r.Z)({},e,{as:"h2"}))},h3:function(e){return i.createElement(c,(0,r.Z)({},e,{as:"h3"}))},h4:function(e){return i.createElement(c,(0,r.Z)({},e,{as:"h4"}))},h5:function(e){return i.createElement(c,(0,r.Z)({},e,{as:"h5"}))},h6:function(e){return i.createElement(c,(0,r.Z)({},e,{as:"h6"}))},head:function(e){var t=i.Children.map(e.children,(function(e){return i.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,a.Z)(n,u));return i.createElement(e.props.originalType,r)}return e}(e):e}));return i.createElement(l.Z,e,t)}}}}]);