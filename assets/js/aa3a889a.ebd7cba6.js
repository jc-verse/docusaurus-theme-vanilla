"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[3855],{4879:function(e,t,n){function r(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,r){return e.findIndex((function(e){return t(e,n)}))!==r}))}n.d(t,{l:function(){return r}})},3909:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},3123:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),o=n(7294),a=n(6010),u=n(5074),l=n(4879),i=n(5425),c=n(1085);function s(e){var t,n,u=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.U)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,o.useState)(y),T=O[0],x=O[1],E=[],N=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&x(j)}var C=function(e){var t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==T&&(N(t),x(r),null!=m&&w(m,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=E.indexOf(e.currentTarget)+1;n=null!=(r=E[o])?r:E[0];break;case"ArrowLeft":var a,u=E.indexOf(e.currentTarget)-1;n=null!=(a=E[u])?a:E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label,u=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:C,onClick:C},u,{className:(0,a.Z)("tabs__item",null==u?void 0:u.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,u.Z)();return o.createElement(s,(0,r.Z)({key:String(t)},e))}},6154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),u=n(3123),l=n(3909),i=["components"],c={sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},s="\ud83d\udce6 theme-live-codeblock",d={unversionedId:"api/themes/theme-live-codeblock",id:"api/themes/theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",description:"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.",source:"@site/docs/api/themes/theme-live-codeblock.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-live-codeblock",permalink:"/docs/next/api/themes/@docusaurus/theme-live-codeblock",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-live-codeblock.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-classic",permalink:"/docs/next/api/themes/@docusaurus/theme-classic"},next:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docs/next/api/themes/@docusaurus/theme-search-algolia"}},p={},m=[{value:"Configuration",id:"configuration",level:3}],f={toc:m};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-theme-live-codeblock"},"\ud83d\udce6 theme-live-codeblock"),(0,a.kt)("p",null,"This theme provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/markdown-features/code-blocks#interactive-code-editor"},"interactive code editor")," documentation."),(0,a.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-live-codeblock\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-live-codeblock\n")))),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: ["@docusaurus/theme-live-codeblock"],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: "top" | "bottom"\n       */\n      playgroundPosition: "bottom",\n    },\n  },\n};\n')))}v.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);