"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2268],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3205:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(6775),l="apiTable_e8hp";function i(e,t){var n=e.name,l=e.children,i=function(e){for(var t=e;(0,r.isValidElement)(t);)t=r.Children.toArray(t.props.children)[0];return t}(l),o=n?n+"-"+i:i,u="#"+o,s=(0,a.k6)();return r.createElement("tr",{id:o,tabIndex:0,ref:s.location.hash===u?t:void 0,onClick:function(){s.push(u)},onKeyDown:function(e){"Enter"===e.key&&s.push(u)}},l.props.children)}var o=r.forwardRef(i);function u(e){var t=e.children,n=e.name,a=r.Children.toArray(t.props.children),i=a[0],u=a[1],s=(0,r.useRef)(null);(0,r.useEffect)((function(){var e;null==(e=s.current)||e.focus()}),[s]);var c=r.Children.map(u.props.children,(function(e){return r.createElement(o,{name:n,ref:s},e)}));return r.createElement("table",{className:l},i,r.createElement("tbody",null,c))}},4675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(3205),o=["components"],u={slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},s="no-untranslated-text",c={unversionedId:"api/misc/eslint-plugin/no-untranslated-text",id:"api/misc/eslint-plugin/no-untranslated-text",title:"no-untranslated-text",description:"Enforce text labels in JSX to be wrapped by translate calls.",source:"@site/docs/api/misc/eslint-plugin/no-untranslated-text.md",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",permalink:"/docusaurus-theme-vanilla/docs/next/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-untranslated-text.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},sidebar:"api",previous:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docusaurus-theme-vanilla/docs/next/api/misc/@docusaurus/eslint-plugin"},next:{title:"string-literal-i18n-messages",permalink:"/docusaurus-theme-vanilla/docs/next/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"}},p={},d=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"no-untranslated-text"},"no-untranslated-text"),(0,l.kt)("p",null,"Enforce text labels in JSX to be wrapped by translate calls."),(0,l.kt)("p",null,"When the ",(0,l.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/i18n/introduction"},"i18n feature")," is used, this rule ensures that all labels appearing on the website are translatable, so no string accidentally slips through untranslated."),(0,l.kt)("h2",{id:"details"},"Rule Details"),(0,l.kt)("p",null,"Examples of ",(0,l.kt)("strong",{parentName:"p"},"incorrect")," code for this rule:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Hello World is not translated\n<Component>Hello World</Component>\n")),(0,l.kt)("p",null,"Examples of ",(0,l.kt)("strong",{parentName:"p"},"correct")," code for this rule:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Hello World is translated\n<Component>\n  <Translate>Hello World</Translate>\n</Component>\n")),(0,l.kt)("h2",{id:"configuration"},"Rule Configuration"),(0,l.kt)("p",null,"Accepted fields:"),(0,l.kt)(i.Z,{mdxType:"APITable"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ignoredStrings")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Text labels that only contain strings in this list will not be reported."))))),(0,l.kt)("h2",{id:"when-not-to-use"},"When Not To Use It"),(0,l.kt)("p",null,"If you're not using the ",(0,l.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/i18n/introduction"},"i18n feature"),", you can disable this rule. You can also disable this rule where the text is not supposed to be translated."),(0,l.kt)("h2",{id:"further-reading"},"Further Reading"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docusaurus-core#translate"},"https://docusaurus.io/docs/docusaurus-core#translate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"},"https://docusaurus.io/docs/docusaurus-core#translate-imperative"))))}f.isMDXComponent=!0}}]);