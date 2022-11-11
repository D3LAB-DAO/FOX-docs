"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return r?i.createElement(h,n(n({ref:t},u),{},{components:r})):i.createElement(h,n({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,n[1]=o;for(var s=2;s<l;s++)n[s]=r[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=r(7462),a=(r(7294),r(3905));r(8209);const l={sidebar_position:2},n="Stablecoins",o={unversionedId:"Introduction/Stablecoins",id:"Introduction/Stablecoins",title:"Stablecoins",description:"As is well known, stablecoins are generally classified into three categories - fiat-collateralized, crypto-collateral, and algorithmic ones.",source:"@site/docs/Introduction/Stablecoins.md",sourceDirName:"Introduction",slug:"/Introduction/Stablecoins",permalink:"/Introduction/Stablecoins",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Trilemma",permalink:"/Introduction/Trilemma"},next:{title:"FOX",permalink:"/Introduction/FOX"}},c={},s=[{value:"Fiat-collateralized",id:"fiat-collateralized",level:2},{value:"Crypto-collateral",id:"crypto-collateral",level:2},{value:"Algorithmic",id:"algorithmic",level:2},{value:"Hybrid",id:"hybrid",level:2}],u={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stablecoins"},"Stablecoins"),(0,a.kt)("p",null,"As is well known, stablecoins are generally classified into three categories - fiat-collateralized, crypto-collateral, and algorithmic ones."),(0,a.kt)("p",null,"Based on these classifications and the stablecoin trilemma, let's look at the current status of stablecoins."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fiat-collateralized"},"Fiat-collateralized"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4073).Z,width:"1943",height:"1393"})),(0,a.kt)("p",null,"Fiat-collateralized stablecoin has a real dollar as collateral, so it has to be fundamentally stable. But there are many issues due to centralization. For example, there is a risk of censorship and central institutions' failure to invest."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"crypto-collateral"},"Crypto-collateral"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3880).Z,width:"1943",height:"1393"})),(0,a.kt)("p",null,"Crypto-collateralized stablecoin is not free from the issue of price fluctuations of collateral. That is why it is always designed to be over-collateralized, so be less efficient."),(0,a.kt)("p",null,"In order to alleviate the impact of price fluctuations, fiat-collateralized stablecoins are often used as collateral in crypto-collateralized stablecoin. It eventually acts as a wrapped fiat-backed stablecoin, so there is a risk of centralization that harms both decentralization and stability."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"algorithmic"},"Algorithmic"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1588).Z,width:"1943",height:"1393"})),(0,a.kt)("p",null,"Algorithmic stablecoin has the most flexible structure. Because there is no collateral, it is highly efficient and safe from centralization factors."),(0,a.kt)("p",null,"However, sufficient verification is needed to determine whether the algorithm works well. We already know about the failure of that one."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hybrid"},"Hybrid"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1444).Z,width:"1943",height:"1393"})),(0,a.kt)("p",null,"To solve this problem, hybrid stable coins combining their characteristics have emerged. For example, FRAX has increased efficiency by using an algorithmic feature in addition to collateralizing USDC."),(0,a.kt)("p",null,"If FRAX is highly trusted, the protocol increases the weight of the algorithmic part to improve capital efficiency. Conversely, when more trust is required, the protocol re-secures stability by increasing the proportion of fiat-collateralized currency."),(0,a.kt)("p",null,"This idea has worked well so far. Still, there is a limitation that cannot be free from the centralization issue because a fiat basically backs it."))}d.isMDXComponent=!0},1588:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/algorithmic-abacd491b591c0b34a07b23a07a5353c.png"},3880:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/crypto-e12aef5a7e4ffe116654ef225881679d.png"},4073:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/fiats-1ea098bb7e3305d2cfab2212d4306b35.png"},1444:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/hybrid-ea12b7ae3c3d02735980198733f37027.png"},8209:(e,t,r)=>{r(7294)}}]);