_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/5Ni":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),c=n("q1tI"),a=n("YFqc"),i=n.n(a),s=n("9Hn1"),o=n.n(s),l={root:null,rootMargin:"0px"};function u(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),a=Object(c.useState)(!1),s=a[0],u=a[1],f=Object(c.useState)(!1),j=f[0],d=f[1];return Object(c.useEffect)((function(){n.current=new window.IntersectionObserver((function(e){var t=e[0].isIntersecting;u(!t)}),l),n.current.observe(e.sentinelRef.current)}),[e.sentinelRef]),Object(r.jsxs)("header",{className:s?"".concat(o.a.glassyHeader," ").concat(o.a.mobileNav):"".concat(o.a.header," ").concat(o.a.mobileNav," ").concat(e.className),ref:t,children:[Object(r.jsx)("button",{className:o.a.burgerMenu,onClick:function(){return d(!j)},children:"\u2630"}),j&&Object(r.jsx)("nav",{className:o.a.navigationBarMobile,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/about",children:Object(r.jsx)("a",{children:"About"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/notes",children:Object(r.jsx)("a",{children:"Notes"})})})]})}),Object(r.jsx)("nav",{className:o.a.navigationBarLeft,children:Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("a",{className:o.a.heroLink,children:"Syeef Karim"})})}),Object(r.jsx)("nav",{className:o.a.navigationBar,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/about",children:Object(r.jsx)("a",{children:"About"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/notes",children:Object(r.jsx)("a",{children:"Notes"})})})]})})]})}},"9Hn1":function(e,t,n){e.exports={navigationBarLeft:"navbar_navigationBarLeft__e_JCk",navigationBar:"navbar_navigationBar__1NnAl",burgerMenu:"navbar_burgerMenu__1-16s",navigationBarMobile:"navbar_navigationBarMobile__3QVix",mobileNav:"navbar_mobileNav__MfTfP",header:"navbar_header__2AnZb",glassyHeader:"navbar_glassyHeader__2kUaw"}},GkbD:function(e,t,n){e.exports={pageContainer:"default_pageContainer__3ctZv",contentWrap:"default_contentWrap__2nmYR",tag:"default_tag__8q9GU"}},K75L:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),c=n("fxUc"),a=n.n(c),i=n("YFqc"),s=n.n(i);function o(){return Object(r.jsx)("footer",{className:a.a.footer,children:Object(r.jsxs)("div",{className:a.a.content,children:[Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://twitter.com/syeefk",target:"_blank",children:"Twitter"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://dribbble.com/syeef",target:"_blank",children:"Dribbble"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/syeef",target:"_blank",children:"GitHub"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://uk.linkedin.com/in/syeefkarim/",target:"_blank",children:"LinkedIn"})})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:"About"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/notes",children:Object(r.jsx)("a",{children:"Notes"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:"Contact"})})})]})})]})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),i=n("elyg"),s=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,i.resolveHref)(c,e.as):s||a}}),[c,e.href,e.as]),j=f.href,d=f.as,b=e.children,h=e.replace,O=e.shallow,x=e.scroll,v=e.locale;"string"===typeof b&&(b=a.default.createElement("a",null,b));var p=a.Children.only(b),_=p&&"object"===typeof p&&p.ref,g=(0,o.useIntersection)({rootMargin:"200px"}),m=r(g,2),y=m[0],N=m[1],k=a.default.useCallback((function(e){y(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,y]);(0,a.useEffect)((function(){var e=N&&t&&(0,i.isLocalURL)(j),r="undefined"!==typeof v?v:n&&n.locale,c=l[j+"%"+d+(r?"%"+r:"")];e&&!c&&u(n,j,d,{locale:r})}),[d,j,N,v,t,n]);var M={ref:k,onClick:function(e){p.props&&"function"===typeof p.props.onClick&&p.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:o,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,j,d,h,O,x,v)},onMouseEnter:function(e){(0,i.isLocalURL)(j)&&(p.props&&"function"===typeof p.props.onMouseEnter&&p.props.onMouseEnter(e),u(n,j,d,{priority:!0}))}};if(e.passHref||"a"===p.type&&!("href"in p.props)){var w="undefined"!==typeof v?v:n&&n.locale,L=(0,i.getDomainLocale)(d,w,n&&n.locales,n&&n.domainLocales);M.href=L||(0,i.addBasePath)((0,i.addLocale)(d,w,n&&n.defaultLocale))}return a.default.cloneElement(p,M)};t.default=f},esEh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[slug]",function(){return n("v0U0")}])},foOB:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("nKUr"),c=n("g4pe"),a=n.n(c),i=n("/5Ni"),s=n("K75L"),o=n("GkbD"),l=n.n(o),u=n("q1tI");function f(e){var t=Object(u.useRef)(null);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("meta",{name:"description",content:e.description}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css"}),Object(r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Mono&family=DM+Serif+Display&display=swap",rel:"stylesheet"})]}),Object(r.jsx)("div",{ref:t}),Object(r.jsx)(i.a,{sentinelRef:t}),Object(r.jsx)("main",{className:l.a.pageContainer,children:Object(r.jsx)("div",{className:l.a.contentWrap,children:e.children})}),Object(r.jsx)(s.a,{})]})}},fxUc:function(e,t,n){e.exports={footer:"footer_footer__2O9Y4",content:"footer_content__kZD6t",title:"footer_title__20uWy"}},g4pe:function(e,t,n){e.exports=n("8Kt/")},v0U0:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n("nKUr"),c=n("foOB"),a=n("g4pe"),i=n.n(a);n("YFqc");function s(e){return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:e.title})}),Object(r.jsxs)("article",{children:[Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("div",{children:e.publishedDate}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}})]})]})}var o=!0;function l(e){return console.log(e),Object(r.jsx)(s,{title:e.title,publishedDate:e.publishedDate,content:e.content})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],j=u[1],d=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&j(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){s||f||(0,i.default)((function(){return j(!0)}))}),[f]),[d,f]};var a=n("q1tI"),i=c(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["esEh",0,2,1]]]);