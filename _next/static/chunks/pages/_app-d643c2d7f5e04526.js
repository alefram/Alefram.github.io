(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(t,n,r){"use strict";r.d(n,{F:function(){return y},f:function(){return $}});var a=r(7294);let o=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,c=(0,a.createContext)(void 0),i={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,a.useContext)(c))&&void 0!==t?t:i},$=t=>(0,a.useContext)(c)?a.createElement(a.Fragment,null,t.children):a.createElement(f,t),u=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:d=u,defaultTheme:h=r?"system":"light",attribute:g="data-theme",value:v,children:_,nonce:w})=>{let[C,E]=(0,a.useState)(()=>S(i,h)),[k,T]=(0,a.useState)(()=>S(i)),x=v?Object.values(v):d,N=(0,a.useCallback)(t=>{let a=t;if(!a)return;"system"===t&&r&&(a=p());let l=v?v[a]:a,c=n?b():null,i=document.documentElement;if("class"===g?(i.classList.remove(...x),l&&i.classList.add(l)):l?i.setAttribute(g,l):i.removeAttribute(g),s){let t=o.includes(h)?h:null,n=o.includes(a)?a:t;i.style.colorScheme=n}null==c||c()},[]),L=(0,a.useCallback)(t=>{E(t);try{localStorage.setItem(i,t)}catch(t){}},[t]),O=(0,a.useCallback)(n=>{let a=p(n);T(a),"system"===C&&r&&!t&&N("system")},[C,t]);(0,a.useEffect)(()=>{let t=window.matchMedia(l);return t.addListener(O),O(t),()=>t.removeListener(O)},[O]),(0,a.useEffect)(()=>{let e=t=>{t.key===i&&L(t.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),(0,a.useEffect)(()=>{N(null!=t?t:C)},[t,C]);let M=(0,a.useMemo)(()=>({theme:C,setTheme:L,forcedTheme:t,resolvedTheme:"system"===C?k:C,themes:r?[...d,"system"]:d,systemTheme:r?k:void 0}),[C,L,t,k,r,d]);return a.createElement(c.Provider,{value:M},a.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:i,themes:d,defaultTheme:h,attribute:g,value:v,children:_,attrs:x,nonce:w}),_)},m=(0,a.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:s,enableColorScheme:c,defaultTheme:i,value:u,attrs:m,nonce:d})=>{let h="system"===i,g="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${m.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,v=c?o.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,n=!1,a=!0)=>{let l=u?u[t]:t,s=n?t+"|| ''":`'${l}'`,i="";return c&&a&&!n&&o.includes(t)&&(i+=`d.style.colorScheme = '${t}';`),"class"===r?i+=n||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},_=t?`!function(){${g}${$(t)}}()`:s?`!function(){try{${g}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}${h?"":"else{"+$(i,!1,!1)+"}"}${v}}catch(e){}}()`:`!function(){try{${g}var e=localStorage.getItem('${n}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}else{${$(i,!1,!1)};}${v}}catch(t){}}();`;return a.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:_}})},()=>!0),S=(t,n)=>{let r;if(!s){try{r=localStorage.getItem(t)||void 0}catch(t){}return r||n}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(l)),t.matches?"dark":"light")},1118:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9597)}])},9597:function(t,n,r){"use strict";r.r(n);var a=r(5893);r(415),r(6252);var o=r(7294),l=r(1163),s=r(2010);n.default=function(t){let{Component:n,pageProps:r}=t,c=(0,l.useRouter)();return(0,o.useEffect)(()=>{let handleRouteChange=t=>{window.gtag("config","G-PHJRD3DMEN",{page_path:t})};return c.events.on("routeChangeComplete",handleRouteChange),()=>{c.events.off("routeChangeComplete",handleRouteChange)}},[c.events]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.f,{attribute:"class",children:(0,a.jsx)(n,{...r})})})}},6252:function(){},415:function(){},1163:function(t,n,r){t.exports=r(9974)}},function(t){var __webpack_exec__=function(n){return t(t.s=n)};t.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=t.O()}]);