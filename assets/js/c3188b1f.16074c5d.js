"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[1546],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||u;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3609:function(e,t,n){function r(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,r){return e.findIndex((function(e){return t(e,n)}))!==r}))}n.d(t,{l:function(){return r}})},6270:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7462),a=n(7294),u=n(6010),o=n(1048),i=n(3609),l=n(1943),s=n(2957),c="tabHeadings_mkcK",p="tabHeading_k98D",d="tabHeadingSelected_tg6b",m="tabsContainer_i8yn";function f(e){var t,n,o=e.lazy,f=e.defaultValue,h=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,l.U)(),N=O.tabGroupChoices,T=O.setTabGroupChoices,x=(0,a.useState)(w),E=x[0],j=x[1],C=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=N[v];null!=P&&P!==E&&g.some((function(e){return e.value===P}))&&j(P)}var Z=function(e){var t=e.currentTarget,n=C.indexOf(t),r=g[n].value;r!==E&&(D(t),j(r),null!=v&&T(v,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var u,o=C.indexOf(e.currentTarget)-1;n=null!=(u=C[o])?u:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:m},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)(c,b)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},o,{className:(0,u.Z)(p,E===t&&d,null==o?void 0:o.className)}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===E}))[0]):a.createElement("div",null,y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function h(e){var t=(0,o.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},9732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),o=n(5261),i=n(6270),l=["components"],s={sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},c="\ud83d\udce6 theme-classic",p={unversionedId:"api/themes/theme-classic",id:"api/themes/theme-classic",title:"\ud83d\udce6 theme-classic",description:"The classic theme for Docusaurus.",source:"@site/docs/api/themes/theme-classic.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-classic",permalink:"/docusaurus-theme-vanilla/docs/next/api/themes/@docusaurus/theme-classic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-classic.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},sidebar:"api",previous:{title:"Configuration",permalink:"/docusaurus-theme-vanilla/docs/next/api/themes/configuration"},next:{title:"\ud83d\udce6 theme-live-codeblock",permalink:"/docusaurus-theme-vanilla/docs/next/api/themes/@docusaurus/theme-live-codeblock"}},d={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"-theme-classic"},"\ud83d\udce6 theme-classic"),(0,u.kt)("p",null,"The classic theme for Docusaurus."),(0,u.kt)("p",null,"You can refer to the ",(0,u.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/api/themes/configuration"},"theme configuration page")," for more details on the configuration."),(0,u.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-classic\n"))),(0,u.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-classic\n")))),(0,u.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"If you have installed ",(0,u.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency."))))}h.isMDXComponent=!0}}]);