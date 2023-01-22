"use strict";(self.webpackChunkzutil_docs=self.webpackChunkzutil_docs||[]).push([[405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i="\u5165\u95e8",l={unversionedId:"introduction",id:"introduction",title:"\u5165\u95e8",description:"\u5b89\u88c5",source:"@site/docs/002-introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/ZUtil/docs/introduction",draft:!1,editUrl:"https://github.com/duanluan/ZUtil/tree/main/docs/docs/002-introduction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/ZUtil/docs/intro"},next:{title:"\u53c2\u8003\u624b\u518c",permalink:"/ZUtil/docs/category/\u53c2\u8003\u624b\u518c"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"\u5b89\u88c5\u6ce8\u610f",id:"\u5b89\u88c5\u6ce8\u610f",level:2},{value:"Maven",id:"maven-1",level:3},{value:"Gradle",id:"gradle-1",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5165\u95e8"},"\u5165\u95e8"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("h3",{id:"maven"},"Maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>top.zhogjianhao</groupId>\n  <artifactId>ZUtil</artifactId>\n  <version>1.10.1</version>\n</dependency>\n")),(0,o.kt)("h3",{id:"gradle"},"Gradle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"// groovy\nimplementation 'top.zhogjianhao:ZUtil:1.10.1'\n// kotlin\nimplementation(\"top.zhogjianhao:ZUtil:1.10.1\")\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u6ce8\u610f"},"\u5b89\u88c5\u6ce8\u610f"),(0,o.kt)("p",null,"\u5de5\u5177\u5305\u4e2d\u5df2\u4f7f\u7528 slf4j-api \u548c slf4j-simple\uff0c\u548c spring-boot-starter-web \u540c\u65f6\u4f7f\u7528\u65f6\u4f1a\u51b2\u7a81\uff0c\u9700\u8981\u624b\u52a8\u6392\u9664\u3002"),(0,o.kt)("h3",{id:"maven-1"},"Maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u65b9\u5f0f\u4e00\uff1aZUtil \u6392\u9664 slf4j --\x3e\n<dependency>\n  <groupId>top.zhogjianhao</groupId>\n  <artifactId>ZUtil</artifactId>\n  <version>1.10.1</version>\n  <exclusions>\n    <exclusion>\n      <groupId>org.slf4j</groupId>\n      <artifactId>slf4j-api</artifactId>\n    </exclusion>\n    <exclusion>\n      <groupId>org.slf4j</groupId>\n      <artifactId>slf4j-simple</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n\n\x3c!-- \u65b9\u5f0f\u4e8c\uff1aspring-boot-starter-web \u6392\u9664 Logback --\x3e\n<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n  <exclusions>\n    <exclusion>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-logging</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n")),(0,o.kt)("h3",{id:"gradle-1"},"Gradle"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/dependency_downgrade_and_exclude.html#sec:excluding-transitive-deps"},"Excluding transitive dependencies - Gradle User Manual")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"// groovy\ndependencies {\n  // \u65b9\u5f0f\u4e00\uff1aZUtil \u6392\u9664 slf4j\n  implementation('top.zhogjianhao:ZUtil:1.10.1') {\n    exclude group: 'org.slf4j', module: 'slf4j-api'\n    exclude group: 'org.slf4j', module: 'slf4j-simple'\n  }\n  // \u65b9\u5f0f\u4e8c\uff1aspring-boot-starter-web \u6392\u9664 Logback\n  implementation('org.springframework.boot:spring-boot-starter-web') {\n    exclude group: 'org.springframework.boot', module: 'spring-boot-starter-logging'\n  }\n}\n\n// kotlin\ndependencies {\n  // \u65b9\u5f0f\u4e00\uff1aZUtil \u6392\u9664 slf4j\n  implementation(\"top.zhogjianhao:ZUtil:1.10.1\") {\n    exclude(group = \"org.slf4j\", module = \"slf4j-api\")\n    exclude(group = \"org.slf4j\", module = \"slf4j-simple\")\n  }\n  // \u65b9\u5f0f\u4e8c\uff1aspring-boot-starter-web \u6392\u9664 Logback\n  implementation(\"org.springframework.boot:spring-boot-starter-web\") {\n    exclude(group = \"org.springframework.boot\", module = \"spring-boot-starter-logging\")\n  }\n}\n\n")),(0,o.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/top.zhogjianhao/ZUtil"},"Maven \u4e2d\u592e\u5e93")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/top.zhogjianhao/ZUtil"},"Maven Repository"))))}d.isMDXComponent=!0}}]);