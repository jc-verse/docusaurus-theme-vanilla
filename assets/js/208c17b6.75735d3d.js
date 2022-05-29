"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[256],{4879:function(e,t,n){function r(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,r){return e.findIndex((function(e){return t(e,n)}))!==r}))}n.d(t,{l:function(){return r}})},3909:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},3123:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),o=n(6010),u=n(5074),l=n(4879),i=n(5425),c=n(1085);function s(e){var t,n,u=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.U)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,a.useState)(y),T=O[0],E=O[1],N=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=k[m];null!=x&&x!==T&&h.some((function(e){return e.value===x}))&&E(x)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==T&&(j(t),E(r),null!=m&&w(m,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;n=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var o,u=N.indexOf(e.currentTarget)-1;n=null!=(o=N[u])?o:N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:C,onClick:C},u,{className:(0,o.Z)("tabs__item",null==u?void 0:u.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,u.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},5677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),u=n(3123),l=n(3909),i=["components"],c={sidebar_position:3,id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},s=void 0,d={unversionedId:"api/themes/theme-live-codeblock",id:"version-2.0.0-beta.21/api/themes/theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",description:"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.",source:"@site/versioned_docs/version-2.0.0-beta.21/api/themes/theme-live-codeblock.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-live-codeblock",permalink:"/docusaurus-theme-vanilla/docs/api/themes/@docusaurus/theme-live-codeblock",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-live-codeblock.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653837263,formattedLastUpdatedAt:"5/29/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-classic",permalink:"/docusaurus-theme-vanilla/docs/api/themes/@docusaurus/theme-classic"},next:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docusaurus-theme-vanilla/docs/api/themes/@docusaurus/theme-search-algolia"}},p={},m=[{value:"Configuration",id:"configuration",level:3}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This theme provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/markdown-features/code-blocks#interactive-code-editor"},"interactive code editor")," documentation."),(0,o.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-live-codeblock\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-live-codeblock\n")))),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: ["@docusaurus/theme-live-codeblock"],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: "top" | "bottom"\n       */\n      playgroundPosition: "bottom",\n    },\n  },\n};\n')))}v.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);