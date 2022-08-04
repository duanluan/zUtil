"use strict";(self.webpackChunkzutil_docs=self.webpackChunkzutil_docs||[]).push([[728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},i="DateUtils \u65f6\u95f4\u5de5\u5177\u7c7b",l={unversionedId:"reference-doc/date/dateUtils",id:"reference-doc/date/dateUtils",title:"DateUtils \u65f6\u95f4\u5de5\u5177\u7c7b",description:"\u7ee7\u627forg.apache.commons.lang3.time.DateUtils\u3002",source:"@site/docs/003-reference-doc/001-date/002-dateUtils.md",sourceDirName:"003-reference-doc/001-date",slug:"/reference-doc/date/dateUtils",permalink:"/ZUtil/docs/reference-doc/date/dateUtils",draft:!1,editUrl:"https://github.com/duanluan/ZUtil/tree/main/docs/docs/003-reference-doc/001-date/002-dateUtils.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"constant \u5e38\u91cf",permalink:"/ZUtil/docs/reference-doc/date/constant"},next:{title:"DateFeature \u65f6\u95f4\u7279\u6027",permalink:"/ZUtil/docs/reference-doc/date/dateFeature"}},c={},d=[{value:"getFormatterBuilder",id:"getformatterbuilder",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dateutils-\u65f6\u95f4\u5de5\u5177\u7c7b"},"DateUtils \u65f6\u95f4\u5de5\u5177\u7c7b"),(0,a.kt)("p",null,"\u7ee7\u627f",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.commons.lang3.time.DateUtils"),"\u3002"),(0,a.kt)("p",null,"\u5927\u91cf\u4f7f\u7528 Java 8 \u65f6\u95f4\u7c7b\u578b\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"LocalDate"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"LocalTime"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),"\u7b49\u3002"),(0,a.kt)("h2",{id:"getformatterbuilder"},"getFormatterBuilder"),(0,a.kt)("p",null,"\u83b7\u53d6\u65f6\u95f4\u683c\u5f0f\u5316\u6784\u9020\u5668\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTimeFormatterBuilder"),"\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6307\u5b9a\u683c\u5f0f\u548c\u65f6\u95f4\u7ea7\u522b\u7684\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u4e0d\u5305\u542b\u5e74\u65f6\u83b7\u53d6\u5e74\u4f1a\u62a5\u9519\uff1aUnsupported field: Year\uff0c\u4f46\u662f\u8d4b\u503c\u4e86\u9ed8\u8ba4\u65f6\u95f4\u7ea7\u522b\u540e\u5c31\u4e0d\u4f1a\nMap<TemporalField, Long> fieldValueMap = new HashMap<>();\nfieldValueMap.put(ChronoField.YEAR, 0L);\nDateTimeFormatterBuilder formatterBuilder = DateUtils.getFormatterBuilder("MM-dd", fieldValueMap);\n')))}u.isMDXComponent=!0}}]);