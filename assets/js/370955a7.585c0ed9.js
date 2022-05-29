"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[5966],{4879:function(e,n,t){function a(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,a){return e.findIndex((function(e){return n(e,t)}))!==a}))}t.d(n,{l:function(){return a}})},3909:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},3123:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),i=t(7294),o=t(6010),r=t(5074),l=t(4879),s=t(5425),d=t(1085);function u(e){var n,t,r=e.lazy,u=e.block,c=e.defaultValue,p=e.values,m=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,l.l)(k,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,i.useState)(g),C=w[0],x=w[1],T=[],j=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==C&&k.some((function(e){return e.value===E}))&&x(E)}var O=function(e){var n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==C&&(j(n),x(a),null!=m&&y(m,String(a)))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,i=T.indexOf(e.currentTarget)+1;t=null!=(a=T[i])?a:T[0];break;case"ArrowLeft":var o,r=T.indexOf(e.currentTarget)-1;t=null!=(o=T[r])?o:T[T.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},k.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",null==r?void 0:r.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),r?(0,i.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},5416:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),r=t(3123),l=t(3909),s=["components"],d={id:"versioning",title:"Versioning",slug:"/versioning"},u=void 0,c={unversionedId:"guides/docs/versioning",id:"version-2.0.0-beta.21/guides/docs/versioning",title:"Versioning",description:"You can use the version script to create a new documentation version based on the latest content in the docs directory. That specific set of documentation will then be preserved and accessible even as the documentation in the docs directory changes moving forward.",source:"@site/versioned_docs/version-2.0.0-beta.21/guides/docs/versioning.md",sourceDirName:"guides/docs",slug:"/versioning",permalink:"/docusaurus-theme-vanilla/docs/versioning",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/versioning.md",tags:[],version:"2.0.0-beta.21",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1653837263,formattedLastUpdatedAt:"5/29/2022",frontMatter:{id:"versioning",title:"Versioning",slug:"/versioning"},sidebar:"docs",previous:{title:"Using multiple sidebars",permalink:"/docusaurus-theme-vanilla/docs/sidebar/multiple-sidebars"},next:{title:"Docs Multi-instance",permalink:"/docusaurus-theme-vanilla/docs/docs-multi-instance"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Tutorials",id:"tutorials",level:2},{value:"Tagging a new version",id:"tagging-a-new-version",level:3},{value:"Creating new docs",id:"creating-new-docs",level:3},{value:"Updating an existing version",id:"updating-an-existing-version",level:3},{value:"Deleting an existing version",id:"deleting-an-existing-version",level:3},{value:"Configuring versioning behavior",id:"configuring-versioning-behavior",level:2},{value:"Navbar items",id:"navbar-items",level:2},{value:"Recommended practices",id:"recommended-practices",level:2},{value:"Version your documentation only when needed",id:"version-your-documentation-only-when-needed",level:3},{value:"Keep the number of versions small",id:"keep-the-number-of-versions-small",level:3},{value:"Use absolute import within the docs",id:"use-absolute-import-within-the-docs",level:3},{value:"Link docs by file paths",id:"link-docs-by-file-paths",level:3},{value:"Global or versioned collocated assets",id:"global-or-versioned-collocated-assets",level:3}],v={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the version script to create a new documentation version based on the latest content in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," directory. That specific set of documentation will then be preserved and accessible even as the documentation in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," directory changes moving forward."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Think about it before starting to version your documentation - it can become difficult for contributors to help improve it!"))),(0,o.kt)("p",null,"Most of the time, you don't need versioning as it will just increase your build time, and introduce complexity to your codebase. Versioning is ",(0,o.kt)("strong",{parentName:"p"},"best suited for websites with high-traffic and rapid changes to documentation between versions"),". If your documentation rarely changes, don't add versioning to your documentation."),(0,o.kt)("p",null,"To better understand how versioning works and see if it suits your needs, you can read on below."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A typical versioned doc site looks like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"website\n\u251c\u2500\u2500 sidebars.json        # sidebar for the current docs version\n\u251c\u2500\u2500 docs                 # docs directory for the current docs version\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2514\u2500\u2500 bar.md       # https://mysite.com/docs/next/foo/bar\n\u2502   \u2514\u2500\u2500 hello.md         # https://mysite.com/docs/next/hello\n\u251c\u2500\u2500 versions.json        # file to indicate what versions are available\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/foo/bar\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/1.0.0/foo/bar\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u251c\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n\u251c\u2500\u2500 docusaurus.config.js\n\u2514\u2500\u2500 package.json\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," file is a list of version names, ordered from newest to oldest."),(0,o.kt)("p",null,"The table below explains how a versioned file maps to its version and the generated URL."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Path"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.0/hello.md")),(0,o.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,o.kt)("td",{parentName:"tr",align:null},"/docs/1.0.0/hello")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.1.0/hello.md")),(0,o.kt)("td",{parentName:"tr",align:null},"1.1.0 (latest)"),(0,o.kt)("td",{parentName:"tr",align:null},"/docs/hello")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"docs/hello.md")),(0,o.kt)("td",{parentName:"tr",align:null},"current"),(0,o.kt)("td",{parentName:"tr",align:null},"/docs/next/hello")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," directory belong to the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," docs version."),(0,o.kt)("p",{parentName:"div"},"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," docs version is labeled as ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")," and hosted under ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/next/*"),", but it is entirely configurable to fit your project's release lifecycle."))),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"Note the terminology we use here."),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("b",null,"Current version")),(0,o.kt)("dd",null,"The version placed in the ",(0,o.kt)("code",null,"./docs")," folder."),(0,o.kt)("dt",null,(0,o.kt)("b",null,"Latest version / last version")),(0,o.kt)("dd",null,"The version served by default for docs navbar items. Usually has path ",(0,o.kt)("code",null,"/docs"),".")),(0,o.kt)("p",null,"Current version is defined by the ",(0,o.kt)("strong",{parentName:"p"},"file system location"),", while latest version is defined by the ",(0,o.kt)("strong",{parentName:"p"},"the navigation behavior"),". They may or may not be the same version! (And the default configuration, as shown in the table above, would treat them as different: current version at ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/next")," and latest at ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs"),".)"),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("h3",{id:"tagging-a-new-version"},"Tagging a new version"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, make sure the current docs version (the ",(0,o.kt)("inlineCode",{parentName:"li"},"./docs")," directory) is ready to be frozen."),(0,o.kt)("li",{parentName:"ol"},"Enter a new version number.")),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.1.0\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run docusaurus docs:version 1.1.0\n")))),(0,o.kt)("p",null,"When tagging a new version, the document versioning mechanism will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the full ",(0,o.kt)("inlineCode",{parentName:"li"},"docs/")," folder contents into a new ",(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-[versionName]/")," folder."),(0,o.kt)("li",{parentName:"ul"},"Create a versioned sidebars file based from your current ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/docs-introduction#sidebar"},"sidebar")," configuration (if it exists) - saved as ",(0,o.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-[versionName]-sidebars.json"),"."),(0,o.kt)("li",{parentName:"ul"},"Append the new version number to ",(0,o.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,o.kt)("h3",{id:"creating-new-docs"},"Creating new docs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Place the new file into the corresponding version folder."),(0,o.kt)("li",{parentName:"ol"},"Include the reference to the new file in the corresponding sidebar file according to the version number.")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Current version structure",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The new file.\ndocs/new.md\n\n# Edit the corresponding sidebar file.\nsidebars.js\n"))),(0,o.kt)(l.Z,{value:"Older version structure",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The new file.\nversioned_docs/version-1.0.0/new.md\n\n# Edit the corresponding sidebar file.\nversioned_sidebars/version-1.0.0-sidebars.json\n")))),(0,o.kt)("h3",{id:"updating-an-existing-version"},"Updating an existing version"),(0,o.kt)("p",null,"You can update multiple docs versions at the same time because each directory in ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs/")," represents specific routes when published."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit any file."),(0,o.kt)("li",{parentName:"ol"},"Commit and push changes."),(0,o.kt)("li",{parentName:"ol"},"It will be published to the version.")),(0,o.kt)("p",null,"Example: When you change any file in ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-2.6/"),", it will only affect the docs for version ",(0,o.kt)("inlineCode",{parentName:"p"},"2.6"),"."),(0,o.kt)("h3",{id:"deleting-an-existing-version"},"Deleting an existing version"),(0,o.kt)("p",null,"You can delete/remove versions as well."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove the version from ",(0,o.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'[\n  "2.0.0",\n  "1.9.0",\n  // highlight-next-line\n- "1.8.0"\n]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Delete the versioned docs directory. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.8.0"),"."),(0,o.kt)("li",{parentName:"ol"},"Delete the versioned sidebars file. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-1.8.0-sidebars.json"),".")),(0,o.kt)("h2",{id:"configuring-versioning-behavior"},"Configuring versioning behavior"),(0,o.kt)("p",null,'The "current" version is the version name for the ',(0,o.kt)("inlineCode",{parentName:"p"},"./docs")," folder. There are different ways to manage versioning, but two very common patterns are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You release v1, and start immediately working on v2 (including its docs). In this case, the ",(0,o.kt)("strong",{parentName:"li"},"current version")," is v2, which is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"./docs")," source folder, and can be browsed at ",(0,o.kt)("inlineCode",{parentName:"li"},"example.com/docs/next"),". The ",(0,o.kt)("strong",{parentName:"li"},"latest version")," is v1, which is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"./versioned_docs/version-1")," source folder, and is browsed by most of your users at ",(0,o.kt)("inlineCode",{parentName:"li"},"example.com/docs"),"."),(0,o.kt)("li",{parentName:"ul"},"You release v1, and will maintain it for some time before thinking about v2. In this case, the ",(0,o.kt)("strong",{parentName:"li"},"current version")," and ",(0,o.kt)("strong",{parentName:"li"},"latest version")," will both be point to v1, since the v2 docs doesn't even exist yet!")),(0,o.kt)("p",null,'Docusaurus defaults work great for the first use case. We will label the current version as "next" and you can even choose not to publish it.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For the 2nd use case"),": if you release v1 and don't plan to work on v2 anytime soon, instead of versioning v1 and having to maintain the docs in 2 folders (",(0,o.kt)("inlineCode",{parentName:"p"},"./docs")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"./versioned_docs/version-1.0.0"),'), you may consider "pretending" that the current version is a cut version by giving it a path and a label:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    '@docusaurus/preset-classic',\n    docs: {\n      // highlight-start\n      lastVersion: 'current',\n      versions: {\n        current: {\n          label: '1.0.0',\n          path: '1.0.0',\n        },\n      },\n      // highlight-end\n    },\n  ],\n};\n")),(0,o.kt)("p",null,"The docs in ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs")," will be served at ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/1.0.0")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/next"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0")," will become the default version we link to in the navbar dropdown, and you will only need to maintain a single ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs")," folder."),(0,o.kt)("p",null,"We offer these plugin options to customize versioning behavior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disableVersioning"),": Explicitly disable versioning even with versions. This will make the site only include the current version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"includeCurrentVersion"),": Include the current version (the ",(0,o.kt)("inlineCode",{parentName:"li"},"./docs")," folder) of your docs.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tip"),": turn it off if the current version is a work-in-progress, not ready to be published."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastVersion"),': Sets which version "latest version" (the ',(0,o.kt)("inlineCode",{parentName:"li"},"/docs")," route) refers to.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tip"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"lastVersion: 'current'")," makes sense if your current version refers to a major version that's constantly patched and released. The actual route base path and label of the latest version are configurable."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onlyIncludeVersions"),": Defines a subset of versions from ",(0,o.kt)("inlineCode",{parentName:"li"},"versions.json")," to be deployed.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tip"),": limit to 2 or 3 versions in dev and deploy previews to improve startup and build time."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"versions"),": A dictionary of version metadata. For each version, you can customize the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"label"),": the label displayed in the versions dropdown and banner."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": the route base path of this version. By default, latest version has ",(0,o.kt)("inlineCode",{parentName:"li"},"/")," and current version has ",(0,o.kt)("inlineCode",{parentName:"li"},"/next"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"banner"),": one of ",(0,o.kt)("inlineCode",{parentName:"li"},"'none'"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"'unreleased'"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"'unmaintained'"),'. Determines what\'s displayed at the top of every doc page. Any version above the latest version would be "unreleased", and any version below would be "unmaintained".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"badge"),": show a badge with the version name at the top of a doc of that version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"className"),": add a custom ",(0,o.kt)("inlineCode",{parentName:"li"},"className")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"<html>")," element of doc pages of that version.")))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/api/plugins/@docusaurus/plugin-content-docs#configuration"},"docs plugin configuration")," for more details."),(0,o.kt)("h2",{id:"navbar-items"},"Navbar items"),(0,o.kt)("p",null,"We offer several navbar items to help you quickly set up navigation without worrying about versioned routes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/api/themes/configuration#navbar-doc-link"},(0,o.kt)("inlineCode",{parentName:"a"},"doc")),": a link to a doc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/api/themes/configuration#navbar-doc-sidebar"},(0,o.kt)("inlineCode",{parentName:"a"},"docSidebar")),": a link to the first item in a sidebar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/api/themes/configuration#navbar-docs-version"},(0,o.kt)("inlineCode",{parentName:"a"},"docsVersion")),": a link to the main doc of the currently viewed version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docusaurus-theme-vanilla/docs/api/themes/configuration#navbar-docs-version-dropdown"},(0,o.kt)("inlineCode",{parentName:"a"},"docsVersionDropdown")),": a dropdown containing all the versions available.")),(0,o.kt)("p",null,"These links would all look for an appropriate version to link to, in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Active version"),": the version that the user is currently browsing, if she is on a page provided by this doc plugin. If she's not on a doc page, fall back to..."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Preferred version"),": the version that the user last viewed. If there's no history, fall back to..."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Latest version"),": the default version that we navigate to, configured by the ",(0,o.kt)("inlineCode",{parentName:"li"},"lastVersion")," option.")),(0,o.kt)("h2",{id:"recommended-practices"},"Recommended practices"),(0,o.kt)("h3",{id:"version-your-documentation-only-when-needed"},"Version your documentation only when needed"),(0,o.kt)("p",null,"For example, you are building documentation for your npm package ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and you are currently in version 1.0.0. You then release a patch version for a minor bug fix and it's now 1.0.1."),(0,o.kt)("p",null,"Should you cut a new documentation version 1.0.1? ",(0,o.kt)("strong",{parentName:"p"},"You probably shouldn't"),". 1.0.1 and 1.0.0 docs shouldn't differ according to semver because there are no new features!. Cutting a new version for it will only just create unnecessary duplicated files."),(0,o.kt)("h3",{id:"keep-the-number-of-versions-small"},"Keep the number of versions small"),(0,o.kt)("p",null,"As a good rule of thumb, try to keep the number of your versions below 10. You will ",(0,o.kt)("strong",{parentName:"p"},"very likely")," to have a lot of obsolete versioned documentation that nobody even reads anymore. For example, ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/versions"},"Jest")," is currently in version ",(0,o.kt)("inlineCode",{parentName:"p"},"27.4"),", and only maintains several latest documentation versions with the lowest being ",(0,o.kt)("inlineCode",{parentName:"p"},"25.X"),". Keep it small \ud83d\ude0a"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"archive older versions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you deploy your site on a Jamstack provider (e.g. ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-theme-vanilla/docs/deployment"},"Netlify"),"), the provider will save each production build as a snapshot under an immutable URL. You can include archived versions that will never be rebuilt as external links to these immutable URLs. The Jest website and the Docusaurus website both use such pattern to keep the number of actively built versions low."))),(0,o.kt)("h3",{id:"use-absolute-import-within-the-docs"},"Use absolute import within the docs"),(0,o.kt)("p",null,"Don't use relative paths import within the docs. Because when we cut a version the paths no longer work (the nesting level is different, among other reasons). You can utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"@site")," alias provided by Docusaurus that points to the ",(0,o.kt)("inlineCode",{parentName:"p"},"website")," directory. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- import Foo from '../src/components/Foo';\n+ import Foo from '@site/src/components/Foo';\n")),(0,o.kt)("h3",{id:"link-docs-by-file-paths"},"Link docs by file paths"),(0,o.kt)("p",null,"Refer to other docs by relative file paths with the ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," extension, so that Docusaurus can rewrite them to actual URL paths during building. Files will be linked to the correct corresponding version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"The [@hello](hello.md#paginate) document is great!\n\nSee the [Tutorial](../getting-started/tutorial.md) for more info.\n")),(0,o.kt)("h3",{id:"global-or-versioned-collocated-assets"},"Global or versioned collocated assets"),(0,o.kt)("p",null,"You should decide if assets like images and files are per-version or shared between versions."),(0,o.kt)("p",null,"If your assets should be versioned, put them in the docs version, and use relative paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![img alt](./myImage.png)\n\n[download this file](./file.pdf)\n")),(0,o.kt)("p",null,"If your assets are global, put them in ",(0,o.kt)("inlineCode",{parentName:"p"},"/static")," and use absolute paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![img alt](/myImage.png)\n\n[download this file](/file.pdf)\n")))}h.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?a.createElement(v,r(r({ref:n},u),{},{components:t})):a.createElement(v,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);