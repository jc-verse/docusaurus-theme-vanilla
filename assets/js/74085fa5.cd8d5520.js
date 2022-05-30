"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[6306],{7628:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(7282);n(9051);function u(e){var t=e.children;return a.createElement(r.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.95)"},t)}},6270:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7462),r=n(7294),u=n(6010),i=n(1048),o=n(3609),l=n(1943),s=n(2957),c="tabHeadings_mkcK",d="tabHeading_k98D",p="tabHeadingSelected_tg6b",h="tabsContainer_i8yn";function m(e){var t,n,i=e.lazy,m=e.defaultValue,v=e.values,f=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),C=N.tabGroupChoices,T=N.setTabGroupChoices,E=(0,r.useState)(y),D=E[0],S=E[1],Z=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=C[f];null!=x&&x!==D&&k.some((function(e){return e.value===x}))&&S(x)}var J=function(e){var t=e.currentTarget,n=Z.indexOf(t),a=k[n].value;a!==D&&(A(t),S(a),null!=f&&T(f,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=Z.indexOf(e.currentTarget)+1;n=null!=(a=Z[r])?a:Z[0];break;case"ArrowLeft":var u,i=Z.indexOf(e.currentTarget)-1;n=null!=(u=Z[i])?u:Z[Z.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:h},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)(c,b)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:_,onFocus:J,onClick:J},i,{className:(0,u.Z)(d,D===t&&p,null==i?void 0:i.className)}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===D}))[0]):r.createElement("div",null,g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function v(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},6765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),u=(n(7294),n(3905)),i=(n(5261),n(6270),n(7628)),o=["components"],l={description:"How Docusaurus works to build your app"},s="Architecture",c={unversionedId:"advanced/architecture",id:"version-2.0.0-beta.21/advanced/architecture",title:"Architecture",description:"How Docusaurus works to build your app",source:"@site/versioned_docs/version-2.0.0-beta.21/advanced/architecture.md",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docusaurus-theme-vanilla/docs/advanced/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/architecture.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",frontMatter:{description:"How Docusaurus works to build your app"},sidebar:"docs",previous:{title:"Advanced Tutorials",permalink:"/docusaurus-theme-vanilla/docs/advanced/"},next:{title:"Plugins",permalink:"/docusaurus-theme-vanilla/docs/advanced/plugins"}},d={},p=[],h={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,u.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"architecture"},"Architecture"),(0,u.kt)(i.Z,{mdxType:"Zoom"},(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Architecture overview",src:n(3856).Z,width:"2228",height:"2007"}))),(0,u.kt)("p",null,"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."),(0,u.kt)("p",null,"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as CommonJS that can be ",(0,u.kt)("inlineCode",{parentName:"li"},"require"),"'d."),(0,u.kt)("li",{parentName:"ul"},"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions.")),(0,u.kt)("p",null,"Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,u.kt)("inlineCode",{parentName:"p"},"addRoute"),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,u.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),", which itself is run in Node (hence you can use ",(0,u.kt)("inlineCode",{parentName:"p"},"require")," and pass callbacks as plugin options)."),(0,u.kt)("p",null,"During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,u.kt)("inlineCode",{parentName:"p"},"themeConfig")," or ",(0,u.kt)("inlineCode",{parentName:"p"},"baseUrl")," through ",(0,u.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/docusaurus-core#useDocusaurusContext"},(0,u.kt)("inlineCode",{parentName:"a"},"useDocusaurusContext()")),". However, the ",(0,u.kt)("inlineCode",{parentName:"p"},"siteConfig")," object only contains ",(0,u.kt)("strong",{parentName:"p"},"serializable values")," (values that are preserved after ",(0,u.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"). Functions, regexes, etc. would be lost on the client side. The ",(0,u.kt)("inlineCode",{parentName:"p"},"themeConfig")," is designed to be entirely serializable."))}m.isMDXComponent=!0},3856:function(e,t,n){t.Z=n.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"}}]);