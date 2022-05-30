"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[4652],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3609:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},3205:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6775),i="apiTable_e8hp";function l(e,t){var n=e.name,i=e.children,l=function(e){for(var t=e;(0,a.isValidElement)(t);)t=a.Children.toArray(t.props.children)[0];return t}(i),o=n?n+"-"+l:l,u="#"+o,s=(0,r.k6)();return a.createElement("tr",{id:o,tabIndex:0,ref:s.location.hash===u?t:void 0,onClick:function(){s.push(u)},onKeyDown:function(e){"Enter"===e.key&&s.push(u)}},i.props.children)}var o=a.forwardRef(l);function u(e){var t=e.children,n=e.name,r=a.Children.toArray(t.props.children),l=r[0],u=r[1],s=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=s.current)||e.focus()}),[s]);var p=a.Children.map(u.props.children,(function(e){return a.createElement(o,{name:n,ref:s},e)}));return a.createElement("table",{className:i},l,a.createElement("tbody",null,p))}},6270:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5261:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7462),r=n(7294),i=n(6010),l=n(1048),o=n(3609),u=n(1943),s=n(2957),p="tabHeadings_mkcK",c="tabHeading_k98D",d="tabHeadingSelected_tg6b",m="tabsContainer_i8yn";function f(e){var t,n,l=e.lazy,f=e.defaultValue,g=e.values,h=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),C=w.tabGroupChoices,x=w.setTabGroupChoices,T=(0,r.useState)(y),E=T[0],O=T[1],D=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=C[h];null!=j&&j!==E&&N.some((function(e){return e.value===j}))&&O(j)}var I=function(e){var t=e.currentTarget,n=D.indexOf(t),a=N[n].value;a!==E&&(P(t),O(a),null!=h&&x(h,String(a)))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=D.indexOf(e.currentTarget)+1;n=null!=(a=D[r])?a:D[0];break;case"ArrowLeft":var i,l=D.indexOf(e.currentTarget)-1;n=null!=(i=D[l])?i:D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:m},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)(p,v)},N.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return D.push(e)},onKeyDown:z,onFocus:I,onClick:I},l,{className:(0,i.Z)(c,E===t&&d,null==l?void 0:l.className)}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0]):r.createElement("div",null,k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function g(e){var t=(0,l.Z)();return r.createElement(f,(0,a.Z)({key:String(t)},e))}},4090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(5261),o=n(6270),u=n(3205),s=["components"],p={sidebar_position:10,id:"plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",slug:"/api/plugins/@docusaurus/plugin-sitemap"},c=void 0,d={unversionedId:"api/plugins/plugin-sitemap",id:"version-2.0.0-beta.21/api/plugins/plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",description:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately.",source:"@site/versioned_docs/version-2.0.0-beta.21/api/plugins/plugin-sitemap.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-sitemap",permalink:"/docusaurus-theme-vanilla/docs/api/plugins/@docusaurus/plugin-sitemap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-sitemap.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:10,frontMatter:{sidebar_position:10,id:"plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",slug:"/api/plugins/@docusaurus/plugin-sitemap"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docusaurus-theme-vanilla/docs/api/plugins/@docusaurus/plugin-pwa"},next:{title:"Themes overview",permalink:"/docusaurus-theme-vanilla/docs/api/themes"}},m={},f=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],g={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"production only")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This plugin is always inactive in development and ",(0,i.kt)("strong",{parentName:"p"},"only active in production")," because it works on the build output."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-sitemap\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-sitemap\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use the preset ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,i.kt)("p",{parentName:"div"},"You can configure this plugin through the ",(0,i.kt)("a",{parentName:"p",href:"#ex-config-preset"},"preset options"),"."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Accepted fields:"),(0,i.kt)(u.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"changefreq")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'weekly'")),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions"},"sitemap docs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.5")),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions"},"sitemap docs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ignorePatterns")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"A list of glob patterns; matching route paths will be filtered from the sitemap. Note that you may need to include the base URL in here.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filename")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sitemap.xml")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the created sitemap file, relative to the output directory. Useful if you have two plugin instances outputting two files."))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This plugin also respects some site config:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/api/docusaurus-config#noIndex"},(0,i.kt)("inlineCode",{parentName:"a"},"noIndex")),": results in no sitemap generated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/api/docusaurus-config#trailingSlash"},(0,i.kt)("inlineCode",{parentName:"a"},"trailingSlash")),": determines if the URLs in the sitemap have trailing slashes")))),(0,i.kt)("h3",{id:"ex-config"},"Example configuration"),(0,i.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most Docusaurus users configure this plugin through the preset options."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},'// Preset Options: sitemap\n// Plugin Options: @docusaurus/plugin-sitemap\n\nconst config = {\n  changefreq: "weekly",\n  priority: 0.5,\n  ignorePatterns: ["/tags/**"],\n  filename: "sitemap.xml",\n};\n')),(0,i.kt)("p",null,"You can find your sitemap at ",(0,i.kt)("inlineCode",{parentName:"p"},"/sitemap.xml"),"."))}h.isMDXComponent=!0}}]);