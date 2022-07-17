"use strict";(self.webpackChunkzutil_docs=self.webpackChunkzutil_docs||[]).push([[220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="\u4e0d\u517c\u5bb9\u53d8\u66f4",o={unversionedId:"incompatible-changes",id:"incompatible-changes",title:"\u4e0d\u517c\u5bb9\u53d8\u66f4",description:"* 1.8.0\uff1a",source:"@site/docs/999-incompatible-changes.md",sourceDirName:".",slug:"/incompatible-changes",permalink:"/ZUtil/docs/incompatible-changes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/999-incompatible-changes.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65f6\u95f4",permalink:"/ZUtil/docs/reference-doc/date"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e0d\u517c\u5bb9\u53d8\u66f4"},"\u4e0d\u517c\u5bb9\u53d8\u66f4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.8.0\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date.DateDuration"),"\u79fb\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"date.constant"),"\u5305\u4e0b\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date.DatePattern"),"\u79fb\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"date.constant"),"\u5305\u4e0b\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date.DatePatternRegex"),"\u79fb\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"date.constant.DateRegexPattern")," \uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"constant.CommonPatternConstant"),"\u91cd\u547d\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"PatternConstant"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RegExUtils"),"\u79fb\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"regex"),"\u5305\u4e0b\u3002"))),(0,a.kt)("li",{parentName:"ul"},"1.7.0\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"JsonUtils"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"toJson(Object, SerializerFeature...)"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"parseObject(String, Class<T>, Feature...)"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"parseObject(String, Class<T>, ParserConfig)"),"\u65b9\u6cd5\uff0cSerializerFeature... \u66ff\u6362\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"JSONWriter.Feature..."),"\uff0cFeature... \u548c ParserConfig \u66ff\u6362\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"JSONReader.Feature..."),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"1.5.1\uff1a\u5220\u9664",(0,a.kt)("inlineCode",{parentName:"li"},"ArrayUtils#indexOf(String[], String, int)"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"1.2.4\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"DateUtils"),"\u53d8\u66f4\u4e3a ",(0,a.kt)("b",null,"date."),"DateUtils\u3002"),(0,a.kt)("li",{parentName:"ul"},"1.2.0\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"CollectionUtils"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"moveForward\u3001remove"),"\u65b9\u6cd5\uff0c\u79fb\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"ArrayUtils"),"\u4e2d\u5e76\u91cd\u6784\u4f18\u5316\u3002")))}u.isMDXComponent=!0}}]);