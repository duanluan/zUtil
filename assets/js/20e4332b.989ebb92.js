"use strict";(self.webpackChunkzutil_docs=self.webpackChunkzutil_docs||[]).push([[800],{828:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=n(4848),o=n(8453);const i={},l="\u5165\u95e8",s={id:"introduction",title:"\u5165\u95e8",description:"\u5b89\u88c5",source:"@site/docs/002-introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/ZUtil/docs/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/duanluan/ZUtil/tree/main/docs/docs/002-introduction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/ZUtil/docs/intro"},next:{title:"\u53c2\u8003\u624b\u518c",permalink:"/ZUtil/docs/category/\u53c2\u8003\u624b\u518c"}},a={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"\u5b89\u88c5\u6ce8\u610f",id:"\u5b89\u88c5\u6ce8\u610f",level:2},{value:"Maven",id:"maven-1",level:3},{value:"Gradle",id:"gradle-1",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"\u5165\u95e8",children:"\u5165\u95e8"})}),"\n",(0,t.jsx)(r.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(r.h3,{id:"maven",children:"Maven"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"<dependency>\r\n  <groupId>top.csaf</groupId>\r\n  <artifactId>ZUtil</artifactId>\r\n  <version>2.0.0-alpha12</version>\r\n</dependency>\n"})}),"\n",(0,t.jsx)(r.h3,{id:"gradle",children:"Gradle"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-groovy",children:"// groovy\r\nimplementation 'top.csaf:ZUtil:2.0.0-alpha12'\r\n// kotlin\r\nimplementation(\"top.csaf:ZUtil:2.0.0-alpha12\")\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u5b89\u88c5\u6ce8\u610f",children:"\u5b89\u88c5\u6ce8\u610f"}),"\n",(0,t.jsxs)(r.p,{children:["\u5de5\u5177\u5305\u4e2d\u5df2\u4f7f\u7528",(0,t.jsx)(r.code,{children:"slf4j-api"}),"\u548c",(0,t.jsx)(r.code,{children:"slf4j-simple"}),"\uff0c\u548c",(0,t.jsx)(r.code,{children:"spring-boot-starter-web"}),"\u540c\u65f6\u4f7f\u7528\u65f6\u4f1a",(0,t.jsx)(r.strong,{children:"\u51b2\u7a81"}),"\uff0c\u9700\u8981\u624b\u52a8\u6392\u9664\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"maven-1",children:"Maven"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"\x3c!-- \u65b9\u5f0f\u4e00\uff1aZUtil \u6392\u9664 slf4j --\x3e\r\n<dependency>\r\n  <groupId>top.csaf</groupId>\r\n  <artifactId>ZUtil</artifactId>\r\n  <version>2.0.0-alpha12</version>\r\n  <exclusions>\r\n    <exclusion>\r\n      <groupId>org.slf4j</groupId>\r\n      <artifactId>slf4j-api</artifactId>\r\n    </exclusion>\r\n    <exclusion>\r\n      <groupId>org.slf4j</groupId>\r\n      <artifactId>slf4j-simple</artifactId>\r\n    </exclusion>\r\n  </exclusions>\r\n</dependency>\r\n\r\n\x3c!-- \u65b9\u5f0f\u4e8c\uff1aspring-boot-starter-web \u6392\u9664 Logback --\x3e\r\n<dependency>\r\n  <groupId>org.springframework.boot</groupId>\r\n  <artifactId>spring-boot-starter-web</artifactId>\r\n  <exclusions>\r\n    <exclusion>\r\n      <groupId>org.springframework.boot</groupId>\r\n      <artifactId>spring-boot-starter-logging</artifactId>\r\n    </exclusion>\r\n  </exclusions>\r\n</dependency>\n"})}),"\n",(0,t.jsx)(r.h3,{id:"gradle-1",children:"Gradle"}),"\n",(0,t.jsxs)(r.p,{children:["\u53c2\u8003\uff1a",(0,t.jsx)(r.a,{href:"https://docs.gradle.org/current/userguide/dependency_downgrade_and_exclude.html#sec:excluding-transitive-deps",children:"Excluding transitive dependencies - Gradle User Manual"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-groovy",children:"// groovy\r\ndependencies {\r\n  // \u65b9\u5f0f\u4e00\uff1aZUtil \u6392\u9664 slf4j\r\n  implementation('top.csaf:ZUtil:2.0.0-alpha12') {\r\n    exclude group: 'org.slf4j', module: 'slf4j-api'\r\n    exclude group: 'org.slf4j', module: 'slf4j-simple'\r\n  }\r\n  // \u65b9\u5f0f\u4e8c\uff1aspring-boot-starter-web \u6392\u9664 Logback\r\n  implementation('org.springframework.boot:spring-boot-starter-web') {\r\n    exclude group: 'org.springframework.boot', module: 'spring-boot-starter-logging'\r\n  }\r\n}\r\n\r\n// kotlin\r\ndependencies {\r\n  // \u65b9\u5f0f\u4e00\uff1aZUtil \u6392\u9664 slf4j\r\n  implementation(\"top.csaf:ZUtil:2.0.0-alpha12\") {\r\n    exclude(group = \"org.slf4j\", module = \"slf4j-api\")\r\n    exclude(group = \"org.slf4j\", module = \"slf4j-simple\")\r\n  }\r\n  // \u65b9\u5f0f\u4e8c\uff1aspring-boot-starter-web \u6392\u9664 Logback\r\n  implementation(\"org.springframework.boot:spring-boot-starter-web\") {\r\n    exclude(group = \"org.springframework.boot\", module = \"spring-boot-starter-logging\")\r\n  }\r\n}\r\n\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u8d44\u6e90",children:"\u8d44\u6e90"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://central.sonatype.com/artifact/top.csaf/zutil-all",children:"Maven \u4e2d\u592e\u5e93"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://mvnrepository.com/artifact/top.csaf/zutil-all",children:"Maven Repository"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>s});var t=n(6540);const o={},i=t.createContext(o);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);