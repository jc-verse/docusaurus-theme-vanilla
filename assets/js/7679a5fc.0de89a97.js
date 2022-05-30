"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[596],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3609:function(e,t,n){function r(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,r){return e.findIndex((function(e){return t(e,n)}))!==r}))}n.d(t,{l:function(){return r}})},6270:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),o=n(6010),u=n(1048),i=n(3609),l=n(1943),s=n(2957),c="tabHeadings_mkcK",p="tabHeading_k98D",d="tabsContainer_i8yn";function m(e){var t,n,u=e.lazy,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),O=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,a.useState)(k),E=T[0],x=T[1],j=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=O[h];null!=D&&D!==E&&y.some((function(e){return e.value===D}))&&x(D)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),r=y[n].value;r!==E&&(C(t),x(r),null!=h&&N(h,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,u=j.indexOf(e.currentTarget)-1;n=null!=(o=j[u])?o:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:d},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)(c,v)},y.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:P,onClick:P},u,{className:(0,o.Z)(p,null==u?void 0:u.className)}),null!=n?n:t)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0]):a.createElement("div",null,b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function f(e){var t=(0,u.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},4079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=n(5261),i=n(6270),l=["components"],s={sidebar_position:2,id:"theme-classic",title:"\ud83d\udce6 theme-classic",slug:"/api/themes/@docusaurus/theme-classic"},c=void 0,p={unversionedId:"api/themes/theme-classic",id:"version-2.0.0-beta.21/api/themes/theme-classic",title:"\ud83d\udce6 theme-classic",description:"The classic theme for Docusaurus.",source:"@site/versioned_docs/version-2.0.0-beta.21/api/themes/theme-classic.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-classic",permalink:"/docusaurus-theme-vanilla/docs/api/themes/@docusaurus/theme-classic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-classic.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653902082,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"theme-classic",title:"\ud83d\udce6 theme-classic",slug:"/api/themes/@docusaurus/theme-classic"},sidebar:"api",previous:{title:"Configuration",permalink:"/docusaurus-theme-vanilla/docs/api/themes/configuration"},next:{title:"\ud83d\udce6 theme-live-codeblock",permalink:"/docusaurus-theme-vanilla/docs/api/themes/@docusaurus/theme-live-codeblock"}},d={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The classic theme for Docusaurus."),(0,o.kt)("p",null,"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/api/themes/configuration"},"theme configuration page")," for more details on the configuration."),(0,o.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-classic\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-classic\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have installed ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency."))))}h.isMDXComponent=!0}}]);