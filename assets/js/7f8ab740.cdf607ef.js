"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[7586],{6564:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=t(3117),i=t(102),l=(t(7294),t(3905)),r=["components"],o={sidebar_position:3},s="I18n lifecycles",c={unversionedId:"api/plugin-methods/i18n-lifecycles",id:"version-2.0.0-beta.21/api/plugin-methods/i18n-lifecycles",title:"I18n lifecycles",description:"Plugins use these lifecycles to load i18n-related data.",source:"@site/versioned_docs/version-2.0.0-beta.21/api/plugin-methods/i18n-lifecycles.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/i18n-lifecycles",permalink:"/docs/api/plugin-methods/i18n-lifecycles",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/i18n-lifecycles.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653836855,formattedLastUpdatedAt:"5/29/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"api",previous:{title:"Extending infrastructure",permalink:"/docs/api/plugin-methods/extend-infrastructure"},next:{title:"Static methods",permalink:"/docs/api/plugin-methods/static-methods"}},u={},p=[{value:"<code>getTranslationFiles({content})</code>",id:"getTranslationFiles",level:2},{value:"<code>translateContent({content,translationFiles})</code>",id:"translateContent",level:2},{value:"<code>translateThemeConfig({themeConfig,translationFiles})</code>",id:"translateThemeConfig",level:2},{value:"<code>async getDefaultCodeTranslationMessages()</code>",id:"getDefaultCodeTranslationMessages",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"i18n-lifecycles"},"I18n lifecycles"),(0,l.kt)("p",null,"Plugins use these lifecycles to load i18n-related data."),(0,l.kt)("h2",{id:"getTranslationFiles"},(0,l.kt)("inlineCode",{parentName:"h2"},"getTranslationFiles({content})")),(0,l.kt)("p",null,"Plugins declare the JSON translation files they want to use."),(0,l.kt)("p",null,"Returns translation files ",(0,l.kt)("inlineCode",{parentName:"p"},"{path: string, content: ChromeI18nJSON}"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": relative to the plugin localized folder ",(0,l.kt)("inlineCode",{parentName:"li"},"i18n/[locale]/[pluginName]"),". Extension ",(0,l.kt)("inlineCode",{parentName:"li"},".json")," should be omitted to remain generic."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content"),": using the Chrome i18n JSON format.")),(0,l.kt)("p",null,"These files will be written by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/cli#docusaurus-write-translations-sitedir"},(0,l.kt)("inlineCode",{parentName:"a"},"write-translations")," CLI")," to the plugin i18n subfolder, and will be read in the appropriate locale before calling ",(0,l.kt)("a",{parentName:"p",href:"#translateContent"},(0,l.kt)("inlineCode",{parentName:"a"},"translateContent()"))," and ",(0,l.kt)("a",{parentName:"p",href:"#translateThemeConfig"},(0,l.kt)("inlineCode",{parentName:"a"},"translateThemeConfig()"))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = function (context, options) {\n  return {\n    name: "my-plugin",\n    // highlight-start\n    async getTranslationFiles({ content }) {\n      return [\n        {\n          path: "sidebar-labels",\n          content: {\n            someSidebarLabel: {\n              message: "Some Sidebar Label",\n              description: "A label used in my plugin in the sidebar",\n            },\n            someLabelFromContent: content.myLabel,\n          },\n        },\n      ];\n    },\n    // highlight-end\n  };\n};\n')),(0,l.kt)("h2",{id:"translateContent"},(0,l.kt)("inlineCode",{parentName:"h2"},"translateContent({content,translationFiles})")),(0,l.kt)("p",null,"Translate the plugin content, using the localized translation files."),(0,l.kt)("p",null,"Returns the localized plugin content."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"contentLoaded()")," lifecycle will be called with the localized plugin content returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"translateContent()"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = function (context, options) {\n  return {\n    name: "my-plugin",\n    // highlight-start\n    translateContent({ content, translationFiles }) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === "myTranslationFile",\n      );\n      return {\n        ...content,\n        someContentLabel: myTranslationFile.someContentLabel.message,\n      };\n    },\n    // highlight-end\n  };\n};\n')),(0,l.kt)("h2",{id:"translateThemeConfig"},(0,l.kt)("inlineCode",{parentName:"h2"},"translateThemeConfig({themeConfig,translationFiles})")),(0,l.kt)("p",null,"Translate the site ",(0,l.kt)("inlineCode",{parentName:"p"},"themeConfig")," labels, using the localized translation files."),(0,l.kt)("p",null,"Returns the localized ",(0,l.kt)("inlineCode",{parentName:"p"},"themeConfig"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = function (context, options) {\n  return {\n    name: "my-theme",\n    // highlight-start\n    translateThemeConfig({ themeConfig, translationFiles }) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === "myTranslationFile",\n      );\n      return {\n        ...themeConfig,\n        someThemeConfigLabel: myTranslationFile.someThemeConfigLabel.message,\n      };\n    },\n    // highlight-end\n  };\n};\n')),(0,l.kt)("h2",{id:"getDefaultCodeTranslationMessages"},(0,l.kt)("inlineCode",{parentName:"h2"},"async getDefaultCodeTranslationMessages()")),(0,l.kt)("p",null,"Themes using the ",(0,l.kt)("inlineCode",{parentName:"p"},"<Translate>")," API can provide default code translation messages."),(0,l.kt)("p",null,"It should return messages in ",(0,l.kt)("inlineCode",{parentName:"p"},"Record<string, string>"),", where keys are translation ids and values are messages (without the description) localized using the site's current locale."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = function (context, options) {\n  return {\n    name: "my-theme",\n    // highlight-start\n    async getDefaultCodeTranslationMessages() {\n      return readJsonFile(`${context.i18n.currentLocale}.json`);\n    },\n    // highlight-end\n  };\n};\n')))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);