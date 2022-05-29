"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[8730],{9474:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),s=["components"],i={title:"Releasing Docusaurus i18n",authors:["slorber"],tags:["release","i18n"],image:"/img/blog/2021-03-09-releasing-docusaurus-i18n/social-card.png"},l=void 0,u={permalink:"/blog/2021/03/09/releasing-docusaurus-i18n",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2021-03-09-releasing-docusaurus-i18n.md",source:"@site/blog/2021-03-09-releasing-docusaurus-i18n.md",title:"Releasing Docusaurus i18n",description:"Today, we officially release Docusaurus 2 i18n (internationalization), as part of 2.0.0-alpha.71.",date:"2021-03-09T00:00:00.000Z",formattedDate:"March 9, 2021",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"i18n",permalink:"/blog/tags/i-18-n"}],readingTime:3.32,truncated:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",email:"lorber.sebastien@gmail.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Releasing Docusaurus i18n",authors:["slorber"],tags:["release","i18n"],image:"/img/blog/2021-03-09-releasing-docusaurus-i18n/social-card.png"},prevItem:{title:"Announcing Docusaurus 2 Beta",permalink:"/blog/2021/05/12/announcing-docusaurus-two-beta"},nextItem:{title:"Docusaurus 2020 Recap",permalink:"/blog/2021/01/19/docusaurus-2020-recap"}},p={authorsImageUrls:[void 0]},c=[{value:"Translate your site",id:"translate-your-site",level:2},{value:"Design decisions",id:"design-decisions",level:2},{value:"Showcase",id:"showcase",level:2},{value:"Jest: upgrading Docusaurus",id:"jest-upgrading-docusaurus",level:3},{value:"Redwood: adopting Docusaurus",id:"redwood-adopting-docusaurus",level:3},{value:"Datagit: using LTR support",id:"datagit-using-ltr-support",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today, we officially release ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/i18n/introduction"},"Docusaurus 2 i18n"))," (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internationalization_and_localization"},"internationalization"),"), as part of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-alpha.71"},"2.0.0-alpha.71"),"."),(0,o.kt)("p",null,"Docusaurus 2 has now reached ",(0,o.kt)("strong",{parentName:"p"},"full feature parity with Docusaurus 1"),". \ud83c\udf89 And soon, after a few additional infrastructure updates and a bit more testing, the ",(0,o.kt)("strong",{parentName:"p"},"first Docusaurus 2 beta")," will be released."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We went the extra mile"),", and the new i18n support is ",(0,o.kt)("strong",{parentName:"p"},"even better than in Docusaurus 1"),"."),(0,o.kt)("p",null,"In this post, we will present you the ",(0,o.kt)("strong",{parentName:"p"},"translation workflow"),", explain some ",(0,o.kt)("strong",{parentName:"p"},"design decisions")," and ",(0,o.kt)("strong",{parentName:"p"},"showcase early adopter sites")," that just went live: ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),", ",(0,o.kt)("a",{parentName:"p",href:"https://learn.redwoodjs.com/"},"Redwood"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://datagit.ir/"},"Datagit"),"."),(0,o.kt)("p",null,"We also ",(0,o.kt)("strong",{parentName:"p"},"dogfood")," the i18n support on the ",(0,o.kt)("strong",{parentName:"p"},"Docusaurus 2 site itself"),", and this post is already available in ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/blog/2021/03/09/releasing-docusaurus-i18n"},"English")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/fr/blog/2021/03/09/releasing-docusaurus-i18n"},"French"),"!"),(0,o.kt)("h2",{id:"translate-your-site"},"Translate your site"),(0,o.kt)("p",null,"You can translate a Docusaurus site in ",(0,o.kt)("strong",{parentName:"p"},"3 simple steps"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Configure"),": declare the default locale and alternative locales in ",(0,o.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Translate"),": put the translation files at the ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/next/i18n/introduction#translation-files-location"},"correct filesystem location")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Deploy"),": build and deploy your site using a single or multi-domain strategy")),(0,o.kt)("p",null,"The i18n support is ",(0,o.kt)("strong",{parentName:"p"},"very flexible")," and based on the ",(0,o.kt)("strong",{parentName:"p"},"filesystem"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/i18n/tutorial"},"i18n tutorial"))," is the best way to get started, and we provide help to use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/i18n/git"},"Git"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/i18n/crowdin"},"Crowdin")),"."),(0,o.kt)("h2",{id:"design-decisions"},"Design decisions"),(0,o.kt)("p",null,"The goals of the Docusaurus i18n system are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple"),": just put the translated files in the ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/next/i18n/introduction#translation-files-location"},"correct filesystem location")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexible translation workflows"),": use Git (monorepo, forks, or submodules), SaaS software, FTP"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexible deployment options"),": single, multiple domains, or hybrid"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modular"),": allow plugin authors to provide i18n support"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Low-overhead runtime"),": documentation is mostly static and does not require a heavy JS library or polyfills"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scalable build-times"),": allow building and deploying localized sites independently"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Localize assets"),": an image of your site might contain text that should be translated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No coupling"),": not forced to use any SaaS, yet integrations are possible"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy to use with ",(0,o.kt)("a",{parentName:"strong",href:"https://crowdin.com/"},"Crowdin")),": multiple Docusaurus 1 sites use Crowdin, and should be able to migrate to v2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Good SEO defaults"),": we set useful SEO headers like ",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/search/docs/advanced/crawling/localized-versions"},(0,o.kt)("inlineCode",{parentName:"a"},"hreflang"))," for you"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RTL support"),": locales reading right-to-left (Arabic, Hebrew, etc.) are supported and easy to implement"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default translations"),": classic theme labels are translated for you in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales"},"many languages"))),(0,o.kt)("h2",{id:"showcase"},"Showcase"),(0,o.kt)("p",null,"We worked with a few volunteers to ",(0,o.kt)("strong",{parentName:"p"},"dogfood the i18n support")," before releasing it."),(0,o.kt)("h3",{id:"jest-upgrading-docusaurus"},"Jest: upgrading Docusaurus"),(0,o.kt)("p",null,"We have made it possible to ",(0,o.kt)("strong",{parentName:"p"},"upgrade")," a ",(0,o.kt)("strong",{parentName:"p"},"translated Docusaurus 1 site")," to Docusaurus 2."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://jestjs.io"},"Jest")),", using Docusaurus 1 and Crowdin was one of those sites."),(0,o.kt)("p",null,"The Docusaurus 2 migration was successful and the new site is now deployed in production (",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/blog/2021/03/09/jest-website-upgrade"},"announcement post"),")."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io"},(0,o.kt)("img",{alt:"Jest i18n screenshot",src:a(8975).Z,width:"2772",height:"1798"}))),(0,o.kt)("h3",{id:"redwood-adopting-docusaurus"},"Redwood: adopting Docusaurus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redwoodjs.com/"},"Redwood")," is a React full-stack Jamstack framework."),(0,o.kt)("p",null,"They were looking for a solution to create an ",(0,o.kt)("strong",{parentName:"p"},"internationalized learning platform"),", and became early adopters of Docusaurus 2 i18n for ",(0,o.kt)("a",{parentName:"p",href:"https://learn.redwoodjs.com/"},"learn.redwoodjs.com"),", using Crowdin to get it translated to French."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.redwoodjs.com/"},(0,o.kt)("img",{alt:"Redwood i18n screenshot",src:a(2130).Z,width:"2772",height:"1798"}))),(0,o.kt)("h3",{id:"datagit-using-ltr-support"},"Datagit: using LTR support"),(0,o.kt)("p",null,"The i18n system should work with any language, including ",(0,o.kt)("strong",{parentName:"p"},"Right-to-Left languages"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://datagit.ir/"},"Datagit.ir")," is using Farsi, and a simple configuration option is able to ",(0,o.kt)("strong",{parentName:"p"},"flip the Docusaurus theme")," to add the required Right-to-Left support."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://datagit.ir/"},(0,o.kt)("img",{alt:"Datagit i18n screenshot",src:a(3875).Z,width:"2772",height:"1798"}))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We sincerely hope you will adopt and like the new i18n support."),(0,o.kt)("p",null,"This feature has not been an easy one, and we would like to thank everyone that got involved in this journey:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lex111"},"Alexey")," for his help to make the i18n support exhaustive and even better than v1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SimenB"},"Simen")," for volunteering and supporting the Jest migration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/clairefro"},"Claire")," for adopting Docusaurus 2 on the new Redwood platform and providing many feedbacks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/massoudmaboudi"},"Massoud")," for reviewing my work on LTR and adopting it on Datagit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crowdin.com/"},"Crowdin")," for their support and willingness to improve their translation SaaS"),(0,o.kt)("li",{parentName:"ul"},"The Docusaurus community for their patience, and providing many useful feedbacks on GitHub")),(0,o.kt)("p",null,"Thanks for reading."),(0,o.kt)("p",null,"\ud83d\ude4f And please, add your brand new i18n sites to our ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"showcase page"),". We accept any all polished Docusaurus site here, and we are working on a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/4238"},"redesign")," allowing you to filter sites by features."))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3875:function(e,t,a){t.Z=a.p+"assets/images/datagit-9cff7b631eaa43b00d9e1373359abfb1.png"},8975:function(e,t,a){t.Z=a.p+"assets/images/jest-59f159eb97ecd87655cf47ec5cc00d47.png"},2130:function(e,t,a){t.Z=a.p+"assets/images/redwood-c3155187911b62428e0cc1e8b662de76.png"}}]);