"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[5309],{4879:function(e,n,t){function a(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,a){return e.findIndex((function(e){return n(e,t)}))!==a}))}t.d(n,{l:function(){return a}})},9984:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7294),r=t(6775),i="apiTable_e8hp";function o(e,n){var t=e.name,i=e.children,o=function(e){for(var n=e;(0,a.isValidElement)(n);)n=a.Children.toArray(n.props.children)[0];return n}(i),l=t?t+"-"+o:o,u="#"+l,s=(0,r.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:s.location.hash===u?n:void 0,onClick:function(){s.push(u)},onKeyDown:function(e){"Enter"===e.key&&s.push(u)}},i.props.children)}var l=a.forwardRef(o);function u(e){var n=e.children,t=e.name,r=a.Children.toArray(n.props.children),o=r[0],u=r[1],s=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=s.current)||e.focus()}),[s]);var c=a.Children.map(u.props.children,(function(e){return a.createElement(l,{name:t,ref:s},e)}));return a.createElement("table",{className:i},o,a.createElement("tbody",null,c))}},3909:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},3123:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(3117),r=t(7294),i=t(6010),o=t(5074),l=t(4879),u=t(5425),s=t(1085);function c(e){var n,t,o=e.lazy,c=e.block,p=e.defaultValue,d=e.values,g=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,l.l)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,u.U)(),k=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,r.useState)(y),T=w[0],E=w[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=k[g];null!=C&&C!==T&&v.some((function(e){return e.value===C}))&&E(C)}var I=function(e){var n=e.currentTarget,t=O.indexOf(n),a=v[t].value;a!==T&&(x(n),E(a),null!=g&&N(g,String(a)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;t=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,o=O.indexOf(e.currentTarget)-1;t=null!=(i=O[o])?i:O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},3895:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=t(3123),l=t(3909),u=t(9984),s=["components"],c={sidebar_position:6,id:"plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",slug:"/api/plugins/@docusaurus/plugin-google-analytics"},p=void 0,d={unversionedId:"api/plugins/plugin-google-analytics",id:"version-2.0.0-beta.20/api/plugins/plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",description:"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.",source:"@site/versioned_docs/version-2.0.0-beta.20/api/plugins/plugin-google-analytics.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-analytics.md",tags:[],version:"2.0.0-beta.20",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-debug",permalink:"/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-debug"},next:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-google-gtag"}},g={},m=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The default ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/"},"Google Analytics")," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,i.kt)("strong",{parentName:"p"},"in the production build"),". If you are using Google Analytics 4 you might need to consider using ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta.20/api/plugins/@docusaurus/plugin-google-gtag"},"plugin-google-gtag")," instead."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"production only")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This plugin is always inactive in development and ",(0,i.kt)("strong",{parentName:"p"},"only active in production")," to avoid polluting the analytics statistics."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-google-analytics\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-google-analytics\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use the preset ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,i.kt)("p",{parentName:"div"},"You can configure this plugin through the preset options."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Accepted fields:"),(0,i.kt)(u.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"trackingID")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"The tracking ID of your analytics service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"anonymizeIP")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the IP should be anonymized when sending requests."))))),(0,i.kt)("h3",{id:"ex-config"},"Example configuration"),(0,i.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most Docusaurus users configure this plugin through the preset options."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},'// Preset Options: googleAnalytics\n// Plugin Options: @docusaurus/plugin-google-analytics\n\nconst config = {\n  trackingID: "UA-141789564-1",\n  anonymizeIP: true,\n};\n')))}v.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);