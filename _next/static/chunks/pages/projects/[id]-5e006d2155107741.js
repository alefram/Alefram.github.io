(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{7235:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[id]",function(){return n(7735)}])},6124:function(e,t,n){"use strict";var r=n(5893),o=n(1664);t.Z=function(){var e=(new Date).getFullYear();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("footer",{className:"py-12",children:[(0,r.jsxs)("div",{className:"flex justify-center space-x-4 mt-4",children:[(0,r.jsx)(o.default,{href:"https://github.com/alefram",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{alt:"githubFooter",src:"/images/github.svg",className:"w-8"})})}),(0,r.jsx)(o.default,{href:"https://twitter.com/FrauditaAlexis",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{alt:"twitterFooter",src:"/images/twitter.svg",className:"w-8"})})})]}),(0,r.jsx)("div",{className:"text-center text-lg text-background",children:(0,r.jsxs)("small",{children:["Make with \ud83d\udc99 \xa9",e," All rights reserved"]})})]})})}},5631:function(e,t,n){"use strict";var r=n(5893),o=n(1664);t.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row p-2 container mx-auto lg:max-w-screen-lg justify-between md:items-center",children:[(0,r.jsx)("div",{className:"mt-1",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:" text-background font-bold text-4xl font-square-peg",children:"AleBlog"})})}),(0,r.jsxs)("div",{className:"mt-2 md:m-2 md:p-4 space-x-4 md:text-center",children:[(0,r.jsx)(o.default,{href:"/Projects",children:(0,r.jsx)("a",{className:"text-background font-bold hover:underline hover:text-blue-500 font-nunito",children:"Projects"})}),(0,r.jsx)(o.default,{href:"/About",children:(0,r.jsx)("a",{className:"text-background font-bold hover:underline hover:text-blue-500 font-nunito",children:"About"})})]})]})})})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),c=n(387),l=n(7190);var s={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,x=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,y=r(l.useIntersection({rootMargin:"200px"}),2),b=y[0],w=y[1],N=a.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);a.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof j?j:o&&o.locale,r=s[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(o,d,h,{locale:t})}),[h,d,w,j,n,o]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c}))}(e,o,d,h,x,m,v,j)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof j?j:o&&o.locale,E=o&&o.isLocaleDomain&&i.getDomainLocale(h,k,o&&o.locales,o&&o.domainLocales);_.href=E||i.addBasePath(i.addLocale(h,k,o&&o.defaultLocale))}return a.default.cloneElement(t,_)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=o.useRef(),s=r(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},7735:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var r=n(5893),o=n(9008),a=n(5631),i=n(6124),c=!0;t.default=function(e){var t=e.projectData;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsxs)("title",{children:["Project | ",t.title]}),(0,r.jsx)("meta",{name:"author",content:"Alexis Fraudita"}),(0,r.jsx)("meta",{name:"keywords",content:"Machine Learning, Robotics, Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, Alexis Fraudita, Python, Pytorch"}),(0,r.jsx)("meta",{property:"og:title",content:t.title}),(0,r.jsx)("meta",{property:"og:description",content:t.description}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"og:url",content:"https://alefram.github.io/projects/".concat(t.title)})]}),(0,r.jsx)(a.Z,{}),(0,r.jsxs)("main",{className:"mt-10 px-4 md:px-2 ",children:[(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("h1",{className:"text-4xl text-stone-900 font-bold font-nunito",children:t.title})}),(0,r.jsx)("article",{className:"text-justify mx-auto mt-4 font-Roboto markdown prose prose-blue text-background text-base",dangerouslySetInnerHTML:{__html:t.contentHtml}})]}),(0,r.jsx)(i.Z,{})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=7235,e(e.s=t);var t}));var t=e.O();_N_E=t}]);