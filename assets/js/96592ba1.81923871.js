"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2576],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3609:function(e,t,n){function r(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,r){return e.findIndex((function(e){return t(e,n)}))!==r}))}n.d(t,{l:function(){return r}})},6270:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),a=n(7294),l=n(6010),u=n(1048),i=n(3609),o=n(1943),s=n(2957),c="tabHeadings_mkcK",p="tabHeading_k98D",d="tabHeadingSelected_tg6b",m="tabsContainer_i8yn";function f(e){var t,n,u=e.lazy,f=e.defaultValue,g=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),E=x.tabGroupChoices,w=x.setTabGroupChoices,O=(0,a.useState)(N),T=O[0],j=O[1],D=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=E[v];null!=S&&S!==T&&k.some((function(e){return e.value===S}))&&j(S)}var P=function(e){var t=e.currentTarget,n=D.indexOf(t),r=k[n].value;r!==T&&(C(t),j(r),null!=v&&w(v,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;n=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var l,u=D.indexOf(e.currentTarget)-1;n=null!=(l=D[u])?l:D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:m},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)(c,b)},k.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return D.push(e)},onKeyDown:I,onFocus:P,onClick:P},u,{className:(0,l.Z)(p,T===t&&d,null==u?void 0:u.className)}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0]):a.createElement("div",null,h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function g(e){var t=(0,u.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},3089:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),u=n(5261),i=n(6270),o=["components"],s={sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},c="\ud83d\udce6 eslint-plugin",p={unversionedId:"api/misc/eslint-plugin/README",id:"api/misc/eslint-plugin/README",title:"\ud83d\udce6 eslint-plugin",description:"ESLint is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices.",source:"@site/docs/api/misc/eslint-plugin/README.md",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin",permalink:"/docusaurus-theme-vanilla/docs/next/api/misc/@docusaurus/eslint-plugin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/README.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},sidebar:"api",previous:{title:"\ud83d\udce6 create-docusaurus",permalink:"/docusaurus-theme-vanilla/docs/next/api/misc/create-docusaurus"},next:{title:"no-untranslated-text",permalink:"/docusaurus-theme-vanilla/docs/next/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Supported Configs",id:"supported-configs",level:2},{value:"Supported Rules",id:"supported-rules",level:2},{value:"Example configuration",id:"example-configuration",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-eslint-plugin"},"\ud83d\udce6 eslint-plugin"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @docusaurus/eslint-plugin\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @docusaurus/eslint-plugin\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"@docusaurus")," to the plugins section of your ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'},'{\n  "plugins": ["@docusaurus"]\n}\n')),(0,l.kt)("p",null,"Then, you can extend one of the configs (e.g. the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommended")," config):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'},'{\n  "extends": ["plugin:@docusaurus/recommended"]\n}\n')),(0,l.kt)("p",null,"Each config contains a set of rules. For more fine-grained control, you can also configure the rules you want to use directly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'},'{\n  "rules": {\n    "@docusaurus/string-literal-i18n-messages": "error",\n    "@docusaurus/no-untranslated-text": "warn"\n  }\n}\n')),(0,l.kt)("h2",{id:"supported-configs"},"Supported Configs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Recommended: recommended rule set for most Docusaurus sites that should be extended from."),(0,l.kt)("li",{parentName:"ul"},"All: ",(0,l.kt)("strong",{parentName:"li"},"all")," rules enabled. This will change between minor versions, so you should not use this if you want to avoid unexpected breaking changes.")),(0,l.kt)("h2",{id:"supported-rules"},"Supported Rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-theme-vanilla/docs/next/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},(0,l.kt)("inlineCode",{parentName:"a"},"@docusaurus/no-untranslated-text"))),(0,l.kt)("td",{parentName:"tr",align:null},"Enforce text labels in JSX to be wrapped by translate calls"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-theme-vanilla/docs/next/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},(0,l.kt)("inlineCode",{parentName:"a"},"@docusaurus/string-literal-i18n-messages"))),(0,l.kt)("td",{parentName:"tr",align:null},"Enforce translate APIs to be called on plain text labels"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("p",null,"\u2705 = recommended"),(0,l.kt)("h2",{id:"example-configuration"},"Example configuration"),(0,l.kt)("p",null,"Here's an example configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},'module.exports = {\n  extends: ["plugin:@docusaurus/recommended"],\n  plugins: ["@docusaurus"],\n  rules: {\n    "@docusaurus/no-untranslated-text": [\n      "warn",\n      { ignoredStrings: ["\xb7", "\u2014", "\xd7"] },\n    ],\n  },\n};\n')))}g.isMDXComponent=!0}}]);