(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(c.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,c=e.hasQuery,o=void 0!==c&&c;return n||a&&o}},"/5Ni":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),a=n("q1tI"),c=n("YFqc"),o=n.n(c),i=n("9Hn1"),s=n.n(i),u={root:null,rootMargin:"0px"};function l(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useState)(!1),i=c[0],l=c[1];return Object(a.useEffect)((function(){n.current=new window.IntersectionObserver((function(e){var t=e[0].isIntersecting;l(!t)}),u),n.current.observe(e.sentinelRef.current)}),[e.sentinelRef]),Object(r.jsxs)("header",{className:i?s.a.glassyHeader:s.a.header,ref:t,children:[Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("span",{children:"Syeef Karim"})})}),Object(r.jsx)("nav",{className:s.a.navigationBar,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{children:"About"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{children:"Articles"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{children:"Contact"})})})]})})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var c=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?c=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?c=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?c=!1:n.add(l);else{var f=a.props[l],h=r[l]||new Set;"name"===l&&o||!h.has(f)?(h.add(f),r[l]=h):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}p.rewind=function(){};var b=p;t.default=b},"9Hn1":function(e,t,n){e.exports={header:"navbar_header__2AnZb",glassyHeader:"navbar_glassyHeader__2kUaw",navigationBar:"navbar_navigationBar__1NnAl"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},K75L:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),a=n("fxUc"),c=n.n(a);function o(){return Object(r.jsxs)("footer",{className:c.a.footer,children:[Object(r.jsxs)("div",{className:c.a.content,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:c.a.title,children:"Socials"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Twitter:"," ",Object(r.jsx)("a",{href:"https://twitter.com/syeefk",target:"_blank",children:"@syeefk"})]}),Object(r.jsxs)("li",{children:["Dribbble:"," ",Object(r.jsx)("a",{href:"https://dribbble.com/syeef",target:"_blank",children:"syeef"})]}),Object(r.jsxs)("li",{children:["GitHub:"," ",Object(r.jsx)("a",{href:"https://github.com/syeef",target:"_blank",children:"syeef"})]}),Object(r.jsxs)("li",{children:["LinkedIn:"," ",Object(r.jsx)("a",{href:"https://uk.linkedin.com/in/syeefkarim/",target:"_blank",children:"Syeef Karim"})]})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:c.a.title,children:"Recent Posts"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Home"}),Object(r.jsx)("li",{children:"About"}),Object(r.jsx)("li",{children:"Articles"}),Object(r.jsx)("li",{children:"Contact"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:c.a.title,children:"Navigation"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Home"}),Object(r.jsx)("li",{children:"About"}),Object(r.jsx)("li",{children:"Articles"}),Object(r.jsx)("li",{children:"Contact"})]})]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"\ud83d\udca8 & \u2615\ufe0f"})})]})}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||o()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),c=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){o(n,e);var t=u(n);function n(e){var c;return a(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),o=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,b=e.replace,j=e.shallow,v=e.scroll,y=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var m=c.Children.only(p),x=m&&"object"===typeof m&&m.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),g=r(O,2),_=g[0],M=g[1],w=c.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);(0,c.useEffect)((function(){var e=M&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,a=u[d+"%"+h+(r?"%"+r:"")];e&&!a&&l(n,d,h,{locale:r})}),[h,d,M,y,t,n]);var k={ref:w,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,h,b,j,v,y)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,d,h,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var I="undefined"!==typeof y?y:n&&n.locale,A=(0,o.getDomainLocale)(h,I,n&&n.locales,n&&n.domainLocales);k.href=A||(0,o.addBasePath)((0,o.addLocale)(h,I,n&&n.defaultLocale))}return c.default.cloneElement(m,k)};t.default=f},fxUc:function(e,t,n){e.exports={footer:"footer_footer__2O9Y4",content:"footer_content__kZD6t",title:"footer_title__20uWy"}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],d=l[1],h=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){i||f||(0,o.default)((function(){return d(!0)}))}),[f]),[h,f]};var c=n("q1tI"),o=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map}}]);