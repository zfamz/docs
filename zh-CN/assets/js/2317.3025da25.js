"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2317],{6747:(e,t,n)=>{n.d(t,{a:()=>d});var a=n(7294);function r(){return a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var l=n(830),o=["translations"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(s){c=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m="Ctrl";var d=a.forwardRef((function(e,t){var n=e.translations,i=void 0===n?{}:n,d=u(e,o),h=i.buttonText,f=void 0===h?"Search":h,v=i.buttonAriaLabel,g=void 0===v?"Search":v,b=s((0,a.useState)(null),2),E=b[0],p=b[1];return(0,a.useEffect)((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?p("\u2318"):p(m))}),[]),a.createElement("button",c({type:"button",className:"DocSearch DocSearch-Button","aria-label":g},d,{ref:t}),a.createElement("span",{className:"DocSearch-Button-Container"},a.createElement(l.W,null),a.createElement("span",{className:"DocSearch-Button-Placeholder"},f)),a.createElement("span",{className:"DocSearch-Button-Keys"},null!==E&&a.createElement(a.Fragment,null,a.createElement("kbd",{className:"DocSearch-Button-Key"},E===m?a.createElement(r,null):E),a.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))}))},830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(7294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},7052:(e,t,n)=>{n.d(t,{D:()=>r});var a=n(7294);function r(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,l=e.onInput,o=e.searchButtonRef;a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,l,o])}},8617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3264:(e,t,n)=>{n(7294)},4478:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7462),r=n(7294);const l=e=>{let{width:t=30,height:n=30,className:l,...o}=e;return r.createElement("svg",(0,a.Z)({className:l,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},o),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},4986:(e,t,n)=>{n.d(t,{Z:()=>ue});var a=n(7294),r=n(6010),l=n(5977),o=n(4973),c=n(9306);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"POP"!==t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_axC9",d="announcementBarClose_A3A1",h="announcementBarContent_6uhP",f="announcementBarCloseable_y4cp";const v=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:u}=n;return!l||u&&e?null:a.createElement("div",{className:m,style:{backgroundColor:s,color:i},role:"banner"},a.createElement("div",{className:(0,r.Z)(h,{[f]:u}),dangerouslySetInnerHTML:{__html:l}}),u?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(7462),b=n(6979),E=n(2263);const p={toggle:"toggle_iYfV"},k=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:n},t)},y=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:n},t)},Z=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[u,m]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=d.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>m(!0),onBlur:()=>m(!1)}))}));function w(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),{isClient:o}=(0,E.Z)();return a.createElement(Z,(0,g.Z)({disabled:!o,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(y,{icon:r,style:l})}},e))}var C=n(5350),N=n(7898);const _=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),u=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,N.Z)(((t,n)=>{let{scrollY:a}=t,{scrollY:l}=n;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}};var S=n(1839),L=n(3783),D=n(5525),I=n(532);function T(e){let{mobile:t}=e;return t?null:a.createElement(b.Z,null)}const M={default:()=>D.Z,localeDropdown:()=>I.Z,search:()=>T,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};function A(e){let{type:t,...n}=e;const r=function(e){void 0===e&&(e="default");const t=M[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return a.createElement(r,n)}var x=n(5537),O=n(4478);const B="displayOnlyInLargeViewport_cxYs",P="navbarHideable_RReh",R="navbarHidden_FBwS",U="right";const V=function(){const{navbar:{items:e,hideOnScroll:t,style:n},colorMode:{disableSwitch:l}}=(0,c.LU)(),[o,s]=(0,a.useState)(!1),{isDarkTheme:i,setLightTheme:u,setDarkTheme:m}=(0,C.Z)(),{navbarRef:d,isNavbarVisible:h}=_(t);(0,S.Z)(o);const f=(0,a.useCallback)((()=>{s(!0)}),[s]),v=(0,a.useCallback)((()=>{s(!1)}),[s]),E=(0,a.useCallback)((e=>e.target.checked?m():u()),[u,m]),p=(0,L.Z)();(0,a.useEffect)((()=>{p===L.D.desktop&&s(!1)}),[p]);const k=e.some((e=>"search"===e.type)),{leftItems:y,rightItems:Z}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!=(t=e.position)?t:U)})),rightItems:e.filter((e=>{var t;return"right"===(null!=(t=e.position)?t:U)}))}}(e);return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===n,"navbar--primary":"primary"===n,"navbar-sidebar--show":o,[P]:t,[R]:t&&!h})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f,onKeyDown:f},a.createElement(O.Z,null)),a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),y.map(((e,t)=>a.createElement(A,(0,g.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},Z.map(((e,t)=>a.createElement(A,(0,g.Z)({},e,{key:t})))),!l&&a.createElement(w,{className:B,checked:i,onChange:E}),!k&&a.createElement(b.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:v}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:v}),!l&&o&&a.createElement(w,{checked:i,onChange:E})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>a.createElement(A,(0,g.Z)({mobile:!0},e,{onClick:v,key:t})))))))))};var W=n(546),H=n(412);const j=(0,c.WA)("theme"),K="light",q="dark",z=e=>e===q?q:K,F=e=>{(0,c.WA)("theme").set(z(e))},G=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>H.Z.canUseDOM?z(document.documentElement.getAttribute("data-theme")):z(e))(e)),o=(0,a.useCallback)((()=>{l(K),F(K)}),[]),s=(0,a.useCallback)((()=>{l(q),F(q)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",z(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=j.get();null!==e&&l(z(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?q:K)}))}),[]),{isDarkTheme:r===q,setLightTheme:o,setDarkTheme:s}};var Y=n(2924);const X=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=G();return a.createElement(Y.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},J="docusaurus.tab.",Q=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(J)){const n=t.substring(J.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},$=(0,a.createContext)(void 0);const ee=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=Q();return a.createElement($.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function te(e){let{children:t}=e;return a.createElement(X,null,a.createElement(c.pl,null,a.createElement(ee,null,a.createElement(c.L5,null,t))))}var ne=n(9105),ae=n(4996);function re(e){let{locale:t,version:n,tag:r}=e;const l=t;return a.createElement(ne.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var le=n(1217);function oe(){const{i18n:{defaultLocale:e,locales:t}}=(0,E.Z)(),n=(0,c.l5)();return a.createElement(ne.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function ce(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,E.Z)(),r=function(){const{siteConfig:{url:e}}=(0,E.Z)(),{pathname:t}=(0,l.TH)();return e+(0,ae.Z)(t)}(),o=t?""+n+t:r;return a.createElement(ne.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function se(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n,image:r}},i18n:{currentLocale:l,localeConfigs:o}}=(0,E.Z)(),{title:s,description:i,image:u,keywords:m,searchMetadatas:d}=e,h=(0,ae.Z)(t),f=(0,c.pe)(s),v=l,b=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(ne.Z,null,a.createElement("html",{lang:v,dir:b}),t&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),u||r&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(le.Z,{description:i,keywords:m,image:u}),a.createElement(ce,null),a.createElement(oe,null),a.createElement(re,(0,g.Z)({tag:c.HX,locale:l},d)),a.createElement(ne.Z,null,n.map(((e,t)=>a.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))))))}const ie=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ue=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return ie(),a.createElement(te,null,a.createElement(se,e),a.createElement(u,null),a.createElement(v,null),a.createElement(V,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(W.Z,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6742),o=n(8465),c=n(4996),s=n(2263);const i=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:n,logo:i={src:""}}}},isClient:u}=(0,s.Z)(),{imageClassName:m,titleClassName:d,...h}=e,f=(0,c.Z)(i.href||"/"),v={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,i.target&&{target:i.target}),i.src&&r.createElement(o.Z,{key:u,className:m,sources:v,alt:i.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),l=n(6010),o=n(6742),c=n(4996),s=n(5977),i=n(9306),u=n(8617),m=n(3919);const d="dropdown__link--active";function h(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:s,label:i,activeClassName:h="navbar__link--active",prependBaseUrlToHref:f,...v}=e;const g=(0,c.Z)(l),b=(0,c.Z)(t),E=(0,c.Z)(s,{forcePrependBaseUrl:!0}),p=i&&s&&!(0,m.Z)(s),k=h===d;return r.createElement(o.Z,(0,a.Z)({},s?{href:f?E:s}:{isNavLink:!0,activeClassName:h,to:g,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}:null},v),p?r.createElement("span",null,i,r.createElement(u.Z,k&&{width:12,height:12})):i)}function f(e){var t;let{items:n,position:o,className:c,...s}=e;const i=(0,r.useRef)(null),u=(0,r.useRef)(null),[m,f]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]);const v=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?r.createElement("div",{ref:i,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===o,"dropdown--right":"right"===o,"dropdown--show":m})},r.createElement(h,(0,a.Z)({className:v(c)},s,{onClick:s.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!m))}}),null!=(t=s.children)?t:s.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},n.map(((e,t)=>{let{className:l,...o}=e;return r.createElement("li",{key:t},r.createElement(h,(0,a.Z)({onKeyDown:e=>{if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),f(!1);const t=i.current.nextElementSibling;t&&t.focus()}},activeClassName:d,className:v(l,!0)},o)))})))):r.createElement(h,(0,a.Z)({className:v(c)},s))}function v(e){var t,n,o;let{items:c,className:u,position:m,...d}=e;const f=(0,r.useRef)(null),{pathname:v}=(0,s.TH)(),[g,b]=(0,r.useState)((()=>{var e;return null==(e=!(null!=c&&c.some((e=>(0,i.Mg)(e.to,v)))))||e})),E=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!c)return r.createElement("li",{className:"menu__list-item"},r.createElement(h,(0,a.Z)({className:E(u)},d)));const p=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement(h,(0,a.Z)({role:"button",className:E(u,!0)},d,{onClick:e=>{e.preventDefault(),b((e=>!e))}}),null!=(o=d.children)?o:d.label),r.createElement("ul",{className:"menu__list",ref:f,style:{height:g?void 0:p}},c.map(((e,t)=>{let{className:n,...l}=e;return r.createElement("li",{className:"menu__list-item",key:t},r.createElement(h,(0,a.Z)({activeClassName:"menu__link--active",className:E(n)},l,{onClick:d.onClick})))}))))}const g=function(e){let{mobile:t=!1,...n}=e;const a=t?v:f;return r.createElement(a,n)}},6400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(9306),i=n(8780);function u(e){let{docId:t,activeSidebarClassName:n,label:u,docsPluginId:m,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.Iw)(m),{preferredVersion:v}=(0,s.J)(m),g=(0,o.yW)(m),b=function(e,t){const n=[].concat(...e.map((e=>e.docs))),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((e=>e.name)).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return a}((0,i.uniq)([h,v,g].filter(Boolean)),t);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[n]:f&&f.sidebar===b.sidebar}),label:null!=u?u:b.id,to:b.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(9306);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){var t,n;let{mobile:i,docsPluginId:u,dropdownActiveClassDisabled:m,dropdownItemsBefore:d,dropdownItemsAfter:h,...f}=e;const v=(0,o.Iw)(u),g=(0,o.gB)(u),b=(0,o.yW)(u),{preferredVersion:E,savePreferredVersionName:p}=(0,c.J)(u);const k=function(){const e=g.map((e=>{const t=(null==v?void 0:v.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==v?void 0:v.activeVersion),onClick:()=>{p(e.name)}}})),t=[...d,...e,...h];if(!(t.length<=1))return t}(),y=null!=(t=null!=(n=v.activeVersion)?n:E)?t:b,Z=i&&k?"Versions":y.label,w=i&&k?void 0:s(y).path;return r.createElement(l.Z,(0,a.Z)({},f,{mobile:i,label:Z,to:w,items:k,isActive:m?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(9306);function s(e){var t;let{label:n,to:s,docsPluginId:i,...u}=e;const m=(0,o.zu)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.yW)(i),f=null!=(t=null!=m?m:d)?t:h,v=null!=n?n:f.label,g=null!=s?s:(e=>e.docs.find((t=>t.id===e.mainDocId)))(f).path;return r.createElement(l.Z,(0,a.Z)({},u,{label:v,to:g}))}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2263),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const{isClient:t}=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:m,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],u)},d)))))}},1839:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},7898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(412);const l=()=>({scrollX:r.Z.canUseDOM?window.pageXOffset:0,scrollY:r.Z.canUseDOM?window.pageYOffset:0}),o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:(e,t,n)=>{n.d(t,{D:()=>l,Z:()=>o});var a=n(7294),r=n(412);const l={desktop:"desktop",mobile:"mobile"};const o=function(){const e=r.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}const[n,o]=(0,a.useState)(t);return(0,a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){o(t())}}),[]),n}},5613:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(907),r=n(9306),l=n(2263);function o(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,l.Z)(),t=(0,a._r)(),n=(0,a.WS)(),o=(0,r.Oh)(),c=[r.HX,...Object.keys(t).map((function(e){var a,l;const c=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,s=o[e],i=t[e].versions.find((e=>e.isLast)),u=null!=(l=null!=c?c:s)?l:i;return(0,r.os)(e,u.name)}))];return{locale:e.currentLocale,tags:c}}();return["language:"+e,t.map((e=>"docusaurus_tag:"+e))]}},6397:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5977),r=n(412),l=n(2263);const o=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,l.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}}}}]);