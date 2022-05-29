"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[3217],{9372:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),r=n(102),o=n(7294),i=n(3727),s=n(4854),l=n(9966),u=n(7333),c=n(1427),d=o.createContext({collectLink:function(){}});var p=n(5555),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];function h(e,t){var n,h,f=e.isNavLink,v=e.to,g=e.href,k=e.activeClassName,y=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,N=void 0===w||w,x=(0,r.Z)(e,m),C=(0,l.Z)().siteConfig,T=C.trailingSlash,E=C.baseUrl,j=(0,p.C)().withBaseUrl,D=(0,o.useContext)(d),Z=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(function(){return Z.current}));var I=v||g;var O,M=(0,u.Z)(I),z=null==I?void 0:I.replace("pathname://",""),S=void 0!==z?(O=z,N&&function(e){return e.startsWith("/")}(O)?j(O):O):void 0;S&&M&&(S=(0,s.applyTrailingSlash)(S,{trailingSlash:T,baseUrl:E}));var A=(0,o.useRef)(!1),P=f?i.OL:i.rU,R=c.Z.canUseIntersectionObserver,B=(0,o.useRef)();(0,o.useEffect)((function(){return!R&&M&&null!=S&&window.docusaurus.prefetch(S),function(){R&&B.current&&B.current.disconnect()}}),[B,S,R,M]);var U=null!=(n=null==(h=S)?void 0:h.startsWith("#"))&&n,Y=!S||!M||U;return Y||b||D.collectLink(S),Y?o.createElement("a",(0,a.Z)({ref:Z,href:S},I&&!M&&{target:"_blank",rel:"noopener noreferrer"},x)):o.createElement(P,(0,a.Z)({},x,{onMouseEnter:function(){A.current||null==S||(window.docusaurus.preload(S),A.current=!0)},innerRef:function(e){Z.current=e,R&&e&&M&&(B.current=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(B.current.unobserve(e),B.current.disconnect(),null!=S&&window.docusaurus.prefetch(S))}))})),B.current.observe(e))},to:S},f&&{isActive:y,activeClassName:k}))}var f=o.forwardRef(h)},7176:function(e,t,n){n.d(t,{Z:function(){return l},I:function(){return s}});var a=n(7294);function r(e,t){var n=e.split(/(\{\w+\})/).map((function(e,n){if(n%2==1){var a=null==t?void 0:t[e.slice(1,-1)];if(void 0!==a)return a}return e}));return n.some((function(e){return(0,a.isValidElement)(e)}))?n.map((function(e,t){return(0,a.isValidElement)(e)?a.cloneElement(e,{key:t}):e})).filter((function(e){return""!==e})):n.join("")}var o=n(7529);function i(e){var t,n,a=e.id,r=e.message;if(void 0===a&&void 0===r)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!=(t=null!=(n=o[null!=a?a:r])?n:r)?t:a}function s(e,t){return r(i({message:e.message,id:e.id}),t)}function l(e){var t=e.children,n=e.id,o=e.values;if(t&&"string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var s=i({message:t,id:n});return a.createElement(a.Fragment,null,r(s,o))}},4879:function(e,t,n){function a(e,t){return void 0===t&&(t=function(e,t){return e===t}),e.filter((function(n,a){return e.findIndex((function(e){return t(e,n)}))!==a}))}n.d(t,{l:function(){return a}})},3139:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,o=e.split(/[#?]/)[0],i="/"===o||o===a?o:(r=o,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(o,i)}},4854:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var r=n(3139);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}})},8410:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9681),o=n(9372),i=n(5074),s=n(7176),l=n(1704),u=n(6500);function c(){var e=(0,r.yW)(),t=(0,r.gB)(),n="current"===e.name&&t.length>1?t[1].name:e.name;return a.createElement(u.Z,{language:"json",title:"package.json"},'{\n  "dependencies": {\n    "@docusaurus/core": "'+n+'",\n    "@docusaurus/preset-classic": "'+n+'",\n    // ...\n  }\n}')}function d(){var e=(0,r.yW)(),t=(0,r.Iw)().activeVersion;if((0,i.Z)()){var n=window.location.hostname;if(n.includes("netlify.app")&&!n.includes("deploy-preview"))return a.createElement(l.Z,{type:"caution"},a.createElement("p",null,a.createElement(s.Z,{id:"upgradeGuide.archivedVersion.notice",values:{mainSiteLink:a.createElement(o.Z,{href:"https://docusaurus.io/docs/installation"},a.createElement(s.Z,{id:"upgradeGuide.archivedVersion.notice.mainSiteLink.label"},"main site"))}},"You are browsing an archived version and the snippet below is outdated. Please go to the {mainSiteLink} and follow the instructions there to upgrade to the latest version.")))}return"current"===t.name?a.createElement(l.Z,{type:"info"},a.createElement("p",null,a.createElement(s.Z,{id:"upgradeGuide.unreleasedVersion.notice",values:{canaryDocLink:a.createElement(o.Z,{href:"/community/canary"},a.createElement(s.Z,{id:"upgradeGuide.unreleasedVersion.notice.canaryDocLink.label",values:{canaryTag:a.createElement("code",null,"@canary")}},"{canaryTag} release"))}},"You are browsing the documentation of an unreleased version. If you want to use any unreleased feature, you can use the {canaryDocLink}."))):t.name!==e.name?a.createElement(l.Z,{type:"caution"},a.createElement("p",null,a.createElement(s.Z,{id:"upgradeGuide.outdatedVersion.notice"},"You are browsing the documentation of an outdated version. The snippet below shows how to upgrade to the latest version."))):null}function p(){return a.createElement(a.Fragment,null,a.createElement(d,null),a.createElement(c,null))}},1704:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),o={note:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},i={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function s(e){var t=e.children,n=e.type,s=e.title,l=void 0===s?n:s,u=e.icon,c=void 0===u?o[n]:u;return a.createElement("div",{className:(0,r.Z)("admonition","admonition-"+n,"alert","alert--"+i[n])},a.createElement("div",{className:"admonition-heading"},a.createElement("h5",null,a.createElement("span",{className:"admonition-icon"},c),l)),a.createElement("div",{className:"admonition-content"},t))}},6500:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.className;return Array.isArray(t)&&t.every((function(e){return"string"==typeof e}))?a.createElement("pre",{className:n},a.createElement("code",null,t.join(""))):a.createElement("pre",{className:n},a.createElement("code",null,t))}},3909:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3123:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),o=n(6010),i=n(5074),s=n(4879),l=n(5425),u=n(1085);function c(e){var t,n,i=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),b=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(k),x=N[0],C=N[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=b[m];null!=j&&j!==x&&v.some((function(e){return e.value===j}))&&C(j)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==x&&(E(t),C(a),null!=m&&w(m,String(a)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;n=null!=(o=T[i])?o:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:Z,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(3123),s=n(3909),l=n(8410),u=["components"],c={description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},d="Installation",p={unversionedId:"installation",id:"installation",title:"Installation",description:"How to install Docusaurus locally, and start a Docusaurus site in no time.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docusaurus-theme-vanilla/docs/next/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/installation.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653837263,formattedLastUpdatedAt:"5/29/2022",frontMatter:{description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docusaurus-theme-vanilla/docs/next/category/getting-started"},next:{title:"Configuration",permalink:"/docusaurus-theme-vanilla/docs/next/configuration"}},m={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Scaffold project website",id:"scaffold-project-website",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Project structure rundown",id:"project-structure-rundown",level:3},{value:"Monorepos",id:"monorepos",level:3},{value:"Running the development server",id:"running-the-development-server",level:2},{value:"Build",id:"build",level:2},{value:"Updating your Docusaurus version",id:"updating-your-docusaurus-version",level:2},{value:"Problems?",id:"problems",level:2}],f={toc:h};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Docusaurus is essentially a set of npm ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/tree/main/packages"},"packages"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docusaurus-theme-vanilla/docs/next/#fast-track"},"Fast Track"))," to understand Docusaurus in ",(0,o.kt)("strong",{parentName:"p"},"5 minutes \u23f1"),"!"),(0,o.kt)("p",{parentName:"div"},"Use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new"))," to test Docusaurus immediately in your browser!"))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above (which can be checked by running ",(0,o.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,o.kt)("h2",{id:"scaffold-project-website"},"Scaffold project website"),(0,o.kt)("p",null,"The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic\n")),(0,o.kt)("p",null,"We recommend the ",(0,o.kt)("inlineCode",{parentName:"p"},"classic")," template so that you can get started quickly, and it contains features found in Docusaurus 1. The ",(0,o.kt)("inlineCode",{parentName:"p"},"classic")," template contains ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," which includes standard documentation, a blog, custom pages, and a CSS framework (with dark mode support). You can get up and running extremely quickly with the classic template and customize things later on when you have gained more familiarity with Docusaurus."),(0,o.kt)("p",null,"You can also use the template's TypeScript variant by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--typescript")," flag. See ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/typescript-support"},"TypeScript support")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic --typescript\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"FB-Only")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are setting up a new Docusaurus website for a Facebook open source project, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"facebook")," template instead, which comes with some useful Facebook-specific defaults:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website facebook\n")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Alternative installation commands"),(0,o.kt)("p",null,"You can also initialize a new project using your preferred project manager:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create docusaurus\n"))),(0,o.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create docusaurus\n"))))),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx create-docusaurus@latest --help"),", or check out its ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/api/misc/create-docusaurus"},"API docs")," for more information about all available flags."),(0,o.kt)("h2",{id:"project-structure"},"Project structure"),(0,o.kt)("p",null,"Assuming you chose the classic template and named your site ",(0,o.kt)("inlineCode",{parentName:"p"},"my-website"),", you will see the following files generated under a new directory ",(0,o.kt)("inlineCode",{parentName:"p"},"my-website/"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,o.kt)("h3",{id:"project-structure-rundown"},"Project structure rundown"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/blog/")," - Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," option. More details can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/next/blog"},"blog guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/docs/")," - Contains the Markdown files for the docs. Customize the order of the docs sidebar in ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebars.js"),". You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," option. More details can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/next/docs-introduction"},"docs guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/")," - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/pages")," - Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/next/creating-pages"},"pages guide")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/static/")," - Static directory. Any contents inside here will be copied into the root of the final ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/docusaurus.config.js")," - A config file containing the site configuration. This is the equivalent of ",(0,o.kt)("inlineCode",{parentName:"li"},"siteConfig.js")," in Docusaurus v1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/package.json")," - A Docusaurus website is a React app. You can install and use any npm packages you like in them"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/sidebars.js")," - Used by the documentation to specify the order of documents in the sidebar")),(0,o.kt)("h3",{id:"monorepos"},"Monorepos"),(0,o.kt)("p",null,"If you are using Docusaurus for documentation of an existing project, a monorepo may be the solution for you. Monorepos allow you to share dependencies between similar projects. For example, your website may use your local packages to showcase the latest features, instead of depending on a released version; your contributors can also conveniently update the docs as they implement features. An example monorepo folder structure is below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"my-monorepo\n\u251c\u2500\u2500 package-a # Another package, your actual project\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 package.json # Package A's dependencies\n\u251c\u2500\u2500 website   # Docusaurus root\n\u2502   \u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 package.json # Docusaurus' dependencies\n\u251c\u2500\u2500 package.json # Monorepo's shared dependencies\n")),(0,o.kt)("p",null,"In this case, you should run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx create-docusaurus")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"./my-monorepo")," folder."),(0,o.kt)("p",null,"If you're using a hosting provider such as Netlify or Vercel, you will need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"Base directory")," of the site to where your Docusaurus root is. In this case, that would be ",(0,o.kt)("inlineCode",{parentName:"p"},"./website"),". Read more about configuring ignore commands in the ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/deployment#deploying-to-netlify"},"deployment docs"),"."),(0,o.kt)("p",null,"Read more about monorepos in the ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/workspaces"},"Yarn documentation")," (Yarn is not the only way to set up a monorepo, but it's a common solution), or checkout ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"Docusaurus")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest"},"Jest")," for some real-world examples."),(0,o.kt)("h2",{id:"running-the-development-server"},"Running the development server"),(0,o.kt)("p",null,"To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nyarn run start\n")))),(0,o.kt)("p",null,"By default, a browser window will open at http://localhost:3000."),(0,o.kt)("p",null,"Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available."),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run build\n")))),(0,o.kt)("p",null,"and contents will be generated within the ",(0,o.kt)("inlineCode",{parentName:"p"},"/build")," directory, which can be copied to any static file hosting service like ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub pages"),", ",(0,o.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify"),". Check out the docs on ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/next/deployment"},"deployment")," for more details."),(0,o.kt)("h2",{id:"updating-your-docusaurus-version"},"Updating your Docusaurus version"),(0,o.kt)("p",null,"There are many ways to update your Docusaurus version. One guaranteed way is to manually change the version number in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to the desired version. Note that all ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/"),"-namespaced packages should be using the same version."),(0,o.kt)(l.Z,{mdxType:"UpgradeGuide"}),(0,o.kt)("p",null,"Then, in the directory containing ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", run your package manager's install command:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")))),(0,o.kt)("p",null,"To check that the update occurred successfully, run:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx docusaurus --version\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx docusaurus --version\n")))),(0,o.kt)("p",null,"You should see the correct version as output."),(0,o.kt)("p",null,"Alternatively, if you are using Yarn, you can do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use new unreleased features of Docusaurus with the ",(0,o.kt)("a",{parentName:"p",href:"/community/canary"},(0,o.kt)("inlineCode",{parentName:"a"},"@canary")," npm dist tag")))),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/docusaurus"},"Stack Overflow"),", on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"GitHub repository"),", our ",(0,o.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/docusaurus"},"Discord server"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/docusaurus"},"Twitter"),"."))}v.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);