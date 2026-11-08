var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function qt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Jt=/[\n"\\]/g;function Yt(e){return e.replace(Jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Xt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Qt(e,o,Ht(n)):Qt(e,o,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Qt(e,t,n){t===`number`&&qt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function $t(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function en(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function tn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function an(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||rn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function on(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&an(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&an(e,o,t[o])}function sn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var cn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),ln=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function un(e){return ln.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function dn(){}var fn=null;function pn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mn=null,hn=null;function gn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Yt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:en(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}}}var _n=!1;function vn(e,t,n){if(_n)return e(t,n);_n=!0;try{return e(t)}finally{if(_n=!1,(mn!==null||hn!==null)&&(bu(),mn&&(t=mn,e=hn,hn=mn=null,gn(t),e)))for(t=0;t<e.length;t++)gn(e[t])}}function yn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var bn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),xn=!1;if(bn)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){xn=!0}}),window.addEventListener(`test`,Sn,Sn),window.removeEventListener(`test`,Sn,Sn)}catch{xn=!1}var Cn=null,wn=null,Tn=null;function En(){if(Tn)return Tn;var e,t=wn,n=t.length,r,i=`value`in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Tn=i.slice(e,1<r?1-r:void 0)}function Dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function kn(){return!1}function An(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?On:kn,this.isPropagationStopped=kn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mn=An(jn),Nn=h({},jn,{view:0,detail:0}),Pn=An(Nn),Fn,In,O,Ln=h({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==O&&(O&&e.type===`mousemove`?(Fn=e.screenX-O.screenX,In=e.screenY-O.screenY):In=Fn=0,O=e),Fn)},movementY:function(e){return`movementY`in e?e.movementY:In}}),Rn=An(Ln),zn=An(h({},Ln,{dataTransfer:0})),Bn=An(h({},Nn,{relatedTarget:0})),Vn=An(h({},jn,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=An(h({},jn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=An(h({},jn,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=An(h({},Nn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?Dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=An(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=An(h({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=An(h({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=An(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=An(h({},jn,{newState:0,oldState:0})),tr=[9,13,27,32],nr=bn&&`CompositionEvent`in window,rr=null;bn&&`documentMode`in document&&(rr=document.documentMode);var ir=bn&&`TextEvent`in window&&!rr,ar=bn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=En(),Tn=wn=Cn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){mn?hn?hn.push(r):hn=[r]:mn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Mn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){yd(e,0)}function yr(e){if(Kt(Ot(e)))return e}function k(e,t){if(e===`change`)return t}var br=!1;if(bn){var xr;if(bn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){gr&&(gr.detachEvent(`onpropertychange`,Tr),_r=gr=null)}function Tr(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,pn(e)),vn(vr,t)}}function Er(e,t,n){e===`focusin`?(wr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function Or(e,t){if(e===`click`)return yr(t)}function kr(e,t){if(e===`input`||e===`change`)return yr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=bn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==qt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new Mn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};bn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),A=Jr(`animationstart`),Zr=Jr(`transitionrun`),Qr=Jr(`transitionstart`),$r=Jr(`transitioncancel`),ei=Jr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Nt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=gi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=gi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=gi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Di=[],Oi=0,ki=null,j=0,Ai=[],M=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Di[Oi++]=j,Di[Oi++]=ki,ki=e,j=t}function Fi(e,t,n){Ai[M++]=Mi,Ai[M++]=Ni,Ai[M++]=ji,ji=e;var r=Mi;e=Ni;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-Je(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,j=Di[--Oi],Di[Oi]=null;for(;e===ji;)ji=Ai[--M],Ai[M]=null,Ni=Ai[--M],Ai[M]=null,Mi=Ai[--M],Ai[M]=null}function Ri(e,t){Ai[M++]=Mi,Ai[M++]=Ni,Ai[M++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),tn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else t===27?(t=N,Zd(e.type)?(e=lf,lf=null,N=e):N=t):N=zi?cf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=me(null),Zi=null,Qi=null;function $i(e,t,n){D(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,he(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,F={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new la,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=dd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=T.S;T.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=me(null);function Ca(){var e=Sa.current;return e===null?K.pooledCache:e}function wa(e,t){t===null?D(Sa,Sa.current):D(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:F._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(dn,dn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case w:return t=Ma(t),f(e,t,n)}if(ue(t)||se(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===S)return f(e,sa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Ma(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===S)return p(e,t,sa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Ma(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===S)return m(e,t,n,sa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Ma(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===S)return b(e,r,sa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var I=!1;function Za(){if(I){var e=_a;if(e!==null)throw e}}function Qa(e,t,n,r){I=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ga&&(I=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=me(null),no=me(0);function ro(e,t){e=Wl,D(no,e),D(to,t),Wl=e|t.baseLanes}function io(){D(no,Wl),D(to,to.current)}function ao(){Wl=no.current,he(to),he(no)}var oo=me(null),so=null;function co(e){var t=e.alternate;D(L,L.current&1),D(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){D(L,L.current),D(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(D(L,L.current),D(oo,e),so===null&&(so=e)):fo(e)}function fo(){D(L,L.current),D(oo,oo.current)}function po(e){he(oo),so===e&&(so=null),he(L)}var L=me(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,B=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){T.H=zs;var t=z!==null&&z.next!==null;if(ho=0,B=z=R=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ia(e)&&(ic=!0))}function Eo(e,t,n,r){R=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,B=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}ho=0,B=z=R=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return B===null?R.memoizedState=B=e:B=B.next=e,B}function H(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=B===null?R.memoizedState:B.next;if(t!==null)B=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},B===null?R.memoizedState=B=e:B=B.next=e}return B}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ja(xo,e,t),t=R,(B===null?t.memoizedState:B.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return oa(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),z,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((ho&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(ic=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=R,a=H(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||B!==null&&B.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||ho&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=Mo(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Go(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,z,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=R;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,R,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,R,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),z,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=z;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=Mo(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();R.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&Co(r,z.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(R.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=Mo(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||ho&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return jr(n,t)?n:to.current===null?!(ho&42)||ho&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=xs(e,n,r),jr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Fs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ba(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,de,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return oa(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=qa(n);var r=Ja(t,e,n);r!==null&&(hu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return li(e,t,i,0),K===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===R||t!==null&&t===R}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var zs={readContext:oa,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:oa,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,R,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=jo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,R)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:oa,use:Po,useCallback:ys,useContext:oa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),z.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:oa,use:Po,useCallback:ys,useContext:oa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return z===null?xs(n,e,t):Ss(n,z.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return z===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(hu(t,e,n),Ya(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ii(e)}function Ys(e){console.error(e)}function Xs(e){ii(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=qa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(P)return t=oo.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=$s(e.stateNode,r,a),Xa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(P&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),io(),fo(t)):(wa(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:F._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),io(),uo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ha(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(lo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ra(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,N=cf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=fc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return aa(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Wa||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Wa||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return qi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ta()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(L.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?co(t):fo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(co(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ra(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=cf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ta():(l=F._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ha(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=L.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(L,o),ac(e,t,r,n),r=P?j:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ia(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),$i(t,F,e.memoizedState.cache),qi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(L,L.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:$i(t,F,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,P&&t.flags&1048576&&Fi(t,j,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,F,r),r!==o.cache&&na(t,[F],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Yi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=cf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),At(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),zi=t,Vi=!0,a=N,Zd(t.type)?(lf=a,N=cf(r.firstChild)):N=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=tf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=nf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return Cc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(F),e===null?(a=Ca(),a===null&&(a=K,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),$i(t,F,a)):((e.lanes&n)!==0&&(Ka(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,F,r),r!==a.cache&&na(t,[F],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,F,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Na=ka,Da}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(F),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=ge.current,Ki(t)?Wi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=ge.current,Ki(t))Wi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ui(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return ea(t.type),U(t),null;case 19:if(he(L),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return D(L,L.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return U(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=L.current,D(L,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(F),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(F),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(L),null;case 4:return xe(),null;case 10:return ea(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&he(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(F),null;case 25:return null;default:return null}}function Vc(e,t){switch(Li(t),t.tag){case 3:ea(F),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:he(L);break;case 10:ea(t.type);break;case 22:case 23:po(t),ao(),e!==null&&he(Sa);break;case 24:ea(F)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{nn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(nn(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=oa(F),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(F).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?mt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||P){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Jl=e}else Jl=536870912;return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),st(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ie(),10<a)){if(yu(r,t,Jl,!Vl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,Ao(e),Ia=null,La=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=vi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=rt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ci(),n}function Cu(e,t){R=null,T.H=zs,t===Ea||t===Oa?(t=Pa(),Y=3):t===Da?(t=Pa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,Ei(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Tu(){var e=T.H;return T.H=zs,e===null?zs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,ci()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ie()+500,Su(e,t)):Hl=rt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Aa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Qi=Zi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,ci(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=yi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Qi=Zi=null,Ao(t),Ia=null,La=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,Ei(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,Ei(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,ct(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=$s(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ei(n,e),n=ec(2),r=Ja(t,n,2),r!==null&&(tc(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ie()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=di(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=nt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=nt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ga;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:un(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Mn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Yr,`onAnimationEnd`),ri(Xr,`onAnimationIteration`),ri(A,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!xn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}vn(function(){var r=a,i=pn(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=Mn,u=e;switch(e){case`keypress`:if(Dn(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case Yr:case Xr:case A:l=Vn;break;case ei:l=Qn;break;case`scroll`:case`scrollend`:l=Pn;break;case`wheel`:l=$n;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`toggle`:case`beforetoggle`:l=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=yn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==fn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=k;else if(mr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&sn(r.elementType)&&(v=k):v=Or;if(v&&=v(e,r)){hr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Qt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=En()):(Cn=i,wn=`value`in Cn?Cn.value:Cn.textContent,ur=!0)),y=Ed(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=yn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=yn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=yn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=yn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&nn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:on(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=un(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=cn.get(n)||n,zt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:on(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&nn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&$t(e,!!r,n,!0):$t(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}tn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(sn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Xt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?$t(e,!!n,n?[]:``,!1):$t(e,!!n,t,!0)):$t(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}en(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(sn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Yt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Yt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Yt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Yt(n.imageSizes)+`"]`)):i+=`[href="`+Yt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Yt(r)+`"][href="`+Yt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);At(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Yt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),At(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Yt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Yt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,At(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(hu(n,e,t),Ya(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=pn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fn=r,n.target.dispatchEvent(r),fn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function C(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return se(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ce(t)}return ue(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ie(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ue(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return T(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function T(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ce(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function E(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r,i){let a=Ae((typeof t==`string`?le(t):t).pathname||`/`,n);if(a==null)return null;let o=i??pe(e),s=null,c=ke(a);for(let e=0;s==null&&e<o.length;++e)s=Te(o[e],c,r);return s}function fe(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function pe(e){let t=me(e);return D(t),t}function me(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Re([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),me(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Ce(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Oe(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of he(e.path))a(e,t,!0,n)}),t}function he(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=he(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function D(e){e.sort((e,t)=>e.score===t.score?we(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ge=/^:[\w-]+$/,_e=3,ve=2,ye=1,be=10,xe=-2,Se=e=>e===`*`;function Ce(e,t){let n=e.split(`/`),r=n.length;return n.some(Se)&&(r+=xe),t&&(r+=ve),n.filter(e=>!Se(e)).reduce((e,t)=>e+(ge.test(t)?_e:t===``?ye:be),r)}function we(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Te(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?De(u,l,s.matcher,s.compiledParams):Ee(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ee({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Re([a,d.pathname]),pathnameBase:Be(Re([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Re([a,d.pathnameBase]))}return o}function Ee(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Oe(e.path,e.caseSensitive,e.end);return De(e,t,n,r)}function De(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Oe(e,t=!1,n=!0){ie(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ke(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ae(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function je(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=Le(n),a=n.startsWith(`/`)?Me(n.substring(1),`/`):Me(n,t)):a=t,{pathname:a,search:Ve(r),hash:He(i)}}function Me(e,t){let n=ze(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ne(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Fe(e){let t=Pe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ie(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Ne(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Ne(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Ne(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=je(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Le=e=>e.replace(/[\\/]{2,}/g,`/`),Re=e=>Le(e.join(`/`)),ze=e=>e.replace(/\/+$/,``),Be=e=>ze(e).replace(/^\/*/,`/`),Ve=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,He=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ue=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function We(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ge(e){return Re(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ke=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function qe(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ke)try{let e=new URL(window.location.href),r=S.test(n)?new URL(C(n,e.protocol)):new URL(n),a=Ae(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ie(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Je=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Je);var Ye=[`GET`,...Je];new Set(Ye);var Xe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ze(e){try{return Xe.includes(new URL(e).protocol)}catch{return!1}}var Qe=x.createContext(null);Qe.displayName=`DataRouter`;var $e=x.createContext(null);$e.displayName=`DataRouterState`;var et=x.createContext(!1);function tt(){return x.useContext(et)}var nt=x.createContext({isTransitioning:!1});nt.displayName=`ViewTransition`;var rt=x.createContext(new Map);rt.displayName=`Fetchers`;var it=x.createContext(null);it.displayName=`Await`;var at=x.createContext(null);at.displayName=`Navigation`;var ot=x.createContext(null);ot.displayName=`Location`;var st=x.createContext({outlet:null,matches:[],isDataRoute:!1});st.displayName=`Route`;var ct=x.createContext(null);ct.displayName=`RouteError`;var lt=`REACT_ROUTER_ERROR`,ut=`REDIRECT`,dt=`ROUTE_ERROR_RESPONSE`;function ft(e){if(e.startsWith(`${lt}:${ut}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function pt(e){if(e.startsWith(`${lt}:${dt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ue(t.status,t.statusText,t.data)}catch{}}function mt(e,{relative:t}={}){w(ht(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(at),{hash:i,pathname:a,search:o}=St(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Re([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ht(){return x.useContext(ot)!=null}function gt(){return w(ht(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(ot).location}var _t=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function vt(e){x.useContext(at).static||x.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=x.useContext(st);return e?Vt():bt()}function bt(){w(ht(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Qe),{basename:t,navigator:n}=x.useContext(at),{matches:r}=x.useContext(st),{pathname:i}=gt(),a=JSON.stringify(Fe(r)),o=x.useRef(!1);return vt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(ie(o.current,_t),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ie(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Re([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function xt(){let{matches:e}=x.useContext(st);return e[e.length-1]?.params??{}}function St(e,{relative:t}={}){let{matches:n}=x.useContext(st),{pathname:r}=gt(),i=JSON.stringify(Fe(n));return x.useMemo(()=>Ie(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ct(e,t){return wt(e,t)}function wt(e,t,n){w(ht(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(at),{matches:i}=x.useContext(st),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ut(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=gt(),d;if(t){let e=typeof t==`string`?le(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):E(e,{pathname:p});ie(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ie(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=jt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Re([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Re([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(ot.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Tt(){let e=Bt(),t=We(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var Et=x.createElement(Tt,null),Dt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=pt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(st.Provider,{value:this.props.routeContext},x.createElement(ct.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(kt,{error:e},t):t}};Dt.contextType=et;var Ot=new WeakMap;function kt({children:e,error:t}){let{basename:n}=x.useContext(at);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ft(t.digest);if(e){let r=Ot.get(t);if(r)throw r;let i=qe(e.location,n),a=i.absoluteURL||i.to;if(Ze(a))throw Error(`Invalid redirect location`);if(Ke&&!Ot.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ot.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function At({routeContext:e,match:t,children:n}){let r=x.useContext(Qe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(st.Provider,{value:e},n)}function jt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ge(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Et,o&&(s<0&&c===0?(Ut(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(At,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Dt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Mt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nt(e){let t=x.useContext(Qe);return w(t,Mt(e)),t}function Pt(e){let t=x.useContext($e);return w(t,Mt(e)),t}function Ft(e){let t=x.useContext(st);return w(t,Mt(e)),t}function It(e){let t=Ft(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Lt(){return It(`useRouteId`)}function Rt(){let e=Pt(`useNavigation`);return x.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function zt(){let{matches:e,loaderData:t}=Pt(`useMatches`);return x.useMemo(()=>e.map(e=>fe(e,t)),[e,t])}function Bt(){let e=x.useContext(ct),t=Pt(`useRouteError`),n=It(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Vt(){let{router:e}=Nt(`useNavigate`),t=It(`useNavigate`),n=x.useRef(!1);return vt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{ie(n.current,_t),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ht={};function Ut(e,t,n){!t&&!Ht[e]&&(Ht[e]=!0,ie(!1,n))}x.memo(Wt);function Wt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return wt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Gt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Kt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!ht(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Ae(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ie(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(at.Provider,{value:c},x.createElement(ot.Provider,{children:t,value:h}))}function qt({children:e,location:t}){return Ct(Jt(e),t)}x.Component;function Jt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Jt(e.props.children,i));return}w(e.type===Gt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Jt(e.props.children,i)),n.push(a)}),n}var Yt=`get`,Xt=`application/x-www-form-urlencoded`;function Zt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Qt(e){return Zt(e)&&e.tagName.toLowerCase()===`button`}function $t(e){return Zt(e)&&e.tagName.toLowerCase()===`form`}function en(e){return Zt(e)&&e.tagName.toLowerCase()===`input`}function tn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nn(e,t){return e.button===0&&(!t||t===`_self`)&&!tn(e)}var rn=null;function an(){if(rn===null)try{new FormData(document.createElement(`form`),0),rn=!1}catch{rn=!0}return rn}var on=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function sn(e){return e!=null&&!on.has(e)?(ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xt}"`),null):e}function cn(e,t){let n,r,i,a,o;if($t(e)){let o=e.getAttribute(`action`);r=o?Ae(o,t):null,n=e.getAttribute(`method`)||Yt,i=sn(e.getAttribute(`enctype`))||Xt,a=new FormData(e)}else if(Qt(e)||en(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ae(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Yt,i=sn(e.getAttribute(`formenctype`))||sn(o.getAttribute(`enctype`))||Xt,a=new FormData(o,e),!an()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Zt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Yt,r=null,i=Xt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ln={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},un=/[&><\u2028\u2029]/g;function dn(e){return e.replace(un,e=>ln[e])}function fn(e,t){if(e===!1||e==null)throw Error(t)}function pn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ae(i.pathname,t)===`/`?i.pathname=`${ze(t)}/_root.${r}`:i.pathname=`${ze(i.pathname)}.${r}`,i}async function mn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hn(e){return e!=null&&typeof e.page==`string`}function gn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function _n(e,t,n){return Sn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await mn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(gn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function vn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function yn(e,t,{includeHydrateFallback:n}={}){return bn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function bn(e){return[...new Set(e)]}function xn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Sn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!hn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(xn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Cn(){let e=x.useContext(Qe);return fn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function wn(){let e=x.useContext($e);return fn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Tn=x.createContext(void 0);Tn.displayName=`FrameworkContext`;function En(){let e=x.useContext(Tn);return fn(e,`You must render this element inside a <HydratedRouter> element`),e}function Dn(e,t){let n=x.useContext(Tn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:On(s,p),onBlur:On(c,m),onMouseEnter:On(l,p),onMouseLeave:On(u,m),onTouchStart:On(d,p)}]:[a,f,{}]:[!1,f,{}]}function On(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function kn({page:e,...t}){let n=tt(),{nonce:r}=En(),{router:i}=Cn(),a=x.useMemo(()=>E(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(jn,{page:e,matches:a,...t}):x.createElement(Mn,{page:e,matches:a,...t})):null}function An(e){let{manifest:t,routeModules:n}=En(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return _n(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function jn({page:e,matches:t,...n}){let r=gt(),{future:i}=En(),{basename:a}=Cn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=pn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Mn({page:e,matches:t,...n}){let r=gt(),{future:i,manifest:a,routeModules:o}=En(),{basename:s}=Cn(),{loaderData:c,matches:l}=wn(),u=x.useMemo(()=>vn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>vn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=pn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>yn(d,a),[d,a]),m=An(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Nn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Pn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Pn&&(window.__reactRouterVersion=`7.18.0`)}catch{}function Fn({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Kt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function In({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Kt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}In.displayName=`unstable_HistoryRouter`;var O=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(at),v=typeof l==`string`&&ee.test(l),y=qe(l,h);l=y.to;let b=mt(l,{relative:r}),S=gt(),C=null;if(o){let e=Ie(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Re([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=Dn(n,p),w=Un(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ie(t){e&&e(t),t.defaultPrevented||w(t)}let ae=!(y.isExternal||i),oe=x.createElement(`a`,{...p,...re,href:(ae?C:void 0)||y.absoluteURL||b,onClick:ae?ie:e,ref:Nn(m,ne),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return te&&!v?x.createElement(x.Fragment,null,oe,x.createElement(kn,{page:b})):oe});O.displayName=`Link`;var Ln=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=St(a,{relative:c.relative}),d=gt(),f=x.useContext($e),{navigator:p,basename:m}=x.useContext(at),h=f!=null&&$n(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ae(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return x.createElement(O,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Ln.displayName=`NavLink`;var Rn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Yt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(at),g=Kn(),_=qn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Rn.displayName=`Form`;function zn({getKey:e,storageKey:t,...n}){let r=x.useContext(Tn),{basename:i}=x.useContext(at),a=gt(),o=zt();Zn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Xn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${dn(JSON.stringify(t||Jn))}, ${dn(JSON.stringify(s))})`}})}zn.displayName=`ScrollRestoration`;function Bn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vn(e){let t=x.useContext(Qe);return w(t,Bn(e)),t}function Hn(e){let t=x.useContext($e);return w(t,Bn(e)),t}function Un(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=yt(),d=gt(),f=St(e,{relative:o});return x.useCallback(p=>{if(nn(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Wn=0,Gn=()=>`__${String(++Wn)}__`;function Kn(){let{router:e}=Vn(`useSubmit`),{basename:t}=x.useContext(at),n=Lt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=cn(e,t);a.navigate===!1?await r(a.fetcherKey||Gn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function qn(e,{relative:t}={}){let{basename:n}=x.useContext(at),r=x.useContext(st);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...St(e||`.`,{relative:t})},o=gt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Re([n,a.pathname])),ce(a)}var Jn=`react-router-scroll-positions`,Yn={};function Xn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ae(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Zn({getKey:e,storageKey:t}={}){let{router:n}=Vn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Hn(`useScrollRestoration`),{basename:a}=x.useContext(at),o=gt(),s=zt(),c=Rt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Qn(x.useCallback(()=>{if(c.state===`idle`){let t=Xn(o,s,a,e);Yn[t]=window.scrollY}try{sessionStorage.setItem(t||Jn,JSON.stringify(Yn))}catch(e){ie(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Jn);e&&(Yn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Yn,()=>window.scrollY,e?(t,n)=>Xn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{ie(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Qn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function $n(e,{relative:t}={}){let n=x.useContext(nt);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vn(`useViewTransitionState`),i=St(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ae(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ae(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ee(i.pathname,o)!=null||Ee(i.pathname,a)!=null}var er=c(g(),1),tr=[{id:`about`,label:`about`,key:`0`,watermark:`About`},{id:`experience`,label:`work`,key:`1`,watermark:`Work`},{id:`skills`,label:`skills`,key:`2`,watermark:`Skills`},{id:`projects`,label:`projects`,key:`3`,watermark:`Projects`},{id:`interactive`,label:`demos`,key:`4`,watermark:`Demos`},{id:`blog`,label:`blog`,key:`5`,watermark:`Blog`},{id:`dsa`,label:`dsa`,key:`6`,watermark:`DSA`},{id:`contact`,label:`contact`,key:`7`,watermark:`Contact`}];function nr(e){(0,x.useEffect)(()=>{let t=t=>{if(t.target.tagName===`INPUT`||t.target.tagName===`TEXTAREA`)return;let n=e.find(e=>e.key===t.key);n&&(t.preventDefault(),document.getElementById(n.id)?.scrollIntoView({behavior:`smooth`}))};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e])}var rr=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),ir=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ar=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),or=e=>{let t=ar(e);return t.charAt(0).toUpperCase()+t.slice(1)},sr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},cr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},lr=(0,x.createContext)({}),ur=()=>(0,x.useContext)(lr),dr=(0,x.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ur()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,x.createElement)(`svg`,{ref:c,...sr,width:t??l??sr.width,height:t??l??sr.height,stroke:e??f,strokeWidth:m,className:rr(`lucide`,p,i),...!a&&!cr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,x.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),fr=(e,t)=>{let n=(0,x.forwardRef)(({className:n,...r},i)=>(0,x.createElement)(dr,{ref:i,iconNode:t,className:rr(`lucide-${ir(or(e))}`,`lucide-${e}`,n),...r}));return n.displayName=or(e),n},pr=fr(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),mr=fr(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),hr=fr(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),gr=fr(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),_r=fr(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]);function vr(){let[e,t]=(0,x.useState)(()=>document.documentElement.classList.contains(`light`));return(0,x.useEffect)(()=>{let e=window.matchMedia(`(prefers-color-scheme: light)`),n=e=>{localStorage.getItem(`theme`)||(document.documentElement.classList.toggle(`light`,e.matches),t(e.matches))};return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[]),{isLight:e,toggle:()=>{let e=!document.documentElement.classList.contains(`light`);document.documentElement.classList.toggle(`light`,e),localStorage.setItem(`theme`,e?`light`:`dark`),t(e)}}}var yr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),k=o(((e,t)=>{t.exports=yr()}))();function br(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(tr[0].id),{pathname:i}=gt(),a=i===`/`,{isLight:o,toggle:s}=vr();return(0,x.useEffect)(()=>{let e=()=>{let e=window.scrollY+200;for(let t of tr){let n=document.getElementById(t.id);if(n&&e>=n.offsetTop&&e<n.offsetTop+n.offsetHeight){r(t.id);break}}};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,k.jsxs)(`nav`,{className:`fixed top-0 left-0 w-full z-50 bg-bg/85 backdrop-blur-md border-b border-border`,children:[(0,k.jsxs)(`div`,{className:`page-container flex items-center justify-between h-12`,children:[(0,k.jsxs)(`a`,{href:a?`#about`:`/`,className:`flex items-center gap-2 font-bold text-sm hover:opacity-80 transition-opacity`,children:[(0,k.jsx)(`span`,{className:`text-accent-green`,children:`❯`}),(0,k.jsx)(`span`,{className:`text-text`,children:`navknight`})]}),(0,k.jsx)(`div`,{className:`hidden md:flex items-center gap-0.5`,children:tr.map(e=>{let t=a&&n===e.id;return(0,k.jsxs)(`a`,{href:a?`#${e.id}`:`/#${e.id}`,className:`group relative text-xs px-3 py-1.5 rounded-md transition-all duration-200 ${t?`text-text`:`text-text-muted hover:text-text-secondary`}`,children:[(0,k.jsxs)(`span`,{className:`text-[10px] ${t?`text-accent`:`text-text-muted group-hover:text-accent-orange`} transition-colors`,children:[`[`,e.key,`]`]}),` `,e.label,t&&(0,k.jsx)(`span`,{className:`absolute bottom-0 left-3 right-3 h-px bg-accent animate-fade-in`})]},e.id)})}),(0,k.jsxs)(`div`,{className:`hidden md:flex items-center gap-3`,children:[(0,k.jsx)(O,{to:`/graph`,className:`text-xs text-text-muted hover:text-accent-cyan link-animated transition-colors`,children:`graph`}),(0,k.jsx)(`button`,{onClick:s,className:`text-text-muted hover:text-text transition-colors p-1`,"aria-label":`Toggle theme`,children:o?(0,k.jsx)(hr,{size:14}):(0,k.jsx)(gr,{size:14})})]}),(0,k.jsx)(`button`,{className:`md:hidden text-text-muted hover:text-text transition-colors`,onClick:()=>t(!e),children:e?(0,k.jsx)(_r,{size:18}):(0,k.jsx)(mr,{size:18})})]}),e&&(0,k.jsxs)(`div`,{className:`md:hidden border-t border-border bg-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1 animate-fade-in`,children:[tr.map(e=>(0,k.jsxs)(`a`,{href:a?`#${e.id}`:`/#${e.id}`,onClick:()=>t(!1),className:`text-sm text-text-secondary hover:text-text transition-colors py-2.5 border-b border-border/50`,children:[(0,k.jsxs)(`span`,{className:`text-accent-orange`,children:[`[`,e.key,`]`]}),` `,e.label]},e.id)),(0,k.jsx)(O,{to:`/graph`,onClick:()=>t(!1),className:`text-sm text-text-secondary hover:text-accent-cyan transition-colors py-2.5 border-b border-border/50`,children:`graph`}),(0,k.jsxs)(`button`,{onClick:()=>{s(),t(!1)},className:`text-sm text-text-secondary hover:text-text transition-colors py-2.5 text-left`,children:[o?`☀ light mode`:`☾ dark mode`,` (toggle)`]})]})]})}var xr={help:()=>[``,`  Available commands:`,`  ─────────────────────────────`,`  whoami       About me`,`  skills       Tech stack`,`  experience   Work history`,`  projects     Research & builds`,`  neofetch     System info`,`  clear        Clear console`,``],whoami:()=>[``,`  Abhinav Gupta`,`  Software Engineer @ Zscaler (via SquareX)`,`  B.Tech CS, IIT Tirupati '25`,``,`  Building multi-tenant enterprise backends,`,`  custom Chromium forks, and GPU memory systems.`,``],skills:()=>[``,`  Languages:   C/C++ · Python · Go · Rust · TypeScript · SQL`,`  Infra:       Docker · Linux · Git · Kafka · Distributed Systems`,`  Backend:     Flask · PostgreSQL · Redis · GCP (Cloud Run, IAM, Pub/Sub)`,`  Frontend:    React · Browser Extensions · WebAssembly`,`  Research:    OpenMP · GPU Architecture · Cache Coherence · MGPUsim`,``],experience:()=>[``,`  Zscaler (via SquareX acquisition)`,`  Software Engineer | Jan 2025–Present`,`  ───────────────────────────────────`,`  • Multi-tenant enterprise backend — policy evaluation,`,`    cloud storage routing, DLP (Python/Flask, PostgreSQL, Redis)`,`  • Chromium fork — device posture APIs, code signing,`,`    OS password challenges, AV detection (Windows + macOS)`,`  • Custom OIDC IDP — SquareX as second auth factor,`,`    Kafka hot-reloading across 20+ tenants (Go, React)`,`  • Browser extension security engine — sub-ms DLP pattern`,`    matching, encrypted WebSocket agent comms (TypeScript)`,`  • Firefox fork for Android + CLI patch management system`,`  • browser.security — DEF CON, 30+ SWG bypasses, Forbes`,``],projects:()=>[``,`  [1] DAP: Dead-Block Aware Prefetching in GPUs`,`      MGPUsim (Go) · next-line + strided prefetcher modules`,`      32% miss reduction · 80% prefetch hit · MSHR deadlock fix`,``,`  [2] Parallel Sparse Tensor Decomposition (TTMc)`,`      C++/OpenMP · CSF format · 7 algorithms across 3 modes`,`      O(n⁵)→O(n⁴) via intermediate buffering · 2.87x speedup`,``,`  [3] Append-Only Zip Library`,`      Rust/WASM · OPFS streaming · 80% memory reduction`,`      Large file processing without browser tab crashes`,``],neofetch:()=>[``,`  navknight@workstation`,`  ─────────────────────`,`  OS:        Linux / macOS`,`  Shell:     zsh + tmux`,`  Editor:    Neovim`,`  Stack:     Go · C++ · Python · TypeScript`,`  Infra:     Docker · GCP · Kafka · Redis`,`  Research:  GPU memory systems · HPC`,``]};function Sr(){let[e,t]=(0,x.useState)([``,`  Type "help" to explore.`,``]),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)([]),[o,s]=(0,x.useState)(-1),c=(0,x.useRef)(null),l=(0,x.useRef)(null);(0,x.useEffect)(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[e]);let u=n=>{let r=n.trim().toLowerCase();if(r===`clear`){t([``]),a(e=>[n,...e]),s(-1);return}let i=[...e,`  ❯ ${n}`],o=xr[r];o?i.push(...o()):r&&i.push(``,`  command not found: ${r}`,``),t(i),a(e=>[n,...e]),s(-1)};return(0,k.jsx)(`section`,{id:`about`,className:`section-wrap min-h-screen flex items-center pt-16`,children:(0,k.jsxs)(`div`,{className:`content-area py-8 sm:py-12`,children:[(0,k.jsxs)(`div`,{className:`mb-10 animate-fade-up`,children:[(0,k.jsxs)(`h1`,{className:`font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]`,children:[`Hello World!,`,(0,k.jsx)(`br`,{}),`I'm `,(0,k.jsx)(`span`,{className:`text-accent`,children:`Abhinav Gupta`}),`.`]}),(0,k.jsxs)(`p`,{className:`text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl mt-6`,children:[`Software Engineer at `,(0,k.jsx)(`span`,{className:`text-text font-medium`,children:`Zscaler`}),` (via SquareX). I build multi-tenant enterprise backends, fork Chromium for device posture, and research GPU memory systems. B.Tech CS, IIT Tirupati '25.`]}),(0,k.jsxs)(`p`,{className:`text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl mt-3`,children:[`Day-to-day: Go, C++, Python, TypeScript. I like taking things from idea → architecture → code → `,(0,k.jsx)(`span`,{className:`text-accent-orange italic`,children:`"wow this is fast"`}),` → production.`]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-4 sm:gap-5 mt-6 text-xs`,children:[(0,k.jsx)(`a`,{href:`https://github.com/Navknight`,target:`_blank`,rel:`noopener noreferrer`,className:`text-text-muted hover:text-accent-green link-animated transition-colors`,children:`github`}),(0,k.jsx)(`a`,{href:`https://www.linkedin.com/in/abhinav-gupta-iitt/`,target:`_blank`,rel:`noopener noreferrer`,className:`text-text-muted hover:text-accent-blue link-animated transition-colors`,children:`linkedin`}),(0,k.jsx)(`a`,{href:`mailto:abhi.gupta8802@gmail.com`,className:`text-text-muted hover:text-accent-orange link-animated transition-colors`,children:`email`}),(0,k.jsx)(`a`,{href:`#interactive`,className:`text-text-muted hover:text-accent link-animated transition-colors`,children:`demos ↓`})]})]}),(0,k.jsxs)(`div`,{className:`animate-fade-up`,style:{animationDelay:`200ms`},children:[(0,k.jsxs)(`div`,{className:`rounded-lg overflow-hidden panel-translucent flex flex-col h-[260px] sm:h-[340px] max-w-2xl shadow-2xl shadow-black/30`,children:[(0,k.jsxs)(`div`,{className:`bg-white/5 px-3 sm:px-4 py-2 flex items-center gap-3 border-b border-border shrink-0`,children:[(0,k.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,k.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-terminal-red`}),(0,k.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-terminal-amber`}),(0,k.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-terminal-green`})]}),(0,k.jsx)(`span`,{className:`text-[11px] text-text-muted hidden sm:inline`,children:`~/navknight — zsh`})]}),(0,k.jsxs)(`div`,{ref:c,className:`flex-1 overflow-y-auto cursor-text p-3 sm:p-4 text-[11px] sm:text-[12px] leading-relaxed flex flex-col`,onClick:()=>l.current?.focus(),children:[(0,k.jsx)(`div`,{className:`flex-1`,children:e.map((e,t)=>(0,k.jsx)(`div`,{className:`whitespace-pre-wrap ${e.startsWith(`  ❯`)?`text-accent-green font-medium`:e.includes(`command not found`)?`text-terminal-red`:e.includes(`✓`)?`text-terminal-green`:e.includes(`⚡`)||e.includes(`[WARN]`)?`text-terminal-amber`:`text-text-secondary`}`,children:e},t))}),(0,k.jsxs)(`div`,{className:`flex items-center mt-2 shrink-0`,children:[(0,k.jsx)(`span`,{className:`text-accent-green mr-2`,children:`❯`}),(0,k.jsx)(`input`,{ref:l,type:`text`,value:n,onChange:e=>r(e.target.value),onKeyDown:e=>{if(e.key===`Enter`)u(n),r(``);else if(e.key===`ArrowUp`){if(e.preventDefault(),i.length>0&&o<i.length-1){let e=o+1;s(e),r(i[e])}}else if(e.key===`ArrowDown`)if(e.preventDefault(),o>0){let e=o-1;s(e),r(i[e])}else s(-1),r(``);else if(e.key===`Tab`){e.preventDefault();let t=Object.keys(xr).find(e=>e.startsWith(n.trim().toLowerCase()));t&&r(t)}},className:`flex-1 bg-transparent outline-none text-text caret-accent-green text-[11px] sm:text-[12px] p-0 border-none focus:ring-0`,autoFocus:!0,spellCheck:!1,autoComplete:`off`}),(0,k.jsx)(`span`,{className:`animate-blink text-accent-green/70`,children:`▊`})]})]})]}),(0,k.jsx)(`p`,{className:`text-[10px] text-text-muted mt-2 opacity-60`,children:`↑↓ history · tab autocomplete`})]})]})})}var Cr={name:`Zscaler`,note:`via SquareX acquisition`,role:`Software Engineer`,period:`Jan 2025 — Present`},wr=[{title:`Chromium Browser Fork & Device Trust`,description:`Custom Chromium fork with posture evaluation APIs, code signing, AV detection across Windows + macOS. Firefox Android fork with CLI patch management.`,tech:[`C++`,`Objective-C`,`Chromium`,`Shell`],color:`text-accent-blue`},{title:`Real-time DLP Extension Engine`,description:`Sub-millisecond content masking and pattern matching. Encrypted WebSocket agent comms. Featured at DEF CON 32 and Forbes.`,tech:[`TypeScript`,`Extensions`,`WebSockets`,`DLP`],color:`text-accent-pink`},{title:`Custom OIDC Identity Provider`,description:`Multi-tenant OIDC IDP in Go, integrated with enterprise IDPs. Event-driven config hot-reloading via Kafka across 20+ tenants.`,tech:[`Go`,`Kafka`,`PostgreSQL`,`Redis`,`GCP`],color:`text-accent-green`},{title:`Policy-Driven Cloud Upload System`,description:`Route downloads to Google Drive, OneDrive, Box based on DLP policies. Chunked parallel uploads, multi-tenant credential storage for 50+ tenants.`,tech:[`Python`,`Flask`,`Cloud APIs`,`Docker`],color:`text-accent-orange`},{title:`Enterprise Admin Console & Auth Portal`,description:`Policy management with versioning, geo-analytics, RBAC. Self-destructing tier-access docs portal. 700+ contributions across 8 browsers.`,tech:[`React`,`TypeScript`,`TailwindCSS`,`Flask`],color:`text-accent-cyan`}];function Tr(e=.1){let t=(0,x.useRef)(null),[n,r]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{let n=t.current;if(!n)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&r(!0)},{threshold:e});return i.observe(n),()=>i.disconnect()},[e]),{ref:t,visible:n}}function Er({id:e,className:t=``,compact:n=!1,children:r}){return(0,k.jsx)(`section`,{id:e,className:`section-wrap ${n?`!min-h-0 py-12`:``} ${t}`,children:(0,k.jsx)(`div`,{className:`content-area`,children:r})})}function Dr({index:e=0,delay:t=80,className:n=``,as:r=`div`,children:i,...a}){let{ref:o,visible:s}=Tr(.1);return(0,k.jsx)(r,{ref:o,className:`transition-all duration-500 ${s?`opacity-100 translate-y-0`:`opacity-0 translate-y-6`} ${n}`,style:{transitionDelay:`${e*t}ms`},...a,children:i})}function Or(){let{ref:e,visible:t}=Tr(.05);return(0,k.jsxs)(Er,{id:`experience`,children:[(0,k.jsxs)(`div`,{ref:e,className:`mb-8 transition-all duration-500 ${t?`opacity-100 translate-y-0`:`opacity-0 translate-y-4`}`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline gap-3 mb-1 flex-wrap`,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text`,children:`Experience`}),(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted bg-surface-2 px-2 py-0.5 rounded`,children:Cr.period})]}),(0,k.jsxs)(`p`,{className:`text-xs text-text-secondary`,children:[Cr.role,` at `,(0,k.jsx)(`span`,{className:`text-text font-medium`,children:Cr.name}),(0,k.jsxs)(`span`,{className:`text-text-muted`,children:[` — `,Cr.note]})]})]}),(0,k.jsx)(`div`,{children:wr.map((e,t)=>(0,k.jsx)(Dr,{index:t,className:`py-6 border-b border-border/50 last:border-b-0 group`,children:(0,k.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,k.jsxs)(`span`,{className:`text-[10px] font-bold mt-1 ${e.color} opacity-70`,children:[`0`,t+1]}),(0,k.jsxs)(`div`,{className:`flex-1`,children:[(0,k.jsx)(`h3`,{className:`text-sm font-semibold text-text`,children:e.title}),(0,k.jsx)(`p`,{className:`text-xs text-text-secondary leading-relaxed mt-1.5`,children:e.description}),(0,k.jsx)(`div`,{className:`flex flex-wrap gap-x-3 gap-y-1 mt-3`,children:e.tech.map(e=>(0,k.jsx)(`span`,{className:`text-[11px] text-text-muted`,children:e},e))})]})]})},t))})]})}var kr=[{title:`DAP: GPU Prefetching`,stat:`32% miss reduction · 80% hit rate`,description:`Next-line and strided hardware prefetcher modules in MGPUsim. Resolved MSHR coherence deadlocks in multi-GPU benchmarks.`,tech:[`Go`,`GPU Arch`,`Cache Coherence`,`MGPUsim`],demoLink:`#interactive`,color:`text-accent-cyan`},{title:`Parallel Tensor Decomposition`,stat:`O(n⁵)→O(n⁴) · 2.87x speedup`,description:`Tucker decomposition on sparse CSF tensors with 7 parallel algorithms across 3 decomposition modes. Intermediate buffering for cache locality.`,tech:[`C++`,`OpenMP`,`HPC`,`Sparse Math`],demoLink:`#interactive`,color:`text-accent-orange`},{title:`zipzap`,stat:`30–61x faster · zero recompression`,description:`Rust/WASM library that replaces ZIP entries by appending to archive tail. Skips decompression entirely — flat memory, fast rewrites.`,tech:[`Rust`,`WebAssembly`,`OPFS`,`wasm-bindgen`],demoLink:`#interactive`,github:`https://github.com/Navknight/zipzap`,color:`text-accent-green`},{title:`browser.security`,stat:`DEF CON 2024 · 30+ SWG bypasses`,description:`Last Mile Reassembly Attack demonstrating Secure Web Gateway client-side inspection failures. Forbes, global cybersecurity coverage.`,tech:[`Security Research`,`Browser Internals`],link:`https://browser.security/`,color:`text-accent-pink`},{title:`Rituals`,stat:`P2P recovery · event-driven`,description:`Cross-platform habit tracker with Firestore listeners for peer-to-peer data recovery. Zero server storage costs.`,tech:[`TypeScript`,`React Native`,`Firebase`],github:`https://github.com/Navknight`,color:`text-accent-blue`}];function Ar(){return(0,k.jsxs)(Er,{id:`projects`,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text mb-8`,children:`Projects & Research`}),(0,k.jsx)(`div`,{children:kr.map((e,t)=>(0,k.jsx)(Dr,{index:t,className:`py-6 border-b border-border/50 last:border-b-0 group`,children:(0,k.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,k.jsxs)(`div`,{className:`flex-1`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline gap-3 flex-wrap`,children:[(0,k.jsx)(`h3`,{className:`text-sm font-semibold text-text group-hover:text-accent transition-colors duration-300`,children:e.title}),(0,k.jsx)(`span`,{className:`text-[10px] font-medium ${e.color}`,children:e.stat})]}),(0,k.jsx)(`p`,{className:`text-xs text-text-secondary leading-relaxed mt-1.5 max-w-lg`,children:e.description}),(0,k.jsx)(`div`,{className:`flex flex-wrap gap-x-3 gap-y-1 mt-3`,children:e.tech.map(e=>(0,k.jsx)(`span`,{className:`text-[11px] text-text-muted`,children:e},e))})]}),(0,k.jsxs)(`div`,{className:`flex gap-3 shrink-0 pt-0.5`,children:[e.demoLink&&(0,k.jsx)(`a`,{href:e.demoLink,className:`text-[11px] text-text-muted hover:text-accent-green link-animated transition-colors`,children:`demo`}),e.github&&(0,k.jsx)(`a`,{href:e.github,target:`_blank`,rel:`noopener noreferrer`,className:`text-[11px] text-text-muted hover:text-text link-animated transition-colors`,children:`src`}),e.link&&(0,k.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`text-[11px] text-text-muted hover:text-accent-orange link-animated transition-colors`,children:`site`})]})]})},t))})]})}var jr=[{name:`Systems`,skills:[`C/C++`,`Rust`,`OpenMP`,`CUDA`,`Chromium`,`WASM`],color:`text-accent-cyan`},{name:`Languages`,skills:[`Go`,`Python`,`TypeScript`,`SQL`,`Obj-C`,`Bash`],color:`text-accent-green`},{name:`Backend`,skills:[`Flask`,`Kafka`,`Docker`,`Linux`,`Distributed Sys`],color:`text-accent-orange`},{name:`Cloud/DB`,skills:[`PostgreSQL`,`Redis`,`GCP`,`Firebase`,`BigQuery`],color:`text-accent-blue`},{name:`Frontend`,skills:[`React`,`Extensions`,`WebRTC`,`Canvas`,`Tailwind`],color:`text-accent-pink`},{name:`Security`,skills:[`OIDC`,`DLP`,`mTLS`,`Device Trust`,`Browser Hardening`],color:`text-accent`}];function Mr(){let{ref:e,visible:t}=Tr(.1);return(0,k.jsx)(Er,{id:`skills`,compact:!0,children:(0,k.jsxs)(`div`,{ref:e,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text mb-6`,children:`Stack`}),(0,k.jsx)(`div`,{className:`space-y-3 transition-all duration-500 ${t?`opacity-100`:`opacity-0`}`,children:jr.map((e,t)=>(0,k.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0`,style:{transitionDelay:`${t*40}ms`},children:[(0,k.jsx)(`span`,{className:`text-[11px] w-24 shrink-0 ${e.color} font-medium`,children:e.name}),(0,k.jsx)(`span`,{className:`text-xs text-text-secondary`,children:e.skills.join(` · `)})]},e.name))})]})})}function Nr(e,t,n,r,i){let a=Hr(e,A.__wbindgen_malloc),o=Xr,s=Ur(t,A.__wbindgen_malloc,A.__wbindgen_realloc),c=Xr,l=Hr(n,A.__wbindgen_malloc),u=Xr,d=A.zip_replace_or_add_stored(a,o,s,c,l,u,Vr(r)?16777215:r,Vr(i)?16777215:i);if(d[3])throw Wr(d[2]);var f=Fr(d[0],d[1]).slice();return A.__wbindgen_free(d[0],d[1]*1,1),f}function Pr(){return{__proto__:null,"./zipzap_bg.js":{__proto__:null,__wbg_Error_fdd633d4bb5dd76a:function(e,t){return Error(Rr(e,t))},__wbg___wbindgen_string_get_71bb4348194e31f0:function(e,t){let n=t,r=typeof n==`string`?n:void 0;var i=Vr(r)?0:Ur(r,A.__wbindgen_malloc,A.__wbindgen_realloc),a=Xr;Lr().setInt32(e+4,a,!0),Lr().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(e,t){throw Error(Rr(e,t))},__wbg_length_589238bdcf171f0e:function(e){return e.length},__wbg_prototypesetcall_d721637c7ca66eb8:function(e,t,n){Uint8Array.prototype.set.call(Fr(e,t),n)},__wbindgen_init_externref_table:function(){let e=A.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}function Fr(e,t){return e>>>=0,Br().subarray(e/1,e/1+t)}var Ir=null;function Lr(){return(Ir===null||Ir.buffer.detached===!0||Ir.buffer.detached===void 0&&Ir.buffer!==A.memory.buffer)&&(Ir=new DataView(A.memory.buffer)),Ir}function Rr(e,t){return Jr(e>>>0,t)}var zr=null;function Br(){return(zr===null||zr.byteLength===0)&&(zr=new Uint8Array(A.memory.buffer)),zr}function Vr(e){return e==null}function Hr(e,t){let n=t(e.length*1,1)>>>0;return Br().set(e,n/1),Xr=e.length,n}function Ur(e,t,n){if(n===void 0){let n=Yr.encode(e),r=t(n.length,1)>>>0;return Br().subarray(r,r+n.length).set(n),Xr=n.length,r}let r=e.length,i=t(r,1)>>>0,a=Br(),o=0;for(;o<r;o++){let t=e.charCodeAt(o);if(t>127)break;a[i+o]=t}if(o!==r){o!==0&&(e=e.slice(o)),i=n(i,r,r=o+e.length*3,1)>>>0;let t=Br().subarray(i+o,i+r),a=Yr.encodeInto(e,t);o+=a.written,i=n(i,r,o,1)>>>0}return Xr=o,i}function Wr(e){let t=A.__wbindgen_externrefs.get(e);return A.__externref_table_dealloc(e),t}var Gr=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0});Gr.decode();var Kr=2146435072,qr=0;function Jr(e,t){return qr+=t,qr>=Kr&&(Gr=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0}),Gr.decode(),qr=t),Gr.decode(Br().subarray(e,e+t))}var Yr=new TextEncoder;`encodeInto`in Yr||(Yr.encodeInto=function(e,t){let n=Yr.encode(e);return t.set(n),{read:e.length,written:n.length}});var Xr=0,A;function Zr(e,t){return A=e.exports,Ir=null,zr=null,A.__wbindgen_start(),A}async function Qr(e,t){if(typeof Response==`function`&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming==`function`)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if(e.ok&&n(e.type)&&e.headers.get(`Content-Type`)!==`application/wasm`)console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}let r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{let n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}function n(e){switch(e){case`basic`:case`cors`:case`default`:return!0}return!1}}async function $r(e){if(A!==void 0)return A;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)),e===void 0&&(e=new URL(`zipzap_bg.wasm`,``+import.meta.url));let t=Pr();(typeof e==`string`||typeof Request==`function`&&e instanceof Request||typeof URL==`function`&&e instanceof URL)&&(e=fetch(e));let{instance:n,module:r}=await Qr(await e,t);return Zr(n,r)}var ei=!1;async function ti(){ei||=(await $r(`/zipzap/zipzap_bg.wasm`),!0)}function ni(e){let t=new DataView(e.buffer||e),n=new TextDecoder;function r(e){return t.getUint16(e,!0)}function i(e){return t.getUint32(e,!0)}let a=-1;for(let t=e.length-22;t>=0;t--)if(e[t]===80&&e[t+1]===75&&e[t+2]===5&&e[t+3]===6){a=t;break}if(a===-1)throw Error(`Not a valid ZIP file`);let o=r(a+10),s=i(a+16),c=[],l=s;for(let t=0;t<o&&i(l)===33639248;t++){let t=r(l+10),a=i(l+20),o=i(l+24),s=r(l+28),u=r(l+30),d=r(l+32),f=n.decode(e.slice(l+46,l+46+s));l+=46+s+u+d,f.endsWith(`/`)||c.push({name:f,compSize:a,uncompSize:o,compression:t})}return c}function ri(e,t){let n=new DataView(e.buffer||e);function r(e){return n.getUint16(e,!0)}function i(e){return n.getUint32(e,!0)}let a=new TextDecoder,o=0;for(;o<e.length-4;){if(i(o)!==67324752){o++;continue}let n=r(o+26),s=r(o+28),c=a.decode(e.slice(o+30,o+30+n)),l=o+30+n+s,u=i(o+18);if(c===t.name)return e.slice(l,l+u);o+=30+n+s+u}return null}function ii(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(2)} MB`}function ai(e){return e===0?`stored`:e===8?`deflate`:`method ${e}`}function oi(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)([]),[c,l]=(0,x.useState)(null),[u,d]=(0,x.useState)(``),[f,p]=(0,x.useState)(null),[m,h]=(0,x.useState)(``),[g,_]=(0,x.useState)(!1),v=(0,x.useRef)(null);(0,x.useEffect)(()=>{ti().then(()=>t(!0)).catch(e=>h(e.message))},[]);let y=async e=>{h(``),p(null),l(null),s([]);let t=new Uint8Array(await e.arrayBuffer());try{let n=ni(t);if(r(t),a(e.name),s(n),n.length>0){l(n[0].name);let e=ri(t,n[0]);d(e?b(e):``)}}catch(e){h(e.message)}},b=e=>{try{return new TextDecoder().decode(e)}catch{return``}},ee=e=>{e.preventDefault();let t=e.dataTransfer?.files[0];t&&y(t)},S=e=>{let t=e.target.files?.[0];t&&y(t)},C=e=>{l(e.name),p(null);let t=ri(n,e);d(t?b(t):`[binary — edit to replace]`)},te=async(e,t,n)=>{let r=ni(e);function i(e){return[e&255,e>>8&255]}function a(e){return[e&255,e>>8&255,e>>16&255,e>>24&255]}function o(e){let t=new Uint32Array(256);for(let e=0;e<256;e++){let n=e;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n}let n=4294967295;for(let r of e)n=t[(n^r)&255]^n>>>8;return(n^4294967295)>>>0}let s=[],c=[],l=0,u=0,d=new TextEncoder;for(let f of r){let r=d.encode(f.name),p=f.name===t?n:ri(e,f),m=o(p),h=new Uint8Array([80,75,3,4,...i(20),...i(0),...i(0),...i(0),...i(0),...a(m),...a(p.length),...a(p.length),...i(r.length),...i(0)]),g=new Uint8Array([80,75,1,2,...i(798),...i(20),...i(0),...i(0),...i(0),...i(0),...a(m),...a(p.length),...a(p.length),...i(r.length),...i(0),...i(0),...i(0),...i(0),...a(0),...a(l)]);s.push(h,r,p),c.push(g,r),l+=h.length+r.length+p.length,u+=g.length+r.length}let f=new Uint8Array([80,75,5,6,...i(0),...i(0),...i(r.length),...i(r.length),...a(u),...a(l),...i(0)]),p=[...s,...c,f],m=p.reduce((e,t)=>e+t.length,0),h=new Uint8Array(m),g=0;for(let e of p)h.set(e,g),g+=e.length;return h};return o.find(e=>e.name===c),(0,k.jsxs)(`div`,{className:`space-y-5`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{className:`font-mono text-lg text-terminal-green font-bold mb-1`,children:`zipzap — Live Demo`}),(0,k.jsx)(`p`,{className:`text-text-dim text-xs`,children:`Drop a ZIP file. Pick an entry. Edit it. See zipzap append vs full rebuild.`})]}),!n&&(0,k.jsxs)(`label`,{ref:v,onDrop:ee,onDragOver:e=>e.preventDefault(),className:`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border hover:border-accent-indigo/50 rounded-xl cursor-pointer transition-colors`,children:[(0,k.jsx)(`input`,{type:`file`,accept:`.zip`,className:`hidden`,onChange:S}),(0,k.jsx)(`span`,{className:`font-mono text-xs text-text-dim`,children:`drop a .zip file here`}),(0,k.jsx)(`span`,{className:`font-mono text-[10px] text-text-muted mt-1`,children:`or click to browse`})]}),m&&(0,k.jsx)(`p`,{className:`font-mono text-xs text-terminal-red`,children:m}),n&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`font-mono text-xs text-white`,children:i}),(0,k.jsxs)(`span`,{className:`font-mono text-[10px] text-text-dim ml-2`,children:[ii(n.length),` · `,o.length,` entries`]})]}),(0,k.jsx)(`button`,{onClick:()=>{r(null),s([]),p(null),h(``)},className:`font-mono text-[10px] text-text-dim hover:text-white transition-colors`,children:`✕ clear`})]}),(0,k.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{className:`font-mono text-[10px] text-text-muted mb-2 uppercase tracking-wider`,children:`Entries`}),(0,k.jsx)(`div`,{className:`space-y-1 max-h-48 overflow-y-auto pr-1`,children:o.map(e=>(0,k.jsxs)(`button`,{onClick:()=>C(e),className:`w-full text-left px-2.5 py-1.5 rounded font-mono text-[10px] transition-all ${c===e.name?`bg-accent-indigo/20 text-white border border-accent-indigo/40`:`text-text-dim hover:text-white hover:bg-white/5 border border-transparent`}`,children:[(0,k.jsx)(`div`,{className:`truncate`,children:e.name}),(0,k.jsxs)(`div`,{className:`text-[9px] text-text-muted mt-0.5`,children:[ii(e.uncompSize),` · `,ai(e.compression)]})]},e.name))})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`p`,{className:`font-mono text-[10px] text-text-muted mb-2 uppercase tracking-wider`,children:[`Edit content → `,(0,k.jsx)(`span`,{className:`text-accent-indigo`,children:c})]}),(0,k.jsx)(`textarea`,{className:`w-full h-44 bg-bg border border-border rounded-lg px-3 py-2 font-mono text-[10px] text-text resize-none focus:outline-none focus:border-accent-indigo/50 transition-colors`,value:u,onChange:e=>d(e.target.value),spellCheck:!1})]})]}),(0,k.jsx)(`button`,{onClick:async()=>{if(!(!e||!n||!c)){_(!0),p(null),h(``);try{let e=new TextEncoder().encode(u),t=performance.now(),r;for(let t=0;t<20;t++)r=Nr(n,c,e,void 0,void 0);let i=(performance.now()-t)/20,a=performance.now();for(let t=0;t<20;t++)await te(n,c,e);p({zzMs:i,jsMs:(performance.now()-a)/20,outSize:r.length,inSize:n.length,out:r})}catch(e){h(e.message)}_(!1)}},disabled:g||!e,className:`px-4 py-2 font-mono text-xs rounded border transition-all ${g?`border-terminal-amber text-terminal-amber opacity-60 cursor-not-allowed`:`border-terminal-green text-terminal-green hover:bg-terminal-green/10`}`,children:g?`▶ running…`:`▶ replace "${c}" with zipzap`}),f&&(0,k.jsxs)(`div`,{className:`border border-border rounded-xl p-4 space-y-3`,children:[(0,k.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 font-mono text-[11px]`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`text-text-muted block text-[9px] uppercase tracking-wider mb-1`,children:`zipzap (append)`}),(0,k.jsx)(`span`,{className:`text-terminal-green text-lg font-bold`,children:f.zzMs.toFixed(2)}),(0,k.jsx)(`span`,{className:`text-text-dim ml-1`,children:`ms`})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`text-text-muted block text-[9px] uppercase tracking-wider mb-1`,children:`JS full rebuild`}),(0,k.jsx)(`span`,{className:`text-terminal-red text-lg font-bold`,children:f.jsMs.toFixed(2)}),(0,k.jsx)(`span`,{className:`text-text-dim ml-1`,children:`ms`})]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`flex justify-between font-mono text-[10px] mb-1`,children:[(0,k.jsx)(`span`,{className:`text-text-dim`,children:`speedup`}),(0,k.jsxs)(`span`,{className:`text-terminal-green font-bold`,children:[(f.jsMs/f.zzMs).toFixed(1),`x faster`]})]}),(0,k.jsx)(`div`,{className:`h-2 bg-white/5 rounded overflow-hidden`,children:(0,k.jsx)(`div`,{className:`h-full bg-gradient-to-r from-terminal-green to-accent-indigo rounded transition-all duration-700`,style:{width:`${Math.min(98,f.zzMs/f.jsMs*100)}%`}})}),(0,k.jsxs)(`div`,{className:`flex justify-between font-mono text-[9px] text-text-muted mt-0.5`,children:[(0,k.jsx)(`span`,{children:`zipzap`}),(0,k.jsx)(`span`,{children:`JS rebuild`})]})]}),(0,k.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 pt-2 border-t border-border`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`font-mono text-[9px] text-text-muted uppercase tracking-wider block mb-1`,children:`zipzap peak memory`}),(0,k.jsxs)(`span`,{className:`font-mono text-[11px] text-terminal-green`,children:[`~`,ii(u.length+f.outSize*.02)]}),(0,k.jsx)(`span`,{className:`font-mono text-[9px] text-text-muted block mt-0.5`,children:`new entry + CD only`})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`font-mono text-[9px] text-text-muted uppercase tracking-wider block mb-1`,children:`JS rebuild peak memory`}),(0,k.jsxs)(`span`,{className:`font-mono text-[11px] text-terminal-red`,children:[`~`,ii(n.length*2)]}),(0,k.jsx)(`span`,{className:`font-mono text-[9px] text-text-muted block mt-0.5`,children:`full archive × 2 (in + out)`})]})]}),(0,k.jsxs)(`div`,{className:`flex items-center justify-between pt-2 border-t border-border`,children:[(0,k.jsxs)(`span`,{className:`font-mono text-[10px] text-text-dim`,children:[ii(n.length),` → `,ii(f.outSize),(0,k.jsxs)(`span`,{className:`text-text-muted`,children:[` (+`,ii(f.outSize-n.length),` appended block)`]})]}),(0,k.jsx)(`button`,{onClick:()=>{if(!f?.out)return;let e=new Blob([f.out],{type:`application/zip`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=i.replace(`.zip`,`-modified.zip`),t.click()},className:`font-mono text-[10px] text-accent-indigo hover:text-white border border-accent-indigo/40 hover:border-white/30 px-3 py-1.5 rounded transition-all`,children:`↓ download result`})]}),(0,k.jsx)(`p`,{className:`font-mono text-[9px] text-text-muted`,children:`avg of 20 runs · entry stored uncompressed · original entries untouched`})]})]})]})}var si=3,ci=3,li=3,ui=2,di=[[0,1,0,2],[0,1,1,3],[0,1,2,1],[1,0,0,4],[1,0,2,5],[1,2,0,3],[2,0,1,1],[2,1,0,2],[2,2,1,2]],fi=[[1,2],[3,1],[2,4]],pi=[[2,1],[1,3],[3,2]];function mi(e){let t={};return e.forEach(([e,n,r,i])=>{let a=`${e},${r}`;t[a]||(t[a]={i:e,k:r,entries:[]}),t[a].entries.push({j:n,v:i})}),Object.values(t).sort((e,t)=>e.i===t.i?e.k-t.k:e.i-t.i)}function hi(e,t){let n=[];return t.forEach(({i:t,k:r,entries:i})=>{e===`buffered`&&n.push({type:`cache`,i:t,k:r,label:`Load C[${r},:] into buffer`,cMemReads:ui}),i.forEach(({j:i,v:a})=>{for(let o=0;o<ui;o++)for(let s=0;s<ui;s++)n.push({type:`compute`,i:t,j:i,k:r,r2:o,r3:s,v:a,label:e===`naive`?`X(${t},${i},${r})×B[${i},${o}]×C[${r},${s}] → Y[${t},${o},${s}]`:`X(${t},${i},${r})×B[${i},${o}]×buf[${s}] → Y[${t},${o},${s}]`,product:a*(fi[i]?.[o]??0)*(pi[r]?.[s]??0),cMemReads:+(e===`naive`)})})}),n}function gi(){let[e,t]=(0,x.useState)(`naive`),[n,r]=(0,x.useState)(0),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(2),[c,l]=(0,x.useState)(!1),u=(0,x.useRef)(null),d=(0,x.useMemo)(()=>mi(di),[]),f=(0,x.useMemo)(()=>hi(`naive`,d),[d]),p=(0,x.useMemo)(()=>hi(`buffered`,d),[d]),m=e===`naive`?f:p,h=m.length,g=n>0?m[n-1]:null,{cReadsTotal:_,yOutput:v}=(0,x.useMemo)(()=>{let e=0,t=Array.from({length:si},()=>Array.from({length:ui},()=>Array(ui).fill(0)));return m.slice(0,n).forEach(n=>{e+=n.cMemReads,n.type===`compute`&&(t[n.i][n.r2][n.r3]+=n.product)}),{cReadsTotal:e,yOutput:t}},[m,n]),y=(0,x.useMemo)(()=>f.reduce((e,t)=>e+t.cMemReads,0),[f]),b=(0,x.useMemo)(()=>p.reduce((e,t)=>e+t.cMemReads,0),[p]),ee=y-b,S=g?`${g.i},${g.k}`:null,C=e===`buffered`&&g?.k!==void 0?pi[g.k]:null,te=Math.ceil(f.filter(e=>e.type===`compute`).length/o),ne=Math.ceil(p.filter(e=>e.type===`compute`).length/o),re=te>0?(te/ne).toFixed(2):`—`;return(0,x.useEffect)(()=>{r(0),a(!1)},[e,o]),(0,x.useEffect)(()=>{if(!i){clearInterval(u.current);return}return u.current=setInterval(()=>{r(e=>e>=h?(a(!1),e):e+1)},200),()=>clearInterval(u.current)},[i,h]),(0,k.jsxs)(`div`,{className:`space-y-5`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{className:`font-mono text-lg text-emerald-400 font-bold`,children:`TTMc: Tucker Tensor × Matrix Chain`}),(0,k.jsxs)(`p`,{className:`text-zinc-400 text-xs mt-1 leading-relaxed`,children:[`Computes Y(i,r₂,r₃) = Σ`,(0,k.jsx)(`sub`,{children:`j,k`}),` X(i,j,k)·B(j,r₂)·C(k,r₃) — contracting a 3D sparse tensor along two modes.`,` `,`Nonzeros sharing (i,k) form a `,(0,k.jsx)(`em`,{children:`fiber`}),`. Naively, C[k,:] is re-read from memory for every nonzero in the fiber.`,` `,(0,k.jsx)(`span`,{className:`text-cyan-400`,children:`Buffered mode`}),` loads it once per fiber into registers — no redundant memory reads.`]})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 p-3 rounded-lg border border-zinc-800 bg-zinc-900/60`,children:[[{key:`naive`,label:`✗ Naive`,cls:`bg-red-500/15 text-red-300 border-red-500/40`},{key:`buffered`,label:`✓ Buffered`,cls:`bg-emerald-500/15 text-emerald-300 border-emerald-500/40`}].map(n=>(0,k.jsx)(`button`,{onClick:()=>t(n.key),className:`px-3 py-1.5 font-mono text-xs rounded border font-medium transition-all ${e===n.key?n.cls:`border-zinc-700 text-zinc-400 hover:text-zinc-200`}`,children:n.label},n.key)),(0,k.jsx)(`select`,{value:o,onChange:e=>s(+e.target.value),className:`px-3 py-1.5 font-mono text-xs rounded border border-zinc-700 text-zinc-300 bg-zinc-800`,children:[1,2,4].map(e=>(0,k.jsxs)(`option`,{value:e,children:[e,` thread`,e>1?`s`:``]},e))}),(0,k.jsxs)(`div`,{className:`ml-auto flex items-center gap-1`,children:[(0,k.jsx)(`button`,{onClick:()=>r(e=>Math.max(0,e-1)),disabled:n===0,className:`w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm`,children:`◀`}),(0,k.jsx)(`button`,{onClick:()=>a(e=>!e),className:`px-3 h-7 font-mono text-xs rounded border font-medium ${i?`border-amber-500/50 text-amber-300 bg-amber-500/10`:`border-zinc-600 text-zinc-300 hover:border-zinc-400`}`,children:i?`⏸`:`▶`}),(0,k.jsx)(`button`,{onClick:()=>r(e=>Math.min(h,e+1)),disabled:n>=h,className:`w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm`,children:`▶`}),(0,k.jsx)(`button`,{onClick:()=>{r(0),a(!1)},className:`w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white text-sm`,children:`↺`})]}),(0,k.jsxs)(`span`,{className:`font-mono text-[10px] text-zinc-500`,children:[`step `,n,`/`,h]})]}),g?(0,k.jsxs)(`div`,{className:`rounded-lg border px-4 py-3 flex items-center gap-3 ${g.type===`cache`?`border-cyan-500/40 bg-cyan-500/5`:e===`naive`?`border-red-500/20 bg-red-500/5`:`border-emerald-500/20 bg-emerald-500/5`}`,children:[(0,k.jsx)(`span`,{className:`text-xl shrink-0`,children:g.type===`cache`?`📥`:e===`naive`?`⟳`:`⚡`}),(0,k.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,k.jsx)(`div`,{className:`font-mono text-xs text-white font-medium truncate`,children:g.label}),g.type===`compute`&&(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-500 mt-0.5`,children:[`= `,g.v,` × `,fi[g.j]?.[g.r2],` × `,pi[g.k]?.[g.r3],` = `,g.product]})]}),g.type===`compute`&&e===`naive`&&(0,k.jsx)(`span`,{className:`shrink-0 font-mono text-[9px] text-red-400 border border-red-500/30 px-2 py-0.5 rounded`,children:`+1 C mem read`}),g.type===`compute`&&e===`buffered`&&(0,k.jsx)(`span`,{className:`shrink-0 font-mono text-[9px] text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded`,children:`from buffer ✓`}),g.type===`cache`&&(0,k.jsxs)(`span`,{className:`shrink-0 font-mono text-[9px] text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded`,children:[`1 load → saves `,(di.filter(([,,e])=>e===g.k).length-1)*ui,` reads`]})]}):(0,k.jsx)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 font-mono text-xs text-zinc-500 text-center`,children:`Press ▶ to step through the computation`}),(0,k.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-400 font-bold mb-3`,children:[`SPARSE TENSOR X [`,si,`×`,ci,`×`,li,`] — `,di.length,` nonzeros`]}),(0,k.jsx)(`div`,{className:`space-y-2.5`,children:Array.from({length:li},(e,t)=>{let n=di.filter(([,,e])=>e===t);return(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`font-mono text-[9px] text-zinc-500 mb-1`,children:[`depth k=`,t]}),(0,k.jsx)(`div`,{className:`grid gap-1`,style:{gridTemplateColumns:`repeat(${ci}, 1fr)`},children:Array.from({length:si*ci},(e,r)=>{let i=Math.floor(r/ci),a=r%ci,o=n.find(([e,t])=>e===i&&t===a),s=S===`${i},${t}`;return(0,k.jsx)(`div`,{className:`h-9 flex flex-col items-center justify-center rounded text-[9px] font-mono transition-all ${g?.type===`compute`&&g.i===i&&g.j===a&&g.k===t?`bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/40 scale-105`:s&&o?`bg-indigo-500/30 border border-indigo-500/50 text-indigo-200`:s?`bg-indigo-500/5 border border-indigo-800/50 text-zinc-700`:o?`bg-zinc-800 border border-zinc-700 text-zinc-300`:`bg-zinc-900/40 text-zinc-800`}`,children:o?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:`font-bold leading-none`,children:o[3]}),(0,k.jsxs)(`span`,{className:`text-[7px] text-zinc-500`,children:[`(`,i,`,`,a,`,`,t,`)`]})]}):`·`},r)})})]},t)})}),S&&(0,k.jsxs)(`div`,{className:`mt-2 font-mono text-[9px] text-indigo-400 border-t border-zinc-800 pt-2`,children:[`Active fiber i=`,g?.i,`, k=`,g?.k,` —`,` `,di.filter(([e,,t])=>`${e},${t}`===S).length,` nonzero(s)`]})]}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3 space-y-4`,children:[(0,k.jsx)(`div`,{className:`font-mono text-[10px] text-zinc-400 font-bold`,children:`FACTOR MATRICES`}),(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-2`,children:[(0,k.jsx)(`span`,{className:`inline-block w-2 h-2 rounded bg-indigo-500`}),`B [`,ci,`×`,ui,`] — mode-j contraction`]}),(0,k.jsxs)(`div`,{className:`grid gap-1`,style:{gridTemplateColumns:`auto repeat(${ui}, 1fr)`},children:[(0,k.jsx)(`div`,{className:`font-mono text-[9px] text-zinc-600`}),Array.from({length:ui},(e,t)=>(0,k.jsxs)(`div`,{className:`font-mono text-[9px] text-zinc-500 text-center`,children:[`r₂=`,t]},t)),fi.map((e,t)=>[(0,k.jsxs)(`div`,{className:`font-mono text-[9px] text-zinc-500 flex items-center pr-1`,children:[`j=`,t]},`jl${t}`),...e.map((e,n)=>(0,k.jsx)(`div`,{className:`h-10 flex items-center justify-center rounded font-mono text-base font-bold transition-all ${g?.type===`compute`&&g.j===t&&g.r2===n?`bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-105`:g?.type===`compute`&&g.j===t?`bg-indigo-500/20 border border-indigo-500/40 text-indigo-300`:`bg-zinc-800/60 border border-zinc-700/50 text-zinc-300`}`,children:e},`${t}${n}`))])]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-2`,children:[(0,k.jsx)(`span`,{className:`inline-block w-2 h-2 rounded bg-cyan-500`}),`C [`,li,`×`,ui,`] — mode-k contraction`,e===`buffered`&&(0,k.jsx)(`span`,{className:`text-[9px] text-cyan-400`,children:`(buffered per fiber)`})]}),(0,k.jsxs)(`div`,{className:`grid gap-1`,style:{gridTemplateColumns:`auto repeat(${ui}, 1fr)`},children:[(0,k.jsx)(`div`,{className:`font-mono text-[9px] text-zinc-600`}),Array.from({length:ui},(e,t)=>(0,k.jsxs)(`div`,{className:`font-mono text-[9px] text-zinc-500 text-center`,children:[`r₃=`,t]},t)),pi.map((t,n)=>[(0,k.jsxs)(`div`,{className:`font-mono text-[9px] text-zinc-500 flex items-center pr-1`,children:[`k=`,n]},`kl${n}`),...t.map((t,r)=>{let i=g?.type===`cache`&&g.k===n,a=g?.type===`compute`&&g.k===n&&g.r3===r,o=e===`buffered`&&g?.type===`compute`&&g.k===n;return(0,k.jsx)(`div`,{className:`h-10 flex items-center justify-center rounded font-mono text-base font-bold transition-all ${i?`bg-cyan-400 text-zinc-900 shadow-lg shadow-cyan-500/30 scale-105`:a?`bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105`:o?`bg-cyan-500/20 border border-cyan-500/40 text-cyan-300`:`bg-zinc-800/60 border border-zinc-700/50 text-zinc-300`}`,children:t},`${n}${r}`)})])]})]})]}),(0,k.jsxs)(`div`,{className:`space-y-3`,children:[(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3`,children:[(0,k.jsx)(`div`,{className:`font-mono text-[10px] text-zinc-400 font-bold mb-3`,children:`C MATRIX MEMORY READS`}),(0,k.jsxs)(`div`,{className:`mb-2`,children:[(0,k.jsxs)(`div`,{className:`flex justify-between font-mono text-[10px] mb-1`,children:[(0,k.jsx)(`span`,{className:`text-zinc-500`,children:`reads so far`}),(0,k.jsxs)(`span`,{className:e===`naive`?`text-red-400`:`text-emerald-400`,children:[_,` / `,e===`naive`?y:b]})]}),(0,k.jsx)(`div`,{className:`h-2.5 bg-zinc-800 rounded overflow-hidden`,children:(0,k.jsx)(`div`,{className:`h-full rounded transition-all duration-200 ${e===`naive`?`bg-red-500/70`:`bg-emerald-500/70`}`,style:{width:`${Math.min(100,_/(e===`naive`?y:b)*100)}%`}})})]}),(0,k.jsxs)(`div`,{className:`grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800`,children:[(0,k.jsxs)(`div`,{className:`text-center`,children:[(0,k.jsx)(`div`,{className:`font-mono text-lg font-bold text-red-400`,children:y}),(0,k.jsx)(`div`,{className:`font-mono text-[8px] text-zinc-600`,children:`naive total`})]}),(0,k.jsxs)(`div`,{className:`text-center`,children:[(0,k.jsx)(`div`,{className:`font-mono text-lg font-bold text-emerald-400`,children:b}),(0,k.jsx)(`div`,{className:`font-mono text-[8px] text-zinc-600`,children:`buffered total`})]})]}),(0,k.jsxs)(`div`,{className:`text-center pt-2 border-t border-zinc-800 mt-2`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-xl font-bold text-amber-400`,children:[ee,` saved`]}),(0,k.jsxs)(`div`,{className:`font-mono text-[8px] text-zinc-500`,children:[(ee/y*100).toFixed(0),`% fewer C reads`]})]})]}),e===`buffered`&&(0,k.jsxs)(`div`,{className:`rounded-lg border p-3 transition-all ${C?`border-cyan-500/30 bg-cyan-500/5`:`border-zinc-800 bg-zinc-900/30`}`,children:[(0,k.jsx)(`div`,{className:`font-mono text-[10px] text-cyan-400 font-bold mb-2`,children:`REGISTER BUFFER`}),C?(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`font-mono text-[9px] text-zinc-500 mb-1.5`,children:[`C[k=`,g?.k,`,:] loaded`]}),(0,k.jsx)(`div`,{className:`flex gap-2`,children:C.map((e,t)=>(0,k.jsxs)(`div`,{className:`flex-1 h-10 flex flex-col items-center justify-center rounded border font-mono transition-all ${g?.r3===t?`bg-cyan-500/30 border-cyan-500/60 text-cyan-200`:`bg-cyan-500/10 border-cyan-500/20 text-cyan-300`}`,children:[(0,k.jsx)(`span`,{className:`text-sm font-bold`,children:e}),(0,k.jsxs)(`span`,{className:`text-[8px] text-zinc-600`,children:[`r₃=`,t]})]},t))})]}):(0,k.jsx)(`div`,{className:`font-mono text-[10px] text-zinc-600 italic`,children:`empty`})]}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3`,children:[(0,k.jsx)(`div`,{className:`font-mono text-[10px] text-zinc-400 font-bold mb-2`,children:`OUTPUT Y[i,r₂,r₃]`}),v.map((e,t)=>(0,k.jsxs)(`div`,{className:`mb-2`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-[9px] text-zinc-600 mb-0.5`,children:[`i=`,t]}),(0,k.jsx)(`div`,{className:`grid gap-1`,style:{gridTemplateColumns:`repeat(${ui*ui}, 1fr)`},children:e.flatMap((e,n)=>e.map((e,r)=>(0,k.jsxs)(`div`,{className:`h-9 flex flex-col items-center justify-center rounded font-mono transition-all ${g?.type===`compute`&&g.i===t&&g.r2===n&&g.r3===r?`bg-amber-500/40 border border-amber-500/60 text-amber-200 scale-105`:e>0?`bg-amber-500/10 border border-amber-500/20 text-amber-300`:`bg-zinc-900 border border-zinc-800 text-zinc-700`}`,children:[(0,k.jsx)(`span`,{className:`text-xs font-bold`,children:e>0?e:`·`}),e>0&&(0,k.jsxs)(`span`,{className:`text-[7px] text-zinc-600`,children:[n,`,`,r]})]},`${n}${r}`)))})]},t))]})]})]}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-900/30 p-4`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-xs text-zinc-400 font-bold mb-3 flex items-center gap-3`,children:[`WALL-CLOCK (`,o,` thread`,o>1?`s`:``,`)`,(0,k.jsxs)(`span`,{className:`text-emerald-400 font-bold text-sm`,children:[re,`× speedup`]}),(0,k.jsx)(`span`,{className:`text-zinc-600 font-normal text-[10px]`,children:`real experiment: 2.87× on 4T, 2048³ tensor`})]}),[{label:`✗ Naive`,ticks:te,color:`bg-red-500/60`,text:`text-red-400`},{label:`✓ Buffered`,ticks:ne,color:`bg-emerald-500/60`,text:`text-emerald-400`}].map(e=>(0,k.jsxs)(`div`,{className:`flex items-center gap-3 mb-2`,children:[(0,k.jsx)(`span`,{className:`font-mono text-[10px] text-zinc-400 w-24 shrink-0`,children:e.label}),(0,k.jsx)(`div`,{className:`flex-1 h-3 bg-zinc-800 rounded overflow-hidden`,children:(0,k.jsx)(`div`,{className:`h-full rounded ${e.color}`,style:{width:`${e.ticks/te*100}%`}})}),(0,k.jsxs)(`span`,{className:`font-mono text-[10px] ${e.text} w-24 text-right`,children:[e.ticks,` compute steps`]})]},e.label))]}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 overflow-hidden`,children:[(0,k.jsxs)(`button`,{onClick:()=>l(e=>!e),className:`w-full flex items-center justify-between px-4 py-2.5 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors`,children:[(0,k.jsx)(`span`,{children:`Research context`}),(0,k.jsx)(`span`,{children:c?`▲`:`▼`})]}),c&&(0,k.jsxs)(`div`,{className:`border-t border-zinc-800 px-4 py-3 space-y-1 font-mono text-[11px] text-zinc-500`,children:[(0,k.jsx)(`p`,{children:`• Input: 2048³ tensor, ~1% density, R=S=60 — Tucker2 decomposition (compressing modes 2 and 3)`}),(0,k.jsx)(`p`,{children:`• CSF (Compressed Sparse Fiber) format groups nonzeros by fiber for cache-efficient iteration`}),(0,k.jsx)(`p`,{children:`• 7 algorithm variants across 3 mode orderings — buffered wins on mode-1 chain`}),(0,k.jsx)(`p`,{children:`• Bottleneck at high thread count: atomic updates on shared Y cause lock contention, not memory`}),(0,k.jsx)(`p`,{children:`• C++ / OpenMP; validated on FROSTT public tensor benchmarks`})]})]})]})}var _i=12;function vi(e,t){let n=e,r=n*n,i=Array.from({length:t},()=>[]);for(let e=0;e<n;e++){let a=e%t;for(let t=0;t<n;t++)for(let o=0;o<n;o++)i[a].push({addr:0+e*n+o,src:`A`,row:e,col:o,cRow:e,cCol:t}),i[a].push({addr:r+o*n+t,src:`B`,row:o,col:t,cRow:e,cCol:t})}return i}function yi(e,t){let n=Array(_i).fill(null).map(()=>({addr:-1,valid:!1,prefetched:!1,used:!1,src:``,warp:-1,order:0})),r=_i,i=0,a=0,o=0,s=0,c={};for(let e=0;e<t.length;e++)c[e]={A:{last:-1,stride:0,conf:0},B:{last:-1,stride:0,conf:0}};let l=()=>{let e=n.findIndex(e=>!e.valid);return e>=0?e:n.reduce((e,t,n,r)=>t.order<r[e].order?n:e,0)},u=Math.max(0,...t.map(e=>e.length)),d=[];for(let f=0;f<u;f++){let u=[];for(let d=0;d<t.length;d++){if(f>=t[d].length){u.push({warp:d,idle:!0});continue}let p=t[d][f],{addr:m,src:h}=p,g=c[d][h];if(g.last>=0){let e=m-g.last;e===g.stride&&e!==0?g.conf=Math.min(g.conf+1,4):(g.stride=e,g.conf=1)}g.last=m;let _=n.findIndex(e=>e.valid&&e.addr===m),v=`miss`,y=null;if(_>=0)v=n[_].prefetched&&!n[_].used?`pfhit`:`hit`,v===`pfhit`&&o++,i++,n[_].used=!0,n[_].prefetched=!1,n[_].order=r++;else{a++;let t=l();if(n[t].valid&&!n[t].used&&s++,n[t]={addr:m,valid:!0,prefetched:!1,used:!0,src:h,warp:d,order:r++},e===`nextline`?y=m+1:e===`strided`&&g.conf>=2&&(y=m+g.stride),y!=null&&y>=0&&!n.some(e=>e.valid&&e.addr===y)){let e=l();n[e].valid&&!n[e].used&&s++,n[e]={addr:y,valid:!0,prefetched:!0,used:!1,src:`PF`,warp:d,order:r++}}}u.push({warp:d,access:p,result:v,prefetchAddr:y,strideConf:g.conf})}d.push({tick:f,events:u,cache:n.map(e=>({...e})),stats:{hits:i,misses:a,pfHits:o,deadEvictions:s}})}return d}function bi(){let[e,t]=(0,x.useState)(`none`),[n,r]=(0,x.useState)(0),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(4),[c,l]=(0,x.useState)(2),[u,d]=(0,x.useState)(!1),f=(0,x.useRef)(null),p=(0,x.useMemo)(()=>vi(o,c),[o,c]),m=(0,x.useMemo)(()=>yi(e,p),[e,p]),h=m.length,g=(0,x.useMemo)(()=>{let e=e=>{let t=yi(e,p);return t.length?t[t.length-1].stats:{hits:0,misses:0,pfHits:0,deadEvictions:0}};return{none:e(`none`),nextline:e(`nextline`),strided:e(`strided`)}},[p]);(0,x.useEffect)(()=>{r(0),a(!1)},[e,o,c]),(0,x.useEffect)(()=>{if(!i){clearInterval(f.current);return}return f.current=setInterval(()=>{r(e=>e>=h?(a(!1),e):e+1)},150),()=>clearInterval(f.current)},[i,h]);let _=n>0?m[n-1]:null,v=_?_.cache:Array(_i).fill({addr:-1,valid:!1,prefetched:!1,used:!1,src:``}),y=_?.stats??{hits:0,misses:0,pfHits:0,deadEvictions:0},b=y.hits+y.misses,ee=b>0?(y.hits/b*100).toFixed(0):0,S=o,C=(0,x.useMemo)(()=>{let e=new Set;return m.slice(0,n).forEach(t=>t.events.forEach(t=>{t.idle||e.add(t.access.addr)})),e},[m,n]),te=(0,x.useMemo)(()=>{if(!_)return new Set;let e=new Set;return _.events.forEach(t=>{t.idle||e.add(t.access.addr)}),e},[_]),ne=(0,x.useMemo)(()=>new Set(v.filter(e=>e.valid&&e.prefetched).map(e=>e.addr)),[v]),re=e=>{let t=e.hits+e.misses;return t>0?+(e.hits/t*100).toFixed(1):0},w={none:`text-red-400`,nextline:`text-blue-400`,strided:`text-emerald-400`}[e];return(0,k.jsxs)(`div`,{className:`space-y-5`,children:[(0,k.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{className:`font-mono text-lg text-emerald-400 font-bold`,children:`DAP: GPU Cache Prefetching`}),(0,k.jsxs)(`p`,{className:`text-zinc-400 text-xs mt-0.5`,children:[`Matrix multiply C = A×B. A is read row-wise (stride 1 — easy). B is read column-wise (stride `,S,` — causes misses). Toggle prefetch strategies to see what helps.`]})]}),(0,k.jsxs)(`div`,{className:`shrink-0 text-center rounded-lg px-4 py-2 border transition-all ${e===`none`?`bg-red-500/10 border-red-500/30`:e===`nextline`?`bg-blue-500/10 border-blue-500/30`:`bg-emerald-500/10 border-emerald-500/30`}`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-2xl font-bold ${w}`,children:[ee,`%`]}),(0,k.jsx)(`div`,{className:`font-mono text-[9px] text-zinc-500 uppercase tracking-wider`,children:`hit rate`})]})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[[{key:`none`,label:`No Prefetch`,cls:`border-red-500/50 text-red-300 bg-red-500/10`},{key:`nextline`,label:`→ Next-Line`,cls:`border-blue-500/50 text-blue-300 bg-blue-500/10`},{key:`strided`,label:`⇉ Strided (DAP)`,cls:`border-emerald-500/50 text-emerald-300 bg-emerald-500/10`}].map(n=>(0,k.jsx)(`button`,{onClick:()=>t(n.key),className:`px-3 py-1.5 font-mono text-xs rounded-lg border font-medium transition-all ${e===n.key?n.cls:`border-zinc-800 text-zinc-400 hover:text-white`}`,children:n.label},n.key)),(0,k.jsx)(`select`,{value:o,onChange:e=>s(+e.target.value),className:`px-3 py-1.5 font-mono text-xs rounded-lg border border-zinc-800 text-zinc-400 bg-transparent`,children:[3,4,5].map(e=>(0,k.jsxs)(`option`,{value:e,children:[e,`×`,e]},e))}),(0,k.jsx)(`select`,{value:c,onChange:e=>l(+e.target.value),className:`px-3 py-1.5 font-mono text-xs rounded-lg border border-zinc-800 text-zinc-400 bg-transparent`,children:[1,2,3,4].map(e=>(0,k.jsxs)(`option`,{value:e,children:[e,`W`]},e))}),(0,k.jsxs)(`div`,{className:`ml-auto flex items-center gap-1`,children:[(0,k.jsx)(`button`,{onClick:()=>r(e=>Math.max(0,e-1)),disabled:n===0,className:`w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 text-xs`,children:`‹`}),(0,k.jsx)(`button`,{onClick:()=>a(e=>!e),className:`px-3 h-7 font-mono text-xs rounded border transition-all ${i?`border-amber-500/50 text-amber-300 bg-amber-500/10`:`border-zinc-800 text-zinc-400 hover:text-white`}`,children:i?`⏸`:`▶`}),(0,k.jsx)(`button`,{onClick:()=>r(e=>Math.min(h,e+1)),disabled:n>=h,className:`w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 text-xs`,children:`›`}),(0,k.jsx)(`button`,{onClick:()=>{r(0),a(!1)},className:`w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white text-xs`,children:`↺`})]})]}),(0,k.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-3`,children:[(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-sm bg-indigo-500`}),`Matrix A `,(0,k.jsx)(`span`,{className:`text-zinc-500`,children:`stride 1 ✓`})]}),(0,k.jsx)(`div`,{className:`grid gap-1`,style:{gridTemplateColumns:`repeat(${S}, 1fr)`},children:Array.from({length:S*S},(e,t)=>{let n=t,r=te.has(n)&&_?.events.some(e=>!e.idle&&e.access.src===`A`&&e.access.addr===n),i=ne.has(n),a=C.has(n);return(0,k.jsx)(`div`,{className:`aspect-square rounded flex items-center justify-center font-mono text-[9px] transition-all duration-100 ${r?`bg-indigo-500 text-white scale-110 shadow-lg shadow-indigo-500/30`:i?`bg-violet-500/30 border border-violet-500/50 text-violet-300`:a?`bg-indigo-500/20 text-indigo-400`:`bg-white/5 text-zinc-500`}`,children:n},t)})}),(0,k.jsx)(`p`,{className:`font-mono text-[9px] text-zinc-500 mt-2`,children:`Sequential reads → cache friendly`})]}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-sm bg-cyan-500`}),`Matrix B `,(0,k.jsxs)(`span`,{className:`text-red-400/80`,children:[`stride `,S,` ✗`]})]}),(0,k.jsx)(`div`,{className:`grid gap-1`,style:{gridTemplateColumns:`repeat(${S}, 1fr)`},children:Array.from({length:S*S},(e,t)=>{let n=S*S+t,r=te.has(n)&&_?.events.some(e=>!e.idle&&e.access.src===`B`&&e.access.addr===n),i=ne.has(n),a=C.has(n);return(0,k.jsx)(`div`,{className:`aspect-square rounded flex items-center justify-center font-mono text-[9px] transition-all duration-100 ${r?`bg-cyan-500 text-white scale-110 shadow-lg shadow-cyan-500/30`:i?`bg-violet-500/30 border border-violet-500/50 text-violet-300`:a?`bg-cyan-500/20 text-cyan-400`:`bg-white/5 text-zinc-500`}`,children:n},t)})}),(0,k.jsxs)(`p`,{className:`font-mono text-[9px] text-zinc-500 mt-2`,children:[`Column access jumps by `,S,` → misses`]})]}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-500 mb-2`,children:[`L1 Cache (`,_i,` lines, LRU)`]}),(0,k.jsx)(`div`,{className:`space-y-1`,children:v.map((e,t)=>{let n=_?.events.find(t=>!t.idle&&t.access?.addr===e.addr);return(0,k.jsxs)(`div`,{className:`flex items-center gap-1.5 px-2 py-1 rounded text-[9px] font-mono border transition-all ${n?.result===`hit`?`border-emerald-500/60 bg-emerald-500/10`:n?.result===`pfhit`?`border-blue-500/60 bg-blue-500/10`:n?.result===`miss`?`border-red-500/40 bg-red-500/5`:e.prefetched?`border-violet-500/30 bg-violet-500/5`:e.valid&&!e.used?`border-amber-800/20 bg-amber-950/5`:e.valid?`border-white/10 bg-white/3`:`border-white/5`}`,children:[(0,k.jsxs)(`span`,{className:`text-zinc-500 w-4`,children:[`L`,t]}),e.valid?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:e.src===`A`?`text-indigo-300`:e.src===`B`?`text-cyan-300`:`text-violet-300`,children:e.addr}),(0,k.jsxs)(`span`,{className:`ml-auto`,children:[n?.result===`hit`&&(0,k.jsx)(`span`,{className:`text-emerald-400`,children:`HIT`}),n?.result===`pfhit`&&(0,k.jsx)(`span`,{className:`text-blue-400`,children:`PF✓`}),n?.result===`miss`&&(0,k.jsx)(`span`,{className:`text-red-400`,children:`MISS`}),!n&&e.prefetched&&(0,k.jsx)(`span`,{className:`text-violet-400`,children:`PF`}),!n&&!e.prefetched&&!e.used&&(0,k.jsx)(`span`,{className:`text-amber-500`,children:`☠`}),!n&&!e.prefetched&&e.used&&(0,k.jsx)(`span`,{className:`text-emerald-600`,children:`✓`})]})]}):(0,k.jsx)(`span`,{className:`text-zinc-500`,children:`—`})]},t)})})]})]}),(0,k.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-3`,children:[{label:`Hits`,val:y.hits,color:`text-emerald-400`},{label:`Misses`,val:y.misses,color:`text-red-400`},{label:`PF Hits`,val:y.pfHits,color:`text-blue-400`},{label:`Dead blocks`,val:y.deadEvictions,color:`text-amber-400`}].map(e=>(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-3 text-center`,children:[(0,k.jsx)(`div`,{className:`font-mono text-xl font-bold ${e.color}`,children:e.val}),(0,k.jsx)(`div`,{className:`font-mono text-[9px] text-zinc-500 mt-0.5`,children:e.label})]},e.label))}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 bg-zinc-950/80 p-4`,children:[(0,k.jsxs)(`div`,{className:`font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-3`,children:[`Strategy comparison — `,S,`×`,S,` complete run`]}),(0,k.jsx)(`div`,{className:`space-y-2`,children:[{key:`none`,label:`No Prefetch`,color:`#ef4444`,s:g.none},{key:`nextline`,label:`→ Next-Line`,color:`#3b82f6`,s:g.nextline},{key:`strided`,label:`⇉ Strided (DAP)`,color:`#10b981`,s:g.strided}].map(({key:n,label:r,color:i,s:a})=>{let o=re(a),s=n===e;return(0,k.jsxs)(`div`,{onClick:()=>t(n),className:`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${s?`bg-white/5 ring-1`:`hover:bg-white/3`}`,style:s?{ringColor:i+`40`}:{},children:[(0,k.jsx)(`span`,{className:`font-mono text-[11px] w-28 shrink-0`,style:{color:i},children:r}),(0,k.jsx)(`div`,{className:`flex-1 h-2.5 bg-white/5 rounded overflow-hidden`,children:(0,k.jsx)(`div`,{className:`h-full rounded transition-all duration-700`,style:{width:`${o}%`,backgroundColor:i}})}),(0,k.jsxs)(`span`,{className:`font-mono text-[11px] w-10 text-right`,style:{color:i},children:[o,`%`]}),a.pfHits>0&&(0,k.jsxs)(`span`,{className:`font-mono text-[9px] text-blue-400 w-16 shrink-0`,children:[a.pfHits,` pf hits`]}),g.none.misses>0&&a.deadEvictions>g.none.deadEvictions&&(0,k.jsxs)(`span`,{className:`font-mono text-[9px] text-amber-400 w-20 shrink-0`,children:[`+`,a.deadEvictions-g.none.deadEvictions,` dead ☠`]})]},n)})}),g.none.misses>0&&(0,k.jsxs)(`p`,{className:`font-mono text-[10px] text-zinc-400 mt-3 pt-3 border-t border-zinc-800`,children:[`Next-line often `,(0,k.jsx)(`span`,{className:`text-red-400`,children:`hurts`}),` for B (wrong stride, pollutes cache). Strided learns stride=`,S,` after 2 accesses → `,(0,k.jsxs)(`span`,{className:`text-emerald-400`,children:[((1-g.strided.misses/g.none.misses)*100).toFixed(0),`% fewer misses`]}),`.`]})]}),(0,k.jsxs)(`div`,{className:`rounded-lg border border-zinc-800 overflow-hidden`,children:[(0,k.jsxs)(`button`,{onClick:()=>d(e=>!e),className:`w-full flex items-center justify-between px-4 py-3 font-mono text-xs text-zinc-400 hover:text-white transition-colors`,children:[(0,k.jsx)(`span`,{children:`Research context`}),(0,k.jsx)(`span`,{children:u?`▲`:`▼`})]}),u&&(0,k.jsxs)(`div`,{className:`border-t border-zinc-800 px-4 py-3 space-y-1 font-mono text-[11px] text-zinc-400`,children:[(0,k.jsx)(`p`,{children:`• Real system: MGPUsim with 64 CUs, L1V 16KB 4-way, L2 256KB 16-way`}),(0,k.jsxs)(`p`,{children:[`• Counter-intuitive: `,(0,k.jsx)(`span`,{className:`text-red-300`,children:`throughput decreased`}),` despite higher hit rate — L2 bandwidth saturated from 64 CUs all prefetching`]}),(0,k.jsxs)(`p`,{children:[`• `,(0,k.jsx)(`span`,{className:`text-amber-300`,children:`>90% dead blocks at L2`}),` — most fetched lines evicted before any reuse`]}),(0,k.jsx)(`p`,{children:`• MSHR deadlocks: prefetch requests fill Miss Status Holding Registers → resolved via priority queuing`}),(0,k.jsx)(`p`,{children:`• 32% cache miss reduction achieved on targeted benchmarks`})]})]})]})}var xi=[{id:`zip`,label:`WASM Zip`},{id:`ttmc`,label:`TTMc`},{id:`prefetch`,label:`DAP Prefetch`}];function Si(){let[e,t]=(0,x.useState)(`zip`),{ref:n,visible:r}=Tr(.05);return(0,k.jsx)(Er,{id:`interactive`,children:(0,k.jsxs)(`div`,{ref:n,className:`transition-all duration-500 ${r?`opacity-100 translate-y-0`:`opacity-0 translate-y-4`}`,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text mb-2`,children:`Interactive Demos`}),(0,k.jsx)(`p`,{className:`text-xs text-text-secondary mb-8 max-w-lg`,children:`Live visualizations from research. TTMc: parallel sparse tensor decomposition (C++/OpenMP). DAP: GPU cache prefetching as built in MGPUsim (Go).`}),(0,k.jsx)(`div`,{className:`flex gap-1 mb-6 border-b border-border`,children:xi.map(n=>(0,k.jsx)(`button`,{onClick:()=>t(n.id),className:`relative text-xs px-4 py-2.5 transition-all duration-200 -mb-px ${e===n.id?`text-text border-b-2 border-current font-medium`:`text-text-muted hover:text-text-secondary border-b-2 border-transparent`}`,children:n.label},n.id))}),(0,k.jsxs)(`div`,{className:`panel-translucent rounded-lg p-4 sm:p-6 md:p-8 h-[400px] sm:h-[500px] overflow-y-auto shadow-2xl shadow-black/30`,children:[e===`zip`&&(0,k.jsx)(oi,{}),e===`ttmc`&&(0,k.jsx)(gi,{}),e===`prefetch`&&(0,k.jsx)(bi,{})]})]})})}var Ci=`---
title: Building This Website
date: 2026-06-27
description: How I built this website
tags:
  - meta
  - wiki
image:
---
I have tried multiple times before to actually get a portfolio website up and running, but every time I ended up abandoning the project. Sometimes I got too ambitious and started a complex 3D project in hopes to build something like the F1 driver [Lando Norris's](https://landonorris.com/) website. Other times I just could not figure out what would make _my_ portfolio different from the millions out there. But most of the time, it was just me procrastinating - I'll make it after this exam, I'll make it before the internship season starts, I'll make it right before the placements, I'll make it after I am done revising DSA for my job hunt and so on. 

So this time, I finally decided to build and deploy it, regardless of how it looks and what I showcase on it. The version of my portfolio and blog you are looking at currently is probably after multiple iterations of the original one that I just forced myself to post. 

Over time I realised that the main function of this website is for me to try new things out. Initially I did not have a blog section at all, it was just my resume but in a website format.
`,wi=`---
title: Hello, Blog
date: 2026-06-23
description: First post. Why I added a blog to my portfolio.
tags: meta
image: hello-world.webp
---

Hello World,
Motivated by the fast paced changes that the tech world is witnessing right now, I have decided to start my own blog. I do not know right now what I will be posting here, but it will be along the lines of tech, the things that I am learning right now and some of my personal opinions about random things, and more (If I get to do more, then why not)
Let's have fun together.
`;function Ti(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ei=Ti();function Di(e){Ei=e}var Oi={exec:()=>null};function ki(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function j(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(M.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Ai=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),M={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:ki(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:ki(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:ki(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:ki(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:ki(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:ki(e=>RegExp(`^ {0,${e}}>`))},ji=/^(?:[ \t]*(?:\n|$))+/,Mi=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ni=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Pi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Fi=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ii=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Li=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ri=j(Li).replace(/bull/g,Ii).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),zi=j(Li).replace(/bull/g,Ii).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),N=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,P=/^[^\n]+/,Bi=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Vi=j(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Bi).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Hi=j(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ii).getRegex(),Ui=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Wi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Gi=j(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Wi).replace(`tag`,Ui).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ki=j(N).replace(`hr`,Pi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ui).getRegex(),qi={blockquote:j(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Ki).getRegex(),code:Mi,def:Vi,fences:Ni,heading:Fi,hr:Pi,html:Gi,lheading:Ri,list:Hi,newline:ji,paragraph:Ki,table:Oi,text:P},Ji=j(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Pi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ui).getRegex(),Yi={...qi,lheading:zi,table:Ji,paragraph:j(N).replace(`hr`,Pi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ji).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ui).getRegex()},Xi={...qi,html:j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Wi).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Oi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:j(N).replace(`hr`,Pi).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Ri).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Zi=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Qi=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$i=/^( {2,}|\\)\n(?!\s*$)/,ea=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ta=/[\p{P}\p{S}]/u,na=/[\s\p{P}\p{S}]/u,ra=/[^\s\p{P}\p{S}]/u,ia=j(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,na).getRegex(),aa=/(?!~)[\p{P}\p{S}]/u,oa=/(?!~)[\s\p{P}\p{S}]/u,sa=/(?:[^\s\p{P}\p{S}]|~)/u,ca=j(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Ai?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),la=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ua=j(la,`u`).replace(/punct/g,ta).getRegex(),da=j(la,`u`).replace(/punct/g,aa).getRegex(),F=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,fa=j(F,`gu`).replace(/notPunctSpace/g,ra).replace(/punctSpace/g,na).replace(/punct/g,ta).getRegex(),pa=j(F,`gu`).replace(/notPunctSpace/g,sa).replace(/punctSpace/g,oa).replace(/punct/g,aa).getRegex(),ma=j(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,ra).replace(/punctSpace/g,na).replace(/punct/g,ta).getRegex(),ha=j(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,ta).getRegex(),ga=j(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,ra).replace(/punctSpace/g,na).replace(/punct/g,ta).getRegex(),_a=j(/\\(punct)/,`gu`).replace(/punct/g,ta).getRegex(),va=j(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ya=j(Wi).replace(`(?:-->|$)`,`-->`).getRegex(),ba=j(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,ya).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xa=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Sa=j(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,xa).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ca=j(/^!?\[(label)\]\[(ref)\]/).replace(`label`,xa).replace(`ref`,Bi).getRegex(),wa=j(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Bi).getRegex(),Ta=j(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Ca).replace(`nolink`,wa).getRegex(),Ea=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Da={_backpedal:Oi,anyPunctuation:_a,autolink:va,blockSkip:ca,br:$i,code:Qi,del:Oi,delLDelim:Oi,delRDelim:Oi,emStrongLDelim:ua,emStrongRDelimAst:fa,emStrongRDelimUnd:ma,escape:Zi,link:Sa,nolink:wa,punctuation:ia,reflink:Ca,reflinkSearch:Ta,tag:ba,text:ea,url:Oi},Oa={...Da,link:j(/^!?\[(label)\]\((.*?)\)/).replace(`label`,xa).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,xa).getRegex()},ka={...Da,emStrongRDelimAst:pa,emStrongLDelim:da,delLDelim:ha,delRDelim:ga,url:j(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Ea).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:j(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Ea).getRegex()},Aa={...ka,br:j($i).replace(`{2,}`,`*`).getRegex(),text:j(ka.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},ja={normal:qi,gfm:Yi,pedantic:Xi},Ma={normal:Da,gfm:ka,breaks:Aa,pedantic:Oa},Na={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Pa=e=>Na[e];function Fa(e,t){if(t){if(M.escapeTest.test(e))return e.replace(M.escapeReplace,Pa)}else if(M.escapeTestNoEncode.test(e))return e.replace(M.escapeReplaceNoEncode,Pa);return e}function Ia(e){try{e=encodeURI(e).replace(M.percentDecode,`%`)}catch{return null}return e}function La(e,t){let n=e.replace(M.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(M.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(M.slashPipe,`|`);return n}function Ra(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function za(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&M.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Ba(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Va(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Ha(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Ua(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Wa=class{options;rules;lexer;constructor(e){this.options=e||Ei}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:za(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ua(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Ra(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Ra(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Ra(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Ra(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Va(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=za(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Ra(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=La(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Ra(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(La(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Ra(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Ra(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Ba(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Ha(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Ha(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Ga=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ei,this.options.tokenizer=this.options.tokenizer||new Wa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:M,block:ja.normal,inline:Ma.normal};this.options.pedantic?(t.block=ja.pedantic,t.inline=Ma.pedantic):this.options.gfm&&(t.block=ja.gfm,this.options.breaks?t.inline=Ma.breaks:t.inline=Ma.gfm),this.tokenizer.rules=t}static get rules(){return{block:ja,inline:Ma}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(M.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(M.tabCharGlobal,`    `).replace(M.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Ka=class{options;parser;constructor(e){this.options=e||Ei}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(M.notSpaceStart)?.[0],i=e.replace(M.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Fa(r)+`">`+(n?i:Fa(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Fa(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Fa(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Ia(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Fa(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ia(e);if(i===null)return Fa(n);e=i;let a=`<img src="${e}" alt="${Fa(n)}"`;return t&&(a+=` title="${Fa(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Fa(e.text)}},qa=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Ja=class e{options;renderer;textRenderer;constructor(e){this.options=e||Ei,this.options.renderer=this.options.renderer||new Ka,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new qa}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Ya=class{options;block;constructor(e){this.options=e||Ei}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ga.lex:Ga.lexInline}provideParser(e=this.block){return e?Ja.parse:Ja.parseInline}},Xa=new class{defaults=Ti();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ja;Renderer=Ka;TextRenderer=qa;Lexer=Ga;Tokenizer=Wa;Hooks=Ya;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Ka(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Wa(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Ya;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Ya.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Ya.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ga.lex(e,t??this.defaults)}parser(e,t){return Ja.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Ga.lex:Ga.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Ja.parse:Ja.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Ga.lex:Ga.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Ja.parse:Ja.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Fa(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function I(e,t){return Xa.parse(e,t)}I.options=I.setOptions=function(e){return Xa.setOptions(e),I.defaults=Xa.defaults,Di(I.defaults),I},I.getDefaults=Ti,I.defaults=Ei,I.use=function(...e){return Xa.use(...e),I.defaults=Xa.defaults,Di(I.defaults),I},I.walkTokens=function(e,t){return Xa.walkTokens(e,t)},I.parseInline=Xa.parseInline,I.Parser=Ja,I.parser=Ja.parse,I.Renderer=Ka,I.TextRenderer=qa,I.Lexer=Ga,I.lexer=Ga.lex,I.Tokenizer=Wa,I.Hooks=Ya,I.parse=I,I.options,I.setOptions,I.use,I.walkTokens,I.parseInline,Ja.parse,Ga.lex;var Za=Object.assign({"../posts/building-this-website.md":Ci,"../posts/hello-world.md":wi});function Qa(e){let t=e.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);return t?{meta:Object.fromEntries(t[1].split(`
`).filter(Boolean).flatMap(e=>{let t=e.indexOf(`: `);if(t===-1)return[];let n=e.slice(t+2).trim();return n?[[e.slice(0,t).trim(),n]]:[]})),content:t[2]}:{meta:{},content:e}}var $a=Object.entries(Za).map(([e,t])=>{let{meta:n,content:r}=Qa(t);return{title:n.title??`Untitled`,date:n.date??`1970-01-01`,slug:n.slug??e.match(/\/([^/]+)\.md$/)[1],description:n.description??``,tags:n.tags?n.tags.split(`,`).map(e=>e.trim()):[],image:n.image?n.image.startsWith(`http`)||n.image.startsWith(`/`)?n.image:`/${n.image}`:null,html:I(r)}}).sort((e,t)=>new Date(t.date)-new Date(e.date)),eo=e=>$a.find(t=>t.slug===e),to=[{color:`#c084fc`,glow:`rgba(192,132,252,0.12)`},{color:`#4ade80`,glow:`rgba(74,222,128,0.12)`},{color:`#60a5fa`,glow:`rgba(96,165,250,0.12)`},{color:`#fb923c`,glow:`rgba(251,146,60,0.12)`},{color:`#22d3ee`,glow:`rgba(34,211,238,0.12)`},{color:`#f472b6`,glow:`rgba(244,114,182,0.12)`},{color:`#facc15`,glow:`rgba(250,204,21,0.12)`}];function no(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t}function ro({title:e=``,className:t=``}){let{color:n,glow:r}=to[no(e)%to.length],i=e.split(/\s+/).slice(0,2).map(e=>e[0]?.toUpperCase()??``).join(``);return(0,k.jsxs)(`div`,{className:`relative overflow-hidden ${t}`,style:{background:`radial-gradient(ellipse at 30% 60%, ${r} 0%, var(--color-surface) 70%)`},children:[(0,k.jsx)(`div`,{className:`absolute inset-0`,style:{backgroundImage:`radial-gradient(circle, ${n}28 1px, transparent 1px)`,backgroundSize:`18px 18px`}}),(0,k.jsx)(`div`,{className:`absolute bottom-0 left-0 h-px w-2/5`,style:{background:`linear-gradient(90deg, ${n}70, transparent)`}}),(0,k.jsx)(`div`,{className:`absolute top-0 right-0 w-px h-2/5`,style:{background:`linear-gradient(180deg, ${n}70, transparent)`}}),(0,k.jsx)(`svg`,{viewBox:`0 0 100 100`,className:`absolute inset-0 w-full h-full`,"aria-hidden":`true`,children:(0,k.jsx)(`text`,{x:`50`,y:`68`,textAnchor:`middle`,fontSize:`52`,fontFamily:`Space Grotesk, sans-serif`,fontWeight:`700`,letterSpacing:`-2`,fill:n,fillOpacity:`0.12`,children:i})})]})}function io({post:e,index:t}){return(0,k.jsxs)(Dr,{index:t,as:O,to:`/blog/${e.slug}`,className:`group flex gap-4 py-4 border-b border-border/50 last:border-b-0 hover:pl-1`,children:[(0,k.jsx)(`div`,{className:`w-16 h-12 rounded overflow-hidden shrink-0`,children:e.image?(0,k.jsx)(`img`,{src:e.image,alt:e.title,className:`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300`}):(0,k.jsx)(ro,{title:e.title,className:`w-full h-full`})}),(0,k.jsxs)(`div`,{className:`flex-1 min-w-0 flex flex-col justify-center`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between gap-3`,children:[(0,k.jsx)(`span`,{className:`text-xs text-text-secondary group-hover:text-accent transition-colors duration-300 truncate`,children:e.title}),(0,k.jsx)(`time`,{className:`text-[10px] text-text-muted shrink-0`,children:new Date(e.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`})})]}),e.tags.length>0&&(0,k.jsx)(`div`,{className:`flex gap-2 mt-1`,children:e.tags.slice(0,3).map(e=>(0,k.jsxs)(`span`,{className:`text-[10px] text-accent-green`,children:[`#`,e]},e))})]})]})}function ao(){let e=$a.slice(0,5);return(0,k.jsxs)(Er,{id:`blog`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between mb-8`,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text`,children:`Writing`}),(0,k.jsx)(O,{to:`/blog`,className:`text-[11px] text-text-muted hover:text-accent link-animated transition-colors`,children:`all posts →`})]}),e.length===0?(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`No posts yet.`}):(0,k.jsx)(`div`,{children:e.map((e,t)=>(0,k.jsx)(io,{post:e,index:t},e.slug))})]})}var oo=Object.assign({"../dsa-notes/01 Matrix.md":`---
link: https://leetcode.com/problems/01-matrix/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "multi-source BFS from every 0, relax dist when it improves"
time: "O(m * n)"
space: "O(m * n)"
date: 2023-02-15
---

# Problem
Distance from each cell to the nearest 0.

# Approach
## Multi-Source BFS
Push every 0 at distance 0. Relax neighbours when \`dist + 1\` is smaller. Same as [[Distance of nearest cell having 1]].

### Code
\`\`\`cpp
vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    if (rows == 0)
        return matrix;
    int cols = matrix[0].size();
    vector<vector<int>> dist(rows, vector<int> (cols, INT_MAX));
    queue<pair<int, int>> q;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) {
                dist[i][j] = 0;
                q.push({ i, j }); //Put all 0s in the queue.
            }
        }
    }

    int dir[4][2] = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
    while (!q.empty()) {
        pair<int, int> curr = q.front();
        q.pop();
        for (int i = 0; i < 4; i++) {
            int new_r = curr.first + dir[i][0], new_c = curr.second + dir[i][1];
            if (new_r >= 0 && new_c >= 0 && new_r < rows && new_c < cols) {
                if (dist[new_r][new_c] > dist[curr.first][curr.second] + 1) {
                    dist[new_r][new_c] = dist[curr.first][curr.second] + 1;
                    q.push({ new_r, new_c });
                }
            }
        }
    }
    return dist;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/3Sum.md":`---
link: https://leetcode.com/problems/3sum/
difficulty: Medium
topics:
  - "[[Hash Maps]]"
  - "[[Two Pointers]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "sort, fix i, two pointers on the rest. skip equal neighbours to dedup"
time: "O(n²)"
space: "O(1)"
date: 
---

# Problem
Find all unique triplets that sum to 0.

# Approach
## Hash Map
Reduce to [[Two Sum]] for every pair (i, j). Decrement counts so used elements aren't reused.

### Code
\`\`\`cpp
vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    unordered_map<int, int> map;
    for(auto num: nums)
        map[num]++;

    vector<vector<int>> ans;

    for(int i = 0; i < nums.size(); i++){
        map[nums[i]]--;
        if(i > 0 && nums[i-1] == nums[i]) continue;
        for(int j = i+1; j < nums.size(); j++){
            map[nums[j]]--;
            if(j > i+1 && nums[j-1] == nums[j]) continue;

            int target = -(nums[i] + nums[j]);
            if(map[target] > 0){
                ans.push_back({target, nums[i], nums[j]});
            }
        }

        for(int j = i+1; j < nums.size(); j++){
            map[nums[j]]++;
        }
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## Two Pointers
Sort. Fix \`nums[i]\`, find pairs summing to \`-nums[i]\` with two pointers. Skip duplicates for \`i\` and after each match.

### Code
\`\`\`cpp
vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;

    for(int i = 0; i < nums.size(); i++){
        if(i > 0 && nums[i-1] == nums[i])
            continue;

        int left = i+1, right = nums.size()-1;
        int target = -nums[i];
        while(left < right){
            int sum = nums[left] + nums[right];
            if(sum == target){
                ans.push_back({nums[left], nums[right], nums[i]});
                left++;
                right--;

                while(left < right && nums[left] == nums[left-1]) left++;
                while(left < right && nums[right] == nums[right+1]) right--;
            } else if(sum > target) right--;
            else left++;
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$
`,"../dsa-notes/Account Merge.md":`---
link: https://leetcode.com/problems/accounts-merge/
difficulty: Hard
topics:
  - "[[Graphs]]"
  - "[[Disjoint Set Union]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "DSU on account indices, union accounts that share an email"
time: "O(N log N)"
space: "O(N)"
date: 
---

# Problem
Merge accounts that share at least one email. Return name + sorted emails per person.

# Approach
## DSU
Map each email to the first account index that had it. Seen again, union the two accounts. Then group emails by ultimate parent and sort. See [[Disjoint Set Union]].

### Code
\`\`\`cpp
class Solution {
public:
    vector<vector<string>> accountsMerge(vector<vector<string>> &details) {
        int n = details.size();
        DisjointSet ds(n);
        sort(details.begin(), details.end());
        unordered_map<string, int> mapMailNode;
        for (int i = 0; i < n; i++) {
            for (int j = 1; j < details[i].size(); j++) {
                string mail = details[i][j];
                if (mapMailNode.find(mail) == mapMailNode.end()) {
                    mapMailNode[mail] = i;
                }
                else {
                    ds.unionBySize(i, mapMailNode[mail]);
                }
            }
        }

        vector<string> mergedMail[n];
        for (auto it : mapMailNode) {
            string mail = it.first;
            int node = ds.findUPar(it.second);
            mergedMail[node].push_back(mail);
        }

        vector<vector<string>> ans;

        for (int i = 0; i < n; i++) {
            if (mergedMail[i].size() == 0) continue;
            sort(mergedMail[i].begin(), mergedMail[i].end());
            vector<string> temp;
            temp.push_back(details[i][0]);
            for (auto it : mergedMail[i]) {
                temp.push_back(it);
            }
            ans.push_back(temp);
        }
        sort(ans.begin(), ans.end());
        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(N \\log N)$, N = total emails (sorting)
- Space: $O(N)$
`,"../dsa-notes/Add Binary.md":`---
link: https://leetcode.com/problems/add-binary/
difficulty: Easy
topics:
  - "[[Bit Manipulation]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "add from the back with a carry, bit = carry % 2, carry /= 2"
time: "O(max(n, m))"
space: "O(1)"
date: 
---

# Problem
Add two binary strings.

# Approach
## Carry
Add in the string itself from the back with a carry. No int conversion.

### Code
\`\`\`cpp
string addBinary(string a, string b) {
    int i = a.size() - 1;
    int j = b.size() - 1;
    int carry = 0;
    string res = "";
    while(i >= 0 || j >= 0 || carry > 0){
        carry += (i>=0)?a[i--] - '0':0;
        carry += (j >= 0)?b[j--] - '0':0;
        res = char(carry%2 + '0') + res;
        carry/=2;
    }
    return res;
}
\`\`\`

### Complexity
- Time: $O(\\max(n, m))$
- Space: $O(1)$ extra
`,"../dsa-notes/Add Two Numbers II.md":`---
link: https://leetcode.com/problems/add-two-numbers-ii/
difficulty: Medium
topics:
  - "[[Stack]]"
  - "[[Linked Lists]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "most significant digit first, push both lists on stacks and add while popping"
time: "O(n + m)"
space: "O(n + m)"
date: 2023-05-18
---

# Problem
Add two numbers stored in linked lists, most significant digit first.

# Approach
## Stacks
Push both lists onto stacks. Pop and add with carry, prepend each new node to the result.

Bug in my code: the loop condition should be \`!s1.empty() || !s2.empty() || carry\`, the \`&& carry != 0\` never runs on a 0 carry.

### Code
\`\`\`cpp
ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
{
    stack<ListNode*> s1;
    stack<ListNode*> s2;

    ListNode* ans = new ListNode();

    while(l1){
        s1.push(l1);
        l1 = l1->next;
    }
    while(l2){
        s2.push(l2);
        l2 = l2->next;
    }

    int carry = 0;
    while((!s1.empty() || !s2.empty()) && carry != 0){
        int x = (s1.empty())?0:s1.top()->val;
        if(!s1.empty()) s1.pop();
        int y = (s2.empty())?0:s2.top()->val;
        if(!s2.empty()) s2.pop();

        int sum = x + y + carry;
        carry = sum/10;
        ListNode* temp = new ListNode(sum%10);

        temp->next = ans->next;
        ans->next = temp;
    }

    return ans->next;
}
\`\`\`

### Complexity
- Time: $O(n + m)$
- Space: $O(n + m)$
`,"../dsa-notes/Add Two Numbers.md":`---
link: https://leetcode.com/problems/add-two-numbers/
difficulty: Medium
topics:
  - "[[Linked Lists]]"
  - "[[Math]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "dummy head, loop while l1 || l2 || carry"
time: "O(max(n, m))"
space: "O(max(n, m))"
date: 2026-06-27
---

# Problem
Add two numbers stored in reverse-order linked lists.

# Approach
## Dummy Head + Carry
Digits are LSB first so add in one pass. Loop while either list or carry is left (handles 999 + 1).

### Code
\`\`\`cpp
ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* cur = &dummy;
    int carry = 0;
    while (l1 || l2 || carry) {
        int sum = carry;
        if (l1) { sum += l1->val; l1 = l1->next; }
        if (l2) { sum += l2->val; l2 = l2->next; }
        carry = sum / 10;
        cur->next = new ListNode(sum % 10);
        cur = cur->next;
    }
    return dummy.next;
}
\`\`\`

### Complexity
- Time: $O(\\max(n, m))$
- Space: $O(\\max(n, m))$ for the output
`,"../dsa-notes/Add to Array-Form Of Integer.md":`---
link: https://leetcode.com/problems/add-to-array-form-of-integer/
difficulty: Easy
topics:
  - "[[Arrays]]"
  - "[[Math]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "use k itself as the carry"
time: "O(max(n, log k))"
space: "O(1)"
date: 
---

# Problem
Add integer \`k\` to a number stored as a digit array.

# Approach
## Long Addition
Start with carry = k, add from the back. Leftover carry goes to the front.

### Code
\`\`\`cpp
vector<int> addToArrayForm(vector<int>& num, int k) {
        int n = num.size() - 1;
        int carry = k;
        for(int i = n; i >= 0; i--){
            int sum = num[i] + carry;
            num[i] = sum %10;
            carry = sum/10;
        }
        while(carry){
            num.insert(num.begin(), carry%10);
            carry/=10;
        }
        return num;
    }
\`\`\`

### Complexity
- Time: $O(\\max(n, \\log k))$
- Space: $O(1)$ extra
`,"../dsa-notes/Alien Dictionary.md":`---
link: https://www.geeksforgeeks.org/problems/alien-dictionary/1
difficulty: Hard
topics:
  - "[[Graphs]]"
  - "[[Topological Sort]]"
source: Standard
star: true
blind75: true
mastery:
review:
insight: "first differing char of adjacent words gives an edge, then topo sort. longer word before its prefix = invalid"
time: "O(N * L + K)"
space: "O(K)"
date: 2026-08-22
---

# Problem
Given words sorted in an alien language, find an order of the letters.

# Approach
First differing char of each adjacent pair gives one edge \`w1[j] -> w2[j]\`. Stop at the first difference. No difference and the longer word comes first = invalid. Then [[Topological Sort]] (Kahn's). Order missing letters = cycle = invalid.

## GFG (explicit K)
All \`K\` letters are nodes. Stuck letters get appended at the end, GFG checks the string itself.

### Code
\`\`\`cpp
string findOrder(string dict[], int N, int K) {
    vector<vector<int>> graph(K);
    vector<int> indegree(K, 0);

    for (int i = 0; i < N - 1; i++) {
        string s1 = dict[i];
        string s2 = dict[i + 1];
        int l = min(s1.size(), s2.size());
        int j = 0;
        while (j < l && s1[j] == s2[j])
            j++;

        if (j < s1.size() && j < s2.size()) {
            graph[s1[j] - 'a'].push_back(s2[j] - 'a');
            indegree[s2[j] - 'a']++;
        }
    }

    queue<int> q;
    for (int i = 0; i < K; i++)
        if (indegree[i] == 0)
            q.push(i);

    string ans = "";
    while (!q.empty()) {
        int curr = q.front();
        q.pop();
        ans = ans + char(curr + 'a');
        for (int i = 0; i < graph[curr].size(); i++) {
            indegree[graph[curr][i]]--;
            if (indegree[graph[curr][i]] == 0)
                q.push(graph[curr][i]);
        }
    }

    for (int i = 0; i < K; i++)
        if (indegree[i] != 0)
            ans = ans + char(i + 'a');

    return ans;
}
\`\`\`

### Complexity
- Time: $O(N \\cdot L + K)$
- Space: $O(K)$

## LeetCode (infer letters, return "" on invalid)
Only letters that appear are nodes, track with \`present[26]\`.

Traps:
- Compare \`words[i]\` with \`words[i+1]\`, not a fixed index.
- No difference found: reading \`w[j]\` past the shorter word is UB. Branch on it and return \`""\` if the longer word comes first.
- Unused letters have indegree 0 and leak into the order. Gate with \`present[]\`.
- Cycle: return \`""\` if \`order.size() != total\`.

### Code
\`\`\`cpp
class Solution {
public:
    string foreignDictionary(vector<string>& words) {
        vector<vector<int>> adj(26, vector<int>());
        vector<bool> present(26, false);

        for (auto w : words)
            for (auto ch : w)
                present[ch - 'a'] = true;

        for (int i = 0; i < words.size() - 1; i++) {
            string w1 = words[i];
            string w2 = words[i + 1];
            int j;
            for (j = 0; j < min(w1.size(), w2.size()); j++) {
                if (w1[j] != w2[j]) break;
            }
            if (j < min(w1.size(), w2.size()))
                adj[w1[j] - 'a'].push_back(w2[j] - 'a');
            else if (w1.size() > w2.size())
                return "";
        }

        vector<int> indegree(26, 0);
        for (auto v : adj)
            for (auto i : v) indegree[i]++;

        queue<int> q;
        int total = 0;
        for (int i = 0; i < 26; i++)
            if (present[i]) {
                total++;
                if (indegree[i] == 0) q.push(i);
            }

        string order = "";
        while (!q.empty()) {
            int curr = q.front();
            q.pop();
            order += (curr + 'a');
            for (auto i : adj[curr]) {
                indegree[i]--;
                if (indegree[i] == 0) q.push(i);
            }
        }

        return order.size() == total ? order : "";
    }
};
\`\`\`

### Complexity
- Time: $O(\\sum |word|)$
- Space: $O(1)$, 26 letters
`,"../dsa-notes/Arithmatic Subarrays.md":`---
link: https://leetcode.com/problems/arithmetic-subarrays/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort each queried subarray, check all adjacent differences are equal"
time: "O(m * n log n)"
space: "O(n)"
date: 2023-04-05
---

# Problem
For each range query, check if the subarray can be rearranged into an arithmetic sequence.

# Approach
## Sort Each Query
Push the range into a max heap, pop in order and check every adjacent difference is the same.

### Code
\`\`\`cpp
bool check(vector<int> nums, int a, int b)
{
    priority_queue<int> pq;
    for(int i = a; i <= b; i++){
        pq.push(nums[i]);
    }
    if(pq.size() <= 1)
        return true;
    int x = pq.top();
    pq.pop();
    int y = pq.top();
    pq.pop();
    int d = x-y;

    while(!pq.empty()){
        x = pq.top();
        pq.pop();
        if(y-x != d)
            return false;
        y = x;
    }
    return true;
}

vector<bool> checkArithmeticSubarrays(vector<int> &nums, vector<int> &l, vector<int> &r)
{
    vector<bool> ans;
    for (int i = 0; i < l.size(); i++)
    {
        int a = l[i];
        int b = r[i];
        ans.push_back(check(nums, a, b));
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Balanced Binary Tree.md":`---
link: https://leetcode.com/problems/balanced-binary-tree/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[Recursion]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "return -1 from height if a subtree is unbalanced, check both in one DFS"
time: "O(n)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Check if every node's subtree heights differ by at most 1.

# Approach
## Single-Pass DFS (bool ref)
Compute height bottom-up, set \`bal = false\` when the diff is > 1. Never set it back to true.

Brute force trap: calling \`height()\` and then recursing \`isBalanced()\` is O(n²).

### Code
\`\`\`cpp
int height(TreeNode* root, bool& bal) {
    if (!root)
        return 0;
    int lHeight = height(root->left, bal);
    int rHeight = height(root->right, bal);

    if (abs(lHeight - rHeight) > 1)
        bal = false;

    return max(lHeight, rHeight) + 1;
}

bool isBalanced(TreeNode* root) {
    if (!root)
        return true;
    bool bal = true;
    height(root, bal);
    return bal;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$

## Sentinel (-1)
Return -1 for an unbalanced subtree. Stops early.

- \`height(root) != -1\` is the whole answer

### Code
\`\`\`cpp
int dfs(TreeNode* root) {
    if (!root) return 0;
    int left = dfs(root->left);
    if (left == -1) return -1;
    int right = dfs(root->right);
    if (right == -1) return -1;
    if (abs(left - right) > 1) return -1;
    return max(left, right) + 1;
}

bool isBalanced(TreeNode* root) {
    return dfs(root) != -1;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Baseball Game.md":`---
link: https://leetcode.com/problems/baseball-game/
difficulty: Easy
topics:
  - "[[Stack]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "stack of scores, C pops, D doubles top, + sums top two"
time: "O(n)"
space: "O(n)"
date: 2023-05-13
---

# Problem
Apply score ops (int, \`+\`, \`D\`, \`C\`) and return the total.

# Approach
## Stack
Push ints. \`C\` pops, \`D\` pushes 2 * top, \`+\` pushes sum of top two. Sum the stack at the end.

### Code
\`\`\`cpp
int calPoints(vector<string> &operations)

{
    stack<int> record;
    for (int i = 0; i < operations.size(); i++)
    {
        if (operations[i] == "C")
        {
            if (record.empty())
                continue;
            else
                record.pop();
        }
        else if (operations[i] == "D")
        {
            if (record.empty())
                continue;
            else
            {
                int num = record.top();
                num *= 2;
                record.push(num);
            }

        }
        else if (operations[i] == "+")
        {
            if (!record.empty())
            {
                int num1 = record.top();
                record.pop();
                int num2 = record.top();
                record.pop();
                record.push(num2);
                record.push(num1);
                int num = num1 + num2;
                record.push(num);
            }
        }
        else
        {
            int num = 0;
            bool negative = false;
            for (int j = 0; j < operations[i].size(); j++)
            {
                    if(operations[i][j] == '-' && j == 0){
                    negative = true;
                    continue;
                }
                num = num * 10 + operations[i][j] - '0';
            }
            if(negative)
                num *= -1;
            record.push(num);
        }
    }
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Bellman Ford Algorithm.md":`---
link: https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1
difficulty: Medium
topics:
  - "[[Graphs]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "relax all edges V-1 times, if the Vth pass still relaxes there's a negative cycle"
time: "O(V * E)"
space: "O(V)"
date: 
---

# Problem
Shortest distance from \`S\` to every vertex with negative weights. Return \`{-1}\` on a negative cycle.

# Approach
## Bellman Ford
[[Dijkstra's Algorithm]] loops forever on a negative cycle. Relax every edge \`V-1\` times instead. If one more pass still relaxes an edge, there's a negative cycle.

### Code
\`\`\`cpp
vector<int> bellman_ford(int V, vector<vector<int>>& edges, int S) {
    // Code here
    vector<int> distance(V, 1e8);
    distance[S] = 0;
    for(int i = 0; i < V-1; i++){
        for(auto it : edges){
            int u = it[0];
            int v = it[1];
            int dis = it[2];

            if(distance[u] != 1e8 && distance[u] + dis < distance[v])
                distance[v] = distance[u] + dis;
        }
    }

    for(auto it : edges){
        int u = it[0];
        int v = it[1];
        int dis = it[2];

        if(distance[u] != 1e8 && distance[u] + dis < distance[v])
            return {-1};
    }

    return distance;
}
\`\`\`

### Complexity
- Time: $O(V \\cdot E)$
- Space: $O(V)$
`,"../dsa-notes/Best Time to Buy and Sell Stock.md":`---
link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
difficulty: Easy
topics:
  - "[[Two Pointers]]"
  - "[[Sliding Window]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "track the min price so far, profit = price - min"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
One buy and one sell, max profit.

# Approach
## Two Pointers
Move \`left\` to any lower price, it's always a better buy for the days after. Otherwise check profit \`prices[r] - prices[l]\`.

### Code
\`\`\`cpp
int maxProfit(vector<int>& prices) {
    int left = 0, right = left + 1;
    int ans = 0;
    while(right < prices.size()){
        if(prices[right] < prices[left]){
            left = right;
        } else {
            ans = max(ans, prices[right] - prices[left]);
        }
        right++;
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Binary Search.md":`---
link: https://leetcode.com/problems/binary-search/
difficulty: Easy
topics:
  - "[[Binary Search]]"
source: Leetcode
star: false
blind75: false
mastery: green
review: 2026-11-15
insight: "l <= r, m = l + (r - l) / 2, r = m - 1 or l = m + 1, return -1 after the loop"
time: "O(log n)"
space: "O(1)"
date: 2026-11-08
---
`,"../dsa-notes/Binary Tree Inorder Traversal.md":`---
link: https://leetcode.com/problems/binary-tree-inorder-traversal/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "left, root, right"
time: "O(n)"
space: "O(n)"
date: 2023-01-04
---

# Problem
Inorder traversal.

# Approach
## Recursion
Left, root, right. Copying child vectors makes it $O(n^2)$ worst case, pass one vector by reference instead. Iterative stack version in [[Kth Smallest Element in a BST]].

### Code
\`\`\`cpp
vector<int> inorderTraversal(TreeNode *root)
{
    vector<int> x;
    if (root == NULL)
    {
        return x;
    }
    vector<int> left = inorderTraversal(root->left);
    for (int i = 0; i < left.size(); i++)
    {
        x.push_back(left[i]);
    }
    x.push_back(root->val);
    vector<int> right = inorderTraversal(root->right);
    for (int i = 0; i < right.size(); i++)
    {
        x.push_back(right[i]);
    }
    return x;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Binary Tree Level Order Traversal.md":`---
link: https://leetcode.com/problems/binary-tree-level-order-traversal/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[BFS]]"
source: Leetcode
star: true
blind75: true
mastery: green
review: 2026-11-15
insight: "BFS, snapshot q.size() at the start of each level"
time: "O(n)"
space: "O(n)"
date: 2026-06-28
---

# Problem
Return the level-order traversal, one array per level.

# Approach
## BFS with Level Size
Snapshot \`q.size()\` at the start of each level and pop exactly that many.

### Code
\`\`\`cpp
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> ans;
    if (!root) return ans;
    queue<TreeNode*> mq;
    mq.push(root);
    while (!mq.empty()) {
        int n = mq.size();
        vector<int> lv;
        while (n--) {
            TreeNode* curr = mq.front(); mq.pop();
            lv.push_back(curr->val);
            if (curr->left)  mq.push(curr->left);
            if (curr->right) mq.push(curr->right);
        }
        ans.push_back(lv);
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Two Queues
Drain \`q\` into a level, collect the children in \`next\`, then \`swap(q, next)\`. No size counter. Allocates a new queue (a deque block) per level, so the one-queue version is a bit faster. Clean first pass on re-solve 2026-11-08.

### Code
\`\`\`cpp
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> ans;
    queue<TreeNode*> q;
    if (root) q.push(root);

    while (!q.empty()) {
        vector<int> l;
        queue<TreeNode*> next;
        while (!q.empty()) {
            TreeNode* curr = q.front();
            q.pop();
            l.push_back(curr->val);
            if (curr->left) next.push(curr->left);
            if (curr->right) next.push(curr->right);
        }

        ans.push_back(l);
        swap(q, next);
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(w)$, $w$ = widest level, up to $O(n)$
`,"../dsa-notes/Binary Tree Maximum Path Sum.md":`---
link: https://leetcode.com/problems/binary-tree-maximum-path-sum/
difficulty: Hard
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "clamp each arm's gain to 0, update max with l + val + r, return val + max(l, r)"
time: "O(n)"
space: "O(h)"
date: 2026-06-29
---

# Problem
Max path sum in a binary tree. Path can start and end anywhere.

# Approach
## DFS with Global Max
Same as [[Diameter of Binary Tree]] but values can be negative, so clamp each arm to 0. Path through node = \`l + val + r\` updates the max. Return only one arm to the parent: \`max(l, r) + val\`.

### Code
\`\`\`cpp
int path(TreeNode* root, int& res) {
    if (!root) return 0;
    int l = path(root->left, res);
    l = l > 0 ? l : 0;
    int r = path(root->right, res);
    r = r > 0 ? r : 0;
    res = max(res, l + r + root->val);
    return max(l, r) + root->val;
}

int maxPathSum(TreeNode* root) {
    int res = INT_MIN;
    path(root, res);
    return res;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Binary Tree Postorder Traversal.md":`---
link: https://leetcode.com/problems/binary-tree-postorder-traversal/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "left, right, root"
time: "O(n)"
space: "O(n)"
date: 2023-01-04
---

# Problem
Postorder traversal.

# Approach
## Recursion
Left, right, root.

### Code
\`\`\`cpp
vector<int> postorderTraversal(TreeNode *root)
{
    vector<int> x;
    if (!root)
    {
        return x;
    }
    vector<int> left = postorderTraversal(root->left);
    for (int i = 0; i < left.size(); i++)
    {
        x.push_back(left[i]);
    }
    vector<int> right = postorderTraversal(root->right);
    for (int i = 0; i < right.size(); i++)
    {
        x.push_back(right[i]);
    }
    x.push_back(root->val);
    return x;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Binary Tree Preorder Traversal.md":`---
link: https://leetcode.com/problems/binary-tree-preorder-traversal/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "root, left, right"
time: "O(n)"
space: "O(n)"
date: 2023-01-04
---

# Problem
Preorder traversal.

# Approach
## Recursion
Root, left, right.

### Code
\`\`\`cpp
vector<int> preorderTraversal(TreeNode *root)
{
    vector<int> x;
    if (root == NULL)
    {
        return x;
    }
    x.push_back(root->val);
    vector<int> left = preorderTraversal(root->left);
    vector<int> right = preorderTraversal(root->right);
    for (int i = 0; i < left.size(); i++)
    {
        x.push_back(left[i]);
    }
    for (int i = 0; i < right.size(); i++)
    {
        x.push_back(right[i]);
    }
    return x;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Binary Tree Right Side View.md":`---
link: https://leetcode.com/problems/binary-tree-right-side-view/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery: green
review: 2026-11-15
insight: "level-order BFS, take the last node of each level (n == 0 after decrement)"
time: "O(n)"
space: "O(n)"
date: 2026-06-28
---

# Problem
Return the rightmost value at each level.

# Approach
## BFS, Last Node Per Level
Level-order with size snapshot, push the value when \`n == 0\`.

Trap: \`q.empty()\` doesn't mark the last node, children are already in the queue.

### Code
\`\`\`cpp
vector<int> rightSideView(TreeNode* root) {
    vector<int> ans;
    if (!root) return ans;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int n = q.size();
        while (n--) {
            TreeNode* node = q.front(); q.pop();
            if (n == 0) ans.push_back(node->val);
            if (node->left)  q.push(node->left);
            if (node->right) q.push(node->right);
        }
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

- Level order, take the last node of each level
- Push only real children, then \`k == len - 1\` marks the rightmost. Pushing nulls works but doubles the queue
- DFS: visit right first, push when \`depth == ans.size()\`. Space O(h) against O(w) for BFS
- The visible node can be a left child when the right side is shorter, \`[1,2,null,3]\` is \`[1,2,3]\`
`,"../dsa-notes/Boredom.md":`---
link: https://codeforces.com/problemset/problem/455/A
rating: 1300
contest: Codeforces Round 260
topics:
  - "[[Dynamic Programming]]"
source: CodeForces
star: false
blind75: false
mastery: yellow
review: 2026-09-27
insight: "House Robber over value buckets: taking value x scores a[x]*x but forbids x-1 and x+1, so dp[i] = max(dp[i+2] + a[i]*i, dp[i+1])"
time: "O(max_val)"
space: "O(max_val)"
date: 2026-09-24
code: "[[CodeForces/A_Boredom.cpp]]"
---

# Problem
Pick a value x, remove one occurrence of x and all occurrences of x-1 and x+1, gain x points each time. Maximize total points.

# Observation
Bucket count by value first (a[x] = how many times x appears). Once bucketed, this is [[House Robber]]: taking value i is worth a[i]*i but blocks i-1 and i+1, so dp[i] = max(dp[i+2] + a[i]*i, dp[i+1]). Same problem as [[Delete and Earn]], just with dense value buckets instead of a sparse map.

Mistakes I made:
- Seeded the two base cases (dp[lim], dp[lim-1]) with raw counts instead of a[i]*i, so the top of the array scored counts instead of points. Every other row had the multiply, just not the seeds.
- \`#define lim 1e5\` makes \`lim\` a double, so \`a[i] * (lim-1)\` silently becomes a double and breaks \`max\` against an \`ll\` — switched to \`#define lim 100000\`.
`,"../dsa-notes/Burst Balloons.md":`---
link: https://leetcode.com/problems/burst-balloons/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "pick i as the LAST burst in [l, r], neighbours are l-1 and r+1"
time: "O(n³)"
space: "O(n²)"
date: 2026-09-13
---

# Problem
Bursting \`i\` gives \`left * nums[i] * right\` with current neighbours (out of bounds = 1). Max coins from bursting all.

# Approach
## Interval DP (burst last)
Pick \`i\` as the **last** balloon burst in \`[l, r]\`. Its neighbours are then \`l-1\` and \`r+1\`. \`i\` stays alive while both sides get burst, so the sides stay independent.

\`dp[l][r] = max over i of nums[l-1]*nums[i]*nums[r+1] + dp[l][i-1] + dp[i+1][r]\`

Pad \`nums\` with 1 at both ends. Fill l going down, r going up.

Mistakes I made: used \`nums[i-1]\`/\`nums[i+1]\` as neighbours, and a \`r - l == 1\` base case that ignored the outside neighbours.

### Code
\`\`\`cpp
class Solution {
   public:
    int maxCoins(vector<int>& nums) {
        int n = nums.size();
        nums.insert(nums.begin(), 1);
        nums.push_back(1);
        vector<vector<int>> dp(n + 2, vector<int>(n + 2, 0));

        for (int l = n; l >= 1; l--) {
            for (int r = l; r <= n; r++) {
                for (int i = l; i <= r; i++) {
                    int value = nums[l - 1] * nums[i] * nums[r + 1];
                    dp[l][r] = max(dp[l][r], value + dp[l][i - 1] + dp[i + 1][r]);
                }
            }
        }
        return dp[1][n];
    }
};
\`\`\`

### Complexity
- Time: $O(n^3)$
- Space: $O(n^2)$
`,"../dsa-notes/Buy and Sell Stock IV.md":`---
link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "same dp as stock III with cap going up to k"
time: "O(n * k)"
space: "O(k)"
date: 
---

# Problem
Max profit with at most \`k\` transactions.

# Approach
## DP (index, buy, cap)
[[Buy and Sell stock III]] with the cap going up to \`k\`.

### Code
\`\`\`cpp
int maxProfit(int k, vector<int>& prices) {
    int n = prices.size();
    vector<vector<int>> prev(2, vector<int>(k+1, 0));
    vector<vector<int>> curr(2, vector<int>(k+1, 0));

    for (int i = n - 1; i >= 0; i--)
    {
        for (int buy = 0; buy <= 1; buy++)
        {
            for (int cap = 1; cap <= k; cap++)
            {
                if (buy == 0)
                    curr[buy][cap] = max(-prices[i] + prev[1][cap], prev[0][cap]);
                if(buy == 1)
                    curr[buy][cap] = max(prices[i] + prev[0][cap - 1], prev[1][cap]);
            }
        }
        prev = curr;
}

return curr[0][k];
}
\`\`\`

### Complexity
- Time: $O(n \\cdot k)$
- Space: $O(k)$
`,"../dsa-notes/Buy and Sell Stock with cooldown.md":`---
link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "on sell jump to i + 2, dp[i][canBuy]"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Unlimited transactions, one day cooldown after selling.

# Approach
## Recursion
[[Buy and sell stock II]] but skip the next day after a sell.

### Code
\`\`\`cpp
int help(vector<int> &prices, int i, int prev, int profit)
{
    if (i >= prices.size())
        return profit;
    else
    {
        if (prev == -1)
            return max(help(prices, i + 1, prices[i], profit), help(prices, i + 1, prev, profit));
        else
        {
            if (prices[i] > prev)
                return max(help(prices, i + 2, -1, profit + prices[i] - prev), help(prices, i + 1, prev, profit));
            else
                return help(prices, i + 1, prev, profit);
        }
    }
}

int maxProfit(vector<int> &prices)
{
    return help(prices, 0, -1, 0);
}
\`\`\`

### Complexity
- Time: $O(2^n)$
- Space: $O(n)$

## DP
\`t[i][0]\` = can buy, \`t[i][1]\` = can sell. Selling jumps to \`i + 2\`.

### Code
\`\`\`cpp
int maxProfit(vector<int> &prices)
{
    int n = prices.size();
    vector<vector<int>> t(n + 2, vector<int>(2, 0));

    // 0 is when we buy
    // 1 is when we sell

    for (int i = n - 1; i >= 0; i--)
    {
        t[i][0] = max(-prices[i] + t[i + 1][1], 0 + t[i + 1][0]);
        t[i][1] = max(prices[i] + t[i + 2][0], 0 + t[i + 1][1]);
    }

    return t[0][0];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Buy and Sell stock III.md":`---
link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "dp over (index, can buy, transactions left), only the next row is needed"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Max profit with at most two transactions.

# Approach
## DP (index, buy, cap)
Like [[Buy and Sell Stock with cooldown]] but with a transaction cap. State = index, buy/sell, transactions left. Only the next row is used, so keep \`prev\` and \`curr\`.

### Code
\`\`\`cpp
int maxProfit(vector<int> &prices)
{
    int n = prices.size();
    vector<vector<int>> prev(2, vector<int>(3, 0));
    vector<vector<int>> curr(2, vector<int>(3, 0));

    for (int i = n - 1; i >= 0; i--)
    {
        for (int buy = 0; buy <= 1; buy++)
        {
            for (int cap = 1; cap <= 2; cap++)
            {
                if (buy == 0)
                    curr[buy][cap] = max(-prices[i] + prev[1][cap], prev[0][cap]);
                if(buy == 1)
                    curr[buy][cap] = max(prices[i] + prev[0][cap - 1], prev[1][cap]);
            }
        }
        prev = curr;
    }

    return curr[0][2];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Buy and sell stock II.md":`---
link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Greedy]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "add every positive day-to-day difference"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Unlimited transactions, hold at most one share. Max profit.

# Approach
## Greedy
Take every upswing: add \`prices[i] - prices[i-1]\` when positive.

### Code
\`\`\`cpp
int maxProfit(vector<int>& prices) {
        int ans = 0;int n = prices.size();
        for(int i = 1; i < n; i++){
            if(prices[i-1] < prices[i])
                ans += prices[i] - prices[i-1];
        }
        return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Buy and sell stock with transaction fee.md":`---
link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "cooldown dp without the skip, subtract fee on sell"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Unlimited transactions, pay \`fee\` per transaction.

# Approach
## DP
Same as [[Buy and Sell Stock with cooldown]] without the skip. Subtract \`fee\` on every sell.

### Code
\`\`\`cpp
int maxProfit(vector<int> &prices, int fee)
{
    int n = prices.size();
    vector<vector<int>> t(n + 1, vector<int>(2, 0));

    // 0 we can sell
    // 1 we can buy

    for (int i = n - 1; i >= 0; i--)
    {
        t[i][0] = max(prices[i] - fee + t[i + 1][1], t[i + 1][0]);
        t[i][1] = max(-prices[i] + t[i + 1][0], t[i + 1][1]);
    }

    return t[0][1];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Car Fleet.md":`---
link: https://leetcode.com/problems/car-fleet/
difficulty: Medium
topics:
  - "[[Stack]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort by position, time to target; a car behind that arrives sooner joins the fleet ahead"
time: "O(n log n)"
space: "O(n)"
date: 2026-05-30
---

# Problem
Cars can't overtake. Count the fleets that reach the target.

# Approach
## Sort + Stack
Sort by position. Time to target = \`(target - pos) / speed\`. Pop cars behind that arrive no later than the current one, they merge into its fleet. Stack size = fleets.

### Code
\`\`\`cpp
int carFleet(int target, vector<int>& position, vector<int>& speed) {
    vector<pair<int, int>> cars;
    int n = position.size();
    for (int i = 0; i < n; i++) {
        cars.push_back({position[i], speed[i]});
    }

    sort(cars.begin(), cars.end());

    stack<pair<int, int>> s;

    for (const auto& i : cars) {
        double time = (double)(target - i.first) / (double)i.second;
        while (!s.empty()) {
            const auto& j = s.top();
            double t = (double)(target - j.first) / (double)j.second;
            if (t <= time)
                s.pop();
            else
                break;
        }
        s.push(i);
    }

    return s.size();
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Cheapest Flights Within K Stops.md":`---
link: https://leetcode.com/problems/cheapest-flights-within-k-stops/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Dijkstra]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "BFS ordered by stops, not a pq by cost. stop expanding once stops > k"
time: "O(E * k)"
space: "O(V + E)"
date: 
---

# Problem
Cheapest price from \`src\` to \`dst\` with at most \`k\` stops, else -1.

# Approach
## BFS by Stops
Like [[Dijkstra's Algorithm]] but the constraint is stops, so a plain queue works. Stops go up by one each level, so the queue stays ordered by stops. Relax only while \`stops <= k\`.

### Code
\`\`\`cpp
int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
    vector<vector<pair<int, int>>> adj(n, vector<pair<int, int>>());
    for(auto i : flights){
        adj[i[0]].push_back({i[1], i[2]});
    }    
    queue<pair<int, pair<int, int>>> q;
    vector<int> distance(n, 1e9);
    distance[src] = 0;
    q.push({0, {src, 0}});

    while(!q.empty()){
        int stops = q.front().first;
        int city = q.front().second.first;
        int dis = q.front().second.second;
        q.pop();

        for(auto i:adj[city]){
            if(stops <= k){
                if(distance[i.first] > dis + i.second){
                    distance[i.first] = dis + i.second;
                    q.push({stops+1, {i.first, distance[i.first]}});
                }
            }
        }
    }

    return (distance[dst] == 1e9)?-1:distance[dst];
}
\`\`\`

### Complexity
- Time: $O(E \\cdot k)$
- Space: $O(V + E)$
`,"../dsa-notes/Check if Array Is Sorted and Rotated.md":`---
link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
difficulty: Easy
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "count drops nums[i] > nums[i+1] including the wrap, at most one allowed"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Check if the array is a sorted array rotated some number of times.

# Approach
## Brute Force
Try every rotation start and check if it's sorted.

### Code
\`\`\`cpp
bool check(vector<int>& nums) {
    if(nums.size() <= 1)
        return true;
    bool ans = false;

    for(int i = 0; i < nums.size() && !ans; i++){
        for(int j = 0; j < nums.size()-1; j++){
            if(nums[(j+i)%nums.size()] <= nums[(j+1+i)%nums.size()]){
                ans = true;
            } else {
                ans = false;
                break;
            }
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$

## Count Drops
A rotated sorted array has at most one place where the next element is smaller. Count drops, include last to first.

### Code
\`\`\`cpp
bool check(vector<int>& nums) {
    int count = 0;

    for(int i = 0; i < nums.size()-1; i++){
        if(nums[i] > nums[i+1])
            count++;
    }

    if(nums[nums.size()-1] > nums[0])
        count++;

    return (count > 1 )? false : true;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/City With the Smallest Number of Neighbors at a Threshold Distance.md":`---
link: https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
difficulty: Easy
topics:
  - "[[Graphs]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "Floyd Warshall for all pairs, count reachable per city, ties go to the larger index (<=)"
time: "O(n³)"
space: "O(n²)"
date: 
---

# Problem
Find the city with the fewest cities within \`threshold\` distance. Ties go to the larger city number.

# Approach
## Floyd Warshall
[[Floyd Warshall Algorithm]] for all-pairs distances, then count per city. Use \`<=\` when comparing counts so later cities win ties.

### Code
\`\`\`cpp
int findCity(int n, int m, vector<vector<int>>& edges,
                 int distanceThreshold) {

                     vector<vector<int>> grid(n, vector<int> (n, 1e9));
                     for(int i = 0; i < m; i++){
                         grid[edges[i][0]][edges[i][1]] = edges[i][2];
                         grid[edges[i][1]][edges[i][0]] = edges[i][2];
                     }

                     for(int i = 0; i < n; i++) grid[i][i] = 0;
                     for(int k = 0; k < n; k++){
                         for(int i = 0; i < n; i++){
                             for(int j = 0; j < n; j++){
                                 grid[i][j] = min(grid[i][k] + grid[k][j], grid[i][j]);
                             }
                         }
                     }

                     int count = n+1;
                     int city = -1;

                     for(int i = 0; i < n; i++){
                         int c = 0;
                         for(int j = 0; j < n; j++){
                             if(grid[i][j] <= distanceThreshold)
                                c++;
                         }
                         if(c <= count){
                            count = c;
                            city = i;
                         }
                     }

                     return city;
                 }
\`\`\`

### Complexity
- Time: $O(n^3)$
- Space: $O(n^2)$
`,"../dsa-notes/Climbing Stairs.md":`---
link: https://leetcode.com/problems/climbing-stairs/
difficulty: Easy
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery: green
review: 2026-11-15
insight: "ways(i) = ways(i-1) + ways(i-2), keep only the last two"
time: "O(n)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Climb 1 or 2 steps at a time. Count ways to reach step \`n\`.

# Approach
\`ways(i) = ways(i-1) + ways(i-2)\`, Fibonacci. Base: \`ways(1) = 1\`, \`ways(2) = 2\`.

## Tabulation

### Code
\`\`\`cpp
class Solution {
public:
    vector<int> ways;

    int climbStairs(int n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;

        ways = vector<int>(n + 1);
        ways[0] = 0;
        ways[1] = 1;
        ways[2] = 2;

        for (int i = 3; i <= n; i++) {
            ways[i] = ways[i - 1] + ways[i - 2];
        }

        return ways[n];
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Memoization
Array cache, 0 = not computed.

### Code
\`\`\`cpp
class Solution {
public:
    vector<int> ways;

    int find(int n) {
        if (n < 3)
            return n;

        if (ways[n] > 0)
            return ways[n];

        return ways[n] = find(n - 1) + find(n - 2);
    }

    int climbStairs(int n) {
        if (n < 3)
            return n;
        ways = vector<int>(n + 1);
        ways[1] = 1;
        ways[2] = 2;
        return find(n);
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$ + $O(n)$ stack

## Two Variables
Only the last two values are needed. Recursion can't get to O(1) space, C++ doesn't guarantee tail calls.

### Code
\`\`\`cpp
class Solution {
public:
    int climbStairs(int n) {
        if (n < 3)
            return n;

        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$

- Seed \`prev = 1\`, \`curr = 1\` (steps 0 and 1) and the \`n == 1\`, \`n == 2\` cases disappear
- Counting from the top (\`ways(i) = ways(i+1) + ways(i+2)\`) gives the same number by symmetry
- n is at most 45, the answer overflows int after 46
`,"../dsa-notes/Clone Graph.md":`---
link: https://leetcode.com/problems/clone-graph/
difficulty: Medium
topics:
  - "[[Graphs]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "DFS with a map old -> copy, return the existing copy if already made"
time: "O(V + E)"
space: "O(V)"
date: 
---

# Problem
Deep copy a connected undirected graph.

# Approach
## DFS + Map
Map each original node to its copy. Create the copy before recursing into neighbours so cycles return the existing copy.

### Code
\`\`\`cpp
Node* cloneGraph(Node* node) {
    unordered_map <Node*, Node*> map;
    return dfs(node, map);
}

Node* dfs(Node* node, unordered_map<Node*, Node*>& map) {
    if(!node) return nullptr;

    if(map.find(node) != map.end()) return map[node];

    Node* copy = new Node(node->val);
    map[node] = copy;

    for(auto& p : node->neighbors){
        copy->neighbors.push_back(dfs(p, map));
    }

    return copy;
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V)$
`,"../dsa-notes/Coin Change II.md":`---
link: https://leetcode.com/problems/coin-change-ii/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "coins in the outer loop, amounts ascending inside. counts combinations, not permutations"
time: "O(n * amount)"
space: "O(amount)"
date: 2026-09-01
---

# Problem
Count combinations of coins (unlimited supply) that make \`amount\`. Order doesn't matter.

# Approach
Unbounded knapsack, counting. Coins processed in a fixed order so \`{1,2}\` and \`{2,1}\` are one path.

## Recursion
Skip the coin (\`ind + 1\`) or take it and stay (\`ind\`, reuse).

### Code
\`\`\`cpp
class Solution {
public:
    int solve(vector<int>& coins, int amount, int sum, int ind) {
        if (sum > amount || ind >= coins.size()) return 0;
        if (sum == amount) return 1;

        return solve(coins, amount, sum, ind + 1) +
               solve(coins, amount, sum + coins[ind], ind);
    }

    int change(int amount, vector<int>& coins) {
        return solve(coins, amount, 0, 0);
    }
};
\`\`\`

### Complexity
- Time: $O(2^{amount})$
- Space: $O(n + amount)$

## Memoization
Cache on \`dp[ind][sum]\`. Trap: keying on \`amount\` instead of \`sum\` collapses states, \`amount\` never changes.

### Code
\`\`\`cpp
class Solution {
public:
    vector<vector<int>> dp;

    int solve(vector<int>& coins, int amount, int sum, int ind) {
        if (sum > amount || ind >= coins.size()) return 0;
        if (dp[ind][sum] != -1) return dp[ind][sum];
        if (sum == amount) return dp[ind][sum] = 1;

        return dp[ind][sum] = solve(coins, amount, sum, ind + 1) +
                              solve(coins, amount, sum + coins[ind], ind);
    }

    int change(int amount, vector<int>& coins) {
        dp = vector<vector<int>>(coins.size() + 1, vector<int>(amount + 1, -1));
        return solve(coins, amount, 0, 0);
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot amount)$
- Space: $O(n \\cdot amount)$

## Tabulation 2D
\`dp[i][c]\` = ways to make \`c\` with the first \`i\` coins. Take = same row \`dp[i][c - coin]\`.

### Code
\`\`\`cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        int n = coins.size();
        vector<vector<int>> dp(n + 1, vector<int>(amount + 1, 0));
        for (int i = 0; i <= n; i++) dp[i][0] = 1;

        for (int i = 1; i <= n; i++) {
            for (int c = 0; c <= amount; c++) {
                dp[i][c] = dp[i - 1][c];
                if (coins[i - 1] <= c) {
                    dp[i][c] += dp[i][c - coins[i - 1]];
                }
            }
        }

        return dp[n][amount];
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot amount)$
- Space: $O(n \\cdot amount)$

## 1D
Coins outside = combinations. Sum ascending inside = unbounded reuse.

### Code
\`\`\`cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1;
        for (auto coin : coins) {
            for (int sum = coin; sum <= amount; sum++) {
                dp[sum] += dp[sum - coin];
            }
        }

        return dp[amount];
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot amount)$
- Space: $O(amount)$
`,"../dsa-notes/Coin Change.md":`---
link: https://leetcode.com/problems/coin-change/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[BFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "greedy fails ([1,3,4], 6). dp[i] = min over coins of dp[i - c] + 1, sentinel amount + 1"
time: "O(amount * coins)"
space: "O(amount)"
date: 2026-08-22
---

# Problem
Fewest coins to make \`amount\`, or -1.

# Approach
Greedy fails for non-canonical coins: \`[1,3,4], 6\` gives \`4+1+1\` but \`3+3\` is better.

## DP
\`dp[i] = min(dp[i], dp[i - coin] + 1)\`. Init to \`amount + 1\` as unreachable, an answer can never exceed \`amount\`.

### Code
\`\`\`cpp
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.size(); j++) {
                if (coins[j] <= i) {
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
};
\`\`\`

### Complexity
- Time: $O(amount \\cdot coins)$
- Space: $O(amount)$

## BFS
Amounts are nodes, coins are edges of cost 1. First level that hits \`amount\` is the answer.

### Code
\`\`\`cpp
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        if (amount == 0) return 0;

        vector<bool> visited(amount + 1, false);
        queue<int> q;
        q.push(0);
        visited[0] = true;
        int steps = 0;

        while (!q.empty()) {
            steps++;
            int size = q.size();
            for (int k = 0; k < size; k++) {
                int curr = q.front();
                q.pop();
                for (int c : coins) {
                    int next = curr + c;
                    if (next == amount) return steps;
                    if (next < amount && !visited[next]) {
                        visited[next] = true;
                        q.push(next);
                    }
                }
            }
        }

        return -1;
    }
};
\`\`\`

### Complexity
- Time: $O(amount \\cdot coins)$
- Space: $O(amount)$
`,"../dsa-notes/Combination Sum II.md":`---
link: https://leetcode.com/problems/combination-sum-ii/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort, loop from idx, skip i > idx && same as previous, recurse with i + 1"
time: "O(2^n)"
space: "O(n)"
date: 2026-06-30
---

# Problem
Unique combinations summing to \`target\`, each element used once, input has duplicates.

# Approach
## Loop Backtracking with Sibling Dedup
Sort. Loop from \`idx\`, skip \`i > idx && candidates[i] == candidates[i-1]\`. Break once \`candidates[i] + sum > target\`. Recurse with \`i + 1\`, no reuse.

Trap: \`set<vector<int>>\` dedup is TLE, prune at the source.

### Code
\`\`\`cpp
void solve(vector<vector<int>>& ans, vector<int>& curr,
           vector<int>& candidates, int idx, int target, int sum) {
    if (sum == target) { ans.push_back(curr); return; }
    for (int i = idx; i < candidates.size(); i++) {
        if (candidates[i] + sum > target) break;
        if (i > idx && candidates[i] == candidates[i-1]) continue;
        curr.push_back(candidates[i]);
        solve(ans, curr, candidates, i+1, target, sum + candidates[i]);
        curr.pop_back();
    }
}

vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
    vector<vector<int>> ans;
    vector<int> curr;
    sort(candidates.begin(), candidates.end());
    solve(ans, curr, candidates, 0, target, 0);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(2^n)$
- Space: $O(n)$
`,"../dsa-notes/Combination Sum.md":`---
link: https://leetcode.com/problems/combination-sum/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "take and stay at idx (reuse) or skip to idx + 1"
time: "O(2^(t/m))"
space: "O(t/m)"
date: 2026-06-30
---

# Problem
Combinations of distinct candidates summing to \`target\`, unlimited reuse.

# Approach
## Include/Exclude
Skip moves to \`idx + 1\`. Take stays at \`idx\`, that's what allows reuse.

### Code
\`\`\`cpp
void solve(vector<vector<int>>& ans, vector<int>& curr,
           vector<int>& candidates, int idx, int target, int sum) {
    if (sum == target) { ans.push_back(curr); return; }
    if (sum > target || idx == candidates.size()) return;

    solve(ans, curr, candidates, idx+1, target, sum);                 // exclude
    curr.push_back(candidates[idx]);
    solve(ans, curr, candidates, idx, target, sum + candidates[idx]); // include (reuse allowed)
    curr.pop_back();
}

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    vector<vector<int>> ans;
    vector<int> curr;
    solve(ans, curr, candidates, 0, target, 0);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(2^{t/m})$, t = target, m = smallest candidate
- Space: $O(t/m)$
`,"../dsa-notes/Come Be My Friend, Don't Be So Scared (Easy Version).md":`---
link:
rating:
contest:
topics:
  - "[[Constructive]]"
  - "[[Math]]"
source: CodeForces
star: false
blind75: false
mastery:
review:
insight: "each detector end cuts one gap between neighbours, need n-1 cuts plus one end on an edge, so k = (n+1)/2. Place [i, i+k-1]"
time: "O(n)"
space: "O(1)"
date: 2026-10-17
code: "[[CodeForces/D_1_Come_Be_My_Friend_Don_t_Be_So_Scared_Easy_Version.cpp]]"
---

# Problem
Pick the fewest segments on 1..n so every spot gets a different yes/no pattern of "am I inside this segment".

# Observation
Neighbours i and i+1 differ only if some segment ends between them. There are n-1 gaps and each segment has 2 ends. Spots 1 and n can't both be uncovered or both read all "no", so one end sits on an edge. 2k >= n gives k = (n+1)/2.

Construction: k segments of length k shifted by one, [i, i+k-1]. For n=6 that's [1,3], [2,4], [3,5].

Mistakes I made:
- Misread it as covering all spots. A segment over everything says yes for all spots and tells nothing.
- Guessed k = n/3 + 1 from too few values. Fails at n=5.
- Forgot n = 1. The formula gives 1 and prints [1, 0]. Answer is 0.

\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define mod 1e9 + 7
void solve()
{
    int n;
    cin >> n;
    int m;
    cin >> m;
    if (n == 1)
    {
        cout << 0 << endl;
        return;
    }

    int numDet = (n + 1) / 2;
    cout << numDet << endl;

    for (int i = 1; i < numDet; i++)
    {
        cout << i << " " << (i + numDet - 1) << endl;
    }
    cout << numDet << " " << n - 1 << endl;
}
int main()
{
    ll t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
\`\`\`
`,"../dsa-notes/Construct Binary Tree from Preorder and Inorder Traversal.md":`---
link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "preorder[i] is the root, its inorder index splits left/right. hashmap + inorder bounds"
time: "O(n)"
space: "O(n)"
date: 2026-06-29
---

# Problem
Build the tree from preorder and inorder.

# Approach
## Slicing
Root = \`preorder[0]\`, its inorder index \`idx\` = left subtree size. Slice both arrays and recurse. Store slices in named vectors, temporaries don't bind to \`vector<int>&\`.

### Code
\`\`\`cpp
TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    if (preorder.size() == 0 || inorder.size() == 0) return nullptr;
    TreeNode* root = new TreeNode(preorder[0]);

    int idx = 0;
    for (idx = 0; idx < inorder.size(); idx++)
        if (inorder[idx] == preorder[0]) break;

    vector<int> lp(preorder.begin()+1, preorder.begin()+1+idx);
    vector<int> li(inorder.begin(), inorder.begin()+idx);
    vector<int> rp(preorder.begin()+1+idx, preorder.end());
    vector<int> ri(inorder.begin()+idx+1, inorder.end());
    root->left  = buildTree(lp, li);
    root->right = buildTree(rp, ri);
    return root;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$

## Index Bounds + Hashmap
Pass inorder bounds \`[inL, inR]\` and a global preorder index instead of slicing. Hashmap for inorder lookups.

### Code
\`\`\`cpp
class Solution {
    unordered_map<int,int> mp;
    int preIdx = 0;

    TreeNode* build(vector<int>& pre, int inL, int inR) {
        if (inL > inR) return nullptr;
        int val = pre[preIdx++];
        TreeNode* root = new TreeNode(val);
        int mid = mp[val];
        root->left  = build(pre, inL, mid-1);
        root->right = build(pre, mid+1, inR);
        return root;
    }

public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        for (int i = 0; i < inorder.size(); i++) mp[inorder[i]] = i;
        return build(preorder, 0, inorder.size()-1);
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Container with most water.md":`---
link: https://leetcode.com/problems/container-with-most-water/
difficulty: Medium
topics:
  - "[[Two Pointers]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "two pointers from ends, move the shorter wall"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Pick two lines that hold the most water.

# Approach
## Two Pointers
\`area = min height * width\`. Width only shrinks, so move the shorter wall, it's the only way the min height can go up.

### Code
\`\`\`cpp
int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int water = 0;
    while(left < right){
        int ar = min(height[right], height[left]) * (right - left);
        water = max(ar, water);
        if(height[left] < height[right])
            left++;
        else right--;
    }
    return water;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Contains Duplicate.md":`---
link: https://leetcode.com/problems/contains-duplicate/
difficulty: Easy
topics:
  - "[[Arrays]]"
  - "[[Hash Maps]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "hash set, return true on first repeat"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Check if any value appears twice.

# Approach
## Hash Set
Return true on the first value already seen.

### Code
\`\`\`cpp
bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for(int num : nums) {
        if(seen.count(num)) return true;
        seen.insert(num);
    }
    return false;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Copy List With Random Pointer.md":`---
link: https://leetcode.com/problems/copy-list-with-random-pointer/
difficulty: Medium
topics:
  - "[[Linked Lists]]"
  - "[[Hash Maps]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "map old -> new. pass 1 create copies, pass 2 wire next and random through the map"
time: "O(n)"
space: "O(n)"
date: 2026-06-27
---

# Problem
Deep copy a list with \`next\` and \`random\` pointers.

# Approach
## HashMap, Two Pass
Pass 1 creates every copy, pass 2 wires \`next\` and \`random\` via the map. \`mp[nullptr]\` is \`nullptr\`, so nulls need no special case.

### Code
\`\`\`cpp
Node* copyRandomList(Node* head) {
    unordered_map<Node*, Node*> mp;
    for (Node* cur = head; cur; cur = cur->next)
        mp[cur] = new Node(cur->val);
    for (Node* cur = head; cur; cur = cur->next) {
        mp[cur]->next   = mp[cur->next];
        mp[cur]->random = mp[cur->random];
    }
    return mp[head];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## HashMap, Single Pass
Create copies on demand, check the map first.

### Code
\`\`\`cpp
Node* copyRandomList(Node* head) {
    if (!head) return nullptr;
    unordered_map<Node*, Node*> mp;
    Node* ans = new Node(head->val);
    Node* hPtr = head, *aPtr = ans;
    mp[hPtr] = aPtr;
    while (hPtr) {
        if (!mp.count(hPtr->next))
            mp[hPtr->next] = hPtr->next ? new Node(hPtr->next->val) : nullptr;
        aPtr->next = mp[hPtr->next];

        if (!mp.count(hPtr->random))
            mp[hPtr->random] = hPtr->random ? new Node(hPtr->random->val) : nullptr;
        aPtr->random = mp[hPtr->random];

        hPtr = hPtr->next;
        aPtr = aPtr->next;
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

- Map old node to its copy, two passes. A random pointer can point forward, so every copy has to exist before wiring
- Null \`random\`: seed \`mp[nullptr] = nullptr\` or check before the lookup
- O(1) space: weave copies in (\`A A' B B'\`), \`A'->random = A->random->next\`, then split and restore the original
`,"../dsa-notes/Count Array Pairs Divisible by K.md":`---
link: https://leetcode.com/problems/count-array-pairs-divisible-by-k/
difficulty: Medium
topics:
  - "[[Math]]"
  - "[[Hash Maps]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "replace a with gcd(a,k), count earlier gcds that are multiples of k/g"
time: "O(n * d(k))"
space: "O(d(k))"
date: 2026-08-21
---

# Problem
Count pairs \`i < j\` with \`nums[i] * nums[j] % k == 0\`.

# Approach
## GCD Reduction + Bucket Map
\`k | a*b\` only depends on \`gcd(a,k)\` and \`gcd(b,k)\`. Reduce each value to \`g = gcd(nums[i], k)\`, always a divisor of \`k\`, so at most \`d(k)\` keys. See [[GCD of Two Numbers]].

Pair works iff the other \`g\` is a multiple of \`k / g\`. Query the map before inserting \`g\`, so each pair counts once.

Mistakes I made:
- Building the full map upfront double counts and self-pairs.
- Bucketing by shared prime factors drops exponents: \`k=8, [2,2]\`.

### Code
\`\`\`cpp
class Solution {
public:
    int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    long long countPairs(vector<int>& nums, int k) {
        unordered_map<int, int> mp;
        long long ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            int g = gcd(k, nums[i]);
            int factor = k / g;
            for (auto iter : mp) {
                if (iter.first % factor == 0) {
                    ans += iter.second;
                }
            }
            mp[g]++;
        }
        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot d(k))$
- Space: $O(d(k))$
`,"../dsa-notes/Count Good Nodes in Binary Tree.md":`---
link: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[Recursion]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "pass the path max down by value, count nodes with val >= max"
time: "O(n)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Count nodes with no greater value on the path from the root.

# Approach
## DFS with Path Max
Pass the max down by value. Good if \`val >= max\`.

Trap: passing \`m\` by reference leaks the left branch's max into the right.

### Code
\`\`\`cpp
int solve(TreeNode* root, int m) {
    if (!root) return 0;
    m = max(root->val, m);
    int l = solve(root->left, m);
    int r = solve(root->right, m);
    return (m <= root->val) ? l + r + 1 : l + r;
}

int goodNodes(TreeNode* root) {
    return solve(root, INT_MIN);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Counting Bits.md":`---
link: https://leetcode.com/problems/counting-bits/
difficulty: Easy
topics:
  - "[[Bit Manipulation]]"
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "ans[i] = ans[i >> 1] + (i & 1)"
time: "O(n)"
space: "O(n)"
date: 2026-08-23
---

# Problem
Number of set bits for every \`i\` in \`0..n\`.

# Approach
## Per Number
Shift-and-check loop from [[Number of 1 Bits]] for each \`i\`.

### Code
\`\`\`cpp
class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> ans;
        for (int i = 0; i <= n; i++) {
            int t = 32;
            int curr = i;
            ans.push_back(0);
            while (t--) {
                int c = curr & 1;
                curr = curr >> 1;
                ans[i] += c;
            }
        }
        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(32n)$
- Space: $O(n)$

## DP
\`i >> 1\` is smaller and already computed, \`i & 1\` is the dropped bit.

### Code
\`\`\`cpp
class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> ans(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            ans[i] = ans[i >> 1] + (i & 1);
        }
        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Course Schedule II.md":`---
link: https://leetcode.com/problems/course-schedule-ii/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Topological Sort]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "Kahn's, the pop order is the answer. order.size() < n = cycle"
time: "O(V + E)"
space: "O(V + E)"
date: 2026-08-29
---

# Problem
Return any valid course order, or \`[]\` if impossible.

# Approach
Same as [[Course Schedule]], Kahn's pop order is the answer.

## Adjacency Matrix
Works but wasteful for a sparse graph.

### Code
\`\`\`cpp
class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses, vector<int>(numCourses, 0));

        for (auto course : prerequisites) {
            graph[course[0]][course[1]] = 1;
        }

        queue<int> q;
        vector<int> indegree(numCourses, 0);
        for (int i = 0; i < numCourses; i++) {
            for (int j = 0; j < numCourses; j++)
                indegree[i] += graph[i][j];

            if (indegree[i] == 0)
                q.push(i);
        }

        vector<int> ans;

        while (!q.empty()) {
            int curr = q.front();
            q.pop();
            ans.push_back(curr);

            for (int i = 0; i < numCourses; i++) {
                if (graph[i][curr] == 1) {
                    indegree[i]--;
                    if (indegree[i] == 0)
                        q.push(i);
                    graph[i][curr] = 0;
                }
            }
        }

        return ans.size() == numCourses ? ans : vector<int>();
    }
};
\`\`\`

### Complexity
- Time: $O(V^2)$
- Space: $O(V^2)$

## Adjacency List

### Code
\`\`\`cpp
class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses, vector<int>());
        vector<int> indegree(numCourses, 0);
        for (auto pre : prerequisites) {
            graph[pre[1]].push_back(pre[0]);
            indegree[pre[0]]++;
        }

        queue<int> q;
        for (int i = 0; i < numCourses; i++)
            if (indegree[i] == 0) q.push(i);

        vector<int> order;

        while (!q.empty()) {
            int curr = q.front();
            q.pop();
            order.push_back(curr);
            for (auto i : graph[curr])
                if (--indegree[i] == 0) q.push(i);
        }

        return order.size() == numCourses ? order : vector<int>();
    }
};
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V + E)$
`,"../dsa-notes/Course Schedule.md":`---
link: https://leetcode.com/problems/course-schedule/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Topological Sort]]"
  - "[[DFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "cycle in the prereq graph = can't finish. 3-color DFS or Kahn's count < n"
time: "O(V + E)"
space: "O(V + E)"
date: 2026-08-22
---

# Problem
Can all courses be finished given prerequisite pairs?

# Approach
## DFS, 3-Color
No cycle = finishable. See [[Cycle Detection]]. \`0\` unvisited, \`1\` on the current path, \`2\` done. Hitting a \`1\` is a back edge = cycle.

Mistakes I made:
- Ignored the recursive call's return value, so the cycle signal got lost.
- No early return on \`color == 2\`, TLE on shared prerequisites.

### Code
\`\`\`cpp
class Solution {
public:
    bool dfs(vector<int>& color, int ind, vector<vector<int>>& graph) {
        if (color[ind] == 1)
            return true;
        if (color[ind] == 2)
            return false;

        color[ind] = 1;
        for (auto i : graph[ind]) {
            if (dfs(color, i, graph))
                return true;
            color[i] = 2;
        }

        return false;
    }

    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<int> color(numCourses, 0);
        vector<vector<int>> graph(numCourses, vector<int>());

        for (auto v : prerequisites) {
            graph[v[0]].push_back(v[1]);
        }

        for (auto v : prerequisites) {
            if (color[v[0]] == 0) {
                if (dfs(color, v[0], graph)) {
                    return false;
                }
                color[v[0]] = 2;
            }
        }

        return true;
    }
};
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V + E)$

## Kahn's (BFS)
Push indegree 0 nodes, pop and decrement neighbours. Cycle nodes never reach 0, so \`completed < n\`. See [[Kahn's Algorithm]].

### Code
\`\`\`cpp
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        vector<int> indegree(numCourses, 0);

        for (auto& v : prerequisites) {
            graph[v[1]].push_back(v[0]);
            indegree[v[0]]++;
        }

        queue<int> q;
        for (int i = 0; i < numCourses; i++)
            if (indegree[i] == 0)
                q.push(i);

        int completed = 0;
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            completed++;

            for (int next : graph[node]) {
                if (--indegree[next] == 0)
                    q.push(next);
            }
        }

        return completed == numCourses;
    }
};
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V + E)$
`,"../dsa-notes/Daily Temperatures.md":`---
link: https://leetcode.com/problems/daily-temperatures/
difficulty: Medium
topics:
  - "[[Stack]]"
  - "[[Monotonic Stack]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "monotonic stack of indices, pop while current is warmer and set their answer"
time: "O(n)"
space: "O(n)"
date: 2026-05-28
---

# Problem
Days until a warmer temperature for each day.

# Approach
## Monotonic Stack
Stack of indices. While the current temp is higher than the top, the top's answer is \`i - top\`, pop. Push \`i\`.

### Code
\`\`\`cpp
vector<int> dailyTemperatures(vector<int>& temperatures) {
    int n = temperatures.size();
    vector<int> ans(n, 0);
    stack<int> s;

    for (int i = 0; i < n; i++) {
        int curr = temperatures[i];
        while (!s.empty() && temperatures[s.top()] < curr) {
            ans[s.top()] = i - s.top();
            s.pop();
        }
        s.push(i);
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Decode Ways.md":`---
link: https://leetcode.com/problems/decode-ways/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery: red
review: 2026-11-09
insight: "ways(i) = ways(i+1) if s[i] != '0' + ways(i+2) if 10..26. base ways(n) = 1"
time: "O(n)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Digits map to \`A-Z\` via \`1-26\`. Count decodings. \`'0'\` can't stand alone.

# Approach
\`ways(i) = (s[i] != '0' ? ways(i+1) : 0) + (10 <= s[i..i+1] <= 26 ? ways(i+2) : 0)\`, \`ways(n) = 1\`.

## Backtracking
Mistakes I made: base case returned 0 instead of 1, and recursed without checking validity. \`"12"\` gave 3.

### Code
\`\`\`cpp
int backtrack(string& s, int start) {
    if (start >= s.size())
        return 1;

    int num = stoi(s.substr(start, 1));
    int count = 0;
    if (num > 0) {
        count += backtrack(s, start + 1);
    }

    if (start <= s.size() - 2) {
        num = stoi(s.substr(start, 2));
        if (num > 9 && num <= 26) {
            count += backtrack(s, start + 2);
        }
    }

    return count;
}
\`\`\`

### Complexity
- Time: $O(2^n)$
- Space: $O(n)$

## Memoization
Map keyed on \`start\`. \`find()\` avoids a sentinel since 0 is a valid answer.

### Code
\`\`\`cpp
class Solution {
public:
    unordered_map<int, int> mp;
    int backtrack(string& s, int start) {
        if (start >= s.size())
            return 1;
        if (mp.find(start) != mp.end())
            return mp[start];

        int num = stoi(s.substr(start, 1));
        int count = 0;
        if (num > 0) {
            count += backtrack(s, start + 1);
        }

        if (start <= s.size() - 2) {
            num = stoi(s.substr(start, 2));
            if (num > 9 && num <= 26) {
                count += backtrack(s, start + 2);
            }
        }

        return mp[start] = count;
    }

    int numDecodings(string s) { return backtrack(s, 0); }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Two Variables
Same recurrence backwards with \`next1\`, \`next2\`.

Trap: \`s.size() - 2\` underflows for size 1. Harmless here, single digits fail \`num > 9\`.

### Code
\`\`\`cpp
class Solution {
public:
    int numDecodings(string s) {
        int next1 = 1;
        int next2 = 0;

        for (int i = s.size() - 1; i >= 0; i--) {
            int curr = 0;
            if (s[i] - '0' > 0) {
                curr += next1;
            }

            if (i <= s.size() - 2) {
                int num = stoi(s.substr(i, 2));
                if (num > 9 && num <= 26) {
                    curr += next2;
                }
            }

            next2 = next1;
            next1 = curr;
        }

        return next1;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$

- A \`'0'\` digit has 0 ways. Do not copy \`dp[i+1]\` into it
- Two digits need 10..26. Skipping the \`'0'\` start already gives the lower bound
- \`dp(n + 1)\` with \`dp[n] = 1\` removes the last-char special case and the \`i + 2 < n\` guard
- Tests: \`226\` is 3, \`10\` is 1, \`100\` is 0, \`2101\` is 1, \`1111\` is 5
- O(1) space: \`next\`, \`next2\`, shift before overwrite
`,"../dsa-notes/Delete Node in a BST.md":`---
link: https://leetcode.com/problems/delete-node-in-a-bst/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "two children: copy the inorder successor's val, then delete it from the right subtree"
time: "O(h)"
space: "O(h)"
date: 2026-06-30
---

# Problem
Delete \`key\` from a BST and return the root.

# Approach
## Recursive Delete
Navigate by BST property. On the node:
1. No children: return nullptr
2. One child: return it
3. Two children: copy the inorder successor's val, delete the successor from the right subtree

Return \`root\` from every branch so parents rewire themselves.

Traps:
- \`root->right = deleteNode(...)\`, not \`return deleteNode(...)\`.
- Moving \`succ\` doesn't delete it, call \`deleteNode(root->right, succ->val)\`.

### Code
\`\`\`cpp
TreeNode* deleteNode(TreeNode* root, int key) {
    if (!root) return nullptr;
    if (root->val == key) {
        if (!root->left && !root->right) return nullptr;
        if (!root->left) return root->right;
        if (!root->right) return root->left;
        TreeNode* succ = root->right;
        while (succ->left) succ = succ->left;
        root->val = succ->val;
        root->right = deleteNode(root->right, succ->val);
    } else if (key > root->val) {
        root->right = deleteNode(root->right, key);
    } else {
        root->left = deleteNode(root->left, key);
    }
    return root;
}
\`\`\`

### Complexity
- Time: $O(h)$
- Space: $O(h)$
`,"../dsa-notes/Delete Operation for Two Strings.md":`---
link: https://leetcode.com/problems/delete-operation-for-two-strings/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "answer = n + m - 2 * LCS"
time: "O(n * m)"
space: "O(n * m)"
date: 
---

# Problem
Min deletions from either string to make them equal.

# Approach
## LCS
[[Longest Common Subsequence]], answer \`n + m - 2 * lcs\`.

### Code
\`\`\`cpp
int minDistance(string word1, string word2) {
    int n = word1.size(); int m = word2.size();
    vector<vector<int>> t(n+1, vector<int>(m+1));

    for(int i = 0; i < n+1; i++){
        for(int j = 0; j < m+1; j++){
            if(i == 0 || j == 0)
                t[i][j] = 0;
            else{
                if(word1[i-1] == word2[j-1])
                    t[i][j] = t[i-1][j-1] + 1;
                else
                    t[i][j] = max(t[i-1][j], t[i][j-1]);
            }
        }
    }

    int l = t[n][m];
    return n - l + m - l;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Delete and Earn.md":`---
link: https://leetcode.com/problems/delete-and-earn/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sum value * freq per unique value, then house robber where adjacent values conflict"
time: "O(n log n)"
space: "O(n)"
date: 2023-05-23
---

# Problem
Take \`nums[i]\` to earn it and delete all \`nums[i] ± 1\`. Max points.

# Approach
## House Robber on Unique Values
Sort, collect unique values and their counts. Consecutive values (diff 1) can't both be taken, that's [[House Robber]]. Diff > 1 means take both.

### Code
\`\`\`cpp
int deleteAndEarn(vector<int> &nums)
{
    if (nums.size() == 1)
    {
        return nums[0];
    }
    unordered_map<int, int> m;
    vector<int> uni;
    int prev = -1;
    sort(nums.begin(), nums.end());
    for (int i = 0; i < nums.size(); i++)
    {
        m[nums[i]]++;
        if (nums[i] == prev)
            continue;
        else
        {
            uni.push_back(nums[i]);
            prev = nums[i];
        }
    }

    int t1 = 0, t2 = 0;

    for (int i = 0; i < uni.size(); i++)
    {
        if (i > 0 && uni[i] - uni[i - 1] == 1)
        {
            int temp = t2;
            t2 = max(t2, t1 + uni[i] * m[uni[i]]);
            t1 = temp;
        }
        else
        {
            int temp = t2;
            t2 = t2 + uni[i] * m[uni[i]];
            t1 = max(temp, t1);
        }
    }

    return max(t1, t2);
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Design Add and Search Words Data Structure.md":`---
link: https://leetcode.com/problems/design-add-and-search-words-data-structure/
difficulty: Medium
topics:
  - "[[Tries]]"
  - "[[DFS]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "trie, on '.' DFS into every child"
time: "O(26^L) search"
space: "O(total chars)"
date: 2026-11-08
---

# Problem
Add words and search with \`.\` as a wildcard.

# Approach
## Trie + DFS
Normal trie insert. Search with DFS, on \`.\` try every child.

### Code
\`\`\`cpp
class TrieNode {
public:
    unordered_map<char, TrieNode*> map;
    bool isEnd;
};

class WordDictionary {
    TrieNode* root;

    bool dfs(TrieNode* node, string word, int idx) {
        if(idx == word.size())
            return node->isEnd;

        char c = word[idx];
        if(c == '.'){
            for(auto &p: node->map){
                if(dfs(p.second, word, idx+1))
                    return true;
            }

            return false;
        }

        if(node->map.find(c) == node->map.end())
            return false;

        return dfs(node->map[c], word, idx+1);
    }
public:
    WordDictionary() {
        root = new TrieNode();
    }

    void addWord(string word) {
        TrieNode* cur = root;

        for(char c: word) {
            if(cur->map.find(c) == cur->map.end())
                cur->map[c] = new TrieNode();
            cur = cur->map[c];
        }
        cur->isEnd = true;
    }

    bool search(string word) {
        return dfs(root, word, 0);
    }
};
\`\`\`

### Complexity
- Time: $O(L)$ add, $O(26^L)$ worst case search
- Space: $O(\\text{total chars})$

- Trie, \`.\` tries every existing child and returns true if any works
- \`substr\` per step copies the rest of the pattern, O(L^2). Pass an index into the same string
- Children as indices into a node vector works, 0 means no child since the root is never a child
- Cleaner: \`Node* next[26] = {}\` and \`dfs(w, pos, node)\`
`,"../dsa-notes/Detect Cycle in 2D Grid.md":`---
link: https://leetcode.com/problems/detect-cycles-in-2d-grid/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Arrays]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "BFS per same-char region with parent cell, visited neighbour that isn't the parent = cycle"
time: "O(m * n)"
space: "O(m * n)"
date: 
---

# Problem
Find a cycle of length >= 4 of the same character in a grid, no immediate backtracking.

# Approach
## BFS with Parent
Same as [[Detect cycle in Undirected graph]] but only move to cells with the same char. Carry the parent cell, a visited neighbour that isn't the parent is a cycle.

### Code
\`\`\`cpp
bool bfs(vector<vector<char>> &grid, vector<vector<bool>> &visited, int i, int j, char ch){
    queue<pair<pair<int, int>,pair<int, int>>> q;
    q.push({{i, j}, {-1,-1}});
    visited[i][j] = true;

    while(!q.empty()){
        int x = q.front().first.first;
        int y = q.front().first.second;

        int px = q.front().second.first;
        int py = q.front().second.second;
        q.pop();

        for(int a = -1; a<=1; a++){
            for(int b = -1; b<=1; b++){
                if(x+a >= grid.size() || y+b >= grid[0].size() || a+x < 0 || b+y < 0)
                    continue;
                if(grid[x+a][y+b] != ch)
                    continue;
                if(abs(a) == abs(b))
                    continue;
                else{
                    if(!visited[x+a][y+b]){
                        q.push({{x+a, y+b}, {x,y}});
                        visited[x+a][y+b] = true;
                    }
                    else if(px == x+a && py == y+b)
                        continue;
                    else
                        return true;
                }
            }
        }
    }

    return false;
}

bool containsCycle(vector<vector<char>>& grid) {
    int m = grid.size();
    int n = grid[0].size();
    vector<vector<bool>> visited(m, vector<bool> (n, 0));

    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            if(!visited[i][j])
                if(bfs(grid, visited, i, j, grid[i][j]))
                    return true;
        }
    }

    return false;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Detect cycle in Undirected graph.md":`---
link: https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1
difficulty: Easy
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
  - "[[DFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "BFS/DFS carrying the parent, visited neighbour that isn't the parent = cycle"
time: "O(V + E)"
space: "O(V)"
date: 
---

# Problem
Check if an undirected graph has a cycle.

# Approach
## BFS with Parent
Push \`{node, parent}\`. A visited neighbour that isn't the parent means a cycle. Run from every unvisited node, the graph may be disconnected.

### Code
\`\`\`cpp
bool bfs(int vert, vector<int> adj[], vector<bool> &visited){
    queue<pair<int, int>> q;

    q.push({vert, -1});
    visited[vert] = true;

    while(!q.empty()){
        int vert = q.front().first;
        int parent = q.front().second;
        q.pop();

        for(int i = 0; i < adj[vert].size(); i++){
            if(visited[adj[vert][i]] && adj[vert][i] != parent){
                return true;
            }
            else{
                if(!visited[adj[vert][i]]){
                    visited[adj[vert][i]] = true;
                    q.push({adj[vert][i], vert});
                }
            }
        }
    }

    return false;
}

// Function to detect cycle in an undirected graph.
bool isCycle(int V, vector<int> adj[]) {
    // Code here
    vector<bool> visited(V, 0);
    for(int i = 0; i < V; i++){
        if(!visited[i]){
            if(bfs(i, adj, visited))
                return true;
        }
    }

    return false;
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V)$
`,"../dsa-notes/Determine Whether Matrix Can Be Obtained By Rotation.md":`---
link: https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
difficulty: Easy
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "rotate 90 (ans[j][n-1-i] = mat[i][j]) at most 3 times and compare"
time: "O(n²)"
space: "O(n²)"
date: 
---

# Problem
Check if \`mat\` can become \`target\` by rotating 90 degrees some number of times.

# Approach
## Rotate and Compare
Rotation: \`ans[j][m-i] = mat[i][j]\`. Compare, rotate up to 3 times.

### Code
\`\`\`cpp
void rotate(vector<vector<int>>& mat){        
       int m = mat.size() - 1;
       int n = mat[0].size() - 1;
       vector<vector<int>> ans (m+1, vector<int> (n+1, 0));
       for(int i = 0; i <= m; i++){
           for(int j = 0; j <= n; j ++){
               ans[j][m-i] = mat[i][j];
           }
       }
       mat.clear();
       mat = ans;
   }
   bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {
       int t = 3;
       if(mat == target)
           return true;
       while(t--){
           rotate(mat);
           for(auto i: mat){
               for(auto j: i){
                   cout<<j<<" ";
               }
               cout<<endl;
           }
           cout<<endl;
           if(mat == target)
               return true;
       }
       return false;
   }
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Diameter of Binary Tree.md":`---
link: https://leetcode.com/problems/diameter-of-binary-tree/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "at each node max with lh + rh, return height up"
time: "O(n)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Longest path between any two nodes, in edges.

# Approach
## DFS Height + Global Max
Path through a node = \`lh + rh\`. Track the max via ref, return height up.

GFG counts nodes, LC counts edges: \`return res - 1\`.

### Code
\`\`\`cpp
int dia(TreeNode* root, int& res) {
    if (!root)
        return 0;

    int left = dia(root->left, res);
    int right = dia(root->right, res);
    int temp = max(left, right) + 1;
    int take = left + right + 1;  // node count on path through this node
    res = max(res, take);

    return temp;  // height
}

int diameterOfBinaryTree(TreeNode* root) {
    int res = 0;
    dia(root, res);
    return res - 1;  // convert node count → edge count
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$

## Return Pair
Return \`{height, diameter}\`, no ref needed.

### Code
\`\`\`cpp
pair<int,int> dia(TreeNode* root) {
    if (!root) return {0, 0};
    auto [lh, ld] = dia(root->left);
    auto [rh, rd] = dia(root->right);
    return {max(lh, rh) + 1, max({ld, rd, lh + rh})};
}

int diameterOfBinaryTree(TreeNode* root) {
    return dia(root).second;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Diameter of Tree.md":`---
link: https://www.geeksforgeeks.org/problems/diameter-of-binary-tree/1
difficulty: Easy
topics:
  - "[[Recursion]]"
  - "[[Trees]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "same as LC diameter but counted in nodes, l + r + 1"
time: "O(n)"
space: "O(h)"
date: 
---

# Problem
Number of nodes on the longest path between two leaves. Nodes version of [[Diameter of Binary Tree]].

# Approach
## DFS Height + Global Max
Path through node = \`l + r + 1\`, return \`max(l, r) + 1\`.

### Code
\`\`\`cpp
int solve(Node* root, int &res){
    if(root == NULL)
        return 0;
    int left = solve(root->left, res);
    int right = solve(root->right, res);
    int temp = max(left, right) + 1;
    int ans = right + left + 1;
    res = max(res, ans);
    return temp;
}

int diameter(Node* root) {
    // Your code here
    int res = 0;
    int temp = solve(root, res);
    return res;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Dijkstra's Algorithm.md":`---
link: https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Dijkstra]]"
  - "[[Heap]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "min pq of {dist, node}, push on relax. no negative edges"
time: "O(E log V)"
space: "O(V)"
date: 
---

# Problem
Single source shortest path. No negative edges.

# Approach
## Priority Queue
Min heap of \`{dist, node}\`. Relax neighbours, push when a distance improves.

### Code
\`\`\`cpp
vector <int> dijkstra(int V, vector<vector<int>> adj[], int S)
{
    // Code here
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, 1e9);

    dist[S] = 0;
    pq.push({0, S});

    while(!pq.empty()){
        int d = pq.top().first;
        int node = pq.top().second;
        pq.pop();

        for(auto i : adj[node]){
            int wt = i[1];
            int v = i[0];

            if(dist[v] > wt + d){
                dist[v] = wt + d;
                pq.push({dist[v], v});
            }
        }
    }

    return dist;
}
\`\`\`

### Complexity
- Time: $O(E \\log V)$
- Space: $O(V)$

## Set
Same, but a set lets you erase the stale entry.

### Code
\`\`\`cpp
vector <int> dijkstra(int V, vector<vector<int>> adj[], int S)
{
    // Code here
    set<pair<int, int>> st;
    vector<int> dist(V, 1e9);

    dist[S] = 0;
    st.insert({0, S});

    while(!st.empty()){
        auto it = *st.begin();
        int d = it.first;
        int v = it.second;
        st.erase(it);

        for(auto i : adj[v]){
            if(dist[i[0]] > d + i[1]){
                dist[i[0]] = d + i[1];
                st.insert({dist[i[0]], i[0]});
            }
        }
    }

    return dist;
}
\`\`\`

### Complexity
- Time: $O(E \\log V)$
- Space: $O(V)$
`,"../dsa-notes/Disjoint set (Union-Find).md":`---
link: https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Disjoint Set Union]]"
source: Standard
star: true
blind75: false
mastery:
review:
insight: "path compression + union by size/rank, near O(1) per op"
time: "O(α(n)) per op"
space: "O(n)"
date: 
---

# Problem
Union two nodes and check if two nodes are in the same component.

# Approach
## Path Compression + Union by Rank/Size
\`findUPar\` points every node straight at the root. Union attaches the smaller tree under the bigger one.

By rank: rank only goes up when two equal ranks join. By size: count of nodes in the component.

### Code
\`\`\`cpp
class DSU
{
    vector<int> parent, rank, size;

public:
    DSU(int n)
    {
        rank.resize(n + 1, 0);
        parent.resize(n + 1);
        size.resize(n + 1, 1);
        for (int i = 0; i < n + 1; i++)
            parent[i] = i;
    }

    int findUPar(int node)
    {
        if (parent[node] == node)
            return node;
        return parent[node] = findUPar(parent[node]);
    }

    void unionByRank(int u, int v)
    {
        int ulp_u = findUPar(u);
        int ulp_v = findUPar(v);
        if (rank[ulp_u] < rank[ulp_v])
            parent[ulp_u] = ulp_v;
        else if (rank[ulp_u] > rank[ulp_v])
            parent[ulp_v] = ulp_u;
        else {
            parent[ulp_v] = ulp_u;
            rank[ulp_u]++;
        }
    }

    void unionBySize(int u, int v){
        int ulp_u = findUPar(u);
        int ulp_v = findUPar(v);
        if(ulp_v == ulp_u)
            return;
        else if(size[ulp_u] < size[ulp_v]){
            parent[ulp_u] = ulp_v;
            size[ulp_v] += size[ulp_u];
        }
        else{
            parent[ulp_v] = ulp_u;
            size[ulp_u] += size[ulp_v];
        }
    }
};
\`\`\`

### Complexity
- Time: $O(\\alpha(n))$ per op
- Space: $O(n)$
`,"../dsa-notes/Distance of nearest cell having 1.md":`---
link: https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Arrays]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "multi-source BFS from all 1s at once"
time: "O(m * n)"
space: "O(m * n)"
date: 
---

# Problem
For each cell, distance to the nearest 1.

# Approach
## Multi-Source BFS
Same as [[Rotten Oranges]]. Push every 1 with distance 0, BFS outward.

### Code
\`\`\`cpp
vector<vector<int>>nearest(vector<vector<int>>grid)
{
    // Code here
    int m = grid.size();
    int n = grid[0].size();
    vector<vector<int>> ans(m, vector<int> (n));
    vector<vector<bool>> visited(m, vector<bool> (n, 0));

    queue<pair<pair<int, int>, int>> q;

    for(int i = 0; i < m; i++)
        for(int j = 0; j < n; j++)
            if(grid[i][j] == 1){
                q.push({{i, j}, 0});
                visited[i][j] = true;
            }

    while(!q.empty()){
        int x = q.front().first.first;
        int y = q.front().first.second;
        int dist = q.front().second;
        q.pop();
        ans[x][y] = dist;
        for(int i = -1; i <= 1; i++){
            for(int j = -1; j <= 1; j++){
                if(abs(i) == abs(j))
                    continue;
                if(x+i >= grid.size() || y+j >= grid[0].size() || x+i < 0 || y+j < 0)
                    continue;
                if(!visited[x +i][y+j]){
                    visited[x+i][y+j] = true;
                    q.push({{x+i, y+j}, dist+1});
                }
            }
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Distinct Subsequences.md":`---
link: https://leetcode.com/problems/distinct-subsequences/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery: yellow
review: 2026-11-11
insight: "if chars match take or skip s[i], else skip. t exhausted = 1 way"
time: "O(m * n)"
space: "O(m * n)"
date: 2023-08-06
---

# Problem
Count distinct subsequences of \`s\` equal to \`t\`.

# Approach
## Recursion
Match: take (\`i+1, j+1\`) plus skip (\`i+1, j\`). No match: skip. \`t\` done = 1, \`s\` done = 0.

### Code
\`\`\`cpp
int solve(string s, string t, int ind1, int ind2) {
    if (ind2 == t.size()) return 1;
    if (ind1 == s.size()) return 0;

    int ways = 0;
    if (s[ind1] == t[ind2]) ways = solve(s, t, ind1 + 1, ind2 + 1);
    return ways + solve(s, t, ind1 + 1, ind2);
}

int numDistinct(string s, string t) { return solve(s, t, 0, 0); }
\`\`\`

### Complexity
- Time: $O(2^{m+n})$
- Space: $O(m+n)$

## Tabulation
Variant of [[Longest Common Subsequence]]. \`dp[i][0] = 1\`. Use \`unsigned long long\`, intermediates overflow.

### Code
\`\`\`cpp
int numDistinct(string s, string t) {
    int m = s.size(), n = t.size();
    vector<vector<unsigned long long int>> dp(m + 1, vector<unsigned long long int>(n + 1));
    for (int i = 0; i < m + 1; i++)
        dp[i][0] = 1;
    for (int i = 1; i < m + 1; i++)
    {
        for (int j = 1; j < n + 1; j++)
        {
            if (s[i - 1] == t[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]; // Adding where they match with the case where we dont take the character which matches from s.
            else
                dp[i][j] = dp[i - 1][j];
        }
    }

    return dp[m][n];
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$

## 1D Row
Row \`i\` only reads row \`i + 1\`. A mismatch changes nothing, so only matches update.

### Code
\`\`\`cpp
int numDistinct(string s, string t) {
    int n = s.size(), m = t.size();
    vector<unsigned long long> dp(m + 1, 0);
    dp[m] = 1;
    for (int i = n - 1; i >= 0; i--)
        for (int j = 0; j < m; j++)
            if (s[i] == t[j]) dp[j] += dp[j + 1];
    return dp[0];
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(m)$

- 1D row: inner loop \`j\` must go ascending. \`dp[j+1]\` has to be the old row. \`aaa\` / \`aa\` is 3, descending gave 6
- Use \`long long\` or \`unsigned long long\`, cells that never feed the answer can overflow int
- Backtracking is the same recursion without the memo, exponential
`,"../dsa-notes/Divisibility by Eight.md":`---
link: https://codeforces.com/problemset/problem/550/C
rating: 1500
contest: Codeforces Round 306 (Div 2)
topics:
  - "[[Brute Force]]"
  - "[[Dynamic Programming]]"
  - "[[Math]]"
source: CodeForces
star: true
mastery: red
review: 2026-10-23
insight: "1000 % 8 == 0 so only the last 3 digits matter. Try every subsequence of length 1, 2, 3"
time: "O(n³)"
space: "O(1)"
date: 2026-10-20
code: "[[CodeForces/C_Divisibility_by_Eight.cpp]]"
---

# Problem
Number with up to 100 digits. Cross out some digits so the rest is divisible by 8, no leading zeros. Print it or NO.

# Observation
1000 is divisible by 8, so a number is divisible by 8 iff its last 3 digits are. Any answer trims to at most 3 digits. Triple loop over i < j < k.
- A single 0 is valid. Longer numbers can't start with 0.

DP alternative (generalizes to any k): only the remainder mod 8 matters, since (r*10 + d) % 8 depends only on r. dp[i][r] over take/skip, 100 * 8 states. Rebuild the number by replaying choices or with prev pointers.

Traps:
- First try deleted digits recursively with a string memo. 2^100 states, and stoi crashed on long input. Samples passed anyway.
- Memo key has to be (i, r), not the string.
`,"../dsa-notes/Domino and Tromino Tiling.md":`---
link: https://leetcode.com/problems/domino-and-tromino-tiling/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "dp[n] = 2*dp[n-1] + dp[n-3]"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Ways to tile a \`2 x n\` board with dominoes and trominoes, mod 1e9+7.

# Approach
## Pattern
\`t[n] = 2 * t[n-1] + t[n-3]\`, base 1, 2, 5.

### Code
\`\`\`cpp
int numTilings(int n) {
    vector<long long> t(1001, 0);
    int mod = 1e9 + 7;
    t[0] = 0;
    t[1] = 1;
    t[2] = 2;
    t[3] = 5;
    for(int i = 4; i < n+1; i++){
        t[i] = 2*t[i-1] + t[i-3];
        t[i] %= mod;
    }

    return t[n];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Edit Distance.md":`---
link: https://leetcode.com/problems/edit-distance/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "match: dp[i-1][j-1], else 1 + min(insert, delete, replace)"
time: "O(m * n)"
space: "O(n)"
date: 2023-07-27
---

# Problem
Min insert, delete or replace ops to turn \`word1\` into \`word2\`.

# Approach
Like [[Delete Operation for Two Strings]] plus replace. Empty string base = length of the other. Match: no op. Else \`1 + min(replace, delete, insert)\`.

## Recursion

### Code
\`\`\`cpp
 int minDistance(string word1, string word2)
 {
     int m = word1.size(), n = word2.size();
     if (m == 0)
         return n;
     if (n == 0)
         return m;
     if (word1[m - 1] == word2[n - 1])
         return minDistance(word1.substr(0, m - 1), word2.substr(0, n - 1));
     else
     {
         int replace = minDistance(word1.substr(0, m - 1), word2.substr(0, n - 1));
         int del = minDistance(word1.substr(0, m - 1), word2.substr(0, n));
         int ins = minDistance(word1.substr(0, m), word2.substr(0, n - 1));

        return 1 + min(min(replace, del), ins);
    }
}
\`\`\`

### Complexity
- Time: $O(3^{m+n})$
- Space: $O(m+n)$

## Prefix DP, 1D
Row 0 = inserts, column 0 = deletes. Replace = \`prev[j-1]\`, insert = \`curr[j-1]\`, delete = \`prev[j]\`.

### Code
\`\`\`cpp
int minDistance(string word1, string word2) {
    // prefix based dp - Q that I ask is, what do I need to do to match the first i characters
    // of word1 to the first j characters of word2.
    int m = word1.size(), n = word2.size();
    if (n == 0) return m;
    if (m == 0) return n;

    vector<int> prev(n + 1);
    iota(prev.begin(), prev.end(), 0);  // this is when word1 is empty, so I have no choice but
                                        // to insert the number of characters required.
    vector<int> curr(n + 1);

    for (int i = 1; i < m + 1; i++) {
        curr[0] = i;  // the first column is word2 empty, so I have no choice but to delete the
                      // number of characters in word1.
        for (int j = 1; j < n + 1; j++) {
            if (word1[i - 1] == word2[j - 1])
                curr[j] = prev[j - 1];  // if word1 == word2, no operations are reuired, we just
                                        // carry the operations till now in memory forward.
            else
                curr[j] = 1 + min({
                                  prev[j - 1],  // replace a char
                                  curr[j - 1],  // insert a char
                                  prev[j]       // delete a char
                              });
        }
        prev = curr;
    }

    return curr[n];
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(n)$

## Suffix DP, 1D
\`dp[i][j]\` = ops for \`word1[i:]\` to \`word2[j:]\`. On a match use the diagonal \`prev[j+1]\`.

### Code
\`\`\`cpp
int minDistance(string word1, string word2) {
    int m = word1.size(), n = word2.size();
    if (n == 0) return m;
    if (m == 0) return n;

    vector<int> prev(n + 1);
    for (int i = 0; i < n + 1; i++) prev[i] = n - i;
    vector<int> curr(n + 1);

    for (int i = m - 1; i >= 0; i--) {
        curr[n] = m - i;
        for (int j = n - 1; j >= 0; j--) {
            if (word1[i] == word2[j])
                curr[j] = prev[j + 1];
            else
                curr[j] = 1 + min({curr[j + 1], prev[j], prev[j + 1]});
        }
        prev = curr;
    }

    return curr[0];
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(n)$
`,"../dsa-notes/Encode and Decode Strings.md":`---
link: https://leetcode.com/problems/encode-and-decode-strings/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "prefix each string with length + '#', read the length then that many chars"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Encode a list of strings into one string and decode it back.

# Approach
## Length Prefix
Encode each string as \`len#str\`. Decode: read up to \`#\`, then take \`len\` chars. Works even if strings contain \`#\`.

### Code
\`\`\`cpp
string encode(vector<string>& strs) {
    string s = "";
    for(auto str: strs){
        s += to_string(str.size()) + '#' + str;
    }
    return s;
}

vector<string> decode(string s) {
    int i = 0;
    vector<string> ans;
    while(i < s.size()){
        int j = i;
        while(s[j] != '#') j++;
        int len = stoi(s.substr(i, j - i));
        i = j+1;
        string temp = s.substr(i, len);
        ans.push_back(temp);
        i = i+len;
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Evaluate Reverse Polish Notation.md":`---
link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
difficulty: Medium
topics:
  - "[[Stack]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "stack, on an operator pop y then x and push x op y"
time: "O(n)"
space: "O(n)"
date: 2026-05-28
---

# Problem
Evaluate a postfix expression.

# Approach
## Stack
Push numbers. On an operator pop \`y\` then \`x\`, push \`x op y\`. Order matters for \`-\` and \`/\`.

- \`stack<string>\` works but needs \`stoi\` and \`to_string\` on every operator. Use \`stack<int>\`
- Negative operands like \`"-11"\` are numbers. Match the four operators by exact string

### Code
\`\`\`cpp
int evalRPN(vector<string>& tokens) {
    stack<int> s;
    for (auto t : tokens) {
        if (t == "+" || t == "-" || t == "*" || t == "/") {
            int y = s.top();
            s.pop();
            int x = s.top();
            s.pop();
            if (t == "+") {
                s.push(x + y);
            } else if (t == "-") {
                s.push(x - y);
            } else if (t == "*") {
                s.push(x * y);
            } else {
                s.push(x / y);
            }
        } else {
            s.push(stoi(t));
        }
    }

    return s.top();
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Eventual Safe States.md":`---
link: https://leetcode.com/problems/find-eventual-safe-states/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "reverse the graph, Kahn's from terminal nodes. what gets popped is safe"
time: "O(V + E)"
space: "O(V + E)"
date: 
---

# Problem
Return nodes where every path ends at a terminal node, sorted.

# Approach
## DFS Cycle Detection
Nodes on a cycle or leading into one are unsafe. DFS with \`pathVis\`, mark \`check[node] = true\` only when the DFS finishes without a cycle.

### Code
\`\`\`cpp
bool dfs(int node, vector<vector<int>>& graph, vector<bool> &visited, vector<bool> &pathVis, vector<bool> &check){
    visited[node] = true;
    pathVis[node] = true;
    check[node] = false;

    for(auto i : graph[node]){
        if(!visited[i]){
            if(dfs(i, graph, visited, pathVis, check)){
                check[node] = 0;
                return true;
            }
        }
        else if(pathVis[i]){
            check[node] = false;
            return true;
        }
    }

    check[node] = true;
    pathVis[node] = false;
    return false;
}

vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
    int n = graph.size();
    vector<bool> visited(n, 0);
    vector<bool> pathVis(n, 0);
    vector<bool> check(n, 0);
    vector<int> safe;

    for(int i = 0; i < n; i++)
        if(!visited[i])
            dfs(i, graph, visited, pathVis, check);

    for(int i = 0; i < n; i++)
        if(check[i])
            safe.push_back(i);

    return safe;
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V)$

## Reverse Graph + Kahn's
Reverse edges, terminal nodes now have indegree 0. [[Topological Sort]] from them, everything popped is safe. Sort the answer.

### Code
\`\`\`cpp
vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
    int n = graph.size();
    vector<vector<int>> rev(n);
    vector<int> indegree(n);

    for(int i = 0; i < n; i++){
        for(auto j : graph[i]){
            rev[j].push_back(i);
            indegree[i]++;
        }
    }
    queue<int> q;
    for(int i = 0; i < n; i++)
        if(indegree[i] == 0)
            q.push(i);

    vector<int> ans;

    while(!q.empty()){
        int curr = q.front(); q.pop();
        ans.push_back(curr);
        for(auto i : rev[curr]){
            indegree[i]--;
            if(indegree[i] == 0)
                q.push(i);
        }
    }

    sort(ans.begin(), ans.end());
    return ans;
}
\`\`\`

### Complexity
- Time: $O(V + E + V \\log V)$
- Space: $O(V + E)$
`,"../dsa-notes/Fibonacci Number.md":`---
link: https://leetcode.com/problems/fibonacci-number/
difficulty: Easy
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "same as climbing stairs, keep the last two values"
time: "O(n)"
space: "O(1)"
date: 2023-05-19
---

# Problem
Return the \`n\`th Fibonacci number.

# Approach
## Memoization
Map as the cache. Same recurrence as [[Climbing Stairs]], two variables would make it O(1) space.

### Code
\`\`\`cpp
unordered_map<int, int> a = {{0,0},{1,1}, {2,1}};

int fib(int n)
{
    if(a.find(n) != a.end())
        return a[n];
    else{
        a[n] = fib(n-1) + fib(n-2);
        return a[n];
    }
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Filter Occupied Intervals.md":`---
link: https://leetcode.com/problems/filter-occupied-intervals/
difficulty: Medium
topics:
  - "[[Arrays]]"
  - "[[Sorting]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort and merge (start <= end + 1), then cut the free range with two separate ifs"
time: "O(n log n)"
space: "O(n)"
date: 2026-06-28
---

# Problem
Merge occupied intervals, then remove \`[freeStart, freeEnd]\` from them.

# Approach
## Sort, Merge, Cut
Sort by start. Merge when the next starts at or before \`end + 1\`. Cut with two separate \`if\`s, not \`else if\`, so an interval spanning the free range keeps both halves.

### Code
\`\`\`cpp
vector<vector<int>> filterOccupiedIntervals(vector<vector<int>>& occupiedIntervals, int freeStart, int freeEnd) {
    sort(occupiedIntervals.begin(), occupiedIntervals.end());
    int n = occupiedIntervals.size();
    vector<vector<int>> merged;
    merged.push_back(occupiedIntervals[0]);
    for (int i = 1; i < n; i++) {
        if (occupiedIntervals[i][0] <= merged.back()[1] + 1)
            merged.back()[1] = max(merged.back()[1], occupiedIntervals[i][1]);
        else
            merged.push_back(occupiedIntervals[i]);
    }
    vector<vector<int>> result;
    for (auto& iv : merged) {
        int s = iv[0], e = iv[1];
        if (s < freeStart)
            result.push_back({s, min(e, freeStart - 1)});
        if (e > freeEnd)
            result.push_back({max(s, freeEnd + 1), e});
    }
    return result;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Find All Anagrams in A String.md":`---
link: https://leetcode.com/problems/find-all-anagrams-in-a-string/
difficulty: Medium
topics:
  - "[[Sliding Window]]"
  - "[[Hash Maps]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "window of size |p| with a need-count map and a counter of chars still missing"
time: "O(n)"
space: "O(1)"
date: 2023-04-09
---

# Problem
Start indices of all anagrams of \`p\` in \`s\`.

# Approach
## Sliding Window + Counter
Map of \`p\`'s counts, \`count\` = chars still needed. Entering char decrements, leaving char increments once the window is \`|p|\` long. \`count == 0\` is an anagram.

### Code
\`\`\`cpp
vector<int> findAnagrams(string s, string p)
{
    unordered_map<char, int> freq;
    vector<int> ans;
    int left = 0;
    int right = 0;
    int count = p.size();
    for (auto c : p)
        freq[c]++;
    while (right < s.size())
    {
        if (freq.find(s[right]) != freq.end() && freq[s[right]] > 0)
        {
            count--;
        }

        freq[s[right]]--;
        right++;

        if (count == 0)
            ans.push_back(left);

        if (right - left == p.size())
        {
            if (freq.find(s[left]) != freq.end() && freq[s[left]] >= 0)
            {
                count++;
            }
            freq[s[left]]++;
            left++;
        }
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$, charset size
`,"../dsa-notes/Find Median from Data Stream.md":`---
link: https://leetcode.com/problems/find-median-from-data-stream/
difficulty: Hard
topics:
  - "[[Heap]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "max heap for the low half, min heap for the high half. route by maxHeap.top() then rebalance"
time: "O(log n)"
space: "O(n)"
date: 2026-08-21
---

# Problem
Add numbers from a stream and return the median at any time.

# Approach
## Two Heaps
\`maxHeap\` = smaller half, \`minHeap\` = larger half. Sizes differ by at most 1, \`maxHeap\` gets the extra.

Route the new number by comparing with \`maxHeap.top()\` before rebalancing.

Mistakes I made:
- Pushing everything into \`maxHeap\` breaks the halves. \`10, 9, 8\` gave 10.
- \`minHeap.top()\` on an empty heap is UB.
- Storing the median as \`int\` drops the \`.5\`, use \`/ 2.0\`.

### Code
\`\`\`cpp
class MedianFinder {
public:
    priority_queue<int, vector<int>, greater<int>> minHeap;
    priority_queue<int> maxHeap;

    MedianFinder() {}

    void addNum(int num) {
        if (maxHeap.empty() || num <= maxHeap.top()) {
            maxHeap.push(num);
        } else {
            minHeap.push(num);
        }

        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }

    double findMedian() {
        if (maxHeap.size() > minHeap.size())
            return maxHeap.top();
        return (maxHeap.top() + minHeap.top()) / 2.0;
    }
};
\`\`\`

### Complexity
- Time: $O(\\log n)$ add, $O(1)$ median
- Space: $O(n)$
`,"../dsa-notes/Find Minimum in Rotated Sorted Array.md":`---
link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
difficulty: Medium
topics:
  - "[[Binary Search]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "compare mid with right end, min is in the unsorted half"
time: "O(log n)"
space: "O(1)"
date: 
---

# Problem
Min of a rotated sorted array.

# Approach
## Binary Search
If \`nums[l] < nums[r]\` the range is sorted, \`nums[l]\` is a candidate. Else go to the half with the dip: \`nums[m] >= nums[l]\` means the left half is sorted, go right.

### Code
\`\`\`cpp
int findMin(vector<int>& nums) {
    int l = 0, r = nums.size() - 1, ans = nums[0];

    while(l <= r) {
        if(nums[l] < nums[r])
            ans = min(ans, nums[l]);

        int m = l + (r-l)/2;
        ans = min(ans, nums[m]);

        if(nums[m] >= nums[l])
            l = m + 1;
        else 
            r = m - 1;
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(\\log n)$
- Space: $O(1)$
`,"../dsa-notes/Find Winner on a Tic-Tac-Toe Game.md":`---
link: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
difficulty: Easy
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "check rows, cols and diagonals for a winner, else Pending if moves < 9, else Draw"
time: "O(1)"
space: "O(1)"
date: 
---

# Problem
Given moves on a 3x3 board, return the winner, Draw or Pending.

# Approach
## Simulate
Fill the board, check rows, columns and both diagonals. No winner and fewer than 9 moves = Pending, else Draw.

### Code
\`\`\`cpp
string tictactoe(vector<vector<int>> &moves)
{
    vector<vector<int>> grid(3, vector<int>(3, 0));
    for (int i = 0; i < moves.size(); i++)
    {
        if (i % 2 == 0)
            grid[moves[i][0]][moves[i][1]] = 1;
        else
            grid[moves[i][0]][moves[i][1]] = 2;
    }

    for (int i = 0; i < grid.size(); i++)
    {
        int a = 0;
        int b = 0;
        for (int j = 0; j < grid[i].size(); j++)
        {
            if (grid[i][j] == 1)
                a++;
            else if (grid[i][j] == 2)
                b++;
        }
        if (a == 3)
            return "A";
        if (b == 3)
            return "B";
    }

    for (int i = 0; i < grid[0].size(); i++)
    {
        int a = 0;
        int b = 0;
        for (int j = 0; j < grid.size(); j++)
        {
            if (grid[j][i] == 1)
                a++;
            else if (grid[j][i] == 2)
                b++;
        }
        if (a == 3)
            return "A";
        if (b == 3)
            return "B";
    }

    if ((grid[0][0] == 1 && grid[1][1] == 1 && grid[2][2] == 1) || (grid[0][2] == 1 && grid[1][1] == 1 && grid[2][0] == 1))
        return "A";
    if ((grid[0][0] == 2 && grid[1][1] == 2 && grid[2][2] == 2) || (grid[0][2] == 2 && grid[1][1] == 2 && grid[2][0] == 2))
        return "B";

    if (moves.size() < 9)
        return "Pending";
    return "Draw";
}
\`\`\`
`,"../dsa-notes/Find the Duplicate Number.md":`---
link: https://leetcode.com/problems/find-the-duplicate-number/
difficulty: Medium
topics:
  - "[[Linked Lists]]"
  - "[[Arrays]]"
  - "[[Bit Manipulation]]"
  - "[[Binary Search]]"
source: Leetcode
star: true
blind75: false
mastery: red
review: 2026-11-09
insight: "value as pointer to index makes a cycle, Floyd's entry point is the duplicate"
time: "O(n)"
space: "O(1)"
date: 2026-06-27
---

# Problem
\`n+1\` values in \`[1, n]\`, one repeats. Find it without modifying the array, O(1) space.

# Approach
## Floyd's Cycle Detection
Treat each value as a pointer to an index. Pigeonhole makes a cycle, its entry is the duplicate. Phase 1: slow and fast meet. Phase 2: one pointer from 0, one from the meeting point, both 1 step.

### Code
\`\`\`cpp
int findDuplicate(vector<int>& nums) {
    int slow = 0, fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    int slow2 = 0;
    while (slow != slow2) {
        slow  = nums[slow];
        slow2 = nums[slow2];
    }
    return slow;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$

## Bit Counting
Per bit, count set bits in \`1..n\` vs in \`nums\`. More in \`nums\` means the duplicate has that bit.

### Code
\`\`\`cpp
int findDuplicate(vector<int>& nums) {
    int n = nums.size() - 1, duplicate = 0;
    for (int bit = 0; bit < 32; bit++) {
        int base = 0, actual = 0;
        for (int i = 1; i <= n; i++) base   += (i >> bit) & 1;
        for (int x : nums)          actual  += (x >> bit) & 1;
        if (actual > base) duplicate |= (1 << bit);
    }
    return duplicate;
}
\`\`\`

### Complexity
- Time: $O(32n)$
- Space: $O(1)$

## Binary Search on Value
Count elements \`<= mid\`. More than \`mid\` means the duplicate is in \`[1, mid]\`.

### Code
\`\`\`cpp
int findDuplicate(vector<int>& nums) {
    int lo = 1, hi = nums.size() - 1;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        int count = 0;
        for (int x : nums) count += (x <= mid);
        if (count > mid) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$

- Floyd: treat \`i -> nums[i]\` as a linked list, 0 is outside the cycle, the cycle entry is the duplicate
- Take the first step before the loop, \`slow\` and \`fast\` start equal
- Phase 2: reset \`slow\` to 0, move both one step. Moving \`fast\` two steps breaks it
- Trace \`[1,3,4,2,2]\`: phase 1 meets at 4, phase 2 meets at 2
- Alternative: binary search on the value, count entries <= mid, O(n log n)
`,"../dsa-notes/First Missing Positive.md":`---
link: https://leetcode.com/problems/first-missing-positive/
difficulty: Hard
topics:
  - "[[Arrays]]"
  - "[[Hash Maps]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "cyclic sort: swap each value v in 1..n to index v-1, first i with nums[i] != i+1 is the answer"
time: "O(n)"
space: "O(1)"
date: 2022-12-15
---

# Problem
Smallest missing positive integer, O(n) time, O(1) space.

# Approach
## Cyclic Sort
The answer is in \`1..n+1\`. Swap each in-range value to its home index \`v - 1\` until it's there or a duplicate sits there. First index with the wrong value is the answer, else \`n + 1\`.

### Code
\`\`\`cpp
int firstMissingPositive(vector<int> &nums)
{
    for (int i = 0; i < nums.size();)
    {
        if (nums[i] >= 1 && nums[i] <= nums.size())
        {
            int cor_pos = nums[i] - 1;
            if (nums[i] != nums[cor_pos])
            {
                swap(nums[i], nums[cor_pos]);
            }
            else
            {
                i++;
            }
        }
        else
        {
            i++;
        }
    }
    for (int i = 0; i < nums.size(); i++)
    {
        if (nums[i] != i + 1)
        {
            return i + 1;
        }
    }
    return nums.size() + 1;
}
\`\`\`

### Complexity
- Time: $O(n)$, each swap places one value for good
- Space: $O(1)$
`,"../dsa-notes/First Unique Character in a String.md":`---
link: https://leetcode.com/problems/first-unique-character-in-a-string/
difficulty: Easy
topics:
  - "[[Hash Maps]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "count every char, then return the first index with count 1"
time: "O(n)"
space: "O(1)"
date: 2022-12-11
---

# Problem
Index of the first non-repeating character, or -1.

# Approach
## Count Twice
First pass counts, second pass finds the first count of 1.

Bug in my code: no \`return -1\` at the end.

### Code
\`\`\`cpp
int firstUniqChar(string s)
{
    map<char, int> a;
    for (int i = 0; i < s.length(); i++)
    {
        if (a.find(s[i]) == a.end())
            a[s[i]] = 1;
        else
            a[s[i]]++;
    }
    for (int i = 0; i < s.length(); i++)
    {
        if (a[s[i]] == 1)
            return i;
    }
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$, charset size
`,"../dsa-notes/Flood Fill.md":`---
link: https://leetcode.com/problems/flood-fill/
difficulty: Easy
topics:
  - "[[Graphs]]"
  - "[[Arrays]]"
  - "[[DFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "DFS from the start pixel, recolor cells with the old color. return early if old == new"
time: "O(m * n)"
space: "O(m * n)"
date: 
---

# Problem
Recolor the 4-connected region of the start pixel.

# Approach
## DFS
Same as [[Number Of Islands]]. Return early if the color already matches, else it loops forever.

### Code
\`\`\`cpp
void fill(vector<vector<int>> &image, int sr, int sc, int color, int oldColor){
    if(sr < 0|| sc < 0|| sr >= image.size() || sc >= image[0].size() ||image[sr][sc] != oldColor) return;
    image[sr][sc] = color;
    fill(image, sr + 1, sc, color, oldColor);
    fill(image, sr - 1, sc, color, oldColor);
    fill(image, sr, sc + 1, color, oldColor);
    fill(image, sr, sc - 1, color, oldColor);
}

vector<vector<int>> floodFill(vector<vector<int>> &image, int sr, int sc, int color)
{
    if(image[sr][sc] == color) return image;
    int oldColor = image[sr][sc];
    fill(image, sr, sc, color, oldColor);
    return image;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Floyd Warshall Algorithm.md":`---
link: https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1
difficulty: Medium
topics:
  - "[[Graphs]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "for each k, dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]). negative diagonal = negative cycle"
time: "O(n³)"
space: "O(1)"
date: 
---

# Problem
All-pairs shortest paths on an adjacency matrix, in place. \`-1\` = no edge.

# Approach
## Floyd Warshall
Try every node \`k\` as a middle stop for every pair. \`-1\` to \`1e9\` before, back after.

### Code
\`\`\`cpp
void shortest_distance(vector<vector<int>>&matrix){
    // Code here
    int n = matrix.size();

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            if(matrix[i][j] == -1)
                matrix[i][j] = 1e9;

        if(i == j)
            matrix[i][j] = 0;
        }
    }

    for(int k = 0; k < n; k++){
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                matrix[i][j] = min(matrix[i][j], matrix[i][k] + matrix[k][j]);
            }
        }
    }

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            if(matrix[i][j] == 1e9)
                matrix[i][j] = -1;
        }
    }
}
\`\`\`

### Complexity
- Time: $O(n^3)$
- Space: $O(1)$

## Negative Cycle
Any \`dist[i][i] < 0\` afterwards means a negative cycle.

### Code
\`\`\`cpp
for(int i = 0; i < n; i++){
    for (int j = 0; j < n; j++){
        if(matrix[i][j] < 0)
            return 1;
    }
}
\`\`\`
`,"../dsa-notes/Frequency of the Most Frequent Element.md":`---
link: https://leetcode.com/problems/frequency-of-the-most-frequent-element/
difficulty: Medium
topics:
  - "[[Sliding Window]]"
  - "[[Sorting]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort, window is valid while nums[r] * len - sum <= k"
time: "O(n log n)"
space: "O(1)"
date: 
---

# Problem
Max frequency of an element after at most \`k\` increments.

# Approach
## Sort + Sliding Window
Sort. Raise everything in the window to \`nums[r]\`, cost = \`nums[r] * len - sum\`. Shrink while cost > \`k\`. Use \`long long\`.

### Code
\`\`\`cpp
int maxFrequency(vector<int>& nums, int k) {
    sort(nums.begin(), nums.end());
    long long sum = 0;
    int left = 0;
    int result = 0;

    for (int right = 0; right < nums.size(); ++right) {
        sum += nums[right];

        while ((long long)nums[right] * (right - left + 1) - sum > k) {
            sum -= nums[left];
            ++left;
        }

        result = max(result, right - left + 1);
    }

    return result;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$
`,"../dsa-notes/Generate Parentheses.md":`---
link: https://leetcode.com/problems/generate-parentheses/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "add ( while open < n, add ) while close < open"
time: "O(4^n / √n)"
space: "O(n)"
date: 2026-06-30
---

# Problem
All valid combinations of \`n\` pairs of parentheses.

# Approach
## Backtracking with Counts
Track open \`l\` and close \`r\`. Prune \`l > n\` or \`r > l\`. Push when \`l == r == n\`.

### Code
\`\`\`cpp
void solve(vector<string>& ans, string& s, int l, int r, int n) {
    if (l == n && l == r) { ans.push_back(s); return; }
    if (l > n || r > n || r > l) return;

    s += "(";
    solve(ans, s, l+1, r, n);
    s.pop_back();
    s += ")";
    solve(ans, s, l, r+1, n);
    s.pop_back();
}

vector<string> generateParenthesis(int n) {
    string s = "(";
    vector<string> ans;
    solve(ans, s, 1, 0, n);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(4^n / \\sqrt{n})$, Catalan
- Space: $O(n)$
`,"../dsa-notes/Graph Valid Tree.md":`---
link: https://leetcode.com/problems/graph-valid-tree/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Disjoint Set Union]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "tree iff edges == n - 1 and no cycle. DSU finds the cycle"
time: "O(n * α(n))"
space: "O(n)"
date: 2026-08-22
---

# Problem
Do \`n\` nodes and these undirected edges form a valid tree?

# Approach
## DSU
Tree = \`n - 1\` edges and no cycle, connectivity then follows. Union each edge with [[Disjoint Set Union]], same root already = cycle.

Mistakes I made:
- Never sized \`rank\`, out-of-bounds UB.
- Compared \`parent[a]\` with \`parent[b]\` instead of \`find(a)\`, \`find(b)\`. Breaks once trees merge.

### Code
\`\`\`cpp
class Solution {
public:
    int find(vector<int>& parent, int x) {
        if (parent[x] != x) return find(parent, parent[x]);
        return parent[x];
    }

    bool detectandunite(vector<int>& parent, vector<int>& rank, int a, int b) {
        int x = find(parent, a), y = find(parent, b);
        if (x == y) return true;

        if (rank[x] < rank[y]) swap(x, y);
        parent[y] = x;
        if (rank[x] == rank[y]) rank[x]++;
        return false;
    }

    bool validTree(int n, vector<vector<int>>& edges) {
        if (edges.size() != n - 1) return false;

        vector<int> parent, rank;
        parent = vector<int>(n);
        rank = vector<int>(n, 0);
        iota(parent.begin(), parent.end(), 0);

        for (auto e : edges) {
            int a = e[0], b = e[1];
            if (detectandunite(parent, rank, a, b)) return false;
        }

        return true;
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot \\alpha(n))$
- Space: $O(n)$
`,"../dsa-notes/Group Anagrams.md":`---
link: https://leetcode.com/problems/group-anagrams/
difficulty: Medium
topics:
  - "[[Sorting]]"
source: Leetcode
star: true
blind75: true
mastery: green
review: 2026-11-15
insight: "sorted word as the map key"
time: "O(n * k log k)"
space: "O(n * k)"
date: 2023-04-09
---

# Problem
Group anagrams together.

# Approach
## Sorted Key
Anagrams sort to the same string. Map sorted word to its group.

### Code
\`\`\`cpp
vector<vector<string>> groupAnagrams(vector<string>& strs) {
    vector<vector<string>> ans;
    unordered_map<string, vector<string>> map;
    for(auto str : strs){
        string s = str;
        sort(s.begin(), s.end());
        map[s].push_back(str);
    }

    for(auto i: map){
        ans.push_back(i.second);
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot k \\log k)$
- Space: $O(n \\cdot k)$

- Sort each word, use it as the map key. A DSU is not needed, the map already groups
- Counting key beats sorting for long words: 26 counts as a string, O(n * k)
- Put a delimiter between counts (\`1#0#...\`), without it \`{1, 11}\` and \`{11, 1}\` collide
- \`move(it.second)\` into the answer, \`map\` as a variable name shadows the type
`,"../dsa-notes/Hey, It's Me, Souvlakity.md":`---
link:
rating:
contest:
topics:
  - "[[Greedy]]"
  - "[[Implementation]]"
source: CodeForces
star: false
blind75: false
mastery:
review:
insight: "count k of 1s is fixed. k=1 gives 0, k=2 gives 1, k>=3 gives last 1 minus first 1"
time: "O(n)"
space: "O(1)"
date: 2026-10-17
code: "[[CodeForces/A_Hey_It_s_Me_Souvlakity.cpp]]"
---

# Problem
Numbers 1..n split by a binary string. Players alternate handing one of their own numbers to the other, game ends on Kalamakity's turn. Souvlakity maximizes the range of his set and Kalamakity minimizes it.

# Observation
Each pair of turns gives one and takes one, so Souvlakity ends with exactly k = count of 1s.
- k=1: one number left, answer 0.
- k=2: he keeps one number b, Kalamakity hands back b±1, answer 1.
- k>=3: he gives away a middle number so min and max stay. Kalamakity hands back whatever he got so the set never grows. Answer is last 1 minus first 1.

Mistakes I made:
- Updated \`mini\`/\`maxi\` outside the \`if (s[i] == '1')\`, so it tracked every index and printed n-1 for every k>=3.

\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define mod 1e9 + 7
void solve()
{
    int n;
    cin >> n;
    string s;
    cin >> s;

    int num1 = 0, mini = INT_MAX, maxi = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if (s[i] == '1')
        {
            num1++;
            mini = min(i, mini);
            maxi = max(i, maxi);
        }
    }

    if (num1 == 2)
    {
        cout << 1 << endl;
    }
    else if (num1 == 1)
    {
        cout << 0 << endl;
    }
    else
    {
        cout << maxi - mini << endl;
    }
}
int main()
{
    ll t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
\`\`\`
`,"../dsa-notes/House Robber II.md":`---
link: https://leetcode.com/problems/house-robber-ii/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "circle: max of robbing 0..n-2 and 1..n-1"
time: "O(n)"
space: "O(1)"
date: 2026-08-22
---

# Problem
[[House Robber]] with houses in a circle, first and last are adjacent.

# Approach
Run linear House Robber on \`0..n-2\` and \`1..n-1\`, take the max.

## Tail Recursion
C++ doesn't guarantee tail calls, still O(n) stack.

### Code
\`\`\`cpp
class Solution {
public:
    int steal(vector<int>& nums, int n, int i, int prev1, int prev2) {
        if (i == n)
            return prev1;

        return steal(nums, n, i + 1, max(prev1, nums[i] + prev2), prev1);
    }

    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n < 2)
            return nums[0];
        return max(steal(nums, n - 1, 0, 0, 0), steal(nums, n, 1, 0, 0));
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Two Variables

### Code
\`\`\`cpp
class Solution {
public:
    int robLinear(vector<int>& nums, int start, int end) {
        int prev2 = 0, prev1 = 0;
        for (int i = start; i < end; i++) {
            int curr = max(prev1, nums[i] + prev2);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 1)
            return nums[0];
        return max(robLinear(nums, 0, n - 1), robLinear(nums, 1, n));
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/House Robber III.md":`---
link: https://leetcode.com/problems/house-robber-iii/
difficulty: Medium
topics:
  - "[[Recursion]]"
  - "[[Trees]]"
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "each node returns {rob it, skip it}. rob = val + both skips, skip = best of each child"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
House Robber on a binary tree, no two directly linked houses.

# Approach
## Tree DP
Like [[House Robber]]. Each node returns \`{rob, skip}\`: rob = \`val + left.skip + right.skip\`, skip = \`max(left) + max(right)\`.

### Code
\`\`\`cpp
/**
 * Definition for a binary tree node.
 * struct Node {
 *     int val;
 *     Node *left;
 *     Node *right;
 *     Node() : val(0), left(nullptr), right(nullptr) {}
 *     Node(int x) : val(x), left(nullptr), right(nullptr) {}
 *     Node(int x, Node *left, Node *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    pair<int,int> gen(Node* root, map<Node*, pair<int, int>> &t){
        if(!root)
            return t[root] = make_pair(0,0);
        else{
            if(t.find(root) != t.end())
                return t[root];

            pair<int, int> left = gen(root->left, t);
            pair<int, int> right = gen(root->right, t);

            pair<int, int> temp;

            temp.first = root->val + left.second + right.second;
            temp.second = max(left.first, left.second) + max(right.second, right.first);

            return t[root] = temp;
        }
    }

    int rob(Node* root) {
        map<Node*, pair<int, int>> t;
        pair<int, int> ans = gen(root, t);

        return max(ans.first, ans.second);
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/House Robber.md":`---
link: https://leetcode.com/problems/house-robber/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "rob(i) = max(nums[i] + rob(i+2), rob(i+1)), keep two variables"
time: "O(n)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Max sum of non-adjacent houses.

# Approach
\`rob(i) = max(nums[i] + rob(i+2), rob(i+1))\`, past the end = 0.

## Memoization
Trap: sentinel 0 collides with real answers of 0, memo never hits. Use -1.

### Code
\`\`\`cpp
int helper(vector<int> &nums, int index, vector<int> &memo)
{
    if (index >= nums.size())
        return 0;

    if (memo[index] != -1)
        return memo[index];

    int robCurrent = nums[index] + helper(nums, index + 2, memo);
    int skipCurrent = helper(nums, index + 1, memo);

    return memo[index] = max(robCurrent, skipCurrent);
}

int rob(vector<int> &nums)
{
    vector<int> memo(nums.size(), -1);
    return helper(nums, 0, memo);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Tabulation

### Code
\`\`\`cpp
int robber(vector<int> &nums)
{
    int n = nums.size();
    if (n == 0) return 0;
    if (n == 1) return nums[0];

    vector<int> dp(n);
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);

    for (int i = 2; i < n; i++)
        dp[i] = max(nums[i] + dp[i - 2], dp[i - 1]);

    return dp[n - 1];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Tail Recursion
Mistake I made: two lockstep indices and a dead \`max\`, \`[2,1,1,2]\` gave 6. Still O(n) stack.

### Code
\`\`\`cpp
class Solution {
public:
    int steal(vector<int>& nums, int i, int prev2, int prev1) {
        if (i == nums.size())
            return prev1;

        return steal(nums, i + 1, prev1, max(prev2 + nums[i], prev1));
    }

    int rob(vector<int>& nums) { return steal(nums, 0, 0, 0); }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Two Variables

### Code
\`\`\`cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        int prev2 = 0, prev1 = 0;
        for (int num : nums) {
            int curr = max(prev2 + num, prev1);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/I Know About a Million Things.md":`---
link:
rating:
contest:
topics:
  - "[[Math]]"
  - "[[Constructive]]"
source: CodeForces
star: false
blind75: false
mastery:
review:
insight: "only odd count matters. Even odds wins by taking all. Odd odds wins unless start is (1 odd, 1 even) or (3 odd, 0 even)"
time: "O(n)"
space: "O(1)"
date: 2026-10-17
code: "[[CodeForces/C_I_Know_About_a_Million_Things.cpp]]"
---

# Problem
Players alternate removing a non-empty set of elements. Allowed if it's a single element or the sum is even. Player facing empty array loses.

# Observation
Sum is even iff the count of odds in it is even. Evens are free.
- O even: take everything, win.
- O odd: never leave the opponent an even O. Losing states are empty, (1,1) and (3,0). From any other odd O start you can remove an even number of odds plus evens to land on (1,1) or (3,0).

Larpity wins only on (1,1) and (3,0). Checked with a brute force over (O, E) up to 11.

Mistakes I made:
- Thought an even sum needs equal evens and odds. Only the odd count matters.
- Thought leaving any odd O wins. (1,0) loses for the one who leaves it.

\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define mod 1e9 + 7
void solve()
{
    int n;
    cin >> n;
    int odd = 0, even = 0;

    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        if (x % 2 == 0)
            even++;
        else
            odd++;
    }

    if (odd % 2 == 0)
        cout << "Moggity" << endl;
    else
    {
        if (odd == 3 && even == 0 || odd == 1 && even == 1)
            cout << "Larpity" << endl;
        else
            cout << "Moggity" << endl;
    }
}
int main()
{
    ll t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
\`\`\`
`,"../dsa-notes/Implement Queue using Stacks.md":`---
link: https://leetcode.com/problems/implement-queue-using-stacks/
difficulty: Easy
topics:
  - "[[Stack]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "push to s1, pop from s2, refill s2 from s1 only when s2 is empty"
time: "O(1) amortized"
space: "O(n)"
date: 2022-12-11
---

# Problem
Queue with two stacks.

# Approach
## Two Stacks
Push into \`s1\`. For pop and peek, if \`s2\` is empty pour \`s1\` into it, which reverses the order.

### Code
\`\`\`cpp
MyQueue()
{
}

stack<int> s1;
stack<int> s2;

void push(int x)
{
    s1.push(x);
}

int pop()
{
    if (s2.empty())
    {
        while (!s1.empty())
        {
            s2.push(s1.top());
            s1.pop();
        }
    }
    int x = s2.top();
    s2.pop();
    return x;
}

int peek()
{
    if (s2.empty())
    {
        while (!s1.empty())
        {
            s2.push(s1.top());
            s1.pop();
        }
    }
    return s2.top();
}

bool empty()
{
    return s1.empty() && s2.empty();
}
\`\`\`

### Complexity
- Time: $O(1)$ amortized, each element moves once
- Space: $O(n)$
`,"../dsa-notes/Implement Trie (Prefix Tree).md":`---
link: https://leetcode.com/problems/implement-trie-prefix-tree/
difficulty: Medium
topics:
  - "[[Tries]]"
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery: green
review: 2026-11-14
insight: "node = children[26] + end flag. search checks end, startsWith doesn't"
time: "O(L)"
space: "O(N * 26)"
date: 2026-07-01
---
# Problem
Trie with \`insert\`, \`search\` and \`startsWith\`.

# Approach
## Map Children
\`unordered_map<char, TrieNode*>\` per node. Any charset.

### Code
\`\`\`cpp
class TrieNode {
public:
    unordered_map<char, TrieNode*> map;
    bool isEnd = false;
};

class Trie {
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }

    void insert(string word) {
        TrieNode* cur = root;
        for (auto c : word) {
            if (cur->map.find(c) == cur->map.end())
                cur->map[c] = new TrieNode();
            cur = cur->map[c];
        }
        cur->isEnd = true;
    }

    bool search(string word) {
        TrieNode* cur = root;
        for (auto c : word) {
            if (cur->map.find(c) == cur->map.end()) return false;
            cur = cur->map[c];
        }
        return cur->isEnd;
    }

    bool startsWith(string prefix) {
        TrieNode* cur = root;
        for (auto c : prefix) {
            if (cur->map.find(c) == cur->map.end()) return false;
            cur = cur->map[c];
        }
        return true;
    }
};
\`\`\`

## Array Children
\`children[26] = {}\` zero-inits to nullptr. Faster for lowercase only.

- \`search\` and \`startsWith\` are the same walk. \`search\` also checks the end flag (insert \`apple\`, search \`app\` is false, startsWith \`app\` is true).
- Give the flag an initializer (\`bool end = false\`), don't rely on \`new Node()\` zero-filling it.
- Pass strings as \`const string&\`. A helper that returns the node for a string (or \`nullptr\`) makes \`search\` = \`node && node->end\` and \`startsWith\` = \`node != nullptr\`.
- Re-solved 2026-11-07 from the problem statement, clean first pass.

### Code
\`\`\`cpp
class Trie {
    struct TrieNode {
        TrieNode* children[26] = {};
        bool end = false;
    };
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }

    void insert(string word) {
        TrieNode* node = root;
        for (int i = 0; i < word.size(); i++) {
            if (!node->children[word[i] - 'a'])
                node->children[word[i] - 'a'] = new TrieNode();
            node = node->children[word[i] - 'a'];
        }
        node->end = true;
    }

    bool search(string word) {
        TrieNode* node = root;
        for (int i = 0; i < word.size(); i++) {
            if (!node->children[word[i] - 'a']) return false;
            node = node->children[word[i] - 'a'];
        }
        return node->end;
    }

    bool startsWith(string prefix) {
        TrieNode* node = root;
        for (int i = 0; i < prefix.size(); i++) {
            if (!node->children[prefix[i] - 'a']) return false;
            node = node->children[prefix[i] - 'a'];
        }
        return true;
    }
};
\`\`\`

### Complexity
- Time: $O(L)$ per op
- Space: $O(26N)$
`,"../dsa-notes/Insert into a Binary Search Tree.md":`---
link: https://leetcode.com/problems/insert-into-a-binary-search-tree/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[Recursion]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "walk down by BST order, insert at the null spot, return root to rewire"
time: "O(h)"
space: "O(h)"
date: 2023-01-12
---

# Problem
Insert a value into a BST.

# Approach
## Recursion
Go left or right by value, create the node at the first null. Assign the returned subtree back to the parent.

### Code
\`\`\`cpp
TreeNode *insertIntoBST(TreeNode *root, int val)
{
    if (root == NULL)
    {
        root = new TreeNode(val);
        return root;
    }
    if (root->val > val)
    {
        root->left = insertIntoBST(root->left, val);
    }
    else
    {
        root->right = insertIntoBST(root->right, val);
    }
    return root;
}
\`\`\`

### Complexity
- Time: $O(h)$
- Space: $O(h)$
`,"../dsa-notes/Interleaving String.md":`---
link: https://leetcode.com/problems/interleaving-string/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "dp[i][j] = s1[i:] and s2[j:] can form s3[i+j:], take from s1 or s2 if it matches"
time: "O(m * n)"
space: "O(m * n)"
date: 2026-09-04
---

# Problem
Is \`s3\` an interleaving of \`s1\` and \`s2\`?

# Approach
## Recursion
Next char to match is \`s3[i+j]\`. Take from \`s1\` or \`s2\` if it matches.

### Code
\`\`\`cpp
class Solution {
public:
    bool solve(string s1, string s2, string s3, int ind1, int ind2) {
        if (ind1 == s1.size() && ind2 == s2.size()) {
            if (ind1 + ind2 == s3.size()) return true;
        }

        if (ind1 < s1.size() && s1[ind1] == s3[ind1 + ind2] && solve(s1, s2, s3, ind1 + 1, ind2))
            return true;

        if (ind2 < s2.size() && s2[ind2] == s3[ind1 + ind2] && solve(s1, s2, s3, ind1, ind2 + 1))
            return true;

        return false;
    }

    bool isInterleave(string s1, string s2, string s3) { return solve(s1, s2, s3, 0, 0); }
};
\`\`\`

### Complexity
- Time: $O(2^{m+n})$
- Space: $O(m+n)$

## Tabulation
\`dp[m][n] = true\`, fill \`i\` and \`j\` from high to low. Check \`m + n == |s3|\` first.

### Code
\`\`\`cpp
class Solution {
public:
    bool isInterleave(string s1, string s2, string s3) {
        int m = s1.size(), n = s2.size();
        if (m + n != s3.size()) return false;

        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1));
        dp[m][n] = 1;

        for (int i = m; i >= 0; i--) {
            for (int j = n; j >= 0; j--) {
                if (i + 1 <= m && s1[i] == s3[i + j]) dp[i][j] = dp[i][j] || dp[i + 1][j];
                if (j + 1 <= n && s2[j] == s3[i + j]) dp[i][j] = dp[i][j] || dp[i][j + 1];
            }
        }

        return dp[0][0];
    }
};
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Intersection Of Two Linked Lists.md":`---
link: https://leetcode.com/problems/intersection-of-two-linked-lists/
difficulty: Easy
topics:
  - "[[Linked Lists]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "advance the longer list by the length difference, then walk both together"
time: "O(n + m)"
space: "O(1)"
date: 2023-06-13
---

# Problem
Node where two linked lists merge.

# Approach
## Equalize Lengths
Get both lengths, move the longer head forward by the difference, then walk both until they meet.

### Code
\`\`\`cpp
int len (ListNode* root){
    int l = 0;
    while(root){
        root = root->next;
        l++;
    }
    return l;
}

ListNode *getIntersectionNode(ListNode *headA, ListNode *headB)
{
    int la = len(headA);
    int lb = len(headB);

    while(la > lb){
        headA = headA->next;
        la--;
    }
    while(lb > la){
        headB = headB->next;
        lb--;
    }

    while(headA != headB){
        headA = headA->next;
        headB = headB->next;
    }

    return headA;
}
\`\`\`

### Complexity
- Time: $O(n + m)$
- Space: $O(1)$
`,"../dsa-notes/Invert Binary Tree.md":`---
link: https://leetcode.com/problems/invert-binary-tree/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery: green
review: 2026-11-15
insight: "invert both subtrees, then swap them"
time: "O(n)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Mirror a binary tree.

# Approach
## Recursive Swap
Invert both children, then swap.

### Code
\`\`\`cpp
TreeNode* invertTree(TreeNode* root) {
    if (!root)
        return nullptr;
    TreeNode* right = invertTree(root->left);
    TreeNode* left = invertTree(root->right);
    root->right = right;
    root->left = left;
    return root;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$

- \`swap(root->left, root->right)\` then recurse on both. No temporaries needed, the calls work in place
- Swap before or after the recursion, the result is the same
- Iterative: queue or stack, pop, swap children, push the ones that exist. Space O(w) for the queue, O(h) for the stack
`,"../dsa-notes/Is Graph Bipartite.md":`---
link: https://leetcode.com/problems/is-graph-bipartite/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "BFS 2-coloring from every uncolored node, same color on both ends of an edge = false"
time: "O(V + E)"
space: "O(V)"
date: 2023-08-17
---

# Problem
Can the nodes be split into two groups with every edge going across?

# Approach
## BFS 2-Coloring
Color each uncolored component's start 0, neighbours get the opposite color. A neighbour with the same color means not bipartite.

Bug in my code: inside the BFS it reads \`graph[i]\` and \`colour[i]\` instead of \`graph[curr]\` and \`colour[curr]\`, so only the start node's edges get checked.

### Code
\`\`\`cpp
bool isBipartite(vector<vector<int>> &graph)
{
    int n = graph.size();
    vector<int> colour(n, -1);

    for (int i = 0; i < n; i++)
    {
        if (colour[i] == -1)
        {
            queue<int> q;
            q.push(i);
            colour[i] = 0;
            while (!q.empty())
            {
                int curr = q.front();
                q.pop();
                int col = colour[i];

                for (int j = 0; j < graph[i].size(); j++)
                {
                    if (colour[graph[i][j]] == -1)
                    {
                        q.push(graph[i][j]);
                        colour[graph[i][j]] = !col;
                    }
                    else
                    {
                        if (colour[graph[i][j]] == col)
                            return false;
                    }
                }
            }
        }
        else
        {
            for (auto j : graph[i])
            {
                if (colour[j] == colour[i])
                    return false;
            }
        }
    }

    return true;
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V)$
`,"../dsa-notes/Islands And Treasure.md":`---
link: https://leetcode.com/problems/walls-and-gates/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "multi-source BFS from every treasure, update only if the distance improves"
time: "O(m * n)"
space: "O(m * n)"
date: 2026-08-27
---

# Problem
Fill each land cell with its distance to the nearest treasure.

# Approach
## Multi-Source BFS
Push all treasures at distance 0. Grid is the distance array: enqueue only if \`grid[nx][ny] > grid[x][y] + 1\`. Walls (-1) never pass that check.

### Code
\`\`\`cpp
class Solution {
public:
    int dx[4] = {0, 1, 0, -1};
    int dy[4] = {1, 0, -1, 0};

    void islandsAndTreasure(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        queue<pair<int, int>> q;

        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (grid[i][j] == 0) q.push({i, j});

        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();

            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];

                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    if (grid[nx][ny] > grid[x][y] + 1) {
                        grid[nx][ny] = grid[x][y] + 1;
                        q.push({nx, ny});
                    }
                }
            }
        }
    }
};
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Jump Game II.md":`---
link: https://leetcode.com/problems/jump-game-ii/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Greedy]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-10
insight: "BFS levels: when i hits currentEnd, jump and set currentEnd = farthest"
time: "O(n)"
space: "O(1)"
date: 2026-09-17
---

# Problem
Min jumps to reach the last index.

# Approach
## Recursion
Try every jump length, take the min. Skip dead ends (\`nums[i] = 0\`).

### Code
\`\`\`cpp
int solve(vector<int>& nums, int ind) {
    if (ind >= (int)nums.size() - 1) return 0;
    int steps = INT32_MAX;
    for (int i = 1; i <= nums[ind]; i++) {
        int sub = solve(nums, ind + i);
        if (sub != INT32_MAX) steps = min(steps, sub);
    }
    return steps == INT32_MAX ? INT32_MAX : 1 + steps;
}

int jump(vector<int>& nums) {
    return solve(nums, 0);
}
\`\`\`

### Complexity
- Time: $O(2^n)$
- Space: $O(n)$

## DP
\`dp[i]\` = min jumps from \`i\`, fill from the back. Cap \`j\` at \`n - 1 - i\`.

### Code
\`\`\`cpp
int jump(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, INT_MAX);
    dp[n - 1] = 0;
    for (int i = n - 2; i >= 0; i--) {
        int maxJ = min(nums[i], n - 1 - i);
        for (int j = 1; j <= maxJ; j++) {
            if (dp[i + j] != INT_MAX)
                dp[i] = min(dp[i], 1 + dp[i + j]);
        }
    }
    return dp[0];
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## Greedy
Track \`farthest\`. When \`i == currentEnd\` a jump is forced: \`jumps++\`, \`currentEnd = farthest\`.

Mistakes I made (re-solve 2026-11-07):
- Counted a jump every time \`farthest\` improved. Indices in the same level share one jump, so only charge at the level boundary \`i == currentEnd\`. Failed on \`[1,2,3,4,5]\` (answer 3).
- Started \`end = nums[0]\` with \`ans = 0\`, which skips the first jump. Start \`end = 0\` so the jump out of index 0 is charged at \`i = 0\`.
- Patched the last jump with \`|| i == n-1\`. It works only because it cancels the missing first jump. Loop to \`n - 2\` instead, no jump is taken from the last index.
- Update \`farthest\` before the \`i == end\` check.
- The \`n == 1\` and \`n == 2\` special cases are not needed.

### Code
\`\`\`cpp
int jump(vector<int>& nums) {
    int n = nums.size();
    int jumps = 0, currentEnd = 0, farthest = 0;
    for (int i = 0; i < n - 1; i++) {
        farthest = max(farthest, i + nums[i]);
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Jump Game.md":`---
link: https://leetcode.com/problems/jump-game/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Greedy]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "track farthest reachable, fail if i > farthest"
time: "O(n)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Can you reach the last index?

# Approach
## DP
\`dp[i]\` = true if some reachable \`j\` has \`dp[j]\`.

Mistakes I made: wrote \`dp[i];\` instead of \`dp[i] = true;\`, and no \`j < n\` bound.

### Code
\`\`\`cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        vector<bool> dp(n, false);
        dp[n - 1] = true;

        for (int i = n - 2; i >= 0; i--) {
            for (int j = i + 1; j - i <= nums[i] && j < n; j++) {
                if (dp[j]) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[0];
    }
};
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## Greedy
Track \`farthest\`. If \`i > farthest\`, \`i\` is unreachable.

### Code
\`\`\`cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        int farthest = 0;
        for (int i = 0; i < n; i++) {
            if (i > farthest) return false;
            farthest = max(farthest, i + nums[i]);
        }
        return true;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$

- Check \`i > reach\` before using \`nums[i]\`
- \`end\` and \`farthest\` were the same variable, one \`reach\` is enough
- Backward version: \`goal = n - 1\`, \`goal = i\` when \`i + nums[i] >= goal\`, answer is \`goal == 0\`
`,"../dsa-notes/K Closest Points to Origin.md":`---
link: https://leetcode.com/problems/k-closest-points-to-origin/
difficulty: Medium
topics:
  - "[[Heap]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "max heap of size k keyed by squared distance"
time: "O(n log k)"
space: "O(k)"
date: 2026-08-08
---

# Problem
The \`k\` points closest to the origin.

# Approach
## Max Heap of Size k
Push \`x² + y²\`, pop when size > k. No sqrt needed.

### Code
\`\`\`cpp
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        priority_queue<pair<int, pair<int, int>>> pq;

        for (auto p : points) {
            pq.push({p[0] * p[0] + p[1] * p[1], {p[0], p[1]}});
            if (pq.size() > k)
                pq.pop();
        }

        vector<vector<int>> ans;

        while (pq.size()) {
            auto p = pq.top();
            pq.pop();

            ans.push_back({p.second.first, p.second.second});
        }

        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(n \\log k)$
- Space: $O(k)$
`,"../dsa-notes/Kahn's Algorithm.md":`---
link: https://www.geeksforgeeks.org/problems/topological-sort/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Topological Sort]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "push indegree 0 nodes, pop and decrement neighbours, the pop order is the topo sort"
time: "O(V + E)"
space: "O(V)"
date: 
---

# Problem
Any topological order of a DAG.

# Approach
## BFS on Indegree
[[Topological Sort]] with a queue. Push indegree 0, pop, decrement neighbours, push the ones that hit 0.

### Code
\`\`\`cpp
vector<int> topoSort(int V, vector<int> adj[]) 
{
    // code here
    vector<int> indegree (V, 0);
    for(int i = 0; i < V; i++){
        for(auto j : adj[i]){
            indegree[j]++;
        }
    }

    queue<int> q;
    for(int i = 0; i < V; i++)
        if(indegree[i] == 0)
            q.push(i);

    vector<int> topo;
    while(!q.empty()){
        int node = q.front();
        q.pop();
        topo.push_back(node);

        for(auto i : adj[node]){
            indegree[i]--;
            if(indegree[i] == 0)
                q.push(i);
        }
    }

    return topo;
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V)$
`,"../dsa-notes/Knapsack with Duplicate Items.md":`---
link: https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "unbounded knapsack: on take stay on row i, t[i][j - wt] instead of t[i-1][j - wt]"
time: "O(N * W)"
space: "O(N * W)"
date: 2023-07-10
---

# Problem
Max value in a knapsack of capacity \`W\`, each item can be taken any number of times.

# Approach
0/1 knapsack but taking an item stays on the same item.

## Recursion
\`\`\`cpp
int knapSack(int N, int W, int val[], int wt[])
{
    if (W == 0 || N == 0)
        return 0;
    else if (wt[N - 1] <= W)
    {
        return max(val[N - 1] + knapSack(N, W - wt[N - 1], val, wt), knapSack(N - 1, W, val, wt));
    }
    else
    {
        return knapSack(N - 1, W, val, wt);
    }
}

vector<vector<int>> t(1001, vector<int>(1001, -1));
int knapSack(int N, int W, int val[], int wt[]){
    if(N== 0 || W == 0){
        t[N][W] = 0;
        return t[N][W];
    }
    else if(wt[N-1] <= W){
        if(t[N][W] == -1){
            t[N][W] = max(val[N-1] + knapSack(N, W-wt[N-1], val, wt), knapSack(N-1, W, val, wt));
        }
        return t[N][W];
    }
    else{
        t[N][W] = knapSack(N-1, W, val, wt);
        return t[N][W];
    }
}

int knapSack(int N, int W, int val[], int wt[])
{
    vector<vector<int>> t(N + 1, vector<int>(W + 1));

    for (int i = 0; i < N + 1; i++)
    {
        for (int j = 0; j < W + 1; j++)
        {
            if (i == 0 || j == 0)
            {
                t[i][j] = 0;
                continue;
            }
            else if(wt[i-1] <= j)
                t[i][j] = max(val[i-1] + t[i][j-wt[i-1]], t[i-1][j]);
            else
                t[i][j] = t[i-1][j];
        }
    }

    return t[N][W];
}
\`\`\`

### Complexity
- Time: exponential for recursion, $O(N \\cdot W)$ memo and table
- Space: $O(N \\cdot W)$
`,"../dsa-notes/Koko Eating Bananas.md":`---
link: https://leetcode.com/problems/koko-eating-bananas/
difficulty: Medium
topics:
  - "[[Binary Search]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "binary search the rate in [1, max pile], first rate where total hours <= h"
time: "O(n log max)"
space: "O(1)"
date: 2026-11-08
---

# Problem
Smallest eating rate that finishes all piles in \`h\` hours. A pile smaller than the rate still takes an hour.

# Approach
## Binary search on the answer
Hours only drop as the rate grows, so "finishes in time" is false then true. Find the first true.

- The answer is not always a pile size. \`[3,6,7,11]\` with \`h = 8\` is 4
- No sort needed
- \`r = max(piles)\` always works since \`piles.size() <= h\`, so use \`l < r\` with \`r = m\` and \`l = m + 1\`
- Total hours reaches about 10^12, use \`long long\`
- Ceiling: \`(p + m - 1) / m\`

### Code
\`\`\`cpp
int minEatingSpeed(vector<int>& piles, int h) {
    int l = 1, r = *max_element(piles.begin(), piles.end());
    while (l < r) {
        int m = l + (r - l) / 2;
        long long time = 0;
        for (int p : piles) time += (p + m - 1) / m;
        if (time > h) l = m + 1;
        else r = m;
    }
    return l;
}
\`\`\`

### Complexity
- Time: $O(n \\log \\max)$
- Space: $O(1)$
`,"../dsa-notes/Kruskal's Algorithm.md":`---
link: https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1
difficulty: Hard
topics:
  - "[[Graphs]]"
  - "[[Disjoint Set Union]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "sort edges by weight, add an edge if DSU says its ends aren't connected"
time: "O(E log E)"
space: "O(V + E)"
date: 
---

# Problem
Weight of the [[Minimum Spanning Tree]].

# Approach
## Sort + DSU
Sort edges by weight. Take an edge if its ends are in different components ([[Disjoint Set Union]]), then union them.

### Code
\`\`\`cpp
class DSU
{
    vector<int> parent, rank, size;

public:
    DSU(int n)
    {
        rank.resize(n + 1, 0);
        parent.resize(n + 1);
        size.resize(n + 1, 1);
        for (int i = 0; i < n + 1; i++)
            parent[i] = i;
    }

    int findUPar(int node)
    {
        if (parent[node] == node)
            return node;
        return parent[node] = findUPar(parent[node]);
    }

    void unionByRank(int u, int v)
    {
        int ulp_u = findUPar(u);
        int ulp_v = findUPar(v);
        if (ulp_u == ulp_v)
            return;
        else if (ulp_u > ulp_v)
            parent[v] = u;
        else if (ulp_u < ulp_v)
            parent[u] = v;
        else
        {
            parent[v] = u;
            rank[u]++;
        }
    }

    void unionBySize(int u, int v){
        int ulp_u = findUPar(u);
        int ulp_v = findUPar(v);
        if(ulp_v == ulp_u)
            return;
        else if(size[ulp_u] < size[ulp_v]){
            parent[ulp_u] = ulp_v;
            size[ulp_v] += size[ulp_u];
        }
        else{
            parent[ulp_v] = ulp_u;
            size[ulp_u] += size[ulp_v];
        }
    }
};

class Solution
{
    public:
    //Function to find sum of weights of edges of the Minimum Spanning Tree.
    int spanningTree(int V, vector<vector<int>> adj[])
    {
        // code here
        vector<pair<int, pair<int, int>>> edges;
        for(int i = 0; i < V; i++){
            for(auto it : adj[i]){
                int adjNode = it[0];
                int wt = it[1];
                int node = i;

                edges.push_back({wt, {node, adjNode}});
            }
        }

        DSU ds(V);
        sort(edges.begin(), edges.end());

        int mstWt = 0;
        for(auto it : edges){
            int wt = it.first;
            int node = it.second.first;
            int adjNode = it.second.second;

            if(ds.findUPar(node) != ds.findUPar(adjNode)) {
                mstWt += wt;
                ds.unionBySize(node, adjNode);
            }
        }

        return mstWt;
    }
};
\`\`\`

### Complexity
- Time: $O(E \\log E)$
- Space: $O(V + E)$
`,"../dsa-notes/Kth Largest Element in a Stream.md":`---
link: https://leetcode.com/problems/kth-largest-element-in-a-stream/
difficulty: Easy
topics:
  - "[[Heap]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "keep a min heap of size k as a member, top is the answer"
time: "O(log k)"
space: "O(k)"
date: 2026-08-08
---

# Problem
Return the \`k\`th largest after each \`add\`.

# Approach
## Min Heap of Size k
Same as [[Kth Largest Element in an Array]] with the heap kept across calls.

### Code
\`\`\`cpp
class KthLargest {
public:
    priority_queue<int, vector<int>, greater<int>> pq;
    int K;

    KthLargest(int k, vector<int>& nums) {
        K = k;
        for (auto i : nums) {
            pq.push(i);
            if (pq.size() > k)
                pq.pop();
        }
    }

    int add(int val) {
        pq.push(val);
        if (pq.size() > K)
            pq.pop();
        return pq.top();
    }
};
\`\`\`

### Complexity
- Time: $O(\\log k)$ per add
- Space: $O(k)$
`,"../dsa-notes/Kth Largest Element in an Array.md":`---
link: https://leetcode.com/problems/kth-largest-element-in-an-array/
difficulty: Medium
topics:
  - "[[Heap]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "min heap of size k, top is the kth largest"
time: "O(n log k)"
space: "O(k)"
date: 2026-08-08
---

# Problem
The \`k\`th largest element.

# Approach
## Min Heap of Size k
Pop the smallest when size > k.

### Code
\`\`\`cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> pq;

        for (auto i : nums) {
            pq.push(i);
            if (pq.size() > k)
                pq.pop();
        }

        return pq.top();
    }
};
\`\`\`

### Complexity
- Time: $O(n \\log k)$
- Space: $O(k)$
`,"../dsa-notes/Kth Smallest Element in a BST.md":`---
link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "inorder of a BST is sorted, stop at the kth visited node"
time: "O(h + k)"
space: "O(h)"
date: 2026-06-29
---

# Problem
\`k\`th smallest value in a BST.

# Approach
## Recursive Inorder
Decrement \`k\` (by ref) on each visit, return the node when it hits 0. -1 = not found yet.

### Code
\`\`\`cpp
int inorder(TreeNode* root, int& k) {
    if (!root) return -1;
    int l = inorder(root->left, k);
    if (l > -1) return l;
    if (--k == 0) return root->val;
    int r = inorder(root->right, k);
    if (r > -1) return r;
    return -1;
}

int kthSmallest(TreeNode* root, int k) {
    return inorder(root, k);
}
\`\`\`

### Complexity
- Time: $O(h + k)$
- Space: $O(h)$

## Iterative Inorder
Explicit stack, no sentinel or ref.

### Code
\`\`\`cpp
int kthSmallest(TreeNode* root, int k) {
    stack<TreeNode*> st;
    while (root || !st.empty()) {
        while (root) { st.push(root); root = root->left; }
        root = st.top(); st.pop();
        if (--k == 0) return root->val;
        root = root->right;
    }
    return -1;
}
\`\`\`

### Complexity
- Time: $O(h + k)$
- Space: $O(h)$

Follow-up, frequent queries on a changing BST: store left subtree size per node, each query is $O(h)$.
`,"../dsa-notes/LRU Cache.md":`---
link: https://leetcode.com/problems/lru-cache/
difficulty: Medium
topics:
  - "[[Linked Lists]]"
  - "[[Hash Maps]]"
source: Leetcode
star: false
blind75: false
mastery: green
review: 2026-11-15
insight: "list for usage order + map key -> {value, list iterator}, erase and push_back on access"
time: "O(1)"
space: "O(capacity)"
date: 2026-06-28
---

# Problem
LRU cache with O(1) \`get\` and \`put\`.

# Approach
## List + HashMap
\`std::list\` is a doubly linked list: front = LRU, back = MRU. Map \`key -> {value, iterator}\`. On access erase the node and push to the back. Evict from the front. List iterators stay valid when other nodes are erased.

- Need O(1) removal from the middle: doubly linked list + map to the node
- Evict: read \`order.front()\` before \`pop_front()\`, then erase it from the map
- \`splice(order.end(), order, it)\` moves the node and keeps \`it\` valid. No erase and re-store of the iterator
- Keep the \`find\` result instead of \`mp[key]\` three times

### Code
\`\`\`cpp
class LRUCache {
private:
    int capacity;
    unordered_map<int, pair<int, list<int>::iterator>> mp;
    list<int> order;

public:
    LRUCache(int capacity) { this->capacity = capacity; }

    int get(int key) {
        if (mp.find(key) == mp.end())
            return -1;

        order.erase(mp[key].second);
        order.push_back(key);
        mp[key].second = --order.end();
        return mp[key].first;
    }

    void put(int key, int value) {
        if (mp.find(key) != mp.end())
            order.erase(mp[key].second);
        else if (mp.size() == capacity) {
            int lru = order.front();
            order.pop_front();
            mp.erase(lru);
        }

        order.push_back(key);
        mp[key] = {value, --order.end()};
    }
};
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(capacity)$
`,"../dsa-notes/Last Stone Weight.md":`---
link: https://leetcode.com/problems/last-stone-weight/
difficulty: Easy
topics:
  - "[[Heap]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "max heap, smash the top two, push back the difference"
time: "O(n log n)"
space: "O(n)"
date: 2026-08-08
---

# Problem
Smash the two heaviest stones until at most one is left. Return its weight or 0.

# Approach
## Max Heap
Pop two, push back \`x - y\` if non-zero.

### Code
\`\`\`cpp
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> pq;
        for(auto stone: stones) pq.push(stone);

        cout<<pq.size()<<endl;

        while(pq.size() > 1) {
            int top = pq.top(); pq.pop();
            int second = pq.top(); pq.pop();

            cout<<top<<" "<<second<<endl;
            if(top - second > 0) pq.push(top - second);
        }

        return pq.size() > 0 ? pq.top() : 0;
    }
};
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Lemonade Change.md":`---
link: https://leetcode.com/problems/lemonade-change/
difficulty: Easy
topics:
  - "[[Greedy]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "count 5s and 10s, for a 20 give 10+5 before 5+5+5"
time: "O(n)"
space: "O(1)"
date: 2023-05-18
---

# Problem
Lemonade costs 5, customers pay 5, 10 or 20. Can you always give change?

# Approach
## Greedy
Track 5s and 10s. For a 20, prefer 10 + 5, it keeps more 5s for later.

### Code
\`\`\`cpp
bool lemonadeChange(vector<int> &bills)
{
    int five = 0, ten = 0;
    for(int i : bills){
        if(i == 5)
            five++;
        if(i == 10){
            if(five == 0)
                return false;
            else{
                five--;
                ten++;
            }
        }
        if(i == 20){
            if(ten == 0){
                if(five < 3)
                    return false;
                else
                    five -= 3;
            }
            else{
                if(five == 0)
                    return false;
                else{
                    five--;
                    ten--;
                }
            }
        }
    }
    return true;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Length of last word.md":`---
link: https://leetcode.com/problems/length-of-last-word/
difficulty: Easy
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "skip trailing spaces from the back, then count until a space"
time: "O(n)"
space: "O(1)"
date: 2023-03-30
---

# Problem
Length of the last word in a string.

# Approach
## Scan from the Back
Skip trailing spaces, count chars until the next space.

### Code
\`\`\`cpp
int lengthOfLastWord(string s) {
        int ind = s.size() - 1;
        while(ind>= 0 && s[ind] == ' '){
            ind--;
        }
        int count = 0;
        while (ind >= 0 && s[ind] != ' '){
            ind--;
            count++;
        }
        return count;
    }
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Letter Combinations of a Phone Number.md":`---
link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "backtrack over digits, try every letter of the current digit"
time: "O(4^n)"
space: "O(n)"
date: 2026-06-30
---

# Problem
All letter combinations of a phone number.

# Approach
## Backtracking
Map digit to letters, append, recurse, pop.

Traps: \`digits[idx] - '0'\`, not \`stoi\`. Empty input returns \`{}\`, not \`{""}\`.

### Code
\`\`\`cpp
unordered_map<int, string> mp = {{2,"abc"},{3,"def"},{4,"ghi"},
                                  {5,"jkl"},{6,"mno"},{7,"pqrs"},
                                  {8,"tuv"},{9,"wxyz"}};

void solve(vector<string>& ans, string& curr, string& digits, int idx) {
    if (idx == digits.size()) { ans.push_back(curr); return; }
    for (char c : mp[digits[idx] - '0']) {
        curr.push_back(c);
        solve(ans, curr, digits, idx+1);
        curr.pop_back();
    }
}

vector<string> letterCombinations(string digits) {
    if (digits.empty()) return {};
    vector<string> ans;
    string curr;
    solve(ans, curr, digits, 0);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(4^n)$
- Space: $O(n)$
`,"../dsa-notes/Linked List Cycle II.md":`---
link: https://leetcode.com/problems/linked-list-cycle-ii/
difficulty: Medium
topics:
  - "[[Linked Lists]]"
  - "[[Two Pointers]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "after slow and fast meet, one pointer from head and one from the meeting point meet at the cycle start"
time: "O(n)"
space: "O(1)"
date: 2022-12-11
---

# Problem
Return the node where the cycle begins, or null.

# Approach
## Floyd's
Same as [[Linked List Cycle]]. After they meet, start \`slow2\` at head and move both one step, they meet at the entry. Same trick as [[Find the Duplicate Number]].

### Code
\`\`\`cpp
ListNode *detectCycle(ListNode *head)
{
    ListNode *slow = head;
    ListNode *fast = head;
    while (fast != NULL && fast->next != NULL)
    {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast)
        {
            ListNode *slow2 = head;
            while (slow2 != slow)
            {
                slow2 = slow2->next;
                slow = slow->next;
            }
            return slow;
        }
    }
    return NULL;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Linked List Cycle.md":`---
link: https://leetcode.com/problems/linked-list-cycle/
difficulty: Easy
topics:
  - "[[Linked Lists]]"
  - "[[Two Pointers]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "slow 1 step, fast 2 steps, they meet if there is a cycle"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Does the list have a cycle?

# Approach
## Floyd's
\`fast\` moves 2 steps, \`slow\` moves 1. They meet only if there's a cycle.

### Code
\`\`\`cpp
bool hasCycle(ListNode *head) {
    if (!head || !head->next) return false;
    ListNode *slow = head;
    ListNode *fast = head;
    while (fast && fast->next) {
        slow = slow->next;           // move 1 step
        fast = fast->next->next;     // move 2 steps
        if (slow == fast) return true; // cycle found
    }
    return false; // reached end → no cycle
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Linked List in Binary Tree.md":`---
link: https://leetcode.com/problems/linked-list-in-binary-tree/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[Linked Lists]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "from every tree node try to match the list downward"
time: "O(n * m)"
space: "O(h)"
date: 2023-04-10
---

# Problem
Is the linked list a downward path in the binary tree?

# Approach
## DFS
From every tree node, try to match \`head\` going down left or right.

### Code
\`\`\`cpp
bool is(ListNode *h, TreeNode *r)
{
    if (!h)
        return true;
    if (!r)
        return false;
    if (h->val == r->val)
        return is(h->next, r->right) || is(h->next, r->left);
    return false;
}

bool isSubPath(ListNode *head, TreeNode *root)
{
    if (!root)
        return false;
    if(is(head, root)) return true;
    return isSubPath(head, root->left)||isSubPath(head, root->right);
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(h)$
`,"../dsa-notes/Little Girl and Maximum Sum.md":`---
link: https://codeforces.com/problemset/problem/276/C
rating: 1500
contest: Codeforces Round 170 (Div 1)
topics:
  - "[[Prefix Sum]]"
  - "[[Arrays]]"
source: CodeForces
star: false
blind75: false
mastery: yellow
review: 2026-09-27
insight: We can use the prefix sum to calculate frequency of elements in an interval by creating a diff array of \`diff[l]++; diff[r+1]--\` first then prefix summing the diff array
time: O(n)
space: O(n)
date: 2026-09-24
code: "[[CodeForces/C_Little_Girl_and_Maximum_Sum.cpp]]"
---

# Problem
Given an array and q queries \`(l, r)\` each adding the range sum, permute the array once beforehand to maximize the total over all queries.

# Observation
Rearrangement inequality: the indices asked for most often should hold the largest elements, in decreasing order of frequency.

To get the frequency of each index in O(n) instead of O(nq), build a \`diff\` array: \`diff[l]++, diff[r+1]--\` per query, then prefix-sum it once. Sort frequency and the array the same direction, pair index by index.`,"../dsa-notes/Longest Arithmetic Sequence of Given Difference.md":`---
link: https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "dp[x] = dp[x - diff] + 1 in a hashmap"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Longest subsequence that is an AP with the given difference.

# Approach
## Hashmap DP
Like [[Longest Increasing Subsequence]] but the previous value is fixed: \`dp[x] = dp[x - diff] + 1\`.

### Code
\`\`\`cpp
int longestSubsequence(vector<int> &arr, int difference)
{
    int n = arr.size();
    unordered_map<int, int> t;
    int max_length = 1;

    for (int i = 0; i < n; i++)
    {
        if (t.find(arr[i] - difference) != t.end())
        {
            t[arr[i]] = t[arr[i] - difference] + 1;
        }
        else
            t[arr[i]] = 1;
        max_length = max(max_length, t[arr[i]]);
    }
    return max_length;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Longest Arithmetic Subsequence.md":`---
link: https://leetcode.com/problems/longest-arithmetic-subsequence/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "dp[i][diff] = dp[j][diff] + 1 for every j < i"
time: "O(n²)"
space: "O(n²)"
date: 2023-08-14
---

# Problem
Length of the longest arithmetic subsequence.

# Approach
## DP on (index, diff)
\`t[i][diff] = t[j][diff] + 1\` for every \`j < i\`, else 2.

### Code
\`\`\`cpp
int longestArithSeqLength(vector<int> &nums)
{
    int n = nums.size();
    vector<unordered_map<int, int>> t(n);
    int maxi = 0;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            int diff = nums[i] - nums[j];
            if (t[j].find(diff) != t[j].end())
                t[i][diff] = t[j][diff] + 1;
            else
                t[i][diff] = 2;
            maxi = max(maxi, t[i][diff]);
        }
    }

    return maxi;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Longest Common Subsequence.md":`---
link: https://leetcode.com/problems/longest-common-subsequence/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "match: 1 + dp[i-1][j-1], else max(dp[i-1][j], dp[i][j-1])"
time: "O(m * n)"
space: "O(m * n)"
date: 2026-08-23
---

# Problem
Length of the LCS of two strings.

# Approach
State \`(i, j)\`. Match: always take it. Else skip one char from either string, take the max.

## Memoization
Mistakes I made:
- Threaded a running length through the recursion, the cache stored path-dependent values.
- \`unordered_map<pair<int,int>>\` has no hash, used \`map\`.
- Sentinel 0 collides with real answers, use -1.

### Code
\`\`\`cpp
class Solution {
public:
    map<pair<int, int>, int> mp;
    int solve(string& t1, string& t2, int start1, int start2) {
        if (start1 == t1.size() || start2 == t2.size()) return 0;
        if (mp.find({start1, start2}) != mp.end()) return mp[{start1, start2}];
        int take = 0, one = 0, second = 0;

        if (t1[start1] == t2[start2]) {
            take = 1 + solve(t1, t2, start1 + 1, start2 + 1);
        } else {
            one = solve(t1, t2, start1 + 1, start2);
            second = solve(t1, t2, start1, start2 + 1);
        }

        return mp[{start1, start2}] = max({one, second, take});
    }

    int longestCommonSubsequence(string text1, string text2) { return solve(text1, text2, 0, 0); }
};
\`\`\`

### Complexity
- Time: $O(mn \\log(mn))$ with \`map\`
- Space: $O(mn)$

## Tabulation
\`dp[i][j]\` = LCS of the first \`i\` and \`j\` chars. Compare \`text1[i-1]\`, \`text2[j-1]\`.

Mistake I made: compared \`text1[i]\`, reads \`'\\0'\` at the end and fakes a match.

### Code
\`\`\`cpp
class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int n1 = text1.size(), n2 = text2.size();
        vector<vector<int>> dp(n1 + 1, vector<int>(n2 + 1, 0));

        for (int i = 1; i <= n1; i++) {
            for (int j = 1; j <= n2; j++) {
                if (text1[i - 1] == text2[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[n1][n2];
    }
};
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(mn)$
`,"../dsa-notes/Longest Common Substring.md":`---
link: https://www.geeksforgeeks.org/problems/longest-common-substring1452/1
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "LCS table but a mismatch resets to 0, answer is the max cell"
time: "O(n * m)"
space: "O(n * m)"
date: 2023-07-22
---

# Problem
Length of the longest common contiguous substring.

# Approach
## LCS Variant
Like [[Longest Common Subsequence]], match = \`1 + t[i-1][j-1]\`, mismatch = 0. Track the max over the whole table.

### Code
\`\`\`cpp
int longestCommonSubstr(string S1, string S2, int n, int m)
{
    vector<vector<int>> t(n + 1, vector<int>(m + 1));
    int max = 0;
    for (int i = 0; i < n + 1; i++)
    {
        for (int j = 0; j < m + 1; j++)
        {
            if (i == 0 || j == 0)
                t[i][j] = 0;
            else
            {
                if (S1[i - 1] == S2[j - 1])
                {
                    t[i][j] = 1 + t[i - 1][j - 1];
                    if (t[i][j] > max)
                        max = t[i][j];
                }
                else
                    t[i][j] = 0;
            }
        }
    }
    return max;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Longest Consecutive Sequence.md":`---
link: https://leetcode.com/problems/longest-consecutive-sequence/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "hash set, only start counting from x where x - 1 isn't in the set"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Longest run of consecutive values, unsorted input, O(n).

# Approach
## Sort
Sort and find the longest run. $O(n \\log n)$.

## Hash Set
Only start counting at a sequence start (\`x - 1\` not in the set), so each value is walked once.

### Code
\`\`\`cpp
int longestConsecutive(vector<int>& nums) {
    unordered_set<int> set(nums.begin(), nums.end());

    int len = 0;
    for(auto num : set){
        if(!set.count(num-1)){
            int temp = 1;
            while(set.count(num+1)){
                temp +=1;
                num++;
            }
            len = max(len, temp);
        }
    }

    return len;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Longest Increasing Path in Matrix.md":`---
link: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "DFS + memo, dp[i][j] = longest path starting here. strictly increasing means no cycles"
time: "O(rows * cols)"
space: "O(rows * cols)"
date: 2026-09-04
---

# Problem
Longest strictly increasing path in a grid, 4 directions.

# Approach
## DFS
From every cell, step only to a greater neighbour.

### Code
\`\`\`cpp
class Solution {
public:
    int dx[4] = {0, -1, 0, 1};
    int dy[4] = {1, 0, -1, 0};

    int solve(vector<vector<int>>& matrix, int i, int j) {
        int ans = 0;
        for (int d = 0; d < 4; d++) {
            int ni = dx[d] + i, nj = dy[d] + j;

            if (ni >= 0 && nj >= 0 && ni < matrix.size() && nj < matrix[0].size() &&
                matrix[ni][nj] > matrix[i][j]) {
                ans = max(ans, solve(matrix, ni, nj) + 1);
            }
        }

        return ans;
    }

    int longestIncreasingPath(vector<vector<int>>& matrix) {
        int ans = 0;
        for (int i = 0; i < matrix.size(); i++) {
            for (int j = 0; j < matrix[0].size(); j++) {
                ans = max(ans, 1 + solve(matrix, i, j));
            }
        }

        return ans;
    }
};
\`\`\`

### Complexity
- Time: exponential
- Space: $O(rows \\cdot cols)$

## DFS + Memo
\`dp[i][j]\` only depends on the cell, not the path, so cache it. Strictly increasing means no cycles, no visited array needed.

### Code
\`\`\`cpp
class Solution {
public:
    int dx[4] = {0, -1, 0, 1};
    int dy[4] = {1, 0, -1, 0};
    vector<vector<int>> dp;

    int solve(vector<vector<int>>& matrix, int i, int j) {
        if (dp[i][j] != -1) return dp[i][j];
        int ans = 0;
        for (int d = 0; d < 4; d++) {
            int ni = dx[d] + i, nj = dy[d] + j;

            if (ni >= 0 && nj >= 0 && ni < matrix.size() && nj < matrix[0].size() &&
                matrix[ni][nj] > matrix[i][j]) {
                ans = max(ans, solve(matrix, ni, nj) + 1);
            }
        }

        return dp[i][j] = ans;
    }

    int longestIncreasingPath(vector<vector<int>>& matrix) {
        dp = vector<vector<int>>(matrix.size(), vector<int>(matrix[0].size(), -1));
        int ans = 0;
        for (int i = 0; i < matrix.size(); i++) {
            for (int j = 0; j < matrix[0].size(); j++) {
                ans = max(ans, 1 + solve(matrix, i, j));
            }
        }

        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(rows \\cdot cols)$
- Space: $O(rows \\cdot cols)$
`,"../dsa-notes/Longest Increasing Subsequence.md":`---
link: https://leetcode.com/problems/longest-increasing-subsequence/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "tails[k] = smallest tail of an increasing subsequence of length k+1, lower_bound and replace"
time: "O(n log n)"
space: "O(n)"
date: 2026-08-22
---

# Problem
Length of the longest strictly increasing subsequence.

# Approach
One running tip doesn't work: \`[1,2,100,4,5,6]\` loses \`(2, len 2)\` once 100 comes.

## Recursion
Take if smaller than the last taken, or skip.

### Code
\`\`\`cpp
int help(vector<int> &nums, int n, int maxi)
{
    if (n == 0)
        return 0;
    else
    {
        if (nums[n - 1] < maxi)
            return max(help(nums, n - 1, nums[n - 1]) + 1, help(nums, n - 1, maxi));
        else
            return help(nums, n - 1, maxi);
    }
}

int lengthOfLIS(vector<int> &nums)
{
    return help(nums, nums.size(), INT32_MAX);
}
\`\`\`

### Complexity
- Time: $O(2^n)$
- Space: $O(n)$

## DP
\`ans[i]\` = LIS ending at \`i\` = \`max(ans[j] + 1)\` over \`j < i\` with \`nums[j] < nums[i]\`.

Mistake I made: returned \`ans[n-1]\`, the answer is the max over all \`i\`.

### Code
\`\`\`cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n, -1e9);
        ans[0] = 1;

        for (int i = 1; i < n; i++) {
            ans[i] = 1;
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    ans[i] = max(ans[j] + 1, ans[i]);
                }
            }
        }

        int a = -1e9;
        for (auto i : ans) a = max(a, i);
        return a;
    }
};
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## Patience Sorting
\`tails[k]\` = smallest tail of any increasing subsequence of length \`k+1\`. \`lower_bound\`, replace or push. Only \`tails.size()\` is meaningful, \`tails\` isn't a real subsequence.

### Code
\`\`\`cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> tails;
        for (int x : nums) {
            auto it = lower_bound(tails.begin(), tails.end(), x);
            if (it == tails.end()) {
                tails.push_back(x);
            } else {
                *it = x;
            }
        }
        return tails.size();
    }
};
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Longest Palindromic Substring.md":`---
link: https://leetcode.com/problems/longest-palindromic-substring/
difficulty: Medium
topics:
  - "[[Two Pointers]]"
  - "[[Strings]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "expand around all 2n-1 centers, odd (i, i) and even (i, i+1)"
time: "O(n²)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Longest palindromic substring.

# Approach
## Expand Around Center
Every palindrome has one center, a char or a gap. Expand from each, track \`start\` and \`maxl\`, \`substr\` once at the end.

### Code
\`\`\`cpp
class Solution {
public:
    int expand(string& s, int l, int r) {
        while (l >= 0 && r < s.size() && s[l] == s[r]) {
            l--;
            r++;
        }
        return r - l - 1;
    }

    string longestPalindrome(string s) {
        int maxl = 0, start = 0;
        for (int i = 0; i < s.size(); i++) {
            int even = expand(s, i, i + 1);
            int odd = expand(s, i, i);

            int len = max(even, odd);
            if (len > maxl) {
                maxl = len;
                start = i - (len - 1) / 2;
            }
        }

        return s.substr(start, maxl);
    }
};
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$
`,"../dsa-notes/Longest Substring Without Repeating Characters.md":`---
link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "sliding window with last-seen index, jump l past the previous occurrence"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Length of the longest substring with no repeated characters.

# Approach
## Sliding Window
Store the last index of each char. On a repeat inside the window, move \`l\` to one past it.

### Complexity
- Time: $O(n)$
- Space: $O(1)$, charset size
`,"../dsa-notes/Longest Valid Obstacle Course.md":`---
link: https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[Binary Search]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "LIS with upper_bound (non-decreasing), answer at i = insert position + 1"
time: "O(n log n)"
space: "O(n)"
date: 
---

# Problem
For each \`i\`, longest non-decreasing subsequence ending at \`i\`.

# Approach
## DP
[[Longest Increasing Subsequence]] with \`>=\`.

### Code
\`\`\`cpp
vector<int> longestObstacleCourseAtEachPosition(vector<int> &obstacles)
{
    int n = obstacles.size();
    vector<int> ans(n, 1);

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            if (obstacles[i] >= obstacles[j])
            {
                ans[i] = max(ans[i], ans[j] + 1);
            }
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## Patience Sorting
Upper bound (first \`> x\`) since equal heights are allowed. \`ans[i]\` = position + 1.

### Code
\`\`\`cpp
int binarySearch(vector<int> &t, int start, int end, int val)
{
    if (start >= end)
        return end;

    int mid = start + (end - start) / 2; // To prevent integer overflow

    if (val >= t[mid])
        return binarySearch(t, mid + 1, end, val);
    else
        return binarySearch(t, start, mid, val);
}

vector<int> longestObstacleCourseAtEachPosition(vector<int> &obstacles)
{
    int n = obstacles.size();
    vector<int> t;
    vector<int> ans(n);

    for (int i = 0; i < n; i++)
    {
        int it = binarySearch(t, 0, t.size(), obstacles[i]);
        if (it == t.size())
            t.push_back(obstacles[i]);
        else
            t[it] = obstacles[i];

        ans[i] = it + 1;
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Longest Valid Parenthesis.md":`---
link: https://leetcode.com/problems/longest-valid-parentheses/
difficulty: Hard
topics:
  - "[[Sliding Window]]"
  - "[[Monotonic Stack]]"
  - "[[Stack]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "stack of '(' indices, mark matched pairs, longest run of marked indices"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Length of the longest valid parentheses substring.

# Approach
## Stack + Mark
Stack of \`(\` indices. On a matching \`)\`, mark both. Unmatched \`)\` clears the stack. Answer = longest run of marks.

### Code
\`\`\`cpp
int longestValidParentheses(string s) {
    int n = s.size();
    int l = 0;
    vector<int> valid(n, 0);
    stack<int> st;
    for(int i = 0; i < n; i++){
        if(s[i] == '(')
            st.push(i);
        else{
            if(!st.empty()){
                int j = st.top();
                st.pop();

                valid[i] = 1;
                valid[j] = 1;
            }
            else
                st = stack<int>();
        }
    }
    int temp = 0;
    for(int i = 0; i < n; i++){
        if(valid[i] == 1)
            temp++;
        else
            temp = 0;
        l = max(temp, l);
    }

    return l;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Lowest Common Ancestor of a Binary Search Tree.md":`---
link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "both smaller go left, both bigger go right, else this is the split = LCA"
time: "O(h)"
space: "O(1)"
date: 2026-06-28
---

# Problem
LCA of \`p\` and \`q\` in a BST.

# Approach
## Recursive
Both smaller, go left. Both bigger, go right. Otherwise this node is where they split.

### Code
\`\`\`cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    int curr = root->val, pval = p->val, qval = q->val;
    if (curr == pval || curr == qval) return root;
    if (curr > max(pval, qval)) return lowestCommonAncestor(root->left, p, q);
    if (curr < min(pval, qval)) return lowestCommonAncestor(root->right, p, q);
    return root;
}
\`\`\`

### Complexity
- Time: $O(h)$
- Space: $O(h)$

## Iterative

### Code
\`\`\`cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    while (root) {
        if (p->val < root->val && q->val < root->val)
            root = root->left;
        else if (p->val > root->val && q->val > root->val)
            root = root->right;
        else
            return root;
    }
    return nullptr;
}
\`\`\`

### Complexity
- Time: $O(h)$
- Space: $O(1)$
`,"../dsa-notes/Lowest Common Ancestor of a Binary Tree.md":`---
link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "return the node if it's p or q, if both sides return non-null this is the LCA"
time: "O(n)"
space: "O(h)"
date: 2023-01-31
---

# Problem
LCA of \`p\` and \`q\` in a binary tree (not a BST).

# Approach
## DFS
Return \`root\` if it's null, \`p\` or \`q\`. Recurse both sides. Both non-null means \`p\` and \`q\` split here. Else pass up whichever side found something. BST version: [[Lowest Common Ancestor of a Binary Search Tree]].

### Code
\`\`\`cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q){
    if(root == NULL || p == root || q == root) return root;
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    if(left && right) return root;
    return (right)?right:left;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Matrix Chain Multiplication.md":`---
link: https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "try every split k in [i, j), cost = left + right + arr[i-1] * arr[k] * arr[j], memo on (i, j)"
time: "O(n³)"
space: "O(n²)"
date: 2023-08-04
---

# Problem
Min multiplications to multiply a chain of matrices with dimensions \`arr\`.

# Approach
## Interval DP
\`mcm(i, j)\` = min cost for matrices \`i..j\`. Try every split \`k\`, add the cost of multiplying the two results: \`arr[i-1] * arr[k] * arr[j]\`. Start at \`i = 1, j = n - 1\`. Same shape as [[Burst Balloons]].

### Code
\`\`\`cpp
// recusrion
int mcm(int i, int j, int arr[], vector<vector<int>> &t)
{
    if (t[i][j] != -1)
        return t[i][j];

    int mini = INT32_MAX;

    if (i >= j)
        return 0;
    else
    {
        for (int k = i; k < j; k++)
        {
            int temp = mcm(i, k, arr, t) + mcm(k + 1, j, arr, t) + arr[i - 1] * arr[k] * arr[j];
            mini = min(temp, mini);
        }
    }
    return t[i][j] = mini;
}

int matrixMultiplication(int n, int arr[])
{
    vector<vector<int>> t(n, vector<int>(n, -1));
    return mcm(1, n - 1, arr, t);
}
\`\`\`

### Complexity
- Time: $O(n^3)$
- Space: $O(n^2)$
`,"../dsa-notes/Max Area of Island.md":`---
link: https://leetcode.com/problems/max-area-of-island/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "DFS returns the island size, track the max"
time: "O(m * n)"
space: "O(m * n)"
date: 2026-08-27
---

# Problem
Area of the largest island.

# Approach
## DFS
[[Number Of Islands]] but each DFS returns the size it flooded.

### Code
\`\`\`cpp
class Solution {
public:
    int dfs(vector<vector<int>>& grid, vector<vector<bool>>& vis, int i, int j) {
        if (i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size()) return 0;
        if (vis[i][j] || grid[i][j] == 0) return 0;

        vis[i][j] = true;
        return 1 + dfs(grid, vis, i-1, j) + dfs(grid, vis, i+1, j)
                  + dfs(grid, vis, i, j-1) + dfs(grid, vis, i, j+1);
    }

    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<vector<bool>> vis(m, vector<bool>(n, false));
        int ans = 0;

        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (!vis[i][j] && grid[i][j] == 1)
                    ans = max(ans, dfs(grid, vis, i, j));

        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Maximal Square.md":`---
link: https://leetcode.com/problems/maximal-square/
difficulty: Medium
topics:
  - "[[Arrays]]"
  - "[[Recursion]]"
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "dp[i][j] = 1 + min(right, down, diag) if cell is 1"
time: "O(m * n)"
space: "O(n)"
date: 2023-06-03
---

# Problem
Area of the largest square of 1s.

# Approach
## DP, 1D
Cell as the top-left corner: side = \`1 + min(right, down, diag)\` if it's 1. Fill from the bottom-right with one row \`t\` and \`prev\` for the diagonal.

### Code
\`\`\`cpp
int maximalSquare(vector<vector<char>> &matrix)
{
    int m = matrix.size();
    int n = matrix[0].size();
    int maxSquareSize = 0;
    int prev = 0;
    vector<int> t(n, 0);

    for (int i = m - 1; i >= 0; i--)
    {
        for (int j = n - 1; j >= 0; j--)
        {
            int temp = t[j];
            if (i == m - 1 || j == n - 1)
                t[j] = matrix[i][j] - '0';
            else if (matrix[i][j] != '0')
                t[j] = matrix[i][j] + min(t[j], min(prev, t[j + 1])) - '0';
            else    
                t[j] = 0;

            if (t[j] > maxSquareSize)
                maxSquareSize = t[j];
            prev = temp;
        }
    }
    return maxSquareSize * maxSquareSize;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(n)$
`,"../dsa-notes/Maximize Toys.md":`---
link: https://www.geeksforgeeks.org/problems/maximize-toys0331/1
difficulty: Easy
topics:
  - "[[Greedy]]"
  - "[[Sorting]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "sort ascending, buy cheapest first until the budget runs out"
time: "O(n log n)"
space: "O(1)"
date: 2026-08-21
---

# Problem
Max toys you can buy with budget \`k\`.

# Approach
## Sort + Greedy
Cheapest first always leaves the most budget. Stop at the first toy you can't afford.

Mistake I made: incremented \`n\` instead of \`ans\`.

### Code
\`\`\`cpp
class Solution {
public:
    int toyCount(vector<int> arr, int k) {
        int n = arr.size();
        sort(arr.begin(), arr.end());

        int ans = 0;
        for (int i = 0; i < n && k > 0; i++) {
            if (arr[i] <= k) {
                k -= arr[i];
                ans++;
            } else {
                break;
            }
        }

        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$
`,"../dsa-notes/Maximum Connected Group.md":`---
link: https://www.geeksforgeeks.org/problems/maximum-connected-group/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Disjoint Set Union]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "DSU the 1s, for each 0 sum the sizes of distinct neighbouring roots + 1"
time: "O(n²)"
space: "O(n²)"
date: 
---

# Problem
Flip at most one 0 to 1 in an \`n x n\` grid. Largest connected group of 1s.

# Approach
## DSU
Union adjacent 1s with [[Disjoint Set Union]]. For each 0, collect distinct roots of its neighbours in a set, size = 1 + their sizes. Also check the max existing component (no flip).

### Code
\`\`\`cpp
int MaxConnection(vector<vector<int>>& grid) {
        // code here
        int n = grid.size();
        DSU dsu(n*n);

        for(int row = 0; row < n; row++){
            for(int col = 0; col < n; col++){
                if(grid[row][col] == 0)
                    continue;

                int dx[] = {-1, 0, 1, 0};
                int dy[] = {0, -1, 0, 1};
                for(int i = 0; i < 4; i++){
                    int newr = row + dx[i];
                    int newc = col + dy[i];

                    if(newr >= 0 && newr < n && newc >= 0 && newc < n && grid[newr][newc] == 1){
                        int node = row * n + col;
                        int adj = newr * n + newc;
                        dsu.unionBySize(node, adj);
                    }
                }
            }
        }

        int mx = 0;

        for(int row = 0; row < n; row++){
            for(int col = 0; col < n; col++){
                if(grid[row][col] == 1) 
                    continue;

                int dx[] = {-1, 0, 1, 0};
                int dy[] = {0, -1, 0, 1};

                set<int> vis;

                for(int i = 0; i < 4; i++){
                    int newr = row + dx[i];
                    int newc = col + dy[i];

                    if(newr >= 0 && newr < n && newc >= 0 && newc < n && grid[newr][newc] == 1){
                        int node = row * n + col;
                        int adj = newr * n + newc;
                        vis.insert(dsu.findUPar(adj));
                    }
                }

                int sizeTotal = 1;
                for( auto it : vis){
                    sizeTotal += dsu.size[it];
                }

                mx = max(mx, sizeTotal);
            }
        }

        for(int cell = 0; cell < n*n ; cell++)
            mx = max(mx,dsu.size[dsu.findUPar(cell)]);

        return mx;
    }
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Maximum Depth of Binary Tree.md":`---
link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "1 + max(depth(left), depth(right))"
time: "O(n)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Max depth of a binary tree.

# Approach
## DFS
\`1 + max(left, right)\`.

### Code
\`\`\`cpp
int maxDepth(TreeNode* root) {
    if (!root)
        return 0;

    return max(maxDepth(root->right), maxDepth(root->left)) + 1;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Maximum Length of Pair Chain.md":`---
link: https://leetcode.com/problems/maximum-length-of-pair-chain/
difficulty: Medium
topics:
  - "[[Greedy]]"
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "sort by end, greedily take a pair if its start > last end"
time: "O(n log n)"
space: "O(1)"
date: 
---

# Problem
Longest chain of pairs where \`b < c\` for consecutive pairs \`[a,b], [c,d]\`.

# Approach
## DP
Sort, then [[Longest Increasing Subsequence]] style.

### Code
\`\`\`cpp
int findLongestChain(vector<vector<int>> &pairs)
{
    int n = pairs.size();
    int max_length = 1;
    sort(pairs.begin(), pairs.end());
    vector<int> t(n, 1);
    for (int i = n - 1; i >= 0; i--)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (pairs[j][0] > pairs[i][1])
            {
                t[i] = max(t[i], 1 + t[j]);
            }
        }
        max_length = max(max_length, t[i]);
    }
    return max_length;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## Greedy
Sort by end. Take a pair if its start > the last end. Smaller end leaves more room for later pairs.

### Code
\`\`\`cpp
int findLongestChain(vector<vector<int>> &pairs)
{
    sort(pairs.begin(), pairs.end(), [](vector<int> a, vector<int> b)
         { return a[1] < b[1]; });

    int n = pairs.size();
    int max_length = 0;
    int prev = INT32_MIN;
    for (int i = 0; i < n; i++)
    {
        if (pairs[i][0] > prev)
        {
            max_length++;
            prev = pairs[i][1];
        }
    }

    return max_length;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$
`,"../dsa-notes/Maximum Path Sum Node to Node.md":`---
link: https://www.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1
difficulty: Medium
topics:
  - "[[Recursion]]"
  - "[[Trees]]"
  - "[[Dynamic Programming]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "return max(val, val + best arm), update with val + l + r"
time: "O(n)"
space: "O(h)"
date: 
---

# Problem
Max path sum between any two nodes. GFG version of [[Binary Tree Maximum Path Sum]].

# Approach
## DFS with Global Max
Return \`max(val, val + max(l, r))\` up. Update the answer with \`max(that, val + l + r)\`.

### Code
\`\`\`cpp
int solve(Node* root, int &sum){
    if(root == NULL)
        return 0;
    int left = solve(root->left, sum);
    int right = solve(root->right, sum);

    int temp = max(max(left, right) + root->data, root->data);
    int ans = max(temp, root->data + left + right);
    sum = max(sum, ans);
    return temp;
}

int findMaxSum(Node* root)
{
    // Your code goes here
    int sum = INT32_MIN;
    int temp = solve(root, sum);
    return sum;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Maximum Product Subarray.md":`---
link: https://leetcode.com/problems/maximum-product-subarray/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "track both max and min product ending here, a negative flips them"
time: "O(n)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Max product of a contiguous subarray.

# Approach
## Running Max and Min
A negative flips the order, so keep both. New max/min from \`nums[i]\`, \`nums[i] * maxp\`, \`nums[i] * minp\`.

Mistakes I made: seeded \`minp\` with \`nums[1]\`, and \`res\` with \`-1e9\` so \`nums[0]\` alone was never a candidate. Seed all three with \`nums[0]\`.

### Code
\`\`\`cpp
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxp = nums[0], minp = nums[0];
        int res = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            int nmaxp = max({nums[i], nums[i] * maxp, nums[i] * minp});
            int nminp = min({nums[i], nums[i] * maxp, nums[i] * minp});
            res = max(res, nmaxp);
            maxp = nmaxp;
            minp = nminp;
        }

        return res;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Maximum Subarray Sum After Multiplier.md":`---
link: https://leetcode.com/problems/maximum-subarray-sum-after-multiplier/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "3-state Kadane (before, inside, after the scaled segment), run once for * k and once for / k"
time: "O(n)"
space: "O(1)"
date: 2026-06-28
---

# Problem
Scale one subarray by \`* k\` or \`/ k\`, then max subarray sum.

# Approach
## 3-State Kadane
The sum subarray is unscaled prefix, scaled middle, unscaled suffix. States: \`pre\`, \`mid\`, \`post\`, each the best sum ending here. Run once for multiply, once for divide (C++ \`/\` truncates toward zero, which is what's asked). Save old \`pre\` and \`mid\` before updating.

### Code
\`\`\`cpp
long long maxSubarraySum(vector<int>& nums, int k) {
    int n = nums.size();
    long long ans = LLONG_MIN;
    for (int t = 0; t < 2; t++) {
        long long pre  = nums[0];
        long long mid  = (t == 0) ? (long long)nums[0] * k : nums[0] / k;
        long long post = LLONG_MIN / 2;
        ans = max({ans, pre, mid});
        for (int i = 1; i < n; i++) {
            long long v = nums[i];
            long long sv = (t == 0) ? v * k : v / k;
            long long oldPre = pre, oldMid = mid;
            pre  = max(pre + v, v);
            mid  = max({oldMid + sv, oldPre + sv, sv});
            post = max(post + v, oldMid + v);
            ans  = max({ans, pre, mid, post});
        }
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Maximum Subarray.md":`---
link: https://leetcode.com/problems/maximum-subarray/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Greedy]]"
source: Leetcode
star: true
blind75: true
mastery: green
review: 2026-11-15
insight: "Kadane: curr = max(nums[i], curr + nums[i]), answer is the max over all i"
time: "O(n)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Max sum of a contiguous subarray.

# Approach
## Kadane's
\`dp[i] = max(nums[i], nums[i] + dp[i-1])\`. Greedy view: drop a negative running sum. Answer is the max over every \`i\`, not the last one.

- It is 1D, \`dp[i]\` reads only \`dp[i-1]\`, so one variable is enough
- Need the subarray itself: set \`start = i\` when starting fresh, save \`bestStart\`/\`bestEnd\` when \`ans\` improves

### Code
\`\`\`cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int prev1 = nums[0];
        int ans = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            int curr = max(nums[i], nums[i] + prev1);
            ans = max(ans, curr);
            prev1 = curr;
        }

        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Maximum Total Sum of K Selected Elements.md":`---
link: https://leetcode.com/problems/maximum-total-sum-of-k-selected-elements/
difficulty: Medium
topics:
  - "[[Greedy]]"
  - "[[Sorting]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort, give the biggest multiplier to the biggest element, multiply while mul > 1"
time: "O(n log n)"
space: "O(1)"
date: 2026-06-28
---

# Problem
Pick \`k\` elements. Each one either adds its value or its value * \`mul\`, then \`mul\` drops by 1. Max total.

# Approach
## Greedy
Sort, take the \`k\` largest from the back. Multiply while \`mul > 1\`, else add. Cast to \`long long\` before multiplying.

### Code
\`\`\`cpp
long long maxSum(vector<int>& nums, int k, int mul) {
    sort(nums.begin(), nums.end());
    int n = nums.size() - 1;
    long long sum = 0;
    while (k--) {
        sum += mul > 1 ? (long long)nums[n] * mul : nums[n];
        n--;
        mul--;
    }
    return sum;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$
`,"../dsa-notes/Median of Two Sorted Arrays.md":`---
link: https://leetcode.com/problems/median-of-two-sorted-arrays/
difficulty: Hard
topics:
  - "[[Arrays]]"
  - "[[Binary Search]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "binary search the partition of the smaller array so left halves hold (m+n+1)/2 elements"
time: "O(m + n)"
space: "O(m + n)"
date: 2023-01-31
---

# Problem
Median of two sorted arrays.

# Approach
## Merge Until the Middle
Merge like merge sort until past the midpoint, read the middle one or two.

### Code
\`\`\`cpp
double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2)
{
    int t = nums1.size() + nums2.size();
    int h = t / 2;
    vector<int> a;
    int i = 0;
    int j = 0;
    while (t-- >= h)
    {
        if (i < nums1.size() && j < nums2.size())
        {
            if (nums1[i] < nums2[j])
            {
                a.push_back(nums1[i]);
                i++;
            }
            else
            {
                a.push_back(nums2[j]);
                j++;
            }
        }
        else if (i < nums1.size())
        {
            a.push_back(nums1[i]);
            i++;
        }
        else if (j < nums2.size())
        {
            a.push_back(nums2[j]);
            j++;
        }
    }
    int n = a.size();
    // for(int i = 0; i < n; i++)
    //     cout<<a[i]<<" ";
    if (n >= 2)
        return ((nums1.size() + nums2.size()) % 2 == 0) ? (float)(a[n - 1] + a[n - 2]) / 2.0 : (float)a[n - 2];
    else
        return a[0];
}
\`\`\`

### Complexity
- Time: $O(m + n)$
- Space: $O(m + n)$

## Binary Search on the Partition
The intended solution. Cut the smaller array at \`i\` and the other at \`(m+n+1)/2 - i\`. Valid when \`A[i-1] <= B[j]\` and \`B[j-1] <= A[i]\`. $O(\\log \\min(m, n))$.
`,"../dsa-notes/Meeting Rooms.md":`---
link: https://leetcode.com/problems/meeting-rooms/
difficulty: Easy
topics:
  - "[[Sorting]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "sort by start, then any overlap shows up between neighbours: end > next start"
time: "O(n log n)"
space: "O(1)"
date: 2026-11-08
---

# Problem
Can one person attend every meeting, i.e. no two intervals overlap.

# Approach
## Sort by start, compare neighbours
After sorting by start, if any two meetings overlap then some adjacent pair does. One pass over the neighbours.

- Ending exactly when the next starts is fine, so the check is \`end > next.start\`
- Sorts the caller's input in place

### Code
\`\`\`cpp
bool canAttendMeetings(vector<Interval>& intervals) {
    sort(intervals.begin(), intervals.end(),
         [](const Interval& a, const Interval& b) { return a.start < b.start; });
    int n = intervals.size();
    for (int i = 0; i < n - 1; i++) {
        if (intervals[i].end > intervals[i + 1].start) return false;
    }
    return true;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$
`,"../dsa-notes/Merge Intervals.md":`---
link: https://leetcode.com/problems/merge-intervals/
difficulty: Medium
topics:
  - "[[Arrays]]"
  - "[[Sorting]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "sort by start, extend the current interval while the next starts before it ends"
time: "O(n log n)"
space: "O(n)"
date: 2023-03-11
---

# Problem
Merge all overlapping intervals.

# Approach
## Sort + Sweep
Sort by start. If the next starts at or before the current end, extend the end. Else push and start a new one.

### Code
\`\`\`cpp
vector<vector<int>> merge(vector<vector<int>> &intervals)
{
    vector<vector<int>> merged;
    if (intervals.size() == 0)
    {
        return merged;
    }
    sort(intervals.begin(), intervals.end());
    vector<int> tempInterval = intervals[0];
    for (auto it : intervals)
    {
        if (it[0] <= tempInterval[1])
        {
            tempInterval[1] = max(it[1], tempInterval[1]);
        }
        else
        {
            merged.push_back(tempInterval);
            tempInterval = it;
        }
    }
    merged.push_back(tempInterval);
    return merged;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Merge Sorted Array.md":`---
link: https://leetcode.com/problems/merge-sorted-array/
difficulty: Easy
topics:
  - "[[Arrays]]"
  - "[[Two Pointers]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "fill nums1 from the back with the larger of the two tails"
time: "O(m + n)"
space: "O(1)"
date: 2022-12-10
---

# Problem
Merge \`nums2\` into \`nums1\` in place, \`nums1\` has room at the end.

# Approach
## Merge from the Back
Three pointers at the tails. Write the larger one at \`k\`. Leftover \`nums2\` gets copied, leftover \`nums1\` is already in place.

### Code
\`\`\`cpp
void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
{
    int i = m - 1, j = n - 1, k = nums1.size() - 1;
    while (i >= 0 && j >= 0)
    {
        if (nums1[i] > nums2[j])
        {
            nums1[k] = nums1[i];
            i--;
        }
        else
        {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while (j >= 0)
    {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}
\`\`\`

### Complexity
- Time: $O(m + n)$
- Space: $O(1)$
`,"../dsa-notes/Merge Triplets to Form Target Triplet.md":`---
link: https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
difficulty: Medium
topics:
  - "[[Greedy]]"
source: Leetcode
star: false
blind75: false
mastery: green
review: 2026-11-15
insight: "drop any triplet with a value above the target, then each position needs a survivor equal to the target"
time: "O(n)"
space: "O(1)"
date: 2026-11-08
---

# Problem
Merging two triplets takes the max per position. Can you reach \`target\`?

# Approach
## Filter + three flags
Merging only raises values, so a triplet with any value above the target is unusable. Drop it whole. Among the rest, each position needs one triplet that equals the target there.

Equivalent: keep a running max of the survivors and compare to \`target\` at the end.

### Code
\`\`\`cpp
bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {
    bool ok[3] = {0, 0, 0};
    for (auto& triplet : triplets) {
        if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2])
            continue;
        for (int i = 0; i < 3; i++)
            ok[i] = (triplet[i] == target[i]) || ok[i];
    }
    return ok[0] && ok[1] && ok[2];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Merge Two Sorted Lists.md":`---
link: https://leetcode.com/problems/merge-two-sorted-lists/
difficulty: Easy
topics:
  - "[[Linked Lists]]"
  - "[[Two Pointers]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "dummy head, attach the smaller node, append the leftover list"
time: "O(n + m)"
space: "O(1)"
date: 
---

# Problem
Merge two sorted linked lists.

# Approach
## Dummy Head
Attach the smaller head each step, then append whatever is left.

### Code
\`\`\`cpp
ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode* ans = new ListNode();
    ListNode* temp = ans;

    while (list1 && list2) {
        if (list1->val < list2->val) {
            temp->next = list1;
            list1 = list1->next;
        } else {
            temp->next = list2;
            list2 = list2->next;
        }
        temp = temp->next;
    }

    if (list1) temp->next = list1;
    if (list2) temp->next = list2;

    return ans->next;
}
\`\`\`

### Complexity
- Time: $O(n + m)$
- Space: $O(1)$
`,"../dsa-notes/Merge k Sorted Lists.md":`---
link: https://leetcode.com/problems/merge-k-sorted-lists/
difficulty: Hard
topics:
  - "[[Linked Lists]]"
  - "[[Heap]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "min heap of list heads, or merge pairwise. merging one by one is O(kN)"
time: "O(k * N)"
space: "O(1)"
date: 
---

# Problem
Merge \`k\` sorted linked lists.

# Approach
## Merge One by One
[[Merge Two Sorted Lists]] \`k - 1\` times. Simple but each merge rewalks the growing result. A min heap of heads makes it $O(N \\log k)$.

### Code
\`\`\`cpp
ListNode* merge2(ListNode* l1, ListNode* l2) {
    ListNode* ans = new ListNode();
    ListNode* temp = ans;

    while(l1 && l2){
        if(l1->val < l2->val){
            temp->next = l1;
            l1 = l1->next;
        } else {
            temp->next = l2;
            l2 = l2->next;
        }
        temp = temp->next;
    }

    if(l1) temp->next = l1;
    if(l2) temp->next = l2;

    return ans->next;
}

ListNode* mergeKLists(vector<ListNode*>& lists) {
    int n = lists.size();
    if(n == 1) return lists[0];
    if(n == 0) return nullptr; 
    ListNode* ans = new ListNode();
    ans = lists[0];
    for(int i = 1; i < n; i++){
        ans = merge2(ans, lists[i]);
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(k \\cdot N)$
- Space: $O(1)$
`,"../dsa-notes/Min Cost Climbing Stairs.md":`---
link: https://leetcode.com/problems/min-cost-climbing-stairs/
difficulty: Easy
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "dp[i] = cost[i] + min(dp[i+1], dp[i+2]), answer min(dp[0], dp[1])"
time: "O(n)"
space: "O(1)"
date: 2026-08-29
---

# Problem
Min cost to reach the top, start at step 0 or 1, move 1 or 2.

# Approach
\`dp[i] = cost[i] + min(dp[i+1], dp[i+2])\`, past the top = 0. Answer \`min(dp[0], dp[1])\`.

## Memoization

### Code
\`\`\`cpp
class Solution {
public:
    unordered_map<int, int> mp;
    int solve(vector<int>& cost, int ind) {
        if (ind >= cost.size()) return 0;
        if (ind >= cost.size() - 2) return cost[ind];
        if (mp.find(ind) != mp.end()) return mp[ind];
        return mp[ind] = cost[ind] + min(solve(cost, ind + 1), solve(cost, ind + 2));
    }
    int minCostClimbingStairs(vector<int>& cost) { return min(solve(cost, 0), solve(cost, 1)); }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Two Variables

### Code
\`\`\`cpp
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        int prev1 = 0, prev2 = 0;

        for (int i = n - 1; i >= 0; i--) {
            int curr = cost[i] + min(prev1, prev2);
            prev2 = prev1;
            prev1 = curr;
        }

        return min(prev1, prev2);
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Min Stack.md":`---
link: https://leetcode.com/problems/min-stack/
difficulty: Medium
topics:
  - "[[Stack]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "second stack holding the min so far at each level"
time: "O(1)"
space: "O(n)"
date: 2026-05-25
---

# Problem
Stack with O(1) \`getMin\`.

# Approach
## Two Stacks
\`minSt\` pushes \`min(top, val)\` with every push and pops with every pop.

### Code
\`\`\`cpp
class MinStack {
public:
    stack<int> st;
    stack<int> minSt;
    MinStack() {}

    void push(int val) {
        st.push(val);
        if (minSt.empty())
            minSt.push(val);
        else
            minSt.push(min(minSt.top(), val));
    }

    void pop() {
        st.pop();
        minSt.pop();
    }

    int top() { return st.top(); }

    int getMin() { return minSt.top(); }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(n)$

## Stack of Pairs
Same idea in one stack: each entry is \`{val, min so far}\`. A pop returns the stack to its state before the push, so the new top already holds the right min.

Mistakes I made (re-solve 2026-11-08):
- First tried a min-heap with a count map, or a \`min\` variable with a frequency map. Both are $O(\\log n)$ at best, a plain frequency map can't find the next min in $O(1)$. Pops come in reverse order of pushes, so store the min with each element.
- \`st.top()\` on an empty stack is undefined. The first push needs \`{val, val}\`.
- A local named \`top\` inside \`push\` shadows the method. Use \`st.top().second\`.

Cheaper in space: push to the min stack only when \`val <= min\` and pop it only when the popped value equals its top (use \`<=\`, not \`<\`). Or one stack of \`val - min\` with a \`long long\` min, a negative entry marks a new min.

### Code
\`\`\`cpp
class MinStack {
    stack<pair<int, int>> st;

   public:
    MinStack() {}

    void push(int val) {
        if (!st.empty()) {
            auto [top, topmin] = st.top();
            int newmin = min(topmin, val);
            st.push({val, newmin});
        } else {
            st.push({val, val});
        }
    }

    void pop() { st.pop(); }

    int top() {
        auto [top, topmin] = st.top();
        return top;
    }

    int getMin() {
        auto [top, topmin] = st.top();
        return topmin;
    }
};
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(n)$
`,"../dsa-notes/Minimum ASCII Delete Sum for Two Strings.md":`---
link: https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "LCS weighted by ASCII, answer = sum(s1) + sum(s2) - 2 * best common"
time: "O(m * n)"
space: "O(m * n)"
date: 
---

# Problem
Min ASCII sum of deleted chars to make two strings equal.

# Approach
## Weighted LCS
[[Longest Common Subsequence]] but a match adds the char's ASCII value. Delete everything else.

### Code
\`\`\`cpp
int asciisum(string s){
        int sum = 0;
        for(char i: s)
            sum += i;
        return sum;
    }
int minimumDeleteSum(string s1, string s2) {
    vector<vector<int>> t(s1.size() + 1, vector<int> (s2.size()+ 1));
    for(int i = 0; i <= s1.size(); i++){
        for(int j = 0; j <= s2.size(); j++){
            if(i == 0 || j == 0)
                t[i][j] = 0;
            else{
                if(s1[i-1] == s2[j-1])
                    t[i][j] = t[i-1][j-1] + s1[i-1];
                else
                    t[i][j] = max(t[i-1][j], t[i][j-1]);
            }
        }
    }

    return asciisum(s1) + asciisum(s2) - 2*t[s1.size()][s2.size()];
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Minimum Falling Path Sum.md":`---
link: https://leetcode.com/problems/minimum-falling-path-sum/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "from the bottom row up, t[i][j] = val + min of the three cells below"
time: "O(n²)"
space: "O(n²)"
date: 2023-06-02
---

# Problem
Min sum path from top to bottom, each step goes down, down-left or down-right.

# Approach
## Bottom-Up DP
Start with the last row. \`t[i][j] = matrix[i][j] + min(t[i+1][j-1], t[i+1][j], t[i+1][j+1])\`. Answer is the min of row 0.

### Code
\`\`\`cpp
int minFallingPathSum(vector<vector<int>> &matrix)
{
    int m = matrix.size();
    int n = matrix[0].size();
    vector<vector<int>> t(m, vector<int>(n, 0));
    t.back() = matrix.back();

    for (int i = m - 2; i >= 0; i--)
    {
        for (int j = 0; j < n; j++)
        {
            t[i][j] = matrix[i][j] + min(t[i + 1][j], min((j + 1 < n) ? t[i + 1][j + 1] : INT32_MAX, (j - 1 >= 0) ? t[i + 1][j - 1] : INT32_MAX));
        }
    }

    sort(t[0].begin(), t[0].end());
    return t[0][0];
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Minimum Insertion Steps to Make a String Palindrome.md":`---
link: https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "n - LCS(s, reverse(s)), the LCS with its reverse is the longest palindromic subsequence"
time: "O(n²)"
space: "O(n²)"
date: 2023-07-27
---

# Problem
Min insertions to make \`s\` a palindrome.

# Approach
## LCS with the Reverse
[[Longest Common Subsequence]] of \`s\` and \`reverse(s)\` = longest palindromic subsequence. Everything else needs a partner inserted: \`n - lps\`.

Typo in my code: \`t[i][j] == 0\` instead of \`=\`. Harmless because the vector starts at 0.

### Code
\`\`\`cpp
int minInsertions(string s)
{
    int n = s.size();
    string sr = "";

    for (int i = 0; i < n; i++)
    {
        sr = s[i] + sr;
    }

    vector<vector<int>> t(n + 1, vector<int>(n + 1));
    for (int i = 0; i < n + 1; i++)
    {
        for (int j = 0; j < n + 1; j++)
        {
            if (i == 0 || j == 0)
                t[i][j] == 0;
            else
            {
                if (s[i - 1] == sr[j - 1])
                    t[i][j] = 1 + t[i - 1][j - 1];
                else
                    t[i][j] = max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    return n - t[n][n];
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Minimum Number of Deletions and Insertions.md":`---
link: https://www.geeksforgeeks.org/problems/minimum-number-of-deletions-and-insertions0209/1
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "deletions = n - LCS, insertions = m - LCS"
time: "O(n * m)"
space: "O(n * m)"
date: 2023-07-27
---

# Problem
Min deletions and insertions to turn \`str1\` into \`str2\`.

# Approach
## LCS
Keep the LCS, delete the rest of \`str1\` (\`n - l\`), insert the rest of \`str2\` (\`m - l\`). Same as [[Delete Operation for Two Strings]].

### Code
\`\`\`cpp
int minOperations(string str1, string str2)
{
    int n = str1.size();
    int m = str2.size();

    vector<vector<int>> t(n + 1, vector<int>(m + 1));
    for (int i = 0; i < n + 1; i++)
    {
        for (int j = 0; j < m + 1; j++)
        {
            if (j == 0 || i == 0)
                t[i][j] = 0;
            else
            {
                if (str1[i - 1] == str2[j - 1])
                    t[i][j] = t[i - 1][j - 1] + 1;
                else
                    t[i][j] = max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    int l = t[n][m];

    return ((l == m) ? (n - l) : (n - l + m - l));
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Minimum Path Sum.md":`---
link: https://leetcode.com/problems/minimum-path-sum/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "t[i][j] = grid[i][j] + min(top, left)"
time: "O(m * n)"
space: "O(m * n)"
date: 
---

# Problem
Min sum path from top-left to bottom-right, moving right or down.

# Approach
## Forward DP
\`t[i][j] = grid[i][j] + min(t[i-1][j], t[i][j-1])\`. Like [[Unique Paths]].

### Code
\`\`\`cpp
int minPathSum(vector<vector<int>> &grid)
{
    vector<vector<int>> t(grid.size(), vector<int>(grid[0].size(), 0));
    t[0][0] = grid[0][0];
    for (int i = 0; i < t.size(); i++)
    {
        for (int j = 0; j < t[0].size(); j++)
        {
            int x = INT32_MAX, y = INT32_MAX;
            if(i == 0 && j == 0)
                continue;
            if (i >= 1)
                y = t[i - 1][j];
            if (j >= 1)
                x = t[i][j - 1];
            t[i][j] = min(x, y) + grid[i][j];
        }
    }
    return t[t.size() - 1][t[0].size() - 1];
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Minimum Spanning Tree.md":`---
link: https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1
difficulty: Medium
topics:
  - "[[Graphs]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "Prim's: min pq of {wt, node}, skip visited, add wt when a node is first popped"
time: "O(E log E)"
space: "O(V + E)"
date: 
---

# Problem
Weight of the minimum spanning tree: connects all vertices, no cycles, min total weight.

# Approach
## Prim's
Start anywhere. Always add the smallest edge leaving the whole visited cluster. Min pq of \`{wt, node}\`, skip visited nodes.

### Code
\`\`\`cpp
int spanningTree(int V, vector<vector<int>> adj[])
    {
        // code here
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>> > pq;
        vector<int> visited(V, 0);
        //wt, node
        pq.push({0,0});
        int sum = 0; 

        while(!pq.empty()){
            auto it = pq.top();
            pq.pop();

            int wt = it.first;
            int node = it.second;

            if(visited[node] == 1)
                continue;
            else{
                visited[node] = 1;
                sum += wt;
                for(auto i : adj[node]){
                    int edw = i[1];
                    int adjNode = i[0];
                    pq.push({edw, adjNode});
                }
            }
        }

        return sum;
    }
\`\`\`

### Complexity
- Time: $O(E \\log E)$
- Space: $O(V + E)$

## Kruskal's
See [[Kruskal's Algorithm]].
`,"../dsa-notes/Minimum Time to Reach Target with Limited Power.md":`---
link: https://leetcode.com/problems/minimum-time-to-reach-target-with-limited-power/
difficulty: Hard
topics:
  - "[[Dijkstra]]"
  - "[[Graphs]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "Dijkstra on (node, power left), pq by (time, -power) so the first target pop wins both"
time: "O((n * P + E) log(n * P))"
space: "O(n * P)"
date: 2026-06-28
---

# Problem
Directed graph, leaving \`u\` costs \`cost[u]\` power. Min time to target, tie-break by max power left.

# Approach
## Dijkstra on (node, power)
Same node with different power reaches different places, so power is part of the state. Order the pq by \`(time, -power)\`, the first pop of the target is the answer.

### Code
\`\`\`cpp
vector<long long> minTimeMaxPower(int n, vector<vector<int>>& edges, int power, vector<int>& cost, int source, int target) {
    if (source == target) return {0, (long long)power};
    vector<vector<pair<int,int>>> adj(n);
    for (auto& e : edges) adj[e[0]].push_back({e[1], e[2]});
    vector<vector<long long>> dist(n, vector<long long>(power + 1, LLONG_MAX));
    priority_queue<tuple<long long,int,int,int>,
                   vector<tuple<long long,int,int,int>>,
                   greater<>> pq;
    dist[source][power] = 0;
    pq.push({0, -power, source, power});
    while (!pq.empty()) {
        auto [t, npw, node, pw] = pq.top(); pq.pop();
        if (node == target) return {t, (long long)pw};
        if (t > dist[node][pw]) continue;
        if (pw < cost[node]) continue;
        int newpw = pw - cost[node];
        for (auto [v, w] : adj[node]) {
            long long newt = t + w;
            if (newt < dist[v][newpw]) {
                dist[v][newpw] = newt;
                pq.push({newt, -newpw, v, newpw});
            }
        }
    }
    return {-1, -1};
}
\`\`\`

### Complexity
- Time: $O((nP + E) \\log(nP))$
- Space: $O(nP)$
`,"../dsa-notes/Minimum Window Substring.md":`---
link: https://leetcode.com/problems/minimum-window-substring/
difficulty: Hard
topics:
  - "[[Sliding Window]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "need-count map + counter of missing chars, shrink from the left while counter == 0"
time: "O(m + n)"
space: "O(1)"
date: 
---

# Problem
Smallest window of \`s\` containing all of \`t\`, duplicates included.

# Approach
## Sliding Window + Counter
Map of needed counts, \`counter\` = chars still missing. Grow right, decrement. While \`counter == 0\` record the window and shrink from the left.

### Code
\`\`\`cpp
string minWindow(string s, string t) {
    int m = s.size(), n = t.size();
    if(n > m) return "";

    unordered_map<char, int> map;
    for(char c : t) map[c]++;

    int counter = n;
    int left = 0, right = 0;
    int length = INT32_MAX;
    pair<int, int> ans = {0,0};

    while(right < m) {
        if(map.find(s[right]) != map.end()){
            if(map[s[right]] > 0) counter--;
            map[s[right]]--;
        }

        while(counter == 0) {
            if((right - left + 1) < length){
                length = right - left + 1;
                ans = {left, length};
            }

            if(map.find(s[left]) != map.end()){
                map[s[left]]++;
                if(map[s[left]] > 0) counter++;
            }
            left++;
        }
        right++;
    }

    return s.substr(ans.first, ans.second);
}
\`\`\`

### Complexity
- Time: $O(m + n)$
- Space: $O(1)$, charset size
`,"../dsa-notes/Minimum cost for tickets.md":`---
link: https://leetcode.com/problems/minimum-cost-for-tickets/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "dp over travel days, for each pass skip ahead past the days it covers"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Min cost to cover all travel days with 1, 7 and 30 day passes.

# Approach
## Memoization
From day \`i\`, try each pass, skip to the first day it doesn't cover.

### Code
\`\`\`cpp
int dfs(int i, vector<int> &days, vector<int> &costs, unordered_map<int, int> &t){
    if(i == days.size())
        return 0;
    if(t.find(i) != t.end())
        return t[i];

    t[i] = INT32_MAX;

    vector<int> d = {1,7,30};
    for(int c = 0; c < 3; c++){
        int j = i;
        while(j < days.size() && days[j] < days[i] + d[c])
            j++;

        t[i] = min(t[i], costs[c] + dfs(j, days, costs, t));
    }

    return t[i];
}

int mincostTickets(vector<int>& days, vector<int>& costs) {
    unordered_map<int, int> t;
    return dfs(0, days, costs, t);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Tabulation
Same from the back. Like [[Coin Change]].

### Code
\`\`\`cpp
int mincostTickets(vector<int>& days, vector<int>& costs) {
    int n = days.size();
    vector<int> t(n+1, 0);
    vector<int> d = {1, 7, 30};

    for(int i = n-1; i >= 0; i--){
        t[i] = INT32_MAX;
        for(int j = 0; j < 3; j++){
            int k = i;
            while(k < n && days[k] < days[i] + d[j])
                k++;
            t[i] = min(t[i], t[k] + costs[j]);
        }
    }

    return t[0];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Missing Number.md":`---
link: https://leetcode.com/problems/missing-number/
difficulty: Easy
topics:
  - "[[Bit Manipulation]]"
  - "[[Math]]"
source: Leetcode
star: true
blind75: true
mastery: green
review: 2026-11-15
insight: "XOR all indices 0..n and all values, pairs cancel, missing one remains"
time: "O(n)"
space: "O(1)"
date: 2026-08-23
---

# Problem
Find the missing number in \`0..n\`.

# Approach
## XOR
Start with \`n\`, XOR every \`i\` and \`nums[i]\`. Present numbers cancel. No overflow, unlike the sum formula.

### Code
\`\`\`cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int result = nums.size();
        for (int i = 0; i < nums.size(); i++) {
            result ^= i ^ nums[i];
        }
        return result;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$

- \`n(n+1)/2\` minus the array sum, \`n = nums.size()\`
- \`n * (n + 1)\` overflows int past n of about 46340. Accumulate \`i - nums[i]\` or XOR instead, both can't overflow
- Tests: \`[3,0,1]\` is 2, \`[0]\` is 1, \`[1]\` is 0
`,"../dsa-notes/Move Zeroes.md":`---
link: https://leetcode.com/problems/move-zeroes/
difficulty: Easy
topics:
  - "[[Two Pointers]]"
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "write pointer for non-zeros, fill the rest with 0"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Move all 0s to the end in place, keep the order of the rest.

# Approach
## Snowball
\`sb\` = zeros seen so far. Each non-zero moves back by \`sb\` and leaves a 0 behind.

### Code
\`\`\`cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int n = nums.size();
        int sb = 0;
        for (int i = 0; i<n;i++){
            if(nums[i] == 0)
                sb++;
            else if(sb>0){
                nums[i-sb] = nums[i];
                nums[i] = 0;
            }
        }
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Multiply Strings.md":`---
link: https://leetcode.com/problems/multiply-strings/
difficulty: Easy
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "digit i * digit j lands at result[i + j + 1], carry into result[i + j]"
time: "O(n * m)"
space: "O(n + m)"
date: 2023-03-28
---

# Problem
Multiply two numbers given as strings.

# Approach
## Grade School Multiplication
Result has \`n + m\` digits. \`num1[j] * num2[i]\` adds to \`result[i+j+1]\`, carry goes to \`result[i+j]\`. Strip leading zeros, return \`"0"\` if nothing is left.

### Code
\`\`\`cpp
string multiply(string num1, string num2) {
        int n = num1.size();
        int m = num2.size();
        string result = "";
        for (int i = 0; i < n + m; i++)
        {
            result += '0';
        }
        for (int i = m - 1; i >= 0; i--)
        {
            for (int j = n - 1; j >= 0; j--)
            {
                int sum = (result[i + j + 1] - '0') + (num1[j] - '0') * (num2[i] - '0');
                result[i + j + 1] = char(sum % 10 + '0');
                result[i + j] = char(result[i + j] + sum / 10);
            }
        }
        int k = 0;
        for (k = 0; k < n + m; k++)
        {
            if (result[k] != '0')
                break;
        }
        return (result.substr(k, n + m - k + 1).size() > 0) ? result.substr(k,n+m-k+1):"0" ;
    }
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n + m)$
`,"../dsa-notes/N-Queens.md":`---
link: https://leetcode.com/problems/n-queens/
difficulty: Hard
topics:
  - "[[Backtracking]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "same diagonal shares row+col or row-col, keep sets for cols and both diagonals"
time: "O(N!)"
space: "O(N)"
date: 2026-07-01
---

# Problem
Place \`n\` queens so none attack each other. Return all boards.

# Approach
## Backtracking with Sets
One queen per row, try each column. Same diagonal = same \`row+col\` or same \`row-col\`. Keep \`cols\`, \`pos\` and \`neg\` sets.

Traps:
- \`row-j\` with sign, not \`abs\`.
- Insert and erase the same expression.
- \`vector<char>\` board, use \`'Q'\` not \`"Q"\`.

### Code
\`\`\`cpp
void solve(vector<vector<string>>& ans, vector<vector<char>>& board,
           int row, vector<bool>& cols, set<int>& pos, set<int>& neg) {
    if (row == board.size()) {
        vector<string> sa;
        for (int i = 0; i < board.size(); i++) {
            string s(board[i].begin(), board[i].end());
            sa.push_back(s);
        }
        ans.push_back(sa);
        return;
    }
    for (int j = 0; j < board[row].size(); j++) {
        if (cols[j] || pos.count(row+j) || neg.count(row-j)) continue;
        board[row][j] = 'Q';
        pos.insert(row+j); neg.insert(row-j); cols[j] = true;
        solve(ans, board, row+1, cols, pos, neg);
        board[row][j] = '.';
        pos.erase(row+j); neg.erase(row-j); cols[j] = false;
    }
}

vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> ans;
    vector<vector<char>> board(n, vector<char>(n, '.'));
    vector<bool> cols(n, false);
    set<int> pos, neg;
    solve(ans, board, 0, cols, pos, neg);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n!)$
- Space: $O(n)$
`,"../dsa-notes/N-ary Tree Level Order Traversal.md":`---
link: https://leetcode.com/problems/n-ary-tree-level-order-traversal/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "BFS with level size, push every child"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Level-order traversal of an n-ary tree.

# Approach
## BFS with Two Level Vectors
\`current\` holds this level, collect every child into \`next\`, swap.

### Code
\`\`\`cpp
vector<vector<int>> levelOrder(Node *root)
{
    vector<vector<int>> ans;
    if(root == NULL)
        return ans;

    vector<Node*>current;
    vector<Node*>next;
    current.push_back(root);
    while(!current.empty()){
        vector<int> level;
        for(int i = 0; i < current.size(); i++){
            Node* temp = current[i];
            level.push_back(temp->val);
            for(int j = 0; j < temp->children.size(); j++){
                next.push_back(temp->children[j]);
            }
        }
        ans.push_back(level);
        current.clear();
        current = next;
        next.clear();
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Network Delay Time.md":`---
link: https://leetcode.com/problems/network-delay-time/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Dijkstra]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "Dijkstra from k, answer is the max distance, -1 if any node is unreached"
time: "O((V + E) log V)"
space: "O(V + E)"
date: 2026-09-22
---

# Problem
Time for a signal from \`k\` to reach every node, or -1.

# Approach
## Dijkstra
Weights are non-negative, plain Dijkstra. Answer is the max of all distances, -1 if any is still infinity.

### Code
\`\`\`cpp
class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        vector<vector<pair<int, int>>> gp(n + 1, vector<pair<int, int>>());

        for (auto& t : times)
            gp[t[0]].push_back({t[2], t[1]});

        priority_queue<pair<int, int>, vector<pair<int, int>>,
                       greater<pair<int, int>>>
            pq;

        vector<int> dis(n + 1, INT_MAX);

        pq.push({0, k});

        while (!pq.empty()) {
            auto node = pq.top();
            pq.pop();
            if (dis[node.second] > node.first) {
                dis[node.second] = node.first;
                for (auto& e : gp[node.second]) {
                    pq.push({e.first + node.first, e.second});
                }
            }
        }

        int time = INT_MIN;
        for (int i = 1; i <= n; i++) {
            if (dis[i] == INT_MAX)
                return -1;
            time = max(time, dis[i]);
        }

        return time;
    }
};
\`\`\`

### Complexity
- Time: $O((V+E)\\log V)$
- Space: $O(V+E)$

## Bellman-Ford
Fine at n <= 100, no graph and no heap. Guard \`dist[u] != INT_MAX\` or the sum overflows.

### Code
\`\`\`cpp
int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    vector<int> dist(n + 1, INT_MAX);
    dist[k] = 0;
    for (int round = 0; round < n - 1; round++) {
        bool changed = false;
        for (auto& e : times) {
            int u = e[0], v = e[1], w = e[2];
            if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                changed = true;
            }
        }
        if (!changed) break;
    }
    int ans = 0;
    for (int i = 1; i <= n; i++) {
        if (dist[i] == INT_MAX) return -1;
        ans = max(ans, dist[i]);
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(V \\cdot E)$
- Space: $O(V)$

- Nodes are 1..n. \`graph(n + 1)\` and scan \`dist\` from 1, index 0 stays INT_MAX
- Min-heap of \`(dist, node)\`: \`priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>>\`. A custom comparator returns true when \`a\` has lower priority, so \`a.first > b.first\` for a min-heap
- Skip stale entries: \`if (time > dist[node]) continue\`
- Answer is the max of \`dist[1..n]\`, -1 if any is INT_MAX
- Push \`(0, k)\` as the seed, not k's edges
`,"../dsa-notes/Next Greater Element II.md":`---
link: https://leetcode.com/problems/next-greater-element-ii/
difficulty: Medium
topics:
  - "[[Stack]]"
  - "[[Monotonic Stack]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "loop 2n with i % n, monotonic stack of indices"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Next greater element in a circular array.

# Approach
## Monotonic Stack
Loop \`2n - 1\` times with \`i % n\` to simulate the wrap. Pop smaller values off the stack and set their answer.

### Code
\`\`\`cpp
vector<int> nextGreaterElements(vector<int> &nums)
{
    vector<int> ans(nums.size(), -1);
    stack<int> s;

    for(int i = 0; i < 2*nums.size()-1; i++){
        int j = i%nums.size();
        while(!s.empty() && nums[s.top()] < nums[j]){
            ans[s.top()] = nums[j];
            s.pop();
        }
        s.push(j);
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Next Greater Element III.md":`---
link: https://leetcode.com/problems/next-greater-element-iii/
difficulty: Medium
topics:
  - "[[Math]]"
  - "[[Two Pointers]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "next permutation of the digits, -1 if it overflows int"
time: "O(d)"
space: "O(d)"
date: 
---

# Problem
Smallest number greater than \`n\` with the same digits, or -1.

# Approach
## Next Permutation
From the right, find the first digit smaller than the one after it. Swap it with the rightmost bigger digit, then reverse the suffix. -1 if none or it overflows int.

### Code
\`\`\`cpp
int nextGreaterElement(int n)
{
    string s = to_string(n);
    int i = s.size() - 2;
    while (i >= 0 && s[i] >= s[i + 1])
        i--;
    if (i < 0)
        return -1;
    int j = s.size() - 1;
    while (j >= 0 && s[j] <= s[i])
        j--;
    swap(s[i], s[j]);
    reverse(s.begin() + i + 1, s.end());
    long long res = stoll(s);
    return res > INT_MAX ? -1 : res;
}
\`\`\`

### Complexity
- Time: $O(d)$
- Space: $O(d)$
`,"../dsa-notes/Nth Tribonacci Number.md":`---
link: https://leetcode.com/problems/n-th-tribonacci-number/
difficulty: Easy
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "T(n) = T(n-1) + T(n-2) + T(n-3), memo or keep the last three"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
\`T(n) = T(n-1) + T(n-2) + T(n-3)\`.

# Approach
## Memoization
Map cache, like [[Fibonacci Number]]. Three rolling variables make it O(1) space.

### Code
\`\`\`cpp
unordered_map<int, int> a = {{0,0},{1,1}, {2,1}};

int trib(int n)
{
    if(a.find(n) != a.end())
        return a[n];
    else{
        a[n] = trib(n-1) + trib(n-2) + trib(n-3);
        return a[n];
    }
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Number Of Islands II.md":`---
link: https://www.geeksforgeeks.org/problems/number-of-islands/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Disjoint Set Union]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "DSU, each new land is +1 island, -1 for every distinct neighbouring set merged"
time: "O(k * α(nm))"
space: "O(n * m)"
date: 
---

# Problem
Turn cells into land one by one, report the island count after each.

# Approach
## DSU
Skip if already land. Else \`count++\`, then for each land neighbour in a different set, union and \`count--\`. See [[Disjoint Set Union]].

### Code
\`\`\`cpp
vector<int> numOfIslands(int n, int m, vector<vector<int>> &operators) {
        // code here
        DSU dsu(n*m);
        int k = operators.size();
        vector<int> ans;
        vector<int> grid(n*m, 0);
        int count = 0;

        for(auto arr : operators){
            int y = arr[0];
            int x = arr[1];
            int coord = x + y*m;
            if(grid[coord]){
                ans.push_back(count);
                continue;
            }

            grid[coord] = 1;
            count++;

            int dx[] = {1, -1, 0, 0};
            int dy[] = {0, 0, 1, -1};

            for(int i = 0; i < 4; i++){
                int adjx = x + dx[i];
                int adjy = y + dy[i];
                if(adjx >= 0 && adjy >= 0 && adjx < m && adjy < n && grid[adjy*m + adjx] == 1){
                    if(dsu.findUPar(coord) != dsu.findUPar(adjy*m + adjx)){
                        count--;
                        dsu.unionBySize(coord, adjy*m + adjx);
                    }
                }
            }
            ans.push_back(count);
        }

        return ans;
    }
\`\`\`

### Complexity
- Time: $O(k \\cdot \\alpha(nm))$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Number Of Islands.md":`---
link: https://leetcode.com/problems/number-of-islands/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
  - "[[DFS]]"
  - "[[Arrays]]"
source: Standard
star: true
blind75: true
mastery:
review:
insight: "DFS flood fill from every unvisited 1, count the starts"
time: "O(m * n)"
space: "O(m * n)"
date: 
---

# Problem
Count islands of \`'1'\`s.

# Approach
## DFS
Each unvisited \`'1'\` starts a new island, flood it. BFS works too.

### Code
\`\`\`cpp
void dfs(int i, int j, vector<vector<char >> &grid, vector<vector<bool>> &visited){
    if(i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() )
        return;
    if(visited[i][j] == true)
        return;
    if(grid[i][j] == '0')
        return;
    visited[i][j] = true;
    dfs(i-1, j, grid, visited);
    dfs(i, j-1, grid, visited);
    dfs(i+1, j, grid, visited);
    dfs(i, j+1, grid, visited);        
}

int numIslands(vector<vector<char>>& grid) {
    int m = grid.size();
    int n = grid[0].size();

    vector<vector<bool>> visited(m, vector<bool>(n, 0));
    int count = 0;
    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            if(grid[i][j] == '1' && !visited[i][j]){
                count++;
                dfs(i, j, grid, visited);
            }
        }
    }
    return count;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Number Of Longest Increasing Subsequences.md":`---
link: https://leetcode.com/problems/number-of-longest-increasing-subsequence/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "track len[i] and cnt[i], equal length adds counts, longer resets"
time: "O(n²)"
space: "O(n)"
date: 2023-08-10
---

# Problem
Number of longest strictly increasing subsequences.

# Approach
## LIS with Counts
[[Longest Increasing Subsequence]] plus \`counter[i]\`. Longer found: reset count. Same length: add counts.

### Code
\`\`\`cpp
int findNumberOfLIS(vector<int> &nums)
{
    int n = nums.size();
    vector<int> t(n, 0);
    vector<int> len(n, 0);
    vector<int> counter(n, 0);
    int max_length = 0, ans = 0;

    for(int i = n-1; i>=0; i--){
        int length = 1, count = 1;
        for(int j = i+1; j < n; j++){
            if(nums[j] > nums[i]){
                if(len[j] + 1 > length){
                    length = len[j] + 1;
                    count = counter[j];
                }
                else if(len[j] + 1 == length){
                    count += counter[j];
                }
            }
        }
        len[i] = length;
        counter[i] = count;

        if(length > max_length){
            ans = count;
            max_length = length;
        }
        else if(length == max_length){
            ans += count;
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$
`,"../dsa-notes/Number Of Provinces.md":`---
link: https://leetcode.com/problems/number-of-provinces/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
  - "[[Disjoint Set Union]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "count DFS starts over the adjacency matrix, or n minus successful unions"
time: "O(n²)"
space: "O(n)"
date: 
---

# Problem
Count connected groups of cities from an adjacency matrix.

# Approach
## DFS
Like [[Number Of Islands]]. Each unvisited city starts a new province.

### Code
\`\`\`cpp
void dfs(vector<vector<int>> &isConnected, int node, vector<bool> &visited){
    visited[node] = true;
    for(int i = 0; i < isConnected.size(); i++){
        if(isConnected[node][i] && !visited[i]){
                dfs(isConnected, i, visited);
        }
    }
}

int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    vector<bool> visited(n, 0);
    int count = 0;
    for(int i = 0; i < n; i++){
        if(!visited[i]){
            count++;
            dfs(isConnected, i, visited);
        }
    }

    return count;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## DSU
Start with \`n\`, every union of two different sets is \`-1\`. See [[Disjoint Set Union]].

### Code
\`\`\`cpp
int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    DSU dsu(n);
    int count = n;

    for(int i = 0; i < n; i++){
        for(int j = 0; j <= i; j++){
            if(isConnected[i][j] == 1){
                if(dsu.findUPar(i) != dsu.findUPar(j)){
                    count--;
                    dsu.join(i, j);
                }
            } 
        }
    }

    return count;
}
\`\`\`

### Complexity
- Time: $O(n^2 \\alpha(n))$
- Space: $O(n)$
`,"../dsa-notes/Number of 1 Bits.md":`---
link: https://leetcode.com/problems/number-of-1-bits/
difficulty: Easy
topics:
  - "[[Bit Manipulation]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "add n & 1, shift right, 32 times"
time: "O(1)"
space: "O(1)"
date: 2026-08-23
---

# Problem
Count set bits in a 32-bit integer.

# Approach
## Check and Shift
Add \`n & 1\`, then \`n >>= 1\`.

Mistake I made: \`n >>= n\` instead of \`n >>= 1\`.

### Code
\`\`\`cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int t = 32;
        int count = 0;
        while (t--) {
            int c = n & 1;
            count += c;
            n = n >> 1;
        }
        return count;
    }
};
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(1)$
`,"../dsa-notes/Number of Coins.md":`---
link: https://www.geeksforgeeks.org/problems/number-of-coins1824/1
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "unbounded knapsack for min count, row 0 = infinity (INT_MAX - 1 so +1 doesn't overflow)"
time: "O(M * V)"
space: "O(M * V)"
date: 2023-07-11
---

# Problem
Min coins to make \`V\`, unlimited supply, or -1.

# Approach
## Unbounded Knapsack, Min
\`t[i][j] = min(1 + t[i][j - coin], t[i-1][j])\`. Row 0 = \`INT_MAX - 1\` so adding 1 doesn't overflow. Same problem as [[Coin Change]].

### Code
\`\`\`cpp
int minCoins(int coins[], int M, int V)
{
    vector<vector<int>> t(M + 1, vector<int>(V + 1));
    for (int i = 0; i < M + 1; i++)
    {
        for (int j = 0; j < V + 1; j++)
        {
            if (i == 0)
            {
                t[i][j] = INT32_MAX - 1;
                continue;
            }
            if (j == 0)
            {
                t[i][j] = 0;
                continue;
            }
            if (i == 1)
            {
                if (j % coins[i - 1] == 0)
                    t[i][j] = j / coins[i - 1];

                else
                    t[i][j] = INT32_MAX - 1;
            }
            else if (coins[i - 1] <= j)
                t[i][j] = min(1 + t[i][j - coins[i - 1]], t[i - 1][j]);

            else
                t[i][j] = t[i - 1][j];
        }
    }
    return (t[M][V] >= INT32_MAX - 1) ? -1 : t[M][V];
}
\`\`\`

### Complexity
- Time: $O(M \\cdot V)$
- Space: $O(M \\cdot V)$
`,"../dsa-notes/Number of Connected Components.md":`---
link: https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
source: Standard
star: true
blind75: true
mastery:
review:
insight: "loop over all n nodes, DFS from each unvisited one, count starts"
time: "O(n + e)"
space: "O(n + e)"
date: 2026-08-22
---

# Problem
Number of connected components in an undirected graph.

# Approach
## DFS
Same as [[Number Of Provinces]]. Loop over every node \`0..n-1\`, each unvisited one starts a new component.

Mistake I made: looped over \`edges\`, so isolated nodes were never counted.

### Code
\`\`\`cpp
class Solution {
public:
    void dfs(vector<bool>& vis, vector<vector<int>>& graph, int node) {
        if (vis[node]) return;

        vis[node] = true;
        for (auto n : graph[node]) {
            dfs(vis, graph, n);
        }
    }

    int countComponents(int n, vector<vector<int>>& edges) {
        vector<vector<int>> graph(n, vector<int>());
        vector<bool> vis(n, false);
        int count = 0;
        for (auto e : edges) {
            graph[e[0]].push_back(e[1]);
            graph[e[1]].push_back(e[0]);
        }

        for (int i = 0; i < n; i++) {
            if (!vis[i]) {
                count++;
                dfs(vis, graph, i);
            }
        }

        return count;
    }
};
\`\`\`

### Complexity
- Time: $O(n + e)$
- Space: $O(n + e)$
`,"../dsa-notes/Number of Distinct Islands.md":`---
link: https://www.geeksforgeeks.org/problems/number-of-distinct-islands/1
difficulty: Hard
topics:
  - "[[Graphs]]"
  - "[[Arrays]]"
  - "[[DFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "record each island's cells relative to its first cell, put the shapes in a set"
time: "O(m * n log(m * n))"
space: "O(m * n)"
date: 
---

# Problem
Count islands with distinct shapes (no rotation or reflection).

# Approach
## DFS + Set of Shapes
Like [[Number Of Islands]]. Store each cell as an offset from the island's first cell, insert the list into a set.

### Code
\`\`\`cpp
void dfs(int i, int j, vector<vector<int>>& grid, vector<vector<bool>> &visited, vector<pair<int, int>>& vec, int basei, int basej){
    visited[i][j] = 1;
    vec.push_back({i-basei, j-basej});

    for(int a = -1; a <= 1; a++){
        for(int b = -1; b <= 1; b++){
            if(abs(a) == abs(b))
                continue;
            int ni = i + a;
            int nj = j + b;

            if(ni >= 0 && nj >= 0 && ni < grid.size() && nj < grid[0].size() && !visited[ni][nj] && grid[ni][nj] == 1)
                dfs(ni, nj, grid, visited, vec, basei, basej);
        }
    }
}

int countDistinctIslands(vector<vector<int>>& grid) {
    // code here
    int m = grid.size();
    int n = grid[0].size();
    vector<vector<bool>> visited(m, vector<bool> (n, 0));
    set<vector<pair<int,int>>> st;

    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            if(!visited[i][j]){
                if(grid[i][j] == 1){
                    vector<pair<int, int>> vec;
                    dfs(i, j, grid, visited, vec, i, j);
                    st.insert(vec);
                }
            }
        }
    }

    return st.size();
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n \\log(m \\cdot n))$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Number of ways to arrive at destination.md":`---
link: https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Dijkstra]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "Dijkstra with ways[]: shorter resets ways[v] = ways[u], equal adds ways[u]"
time: "O(E log V)"
space: "O(V + E)"
date: 
---

# Problem
Number of shortest paths from \`0\` to \`n-1\`, mod 1e9+7.

# Approach
## Dijkstra + Path Counts
[[Dijkstra's Algorithm]] with \`ways[]\`. Strictly shorter: \`ways[v] = ways[u]\`. Equal: \`ways[v] += ways[u]\`. Use \`long long\`.

### Code
\`\`\`cpp
#define ll long long
#define pll pair<ll, ll>
class Solution {
public:
    int MOD = 1e9 + 7;
    int countPaths(int n, vector<vector<int>>& roads) {
        vector<vector<pll>> graph(n);
        for(auto& road: roads) {
            ll u = road[0], v = road[1], time = road[2];
            graph[u].push_back({v, time});
            graph[v].push_back({u, time});
        }
        return dijkstra(graph, n, 0);
    }
    int dijkstra(const vector<vector<pll>>& graph, int n, int src) {
        vector<ll> dist(n, LONG_MAX);
        vector<ll> ways(n);
        ways[src] = 1;
        dist[src] = 0;
        priority_queue<pll, vector<pll>, greater<>> minHeap;
        minHeap.push({0, 0}); // dist, src
        while (!minHeap.empty()) {
            auto[d, u] = minHeap.top(); minHeap.pop();
            if (d > dist[u]) continue; // Skip if \`d\` is not updated to latest version!
            for(auto [v, time] : graph[u]) {
                if (dist[v] > d + time) {
                    dist[v] = d + time;
                    ways[v] = ways[u];
                    minHeap.push({dist[v], v});
                } else if (dist[v] == d + time) {
                    ways[v] = (ways[v] + ways[u]) % MOD;
                }
            }
        }
        return ways[n-1];
    }
};
\`\`\`

### Complexity
- Time: $O(E \\log V)$
- Space: $O(V + E)$
`,"../dsa-notes/Pacific Atlantic Water Flow.md":`---
link: https://leetcode.com/problems/pacific-atlantic-water-flow/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
  - "[[Bit Manipulation]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "reverse the flow, DFS uphill from each ocean's border, answer = cells reached by both"
time: "O(r * c)"
space: "O(r * c)"
date: 2026-08-22
---

# Problem
Cells from which water can flow to both the Pacific (top, left) and Atlantic (bottom, right).

# Approach
Forward sweeps fail, plateaus make equal cells depend on each other. Reverse it: flood from each ocean's border into neighbours with height \`>=\`, intersect the two sets. Same pattern as [[Surrounded Regions]].

Trap: without a visited check per ocean, equal-height neighbours recurse forever.

## Bitmask Grid
Bit 1 = Pacific, bit 2 = Atlantic, \`3\` = both. \`|=\` to mark, \`& comp\` to check.

### Code
\`\`\`cpp
class Solution {
public:
    int dx[4] = {1, 0, -1, 0};
    int dy[4] = {0, -1, 0, 1};

    void dfs(vector<vector<int>>& heights, vector<vector<int>>& goes, int i, int j, int comp) {
        for (int d = 0; d < 4; d++) {
            int ni = dy[d] + i;
            int nj = dx[d] + j;

            if (ni >= 0 && nj >= 0 && ni < (int)heights.size() &&
                nj < (int)heights[0].size() && heights[ni][nj] >= heights[i][j] &&
                !(goes[ni][nj] & comp)) {
                goes[ni][nj] |= comp;
                dfs(heights, goes, ni, nj, comp);
            }
        }
    }

    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        int r = heights.size(), c = heights[0].size();
        vector<vector<int>> goes(r, vector<int>(c, 0));

        for (int j = 0; j < c; j++) {
            goes[0][j] |= 1;
            dfs(heights, goes, 0, j, 1);
        }
        for (int i = 0; i < r; i++) {
            goes[i][0] |= 1;
            dfs(heights, goes, i, 0, 1);
        }

        for (int j = 0; j < c; j++) {
            goes[r - 1][j] |= 2;
            dfs(heights, goes, r - 1, j, 2);
        }
        for (int i = 0; i < r; i++) {
            goes[i][c - 1] |= 2;
            dfs(heights, goes, i, c - 1, 2);
        }

        vector<vector<int>> ans;
        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++)
                if (goes[i][j] == 3)
                    ans.push_back({i, j});

        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(rc)$
- Space: $O(rc)$

## Two Bool Grids
Same with \`pacific\` and \`atlantic\` grids.

### Code
\`\`\`cpp
class Solution {
public:
    int dx[4] = {1, 0, -1, 0};
    int dy[4] = {0, -1, 0, 1};

    void dfs(vector<vector<int>>& heights, vector<vector<bool>>& reach, int i, int j) {
        for (int d = 0; d < 4; d++) {
            int ni = dy[d] + i;
            int nj = dx[d] + j;

            if (ni >= 0 && nj >= 0 && ni < (int)heights.size() &&
                nj < (int)heights[0].size() && heights[ni][nj] >= heights[i][j] &&
                !reach[ni][nj]) {
                reach[ni][nj] = true;
                dfs(heights, reach, ni, nj);
            }
        }
    }

    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        int r = heights.size(), c = heights[0].size();
        vector<vector<bool>> pacific(r, vector<bool>(c, false));
        vector<vector<bool>> atlantic(r, vector<bool>(c, false));

        for (int j = 0; j < c; j++) {
            pacific[0][j] = true;
            dfs(heights, pacific, 0, j);
        }
        for (int i = 0; i < r; i++) {
            pacific[i][0] = true;
            dfs(heights, pacific, i, 0);
        }

        for (int j = 0; j < c; j++) {
            atlantic[r - 1][j] = true;
            dfs(heights, atlantic, r - 1, j);
        }
        for (int i = 0; i < r; i++) {
            atlantic[i][c - 1] = true;
            dfs(heights, atlantic, i, c - 1);
        }

        vector<vector<int>> ans;
        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++)
                if (pacific[i][j] && atlantic[i][j])
                    ans.push_back({i, j});

        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(rc)$
- Space: $O(rc)$

- Search from each ocean's border uphill, not forward from every cell (O((m*n)^2))
- Step to a neighbour when \`h[nx][ny] >= h[i][j]\`, the reverse of the flow rule
- Corners touch both oceans and get seeded by both passes, no special case
- Answer: cells true in both grids. BFS from the border avoids deep recursion
`,"../dsa-notes/Palindrome Partitioning.md":`---
link: https://leetcode.com/problems/palindrome-partitioning/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Strings]]"
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "at each index try every palindrome prefix, recurse on the rest"
time: "O(n * 2^n)"
space: "O(n²)"
date: 2026-06-30
---

# Problem
All ways to split \`s\` so every part is a palindrome.

# Approach
## Backtracking
At each index try every palindrome prefix, recurse on the rest.

### Code
\`\`\`cpp
bool checkPalindrome(string s) {
    int n = s.size();
    for (int i = 0; i <= n/2; i++)
        if (s[i] != s[n-i-1]) return false;
    return true;
}

void solve(vector<vector<string>>& ans, vector<string>& curr, string& s, int p) {
    if (p >= s.size()) { ans.push_back(curr); return; }
    for (int i = p; i < s.size(); i++) {
        int len = i - p + 1;
        if (checkPalindrome(s.substr(p, len))) {
            curr.push_back(s.substr(p, len));
            solve(ans, curr, s, i+1);
            curr.pop_back();
        }
    }
}

vector<vector<string>> partition(string s) {
    vector<vector<string>> ans;
    vector<string> curr;
    solve(ans, curr, s, 0);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot 2^n)$
- Space: $O(n)$

## Backtracking + Precomputed Palindromes
\`isPalin[i][j] = s[i] == s[j] && (j - i <= 2 || isPalin[i+1][j-1])\`, O(1) checks.

### Code
\`\`\`cpp
vector<vector<bool>> isPalin;

void precompute(string& s) {
    int n = s.size();
    isPalin.assign(n, vector<bool>(n, false));
    for (int i = n-1; i >= 0; i--)
        for (int j = i; j < n; j++)
            if (s[i] == s[j] && (j-i <= 2 || isPalin[i+1][j-1]))
                isPalin[i][j] = true;
}

void solve(vector<vector<string>>& ans, vector<string>& curr, string& s, int p) {
    if (p >= s.size()) { ans.push_back(curr); return; }
    for (int i = p; i < s.size(); i++) {
        if (isPalin[p][i]) {
            curr.push_back(s.substr(p, i-p+1));
            solve(ans, curr, s, i+1);
            curr.pop_back();
        }
    }
}

vector<vector<string>> partition(string s) {
    precompute(s);
    vector<vector<string>> ans;
    vector<string> curr;
    solve(ans, curr, s, 0);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n^2 + 2^n)$
- Space: $O(n^2)$
`,"../dsa-notes/Palindromic Partitioning.md":`---
link: https://www.geeksforgeeks.org/problems/palindromic-patitioning4845/1
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "MCM on the string: 0 if already a palindrome, else min over k of 1 + left + right"
time: "O(n³)"
space: "O(n²)"
date: 2023-08-10
---

# Problem
Min cuts so every part is a palindrome. Same as LC Palindrome Partitioning II.

# Approach
## MCM Style
\`pal(i, j)\` = 0 if \`s[i..j]\` is a palindrome. Else try every cut \`k\`: \`1 + pal(i, k) + pal(k+1, j)\`. Memo on \`(i, j)\`. Precomputing palindromes like in [[Palindrome Partitioning]] drops the check to O(1).

### Code
\`\`\`cpp
bool isPalindrome(string str)
{
    int n = str.size();
    for (int i = 0; i < n / 2; i++)
    {
        if (str[i] != str[n - i - 1])
            return false;
    }

    return true;
}

int pal(int i, int j, string str, vector<vector<int>> &t)
{
    if (i >= j)
        return t[i][j] = 0;
    if (isPalindrome(str.substr(i, j - i + 1)))
        return t[i][j] = 0;
    if (t[i][j] != -1)
        return t[i][j];
    else
    {
        int mini = INT32_MAX;
        for (int k = i; k < j; k++)
        {
            int left = (t[i][k] != -1) ? t[i][k] : pal(i, k, str, t);
            int right = (t[k + 1][j] != -1) ? t[k + 1][j] : pal(k + 1, j, str, t);
            int temp = 1 + right + left;
            mini = min(mini, temp);
        }
        return t[i][j] = mini;
    }
}

int palindromicPartition(string str)
{
    int n = str.size();
    vector<vector<int>> t(n + 1, vector<int>(n + 1, -1));
    return pal(0, n - 1, str, t);
}
\`\`\`

### Complexity
- Time: $O(n^3)$
- Space: $O(n^2)$
`,"../dsa-notes/Palindromic Substrings.md":`---
link: https://leetcode.com/problems/palindromic-substrings/
difficulty: Medium
topics:
  - "[[Two Pointers]]"
  - "[[Strings]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "expand around all 2n-1 centers, count every successful expansion"
time: "O(n²)"
space: "O(1)"
date: 2026-08-22
---

# Problem
Count palindromic substrings.

# Approach
## Expand Around Center
Same as [[Longest Palindromic Substring]], but every expansion step is one palindrome, so count it.

### Code
\`\`\`cpp
class Solution {
public:
    int countSubstrings(string s) {
        int n = s.size();
        int count = 0;
        for (int i = 0; i < n; i++) {
            // even
            int l = i;
            int r = i + 1;
            while (l >= 0 && r < n && s[l] == s[r]) {
                l--;
                r++;
                count++;
            }

            // odd
            l = i;
            r = i;
            while (l >= 0 && r < n && s[l] == s[r]) {
                l--;
                r++;
                count++;
            }
        }

        return count;
    }
};
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$
`,"../dsa-notes/Partition Equal Subset Sum.md":`---
link: https://leetcode.com/problems/partition-equal-subset-sum/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "odd sum = false, else subset sum to total/2 with 1D dp, j descending"
time: "O(n * target)"
space: "O(target)"
date: 2026-08-29
---

# Problem
Split into two subsets with equal sum?

# Approach
Odd total is impossible. Else find a subset summing to \`total / 2\`, 0/1 knapsack.

## Recursion
Assign each element to one of two subsets. TLE.

### Code
\`\`\`cpp
bool solve(vector<int>& nums, int ind, int s1, int s2) {
    if (ind == nums.size()) return s1 == s2;
    return solve(nums, ind + 1, s1 + nums[ind], s2) ||
           solve(nums, ind + 1, s1, s2 + nums[ind]);
}
\`\`\`

### Complexity
- Time: $O(2^n)$
- Space: $O(n)$

## 1D Subset Sum
\`dp[j] |= dp[j - nums[i]]\` with \`j\` descending, so each element is used once. Ascending turns it into unbounded knapsack.

### Code
\`\`\`cpp
class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int sum = 0;
        for (auto i : nums) sum += i;
        if (sum % 2 != 0) return false;

        int target = sum / 2;
        vector<bool> dp(target + 1);
        dp[0] = true;

        for (int i = 0; i < nums.size(); i++) {
            for (int j = target; j >= 0; j--) {
                if (j - nums[i] >= 0)
                    dp[j] = dp[j] || dp[j - nums[i]];
            }
        }

        return dp[target];
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot target)$
- Space: $O(target)$
`,"../dsa-notes/Path With Minimum Effort.md":`---
link: https://leetcode.com/problems/path-with-minimum-effort/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Dijkstra]]"
  - "[[Binary Search]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "Dijkstra where path cost = max edge diff so far"
time: "O(mn log(mn))"
space: "O(mn)"
date: 
---

# Problem
Min over paths of the max height difference between consecutive cells.

# Approach
## Dijkstra
[[Dijkstra's Algorithm]] with distance = \`max(dist to parent, |height diff|)\`.

### Code
\`\`\`cpp
int minimumEffortPath(vector<vector<int>> &heights)
{
    int n = heights.size();
    int m = heights[0].size();
    vector<vector<int>> distance(n, vector<int>(m, 1e9));
    priority_queue<pair<int, pair<int, int>>, vector<pair<int, pair<int, int>>>, greater<pair<int, pair<int, int>>>> pq;
    pq.push({0, {0, 0}});
    distance[0][0] = 0;
    int dx[] = {1, -1, 0, 0};
    int dy[] = {0, 0, 1, -1};

    while (!pq.empty())
    {
        int dis = pq.top().first;
        int r = pq.top().second.first;
        int c = pq.top().second.second;
        pq.pop();
        if (r == n - 1 && c == m - 1)
            return dis;

        for (int i = 0; i < 4; i++)
        {
            int newr = r + dx[i];
            int newc = c + dy[i];

            if (newr >= 0 && newr < n && newc >= 0 && newc < m && max(dis, abs(heights[newr][newc] - heights[r][c])) < distance[newr][newc])
            {
                distance[newr][newc] = max(dis, abs(heights[newr][newc] - heights[r][c]));
                pq.push({distance[newr][newc], {newr, newc}});
            }
        }
    }
    return distance[n - 1][m - 1];
}
\`\`\`

### Complexity
- Time: $O(mn \\log(mn))$
- Space: $O(mn)$
`,"../dsa-notes/Perfect Squares.md":`---
link: https://leetcode.com/problems/perfect-squares/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "coin change where the coins are 1, 4, 9 ... up to n"
time: "O(n√n)"
space: "O(n)"
date: 2023-08-17
---

# Problem
Least number of perfect squares summing to \`n\`.

# Approach
## Coin Change
Same as [[Coin Change]] with coins \`1², 2², ..., √n²\`.

### Code
\`\`\`cpp
int numSquares(int n)
{
    int root = sqrt(n);
    vector<vector<int>> t(root + 1, vector<int>(n + 1, INT32_MAX - 1));

    for (int i = 0; i < root + 1; i++)
    {
        for (int j = 0; j < n + 1; j++)
        {
            if (j == 0 || i == 0)
                t[i][j] = 0;
            else if (i == 1)
                t[i][j] = ((j % (i * i) == 0) ? (j / (i * i)) : INT32_MAX - 1);
            else
            {
                if ((i * i) <= j)
                    t[i][j] = min(t[i][j - (i * i)] + 1, t[i - 1][j]);
                else
                    t[i][j] = t[i - 1][j];
            }
        }
    }

    return t[root][n];
}
\`\`\`

### Complexity
- Time: $O(n\\sqrt{n})$
- Space: $O(n)$
`,"../dsa-notes/Perfect Sum Problem.md":`---
link: https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "count subsets: t[i][j] = t[i-1][j] + t[i-1][j - arr[i-1]], t[i][0] = 1"
time: "O(n * sum)"
space: "O(n * sum)"
date: 2023-05-25
---

# Problem
Number of subsets summing to \`sum\`, mod 1e9+7.

# Approach
## Subset Sum Count
Skip + take. \`t[i][0] = 1\`. Same count as [[Target Sum]] uses.

### Code
\`\`\`cpp
class Solution
{
public:
    int perfectSum(int arr[], int n, int sum)
    {
        int MOD = 1e9 + 7;
        vector<vector<int>> t(n + 1, vector<int>(sum + 1, 0));

        for (int i = 0; i < n + 1; i++)
        {
            t[i][0] = 1;
        }

        for (int i = 1; i < n + 1; i++)
        {
            for (int j = 1; j < sum + 1; j++)
            {
                if (arr[i - 1] <= j)
                    t[i][j] = (t[i - 1][j - arr[i - 1]] + t[i - 1][j]) % MOD;
                else
                    t[i][j] = t[i - 1][j];
            }
        }

        return t[n][sum];
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot sum)$
- Space: $O(n \\cdot sum)$
`,"../dsa-notes/Permutation In String.md":`---
link: https://leetcode.com/problems/permutation-in-string/
difficulty: Medium
topics:
  - "[[Sliding Window]]"
  - "[[Hash Maps]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "fixed window of |s1| over s2, compare 26-count arrays"
time: "O(n)"
space: "O(1)"
date: 2026-05-20
---

# Problem
Does \`s2\` contain a permutation of \`s1\`?

# Approach
## Fixed Window + Count Arrays
Window of size \`|s1|\` over \`s2\`. Compare the two count arrays with \`memcmp\`.

### Code
\`\`\`cpp
bool checkInclusion(string s1, string s2) {
    int m = s1.size(), n = s2.size();
    if (n < m)
        return false;
    int freq[26] = {}, window[26] = {};

    for (char s : s1) {
        freq[s - 'a']++;
    }

    for (int i = 0; i < m; i++) {
        window[s2[i] - 'a']++;
    }

    for (int i = m; i < n; i++) {
        if (memcmp(freq, window, sizeof(freq)) == 0)
            return true;

        window[s2[i - m] - 'a']--;
        window[s2[i] - 'a']++;
    }

    return memcmp(freq, window, sizeof(freq)) == 0;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Permutations.md":`---
link: https://leetcode.com/problems/permutations/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "used[] array, or swap nums[idx] with each nums[j >= idx], swap back"
time: "O(n! * n)"
space: "O(n)"
date: 2026-06-30
---

# Problem
All permutations of distinct numbers.

# Approach
## Membership Check
Try every number not in \`curr\`.

### Code
\`\`\`cpp
void solve(vector<vector<int>>& ans, vector<int>& curr, vector<int>& nums) {
    if (curr.size() == nums.size()) { ans.push_back(curr); return; }
    for (auto n : nums) {
        bool take = true;
        for (auto c : curr) if (c == n) { take = false; break; }
        if (take) {
            curr.push_back(n);
            solve(ans, curr, nums);
            curr.pop_back();
        }
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> ans;
    vector<int> curr;
    solve(ans, curr, nums);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n! \\cdot n)$
- Space: $O(n)$

## Used Array
O(1) check instead of scanning \`curr\`.

### Code
\`\`\`cpp
void solve(vector<vector<int>>& ans, vector<int>& curr,
           vector<int>& nums, vector<bool>& used) {
    if (curr.size() == nums.size()) { ans.push_back(curr); return; }
    for (int i = 0; i < nums.size(); i++) {
        if (used[i]) continue;
        used[i] = true;
        curr.push_back(nums[i]);
        solve(ans, curr, nums, used);
        curr.pop_back();
        used[i] = false;
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> ans;
    vector<int> curr;
    vector<bool> used(nums.size(), false);
    solve(ans, curr, nums, used);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n! \\cdot n)$
- Space: $O(n)$

## Swap in Place
No \`used\`, no \`curr\`. Prefix \`nums[0..idx-1]\` is the permutation so far, the suffix is what's left. At \`idx\`, swap each \`nums[j]\` (\`j >= idx\`) into place, recurse, swap back. At \`idx == n\` the array is one answer.

- \`j\` starts at \`idx\`, not \`idx + 1\`. \`j = idx\` is the "keep it" choice
- Swap back after the recursive call, or the next \`j\` sees a scrambled array
- Order is not lexicographic (\`123, 132, 213, 231, 321, 312\`), fine on LC
- Duplicates repeat permutations, that is Permutations II (sort + skip, or a seen set per level)

### Code
\`\`\`cpp
void solve(vector<int>& nums, int idx, vector<vector<int>>& ans) {
    if (idx == nums.size()) { ans.push_back(nums); return; }
    for (int j = idx; j < nums.size(); j++) {
        swap(nums[idx], nums[j]);
        solve(nums, idx + 1, ans);
        swap(nums[idx], nums[j]);
    }
}
\`\`\`

### Complexity
- Time: $O(n \\cdot n!)$, $n!$ leaves each copy $n$ elements
- Space: $O(n)$ recursion, plus output

## next_permutation
Sort, then loop. Iterative, lexicographic order. Same total cost.

### Code
\`\`\`cpp
vector<vector<int>> permute(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;
    do { ans.push_back(nums); } while (next_permutation(nums.begin(), nums.end()));
    return ans;
}
\`\`\`

## Heap's Algorithm
One swap between consecutive permutations. The copy into \`ans\` still costs $O(n)$, so the total does not change. Useful when you process each permutation in place.

### Code
\`\`\`cpp
void heaps(vector<int>& a, int k, vector<vector<int>>& ans) {
    if (k == 1) { ans.push_back(a); return; }
    heaps(a, k - 1, ans);
    for (int i = 0; i < k - 1; i++) {
        if (k % 2 == 0) swap(a[i], a[k - 1]);
        else swap(a[0], a[k - 1]);
        heaps(a, k - 1, ans);
    }
}
// heaps(nums, nums.size(), ans)
\`\`\`
`,"../dsa-notes/Plus One.md":`---
link: https://leetcode.com/problems/plus-one/
difficulty: Easy
topics:
  - "[[Arrays]]"
  - "[[Math]]"
source: Leetcode
star: false
blind75: false
mastery: green
review: 2026-11-14
insight: "scan from the right, a digit below 9 stops the carry, all 9s means 1 followed by zeros"
time: "O(n)"
space: "O(1)"
date: 2026-11-07
---
`,"../dsa-notes/Populating Next Right Pointers in Each Node.md":`---
link: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[BFS]]"
  - "[[Linked Lists]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "walk each level with the next pointers already set, wire the level below"
time: "O(n)"
space: "O(1)"
date: 2023-02-13
---

# Problem
Set each node's \`next\` to its right neighbour in a perfect binary tree.

# Approach
## Level Walk
Walk level \`lnode\` using \`next\`. \`left->next = right\`, and \`right->next = next->left\` across parents. Then drop to \`lnode->left\`.

### Code
\`\`\`cpp
Node* connect(Node *root)
{
    if(root == NULL) return root;

        Node* lnode = root;
        while(lnode->left != NULL){
            Node* head = lnode;
            while(head != NULL){
                head->left->next = head->right;
                if(head->next != NULL){
                    head->right->next = head->next->left;
                }
                head = head->next;
            }
            lnode = lnode->left;
        }
        return root;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Print LCS.md":`---
link: https://www.geeksforgeeks.org/printing-longest-common-subsequence/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "fill the LCS table, walk back from (n, m): match goes diagonal and takes the char, else go to the bigger neighbour"
time: "O(n * m)"
space: "O(n * m)"
date: 2023-07-24
---

# Problem
Print the longest common subsequence itself.

# Approach
## Backtrack the Table
Build the [[Longest Common Subsequence]] table. From \`(n, m)\`: chars match, take it and go diagonal. Else move toward the bigger of \`t[i-1][j]\` and \`t[i][j-1]\`.

### Code
\`\`\`cpp
string printLCS(string a, string b, int n, int m)
{
    vector<vector<int>> t(n + 1, vector<int>(m + 1));

    for (int i = 0; i < n + 1; i++)
    {
        for (int j = 0; j < m + 1; j++)
        {
            if (i == 0 || j == 0)
                t[i][j] = 0;
            else
            {
                if (a[i - 1] == b[j - 1])
                    t[i][j] = t[i - 1][j - 1] + 1;
                else
                    t[i][j] = max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    string ans = "";
    int i = n, j = m;
    while (i != 0 && j != 0)
    {
        if (a[i - 1] == b[j - 1])
        {
            i--;
            j--;
            ans = a[i] + ans;
        }
        else
        {
            if (t[i - 1][j] > t[i][j - 1])
                i--;
            else
                j--;
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Product of Array Except Self.md":`---
link: https://leetcode.com/problems/product-of-array-except-self/
difficulty: Medium
topics:
  - "[[Arrays]]"
  - "[[Prefix Sum]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-10
insight: "prefix products left to right into ans, then multiply by a running suffix right to left"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
\`ans[i]\` = product of all other elements, no division.

# Approach
## Prefix and Suffix Arrays

### Code
\`\`\`cpp
vector<int> productExceptSelf(vector<int>& nums) {
    vector<int> prefix(nums.size(), 1);
    vector<int> suffix(nums.size(), 1);

    for(int i = 1; i < nums.size(); i++){
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    for(int i = nums.size() - 2; i >= 0; i--){
        suffix[i] = suffix[i+1] * nums[i+1];
    }

    vector<int> ans(nums.size());
    for(int i = 0; i < nums.size(); i++)
        ans[i] = suffix[i] * prefix[i];

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## In Place
Prefix pass into \`ans\`, then a running suffix product from the right.

Mistakes I made (re-solve 2026-11-07):
- Overwrote \`nums\` while building the prefix, then needed the original values in the second pass. Write into a separate \`ans\`.
- The running product \`mul\` was never updated, so it stayed \`nums[0]\`.
- The prefix must exclude \`i\`. Store \`prefix\` into \`ans[i]\` first, then multiply it by \`nums[i]\`.
- Second pass did \`ans[i] *= nums[i+1]\`, which is only the next element. The suffix is a running product, \`suffix *= nums[i]\` after using it.

### Code
\`\`\`cpp
vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> ans(n, 1);

    int prefix = 1;
    for (int i = 0; i < n; ++i) {
        ans[i] = prefix;
        prefix *= nums[i];
    }

    int suffix = 1;
    for (int i = n - 1; i >= 0; --i) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$ extra
`,"../dsa-notes/Ransom Note.md":`---
link: https://leetcode.com/problems/ransom-note/
difficulty: Easy
topics:
  - "[[Hash Maps]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "count magazine chars, decrement per note char, fail on 0"
time: "O(n + m)"
space: "O(1)"
date: 2022-12-11
---

# Problem
Can \`ransomNote\` be built from \`magazine\`'s letters?

# Approach
## Count
Count magazine chars, spend one per note char. Missing or 0 = false.

### Code
\`\`\`cpp
bool canConstruct(string ransomNote, string magazine)
{
    map<char, int> a;
    for (int i = 0; i < magazine.length(); i++)
    {
        if (a.find(magazine[i]) == a.end())
            a[magazine[i]] = 1;
        else
            a[magazine[i]]++;
    }
    for (int i = 0; i < ransomNote.length(); i++)
    {
        if (a.find(ransomNote[i]) == a.end())
            return false;
        else
        {
            if (a[ransomNote[i]] == 0)
                return false;
            else
                a[ransomNote[i]]--;
        }
    }
    return true;
}
\`\`\`

### Complexity
- Time: $O(n + m)$
- Space: $O(1)$, charset size
`,"../dsa-notes/Redundant Connection.md":`---
link: https://leetcode.com/problems/redundant-connection/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Disjoint Set Union]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "union edges in order, the first one whose ends are already connected is the answer"
time: "O(n * α(n))"
space: "O(n)"
date: 2026-08-29
---

# Problem
A tree plus one extra edge. Return the edge to remove.

# Approach
## DSU
First edge whose ends already share a root closes the cycle. Nodes are 1-indexed, size \`n + 1\`.

### Code
\`\`\`cpp
class Solution {
public:
    struct DSU {
        vector<int> parent, rank;
        DSU(int n) : parent(n), rank(n) { iota(parent.begin(), parent.end(), 0); }

        int find(int x) {
            if (parent[x] != x) return parent[x] = find(parent[x]);
            return x;
        }

        bool unite(int x, int y) {
            x = find(x);
            y = find(y);
            if (x == y) return false;
            if (rank[x] < rank[y]) swap(x, y);
            parent[y] = x;
            if (rank[y] == rank[x]) rank[x]++;
            return true;
        }
    };

    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        int n = edges.size();
        DSU dsu(n + 1);

        for (auto& edge : edges)
            if (!dsu.unite(edge[0], edge[1])) return edge;

        return vector<int>();
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot \\alpha(n))$
- Space: $O(n)$
`,"../dsa-notes/Regular Expression Matching.md":`---
link: https://leetcode.com/problems/regular-expression-matching/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
  - "[[Recursion]]"
source: Leetcode
star: false
blind75: false
mastery: red
review: 2026-11-06
insight: "if p[j+1] == '*': skip the pair (j+2) or eat one char if it matches (i+1). memo on (i, j)"
time: "O(mn)"
space: "O(mn)"
date: 2026-09-14
---

# Problem
Regex match with \`.\` and \`*\`, full string.

# Approach
## Recursion
Look ahead for \`*\`. Match: eat one and stay (\`i+1, j\`) or skip the pair (\`i, j+2\`). Mismatch: skip the pair only.

Trap: skipping keeps \`i\` fixed even on a match, the char may belong to what follows.

Branch order changes TLE without memo, that's luck, memoize.

Mistakes I made (re-solve 2026-11-05):
- Treated \`*\` as its own token and walked \`j-1\` / \`j+1\`. \`*\` belongs to \`p[j-1]\`, look ahead at \`p[j+1]\` instead.
- Took the plain match before checking for \`x*\`, so the skip-the-pair branch never ran (\`s="a"\`, \`p="a*a"\`).
- Compared \`i >= n\` in the base case, should be \`i >= m\`.
- Returned false when \`i >= m\` and \`j < n\`. The rest of \`p\` can still be \`x*\` pairs.
- \`i < m && s[i]==p[j] || p[j]=='.'\` lets \`.\` match past the end of \`s\`. \`&&\` binds tighter, so it needs \`i < m && (s[i]==p[j] || p[j]=='.')\`. Gave infinite recursion on \`s="a"\`, \`p=".*"\`.
- Passed strings by value and no memo. Use \`string &\` and \`memo[i][j]\`.

### Code
\`\`\`cpp
bool solve(string s, string p, int ind1, int ind2) {
    if (ind1 == s.size() && ind2 == p.size())
        return true;
    if (ind2 == p.size())
        return false;

    if (ind2 + 1 < p.size() && p[ind2 + 1] == '*') {
        if (ind1 < s.size() && (s[ind1] == p[ind2] || p[ind2] == '.'))
            return solve(s, p, ind1 + 1, ind2) ||
                   solve(s, p, ind1, ind2 + 2);
        else
            return solve(s, p, ind1, ind2 + 2);
    } else if (ind1 < s.size() && (s[ind1] == p[ind2] || p[ind2] == '.'))
        return solve(s, p, ind1 + 1, ind2 + 1);
    else
        return false;
}
\`\`\`

### Complexity
- Time: $O(2^{m+n})$
- Space: $O(m+n)$

## Memoization

### Code
\`\`\`cpp
bool solve(string &s, string &p, int ind1, int ind2, vector<vector<int>> &memo) {
    if (ind1 == s.size() && ind2 == p.size())
        return true;
    if (ind2 == p.size())
        return false;
    if (memo[ind1][ind2] != -1)
        return memo[ind1][ind2];

    bool res;
    if (ind2 + 1 < p.size() && p[ind2 + 1] == '*') {
        if (ind1 < s.size() && (s[ind1] == p[ind2] || p[ind2] == '.'))
            res = solve(s, p, ind1 + 1, ind2, memo) ||
                  solve(s, p, ind1, ind2 + 2, memo);
        else
            res = solve(s, p, ind1, ind2 + 2, memo);
    } else if (ind1 < s.size() && (s[ind1] == p[ind2] || p[ind2] == '.'))
        res = solve(s, p, ind1 + 1, ind2 + 1, memo);
    else
        res = false;

    return memo[ind1][ind2] = res;
}
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(mn)$

## Tabulation
\`dp[i][j]\` = \`s[i:]\` matches \`p[j:]\`. Base row \`dp[m][j]\` is true only if \`p[j:]\` is all \`x*\` pairs.

### Code
\`\`\`cpp
bool isMatch(string s, string p) {
    int m = s.size(), n = p.size();
    vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));

    dp[m][n] = true;
    for (int j = n - 1; j >= 0; j--)
        dp[m][j] = (j + 1 < n && p[j + 1] == '*') ? dp[m][j + 2] : false;

    for (int i = m - 1; i >= 0; i--) {
        for (int j = n - 1; j >= 0; j--) {
            if (j + 1 < n && p[j + 1] == '*') {
                if (s[i] == p[j] || p[j] == '.')
                    dp[i][j] = dp[i + 1][j] || dp[i][j + 2];
                else
                    dp[i][j] = dp[i][j + 2];
            } else if (s[i] == p[j] || p[j] == '.')
                dp[i][j] = dp[i + 1][j + 1];
            else
                dp[i][j] = false;
        }
    }

    return dp[0][0];
}
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(mn)$

## Two rows
Row \`i\` reads only row \`i+1\` and itself, so keep \`dp\` (row \`i+1\`) and \`next\` (row \`i\`). Fill \`j\` downward so \`next[j+2]\` is ready.

- \`next\` is fresh and zeroed each row, so stale values can't leak. Reusing a row means \`next[n] = false\` and an explicit \`false\` on a non-match.
- Answer is \`dp[0]\` after the last \`dp = next\`.

### Code
\`\`\`cpp
bool isMatch(string s, string p) {
    int m = s.size(), n = p.size();
    vector<bool> dp(n + 1, 0);

    dp[n] = true;
    for (int j = n - 1; j >= 0; j--) {
        if (j < n - 1 && p[j + 1] == '*') {
            dp[j] = dp[j + 2];
        }
    }

    for (int i = m - 1; i >= 0; i--) {
        vector<bool> next(n + 1, 0);
        for (int j = n - 1; j >= 0; j--) {
            if (j < n - 1 && p[j + 1] == '*') {
                if (s[i] == p[j] || p[j] == '.') {
                    next[j] = dp[j];
                }
                next[j] = next[j] || next[j + 2];
            } else if (s[i] == p[j] || p[j] == '.') {
                next[j] = dp[j + 1];
            }
        }

        dp = next;
    }

    return dp[0];
}
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(n)$
`,"../dsa-notes/Remove Duplicates from Sorted Array.md":`---
link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
difficulty: Easy
topics:
  - "[[Arrays]]"
  - "[[Two Pointers]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "write pointer, copy nums[i] when it differs from the last written"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Remove duplicates in place from a sorted array, return the count.

# Approach
## Overwrite
Write pointer. Copy when the value differs from the last kept. What's after \`k\` doesn't matter. If swaps were required, use the snowball from [[Move Zeroes]].

### Code
\`\`\`cpp
int removeDuplicates(vector<int>& nums) {
    if(nums.size() <= 1)
        return nums.size();
    int ptr = 1;
    int k = 1;
    for(int i = 0; i < nums.size()-1; i++){
        if(nums[i] != nums[i+1]){
            k++;
            nums[ptr++] = nums[i+1];
        }
    }

    return k;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Remove Linked List Elements.md":`---
link: https://leetcode.com/problems/remove-linked-list-elements/
difficulty: Easy
topics:
  - "[[Linked Lists]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "dummy head, skip every node equal to val"
time: "O(n)"
space: "O(1)"
date: 2022-12-11
---

# Problem
Remove all nodes with value \`val\`.

# Approach
## Skip Matches
Drop matching heads first. Then \`prev\` trails \`curr\`, a match rewires \`prev->next\` past it. A dummy head would remove the head special case.

### Code
\`\`\`cpp
ListNode *removeElements(ListNode *head, int val)
{
    while (head != NULL && head->val == val)
    {
        head = head->next;
    }
    ListNode *curr = new ListNode();
    curr->next = head;
    ListNode *prev = new ListNode();
    prev->next = head;
    while (curr != NULL && curr->next != NULL)
    {
        curr = curr->next;
        if (curr->val == val)
        {
            prev->next = curr->next;
            // curr = curr->next;
        }
        else
        {
            prev = prev->next;
        }
    }
    return head;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Remove Nth Node From End of List.md":`---
link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
difficulty: Medium
topics:
  - "[[Linked Lists]]"
  - "[[Stack]]"
  - "[[Two Pointers]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "dummy head, move first n+1 ahead, move both until first is null, second is before the target"
time: "O(n)"
space: "O(1)"
date: 2026-11-08
---

# Problem
Remove the \`n\`th node from the end.

# Approach
## Stack
Push all nodes, pop \`n\` to reach the node before the target.

### Code
\`\`\`cpp
ListNode* removeNthFromEnd(ListNode* head, int n) {
    stack<ListNode*> st;
    ListNode* ptr = head;
    st.push(nullptr);
    while(ptr){
        st.push(ptr);
        ptr = ptr->next;
    }

    while(n--){
        st.pop();
    }

    ptr = st.top(); st.pop();
    if(!ptr){
        return head->next;
    }
    ptr->next = ptr->next->next;

    return head;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Two Pointers
Dummy head. \`first\` goes \`n + 1\` ahead, then move both. \`second\` stops right before the node to delete.

### Code
\`\`\`cpp
ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode* dummy = new ListNode(0, head);
    ListNode* first = dummy;
    ListNode* second = dummy;

    for(int i  = 0; i <= n; i++)
        first = first->next;

    while(first){
        first = first->next;
        second = second->next;
    }

    second->next = second->next->next;
    return dummy->next;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$

- Both pointers on the dummy, move \`fast\` n times, then move both while \`fast->next\`
- Keep a separate pointer to the dummy, \`slow\` walks and the dummy is lost otherwise
- Use \`ListNode dummy(0, head)\` on the stack, \`new\` leaks
- Tests: \`[1,2,3,4,5]\` n=2, \`[1]\` n=1 gives empty, \`[1,2]\` n=2 gives \`[2]\`
`,"../dsa-notes/Reorder List.md":`---
link: https://leetcode.com/problems/reorder-list/
difficulty: Medium
topics:
  - "[[Linked Lists]]"
  - "[[Stack]]"
  - "[[Two Pointers]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "find the middle, reverse the second half, merge alternately"
time: "O(n)"
space: "O(1)"
date: 2023-04-10
---

# Problem
Reorder \`L0 L1 ... Ln\` into \`L0 Ln L1 Ln-1 ...\`.

# Approach
## Stack
Stack gives the nodes from the back. Alternate with the front.

### Code
\`\`\`cpp
void reorderList(ListNode* head) {
    if(!head || !head->next)
        return;
    stack<ListNode*> st;
    ListNode* slow = head;
    int len = 0;
    while(slow){
        st.push(slow);
        slow = slow->next;
        len++;
    }

    slow = head;
    len /= 2;
    while(len){
        len--;

        ListNode* tmp = slow->next;
        slow->next = st.top();
        st.top()->next = tmp;
        slow = tmp;
        st.pop();

    }

    slow->next = nullptr;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Middle + Reverse + Merge
Slow and fast pointers find the middle. [[Reverse Linked List]] on the second half, then merge alternately.

### Code
\`\`\`cpp
ListNode* reverse(ListNode* head) {
    if(!head || !head->next)
        return head;

    ListNode* newHead = reverse(head->next);
    head->next->next = head;
    head->next = nullptr;
    return newHead;
}

void reorderList(ListNode* head) {
    ListNode* fast = head;
    ListNode* slow = head;

    while(fast && fast->next){
        fast = fast->next->next;
        slow  = slow->next;
    }

    ListNode* second = reverse(slow->next);
    slow->next = nullptr;
    ListNode* first = head;

    while (first && second) {
        ListNode* tmp1 = first->next;
        ListNode* tmp2 = second->next;

        first->next = second;
        second->next = tmp1;

        first = tmp1;
        second = tmp2;
    }
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Reorder Routes to Make All Paths Lead to the City Zero.md":`---
link: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "add each edge both ways, original direction costs 1. DFS from 0 and sum the costs"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Tree with directed roads. Min roads to flip so every city reaches city 0.

# Approach
## DFS with Edge Costs
Store \`a -> b\` with cost 1 and \`b -> a\` with cost 0. DFS from 0, every cost-1 edge used points away from 0 and needs a flip.

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Reshape the Matrix.md":`---
link: https://leetcode.com/problems/reshape-the-matrix/
difficulty: Easy
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "flat index i * n + j maps to (ind / c, ind % c)"
time: "O(m * n)"
space: "O(m * n)"
date: 2022-12-10
---

# Problem
Reshape an \`m x n\` matrix to \`r x c\`, return the original if impossible.

# Approach
## Flat Index
\`ind = i * n + j\`, target cell \`(ind / c, ind % c)\`.

### Code
\`\`\`cpp
vector<vector<int>> matrixReshape(vector<vector<int>> &mat, int r, int c)
{
    int m = mat.size();
    int n = mat[0].size();
    if (r * c != m * n)
        return mat;
    vector<vector<int>> ans(r, vector<int>(c));
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            int ind = i * n + j;
            ans[ind / c][ind % c] = mat[i][j];
        }
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$
`,"../dsa-notes/Reverse Bits.md":`---
link: https://leetcode.com/problems/reverse-bits/
difficulty: Easy
topics:
  - "[[Bit Manipulation]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "32 times: ans = (ans << 1) | (n & 1), n >>= 1"
time: "O(1)"
space: "O(1)"
date: 2026-08-23
---

# Problem
Reverse the bits of a 32-bit unsigned int.

# Approach
## Bit by Bit
Bit \`t\` of the answer = bit \`31 - t\` of \`n\`. Use \`uint32_t\`, \`1 << 31\` on a signed int is UB before C++20.

### Code
\`\`\`cpp
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        int t = 32;
        uint32_t ans = 0;
        while (t--) {
            uint32_t b = n & 1;
            if (b == 1) {
                uint32_t mask = 1u << t;
                ans = ans | mask;
            }
            n = n >> 1;
        }
        return ans;
    }
};
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(1)$

## Divide and Conquer
Swap 16-bit halves, then bytes, nibbles, pairs, bits. 5 masked steps.

### Code
\`\`\`cpp
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        n = ((n & 0xFFFF0000) >> 16) | ((n & 0x0000FFFF) << 16);
        n = ((n & 0xFF00FF00) >> 8)  | ((n & 0x00FF00FF) << 8);
        n = ((n & 0xF0F0F0F0) >> 4)  | ((n & 0x0F0F0F0F) << 4);
        n = ((n & 0xCCCCCCCC) >> 2)  | ((n & 0x33333333) << 2);
        n = ((n & 0xAAAAAAAA) >> 1)  | ((n & 0x55555555) << 1);
        return n;
    }
};
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(1)$

## Swap Halves
\`\`\`cpp
n = (n >> 16) | (n << 16);
n = ((n & 0xff00ff00) >> 8) | ((n & 0x00ff00ff) << 8);
n = ((n & 0xf0f0f0f0) >> 4) | ((n & 0x0f0f0f0f) << 4);
n = ((n & 0xcccccccc) >> 2) | ((n & 0x33333333) << 2);
n = ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
return n;
\`\`\`

- Faster: swap halves with masks, 5 steps (16, 8, 4, 2, 1)
- Called many times: byte lookup table, 4 lookups per call
`,"../dsa-notes/Reverse Integer.md":`---
link: https://leetcode.com/problems/reverse-integer/
difficulty: Medium
topics:
  - "[[Math]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "check overflow against INT_MAX/10 before multiplying"
time: "O(log x)"
space: "O(1)"
date: 2026-09-16
---

# Problem
Reverse the digits of a 32-bit int, 0 on overflow.

# Approach
## Digit Peeling
\`% 10\` and \`/ 10\`. Before multiplying check against \`INT_MAX / 10\` and \`INT_MIN / 10\`, last digit limits 7 and -8.

### Code
\`\`\`cpp
class Solution {
public:
    int reverse(int x) {
        int res = 0;
        while (x != 0) {
            int digit = x % 10;
            x /= 10;
            if (res > INT_MAX / 10 || (res == INT_MAX / 10 && digit > 7)) return 0;
            if (res < INT_MIN / 10 || (res == INT_MIN / 10 && digit < -8)) return 0;
            res = res * 10 + digit;
        }
        return res;
    }
};
\`\`\`

### Complexity
- Time: $O(\\log x)$
- Space: $O(1)$
`,"../dsa-notes/Reverse Linked List.md":`---
link: https://leetcode.com/problems/reverse-linked-list/
difficulty: Easy
topics:
  - "[[Linked Lists]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "recursive: reverse the rest, head->next->next = head, head->next = null"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Reverse a linked list.

# Approach
## Recursion
Reverse the rest to get \`newHead\`. Point \`head->next->next\` back at \`head\`, cut \`head->next\` to avoid a cycle.

### Code
\`\`\`cpp
ListNode* reverseList(ListNode* head) {
    if(!head || !head->next)
        return head;
    ListNode* newHead = reverseList(head->next);
    head->next->next = head;
    head->next = nullptr;
    return newHead;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Reverse Nodes in K Group.md":`---
link: https://leetcode.com/problems/reverse-nodes-in-k-group/
difficulty: Hard
topics:
  - "[[Linked Lists]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "check k nodes exist, reverse k, recurse on rest and attach to old head"
time: "O(n)"
space: "O(n/k)"
date: 2026-06-28
---

# Problem
Reverse every \`k\` nodes. A last group smaller than \`k\` stays as is.

# Approach
## Recursive Chunks
Check \`k\` nodes exist, else return \`head\`. Reverse \`k\` nodes, old head becomes the tail. Recurse on the rest and attach it to the old head. Return the new head.

### Code
\`\`\`cpp
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        if(!head) return nullptr;
        ListNode* fast = head;

        int n = 0;
        while(n < k && fast) {
            fast = fast->next;
            n++;
        }

        if(n < k) return head;

        ListNode* dummy = head;
        ListNode* slow = nullptr;

        while(n--) {
            ListNode* temp = dummy->next;
            dummy->next = slow;
            slow = dummy;
            dummy = temp;
        }

        dummy = reverseKGroup(dummy, k);
        head->next = dummy;
        return slow;
    }
};
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n/k)$
`,"../dsa-notes/Reverse Words in a String III.md":`---
link: https://leetcode.com/problems/reverse-words-in-a-string-iii/
difficulty: Easy
topics:
  - "[[Strings]]"
  - "[[Two Pointers]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "reverse each space-separated word in place"
time: "O(n)"
space: "O(1)"
date: 2022-12-16
---

# Problem
Reverse the characters of each word, keep word order.

# Approach
## Reverse Each Word
On every space, reverse \`[start, i-1]\`, then the last word. Pass \`s\` by reference, returning copies makes it O(n²).

### Code
\`\`\`cpp
string reverse(string s, int start, int end)
{
    int mid = (start + end) / 2;
    while (start <= mid)
    {
        swap(s[start], s[end]);
        start++;
        end--;
    }
    return s;
}

string reverseWords(string s)
{
    int n = s.size();
    int start = 0;
    int end = 0;
    for (int i = 0; i < n; i++)
    {
        if (s[i] == 32)
        {
            end = i - 1;
            s = reverse(s, start, end);
            start = i + 1;
        }
    }
    s = reverse(s, start, n - 1);
    return s;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Robot Bounded in Circle.md":`---
link: https://leetcode.com/problems/robot-bounded-in-circle/
difficulty: Medium
topics:
  - "[[Math]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "after one pass, bounded if back at origin or not facing north"
time: "O(n)"
space: "O(1)"
date: 2023-05-17
---

# Problem
Robot repeats \`G\`, \`L\`, \`R\` forever. Does it stay in a circle?

# Approach
## Simulate One Pass
Track \`x\`, \`y\`, \`dir\`. Bounded if it ends at the origin or faces any direction other than north.

### Code
\`\`\`cpp
bool isRobotBounded(string instructions)
{
    int x = 0, y= 0, dir = 0;
    for(char i : instructions){
        if(i == 'G'){
            if(dir == 0)
                y++;
            else if(dir == 1)
                x++;
            else if(dir == 2)
                y--;
            else x--;
        }
        if(i == 'L'){
            dir--;
            if(dir < 0)
                dir = 3;
        }
        if(i == 'R'){
            dir++;
            dir = dir%4;
        }
    }
    if(x == 0 && y == 0)
        return 1;
    if(dir > 0)
        return 1;
    else return 0;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Robot Return To Origin.md":`---
link: https://leetcode.com/problems/robot-return-to-origin/
difficulty: Easy
topics:
  - "[[Strings]]"
  - "[[Math]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "count U == D and L == R"
time: "O(n)"
space: "O(1)"
date: 2023-05-13
---

# Problem
Does the robot end at the origin after the moves?

# Approach
## Count
Back at origin iff \`U == D\` and \`L == R\`.

### Code
\`\`\`cpp
bool judgeCircle(string moves)
{
    int u = 0;
    int d = 0;
    int r = 0;
    int l = 0;

    for (char i : moves)
    {
        if (i == 'U')
            u++;
        if (i == 'D')
            d++;
        if (i == 'R')
            r++;
        if (i == 'L')
            l++;
    }

    return (u == d && l == r);
}
\`\`\`
`,"../dsa-notes/Rod Cutting.md":`---
link: https://www.geeksforgeeks.org/problems/rod-cutting0840/1
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "unbounded knapsack where piece length i has weight i and value price[i-1]"
time: "O(n²)"
space: "O(n²)"
date: 2023-07-11
---

# Problem
Max value from cutting a rod of length \`n\` into pieces with given prices.

# Approach
## Unbounded Knapsack
Piece length \`i\` = weight \`i\`, value \`price[i-1]\`, reusable. See [[Knapsack with Duplicate Items]].

### Code
\`\`\`cpp
int cutRod(int price[], int n)
{
    vector<vector<int>> t(n+1, vector<int>(n+1));
    for (int i = 0; i < n+1 ; i++) {
        for (int j = 0; j < n+1 ; j++) {
            if(i == 0 || j ==0){
                t[i][j] = 0;
                continue;
            }
            else if(i <= j){
                t[i][j] = max(price[i-1] + t[i][j-i], t[i-1][j]);
            }
            else
                t[i][j] = t[i-1][j];
        }
    }

    return t[n][n];
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Roman To Integer.md":`---
link: https://leetcode.com/problems/roman-to-integer/
difficulty: Easy
topics:
  - "[[Strings]]"
  - "[[Hash Maps]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "map includes the 2-char pairs (IV, IX, XL...), try 2 chars first then 1"
time: "O(n)"
space: "O(1)"
date: 2023-05-13
---

# Problem
Convert a Roman numeral to an integer.

# Approach
## Two-Char Lookup
Put the subtractive pairs (\`IV\`, \`IX\`, \`XL\`, \`XC\`, \`CD\`, \`CM\`) in the map too. At each index try the 2-char substring first, else take 1 char.

### Code
\`\`\`cpp
int romanToInt(string s)
{
    unordered_map<string, int> table = {
        {"I", 1},
        {"IV", 4},
        {"V", 5},
        {"IX", 9},
        {"X", 10},
        {"XL", 40},
        {"L", 50},
        {"XC", 90},
        {"C", 100},
        {"CD", 400},
        {"D", 500},
        {"CM", 900},
        {"M", 1000}};

    int ans = 0;
    for (int i = 0; i < s.size(); i++)
    {
        if (i < s.size() - 1)
        {
            string sub = s.substr(i, 2);
            if (table.find(sub) != table.end())
            {
                ans += table[sub];
                i++;
            }
            else
            {
                ans += table[s.substr(i, 1)];
            }
        }

        else
        {
            ans += table[s.substr(i, 1)];
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Rotate Array.md":`---
link: https://leetcode.com/problems/rotate-array/
difficulty: Easy
topics:
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "reverse all, then reverse first k and last n-k. k %= n first"
time: "O(n)"
space: "O(1)"
date: 2022-12-16
---

# Problem
Rotate an array right by \`k\`.

# Approach
## Brute Force
Shift by one, \`k\` times.

### Code
\`\`\`cpp
void rotate(vector<int>& nums, int k) {
    while(k--){
        int temp = nums[0];
        for(int i = 0; i < nums.size(); i++){
            int ind = (i+1)%nums.size();
            swap(temp, nums[ind]);
        }
    }
}
\`\`\`

### Complexity
- Time: $O(nk)$
- Space: $O(1)$

## Reversal
\`k %= n\`. Reverse all, reverse the first \`k\`, reverse the rest.

### Code
\`\`\`cpp
void reverse(vector<int>& nums, int left, int right){
    int mid = left + (right - left)/2;

    for(int i = left; i <= mid; i++){
        swap(nums[i], nums[right-i + left]);
    }
}

void rotate(vector<int>& nums, int k) {
    k %= nums.size();
    if(k == 0) return;
    reverse(nums, 0, nums.size()-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.size()-1);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$

## Cycles
Move each element to \`(i + k) % n\` carrying the displaced one, following each cycle.

### Code
\`\`\`cpp
void rotate(vector<int>& nums, int k) {
    int n = nums.size();
    vector<bool> visited(n, 0);
    for(int i = 0; i < n; i++){
        if(!visited[i]){
            int temp = nums[i];
            int ind = (i+k)%n;
            while(!visited[ind]){
                swap(temp, nums[ind]);
                visited[ind] = true;
                ind = (ind+k)%n;
            }
        }
    }
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Rotate Image.md":`---
link: https://leetcode.com/problems/rotate-image/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "rotate 4 cells at a time, layer by layer from the outside in"
time: "O(n²)"
space: "O(1)"
date: 2023-03-11
---

# Problem
Rotate an \`n x n\` matrix 90 degrees clockwise in place.

# Approach
## Layer Swaps
For each layer, cycle 4 cells at a time: bottom-left to top-left, bottom-right to bottom-left, top-right to bottom-right, saved top-left to top-right. Transpose + reverse each row also works.

### Code
\`\`\`cpp
void rotate(vector<vector<int>> &matrix)
{
    int left = 0;
    int right = matrix.size() - 1;
    while (left < right)
    {
        int top = left;
        int bottom = right;
        for (int i = 0; i < right - left; i++)
        {
            // saving the top left element in a temporary variable
            int topLeft = matrix[top][left + i];

            // moving bottom left to top left
            matrix[top][left + i] = matrix[bottom - i][left];

            // moving bottom right to bottom left
            matrix[bottom - i][left] = matrix[bottom][right - i];

            // moving top right to bottom right
            matrix[bottom][right - i] = matrix[top + i][right];

            // moving the top left element in the temp variable to top right
            matrix[top + i][right] = topLeft;
        }
        right -= 1;
        left += 1;
    }
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$

## Transpose + Reverse Rows
Cell \`(r, c)\` goes to \`(c, n-1-r)\`. Transpose sends it to \`(c, r)\`, reversing the row sends it to \`(c, n-1-r)\`. Shorter and harder to get wrong than the 4-cell cycle.

- Reverse each row for clockwise. Reversing each column gives counterclockwise
- Transpose loop starts at \`j = i\`, or \`j = i + 1\`. Swapping both triangles undoes itself

### Code
\`\`\`cpp
void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; i++)
        for (int j = i; j < n; j++)
            swap(matrix[i][j], matrix[j][i]);

    for (int i = 0; i < n; i++)
        reverse(matrix[i].begin(), matrix[i].end());
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$
`,"../dsa-notes/Rotten Oranges.md":`---
link: https://leetcode.com/problems/rotting-oranges/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Arrays]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "multi-source BFS from all rotten oranges, levels are minutes, -1 if any fresh is left"
time: "O(m * n)"
space: "O(m * n)"
date: 2026-11-08
---

# Problem
Minutes until every orange is rotten, or -1.

# Approach
## Multi-Source BFS
Push every rotten orange at time 0. Each BFS level is one minute. Any fresh orange left means -1.

### Code
\`\`\`cpp
int orangesRotting(vector<vector<int>>& grid) {
    int m = grid.size();
    int n = grid[0].size();
    int count = 0;

    vector<vector<bool>> visited(m, vector<bool> (n, 0));
    queue<pair<pair<int, int>, int>> q;
    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            if(grid[i][j] == 2){
                visited[i][j] = true;
                q.push({{i, j}, 0});
            }
            if(grid[i][j] == 1)
                count++;
        }
    }

    int time = 0;
    while(!q.empty()){
        int x = q.front().first.first;
        int y = q.front().first.second;
        int t = q.front().second;
        q.pop();

        for(int i = -1; i <= 1; i++){
            for(int j = -1; j <= 1; j++){
                if(abs(i) == abs(j))
                    continue;
                else{
                    if((x+i) < 0 || (y+j) < 0 || (x+i) >= grid.size() || (y+j) >= grid[0].size())
                        continue;
                    if(!visited[x + i][y + j] && grid[x + i][y + j] == 1){
                        grid[x+i][y+j] = 2;
                        count--;
                        visited[x+i][y+j] =true;
                        q.push({{x+i, y+j}, t+1});
                    }
                }
            }
        }
        time = max(t, time);
    }

    return (count==0)?time:-1;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m \\cdot n)$

- \`[[2]]\` must return 0, \`[[1]]\` must return -1, \`[[0]]\` must return 0
- Count fresh up front, \`fresh == 0\` at the end is the -1 check
`,"../dsa-notes/Russian Doll Envelopes.md":`---
link: https://leetcode.com/problems/russian-doll-envelopes/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[Binary Search]]"
  - "[[Sorting]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort width asc, height desc, then LIS on heights"
time: "O(n log n)"
space: "O(n)"
date: 
---

# Problem
Max envelopes nested inside each other, both sides strictly bigger.

# Approach
## Sort + LIS
Sort by width ascending, height descending, then [[Longest Increasing Subsequence]] on heights. Descending heights stop two envelopes with the same width from both being picked.

### Code
\`\`\`cpp
int maxEnvelopes(vector<vector<int>> &envelopes)
{
    sort(envelopes.begin(), envelopes.end(), [](vector<int> a, vector<int> b)
         {
        if(a[0] == b[0])
            return a[1] > b[1];
        else
            return a[0] < b[0]; });

    int n = envelopes.size();
    vector<int> t;

    for (int i = 0; i < n; i++)
    {
        if(t.size() == 0 || envelopes[i][1] > t[t.size() - 1])
            t.push_back(envelopes[i][1]);
        else{
            auto it = lower_bound(t.begin(), t.end(), envelopes[i][1]);
            *it = envelopes[i][1];
        }
    }

    return t.size();
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(n)$
`,"../dsa-notes/Same Tree.md":`---
link: https://leetcode.com/problems/same-tree/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "both null true, one null false, compare val then recurse"
time: "O(n)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Are two trees identical?

# Approach
## DFS
Both null: true. One null or different values: false. Else recurse on both sides.

### Code
\`\`\`cpp
bool isSameTree(TreeNode* p, TreeNode* q) {
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    if (p->val != q->val)
        return false;
    bool left = isSameTree(p->left, q->left);
    bool right = isSameTree(p->right, q->right);
    return left && right;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Search a 2D Matrix.md":`---
link: https://leetcode.com/problems/search-a-2d-matrix/
difficulty: Medium
topics:
  - "[[Binary Search]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "treat it as one sorted array of m * n, index mid -> (mid / n, mid % n)"
time: "O(log(m * n))"
space: "O(1)"
date: 2022-12-10
---

# Problem
Search a matrix where each row is sorted and each row starts after the previous ends.

# Approach
## Flattened Binary Search
Binary search over \`0..m*n-1\`, map \`mid\` to \`(mid / n, mid % n)\`.

### Code
\`\`\`cpp
bool searchMatrix(vector<vector<int>> &matrix, int target)
{
    int m = matrix.size();
    int n = matrix[0].size();
    int low = 0;
    int high = m * n - 1;
    while (low <= high)
    {
        int mid = (high + low) / 2;
        int x = (mid / n < m) ? mid / n : mid / n - 1;
        int y = (mid % n < n) ? mid % n : mid % n - 1;
        if (matrix[x][y] == target)
            return true;
        else if (target > matrix[x][y])
            low = mid + 1;
        else
            high = mid - 1;
    }
    return false;
}
\`\`\`

### Complexity
- Time: $O(\\log(m \\cdot n))$
- Space: $O(1)$
`,"../dsa-notes/Search in rotated sorted array.md":`---
link: https://leetcode.com/problems/search-in-rotated-sorted-array/
difficulty: Medium
topics:
  - "[[Binary Search]]"
source: Leetcode
star: true
blind75: true
mastery: red
review: 2026-11-09
insight: "one half is always sorted, check if target lies in it"
time: "O(log n)"
space: "O(1)"
date: 2026-11-08
---

# Problem
Search a target in a rotated sorted array.

# Approach
## Binary Search
One half around \`m\` is always sorted. If the target is in the sorted half's range, search there, else the other half. See [[Find Minimum in Rotated Sorted Array]].

- Sorted-half branch needs both ends: \`nums[l] <= target < nums[m]\` or \`nums[m] < target <= nums[r]\`
- \`nums[l] <= nums[m]\`, not \`<\`. One-element left half is still sorted
- Duplicates break the sorted-half test, see Search in Rotated Sorted Array II
- Two-pass option: find pivot (\`nums[m] < nums[r] ? r = m : l = m + 1\`), then binary search both runs. Same $O(\\log n)$

### Code
\`\`\`cpp
int search(vector<int>& nums, int target) {
    int l = 0, r = nums.size()-1, ans = -1;

    if(nums.size() == 1)
        return (nums[0] == target) ? 0 : -1;

    while(l <= r) {
        int m = l + (r-l)/2;
        if(nums[m] == target) 
            return m;
        if(nums[l] <= nums[m]) {
            if(target < nums[l] || target > nums[m]){
                l = m+1;
            }
            else {
                r = m-1;
            }
        } else {
            if (target > nums[r] || target < nums[m])
                r = m-1;
            else 
                l = m + 1;
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(\\log n)$
- Space: $O(1)$
`,"../dsa-notes/Serialize and Deserialize Binary Tree.md":`---
link: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
difficulty: Hard
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[BFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "preorder with \\"N,\\" for nulls, rebuild by consuming tokens in the same order"
time: "O(n)"
space: "O(n)"
date: 2026-06-30
---

# Problem
Serialize and deserialize any binary tree.

# Approach
## Preorder + Null Markers, Index
Preorder with \`N,\` for nulls. Deserialize with a shared \`int& idx\` scanning to each comma.

Trap: preorder + inorder without null markers breaks on duplicate values.

### Code
\`\`\`cpp
string serialize(TreeNode* root) {
    if (!root) return "N,";
    return to_string(root->val) + "," + serialize(root->left) + serialize(root->right);
}

TreeNode* desc(string& data, int& idx) {
    if (idx >= data.size() || data[idx] == 'N') { idx += 2; return nullptr; }
    int len = idx;
    while (len < data.size() && data[len] != ',') len++;
    string num = data.substr(idx, len - idx);
    idx = len + 1;
    TreeNode* root = new TreeNode(stoi(num));
    root->left  = desc(data, idx);
    root->right = desc(data, idx);
    return root;
}

TreeNode* deserialize(string data) {
    int idx = 0;
    return desc(data, idx);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$

## Preorder + Null Markers, Queue
Split into tokens once, consume from a queue.

### Code
\`\`\`cpp
string serialize(TreeNode* root) {
    if (!root) return "N,";
    return to_string(root->val) + "," + serialize(root->left) + serialize(root->right);
}

TreeNode* build(queue<string>& q) {
    string val = q.front(); q.pop();
    if (val == "N") return nullptr;
    TreeNode* node = new TreeNode(stoi(val));
    node->left  = build(q);
    node->right = build(q);
    return node;
}

TreeNode* deserialize(string data) {
    queue<string> q;
    stringstream ss(data);
    string token;
    while (getline(ss, token, ',')) q.push(token);
    return build(q);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Set Matrix Zeroes.md":`---
link: https://leetcode.com/problems/set-matrix-zeroes/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "record zero rows and cols first, then clear. O(1): use row 0 and col 0 as the markers"
time: "O(m * n)"
space: "O(m + n)"
date: 2026-11-08
---

# Problem
If a cell is 0, set its whole row and column to 0, in place.

# Approach
## Mark then Clear
Record which rows and columns have a 0, then clear them. For O(1) space, store the marks in row 0 and column 0.

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(m + n)$

- First row and column are the markers. Record \`row0\` and \`col0\` flags first, they say the border originally had a zero
- Clear the interior first, the border last. Clearing the border early destroys markers
- Tests: \`[[0,1],[1,1]]\`, \`[[1,0],[1,1]]\`, and the 3x3 with a centre zero
`,"../dsa-notes/Shortest Common Supersequence.md":`---
link: https://leetcode.com/problems/shortest-common-supersequence/
difficulty: Hard
topics:
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "LCS table, walk back: match adds the char once, else add the char from the side you move away from"
time: "O(n * m)"
space: "O(n * m)"
date: 2023-07-24
---

# Problem
Shortest string with both \`a\` and \`b\` as subsequences.

# Approach
## Backtrack the LCS Table
Like [[Print LCS]], but on a mismatch still add the char you step past. Prepend whatever is left of the unfinished string. Length = \`n + m - lcs\`.

### Code
\`\`\`cpp
// string scs(int n, int m, string a, string b)
// {
//     if (n == 0 || m == 0)
//         return (n == 0) ? b.substr(0, m) : a.substr(0, n);
//     else
//     {
//         if (a[n - 1] == b[m - 1])
//             return scs(n - 1, m - 1, a, b) + a[n - 1];
//         else
//         {
//             string x = scs(n - 1, m, a, b) + a[n - 1];
//             string y = scs(n, m - 1, a, b) + b[m - 1];
//             return (x.size() < y.size()) ? x : y;
//         }
//     }
// }

string scs(int n, int m, string a, string b)
{
    vector<vector<int>> t(n + 1, vector<int>(m + 1));

    for (int i = 0; i < n + 1; i++)
    {
        for (int j = 0; j < m + 1; j++)
        {
            if (i == 0 || j == 0)
                t[i][j] = 0;
            else
            {
                if (a[i - 1] == b[j - 1])
                    t[i][j] = t[i - 1][j - 1] + 1;
                else
                    t[i][j] = max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    int i = n, j = m;
    string ans = "";
    while (i != 0 && j != 0)
    {
        if (a[i - 1] == b[j - 1])
        {
            ans = a[i - 1] + ans;
            i--;
            j--;
        }
        else
        {
            if (t[i - 1][j] > t[i][j - 1])
            {
                ans = a[i - 1] + ans;
                i--;
            }
            else
            {
                ans = b[j - 1] + ans;
                j--;
            }
        }
    }
    ans = ((i == 0) ? b.substr(0, j) : a.substr(0, i)) + ans;

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Shortest Distance in a Binary Maze.md":`---
link: https://www.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze-1655453161/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "plain BFS on 1-cells, first time you reach the destination is the answer"
time: "O(n * m)"
space: "O(n * m)"
date: 
---

# Problem
Shortest path from source to destination moving through 1s, 4 directions.

# Approach
## BFS
Unit weights, so BFS gives the shortest distance.

### Code
\`\`\`cpp
int shortestPath(vector<vector<int>> &grid, pair<int, int> source,
                 pair<int, int> destination) {
    // code here
    int n = grid.size();
    int m = grid[0].size();
    vector<vector<int>> distance(n, vector<int> (m, 1e9));
    queue<pair<int, pair<int, int>>> q;
    distance[source.first][source.second] = 0;
    if(source == destination)
        return 0;
    q.push({0, source});
    int dx[] = {1,-1,0,0};
    int dy[] = {0,0,1,-1};

    while(!q.empty()){
        int dis = q.front().first;
        int r = q.front().second.first;
        int c = q.front().second.second;
        q.pop();

        for(int i = 0; i < 4; i++){
            int newr = r + dx[i];
            int newc = c + dy[i];

            if(newr >= 0 && newr < n && newc >= 0 && newc < m && grid[newr][newc] == 1 && distance[newr][newc] > dis + 1){
                distance[newr][newc] = dis + 1;
                q.push({distance[newr][newc], {newr, newc}});

                if(newr == destination.first && newc == destination.second)
                    return distance[newr][newc];
            }
        }
    }

    return -1;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Shortest Path in Binary Matrix.md":`---
link: https://leetcode.com/problems/shortest-path-in-binary-matrix/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "BFS in 8 directions over 0-cells, length counts cells"
time: "O(n²)"
space: "O(n²)"
date: 
---

# Problem
Shortest clear path of 0s from top-left to bottom-right, 8 directions.

# Approach
## BFS
Same as [[Shortest Distance in a Binary Maze]] with 8 directions. Blocked start = -1.

### Code
\`\`\`cpp
int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
    if(grid[0][0] == 1)
        return -1;

    int s = grid.size();
    if(grid[s-1][s-1] != 0)
        return -1;

    queue<pair<pair<int, int>, int>> q;
    q.push({{0, 0}, 1});
    grid[0][0] = -1;

    int drow[] = {-1, 0, +1, 0, 1, -1, -1, 1};
    int dcol[] = {0, 1, 0, -1, 1, 1, -1, -1}; 

    while(!q.empty()){
        auto val = q.front();
        int i = val.first.first;
        int j = val.first.second;
        int path = val.second;
        q.pop();

        if(i == s-1 && j == s-1)
            return path;

        for(int idx=0;idx<8;idx++){
            int row = i + drow[idx];
            int col = j + dcol[idx];

            if(row >= 0 && row < s && col >= 0 && col < s && grid[row][col] == 0){
                grid[row][col] = -1;
                q.push({{row, col}, path+1});
            }
        }
    }

    return -1;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Shortest Path in DAG.md":`---
link: https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[Topological Sort]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "topo sort, then relax edges in topo order"
time: "O(V + E)"
space: "O(V + E)"
date: 
---

# Problem
Shortest distance from node 0 in a weighted DAG, -1 if unreachable.

# Approach
## Topo Order Relaxation
[[Topological Sort]] with DFS, then pop in order and relax each node's edges. Every node is final when popped.

### Code
\`\`\`cpp
void topoSort(int node, vector<vector<pair<int, int>>> &graph, vector<bool> &vis, stack<int> &s)
{
    vis[node] = true;
    for (auto i : graph[node])
    {
        int v = i.first;
        if (!vis[v])
            topoSort(v, graph, vis, s);
    }
    s.push(node);
}

vector<int> shortestPath(int N, int M, vector<vector<int>> &edges)
{
    // code here
    vector<vector<pair<int, int>>> graph(N, vector<pair<int, int>>());

    for (int i = 0; i < M; i++)
    {
        graph[edges[i][0]].push_back(make_pair(edges[i][1], edges[i][2]));
    }

    stack<int> s;
    vector<bool> vis(N);
    for (int i = 0; i < N; i++)
    {
        if (!vis[i])
        {
            topoSort(i, graph, vis, s);
        }
    }

    vector<int> distance(N, 1e9);
    distance[0] = 0;
    while (!s.empty())
    {
        int curr = s.top();
        s.pop();
        for (auto i : graph[curr])
        {
            int v = i.first;
            int wt = i.second;
            if (distance[v] > distance[curr] + wt)
            {
                distance[v] = distance[curr] + wt;
            }
        }
    }

    for(int i = 0; i < N; i++)
        if(distance[i] == 1e9)
            distance[i] = -1;

    return distance;
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V + E)$
`,"../dsa-notes/Shortest Path in Undirected Graph with unit weight.md":`---
link: https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1
difficulty: Easy
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "BFS with a dist array instead of visited"
time: "O(V + E)"
space: "O(V + E)"
date: 
---

# Problem
Shortest distance from \`src\` with unit weights.

# Approach
## BFS
Update \`dist[v] = dist[u] + 1\` when it improves.

### Code
\`\`\`cpp
vector<int> shortestPath(vector<vector<int>>& edges, int N,int M, int src){
    // code here
    vector<vector<int>> graph(N, vector<int> ());
    for(int i = 0; i < M; i++){
        graph[edges[i][0]].push_back(edges[i][1]);
        graph[edges[i][1]].push_back(edges[i][0]);
    }

    vector<int> dist(N, 1e9);
    dist[src] = 0;
    queue<int> q;
    q.push(src);
    while(!q.empty()){
        int curr = q.front(); q.pop();
        for(auto i : graph[curr]){
            if(dist[i] > dist[curr] + 1){
                dist[i] = dist[curr] + 1;
                q.push(i);
            }
        }
    }

    for(int i = 0; i <N; i++)
        if(dist[i] == 1e9)
            dist[i] = -1;

    return dist;
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V + E)$
`,"../dsa-notes/Shortest Path in Weighted undirected graph.md":`---
link: https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1
difficulty: Easy
topics:
  - "[[Graphs]]"
  - "[[Dijkstra]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "Dijkstra with a parent array, walk parents back from n to print the path"
time: "O(E log V)"
space: "O(V + E)"
date: 
---

# Problem
Print the shortest path from 1 to \`n\`.

# Approach
## Dijkstra + Parents
[[Dijkstra's Algorithm]], set \`parent[v] = u\` on relax. Walk back from \`n\`.

### Code
\`\`\`cpp
vector<int> shortestPath(int n, int m, vector<vector<int>>& edges) {
    // Code here
    vector<int> dist(n+1, 1e9);
    vector<int> parent(n+1);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> path;
    vector<pair<int, int>> adj[n+1];

    for(auto i : edges){
        adj[i[0]].push_back({i[1], i[2]});
        adj[i[1]].push_back({i[0], i[2]});
    }

    dist[1] = 0;
    pq.push({0, 1});
    parent[1] = 1;
    while(!pq.empty()){
        int wt = pq.top().first;
        int v = pq.top().second;
        pq.pop();
        for(auto i : adj[v]){
            if(dist[i.first] > wt + i.second){
                dist[i.first] = i.second + wt;
                pq.push({dist[i.first], i.first});
                parent[i.first] = v;
            }
        }
    }
    if(dist[n] == 1e9) return {-1};
    int curr = n;
    while(parent[curr] != curr){
        path.push_back(curr);
        curr = parent[curr];
    }
    path.push_back(1);
    reverse(path.begin(), path.end());
    return path;
}
\`\`\`

### Complexity
- Time: $O(E \\log V)$
- Space: $O(V + E)$
`,"../dsa-notes/Shortest Path with Alternating Colors.md":`---
link: https://leetcode.com/problems/shortest-path-with-alternating-colors/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "BFS on (node, last color), run starting with red and with blue"
time: "O(V + E)"
space: "O(V + E)"
date: 2024-04-08
---

# Problem
Shortest path from 0 to each node with alternating edge colors.

# Approach
## BFS on (node, color)
Unit weights, so BFS. Alternate red and blue edges. Run once starting red, once starting blue, keep the min.

### Code
\`\`\`cpp
vector<int> shortestAlternatingPaths(int n, vector<vector<int>> &redEdges, vector<vector<int>> &blueEdges)
    {
        vector<vector<int>> red(n), blue(n);
        for (auto e : redEdges)
        {
            red[e[0]].push_back(e[1]);
        }
        for (auto e : blueEdges)
        {
            blue[e[0]].push_back(e[1]);
        }

        vector<int> dis(n, 1e6);
        dis[0] = 0;

        for (int i = 0; i < 2; i++)
        {
            vector<vector<bool>> vis(n, vector<bool>(2, 0));
            vis[0][i] = 1;
            priority_queue<pair<int, pair<int, bool>>, vector<pair<int, pair<int, bool>>>, greater<pair<int, pair<int, bool>>>> pq;
            pq.push({0, {0, i}});

            vector<vector<int>> edges;

            while (!pq.empty())
            {
                int d = pq.top().first;
                int node = pq.top().second.first;
                bool last = pq.top().second.second;
                pq.pop();

                edges.clear();
                edges = (last) ? blue : red;
                if (edges[node].empty() == false)
                {
                    for (auto v : edges[node])
                    {
                        if (!vis[v][!last])
                        {
                            vis[v][!last] = true;
                            dis[v] = min(dis[v], 1 + d);
                            pq.push({1 + d, {v, !last}});
                        }
                    }
                }
            }
        }

        for (int i = 0; i < n; i++)
            if (dis[i] == 1e6)
                dis[i] = -1;

        return dis;
    }
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V + E)$
`,"../dsa-notes/Sliding Window Maximum.md":`---
link: https://leetcode.com/problems/sliding-window-maximum/
difficulty: Hard
topics:
  - "[[Sliding Window]]"
  - "[[Deque]]"
  - "[[Monotonic Stack]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "deque of indices with decreasing values, front is the max, pop it when it leaves the window"
time: "O(n)"
space: "O(n)"
date: 2026-05-22
---

# Problem
Max of every window of size \`k\`.

# Approach
## Frequency Map
Track counts in the window. When the max leaves, rescan the window.

### Code
\`\`\`cpp
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    vector<int> ans;
    unordered_map<int, int> mp;

    int l = 0, r = 0, maxr = INT_MIN, n = nums.size();
    while (r < n) {
        mp[nums[r]]++;
        maxr = max(maxr, nums[r]);
        if (r - l + 1 == k) {
            ans.push_back(maxr);
        } else if (r - l + 1 > k) {
            mp[nums[l++]]--;
            if (mp[maxr] == 0) {
                maxr = INT_MIN;
                for (int i = l; i <= r; i++) {
                    maxr = max(maxr, nums[i]);
                }
            }
            ans.push_back(maxr);
        }
        r++;
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(nk)$
- Space: $O(k)$

## Monotonic Deque
Deque of indices, values decreasing. A new element pops every smaller one from the back, it outlives them. Pop the front when it leaves the window.

### Code
\`\`\`cpp
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    vector<int> ans;
    deque<int> dq;

    int n = nums.size();

    for (int r = 0; r < n; r++) {
        if (!dq.empty() && dq.front() < r - k + 1) {
            dq.pop_front();
        }

        while (!dq.empty() && nums[dq.back()] < nums[r]) {
            dq.pop_back();
        }

        dq.push_back(r);

        if (r >= k - 1) {
            ans.push_back(nums[dq.front()]);
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(k)$
`,"../dsa-notes/Smallest Range II.md":`---
link: https://leetcode.com/problems/smallest-range-ii/
difficulty: Medium
topics:
  - "[[Sorting]]"
  - "[[Greedy]]"
  - "[[Math]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sort, split at i: first part +k, rest -k. max = max(a[n-1]-k, a[i]+k), min = min(a[0]+k, a[i+1]-k)"
time: "O(n log n)"
space: "O(1)"
date: 
---

# Problem
Add \`+k\` or \`-k\` to each element, minimize max - min.

# Approach
## Sort + Split
After sorting, the best is some prefix \`+k\` and the suffix \`-k\`. For each split \`i\`: max = \`max(a[n-1]-k, a[i]+k)\`, min = \`min(a[0]+k, a[i+1]-k)\`.

### Code
\`\`\`cpp
int smallestRangeII(vector<int> &nums, int k)
{
    sort(nums.begin(), nums.end());
    int ans = nums.back() - nums[0];
    for (int i = 0; i < nums.size() - 1; i++)
    {
        int a = nums[i];
        int b = nums[i + 1];
        int high = max(nums.back() - k, a + k);
        int low = min(nums[0] + k, b - k);
        ans = min(ans, high - low);
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$
`,"../dsa-notes/Solving Questions with brainpwer.md":`---
link: https://leetcode.com/problems/solving-questions-with-brainpower/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "from the back, t[i] = max(points + t[i + brainpower + 1], t[i + 1])"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Solve or skip each question in order. Solving \`i\` skips the next \`brainpower[i]\`. Max points.

# Approach
## DP from the Back
\`t[i] = max(points[i] + t[i + bp + 1], t[i+1])\`.

### Code
\`\`\`cpp
long long mostPoints(vector<vector<int>>& questions) {
    int n = questions.size();
    vector<long long> t(n + 1);
    for(int i = n - 1; i >= 0; i--){
        t[i] = max(questions[i][0] + ((i + questions[i][1] + 1 < n)?(t[i + questions[i][1] + 1]) : 0), t[i + 1]);
    }

    return t[0];
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Sort Colors.md":`---
link: https://leetcode.com/problems/sort-colors/
difficulty: Medium
topics:
  - "[[Arrays]]"
  - "[[Two Pointers]]"
  - "[[Sorting]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "Dutch flag: low, mid, high pointers, swap 0s to low and 2s to high"
time: "O(n)"
space: "O(1)"
date: 2023-03-11
---

# Problem
Sort an array of 0s, 1s and 2s in place, one pass.

# Approach
## Two Snowballs
\`sb2\` = 2s seen, \`sb1\` = 1s seen. Each new value gets written back past the snowballs, like [[Move Zeroes]]. The usual way is Dutch flag with \`low\`, \`mid\`, \`high\`.

### Code
\`\`\`cpp
void sortColors(vector<int>& nums) {
        int sb2 = 0;
        int sb1 = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 1){
                sb1++;
                nums[i] = (sb2 > 0)?2:1;
                nums[i - sb2] = 1;
            }
            else if(nums[i] == 2){
                sb2++;
            }
            else{
                nums[i] = (sb2 > 0)?2:((sb1> 0)?1:0);
                nums[i - sb2] = (sb1 > 0)?1:0;
                nums[i - sb2 - sb1] = 0;
            }
        }
    }
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Spiral Matrix II.md":`---
link: https://leetcode.com/problems/spiral-matrix-ii/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "four boundaries, fill right, down, left, up and shrink each after its side"
time: "O(n²)"
space: "O(1)"
date: 2023-03-11
---

# Problem
Fill an \`n x n\` matrix with \`1..n²\` in spiral order.

# Approach
## Boundaries
Same walk as [[Spiral Matrix]], writing \`count++\` instead of reading.

### Code
\`\`\`cpp
vector<vector<int>> generateMatrix(int n)
{
    vector<vector<int>> matrix(n, vector<int>(n, 0));
    int row = 0, col = 0;
    int row_start = 0, row_end = n - 1;
    int col_start = 0, col_end = n - 1;
    int count = 1;
    while (row_start <= row_end && col_start <= col_end)
    {
        while (col <= col_end)
        {
            matrix[row][col] = count;
            count++;
            col++;
        }
        row_start++;
        row++;
        col--;
        while (row <= row_end)
        {
            matrix[row][col] = count;
            count++;
            row++;
        }
        col_end--;
        col--;
        row--;
        while (col >= col_start)
        {
            matrix[row][col] = count;
            count++;
            col--;
        }
        row_end--;
        row--;
        col++;
        while (row >= row_start)
        {
            matrix[row][col] = count;
            count++;
            row--;
        }
        col_start++;
        col++;
        row++;
    }
    return matrix;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$ extra
`,"../dsa-notes/Spiral Matrix.md":`---
link: https://leetcode.com/problems/spiral-matrix/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "walk right, down, left, up, shrinking the boundary by one layer each loop"
time: "O(m * n)"
space: "O(1)"
date: 2023-04-05
---

# Problem
Return the matrix in spiral order.

# Approach
## Layer by Layer
Walk right, down, left, up. \`point\` = layers done, shrinks the bounds. Resize at the end to drop overshoot on non-square matrices.

### Code
\`\`\`cpp
vector<int> spiralOrder(vector<vector<int>> &matrix)
{
    vector<int> ans;
    int rows = matrix.size();
    int cols = matrix[0].size();
    int row = 0, col = 0, point = 0;
    while (ans.size() < rows * cols)
    {
        for (col = col; col < cols - point; col++)
            ans.push_back(matrix[row][col]);
        row++;
        col--;
        for (row = row; row < rows - point; row++)
            ans.push_back(matrix[row][col]);
        col--;
        row--;
        for (col = col; col >= point; col--)
            ans.push_back(matrix[row][col]);
        row--;
        col++;
        point++;
        for (row = row; row >= point; row--)
            ans.push_back(matrix[row][col]);
        col++;
        row++;
    }
    ans.resize(rows*cols);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(1)$
`,"../dsa-notes/String Task.md":`---
link: https://codeforces.com/problemset/problem/118/A
rating: 1000
contest: Codeforces Beta Round 89 Div 2
topics:
  - "[[Strings]]"
  - "[[Implementation]]"
source: CodeForces
star: false
blind75: false
mastery:
review:
insight: "lowercase everything, drop vowels, print '.' before each remaining char"
time: "O(n)"
space: "O(n)"
date: 2026-09-22
code: "[[CodeForces/A_String_Task.cpp]]"
---

# Problem
Delete vowels, lowercase the rest, put a dot before every remaining consonant.

# Observation
\`y\` counts as a vowel here. Lowercase before the vowel check, else uppercase vowels survive.
`,"../dsa-notes/Subarray Product Less Than K.md":`---
link: https://leetcode.com/problems/subarray-product-less-than-k/
difficulty: Medium
topics:
  - "[[Sliding Window]]"
  - "[[Two Pointers]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "sliding window, shrink while product >= k, add r - l + 1 subarrays ending at r"
time: "O(n)"
space: "O(1)"
date: 2023-04-09
---

# Problem
Count subarrays with product < \`k\`.

# Approach
## Sliding Window
Grow right, shrink left while product >= \`k\`. Each \`r\` adds \`r - l + 1\` subarrays ending at \`r\`. \`k <= 1\` means 0.

### Code
\`\`\`cpp
int numSubarrayProductLessThanK(vector<int> &nums, int k)
{
    int mul = 1;
    int ans = 0;
    if (k <= 1)
        return ans;
    int left = 0, right = 0;
    while (right < nums.size())
    {
        mul *= nums[right];

        while (mul >= k)
        {
            mul /= nums[left];
            left++;
        }

        ans += right - left + 1;
        right++;
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Subsets II.md":`---
link: https://leetcode.com/problems/subsets-ii/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "sort, push curr at every call, skip i > idx && nums[i] == nums[i-1]"
time: "O(n * 2^n)"
space: "O(n)"
date: 2026-06-30
---

# Problem
All subsets without duplicates, input has duplicates.

# Approach
## Loop Backtracking with Sibling Dedup
Like [[Combination Sum II]]. Sort. Push \`curr\` on every call. Skip \`i > idx && nums[i] == nums[i-1]\`.

Trap: a second recursive call after \`pop_back\` inside the loop makes duplicates. The loop already moves on.

### Code
\`\`\`cpp
void solve(vector<vector<int>>& ans, vector<int>& curr, vector<int>& nums, int idx) {
    ans.push_back(curr);
    for (int i = idx; i < nums.size(); i++) {
        if (i > idx && nums[i] == nums[i-1]) continue;
        curr.push_back(nums[i]);
        solve(ans, curr, nums, i+1);
        curr.pop_back();
    }
}

vector<vector<int>> subsetsWithDup(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;
    vector<int> curr;
    solve(ans, curr, nums, 0);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot 2^n)$
- Space: $O(n)$

## Iterative Cascade
Sort. For a duplicate, extend only the subsets added in the last round.

### Code
\`\`\`cpp
vector<vector<int>> subsetsWithDup(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans = {{}};
    int start = 0;
    for (int i = 0; i < nums.size(); i++) {
        start = (i > 0 && nums[i] == nums[i-1]) ? start : 0;
        int sz = ans.size();
        for (int j = start; j < sz; j++) {
            auto v = ans[j];
            v.push_back(nums[i]);
            ans.push_back(v);
        }
        start = sz;
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot 2^n)$
- Space: $O(2^n)$ output
`,"../dsa-notes/Subsets.md":`---
link: https://leetcode.com/problems/subsets/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery: yellow
review: 2026-11-11
insight: "at each index skip or take, push at the end"
time: "O(n * 2^n)"
space: "O(2^n)"
date: 2026-06-30
---

# Problem
All subsets of unique numbers.

# Approach
## Include/Exclude
Skip or take each element. Push at the end.

Trap: \`{}\` literal doesn't bind to \`vector<int>&\`, use a named variable.

- Elements are distinct and every leaf is a different take/skip path, so every leaf is a unique subset
- Duplicates in the input break that (\`[1,1]\`). Then sort and skip, see Subsets II
- Time is $O(n \\cdot 2^n)$, each of the $2^n$ leaves copies \`curr\`

### Code
\`\`\`cpp
void solve(vector<vector<int>>& ans, vector<int>& curr, vector<int>& nums, int idx) {
    if (idx == nums.size()) { ans.push_back(curr); return; }
    solve(ans, curr, nums, idx+1);          // exclude
    curr.push_back(nums[idx]);
    solve(ans, curr, nums, idx+1);          // include
    curr.pop_back();
}

vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> ans;
    vector<int> curr;
    solve(ans, curr, nums, 0);
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot 2^n)$
- Space: $O(n)$

## Iterative Cascade
Start with \`{{}}\`. For each number, copy every subset and append it.

### Code
\`\`\`cpp
vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> ans = {{}};
    for (int n : nums) {
        int sz = ans.size();
        for (int i = 0; i < sz; i++) {
            auto sub = ans[i];
            sub.push_back(n);
            ans.push_back(sub);
        }
    }
    return ans;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot 2^n)$
- Space: $O(2^n)$ output
`,"../dsa-notes/Subtree of Another Tree.md":`---
link: https://leetcode.com/problems/subtree-of-another-tree/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
  - "[[BFS]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "at every node run same tree against subRoot"
time: "O(n * m)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Is \`subRoot\` a subtree of \`root\`?

# Approach
## DFS
At each node check [[Same Tree]], else recurse left and right.

### Code
\`\`\`cpp
bool isSame(TreeNode* p, TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p->val != q->val) return false;
    return isSame(p->left, q->left) && isSame(p->right, q->right);
}

bool isSubtree(TreeNode* root, TreeNode* subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    if (isSame(root, subRoot)) return true;
    return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(h)$

## BFS
Walk \`root\` with a queue, run the same check on value matches.

### Code
\`\`\`cpp
bool isSame(TreeNode* p, TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p->val != q->val) return false;
    return isSame(p->left, q->left) && isSame(p->right, q->right);
}

bool isSubtree(TreeNode* root, TreeNode* subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        TreeNode* node = q.front(); q.pop();
        if (node->val == subRoot->val && isSame(node, subRoot))
            return true;
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
    return false;
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n)$
`,"../dsa-notes/Sum of Left Leaves.md":`---
link: https://leetcode.com/problems/sum-of-left-leaves/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "at each node, if left child is a leaf add it, else recurse into it"
time: "O(n)"
space: "O(h)"
date: 2023-03-11
---

# Problem
Sum of all left leaves.

# Approach
## DFS
If \`left\` is a leaf, add it. Else recurse left. Always recurse right.

### Code
\`\`\`cpp
int sumOfLeftLeaves(TreeNode *root)
{
    int sum = 0;
    if (root == NULL)
        return 0;
    if (root->left != NULL)
    {
        if (root->left->left == NULL && root->left->right == NULL)
            sum += root->left->val;
        else
            sum += sumOfLeftLeaves(root->left);
    }
    sum += sumOfLeftLeaves(root->right);
    return sum;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Sum of Two Integers.md":`---
link: https://leetcode.com/problems/sum-of-two-integers/
difficulty: Medium
topics:
  - "[[Bit Manipulation]]"
  - "[[Recursion]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "a ^ b is the sum without carry, (a & b) << 1 is the carry. repeat until carry is 0"
time: "O(1)"
space: "O(1)"
date: 2026-08-23
---

# Problem
Add two ints without \`+\` or \`-\`.

# Approach
\`a ^ b\` = sum ignoring carries, \`(a & b) << 1\` = the carries. Repeat until no carry. Cast to \`unsigned\` before shifting, signed overflow on \`<<\` is UB before C++20.

## Iterative

### Code
\`\`\`cpp
class Solution {
public:
    int getSum(int a, int b) {
        while (b != 0) {
            int carry = (unsigned int)(a & b) << 1;
            a = a ^ b;
            b = carry;
        }
        return a;
    }
};
\`\`\`

### Complexity
- Time: $O(1)$, at most 32 steps
- Space: $O(1)$

## Recursive
Mistake I made: folding sum and carry into one do-while with a stale carry. \`2 + 3\` gave 1.

### Code
\`\`\`cpp
class Solution {
public:
    int getSum(int a, int b) {
        if (b == 0) return a;
        return getSum(a ^ b, (unsigned int)(a & b) << 1);
    }
};
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(1)$

## Full Adder, Bit by Bit
Per bit: sum bit = \`a ^ b ^ carry\`, carry = majority of the three.

### Code
\`\`\`cpp
class Solution {
public:
    int getSum(int a, int b) {
        int result = 0;
        int carry = 0;
        for (int i = 0; i < 32; i++) {
            int bitA = (a >> i) & 1;
            int bitB = (b >> i) & 1;
            int sumBit = bitA ^ bitB ^ carry;
            carry = (bitA & bitB) | (bitB & carry) | (bitA & carry);
            result |= (sumBit << i);
        }
        return result;
    }
};
\`\`\`

### Complexity
- Time: $O(1)$
- Space: $O(1)$
`,"../dsa-notes/Surrounded Regions.md":`---
link: https://leetcode.com/problems/surrounded-regions/
difficulty: Medium
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
  - "[[BFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "flood fill from border O's, everything else that's O gets captured"
time: "O(m * n)"
space: "O(m * n)"
date: 2026-08-29
---

# Problem
Flip every \`O\` region not touching the border to \`X\`.

# Approach
Border-connected \`O\`s survive. Flood from the border, flip the rest.

## DFS with Visited

### Code
\`\`\`cpp
void dfs(int i, int j, vector<vector<char>>& board, vector<vector<bool>>& visited) {
    if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size())
        return;
    if (board[i][j] == 'X')
        return;
    if (!visited[i][j]) {
        visited[i][j] = true;
        dfs(i + 1, j, board, visited);
        dfs(i - 1, j, board, visited);
        dfs(i, j + 1, board, visited);
        dfs(i, j - 1, board, visited);
    }
}

void solve(vector<vector<char>>& board) {
    int m = board.size();
    int n = board[0].size();
    vector<vector<bool>> visited(m, vector<bool>(n, 0));

    for (int i = 0; i < m; i++) {
        if (board[i][0] == 'O' && !visited[i][0]) dfs(i, 0, board, visited);
        if (board[i][n - 1] == 'O' && !visited[i][n - 1]) dfs(i, n - 1, board, visited);
    }
    for (int j = 0; j < n; j++) {
        if (board[0][j] == 'O' && !visited[0][j]) dfs(0, j, board, visited);
        if (board[m - 1][j] == 'O' && !visited[m - 1][j]) dfs(m - 1, j, board, visited);
    }

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            board[i][j] = visited[i][j] ? 'O' : 'X';
}
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(mn)$

## DFS with In-Place Marking
Mark survivors as \`#\`, then \`O -> X\` and \`# -> O\`.

### Code
\`\`\`cpp
void dfs(vector<vector<char>>& board, int i, int j) {
    if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) return;
    if (board[i][j] == 'X' || board[i][j] == '#') return;

    board[i][j] = '#';
    dfs(board, i + 1, j);
    dfs(board, i, j + 1);
    dfs(board, i - 1, j);
    dfs(board, i, j - 1);
}

void solve(vector<vector<char>>& board) {
    int m = board.size();
    int n = board[0].size();

    for (int i = 0; i < n; i++) {
        if (board[0][i] == 'O') dfs(board, 0, i);
        if (board[m - 1][i] == 'O') dfs(board, m - 1, i);
    }
    for (int i = 0; i < m; i++) {
        if (board[i][0] == 'O') dfs(board, i, 0);
        if (board[i][n - 1] == 'O') dfs(board, i, n - 1);
    }

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (board[i][j] == 'O') board[i][j] = 'X';
            else if (board[i][j] == '#') board[i][j] = 'O';
        }
    }
}
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(mn)$ stack
`,"../dsa-notes/Symmetric Tree.md":`---
link: https://leetcode.com/problems/symmetric-tree/
difficulty: Easy
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "mirror check: t1->left vs t2->right and t1->right vs t2->left"
time: "O(n)"
space: "O(h)"
date: 2023-01-12
---

# Problem
Is the tree a mirror of itself?

# Approach
## Mirror DFS
Like [[Same Tree]] but compare crossed children.

### Code
\`\`\`cpp
bool isMirror(TreeNode *t1, TreeNode *t2)
{
    if (t1 == NULL && t2 == NULL)
        return true;
    if (t1 == NULL || t2 == NULL)
        return false;
    return (t1->val == t2->val) && isMirror(t1->left, t2->right) && isMirror(t1->right, t2->left);
}
bool isSymmetric(TreeNode *root)
{
    if (root == NULL)
        return true;
    return isMirror(root->left, root->right);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Target Sum.md":`---
link: https://leetcode.com/problems/target-sum/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "P - N = target, P + N = sum, so count subsets with sum (sum + target) / 2"
time: "O(n * sum)"
space: "O(n * sum)"
date: 2026-09-01
---

# Problem
Ways to put \`+\` or \`-\` on each number to reach \`target\`.

# Approach
\`P - N = target\`, \`P + N = sum\`, so \`P = (sum + target) / 2\`. Count subsets summing to \`P\`, like [[Partition Equal Subset Sum]] with \`+\` instead of \`||\`.

## Recursion

### Code
\`\`\`cpp
class Solution {
public:
    int solve(vector<int>& nums, int ind, int sum, int target) {
        if (nums.size() == ind && sum == target)
            return 1;
        else if (ind == nums.size())
            return 0;

        return solve(nums, ind + 1, sum - nums[ind], target) +
               solve(nums, ind + 1, sum + nums[ind], target);
    }

    int findTargetSumWays(vector<int>& nums, int target) {
        return solve(nums, 0, 0, target);
    }
};
\`\`\`

### Complexity
- Time: $O(2^n)$
- Space: $O(n)$

## Subset Sum Count
\`target = abs(target)\`. Odd \`sum + target\` means 0 ways. \`dp[i][j] = dp[i-1][j] + dp[i-1][j - nums[i-1]]\`.

### Code
\`\`\`cpp
class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int target) {
        int range = accumulate(nums.begin(), nums.end(), 0);

        target = abs(target);

        if ((range + target) % 2 != 0) return 0;
        int sum = (range + target) / 2;

        vector<vector<int>> dp(nums.size() + 1, vector<int>(sum + 1, 0));
        dp[0][0] = 1;

        for (int i = 1; i <= nums.size(); i++) {
            for (int j = 0; j <= sum; j++) {
                if (nums[i - 1] <= j) {
                    dp[i][j] = dp[i - 1][j - nums[i - 1]] + dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        return dp[nums.size()][sum];
    }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot sum)$
- Space: $O(n \\cdot sum)$
`,"../dsa-notes/Tetrahedron.md":`---
link: https://codeforces.com/problemset/problem/166/E
rating: 1500
contest: Codeforces Round 113 (Div 2)
topics:
  - "[[Dynamic Programming]]"
  - "[[Math]]"
source: CodeForces
star: true
mastery: yellow
review: 2026-10-27
insight: "A, B, C are symmetric so the state is just at D or not. d' = o, o' = 3d + 2o"
time: "O(n)"
space: "O(1)"
date: 2026-10-20
code: "[[CodeForces/E_Tetrahedron.cpp]]"
---

# Problem
Ant starts at D on a tetrahedron, moves along an edge each step. Count ways to be back at D after n steps, mod 1e9+7. n up to 1e7.

# Observation
Only D vs not D matters. d = ways at D, o = ways at any of A, B, C.
- D to not D: 3 moves. Not D to D: 1 move. Not D to not D: 2 moves.
- So d' = o, o' = 3d + 2o. Start d = 1, o = 0. Two variables, no 1e7 array.
- Closed form: (3^n + 3(-1)^n) / 4.

Traps:
- \`#define mod 1e9 + 7\` is a double, \`%\` won't compile. Use \`const ll mod\`.
- Helpers took \`int\`, 3d overflowed. Samples passed, n = 100 was wrong. Use ll everywhere.
`,"../dsa-notes/Time Based Key-Value Store.md":`---
link: https://leetcode.com/problems/time-based-key-value-store/
difficulty: Medium
topics:
  - "[[Hash Maps]]"
  - "[[Binary Search]]"
source: Leetcode
star: false
blind75: false
mastery: green
review: 2026-11-15
insight: "map key -> vector of (timestamp, value), timestamps arrive increasing so push_back keeps it sorted, get binary searches the last timestamp <= t"
time: "O(1) set, O(log n) get"
space: "O(n)"
date: 2026-11-08
---

# Problem
\`set(key, value, timestamp)\` and \`get(key, timestamp)\` returning the value with the largest stored timestamp <= the query, or \`""\`.

# Approach
## Map of sorted histories + binary search
Timestamps for a key only increase, so each history is already sorted. \`get\` is a "last index where timestamp <= t" search.

- \`map[key]\` in \`get\` inserts an empty entry for a missing key. Use \`find\`
- Save the best index and copy the string once at the end
- Pass \`key\` and \`value\` by \`const string&\`
- Can't beat O(log n) for \`get\`, it is a predecessor search

### Code
\`\`\`cpp
class TimeMap {
    unordered_map<string, vector<pair<int, string>>> map;

public:
    void set(string key, string value, int timestamp) {
        map[key].push_back({timestamp, value});
    }

    string get(string key, int timestamp) {
        auto& values = map[key];
        int l = 0, r = values.size() - 1;
        string result = "";
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (values[m].first <= timestamp) {
                result = values[m].second;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return result;
    }
};
\`\`\`

### Complexity
- Time: $O(1)$ for \`set\`, $O(\\log n)$ for \`get\`
- Space: $O(n)$
`,"../dsa-notes/Time Needed to Inform All Employees.md":`---
link: https://leetcode.com/problems/time-needed-to-inform-all-employees/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "build manager -> reports tree, DFS from head, time = informTime + max over children"
time: "O(n)"
space: "O(n)"
date: 2023-04-07
---

# Problem
Time for news from the head to reach every employee.

# Approach
## DFS on the Tree
Map each manager to their reports. DFS from \`headID\`: time = \`informTime[u] + max(child times)\`.

### Code
\`\`\`cpp
int dfs(int headID, vector<int> &informTime, unordered_map<int, vector<int>> &m)
{
    int max_time = 0;
    for (int child : m[headID])
    {
        max_time = max(max_time, dfs(child, informTime, m));
    }
    return informTime[headID] + max_time;
}

int numOfMinutes(int n, int headID, vector<int> &manager, vector<int> &informTime)
{
    unordered_map<int, vector<int>> m;
    for (int i = 0; i < n; i++)
    {
        if (i == headID)
        {
            continue;
        }
        m[manager[i]].push_back(i);
    }
    return dfs(headID, informTime, m);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Top K Frequent Elements.md":`---
link: https://leetcode.com/problems/top-k-frequent-elements/
difficulty: Medium
topics:
  - "[[Arrays]]"
  - "[[Hash Maps]]"
  - "[[Heap]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "count freq, then min heap of size k or bucket by frequency"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
The \`k\` most frequent elements.

# Approach
## Map + Sort
Count, sort by frequency, take \`k\`.

### Code
\`\`\`cpp
vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for(int num : nums)
        freq[num]++;

    vector<pair<int, int>> freqVec(freq.begin(), freq.end());

    sort(freqVec.begin(), freqVec.end(), [](auto& a, auto& b){
        return a.second > b.second;
    });

    vector<int> ans;
    for(int i = 0; i < k; i++)
        ans.push_back(freqVec[i].first);

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n + m \\log m)$
- Space: $O(m)$

## Min Heap
Heap of size \`k\` keyed by frequency.

### Code
\`\`\`cpp
vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> map;
    for(auto i: nums){
        map[i]++;
    }

    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> minHeap;

    for(auto& [value, freq]: map){
        minHeap.push({freq, value});
        if (minHeap.size() > k)
            minHeap.pop();
    }

    vector<int> ans;
    while(!minHeap.empty()){
        ans.push_back(minHeap.top().second);
        minHeap.pop();
    }
    reverse(ans.begin(), ans.end());

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n + m \\log k)$
- Space: $O(m)$

## Bucket Sort
Bucket \`i\` holds values with frequency \`i\`. Walk buckets from the top.

### Code
\`\`\`cpp
vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map <int, int> map;
    for(auto i: nums){
        map[i]++;
    }
    int n = nums.size();
    vector<vector<int>> buckets(n+1);
    for(auto& [value, freq]: map){
        buckets[freq].push_back(value);
    }
    vector<int> ans;
    for(int i = n; i >= 0 && ans.size() < k; i--){
        for(auto num: buckets[i]){
            ans.push_back(num);
            if(ans.size() == k)
                break;
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Topological Sort (DFS).md":`---
link: https://www.geeksforgeeks.org/problems/topological-sort/1
difficulty: Easy
topics:
  - "[[Graphs]]"
  - "[[DFS]]"
  - "[[Topological Sort]]"
source: GFG
star: false
blind75: false
mastery:
review:
insight: "DFS, push a node on the stack after all its neighbours are done, pop for the order"
time: "O(V + E)"
space: "O(V)"
date: 
---

# Problem
Any topological order of a DAG.

# Approach
## DFS + Stack
Push a node after its DFS finishes, all its descendants are already on the stack. Pop everything. BFS version: [[Kahn's Algorithm]].

### Code
\`\`\`cpp
void dfs(int node, vector<int> adj[],vector<bool> &visited, stack<int> &st){
    visited[node] = true;
    for(auto i : adj[node]){
        if(!visited[i]){
            dfs(i, adj, visited, st);
        }
    }
    st.push(node);
}

//Function to return list containing vertices in Topological order. 
vector<int> topoSort(int V, vector<int> adj[]) 
{
    vector<bool> visited(V, 0);
    stack<int> st;

    for(int i = 0; i < V; i++){
        if(!visited[i]){
            dfs(i, adj, visited, st);
        }
    }
    vector<int> ans;
    while(!st.empty()){
        ans.push_back(st.top());
        st.pop();
    }

    return ans;
    // code here
}
\`\`\`

### Complexity
- Time: $O(V + E)$
- Space: $O(V)$
`,"../dsa-notes/Trapping Rain Water.md":`---
link: https://leetcode.com/problems/trapping-rain-water/
difficulty: Hard
topics:
  - "[[Arrays]]"
  - "[[Two Pointers]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "water at i = min(prefix max, suffix max) - h[i]"
time: "O(n)"
space: "O(1)"
date: 2026-05-19
---

# Problem
Water trapped between bars.

# Approach
Water at \`i\` = \`min(max left, max right) - h[i]\`.

## Prefix and Suffix Max

### Code
\`\`\`cpp
int trap(vector<int>& height) {
    int n = height.size();
    vector<int> pre(n, 0), suf(n, 0);
    pre[0] = height[0];
    suf[n - 1] = height[n - 1];
    for (int i = 1; i < n; i++) {
        pre[i] = max(pre[i - 1], height[i - 1]);
    }

    for (int i = n - 2; i >= 0; i--) {
        suf[i] = max(suf[i + 1], height[i + 1]);
    }

    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (pre[i] != 0 && suf[i] != 0 && height[i] < min(pre[i], suf[i]))
            ans += min(pre[i], suf[i]) - height[i];
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$

## Scan Both Sides
For each \`i\`, find the max on each side. $O(n^2)$.

### Code
\`\`\`cpp
int trap(vector<int>& height) {
    int n = height.size();
    int l = 0, ans = 0;

    while (l < n) {
        while (l < n && height[l] == 0)
            l++;
        if (l >= n)
            break;

        int r = l + 1;
        int maxr = 0, pr = l;

        while (r < n) {
            if (height[r] >= maxr) {
                maxr = height[r];
                pr = r;
            }
            if (height[r] < height[l])
                r++;
            else
                break;
        }

        for (int p = l + 1; p < pr; p++)
            ans += min(height[l], maxr) - height[p];

        // if scan exhausted and found something beyond l, continue from pr
        if (pr > l && pr != r)
            l = pr;
        else
            l = r;
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(1)$

## Two Pointers
The smaller side is always the limit. Compute water on that side and move it in.

### Code
\`\`\`cpp
int trap(vector<int>& height) {
    int n = height.size();
    int l = 0, r = n - 1, ans = 0;
    int leftMax = height[l], rightMax = height[r];
    while (l < r) {
        leftMax = max(leftMax, height[l]);
        rightMax = max(rightMax, height[r]);
        if (leftMax < rightMax) {
            ans += leftMax - height[l++];
        } else {
            ans += rightMax - height[r--];
        }
    }

    return ans;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Triangle.md":`---
link: https://leetcode.com/problems/triangle/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "start from the last row, t[j] = val + min(t[j], t[j+1]) going up"
time: "O(n²)"
space: "O(n)"
date: 2023-03-11
---

# Problem
Min path sum from top to bottom of a triangle.

# Approach
## Bottom-Up 1D
Copy the last row, go up: \`t[j] = triangle[i][j] + min(t[j], t[j+1])\`. Answer \`t[0]\`.

### Code
\`\`\`cpp
int minimumTotal(vector<vector<int>> &triangle)
{
    vector<int> t(triangle.back());
    for (int i = triangle.size() - 2; i >= 0; i--)
    {
        for (int j = 0; j<= triangle[i].size() - 1; j++)
        {
            t[j] = triangle[i][j] + min(t[j], t[j+1]);
        }
    }
    return t[0];
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$
`,"../dsa-notes/Two Sum II - Input Array Is Sorted.md":`---
link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
difficulty: Medium
topics:
  - "[[Arrays]]"
  - "[[Binary Search]]"
  - "[[Two Pointers]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "two pointers from both ends, move left if sum is small, right if big"
time: "O(n)"
space: "O(1)"
date: 2026-05-18
---

# Problem
Two Sum on a sorted array, O(1) space.

# Approach
## Binary Search
Fix \`l\`, binary search \`target - numbers[l]\` on the right.

### Code
\`\`\`cpp
vector<int> twoSum(vector<int>& numbers, int target) {
    int n = numbers.size();
    for (int l = 0; l < n - 1; l++) {
        int t = target - numbers[l];
        if (numbers[l] > t)
            break;

        int r = l + 1, e = n - 1;
        while (r <= e) {
            int m = r + (e - r) / 2;
            if (numbers[m] == t)
                return {l + 1, m + 1};
            else if (numbers[m] < t)
                r = m + 1;
            else
                e = m - 1;
        }
    }
    return {};
}
\`\`\`

### Complexity
- Time: $O(n \\log n)$
- Space: $O(1)$

## Two Pointers
Start at both ends. Sum too small, move left. Too big, move right.

### Code
\`\`\`cpp
vector<int> twoSum(vector<int>& numbers, int target) {
    int n = numbers.size();
    int l = 0, r = n - 1;

    while (l <= r) {
        if (numbers[l] + numbers[r] == target)
            return {l + 1, r + 1};
        else if (numbers[l] + numbers[r] > target)
            r--;
        else
            l++;
    }

    return {};
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Two Sum.md":`---
link: https://leetcode.com/problems/two-sum/
difficulty: Easy
topics:
  - "[[Arrays]]"
  - "[[Hash Maps]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "map value -> index, check target - x before inserting x"
time: "O(n)"
space: "O(n)"
date: 
---

# Problem
Indices of two numbers summing to \`target\`.

# Approach
## Hash Map
For each \`x\`, check if \`target - x\` was seen, then store \`x\`.

### Code
\`\`\`cpp
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    int n = nums.size();
    for(int i = 0; i < n; i++){
        if(map.find(target - nums[i]) != map.end())
            return {map[target - nums[i]],i};
        map[nums[i]] = i;
    }
    return {};
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Uncrossed Lines.md":`---
link: https://leetcode.com/problems/uncrossed-lines/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "it's LCS on the two arrays"
time: "O(n * m)"
space: "O(n * m)"
date: 2023-08-15
---

# Problem
Max non-crossing lines between equal numbers of two arrays.

# Approach
## LCS
Exactly [[Longest Common Subsequence]].

### Code
\`\`\`cpp
int maxUncrossedLines(vector<int> &nums1, vector<int> &nums2)
{
    int n = nums1.size();
    int m = nums2.size();

    vector<vector<int>> t(n + 1, vector<int>(m + 1));
    for(int i = 0; i < n+1; i++){
        for(int j = 0; j < m+1; j++){
            if(i == 0 || j == 0)
                t[i][j] = 0;
            else{
                if(nums1[i-1] == nums2[j-1])
                    t[i][j] = t[i-1][j-1] + 1;
                else
                    t[i][j] = max(t[i-1][j], t[i][j-1]);
            }
        }
    }

    return t[n][m];
}
\`\`\`

### Complexity
- Time: $O(n \\cdot m)$
- Space: $O(n \\cdot m)$
`,"../dsa-notes/Unique Binary Search Trees II.md":`---
link: https://leetcode.com/problems/unique-binary-search-trees-ii/
difficulty: Medium
topics:
  - "[[Recursion]]"
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "each i as root, combine every left tree from [l, i-1] with every right from [i+1, r]"
time: "O(4^n / √n)"
space: "O(4^n / √n)"
date: 
---

# Problem
All structurally unique BSTs with values \`1..n\`.

# Approach
## Memoized Recursion
Each \`i\` is the root. Combine every left tree from \`[l, i-1]\` with every right tree from \`[i+1, r]\`. Cache by \`(l, r)\`.

### Code
\`\`\`cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<TreeNode*> allPossibleBST(int start, int end, map<pair<int, int>, vector<TreeNode*>> &t){
        vector<TreeNode*> res;
        if(start > end){
            res.push_back(nullptr);
            return res;
        }
        if(t.find(make_pair(start,end)) != t.end()){
            return t[make_pair(start, end)];
        }
        for(int i = start; i <= end; i++){
            vector<TreeNode*> leftSubtrees = allPossibleBST(start, i-1, t);
            vector<TreeNode*> rightSubtrees = allPossibleBST(i+1, end, t);
            for(auto left: leftSubtrees){
                for(auto right: rightSubtrees){
                    TreeNode* root = new TreeNode(i, left, right);
                    res.push_back(root);
                }
            }
        }

        return t[make_pair(start, end)] = res;
    }

    vector<TreeNode*> generateTrees(int n) {
        map<pair<int, int>, vector<TreeNode*>> t;
        return allPossibleBST(1,n,t);
    }
};
\`\`\`

### Complexity
- Time: $O(4^n / \\sqrt{n})$, Catalan
- Space: $O(4^n / \\sqrt{n})$

## Tabulation
\`t[i][j]\` = all trees on \`i..j\`. \`i == j\` is a single node.

### Code
\`\`\`cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<TreeNode*> generateTrees(int n) {
        vector<vector<vector<TreeNode*>>> t(n+1, vector(n+1, vector<TreeNode*>(0)));
        for(int i = 1; i <= n; i++){
            t[i][i].push_back(new TreeNode(i));
        }
        for(int numNodes = 2; numNodes <= n; numNodes++){
            for(int start = 1; start <= n - numNodes + 1; start++){
                int end = numNodes + start - 1;
                for(int i = start; i<= end; i++){
                    vector<TreeNode*> leftTree = (i-1 >= start)?t[start][i-1]:vector<TreeNode*> ({NULL});
                    vector<TreeNode*> rightTree = (i+1<=end)? t[i+1][end]:vector<TreeNode*> ({NULL});

                    for(auto left : leftTree){
                        for(auto right: rightTree){
                            t[start][end].push_back(new TreeNode(i, left, right));
                        }
                    }
                }
            }
        }

        return t[1][n];
    }
};
\`\`\`

### Complexity
- Time: $O(4^n / \\sqrt{n})$
- Space: $O(4^n / \\sqrt{n})$
`,"../dsa-notes/Unique Binary Search Trees.md":`---
link: https://leetcode.com/problems/unique-binary-search-trees/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
source: Leetcode
star: true
blind75: false
mastery:
review:
insight: "catalan: dp[n] = sum dp[i-1] * dp[n-i]"
time: "O(n²)"
space: "O(n)"
date: 
---

# Problem
Number of unique BSTs with \`n\` nodes.

# Approach
## Catalan
Root \`i\` leaves \`i - 1\` nodes on the left and \`n - i\` on the right: \`t[n] = sum t[i-1] * t[n-i]\`. See [[Catalan's Number]].

### Code
\`\`\`cpp
int numTrees(int n) {
    vector<int>t (n+1, 1);

    for(int i = 2; i < n+1; i++){
        int total = 0;
        for(int j = 1; j <= i; j++){
            total += t[j-1]*t[i-j];
        }
        t[i] = total;
    }

    return t[n];
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$
`,"../dsa-notes/Unique Paths 2.md":`---
link: https://leetcode.com/problems/unique-paths-ii/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "1D dp from the bottom-right, t[j] += t[j+1], obstacle cells are 0"
time: "O(m * n)"
space: "O(n)"
date: 2023-06-02
---

# Problem
Count right/down paths in a grid with obstacles.

# Approach
## 1D DP
[[Unique Paths]] rolling array from the bottom-right. Obstacle cell = 0.

### Code
\`\`\`cpp
int uniquePathsWithObstacles(vector<vector<int>> &obstacleGrid)
{
    int m = obstacleGrid.size();
    int n = obstacleGrid[0].size();

    vector<int> t(n, 0);
    t[n - 1] = 1;
    for (int i = m - 1; i >= 0; i--)
        for (int j = n - 1; j >= 0; j--)
        {
            if (obstacleGrid[i][j])
                t[j] = 0;
            else if (j + 1 < n)
                t[j] += t[j + 1];
        }
    return t[0];
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n)$
- Space: $O(n)$
`,"../dsa-notes/Unique Paths.md":`---
link: https://leetcode.com/problems/unique-paths/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
  - "[[Math]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "dp[j] += dp[j-1] row by row, or C(m+n-2, m-1)"
time: "O(min(m,n))"
space: "O(1)"
date: 2026-08-22
---

# Problem
Count right/down paths from top-left to bottom-right.

# Approach
\`dp[i][j] = dp[i-1][j] + dp[i][j-1]\`, top row and left column are 1.

## Backtracking
Build every path as a string in a set. Exponential.

### Code
\`\`\`cpp
void backtrack(int m, int n, string &path, set<string> &paths, int size)
{
    if (path.size() == size)
    {
        paths.insert(path);
    }
    else
    {
        if (m > 1)
        {
            path.push_back(1);
            backtrack(m - 1, n, path, paths, size);
            path.pop_back();
        }
        if (n > 1)
        {
            path.push_back(0);
            backtrack(m, n - 1, path, paths, size);
            path.pop_back();
        }
    }
}
\`\`\`

## 2D Table

### Code
\`\`\`cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m, vector<int>(n, 0));
        for (int i = 0; i < n; i++) dp[0][i] = 1;
        for (int i = 0; i < m; i++) dp[i][0] = 1;

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];
    }
};
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(mn)$

## 1D Rolling
\`dp[j] += dp[j-1]\`. Still works with obstacles, unlike the formula.

- Every path has \`m-1\` downs and \`n-1\` rights. Equal only on a square grid
- "Permutations" overcounts, the \`D\`s and \`R\`s are identical. Choose which of the \`m+n-2\` steps are downs: \`C(m+n-2, m-1)\`
- Backwards version: start \`dp\` as all \`1\` (last row), then \`dp[j] += dp[j+1]\` from \`j = n-2\` down. No new vector per row

### Code
\`\`\`cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<int> dp(n, 1);
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] = dp[j] + dp[j - 1];
            }
        }
        return dp[n - 1];
    }
};
\`\`\`

### Complexity
- Time: $O(mn)$
- Space: $O(n)$

## Combinatorics
\`C(m+n-2, m-1)\`. Multiply then divide by \`i\` each step to stay exact.

### Code
\`\`\`cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
        long long result = 1;
        int total = m + n - 2;
        int k = min(m, n) - 1;
        for (int i = 1; i <= k; i++) {
            result = result * (total - k + i) / i;
        }
        return (int)result;
    }
};
\`\`\`

### Complexity
- Time: $O(\\min(m, n))$
- Space: $O(1)$
`,"../dsa-notes/Valid Anagram.md":`---
link: https://leetcode.com/problems/valid-anagram/
difficulty: Easy
topics:
  - "[[Hash Maps]]"
  - "[[Strings]]"
  - "[[Arrays]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "equal lengths and equal 26-count arrays"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Is \`t\` an anagram of \`s\`?

# Approach
## Map

### Code
\`\`\`cpp
bool isAnagram(string s, string t) {
    int n = s.size(), m = t.size();
    if(n != m)
        return false;

    unordered_map<char, int> map;
    for(int i = 0; i < n; i++){
        map[s[i]] += 1;
        map[t[i]] -= 1;
    }

    for(auto i = map.begin(); i != map.end(); i++){
        if(i->second != 0)
            return false;
    }

    return true;
}
\`\`\`

## Count Array
Lowercase only, so a 26 array is faster.

### Code
\`\`\`cpp
bool isAnagram(string s, string t) {
    int n = s.size(), m = t.size();
    if(n != m) return false;

    int count[26] = {0};
    for(int i = 0; i < n; i++){
        count[s[i] - 'a'] += 1;
        count[t[i] - 'a'] -= 1;
    }

    for(auto i: count){
        if(i != 0)
            return false;
    }

    return true;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Valid Palindrome.md":`---
link: https://leetcode.com/problems/valid-palindrome/
difficulty: Easy
topics:
  - "[[Strings]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "two pointers, skip non-alphanumerics, compare lowercase"
time: "O(n)"
space: "O(1)"
date: 
---

# Problem
Palindrome check ignoring case and non-alphanumerics.

# Approach
## Two Pointers
Skip non-alphanumeric chars from both ends, compare lowercased.

### Code
\`\`\`cpp
bool check(char c){
    if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9')
        return true;
    return false;
}

char convert(char c){
    if(c >= 'A' && c <= 'Z')
        return c - 'A' + 'a';
    return c;
}

bool isPalindrome(string s) {
    int left = 0; 
    int right = s.size()-1;
    while(left < right){
        if(!check(s[left])){
            left++;
            continue;
        }
        if(!check(s[right])){
            right--;
            continue;
        }
        if(convert(s[left++]) != convert(s[right--]))
            return false;
    }
    return true;
}
\`\`\`

## STL
Same with \`isalnum\` and \`tolower\`.

### Code
\`\`\`cpp
bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;

        if (tolower(s[left]) != tolower(s[right]))
            return false;

        left++;
        right--;
    }
    return true;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(1)$
`,"../dsa-notes/Valid Parentheses.md":`---
link: https://leetcode.com/problems/valid-parentheses/
difficulty: Easy
topics:
  - "[[Stack]]"
  - "[[Strings]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "push openers, a closer must match the top, stack empty at the end"
time: "O(n)"
space: "O(n)"
date: 2022-12-10
---

# Problem
Are the brackets balanced and correctly nested?

# Approach
## Stack
Push openers. A closer needs a matching top, else false. Empty stack at the end.

### Code
\`\`\`cpp
bool isValid(string s)
{
    stack<char> st;
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{')
        {
            st.push(s[i]);
        }
        else
        {
            if (!st.empty())
            {
                if (s[i] == ')')
                {
                    if (st.top() == '(')
                        st.pop();
                    else
                        return false;
                }
                if (s[i] == ']')
                {
                    if (st.top() == '[')
                        st.pop();
                    else
                        return false;
                }
                if (s[i] == '}')
                {
                    if (st.top() == '{')
                        st.pop();
                    else
                        return false;
                }
            }
            else
                return false;
        }
    }
    if (st.empty())
        return true;
    else
        return false;
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Valid Parenthesis String.md":`---
link: https://leetcode.com/problems/valid-parenthesis-string/
difficulty: Medium
topics:
  - "[[Greedy]]"
  - "[[Dynamic Programming]]"
  - "[[Strings]]"
source: Leetcode
star: true
blind75: false
mastery: red
review: 2026-11-09
insight: "track the range [lo, hi] of possible open counts, * widens it, hi < 0 fails, floor lo at 0, answer lo == 0"
time: "O(n)"
space: "O(1)"
date: 2026-11-08
---

# Problem
\`(\`, \`)\` and \`*\` where \`*\` is \`(\`, \`)\` or empty. Can the string be valid?

# Approach
## Range of open counts (greedy)
One counter fails because \`*\` has 3 choices. Keep the range of possible open counts instead.
- \`(\`: lo+1, hi+1. \`)\`: lo-1, hi-1. \`*\`: lo-1, hi+1
- hi < 0 at any step: return false
- floor lo at 0 (a \`*\` can be empty instead of \`)\`)
- end: lo == 0

Not written yet. Re-solve this first, I did not fully understand why the range is enough.

- The true cells of each DP row are one contiguous run. lo and hi are its two ends, that is why the table is not needed

## 2D DP
\`dp[i][j]\`: can \`s[i..]\` be completed given \`j\` unmatched \`(\` pending before \`i\`. Base \`dp[n][0] = true\`. Fill \`i\` from \`n-1\` down to 0.

- Table is position x pending opens, not opens x closes. Two counts lose the position, and the future only needs the difference
- Illegal \`)\` at \`j == 0\` is a pruned transition, not a floor. Flooring belongs to the lo/hi version
- Row \`i\` reads row \`i+1\`. Guard \`j+1 <= n\` and \`j >= 1\`

### Code
\`\`\`cpp
bool checkValidString(string s) {
    int n = s.size();
    vector<vector<bool>> dp(n + 1, vector<bool>(n + 1, 0));
    dp[n][0] = true;
    for (int i = n - 1; i >= 0; i--) {
        for (int j = 0; j <= n; j++) {
            if (s[i] == '(') {
                dp[i][j] = (j + 1 <= n) && dp[i + 1][j + 1];
            } else if (s[i] == ')') {
                dp[i][j] = (j >= 1) && dp[i + 1][j - 1];
            } else {
                dp[i][j] = dp[i + 1][j] || ((j >= 1) && dp[i + 1][j - 1]) ||
                           ((j + 1 <= n) && dp[i + 1][j + 1]);
            }
        }
    }
    return dp[0][0];
}
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n^2)$
`,"../dsa-notes/Valid Sudoku.md":`---
link: https://leetcode.com/problems/valid-sudoku/
difficulty: Medium
topics:
  - "[[Arrays]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "check rows, cols and boxes for repeats. box index = (i / 3) * 3 + j / 3"
time: "O(1)"
space: "O(1)"
date: 2026-05-18
---

# Problem
Is a partially filled sudoku board valid?

# Approach
## Check Each Unit
No repeats in any row, column or 3x3 box. Box index \`(i / 3) * 3 + j / 3\`.

### Code
\`\`\`cpp
bool isValidSudoku(vector<vector<char>>& board) {
    int r = board[0].size();
    int c = board.size();
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (board[i][j] == '.')
                continue;
            for (int k = 0; k < c; k++) {
                if (k != i && board[i][j] == board[k][j])
                    return false;
            }

            for (int k = 0; k < r; k++) {
                if (k != j && board[i][j] == board[i][k])
                    return false;
            }

            for (int ii = i / 3 * 3; ii < (i + 3) / 3 * 3; ii++) {
                for (int jj = j / 3 * 3; jj < (j + 3) / 3 * 3; jj++) {
                    if ((ii != i || jj != j) && board[ii][jj] == board[i][j])
                        return false;
                }
            }
        }
    }

    return true;
}
\`\`\`

### Complexity
- Time: $O(1)$, fixed 9x9
- Space: $O(1)$
`,"../dsa-notes/Validate Binary Search Tree.md":`---
link: https://leetcode.com/problems/validate-binary-search-tree/
difficulty: Medium
topics:
  - "[[Trees]]"
  - "[[DFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "pass (lo, hi) bounds down with long, or check inorder is strictly increasing"
time: "O(n)"
space: "O(h)"
date: 2026-06-28
---

# Problem
Is the tree a valid BST?

# Approach
## DFS with Bounds
Pass \`(lo, hi)\` down. Left tightens \`hi\`, right tightens \`lo\`.

Traps:
- Checking only parent and child misses violations of higher ancestors.
- Use \`long\` bounds, values can be \`INT_MIN\` or \`INT_MAX\`.
- Equal to a bound is invalid.

### Code
\`\`\`cpp
bool isValid(TreeNode* root, long lo, long hi) {
    if (!root) return true;
    if (root->val <= lo || root->val >= hi) return false;
    return isValid(root->left, lo, root->val) &&
           isValid(root->right, root->val, hi);
}

bool isValidBST(TreeNode* root) {
    return isValid(root, LONG_MIN, LONG_MAX);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$

## Inorder
Inorder of a BST is strictly increasing. Pass \`prev\` by reference so it carries across calls.

### Code
\`\`\`cpp
bool inorder(TreeNode* root, TreeNode*& prev) {
    if (!root) return true;
    if (!inorder(root->left, prev)) return false;
    if (prev && root->val <= prev->val) return false;
    prev = root;
    return inorder(root->right, prev);
}
bool isValidBST(TreeNode* root) {
    TreeNode* prev = nullptr;
    return inorder(root, prev);
}
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(h)$
`,"../dsa-notes/Way Too Long Words.md":`---
link: https://codeforces.com/problemset/problem/71/A
rating: 800
contest: Codeforces Beta Round 71
topics:
  - "[[Strings]]"
  - "[[Implementation]]"
source: CodeForces
star: false
blind75: false
mastery:
review:
insight: "len > 10 prints first char, len - 2, last char"
time: "O(n)"
space: "O(1)"
date: 2026-09-22
code: "[[CodeForces/A_Way_Too_Long_Words.cpp]]"
---

# Problem
Abbreviate every word longer than 10 chars as first letter, count of letters between, last letter.

# Observation
The count is \`len - 2\`, not \`len\`. Words of exactly 10 stay as they are.
`,"../dsa-notes/What Does the Cow Say.md":`---
link:
rating:
contest:
topics:
  - "[[Greedy]]"
  - "[[Sliding Window]]"
  - "[[Deque]]"
source: CodeForces
star: true
blind75: false
mastery: red
review: 2026-10-20
insight: "every op adds a free '(' at the front. Best is either the front run merged through runs 0..j (S[j] + k, capped n/2) or a middle window i..j with closes between <= k (S[j] - P[i], deque min)"
time: "O(n)"
space: "O(n)"
date: 2026-10-17
code: "[[CodeForces/E_What_Does_the_Cow_Say.cpp]]"
---

# Problem
RBS, op removes an adjacent "()" and wraps the string in "(" ")". At most k ops. Maximize the longest run of '('.

# Observation
Didn't solve this one. Claude wrote it, re-solve on the review date.

Split s into runs: a[i] opens then b[i] closes. Each op removes one '(' and one ')' and puts a new '(' at the front. Two ways to build a long run:
- Front run: delete all closes between run 0 and run j (B[j] ops). Each op takes one '(' out and the wrap puts one back at the front, so the merged run is depth after run j = S[j]. Leftover ops add +1 each at the front. Value S[j] + k, capped at n/2. Only valid if B[j] <= k.
- Middle run: merge runs i..j, costs the closes between them. No front bonus here. Value S[j] - P[i] where P[i] is depth before run i. For each j, minimize P[i] over i with closes between <= k. Two pointers + monotonic deque.

Traps:
- Sample 7 \`()(((()((())))))\` k=1 is a middle run (6). Front only gives 5.
- k can be large, use long long.

\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define mod 1e9 + 7
void solve()
{
    ll n, k;
    cin >> n >> k;
    string s;
    cin >> s;

    // split into runs: a[i] opens followed by b[i] closes
    vector<ll> a, b;
    int i = 0;
    while (i < n)
    {
        int j = i;
        while (j < n && s[j] == '(')
            j++;
        a.push_back(j - i);
        i = j;
        while (j < n && s[j] == ')')
            j++;
        b.push_back(j - i);
        i = j;
    }
    int r = a.size();

    // S[j] = depth after run j, P[j] = depth before run j, B[j] = closes before run j
    vector<ll> S(r), P(r), B(r);
    ll depth = 0, closes = 0;
    for (int j = 0; j < r; j++)
    {
        P[j] = depth;
        B[j] = closes;
        depth += a[j];
        S[j] = depth;
        depth -= b[j];
        closes += b[j];
    }

    ll best = 0;

    // front run: merge runs 0..j, every op also adds a '(' at the front
    for (int j = 0; j < r && B[j] <= k; j++)
        best = max(best, min(n / 2, S[j] + k));

    // middle run: merge runs i..j with closes between <= k, no front bonus
    deque<int> dq;
    for (int j = 0; j < r; j++)
    {
        while (!dq.empty() && P[dq.back()] >= P[j])
            dq.pop_back();
        dq.push_back(j);
        while (B[j] - B[dq.front()] > k)
            dq.pop_front();
        best = max(best, S[j] - P[dq.front()]);
    }

    cout << best << '\\n';
}
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    ll t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
\`\`\`
`,"../dsa-notes/What's the Capital of France.md":`---
link:
rating:
contest:
topics:
  - "[[Bit Manipulation]]"
  - "[[Greedy]]"
source: CodeForces
star: false
blind75: false
mastery:
review:
insight: "max never changes, any a[i] can reach any value in [a[i], max]. Answer is common prefix of min and max, then all 1s"
time: "O(n + log max)"
space: "O(1)"
date: 2026-10-17
code: "[[CodeForces/B_What_s_the_Capital_of_France.cpp]]"
---

# Problem
Operation on adjacent pair raises the lower one by 1. Maximize the OR of the array.

# Observation
The max M never changes and values only go up. The lower neighbour always rises, so the chain from M never breaks and every a[i] can reach any value in [a[i], M]. The min L has the widest range, so only L and M matter.

Above the first bit where L and M differ they share a prefix that can't change. At that bit M has 1 and L has 0, so x = prefix, 0, 111... sits in [L, M]. Answer is M | (2^k - 1) where k is the number of bits below the common prefix.

Mistakes I made:
- Thought the full mask 2^(bits of M) - 1 is always reachable. [5, 4] gives 5 because 2 and 3 are below 4.
- Thought the +1 chain to the max could break. It can't.
- Used \`1 << k\` instead of \`(1 << k) - 1\`. That's a single bit, not k ones, and breaks L == M too.

\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define mod 1e9 + 7
void solve()
{
    int n;
    cin >> n;

    int mini = INT_MAX;
    int maxi = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        mini = min(x, mini);
        maxi = max(x, maxi);
    }

    int tempMax = maxi, tempMin = mini;
    int k = 0;
    while (tempMax != tempMin)
    {
        tempMax /= 2;
        tempMin /= 2;
        k++;
    }

    int toOr = (1 << k) - 1;

    cout << (maxi | toOr) << endl;
}
int main()
{
    ll t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
\`\`\`
`,"../dsa-notes/Word Break.md":`---
link: https://leetcode.com/problems/word-break/
difficulty: Medium
topics:
  - "[[Dynamic Programming]]"
  - "[[Recursion]]"
  - "[[BFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "dp[i] = some j < i with dp[j] and s[j..i) in the dict"
time: "O(n²)"
space: "O(n)"
date: 2026-08-22
---

# Problem
Can \`s\` be split into dictionary words (reuse allowed)?

# Approach
Reachability: index \`i\` is reachable if some reachable \`j\` has \`s[j..i)\` in the dict.

## Memoization
\`solve(start)\` loops over the dict words. Memo with \`find()\`, true and false are both real answers.

### Code
\`\`\`cpp
class Solution {
public:
    unordered_map<int, bool> mp;
    bool solve(string& s, vector<string>& wordDict, int start) {
        if (start >= s.size()) return true;
        if (mp.find(start) != mp.end()) return mp[start];
        for (auto str : wordDict) {
            if (str.size() <= s.size() - start && str == s.substr(start, str.size()) && solve(s, wordDict, start + str.size()))
                return mp[start] = true;
        }

        return mp[start] = false;
    }

    bool wordBreak(string s, vector<string>& wordDict) { return solve(s, wordDict, 0); }
};
\`\`\`

### Complexity
- Time: $O(n \\cdot |dict| \\cdot L)$
- Space: $O(n)$

## Tabulation
\`dp[0] = true\`. For each \`i\`, any \`j\` with \`dp[j]\` and \`s[j..i)\` in a set.

### Code
\`\`\`cpp
class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> dict(wordDict.begin(), wordDict.end());
        int n = s.size();
        vector<bool> dp(n + 1, false);
        dp[0] = true;

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && dict.count(s.substr(j, i - j))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }
};
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$

## BFS
Indices are nodes, a matching word is an edge. Reaching \`n\` means true.

### Code
\`\`\`cpp
class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> words(wordDict.begin(), wordDict.end());
        queue<int> q;
        vector<bool> seen(s.length(), false);
        q.push(0);

        while (!q.empty()) {
            int start = q.front();
            q.pop();

            if (start == s.length()) {
                return true;
            }

            for (int end = start + 1; end <= s.length(); end++) {
                if (seen[end]) {
                    continue;
                }

                if (words.find(s.substr(start, end - start)) != words.end()) {
                    q.push(end);
                    seen[end] = true;
                }
            }
        }

        return false;
    }
};
\`\`\`

### Complexity
- Time: $O(n^2)$
- Space: $O(n)$
`,"../dsa-notes/Word Ladder I.md":`---
link: https://leetcode.com/problems/word-ladder/
difficulty: Hard
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
source: Standard
star: false
blind75: false
mastery: yellow
review: 2026-11-10
insight: "BFS over words, try all 26 letters at each position, erase from the set when visited"
time: "O(N * L^2)"
space: "O(N * L)"
date: 2026-11-07
---

# Problem
Length of the shortest transformation from \`beginWord\` to \`endWord\`, one letter at a time, or 0.

# Approach
## BFS
Each word is a node, one-letter changes are edges. Try all 26 letters at each position, erase words from the set when visited.

Mistakes I made (re-solve 2026-11-07):
- Thought sorting the list finds neighbors. Neighbors can differ at any position, sorted order only groups prefixes.
- Thought the graph is directed so no visited. Edges are symmetric and there are cycles (\`hot\`, \`dot\`, \`lot\`), erasing from the set is the visited.
- Incremented \`count\` per popped word, not per level. Carry the depth with each word (\`{word, depth}\`, start \`beginWord\` at 1).
- Off by one: the answer counts words, not edges.
- \`auto {a, b}\` is invalid, structured bindings use \`auto [a, b]\`. Copy, not \`auto&\`, since the element is popped.
- Restore \`curr[i]\` after trying the 26 letters, and erase on push, not on pop.

Faster: bidirectional BFS (expand the smaller frontier, stop when they meet), or wildcard buckets (\`h*t\` to words). \`if (words.erase(curr))\` does one hash instead of find then erase.

### Code
\`\`\`cpp
int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    unordered_set<string> st;
    for(auto i : wordList)
        st.insert(i);

    queue<pair<string, int>> q;
    q.push({beginWord, 1});
    while(!q.empty()){
        string curr = q.front().first;
        int lev = q.front().second;
        q.pop();

        if(curr == endWord)
            return lev;

        int l = curr.size();
        for(int i = 0; i < l; i++){
            for(int j = 0; j < 26; j++){
                string mod = curr;
                mod[i] = char(j + 'a');
                if(st.find(mod) != st.end()){
                    q.push({mod, lev + 1});
                    st.erase(st.find(mod));
                }
            }
        }
    }
    return 0;
}
\`\`\`

### Complexity
- Time: $O(26 \\cdot N \\cdot L^2)$, each of the \`26 * L\` candidates costs $O(L)$ to build and hash
- Space: $O(N \\cdot L)$
`,"../dsa-notes/Word Ladder II.md":`---
link: https://leetcode.com/problems/word-ladder-ii/
difficulty: Hard
topics:
  - "[[Graphs]]"
  - "[[BFS]]"
  - "[[DFS]]"
source: Standard
star: false
blind75: false
mastery:
review:
insight: "BFS for levels, only erase words after a level ends. DFS back from end to build paths"
time: "O(N * L * 26)"
space: "O(N * L)"
date: 
---

# Problem
All shortest transformation sequences from \`beginWord\` to \`endWord\`.

# Approach
## BFS of Sequences
Continuation of [[Word Ladder I]]. Queue whole sequences. Erase words from the set only after their level finishes, other sequences at the same level may need them.

### Code
\`\`\`cpp
vector<vector<string>> findSequences(string beginWord, string endWord, vector<string>& wordList) {
    // code here
    unordered_set<string> st(wordList.begin(), wordList.end());
    queue<vector<string>> q;
    vector<string> used;
    int level = 0;
    vector<vector<string>> ans;
    q.push({beginWord});
    used.push_back(beginWord);

    while(!q.empty()){
        vector<string> vec = q.front(); q.pop();
        if(vec.size() > level){
            level++;
            for(auto it : used)
                st.erase(it);
        }

        string word = vec.back();
        if(word == endWord){
            if(ans.size() == 0)
                ans.push_back(vec);
            else if(ans[0].size() == vec.size())
                ans.push_back(vec);
        }

        for(int i = 0; i < word.size(); i++){
            for(char j = 'a'; j <= 'z'; j++){
                string mod = word;
                mod[i] = j;
                if(st.count(mod) > 0){
                    vec.push_back(mod);
                    q.push(vec);
                    used.push_back(mod);
                    vec.pop_back();
                }
            }
        }
    }

    return ans;
}
\`\`\`

## BFS Levels + DFS Back
BFS stores each word's level. DFS from \`endWord\` back through words one level lower builds only shortest paths. Avoids storing every partial sequence.

### Code
\`\`\`cpp
unordered_map<string, int> mp;
vector<vector<string>> ans;
string b;

void dfs(string word, vector<string> &seq){
    if(word == b){
        reverse(seq.begin(), seq.end());
        ans.push_back(seq);
        reverse(seq.begin(), seq.end());
        return;
    }

    int sz = word.size();
    int steps = mp[word];

    for(int i = 0; i < sz; i++){
        for(char c = 'a'; c <= 'z'; c++){
            string mod = word;
            mod[i] = c;
            if(mp.find(mod) != mp.end() && mp[word] == mp[mod] + 1){
                seq.push_back(mod);
                dfs(mod, seq);
                seq.pop_back();
            }
        }
    }
}

vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
    b = beginWord;
    unordered_set<string> st(wordList.begin(), wordList.end());
    queue<string> q;
    q.push(beginWord);
    mp[beginWord] = 1;
    st.erase(beginWord);
    while(!q.empty()){
        string curr = q.front(); q.pop();
        int steps = mp[curr];
        if(curr == endWord)
            break;
        int sz = curr.size();
        for(int i = 0; i < sz; i++){
            for(char c = 'a'; c <= 'z'; c++){
                string mod = curr;
                mod[i] = c;
                if(st.find(mod) != st.end()){
                    mp[mod] = steps+1;
                    q.push(mod);
                    st.erase(mod);
                }
            }
        }
    }

    if(mp.find(endWord) != mp.end()){
        vector<string> seq;
        seq.push_back(endWord);
        dfs(endWord, seq);
    }

    return ans;
    }
\`\`\`

### Complexity
- Time: $O(N \\cdot L \\cdot 26)$ for BFS, plus output
- Space: $O(N \\cdot L)$
`,"../dsa-notes/Word Search II.md":`---
link: https://leetcode.com/problems/word-search-ii/
difficulty: Hard
topics:
  - "[[Tries]]"
  - "[[Backtracking]]"
  - "[[DFS]]"
source: Leetcode
star: true
blind75: true
mastery: yellow
review: 2026-11-11
insight: "trie of words, DFS board walking the trie, clear node->word once found"
time: "O(M * N * 3^L)"
space: "O(W * L)"
date: 2026-07-01
---

# Problem
Find all dictionary words on a board.

# Approach
## Trie + DFS
Trie of words, full word stored at the end node. DFS from every cell walking the trie, prune when there's no child. Mark with \`#\`, restore after. Clear \`node->word\` after finding it to dedup.

### Code
\`\`\`cpp
struct TrieNode {
    TrieNode* children[26] = {};
    string word = "";
};

void add(TrieNode* root, string word) {
    TrieNode* node = root;
    for (auto c : word) {
        if (!node->children[c - 'a'])
            node->children[c - 'a'] = new TrieNode();
        node = node->children[c - 'a'];
    }
    node->word = word;
}

void dfs(vector<vector<char>>& board, vector<string>& res, int i, int j, TrieNode* node) {
    if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size()) return;
    char ch = board[i][j];
    if (ch == '#' || !node->children[ch - 'a']) return;
    node = node->children[ch - 'a'];
    if (!node->word.empty()) { res.push_back(node->word); node->word = ""; }
    board[i][j] = '#';
    dfs(board, res, i+1, j, node);
    dfs(board, res, i-1, j, node);
    dfs(board, res, i, j+1, node);
    dfs(board, res, i, j-1, node);
    board[i][j] = ch;
}

vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    TrieNode* root = new TrieNode();
    for (auto w : words) add(root, w);
    vector<string> res;
    for (int i = 0; i < board.size(); i++)
        for (int j = 0; j < board[0].size(); j++)
            dfs(board, res, i, j, root);
    return res;
}
\`\`\`

### Complexity
- Time: $O(W \\cdot L + M \\cdot N \\cdot 4^L)$
- Space: $O(W \\cdot L)$

## Trie + DFS with Pruning
DFS returns the node or nullptr. Parent drops a child with no children and no word. Faster in practice.

### Code
\`\`\`cpp
TrieNode* dfs(vector<vector<char>>& board, vector<string>& res, int i, int j, TrieNode* node) {
    if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size()) return node;
    char ch = board[i][j];
    if (ch == '#' || !node->children[ch - 'a']) return node;

    TrieNode* next = node->children[ch - 'a'];
    if (!next->word.empty()) { res.push_back(next->word); next->word = ""; }

    board[i][j] = '#';
    next = dfs(board, res, i+1, j, next);
    next = dfs(board, res, i-1, j, next);
    next = dfs(board, res, i, j+1, next);
    next = dfs(board, res, i, j-1, next);
    board[i][j] = ch;

    // prune if leaf with no word
    bool canPrune = next->word.empty();
    for (int k = 0; k < 26; k++) if (next->children[k]) { canPrune = false; break; }
    if (canPrune) { delete next; node->children[ch - 'a'] = nullptr; }
    return node;
}

vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    TrieNode* root = new TrieNode();
    for (auto w : words) add(root, w);
    vector<string> res;
    for (int i = 0; i < board.size(); i++)
        for (int j = 0; j < board[0].size(); j++)
            dfs(board, res, i, j, root);
    return res;
}
\`\`\`

### Complexity
- Time: same, faster in practice
- Space: $O(W \\cdot L)$

## Re-solve: Trie + DFS with a visited array
Same idea, \`visited\` instead of marking the board. Word stored at the end node, cleared when found. After the 4 calls, if the node has no word and no children, cut it from its parent (\`parent->next[c] = nullptr\`).

- Not multi-source BFS. Visited depends on the path, BFS can't carry it
- DFS per word works for Word Search I, here it redoes shared prefixes. W * M*N*4^L
- A cell can belong to several words. Visited is per path, so unmark on the way back or you lose words
- Check the dead node after the recursion, children get cut first
- Per start cell the paths are 4 * 3^(L-1), not 4^L, you can't step back

### Code
\`\`\`cpp
struct TrieNode {
    string word;
    vector<TrieNode*> next = vector<TrieNode*>(26, nullptr);
};
// search(board, node, visited, ans, i, j)
if (!node->next[board[i][j] - 'a']) return;
visited[i][j] = true;
TrieNode* parent = node;
node = node->next[board[i][j] - 'a'];
if (node->word != "") { ans.push_back(node->word); node->word = ""; }
for (int d = 0; d < 4; d++) {
    int nx = i + dx[d], ny = j + dy[d];
    if (nx >= 0 && nx < board.size() && ny >= 0 && ny < board[0].size() && !visited[nx][ny])
        search(board, node, visited, ans, nx, ny);
}
visited[i][j] = false;
if (node->word == "") {
    bool none = true;
    for (auto& t : node->next) if (t) { none = false; break; }
    if (none) parent->next[board[i][j] - 'a'] = nullptr;
}
\`\`\`

### Complexity
- Time: $O(W \\cdot L + M \\cdot N \\cdot 3^L)$
- Space: $O(W \\cdot L)$
`,"../dsa-notes/Word Search.md":`---
link: https://leetcode.com/problems/word-search/
difficulty: Medium
topics:
  - "[[Backtracking]]"
  - "[[DFS]]"
source: Leetcode
star: true
blind75: true
mastery:
review:
insight: "DFS from every cell, mark with '#' and restore"
time: "O(m * n * 4^L)"
space: "O(L)"
date: 2026-06-30
---

# Problem
Does \`word\` exist in the grid via adjacent cells, each used once?

# Approach
## DFS with Visited

### Code
\`\`\`cpp
vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

bool solve(vector<vector<char>>& board, vector<vector<bool>>& vis, int idx, int x, int y, string& word) {
    if (idx >= word.size()) return true;
    if (x >= board.size() || x < 0 || y >= board[0].size() || y < 0) return false;
    if (vis[x][y] || board[x][y] != word[idx]) return false;
    vis[x][y] = true;
    for (int i = 0; i < 4; i++)
        if (solve(board, vis, idx+1, x+dx[i], dy[i]+y, word)) return true;
    vis[x][y] = false;
    return false;
}

bool exist(vector<vector<char>>& board, string word) {
    vector<vector<bool>> vis(board.size(), vector<bool>(board[0].size(), 0));
    for (int i = 0; i < board.size(); i++)
        for (int j = 0; j < board[0].size(); j++)
            if (board[i][j] == word[0] && solve(board, vis, 0, i, j, word))
                return true;
    return false;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n \\cdot 4^L)$
- Space: $O(m \\cdot n)$

## DFS with Visited, Start Marked in Caller
Trap: \`dy = {0, 0, 1, -1}\` paired with \`dx = {1, 0, -1, 0}\` makes one direction a no-op.

### Code
\`\`\`cpp
int dx[4] = {1, 0, -1, 0};
int dy[4] = {0, 1, 0, -1};

bool solve(vector<vector<char>>& board, vector<vector<bool>>& visited,
           string word, int x, int y, int idx) {
    if (idx == word.size()) return true;
    for (int i = 0; i < 4; i++) {
        int newx = x + dx[i], newy = y + dy[i];
        if (newx < 0 || newy < 0 || newx >= board.size() ||
            newy >= board[0].size() || visited[newx][newy] ||
            word[idx] != board[newx][newy]) continue;
        visited[newx][newy] = true;
        if (solve(board, visited, word, newx, newy, idx+1)) return true;
        visited[newx][newy] = false;
    }
    return false;
}

bool exist(vector<vector<char>>& board, string word) {
    vector<vector<bool>> visited(board.size(), vector<bool>(board[0].size(), false));
    for (int i = 0; i < board.size(); i++) {
        for (int j = 0; j < board[0].size(); j++) {
            if (word[0] == board[i][j]) {
                visited[i][j] = true;
                if (solve(board, visited, word, i, j, 1)) return true;
                visited[i][j] = false;
            }
        }
    }
    return false;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n \\cdot 4^L)$
- Space: $O(m \\cdot n)$

## Board Marking
Overwrite with \`#\` and restore, no visited array.

### Code
\`\`\`cpp
bool solve(vector<vector<char>>& board, string& word, int x, int y, int idx) {
    if (idx == word.size()) return true;
    if (x < 0 || y < 0 || x >= board.size() || y >= board[0].size()) return false;
    if (board[x][y] != word[idx]) return false;
    char tmp = board[x][y];
    board[x][y] = '#';
    bool found = solve(board, word, x+1, y, idx+1) ||
                 solve(board, word, x-1, y, idx+1) ||
                 solve(board, word, x, y+1, idx+1) ||
                 solve(board, word, x, y-1, idx+1);
    board[x][y] = tmp;
    return found;
}
\`\`\`

### Complexity
- Time: $O(m \\cdot n \\cdot 4^L)$
- Space: $O(L)$
`,"../dsa-notes/Young Physicist.md":`---
link: https://codeforces.com/problemset/problem/69/A
rating: 1000
contest: Codeforces Beta Round 69 Div 2
topics:
  - "[[Math]]"
  - "[[Implementation]]"
source: CodeForces
star: false
blind75: false
mastery:
review:
insight: "sum each axis separately, equilibrium iff all three sums are 0"
time: "O(n)"
space: "O(1)"
date: 2026-09-22
code: "[[CodeForces/A_Young_Physicist.cpp]]"
---

# Problem
Do the given force vectors sum to zero?

# Observation
Sum x, y, z separately. All three zero means equilibrium.
`,"../dsa-notes/Zigzag Conversion.md":`---
link: https://leetcode.com/problems/zigzag-conversion/
difficulty: Medium
topics:
  - "[[Strings]]"
source: Leetcode
star: false
blind75: false
mastery:
review:
insight: "one string per row, walk rows down then up, concatenate"
time: "O(n)"
space: "O(n)"
date: 2023-02-01
---

# Problem
Write \`s\` in a zigzag over \`numRows\` rows, read row by row.

# Approach
## Row Buckets
Append chars to row \`0..numRows-1\`, then back up to 1, repeat. Concatenate the rows. \`numRows == 1\` returns \`s\`.

### Code
\`\`\`cpp
string convert(string s, int numRows) {
    if(numRows == 1) return s;
        int n = s.length();
        int i = 0;
        vector<string> r(numRows, "");
        while(i < n){
            int j = (i == 0)? 0: 1;
            while(j < numRows && i < n){
                r[j] = r[j] + s[i];
                i++;j++;
            }
            j -= 2;
            while(j >= 0 && i < n){
                r[j] = r[j] + s[i];
                i++;j--;
            }
        }
        string ans = "";
        for(int j = 0; j < numRows; j++)
            ans = ans+r[j];
        return ans;
    }
\`\`\`

### Complexity
- Time: $O(n)$
- Space: $O(n)$
`});function so(e){let t=e.match(/^---\n([\s\S]*?)\n---/);if(!t)return{};let n={},r=t[1].split(`
`),i=0;for(;i<r.length;){let e=r[i];if(!e.trim()){i++;continue}if(i+1<r.length&&/^\s+-/.test(r[i+1])){let t=e.replace(`:`,``).trim(),a=[];for(i++;i<r.length&&/^\s+-/.test(r[i]);)a.push(r[i].replace(/^\s+-\s*/,``).trim()),i++;n[t]=a}else{let t=e.indexOf(`: `);if(t!==-1){let r=e.slice(0,t).trim(),i=e.slice(t+2).trim();if(i.startsWith(`[`))try{n[r]=JSON.parse(i)}catch{n[r]=i}else n[r]=i}i++}}return n}function co(e){let t=e.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);return t?t[1].trim():e}var lo=Object.entries(oo).map(([e,t])=>{let n=so(t),r=e.match(/\/([^/]+)\.md$/)[1];return{title:r,slug:r.toLowerCase().replace(/\s+/g,`-`),difficulty:n.difficulty??`Medium`,topics:Array.isArray(n.topics)?n.topics:n.topics?[n.topics]:[],source:n.source??``,star:n.star===`true`||n.star===!0,link:n.link??``,date:n.date??`1970-01-01`,content:co(t)}}).sort((e,t)=>{let n={Easy:0,Medium:1,Hard:2};return(n[e.difficulty]??1)-(n[t.difficulty]??1)||e.title.localeCompare(t.title)}),uo=[...new Set(lo.flatMap(e=>e.topics))].sort(),fo=e=>lo.find(t=>t.slug===e),po={Easy:`text-accent-green border-accent-green/30 bg-accent-green/5`,Medium:`text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5`,Hard:`text-accent-orange border-accent-orange/30 bg-accent-orange/5`},L={Easy:lo.filter(e=>e.difficulty===`Easy`).length,Medium:lo.filter(e=>e.difficulty===`Medium`).length,Hard:lo.filter(e=>e.difficulty===`Hard`).length},mo=lo.filter(e=>e.star).slice(0,5),ho=mo.length?mo:lo.slice(0,5);function R(){return(0,k.jsxs)(Er,{id:`dsa`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between mb-8`,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text`,children:`DSA`}),(0,k.jsx)(O,{to:`/dsa`,className:`text-[11px] text-text-muted hover:text-accent link-animated transition-colors`,children:`all problems →`})]}),(0,k.jsxs)(`div`,{className:`flex gap-4 mb-8`,children:[[`Easy`,`Medium`,`Hard`].map(e=>(0,k.jsxs)(`div`,{className:`text-[11px] border rounded px-3 py-1.5 ${po[e]}`,children:[(0,k.jsx)(`span`,{className:`font-bold`,children:L[e]}),(0,k.jsx)(`span`,{className:`ml-1 opacity-70`,children:e})]},e)),(0,k.jsxs)(`div`,{className:`text-[11px] text-text-muted self-center ml-1`,children:[lo.length,` total`]})]}),(0,k.jsx)(`div`,{children:ho.map((e,t)=>(0,k.jsxs)(Dr,{index:t,as:e.link?`a`:`div`,href:e.link||void 0,target:e.link?`_blank`:void 0,rel:e.link?`noopener noreferrer`:void 0,className:`group flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0 hover:pl-1 transition-all duration-300`,children:[(0,k.jsx)(`span`,{className:`text-xs shrink-0 ${e.star?`text-accent-yellow`:`text-border/30`}`,children:`★`}),(0,k.jsx)(`span`,{className:`flex-1 min-w-0 text-xs text-text-secondary group-hover:text-text transition-colors truncate`,children:e.title}),(0,k.jsx)(`div`,{className:`hidden sm:flex gap-1.5 shrink-0`,children:e.topics.slice(0,2).map(e=>(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5`,children:e},e))}),(0,k.jsx)(`span`,{className:`text-[10px] border rounded px-2 py-0.5 shrink-0 ${po[e.difficulty]??po.Medium}`,children:e.difficulty})]},e.slug))})]})}var z=[{label:`email`,value:`abhi.gupta8802@gmail.com`,href:`mailto:abhi.gupta8802@gmail.com`,color:`hover:text-accent-orange`},{label:`github`,value:`github.com/Navknight`,href:`https://github.com/Navknight`,color:`hover:text-accent-green`},{label:`linkedin`,value:`linkedin.com/in/abhinav-gupta-iitt`,href:`https://www.linkedin.com/in/abhinav-gupta-iitt/`,color:`hover:text-accent-blue`}];function B(){return(0,k.jsxs)(Er,{id:`contact`,compact:!0,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text mb-2`,children:`Contact`}),(0,k.jsx)(`p`,{className:`text-xs text-text-secondary mb-8`,children:`Open to work, collaborations, and interesting conversations.`}),(0,k.jsx)(`div`,{className:`flex flex-col gap-4`,children:z.map(({label:e,value:t,href:n,color:r})=>(0,k.jsxs)(`a`,{href:n,target:n.startsWith(`http`)?`_blank`:void 0,rel:n.startsWith(`http`)?`noopener noreferrer`:void 0,className:`group flex items-baseline gap-4 transition-colors ${r}`,children:[(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted w-16 shrink-0 font-mono`,children:e}),(0,k.jsx)(`span`,{className:`text-sm text-text-secondary group-hover:text-inherit transition-colors font-mono link-animated`,children:t})]},e))})]})}function go(){return(0,k.jsx)(`footer`,{className:`page-container py-16 border-t border-border`,children:(0,k.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`p`,{className:`text-xs text-text-muted`,children:[`© `,new Date().getFullYear(),` Abhinav Gupta`]}),(0,k.jsx)(`p`,{className:`text-[10px] text-text-muted mt-1 opacity-60`,children:`Built with React + Vite. Keyboard-friendly.`})]}),(0,k.jsxs)(`div`,{className:`flex gap-5 text-xs`,children:[(0,k.jsx)(`a`,{href:`https://github.com/Navknight`,target:`_blank`,rel:`noopener noreferrer`,className:`text-text-muted hover:text-accent-green link-animated transition-colors`,children:`github`}),(0,k.jsx)(`a`,{href:`https://www.linkedin.com/in/abhinav-gupta-iitt/`,target:`_blank`,rel:`noopener noreferrer`,className:`text-text-muted hover:text-accent-blue link-animated transition-colors`,children:`linkedin`}),(0,k.jsx)(O,{to:`/dsa`,className:`text-text-muted hover:text-accent link-animated transition-colors`,children:`dsa`}),(0,k.jsx)(`a`,{href:`mailto:abhi.gupta8802@gmail.com`,className:`text-text-muted hover:text-accent-orange link-animated transition-colors`,children:`email`})]})]})})}function _o(){let[e,t]=(0,x.useState)(tr[0].watermark),[n,r]=(0,x.useState)(1);return(0,x.useEffect)(()=>{let n=()=>{let n=window.scrollY+window.innerHeight*.4;for(let i=tr.length-1;i>=0;i--){let a=document.getElementById(tr[i].id);if(a&&n>=a.offsetTop){e!==tr[i].watermark&&(r(0),setTimeout(()=>{t(tr[i].watermark),r(1)},150));break}}};return window.addEventListener(`scroll`,n,{passive:!0}),n(),()=>window.removeEventListener(`scroll`,n)},[e]),(0,k.jsx)(`div`,{className:`fixed left-[-1rem] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 transition-opacity duration-300 hidden md:block`,style:{opacity:n},children:(0,k.jsx)(`span`,{className:`font-sans text-[clamp(7rem,16vw,14rem)] font-bold text-watermark leading-none tracking-[-0.05em] whitespace-nowrap`,children:e})})}function vo(){let[e,t]=(0,x.useState)(0);return(0,x.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight;t(e>0?window.scrollY/e:0)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),e}function yo(){return(0,k.jsx)(`div`,{className:`scroll-progress`,style:{transform:`scaleX(${vo()})`}})}function bo({post:e}){return(0,k.jsxs)(O,{to:`/blog/${e.slug}`,className:`group flex gap-4 py-5 border-b border-border/50 last:border-b-0 transition-all duration-300 hover:pl-2`,children:[(0,k.jsx)(`div`,{className:`w-20 h-14 rounded overflow-hidden shrink-0`,children:e.image?(0,k.jsx)(`img`,{src:e.image,alt:e.title,className:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}):(0,k.jsx)(ro,{title:e.title,className:`w-full h-full`})}),(0,k.jsxs)(`div`,{className:`flex-1 min-w-0 flex flex-col justify-center`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between gap-3`,children:[(0,k.jsx)(`h2`,{className:`text-sm text-text-secondary group-hover:text-accent transition-colors duration-300 truncate`,children:e.title}),(0,k.jsx)(`time`,{className:`text-[10px] text-text-muted shrink-0`,children:new Date(e.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`})})]}),(0,k.jsx)(`p`,{className:`text-[11px] text-text-muted mt-0.5 truncate`,children:e.description}),e.tags.length>0&&(0,k.jsx)(`div`,{className:`flex gap-2 mt-1.5`,children:e.tags.map(e=>(0,k.jsxs)(`span`,{className:`text-[10px] text-accent-green`,children:[`#`,e]},e))})]})]})}function xo(){return(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-3xl`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-2xl font-bold text-text mb-2`,children:`Blog`}),(0,k.jsx)(`p`,{className:`text-xs text-text-secondary mb-10`,children:`Notes on systems, GPU architecture, browser internals, and security research.`}),$a.length===0?(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`No posts yet.`}):(0,k.jsx)(`div`,{children:$a.map(e=>(0,k.jsx)(bo,{post:e},e.slug))})]})}),(0,k.jsx)(go,{})]})}function So(){let e=new Map,t=[];for(let t of $a)e.set(`blog:${t.slug}`,{id:`blog:${t.slug}`,label:t.title.length>22?t.title.slice(0,22)+`…`:t.title,fullLabel:t.title,type:`blog`,url:`/blog/${t.slug}`,tags:t.tags,x:(Math.random()-.5)*40,y:(Math.random()-.5)*40,vx:0,vy:0,r:5});for(let t of lo)e.set(`dsa:${t.slug}`,{id:`dsa:${t.slug}`,label:t.title.length>24?t.title.slice(0,24)+`…`:t.title,fullLabel:t.title,type:`dsa`,url:`/dsa/${t.slug}`,tags:t.topics,x:(Math.random()-.5)*40,y:(Math.random()-.5)*40,vx:0,vy:0,r:4});let n=new Map;for(let t of e.values())for(let e of t.tags)n.set(e,(n.get(e)||0)+1);let r=[...n.entries()];r.forEach(([t,n],i)=>{let a=i/r.length*Math.PI*2;e.set(`topic:${t}`,{id:`topic:${t}`,label:t,fullLabel:t,type:`topic`,url:null,tags:[],x:Math.cos(a)*120,y:Math.sin(a)*120,vx:0,vy:0,r:2+Math.sqrt(n)*1.2})});for(let n of e.values())if(n.type!==`topic`)for(let e of n.tags)t.push({a:n.id,b:`topic:${e}`});return{nodes:[...e.values()],edges:t,nodeMap:e}}function V(e,t=40){let{nodes:n,edges:r,nodeMap:i}=So(),a=i.get(e);if(!a)return{nodes:[],edges:[],nodeMap:new Map};let o=new Set(r.filter(t=>t.a===e||t.b===e).map(t=>t.a===e?t.b:t.a)),s=new Set;for(let t of r)o.has(t.b)&&t.a!==e&&s.add(t.a),o.has(t.a)&&t.b!==e&&s.add(t.b);let c=[...s].filter(e=>{let t=i.get(e);return t&&t.type===a.type}),l=[...s].filter(e=>{let t=i.get(e);return t&&t.type!==a.type&&t.type!==`topic`}),u=new Set([e,...o,...c.slice(0,Math.floor(t*.6)),...l.slice(0,Math.floor(t*.4))]),d=n.filter(e=>u.has(e.id)).map(e=>({...e,x:(Math.random()-.5)*30,y:(Math.random()-.5)*30,vx:0,vy:0}));return{nodes:d,edges:r.filter(e=>u.has(e.a)&&u.has(e.b)),nodeMap:new Map(d.map(e=>[e.id,e]))}}function Co(e,t,n,{rep:r=900,slen:i=70,sk:a=.03,damp:o=.75,grav:s=.003}={}){for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let i=e[n].x-e[t].x,a=e[n].y-e[t].y,o=Math.sqrt(i*i+a*a)||1,s=r/(o*o);e[t].vx-=i/o*s,e[t].vy-=a/o*s,e[n].vx+=i/o*s,e[n].vy+=a/o*s}for(let e of t){let t=n.get(e.a),r=n.get(e.b);if(!t||!r)continue;let o=r.x-t.x,s=r.y-t.y,c=Math.sqrt(o*o+s*s)||1,l=(c-i)*a;t.vx+=o/c*l,t.vy+=s/c*l,r.vx-=o/c*l,r.vy-=s/c*l}let c=0;for(let t of e)t.vx=(t.vx-t.x*s)*o,t.vy=(t.vy-t.y*s)*o,t.x+=t.vx,t.y+=t.vy,c+=t.vx*t.vx+t.vy*t.vy;return c}function wo(){return document.documentElement.classList.contains(`light`)?{bg:`#e4e4e7`,blog:`#7c3aed`,dsa:`#15803d`,topic:`#a1a1aa`,edge:`rgba(0,0,0,0.07)`,edgeHi:`rgba(0,0,0,0.3)`,text:`#71717a`,textHi:`#18181b`,curRing:`#7c3aed`}:{bg:`#0a0a0a`,blog:`#c084fc`,dsa:`#4ade80`,topic:`#3f3f46`,edge:`rgba(255,255,255,0.05)`,edgeHi:`rgba(255,255,255,0.35)`,text:`#a1a1aa`,textHi:`#e4e4e7`,curRing:`#c084fc`}}function To(e,t,n,r,i,a,o,s,c,l){let u=wo();e.fillStyle=u.bg,e.fillRect(0,0,t,n);let d=new Set;if(s){d.add(s.id);for(let e of i)e.a===s.id&&d.add(e.b),e.b===s.id&&d.add(e.a)}let f=new Set([o]);for(let e of i)e.a===o&&f.add(e.b),e.b===o&&f.add(e.a);let p=t/2+c.x,m=n/2+c.y;for(let t of i){let n=a.get(t.a),r=a.get(t.b);if(!n||!r)continue;let i=t.a===o||t.b===o,c=s&&(t.a===s.id||t.b===s.id);e.beginPath(),e.moveTo(p+n.x*l,m+n.y*l),e.lineTo(p+r.x*l,m+r.y*l),e.strokeStyle=c||i?u.edgeHi:u.edge,e.lineWidth=c||i?1:.5,e.stroke()}for(let t of r){let n=t.id===o,r=t===s,i=s&&!d.has(t.id)&&!f.has(t.id),a=t.type===`blog`?u.blog:t.type===`dsa`?u.dsa:u.topic,c=t.r*l*(n?1.8:r?1.4:1),h=p+t.x*l,g=m+t.y*l;e.beginPath(),e.arc(h,g,c,0,Math.PI*2),e.fillStyle=i?a+`22`:n?a:a+`bb`,e.fill(),n&&(e.beginPath(),e.arc(h,g,c+3,0,Math.PI*2),e.strokeStyle=a+`66`,e.lineWidth=1.5,e.stroke())}e.font=`9px JetBrains Mono, monospace`;for(let t of r){if(t!==s&&t.id!==o&&!d.has(t.id))continue;let n=t.type===`blog`?u.blog:t.type===`dsa`?u.dsa:u.topic;e.fillStyle=t.id===o?n:u.text+`cc`,e.fillText(t.label,p+t.x*l+t.r*l+3,m+t.y*l+3)}}function Eo({nodeId:e}){let t=(0,x.useRef)(null),n=(0,x.useRef)(null),r=yt(),i=(0,x.useCallback)((e,r)=>{let i=n.current;if(!i)return null;let a=t.current,o=a.width/2+i.pan.x,s=a.height/2+i.pan.y,c=null,l=1/0;for(let t of i.nodes){let n=Math.hypot(t.x*i.scale-(e-o),t.y*i.scale-(r-s));n<t.r*i.scale+6&&n<l&&(l=n,c=t)}return c},[]);(0,x.useEffect)(()=>{let r=t.current,i=devicePixelRatio;r.width=r.offsetWidth*i,r.height=r.offsetHeight*i;let{nodes:a,edges:o,nodeMap:s}=V(e,35);for(let e=0;e<200;e++)Co(a,o,s,{rep:600,slen:50,sk:.04,damp:.72,grav:.004});n.current={nodes:a,edges:o,nodeMap:s,hover:null,raf:null,settled:!1,pan:{x:0,y:0},scale:1,dragging:!1,lastMouse:null};let c=n.current,l=0;function u(){c.settled||(Co(a,o,s,{rep:600,slen:50,sk:.04,damp:.72,grav:.004}),++l>150&&(c.settled=!0)),To(r.getContext(`2d`),r.width,r.height,a,o,s,e,c.hover,c.pan,c.scale),c.raf=requestAnimationFrame(u)}return c.raf=requestAnimationFrame(u),()=>cancelAnimationFrame(c.raf)},[e]);let a=(0,x.useCallback)(e=>{let r=n.current;if(!r)return;let a=t.current.getBoundingClientRect(),o=devicePixelRatio;r.dragging&&r.lastMouse&&(r.pan.x+=(e.clientX-r.lastMouse.x)*o,r.pan.y+=(e.clientY-r.lastMouse.y)*o),r.lastMouse={x:e.clientX,y:e.clientY},r.hover=i((e.clientX-a.left)*o,(e.clientY-a.top)*o),t.current.style.cursor=r.dragging?`grabbing`:r.hover?.url?`pointer`:`grab`},[i]),o=(0,x.useCallback)(e=>{let t=n.current;t&&(t.dragging=!0,t.lastMouse={x:e.clientX,y:e.clientY})},[]),s=(0,x.useCallback)(()=>{let e=n.current;e&&(e.hover=null,e.dragging=!1)},[]),c=(0,x.useCallback)(()=>{n.current&&(n.current.dragging=!1)},[]),l=(0,x.useCallback)(e=>{e.preventDefault();let t=n.current;t&&(t.scale=Math.max(.3,Math.min(5,t.scale*(e.deltaY<0?1.1:.91))))},[]);(0,x.useEffect)(()=>{let e=t.current;return e.addEventListener(`wheel`,l,{passive:!1}),()=>e.removeEventListener(`wheel`,l)},[l]);let u=(0,x.useCallback)(a=>{let o=n.current;if(!o||o.dragging)return;let s=t.current.getBoundingClientRect(),c=devicePixelRatio,l=i((a.clientX-s.left)*c,(a.clientY-s.top)*c);l?.url&&l.id!==e&&r(l.url)},[i,r,e]);return(0,k.jsxs)(`div`,{className:`border border-border rounded-lg overflow-hidden`,children:[(0,k.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-1.5 border-b border-border/50`,children:[(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted font-mono`,children:`connections`}),(0,k.jsx)(O,{to:`/graph`,className:`text-[10px] text-text-muted hover:text-accent-cyan transition-colors`,children:`full graph →`})]}),(0,k.jsx)(`canvas`,{ref:t,className:`w-full`,style:{height:180,cursor:`grab`},onMouseMove:a,onMouseDown:o,onMouseUp:c,onMouseLeave:s,onClick:u})]})}function Do(){let{slug:e}=xt(),t=eo(e);return(0,x.useEffect)(()=>{if(!t)return;let e=document.title;document.title=`${t.title} — Abhinav Gupta`;let n=(e,t,n=!1)=>{let r=n?`meta[property="${e}"]`:`meta[name="${e}"]`,i=document.querySelector(r);return i||(i=document.createElement(`meta`),n?i.setAttribute(`property`,e):i.setAttribute(`name`,e),document.head.appendChild(i)),i.setAttribute(`content`,t),i},r=`https://navknight.github.io/blog/${t.slug}`;return n(`description`,t.description),n(`og:title`,t.title,!0),n(`og:description`,t.description,!0),n(`og:url`,r,!0),n(`og:type`,`article`,!0),()=>{document.title=e}},[t]),(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-2xl`,children:[(0,k.jsxs)(O,{to:`/blog`,className:`inline-flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent link-animated transition-colors mb-8`,children:[(0,k.jsx)(pr,{size:12}),` all posts`]}),t?(0,k.jsxs)(`article`,{children:[(0,k.jsx)(`div`,{className:`rounded-lg overflow-hidden mb-8 h-56 md:h-72`,children:t.image?(0,k.jsx)(`img`,{src:t.image,alt:t.title,className:`w-full h-full object-cover`}):(0,k.jsx)(ro,{title:t.title,className:`w-full h-full`})}),(0,k.jsxs)(`header`,{className:`mb-10`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-xl font-bold text-text mb-3`,children:t.title}),(0,k.jsxs)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:[(0,k.jsx)(`time`,{className:`text-[11px] text-text-muted`,children:new Date(t.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`})}),(0,k.jsx)(`div`,{className:`flex gap-2`,children:t.tags.map(e=>(0,k.jsxs)(`span`,{className:`text-[10px] text-accent-green`,children:[`#`,e]},e))})]})]}),(0,k.jsx)(`div`,{className:`mb-8`,children:(0,k.jsx)(Eo,{nodeId:`blog:${t.slug}`})}),(0,k.jsx)(`div`,{className:`prose`,dangerouslySetInnerHTML:{__html:t.html}})]}):(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{className:`text-sm text-text-muted`,children:`Post not found.`}),(0,k.jsx)(O,{to:`/blog`,className:`text-xs text-text-muted hover:text-accent underline underline-offset-2 mt-3 inline-block`,children:`← Back to blog`})]})]})}),(0,k.jsx)(go,{})]})}var Oo={Easy:`text-accent-green border-accent-green/30 bg-accent-green/5`,Medium:`text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5`,Hard:`text-accent-orange border-accent-orange/30 bg-accent-orange/5`};function ko({active:e,onClick:t,children:n,activeClass:r}){return(0,k.jsx)(`button`,{onClick:t,className:`text-[11px] px-3 py-1 rounded border transition-colors ${e?r??`border-accent text-accent bg-accent/10`:`border-border/50 text-text-muted hover:border-border-hover hover:text-text-secondary`}`,children:n})}function Ao({p:e}){return(0,k.jsxs)(O,{to:`/dsa/${e.slug}`,className:`flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0 group hover:pl-1 transition-all duration-200`,children:[(0,k.jsx)(`span`,{className:`text-xs shrink-0 ${e.star?`text-accent-yellow`:`text-border/30`}`,children:`★`}),(0,k.jsx)(`span`,{className:`flex-1 min-w-0 text-sm text-text-secondary group-hover:text-text transition-colors truncate font-mono`,children:e.title}),(0,k.jsxs)(`div`,{className:`hidden sm:flex gap-1.5 shrink-0 max-w-[200px] overflow-hidden`,children:[e.topics.slice(0,2).map(e=>(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5 truncate`,children:e},e)),e.topics.length>2&&(0,k.jsxs)(`span`,{className:`text-[10px] text-text-muted self-center`,children:[`+`,e.topics.length-2]})]}),(0,k.jsx)(`span`,{className:`hidden md:block text-[10px] text-text-muted shrink-0 w-16 text-right`,children:e.source}),(0,k.jsx)(`span`,{className:`text-[10px] border rounded px-2 py-0.5 shrink-0 w-14 text-center ${Oo[e.difficulty]??Oo.Medium}`,children:e.difficulty}),e.link?(0,k.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,onClick:e=>e.stopPropagation(),className:`shrink-0 text-text-muted hover:text-accent-blue transition-colors`,title:`Open on LC/CF`,children:(0,k.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,k.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`})})}):(0,k.jsx)(`span`,{className:`w-3.5 shrink-0`})]})}function jo(){let[e,t]=(0,x.useState)(`All`),[n,r]=(0,x.useState)(`All`),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(``),c=(0,x.useMemo)(()=>lo.filter(t=>!(e!==`All`&&t.difficulty!==e||n!==`All`&&!t.topics.includes(n)||i&&!t.star||o&&!t.title.toLowerCase().includes(o.toLowerCase()))),[e,n,i,o]);return(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-3xl`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-2xl font-bold text-text mb-1`,children:`Problems`}),(0,k.jsxs)(`p`,{className:`text-xs text-text-secondary mb-8`,children:[lo.length,` problems across algorithms and data structures.`]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-2`,children:[[`All`,`Easy`,`Medium`,`Hard`].map(n=>(0,k.jsx)(ko,{active:e===n,onClick:()=>t(n),children:n},n)),(0,k.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),className:`text-[11px] px-3 py-1 rounded border border-border/50 bg-surface text-text-muted
                         focus:outline-none focus:border-accent transition-colors cursor-pointer`,children:[(0,k.jsx)(`option`,{value:`All`,children:`All Topics`}),uo.map(e=>(0,k.jsx)(`option`,{value:e,children:e},e))]}),(0,k.jsx)(ko,{active:i,onClick:()=>a(e=>!e),activeClass:`border-accent-yellow text-accent-yellow bg-accent-yellow/10`,children:`★ Starred`})]}),(0,k.jsxs)(`div`,{className:`mb-6 flex items-center gap-3`,children:[(0,k.jsx)(`input`,{type:`text`,placeholder:`search problems...`,value:o,onChange:e=>s(e.target.value),className:`text-[11px] px-3 py-1.5 rounded border border-border/50 bg-surface text-text-secondary
                         placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors w-56`}),(0,k.jsxs)(`span`,{className:`text-[11px] text-text-muted ml-auto`,children:[c.length,` / `,lo.length]})]}),c.length===0?(0,k.jsx)(`p`,{className:`text-xs text-text-muted py-8`,children:`No problems match.`}):(0,k.jsx)(`div`,{children:c.map(e=>(0,k.jsx)(Ao,{p:e},e.slug))})]})}),(0,k.jsx)(go,{})]})}var H=new Map(lo.map(e=>[e.title.toLowerCase(),e.slug]));function Mo(e){return e.replace(/\[\[([^\]]+)\]\]/g,(e,t)=>{if(t.includes(`/`))return`\`${t}\``;let n=t.toLowerCase();return H.has(n)?`[${t}](/dsa/${H.get(n)})`:uo.includes(t)?`[${t}](/dsa?topic=${encodeURIComponent(t)})`:`**${t}**`})}var No={Easy:`text-accent-green border-accent-green/30 bg-accent-green/5`,Medium:`text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5`,Hard:`text-accent-orange border-accent-orange/30 bg-accent-orange/5`};function Po(){let{slug:e}=xt(),t=fo(e);return t?(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-2xl`,children:[(0,k.jsx)(O,{to:`/dsa`,className:`text-[11px] text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1 mb-8`,children:`← all problems`}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-start gap-3 mb-2`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-2xl font-bold text-text flex-1`,children:t.title}),t.star&&(0,k.jsx)(`span`,{className:`text-accent-yellow text-lg mt-1`,children:`★`})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 mb-8`,children:[(0,k.jsx)(`span`,{className:`text-[11px] border rounded px-2 py-0.5 ${No[t.difficulty]??No.Medium}`,children:t.difficulty}),(0,k.jsx)(`span`,{className:`text-[11px] text-text-muted`,children:t.source}),t.topics.map(e=>(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5`,children:e},e)),t.link&&(0,k.jsx)(`a`,{href:t.link,target:`_blank`,rel:`noopener noreferrer`,className:`ml-auto text-[11px] text-accent-blue hover:text-accent border border-accent-blue/30 hover:border-accent/30 rounded px-3 py-1 transition-colors`,children:`Open problem ↗`})]}),(0,k.jsx)(`div`,{className:`mb-8`,children:(0,k.jsx)(Eo,{nodeId:`dsa:${e}`})}),t.content?(0,k.jsx)(`div`,{className:`prose max-w-none`,dangerouslySetInnerHTML:{__html:I(Mo(t.content))}}):(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`No notes yet.`})]})}),(0,k.jsx)(go,{})]}):(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`section-wrap flex-1 pt-24`,children:(0,k.jsxs)(`div`,{className:`content-area`,children:[(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`Problem not found.`}),(0,k.jsx)(O,{to:`/dsa`,className:`text-xs text-accent hover:underline mt-4 inline-block`,children:`← back`})]})}),(0,k.jsx)(go,{})]})}function Fo(e,t,n,r,i,a,o,s,c){let l=wo();e.clearRect(0,0,t,n),e.fillStyle=l.bg,e.fillRect(0,0,t,n);let u=new Set;if(c){u.add(c.id);for(let e of i)e.a===c.id&&u.add(e.b),e.b===c.id&&u.add(e.a)}let d=t/2+o.x,f=n/2+o.y,p=(e,t)=>({x:e*s+d,y:t*s+f});for(let t of i){let n=a.get(t.a),r=a.get(t.b);if(!n||!r)continue;let i=c&&(t.a===c.id||t.b===c.id),o=p(n.x,n.y),s=p(r.x,r.y);e.beginPath(),e.moveTo(o.x,o.y),e.lineTo(s.x,s.y),e.strokeStyle=i?l.edgeHi:l.edge,e.lineWidth=i?1:.5,e.stroke()}for(let t of r){let n=p(t.x,t.y),r=t.r*s*(t===c?1.6:1),i=c&&!u.has(t.id),a=t.type===`blog`?l.blog:t.type===`dsa`?l.dsa:l.topic;e.beginPath(),e.arc(n.x,n.y,r,0,Math.PI*2),e.fillStyle=i?a+`22`:a+(t===c?`ff`:`bb`),e.fill(),t===c&&(e.beginPath(),e.arc(n.x,n.y,r+3,0,Math.PI*2),e.strokeStyle=a+`55`,e.lineWidth=1,e.stroke())}e.font=`10px JetBrains Mono, monospace`;for(let t of r){if(!(t===c||u.has(t.id)||t.type===`topic`&&t.r*s>6||s>2))continue;let n=p(t.x,t.y),r=t.r*s,i=c&&!u.has(t.id);e.fillStyle=(t===c?l.textHi:l.text)+(i?`44`:`dd`),e.fillText(t.label,n.x+r+4,n.y+3)}}function Io(){let e=(0,x.useRef)(null),t=(0,x.useRef)(null),n=yt(),r=(0,x.useCallback)(()=>{let{nodes:e,edges:n,nodeMap:r}=So();t.current={nodes:e,edges:n,nodeMap:r,pan:{x:0,y:0},scale:1,hover:null,settled:!1,dragging:!1,lastMouse:null,raf:null}},[]);(0,x.useEffect)(()=>{r();let n=e.current,i=t.current;for(let e=0;e<250;e++)Co(i.nodes,i.edges,i.nodeMap);i.settled=!1;let a=0;function o(){let e=n.width,t=n.height;if(!i.settled){let e=Co(i.nodes,i.edges,i.nodeMap);a++,(e<.02||a>300)&&(i.settled=!0)}Fo(n.getContext(`2d`),e,t,i.nodes,i.edges,i.nodeMap,i.pan,i.scale,i.hover),i.raf=requestAnimationFrame(o)}let s=()=>{n.width=n.offsetWidth*devicePixelRatio,n.height=n.offsetHeight*devicePixelRatio};return s(),window.addEventListener(`resize`,s),i.raf=requestAnimationFrame(o),()=>{cancelAnimationFrame(i.raf),window.removeEventListener(`resize`,s)}},[r]);let i=(0,x.useCallback)((n,r)=>{let i=t.current,a=e.current,o=a.width,s=a.height,c=(n*devicePixelRatio-o/2-i.pan.x)/i.scale,l=(r*devicePixelRatio-s/2-i.pan.y)/i.scale,u=null,d=1/0;for(let e of i.nodes){let t=Math.hypot(e.x-c,e.y-l);t<e.r+8/i.scale&&t<d&&(d=t,u=e)}return u},[]),a=(0,x.useCallback)(n=>{let r=t.current;r.dragging&&r.lastMouse&&(r.pan.x+=(n.clientX-r.lastMouse.x)*devicePixelRatio,r.pan.y+=(n.clientY-r.lastMouse.y)*devicePixelRatio,r.settled=!1),r.lastMouse={x:n.clientX,y:n.clientY};let a=e.current.getBoundingClientRect();r.hover=i(n.clientX-a.left,n.clientY-a.top),e.current.style.cursor=r.hover?.url?`pointer`:r.dragging?`grabbing`:`grab`},[i]),o=(0,x.useCallback)(e=>{t.current.dragging=!0,t.current.lastMouse={x:e.clientX,y:e.clientY}},[]),s=(0,x.useCallback)(()=>{t.current.dragging=!1},[]),c=(0,x.useCallback)(r=>{if(t.current.dragging)return;let a=e.current.getBoundingClientRect(),o=i(r.clientX-a.left,r.clientY-a.top);o?.url&&n(o.url)},[i,n]),l=(0,x.useCallback)(e=>{e.preventDefault();let n=t.current,r=e.deltaY<0?1.12:.89;n.scale=Math.max(.2,Math.min(8,n.scale*r))},[]);return(0,x.useEffect)(()=>{let t=e.current;return t.addEventListener(`wheel`,l,{passive:!1}),()=>t.removeEventListener(`wheel`,l)},[l]),(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col bg-bg`,children:[(0,k.jsx)(br,{}),(0,k.jsxs)(`div`,{className:`flex-1 flex flex-col pt-12`,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-5 px-6 py-3 border-b border-border/50 text-[10px] text-text-muted`,children:[(0,k.jsx)(`span`,{className:`font-mono`,children:`GRAPH`}),(0,k.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#c084fc] inline-block`}),`blog`]}),(0,k.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#4ade80] inline-block`}),`dsa`]}),(0,k.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#3f3f46] inline-block`}),`topic`]}),(0,k.jsx)(`span`,{className:`ml-auto opacity-60`,children:`scroll to zoom · drag to pan · click to open`}),(0,k.jsx)(O,{to:`/`,className:`hover:text-accent transition-colors`,children:`← home`})]}),(0,k.jsx)(`canvas`,{ref:e,className:`flex-1 w-full`,style:{cursor:`grab`},onMouseMove:a,onMouseDown:o,onMouseUp:s,onMouseLeave:s,onClick:c})]})]})}function Lo(){let[e,t]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{t(!0)},[]),nr(tr),(0,k.jsxs)(`div`,{className:`relative min-h-screen transition-opacity duration-700 ${e?`opacity-100`:`opacity-0`}`,children:[(0,k.jsx)(yo,{}),(0,k.jsx)(_o,{}),(0,k.jsx)(br,{}),(0,k.jsxs)(`main`,{children:[(0,k.jsx)(Sr,{}),(0,k.jsx)(Or,{}),(0,k.jsx)(Mr,{}),(0,k.jsx)(Ar,{}),(0,k.jsx)(Si,{}),(0,k.jsx)(ao,{}),(0,k.jsx)(R,{}),(0,k.jsx)(B,{})]}),(0,k.jsx)(go,{})]})}function Ro(){return(0,k.jsx)(Fn,{children:(0,k.jsxs)(qt,{children:[(0,k.jsx)(Gt,{path:`/`,element:(0,k.jsx)(Lo,{})}),(0,k.jsx)(Gt,{path:`/blog`,element:(0,k.jsx)(xo,{})}),(0,k.jsx)(Gt,{path:`/blog/:slug`,element:(0,k.jsx)(Do,{})}),(0,k.jsx)(Gt,{path:`/dsa`,element:(0,k.jsx)(jo,{})}),(0,k.jsx)(Gt,{path:`/dsa/:slug`,element:(0,k.jsx)(Po,{})}),(0,k.jsx)(Gt,{path:`/graph`,element:(0,k.jsx)(Io,{})})]})})}er.createRoot(document.getElementById(`root`)).render((0,k.jsx)(x.StrictMode,{children:(0,k.jsx)(Ro,{})}));