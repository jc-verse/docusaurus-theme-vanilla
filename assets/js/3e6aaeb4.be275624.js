"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[6831],{1204:function(t,e,o){o.r(e),o.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=o(3117),n=o(102),a=(o(7294),o(3905)),i=["components"],u={title:"How I Converted Profilo to Docusaurus in Under 2 Hours",author:"Christine Abernathy",authorURL:"http://twitter.com/abernathyca",authorImageURL:"https://github.com/caabernathy.png",authorTwitter:"abernathyca",tags:["profilo","adoption"]},c=void 0,s={permalink:"/blog/2018/04/30/How-I-Converted-Profilo-To-Docusaurus",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2018-04-30-How-I-Converted-Profilo-To-Docusaurus.md",source:"@site/blog/2018-04-30-How-I-Converted-Profilo-To-Docusaurus.md",title:"How I Converted Profilo to Docusaurus in Under 2 Hours",description:"\u201cJoel and I were discussing having a website and how it would have been great to launch with it. So I challenged myself to add Docusaurus support. It took just over an hour and a half. I'm going to send you a PR with the addition so you can take a look and see if you like it. Your workflow for adding docs wouldn't be much different from editing those markdown files.\u201d",date:"2018-04-30T00:00:00.000Z",formattedDate:"April 30, 2018",tags:[{label:"profilo",permalink:"/blog/tags/profilo"},{label:"adoption",permalink:"/blog/tags/adoption"}],readingTime:5.085,truncated:!0,authors:[{name:"Christine Abernathy",url:"http://twitter.com/abernathyca",imageURL:"https://github.com/caabernathy.png"}],frontMatter:{title:"How I Converted Profilo to Docusaurus in Under 2 Hours",author:"Christine Abernathy",authorURL:"http://twitter.com/abernathyca",authorImageURL:"https://github.com/caabernathy.png",authorTwitter:"abernathyca",tags:["profilo","adoption"]},prevItem:{title:"Towards Docusaurus 2",permalink:"/blog/2018/09/11/Towards-Docusaurus-2"},nextItem:{title:"Introducing Docusaurus",permalink:"/blog/2017/12/14/introducing-docusaurus"}},l={authorsImageUrls:[void 0]},p=[],f={toc:p};function d(t){var e=t.components,o=(0,n.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u201cJoel and I were discussing having a website and how it would have been great to launch with it. So I challenged myself to add Docusaurus support. It took just over an hour and a half. I'm going to send you a PR with the addition so you can take a look and see if you like it. Your workflow for adding docs wouldn't be much different from editing those markdown files.\u201d")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u2014 Note sent to the Profilo team"))),(0,a.kt)("p",null,"This is the story of the rather short journey it took to create the ",(0,a.kt)("a",{parentName:"p",href:"https://facebookincubator.github.io/profilo/"},"Profilo")," website using Docusaurus."),(0,a.kt)("p",null,"Profilo, an Android library for collecting performance traces from production, ",(0,a.kt)("a",{parentName:"p",href:"https://code.fb.com/android/profilo-understanding-app-performance-in-the-wild/"},"was announced")," earlier this year. The project was ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8"},"published on GitHub")," with a less than ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8/docs"},"a handful or Markdown files")," to describe its functionality and no website to showcase any branding and highlight the logo. The task at hand was to turn these existing docs and logo into a website."))}d.isMDXComponent=!0},3905:function(t,e,o){o.d(e,{Zo:function(){return l},kt:function(){return d}});var r=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},l=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),f=s(o),d=n,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return o?r.createElement(h,i(i({ref:e},l),{},{components:o})):r.createElement(h,i({ref:e},l))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,i=new Array(a);i[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"}}]);