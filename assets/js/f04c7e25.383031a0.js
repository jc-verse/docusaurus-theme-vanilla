"use strict";(self.webpackChunkdocusaurus_theme_vanilla=self.webpackChunkdocusaurus_theme_vanilla||[]).push([[6804],{129:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var a=o(3117),n=o(102),i=(o(7294),o(3905)),r=["components"],s={title:"How I Converted Profilo to Docusaurus in Under 2 Hours",author:"Christine Abernathy",authorURL:"http://twitter.com/abernathyca",authorImageURL:"https://github.com/caabernathy.png",authorTwitter:"abernathyca",tags:["profilo","adoption"]},l=void 0,u={permalink:"/blog/2018/04/30/How-I-Converted-Profilo-To-Docusaurus",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2018-04-30-How-I-Converted-Profilo-To-Docusaurus.md",source:"@site/blog/2018-04-30-How-I-Converted-Profilo-To-Docusaurus.md",title:"How I Converted Profilo to Docusaurus in Under 2 Hours",description:"\u201cJoel and I were discussing having a website and how it would have been great to launch with it. So I challenged myself to add Docusaurus support. It took just over an hour and a half. I'm going to send you a PR with the addition so you can take a look and see if you like it. Your workflow for adding docs wouldn't be much different from editing those markdown files.\u201d",date:"2018-04-30T00:00:00.000Z",formattedDate:"April 30, 2018",tags:[{label:"profilo",permalink:"/blog/tags/profilo"},{label:"adoption",permalink:"/blog/tags/adoption"}],readingTime:5.085,truncated:!0,authors:[{name:"Christine Abernathy",url:"http://twitter.com/abernathyca",imageURL:"https://github.com/caabernathy.png"}],frontMatter:{title:"How I Converted Profilo to Docusaurus in Under 2 Hours",author:"Christine Abernathy",authorURL:"http://twitter.com/abernathyca",authorImageURL:"https://github.com/caabernathy.png",authorTwitter:"abernathyca",tags:["profilo","adoption"]},prevItem:{title:"Towards Docusaurus 2",permalink:"/blog/2018/09/11/Towards-Docusaurus-2"},nextItem:{title:"Introducing Docusaurus",permalink:"/blog/2017/12/14/introducing-docusaurus"}},p={authorsImageUrls:[void 0]},h=[{value:"Overview of Steps Taken",id:"overview-of-steps-taken",level:2},{value:"Design",id:"design",level:2},{value:"Final Thoughts",id:"final-thoughts",level:2}],d={toc:h};function c(e){var t=e.components,s=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u201cJoel and I were discussing having a website and how it would have been great to launch with it. So I challenged myself to add Docusaurus support. It took just over an hour and a half. I'm going to send you a PR with the addition so you can take a look and see if you like it. Your workflow for adding docs wouldn't be much different from editing those markdown files.\u201d")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u2014 Note sent to the Profilo team"))),(0,i.kt)("p",null,"This is the story of the rather short journey it took to create the ",(0,i.kt)("a",{parentName:"p",href:"https://facebookincubator.github.io/profilo/"},"Profilo")," website using Docusaurus."),(0,i.kt)("p",null,"Profilo, an Android library for collecting performance traces from production, ",(0,i.kt)("a",{parentName:"p",href:"https://code.fb.com/android/profilo-understanding-app-performance-in-the-wild/"},"was announced")," earlier this year. The project was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8"},"published on GitHub")," with a less than ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8/docs"},"a handful or Markdown files")," to describe its functionality and no website to showcase any branding and highlight the logo. The task at hand was to turn these existing docs and logo into a website."),(0,i.kt)("p",null,"In general, when creating a website with Docusaurus you do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate a template website using Docusaurus scripts."),(0,i.kt)("li",{parentName:"ol"},"Customize the generated template files for your desired site colors and your project configuration (ex: website and GitHub links)."),(0,i.kt)("li",{parentName:"ol"},"Create the website content:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add your docs and any supporting assets."),(0,i.kt)("li",{parentName:"ol"},"Customize the default landing page provided by Docusaurus to suit your needs."),(0,i.kt)("li",{parentName:"ol"},"Configure the default site navigation file."))),(0,i.kt)("li",{parentName:"ol"},"Publish the website and set up how it will be published for future changes.")),(0,i.kt)("p",null,"Given I had pre-existing Markdown files, I didn't have to generate the core content but simply make sure that Docusaurus could process the files by adding the expected metadata to them. Most of the work would therefore consist of customizing the defaults provided by Docusaurus."),(0,i.kt)("h2",{id:"overview-of-steps-taken"},"Overview of Steps Taken"),(0,i.kt)("p",null,"Here's an overview of the steps taken to convert to a website. I'll discuss some of the design aspects in a later section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Design and colors:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Got all the desired logo formats from designer. I had to create the ",(0,i.kt)("em",{parentName:"li"},".favicon")," one."),(0,i.kt)("li",{parentName:"ol"},"Worked out some passable primary and secondary website colors using the ",(0,i.kt)("a",{parentName:"li",href:"http://paletton.com/"},"http://paletton.com/")," tools - very handy!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Initial website setup:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Forked the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/profilo/"},"Profilo project")," on GitHub and created a local clone of the fork to set up the website."),(0,i.kt)("li",{parentName:"ol"},"Created the initial Docusaurus website using the ",(0,i.kt)("a",{parentName:"li",href:"https://v1.docusaurus.io/docs/en/installation.html"},"installation instructions"),"."),(0,i.kt)("li",{parentName:"ol"},"Deleted the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs-examples-from-docusaurus")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"website/blog-examples-from-docusaurus")," folders as these would not be needed. Profilo had existing docs we could use and there was no need for blogs at this time.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Content creation:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Added metadata to the existing Markdown files found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," folder, for example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"+---\n+id: architecture\n+title: Architecture\n+sidebar_label: Architecture\n+---\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Added the logo assets to the ",(0,i.kt)("inlineCode",{parentName:"p"},"website/static/img")," folder.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modified ",(0,i.kt)("inlineCode",{parentName:"p"},"website/pages/en/index.js"),", the landing page, to highlight Profilo features.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modified ",(0,i.kt)("inlineCode",{parentName:"p"},"website/core/Footer.js"),", the footer, to simplify it for Profilo.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edited ",(0,i.kt)("inlineCode",{parentName:"p"},"website/siteConfig.js")," (website configuration file) to specify the previously chosen primary and secondary colors.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modified ",(0,i.kt)("inlineCode",{parentName:"p"},"website/sidebars.json")," that specifies the sidebar navigation. Listed all the docs and customized it based on the metadata added to the Markdown files.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edited the website configuration file to specify the GitHub properties, logo images, header links, and the website link.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tested the website locally throughout this phase. (I ran ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"website")," folder to start the server.)"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Feedback and review changes:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sent a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/profilo/pull/6"},"pull request")," to the project."),(0,i.kt)("li",{parentName:"ol"},"Updated the colors after the designer rightly gasped at the ones I had chosen (IANAD)."),(0,i.kt)("li",{parentName:"ol"},"Updated the colors and updated the PR."),(0,i.kt)("li",{parentName:"ol"},"The PR was then accepted and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/profilo/commit/6ad033aaf5a7d54e6d842f45a5bccd051a8e45ad"},"merged"),". Yay!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Website publishing:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pushed the first website version by running the Docusaurus publish script from the command line:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"USE_SSH=true \\\n  GIT_USER=caabernathy \\\n  CURRENT_BRANCH=master \\\n  yarn run publish-gh-pages\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configured CircleCI using the ",(0,i.kt)("a",{parentName:"p",href:"https://v1.docusaurus.io/docs/en/publishing.html#automating-deployments-using-continuous-integration"},"provided Docusaurus instructions"),". There were 2 PRs for this, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/profilo/pull/8"},"the first"),"for the initial config and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/profilo/pull/12"},"the second")," to make sure CircleCI only triggered for changes in the master branch (thanks Joel Marcey!)."))),(0,i.kt)("p",null,"The final website was published on ",(0,i.kt)("a",{parentName:"p",href:"https://facebookincubator.github.io/profilo/"},"https://facebookincubator.github.io/profilo/"),". It had taken 1.5 hours to get to the initial PR stage and another half an hour or so to respond to review feedback and publish the website."),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"Here's what the initial website looked like when the first pull request was sent out:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Website Initial Design",src:o(2912).Z,width:"1090",height:"919"})),(0,i.kt)("p",null,"Most of the time in the content creation was spent picking colors that worked reasonably well with the given logo. These colors were a good jumping off point for designer feedback. I used Photoshop to sample various portions of the logo."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Picking Color Photoshop",src:o(8726).Z,width:"1090",height:"624"})),(0,i.kt)("p",null,"I then took the RGB representation of the color and set it as the baseline color on ",(0,i.kt)("a",{parentName:"p",href:"http://paletton.com/"},"Paletton"),". The website then gave me various color options to try on the website by editing the Docusaurus website configuration file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Picking Color Paletton",src:o(3507).Z,width:"1012",height:"632"})),(0,i.kt)("p",null,"The selected primary and secondary colors were a good jumping off point for designer feedback."),(0,i.kt)("p",null,"There were also modifications made to the default website generated by Docusaurus. These changes were mainly around simplifying the footer and creating a customized landing page for Profilo that listed the project's features."),(0,i.kt)("p",null,"Here's what the final website looked like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Website Final Design",src:o(6e3).Z,width:"1141",height:"865"})),(0,i.kt)("p",null,"This is an example page showing the core content, in this case the Getting Started page:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Website Docs Example",src:o(5007).Z,width:"1221",height:"733"})),(0,i.kt)("p",null,"This also shows the sidebar structure that was set up through editing ",(0,i.kt)("inlineCode",{parentName:"p"},"website/sidebars.json"),"."),(0,i.kt)("p",null,"Lastly, I didn't have to worry about handling responsive design. You get this out of the box with Docusaurus!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mobile Site",src:o(1190).Z,width:"1064",height:"940"})),(0,i.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,i.kt)("p",null,"The Profilo engineers were happy to see that they didn't have to change their workflow to update existing content. They were able to continue working with Markdown files. This will still be true in the future if new docs are added, although there may be some config changes needed if the sidebar navigation needs to be updated."),(0,i.kt)("p",null,"The infrastructure provided by Docusaurus made it easy to convert Markdown files into a working website. Even though the project had only three docs, this gave Profilo a more professional look. So, it was well worth the short time investment to get it done."))}c.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return c}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(o),c=n,f=d["".concat(l,".").concat(c)]||d[c]||h[c]||i;return o?a.createElement(f,r(r({ref:t},p),{},{components:o})):a.createElement(f,r({ref:t},p))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1190:function(e,t,o){t.Z=o.p+"assets/images/profilo_blog_post_android_ios-695990a01bf8fa0ea8b6c2d26946cd94.png"},3507:function(e,t,o){t.Z=o.p+"assets/images/profilo_blog_post_palette_website_color_picker-7fe21bbbee9aa484750e889471957135.png"},8726:function(e,t,o){t.Z=o.p+"assets/images/profilo_blog_post_photoshop_color_picker-86628cde93ca147d5ed36f0e0dfa046b.png"},6e3:function(e,t,o){t.Z=o.p+"assets/images/profilo_blog_post_website_final-41123bbb4a337d3415d6a8f826362713.png"},5007:function(e,t,o){t.Z=o.p+"assets/images/profilo_blog_post_website_final_docs-4efd3319b5bc1a33a4dde7dd785cb6a5.png"},2912:function(e,t,o){t.Z=o.p+"assets/images/profilo_blog_post_website_initial-2b55252c641e418f02b8bb6a5234b219.png"}}]);