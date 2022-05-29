"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[1564],{2518:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(7282);n(9051);function u(e){var t=e.children;return a.createElement(r.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.95)"},t)}},3909:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3123:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),u=n(6010),o=n(5074),i=n(4879),l=n(5425),s=n(1085);function c(e){var t,n,o=e.lazy,c=e.block,d=e.defaultValue,p=e.values,h=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),w=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,r.useState)(g),C=N[0],T=N[1],E=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=w[h];null!=D&&D!==C&&v.some((function(e){return e.value===D}))&&T(D)}var Z=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==C&&(x(t),T(a),null!=h&&y(h,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var u,o=E.indexOf(e.currentTarget)-1;n=null!=(u=E[o])?u:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:Z,onClick:Z},o,{className:(0,u.Z)("tabs__item",null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),u=(n(7294),n(3905)),o=(n(3123),n(3909),n(2518)),i=["components"],l={description:"How Docusaurus works to build your app"},s="Architecture",c={unversionedId:"advanced/architecture",id:"advanced/architecture",title:"Architecture",description:"How Docusaurus works to build your app",source:"@site/docs/advanced/architecture.md",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docs/next/advanced/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/architecture.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",frontMatter:{description:"How Docusaurus works to build your app"},sidebar:"docs",previous:{title:"Advanced Tutorials",permalink:"/docs/next/advanced/"},next:{title:"Plugins",permalink:"/docs/next/advanced/plugins"}},d={},p=[],h={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,u.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"architecture"},"Architecture"),(0,u.kt)(o.Z,{mdxType:"Zoom"},(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Architecture overview",src:n(3856).Z,width:"2228",height:"2007"}))),(0,u.kt)("p",null,"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."),(0,u.kt)("p",null,"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as CommonJS that can be ",(0,u.kt)("inlineCode",{parentName:"li"},"require"),"'d."),(0,u.kt)("li",{parentName:"ul"},"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions.")),(0,u.kt)("p",null,"Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,u.kt)("inlineCode",{parentName:"p"},"addRoute"),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,u.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),", which itself is run in Node (hence you can use ",(0,u.kt)("inlineCode",{parentName:"p"},"require")," and pass callbacks as plugin options)."),(0,u.kt)("p",null,"During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,u.kt)("inlineCode",{parentName:"p"},"themeConfig")," or ",(0,u.kt)("inlineCode",{parentName:"p"},"baseUrl")," through ",(0,u.kt)("a",{parentName:"p",href:"/docs/next/docusaurus-core#useDocusaurusContext"},(0,u.kt)("inlineCode",{parentName:"a"},"useDocusaurusContext()")),". However, the ",(0,u.kt)("inlineCode",{parentName:"p"},"siteConfig")," object only contains ",(0,u.kt)("strong",{parentName:"p"},"serializable values")," (values that are preserved after ",(0,u.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"). Functions, regexes, etc. would be lost on the client side. The ",(0,u.kt)("inlineCode",{parentName:"p"},"themeConfig")," is designed to be entirely serializable."))}m.isMDXComponent=!0},3856:function(e,t,n){t.Z=n.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"}}]);