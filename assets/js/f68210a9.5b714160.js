"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[8178],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2188:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],l={slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},o="string-literal-i18n-messages",u={unversionedId:"api/misc/eslint-plugin/string-literal-i18n-messages",id:"version-2.0.0-beta.20/api/misc/eslint-plugin/string-literal-i18n-messages",title:"string-literal-i18n-messages",description:"Enforce translate APIs to be called on plain text labels.",source:"@site/versioned_docs/version-2.0.0-beta.20/api/misc/eslint-plugin/string-literal-i18n-messages.md",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/string-literal-i18n-messages.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},sidebar:"api",previous:{title:"no-untranslated-text",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},next:{title:"\ud83d\udce6 logger",permalink:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/api/misc/@docusaurus/logger"}},c={},p=[{value:"Rule Details",id:"details",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"string-literal-i18n-messages"},"string-literal-i18n-messages"),(0,s.kt)("p",null,"Enforce translate APIs to be called on plain text labels."),(0,s.kt)("p",null,"Docusaurus offers the ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/cli#docusaurus-write-translations-sitedir"},(0,s.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))," API, which statically extracts the text labels marked as translatable. Dynamic values used in ",(0,s.kt)("inlineCode",{parentName:"p"},"<Translate>")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"translate()")," calls will fail to be extracted. This rule will ensure that all translate calls are statically extractable."),(0,s.kt)("h2",{id:"details"},"Rule Details"),(0,s.kt)("p",null,"Examples of ",(0,s.kt)("strong",{parentName:"p"},"incorrect")," code for this rule:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const text = 'Some text to be translated'\n\n// Invalid <Translate> child\n<Translate>{text}</Translate>\n\n// Invalid message attribute\ntranslate({message: text})\n")),(0,s.kt)("p",null,"Examples of ",(0,s.kt)("strong",{parentName:"p"},"correct")," code for this rule:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Valid <Translate> child\n<Translate>Some text to be translated</Translate>\n\n// Valid message attribute\ntranslate({message: 'Some text to be translated'})\n\n// Valid <Translate> child using values object as prop\n<Translate values={{firstName: 'S\xe9bastien'}}>\n  {'Welcome, {firstName}! How are you?'}\n</Translate>\n\n// Valid message attribute using values object as second argument\ntranslate({message: 'The logo of site {siteName}'}, {siteName: 'Docusaurus'})\n")),(0,s.kt)("h2",{id:"when-not-to-use"},"When Not To Use It"),(0,s.kt)("p",null,"If you're not using the ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/2.0.0-beta.20/i18n/introduction"},"i18n feature"),", you can disable this rule."),(0,s.kt)("h2",{id:"further-reading"},"Further Reading"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docusaurus-core#translate"},"https://docusaurus.io/docs/docusaurus-core#translate")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"},"https://docusaurus.io/docs/docusaurus-core#translate-imperative"))))}m.isMDXComponent=!0}}]);