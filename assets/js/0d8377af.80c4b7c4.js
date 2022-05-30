"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[2770],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3609:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},3205:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6775),i="apiTable_e8hp";function l(e,t){var n=e.name,i=e.children,l=function(e){for(var t=e;(0,a.isValidElement)(t);)t=a.Children.toArray(t.props.children)[0];return t}(i),u=n?n+"-"+l:l,o="#"+u,d=(0,r.k6)();return a.createElement("tr",{id:u,tabIndex:0,ref:d.location.hash===o?t:void 0,onClick:function(){d.push(o)},onKeyDown:function(e){"Enter"===e.key&&d.push(o)}},i.props.children)}var u=a.forwardRef(l);function o(e){var t=e.children,n=e.name,r=a.Children.toArray(t.props.children),l=r[0],o=r[1],d=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=d.current)||e.focus()}),[d]);var s=a.Children.map(o.props.children,(function(e){return a.createElement(u,{name:n,ref:d},e)}));return a.createElement("table",{className:i},l,a.createElement("tbody",null,s))}},6270:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(7294),i=n(6010),l=n(1048),u=n(3609),o=n(1943),d=n(2957),s="tabHeadings_mkcK",p="tabHeading_k98D",m="tabHeadingSelected_tg6b",c="tabsContainer_i8yn";function g(e){var t,n,l=e.lazy,g=e.defaultValue,f=e.values,k=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,u.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),C=w.tabGroupChoices,x=w.setTabGroupChoices,E=(0,r.useState)(y),T=E[0],O=E[1],I=[],D=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=C[k];null!=j&&j!==T&&b.some((function(e){return e.value===j}))&&O(j)}var z=function(e){var t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==T&&(D(t),O(a),null!=k&&x(k,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var i,l=I.indexOf(e.currentTarget)-1;n=null!=(i=I[l])?i:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:c},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)(s,h)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:z,onClick:z},l,{className:(0,i.Z)(p,T===t&&m,null==l?void 0:l.className)}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0]):r.createElement("div",null,v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,l.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},8843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(5261),u=n(6270),o=n(3205),d=["components"],s={sidebar_position:8,id:"plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",slug:"/api/plugins/@docusaurus/plugin-ideal-image"},p=void 0,m={unversionedId:"api/plugins/plugin-ideal-image",id:"version-2.0.0-beta.21/api/plugins/plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",description:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder).",source:"@site/versioned_docs/version-2.0.0-beta.21/api/plugins/plugin-ideal-image.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-ideal-image",permalink:"/docusaurus-theme-vanilla/docs/api/plugins/@docusaurus/plugin-ideal-image",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-ideal-image.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",slug:"/api/plugins/@docusaurus/plugin-ideal-image"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docusaurus-theme-vanilla/docs/api/plugins/@docusaurus/plugin-google-gtag"},next:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docusaurus-theme-vanilla/docs/api/plugins/@docusaurus/plugin-pwa"}},c={},g=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],f={toc:g};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, the plugin is ",(0,i.kt)("strong",{parentName:"p"},"inactive in development")," so you could always view full-scale images. If you want to debug the ideal image behavior, you could set the ",(0,i.kt)("a",{parentName:"p",href:"#disableInDev"},(0,i.kt)("inlineCode",{parentName:"a"},"disableInDev"))," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-ideal-image\n"))),(0,i.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-ideal-image\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This plugin supports the PNG and JPG formats only."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your React code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Accepted fields:"),(0,i.kt)(o.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ideal-img/[name].[hash:hex:7].[width].[ext]")),(0,i.kt)("td",{parentName:"tr",align:null},"Filename template for output files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sizes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"original size")),(0,i.kt)("td",{parentName:"tr",align:null},"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"original size")),(0,i.kt)("td",{parentName:"tr",align:null},"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"min")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"As an alternative to manually specifying ",(0,i.kt)("inlineCode",{parentName:"td"},"sizes"),", you can specify ",(0,i.kt)("inlineCode",{parentName:"td"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"max")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"steps"),", and the sizes will be generated for you.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"max")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("inlineCode",{parentName:"td"},"min")," above")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"steps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},"Configure the number of images generated between ",(0,i.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"max")," (inclusive)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"quality")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"85")),(0,i.kt)("td",{parentName:"tr",align:null},"JPEG compression quality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disableInDev")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"You can test ideal image behavior in dev mode by setting this to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),". ",(0,i.kt)("strong",{parentName:"td"},"Tip"),": use ",(0,i.kt)("a",{parentName:"td",href:"https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome"},"network throttling")," in your browser to simulate slow networks."))))),(0,i.kt)("h3",{id:"ex-config"},"Example configuration"),(0,i.kt)("p",null,"Here's an example configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      \"@docusaurus/plugin-ideal-image\",\n      // highlight-start\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n        disableInDev: false,\n      },\n      // highlight-end\n    ],\n  ],\n};\n")))}k.isMDXComponent=!0}}]);