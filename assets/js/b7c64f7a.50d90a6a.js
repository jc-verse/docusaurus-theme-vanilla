"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6365:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:4},l="Static methods",d={unversionedId:"api/plugin-methods/static-methods",id:"api/plugin-methods/static-methods",title:"Static methods",description:"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance.",source:"@site/docs/api/plugin-methods/static-methods.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/static-methods",permalink:"/docusaurus-theme-vanilla/docs/next/api/plugin-methods/static-methods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/static-methods.md",tags:[],version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653886285,formattedLastUpdatedAt:"5/30/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"api",previous:{title:"I18n lifecycles",permalink:"/docusaurus-theme-vanilla/docs/next/api/plugin-methods/i18n-lifecycles"},next:{title:"Plugins overview",permalink:"/docusaurus-theme-vanilla/docs/next/api/plugins"}},p={},c=[{value:"<code>validateOptions({options, validate})</code>",id:"validateOptions",level:2},{value:"<code>options</code>",id:"options",level:3},{value:"<code>validate</code>",id:"validate",level:3},{value:"<code>validateThemeConfig({themeConfig, validate})</code>",id:"validateThemeConfig",level:2},{value:"<code>themeConfig</code>",id:"themeConfig",level:3},{value:"<code>validate</code>",id:"validate-1",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"static-methods"},"Static methods"),(0,o.kt)("p",null,"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance."),(0,o.kt)("h2",{id:"validateOptions"},(0,o.kt)("inlineCode",{parentName:"h2"},"validateOptions({options, validate})")),(0,o.kt)("p",null,"Returns validated and normalized options for the plugin. This method is called before the plugin is initialized. You must return the options since they will be passed to the plugin during initialization."),(0,o.kt)("h3",{id:"options"},(0,o.kt)("inlineCode",{parentName:"h3"},"options")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," passed to plugin for validation and normalization."),(0,o.kt)("h3",{id:"validate"},(0,o.kt)("inlineCode",{parentName:"h3"},"validate")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," function which takes a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/joi"},"Joi"))," schema and options as the arguments, returns validated and normalized options. ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/joi"},"Joi")," is recommended for validation and normalization of options."),(0,o.kt)("p",{parentName:"div"},"To avoid mixing Joi versions, use ",(0,o.kt)("inlineCode",{parentName:"p"},'const {Joi} = require("@docusaurus/utils-validation")')))),(0,o.kt)("p",null,"If you don't use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/joi"},"Joi"))," for validation you can throw an Error in case of invalid options and return options in case of success."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-plugin/src/index.js"',title:'"my-plugin/src/index.js"'},'function myPlugin(context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateOptions = ({ options, validate }) => {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n};\n// highlight-end\n\nmodule.exports = myPlugin;\n')),(0,o.kt)("p",null,"In TypeScript, you can also choose to export this as a separate named export."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="my-plugin/src/index.ts"',title:'"my-plugin/src/index.ts"'},'export default function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateOptions({ options, validate }) {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n}\n// highlight-end\n')),(0,o.kt)("h2",{id:"validateThemeConfig"},(0,o.kt)("inlineCode",{parentName:"h2"},"validateThemeConfig({themeConfig, validate})")),(0,o.kt)("p",null,"Return validated and normalized configuration for the theme."),(0,o.kt)("h3",{id:"themeConfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"themeConfig")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig")," provided in ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," for validation and normalization."),(0,o.kt)("h3",{id:"validate-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"validate")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," function which takes a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/joi"},"Joi"))," schema and ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig")," as the arguments, returns validated and normalized options. ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/joi"},"Joi")," is recommended for validation and normalization of theme config."),(0,o.kt)("p",{parentName:"div"},"To avoid mixing Joi versions, use ",(0,o.kt)("inlineCode",{parentName:"p"},'const {Joi} = require("@docusaurus/utils-validation")')))),(0,o.kt)("p",null,"If you don't use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/joi"},"Joi"))," for validation you can throw an Error in case of invalid options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'},'function myPlugin(context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateThemeConfig = ({ themeConfig, validate }) => {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n};\n// highlight-end\n\nmodule.exports = validateThemeConfig;\n')),(0,o.kt)("p",null,"In TypeScript, you can also choose to export this as a separate named export."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="my-theme/src/index.ts"',title:'"my-theme/src/index.ts"'},'export default function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateThemeConfig({ themeConfig, validate }) {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n}\n// highlight-end\n')))}u.isMDXComponent=!0}}]);