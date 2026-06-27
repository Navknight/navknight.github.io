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
`).filter(Boolean).flatMap(e=>{let t=e.indexOf(`: `);if(t===-1)return[];let n=e.slice(t+2).trim();return n?[[e.slice(0,t).trim(),n]]:[]})),content:t[2]}:{meta:{},content:e}}var $a=Object.entries(Za).map(([e,t])=>{let{meta:n,content:r}=Qa(t);return{title:n.title??`Untitled`,date:n.date??`1970-01-01`,slug:n.slug??e.match(/\/([^/]+)\.md$/)[1],description:n.description??``,tags:n.tags?n.tags.split(`,`).map(e=>e.trim()):[],image:n.image?n.image.startsWith(`http`)||n.image.startsWith(`/`)?n.image:`/${n.image}`:null,html:I(r)}}).sort((e,t)=>new Date(t.date)-new Date(e.date)),eo=e=>$a.find(t=>t.slug===e),to=[{color:`#c084fc`,glow:`rgba(192,132,252,0.12)`},{color:`#4ade80`,glow:`rgba(74,222,128,0.12)`},{color:`#60a5fa`,glow:`rgba(96,165,250,0.12)`},{color:`#fb923c`,glow:`rgba(251,146,60,0.12)`},{color:`#22d3ee`,glow:`rgba(34,211,238,0.12)`},{color:`#f472b6`,glow:`rgba(244,114,182,0.12)`},{color:`#facc15`,glow:`rgba(250,204,21,0.12)`}];function no(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t}function ro({title:e=``,className:t=``}){let{color:n,glow:r}=to[no(e)%to.length],i=e.split(/\s+/).slice(0,2).map(e=>e[0]?.toUpperCase()??``).join(``);return(0,k.jsxs)(`div`,{className:`relative overflow-hidden ${t}`,style:{background:`radial-gradient(ellipse at 30% 60%, ${r} 0%, var(--color-surface) 70%)`},children:[(0,k.jsx)(`div`,{className:`absolute inset-0`,style:{backgroundImage:`radial-gradient(circle, ${n}28 1px, transparent 1px)`,backgroundSize:`18px 18px`}}),(0,k.jsx)(`div`,{className:`absolute bottom-0 left-0 h-px w-2/5`,style:{background:`linear-gradient(90deg, ${n}70, transparent)`}}),(0,k.jsx)(`div`,{className:`absolute top-0 right-0 w-px h-2/5`,style:{background:`linear-gradient(180deg, ${n}70, transparent)`}}),(0,k.jsx)(`svg`,{viewBox:`0 0 100 100`,className:`absolute inset-0 w-full h-full`,"aria-hidden":`true`,children:(0,k.jsx)(`text`,{x:`50`,y:`68`,textAnchor:`middle`,fontSize:`52`,fontFamily:`Space Grotesk, sans-serif`,fontWeight:`700`,letterSpacing:`-2`,fill:n,fillOpacity:`0.12`,children:i})})]})}function io({post:e,index:t}){return(0,k.jsxs)(Dr,{index:t,as:O,to:`/blog/${e.slug}`,className:`group flex gap-4 py-4 border-b border-border/50 last:border-b-0 hover:pl-1`,children:[(0,k.jsx)(`div`,{className:`w-16 h-12 rounded overflow-hidden shrink-0`,children:e.image?(0,k.jsx)(`img`,{src:e.image,alt:e.title,className:`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300`}):(0,k.jsx)(ro,{title:e.title,className:`w-full h-full`})}),(0,k.jsxs)(`div`,{className:`flex-1 min-w-0 flex flex-col justify-center`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between gap-3`,children:[(0,k.jsx)(`span`,{className:`text-xs text-text-secondary group-hover:text-accent transition-colors duration-300 truncate`,children:e.title}),(0,k.jsx)(`time`,{className:`text-[10px] text-text-muted shrink-0`,children:new Date(e.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`})})]}),e.tags.length>0&&(0,k.jsx)(`div`,{className:`flex gap-2 mt-1`,children:e.tags.slice(0,3).map(e=>(0,k.jsxs)(`span`,{className:`text-[10px] text-accent-green`,children:[`#`,e]},e))})]})]})}function ao(){let e=$a.slice(0,5);return(0,k.jsxs)(Er,{id:`blog`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between mb-8`,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text`,children:`Writing`}),(0,k.jsx)(O,{to:`/blog`,className:`text-[11px] text-text-muted hover:text-accent link-animated transition-colors`,children:`all posts →`})]}),e.length===0?(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`No posts yet.`}):(0,k.jsx)(`div`,{children:e.map((e,t)=>(0,k.jsx)(io,{post:e,index:t},e.slug))})]})}var oo=Object.assign({"../dsa-notes/Arrays/Add to Array-Form Of Integer.md":`---
difficulty: Easy
topics: ["Arrays", "Math"]
source: Leetcode
star: false
---

[[Arrays]] [[Math]]

# long addition using a loop and carry variable

\`\`\`cpp
vector<int> addToArrayForm(vector<int>& num, int k) {

\xA0 \xA0 \xA0 \xA0 int n = num.size() - 1;

\xA0 \xA0 \xA0 \xA0 int carry = k;

\xA0 \xA0 \xA0 \xA0 for(int i = n; i >= 0; i--){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 int sum = num[i] + carry;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 num[i] = sum %10;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 carry = sum/10;

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 while(carry){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 num.insert(num.begin(), carry%10);

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 carry/=10;

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 return num;

\xA0 \xA0 }
\`\`\`
`,"../dsa-notes/Arrays/Arithmatic Subarrays.md":`---
difficulty: Medium
topics: ["Arrays"]
source: Leetcode
star: false
code: LeetCode/arithmatic_subarrays.cpp
---
[[LeetCode/arithmatic_subarrays.cpp]]
[[Arrays]]

[Arithmatic Subarrays](https://leetcode.com/problems/arithmetic-subarrays/submissions/928294602/?envType=study-plan&id=programming-skills-ii) #  - Use a datastructure to sort the subarray and then check for the difference in each element.`,"../dsa-notes/Arrays/Beautiful Matrix.md":`---
difficulty: Easy
topics: ["Math", "Matrix"]
source: CodeForces
star: false
code: CodeForces/A_Beautiful_Matrix.cpp
---
[[CodeForces/A_Beautiful_Matrix.cpp]]
[[Math]] [[Matrix]]

[Problem - 263A - Codeforces](https://codeforces.com/problemset/problem/263/A) # # - instead of taking the input of the whole matrix, keep track of i and j and take the inputs and if a 1 comes as the input, the number of moves would be the difference between the middle and i,j of that particular input.
this way the whole matrix wont need to be taken in usually.`,"../dsa-notes/Arrays/Check if Array Is Sorted and Rotated.md":`---
difficulty: Easy
topics: ["Arrays"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/"
---

[[Arrays]]

# Brute Force

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

At every index check if a sorted array is possible

# Optimized
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

If the array is sorted, then there can only be one point where the next element can be smaller than the current element no matter how its rotated.
`,"../dsa-notes/Arrays/Design Add and Search Words Data Structure.md":`---
difficulty: Medium
topics: ["Tries"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/description/"
---

[[Tries]]

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
`,"../dsa-notes/Arrays/Determine Whether Matrix Can Be Obtained By Rotation.md":`---
difficulty: Easy
topics: ["Arrays", "Matrix"]
source: Leetcode
star: false
---

[[Arrays]] [[Matrix]]

 [Determine Whether  Can Be Obtained By Rotation](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/?envType=study-plan&id=programming-skills-ii) #, , #   - Rotation of matrix by 90deg ans\\[j][m-j]. Create a rotation function which rotates the matrix and then check whether the rotation results in the desired matrix, atmost 3 rotations required.


\`\`\`
\xA0void rotate(vector<vector<int>>& mat){ \xA0 \xA0 \xA0 \xA0

\xA0 \xA0 \xA0 \xA0 int m = mat.size() - 1;

\xA0 \xA0 \xA0 \xA0 int n = mat[0].size() - 1;

\xA0 \xA0 \xA0 \xA0 vector<vector<int>> ans (m+1, vector<int> (n+1, 0));

  

\xA0 \xA0 \xA0 \xA0 for(int i = 0; i <= m; i++){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 for(int j = 0; j <= n; j ++){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 ans[j][m-i] = mat[i][j];

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 mat.clear();

\xA0 \xA0 \xA0 \xA0 mat = ans;

\xA0 \xA0 }

  

\xA0 \xA0 bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {

\xA0 \xA0 \xA0 \xA0 int t = 3;

\xA0 \xA0 \xA0 \xA0 if(mat == target)

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 return true;

\xA0 \xA0 \xA0 \xA0 while(t--){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 rotate(mat);

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 for(auto i: mat){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 for(auto j: i){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 cout<<j<<" ";

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 cout<<endl;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 cout<<endl;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if(mat == target)

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 return true;

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 return false;

\xA0 \xA0 }
\`\`\`
`,"../dsa-notes/Arrays/Encode and Decode Strings.md":`---
difficulty: Medium
topics: []
source: Leetcode
star: false
link: "https://leetcode.com/problems/encode-and-decode-strings/description/"
---

Encode each string as \`lengthOfString#String\`

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
`,"../dsa-notes/Arrays/Find All Anagrams in A String.md":`---
difficulty: Medium
topics:
  - Sliding Window
source: Leetcode
star: false
code: LeetCode/find_all_anagrams_in_a_string.cpp
---
[[LeetCode/find_all_anagrams_in_a_string.cpp]]
[[Sliding Window]]

 [Find All Anagrams in A String]([Find All Anagrams in a String - LeetCode](https://leetcode.com/problems/find-all-anagrams-in-a-string/?envType=study-plan&id=programming-skills-ii)) # 
	1.  Create two fequency vectors, one for p and one for s. Then use a window of the length of p to traverse s and update frequencies of s. compare the frequency array after each iteration to find anagrams.
	2.  Use a single hash map to record frequencies of the characters of p. Then use this hash map and two pointers to create a sliding window to compare the frequencies of the substring.`,"../dsa-notes/Arrays/Find Winner on a Tic-Tac-Toe Game.md":`---
difficulty: Easy
topics: ["Arrays", "Matrix"]
source: Leetcode
star: false
---

[[Arrays]] [[Matrix]]

If the number of moves is less the 9, then the game is still "Pending".
if none of the conditions apply then the match is a draw.
`,"../dsa-notes/Arrays/Implement Trie (Prefix Tree).md":`---
difficulty: Medium
topics: ["Tries"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/implement-trie-prefix-tree/description/"
---

[[Tries]]

\`\`\`cpp
class TrieNode {
public:
    unordered_map<char, TrieNode*> map;
    bool isEnd = false;
};

class Trie {
    TrieNode* root;
public:
    Trie() {
        root = new TrieNode();
    }
    
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
            if (cur->map.find(c) == cur->map.end())
                return false;
            cur = cur->map[c];
        }
        return cur->isEnd;
    }
    
    bool startsWith(string prefix) {
        TrieNode* cur = root;
        for (auto c : prefix) {
            if (cur->map.find(c) == cur->map.end())
                return false;
            cur = cur->map[c];
        }
        return true;
    }
};
\`\`\`
`,"../dsa-notes/Arrays/K Closest Points to Origin.md":`---
difficulty: Medium
topics: []
source: Leetcode
star: false
---

[K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/?envType=study-plan&id=programming-skills-ii)  # - Use a priority queue to keep track of the smallest distances, as the priority queue uses max heap`,"../dsa-notes/Arrays/Length of last word.md":`---
difficulty: Easy
topics: []
source: Leetcode
star: false
code: LeetCode/length_of_last_word.cpp
---
[[LeetCode/length_of_last_word.cpp]]
 [Length of last word](https://leetcode.com/problems/length-of-last-word/?envType=study-plan&id=programming-skills-ii) , #  - Simple counting problem


\`\`\`
int lengthOfLastWord(string s) {

\xA0 \xA0 \xA0 \xA0 int ind = s.size() - 1;

\xA0 \xA0 \xA0 \xA0 while(ind>= 0 && s[ind] == ' '){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 ind--;

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 int count = 0;

\xA0 \xA0 \xA0 \xA0 while (ind >= 0 && s[ind] != ' '){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 ind--;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 count++;

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 return count;

\xA0 \xA0 }
\`\`\`
`,"../dsa-notes/Arrays/Lights Out.md":`---
difficulty: Easy
topics: ["Arrays", "Matrix"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/275/A"
code: CodeForces/A_Lights_Out.cpp
---
[[CodeForces/A_Lights_Out.cpp]]
[[Arrays]] [[Matrix]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    vector<vector<bool>> grid(3, vector<bool>(3, 1));

    for (int i = 0; i < 9; i++)
    {
        int t;
        cin >> t;

        int col = i % 3;
        int row = i / 3;
        if (t % 2 != 0)
        {
            grid[row][col] = !grid[row][col];
            if (row + 1 < 3)
                grid[row + 1][col] = !grid[row + 1][col];
            if (col + 1 < 3)
                grid[row][col + 1] = !grid[row][col + 1];
            if (row > 0)
                grid[row - 1][col] = !grid[row - 1][col];
            if (col > 0)
                grid[row][col - 1] = !grid[row][col - 1];
        }
    }

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << grid[i][j];
        }
        cout << endl;
    }
    return 0;
}
\`\`\``,"../dsa-notes/Arrays/Longest Consecutive Sequence.md":`---
difficulty: Medium
topics: []
source: Leetcode
star: false
link: "https://leetcode.com/problems/longest-consecutive-sequence/description/"
---

# Brute force
O(n log n)
Sort and take the longest subarray

# Optimized
O(n)
inserting into unordered_set takes O(1) time.

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
`,"../dsa-notes/Arrays/Longest Substring Without Repeating Characters.md":`---
difficulty: Unknown
topics: []
source: Leetcode
star: false
link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/"
---

\`\`\`cpp

\`\`\`
`,"../dsa-notes/Arrays/Multiply Strings.md":`---
difficulty: Easy
topics: []
source: Leetcode
star: false
code: LeetCode/multiply_strings.cpp
---
[[LeetCode/multiply_strings.cpp]]
[Multiply Strings](https://leetcode.com/problems/multiply-strings/?envType=study-plan&id=programming-skills-ii) , #  - Using the normal multiplication algorithm and treating strings as arrays of characters

\`\`\`
string multiply(string num1, string num2) {

\xA0 \xA0 \xA0 \xA0 int n = num1.size();

\xA0 \xA0 \xA0 \xA0 int m = num2.size();

\xA0 \xA0 \xA0 \xA0 string result = "";

\xA0 \xA0 \xA0 \xA0 for (int i = 0; i < n + m; i++)

\xA0 \xA0 \xA0 \xA0 {

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 result += '0';

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 for (int i = m - 1; i >= 0; i--)

\xA0 \xA0 \xA0 \xA0 {

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 for (int j = n - 1; j >= 0; j--)

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 {

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 int sum = (result[i + j + 1] - '0') + (num1[j] - '0') * (num2[i] - '0');

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 result[i + j + 1] = char(sum % 10 + '0');

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 result[i + j] = char(result[i + j] + sum / 10);

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 int k = 0;

\xA0 \xA0 \xA0 \xA0 for (k = 0; k < n + m; k++)

\xA0 \xA0 \xA0 \xA0 {

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if (result[k] != '0')

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 break;

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 return (result.substr(k, n + m - k + 1).size() > 0) ? result.substr(k,n+m-k+1):"0" ;

\xA0 \xA0 }
\`\`\`
`,"../dsa-notes/Arrays/Next Greater Element III.md":`---
difficulty: Medium
topics:
  - Two Pointers
source: Leetcode
star: false
---
[[Two Pointers]]
[Next Greater Element III](https://leetcode.com/problems/next-greater-element-iii/?envType=study-plan&id=programming-skills-ii)  Use two pointers to determine the first digit in the number which is smaller than the next digit to its right side, then swap it with a digit from its left side which is greater than that digit. To get the smallest larger number, reverse the left part of the number.`,"../dsa-notes/Arrays/Next Round.md":`---
difficulty: Easy
topics: ["Arrays"]
source: CodeForces
star: false
code: CodeForces/A_Next_Round.cpp
---
[[CodeForces/A_Next_Round.cpp]]
[[Arrays]]

[Problem - 158A - Codeforces](https://codeforces.com/problemset/problem/158/A) #  - simple problem where we just need to loop over the array of inputs and check.`,"../dsa-notes/Arrays/Product of Array Except Self.md":`---
difficulty: Medium
topics: ["Arrays", "Prefix Sum"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/product-of-array-except-self/description/"
---

[[Arrays]] [[Prefix Sum]]

# Prefix and Suffix Products
O(n + n + n)

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

# Optimised
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
`,"../dsa-notes/Arrays/Queue at the school.md":`---
difficulty: Easy
topics: ["Arrays"]
source: CodeForces
star: false
code: CodeForces/B_Queue_at_the_School.cpp
---
[[CodeForces/B_Queue_at_the_School.cpp]]
[[Arrays]]

[Problem - 266B - Codeforces](https://codeforces.com/problemset/problem/266/B) #  - loop over the character array and swap B,G every second.
use a while loop to keep track of the seconds.`,"../dsa-notes/Arrays/Remove Duplicates from Sorted Array.md":`---
difficulty: Easy
topics: ["Arrays"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/"
---

[[Arrays]]

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

- There will always be 1 unique element in an array at - least.
- We dont need to save anything, we can overwrite the duplicate elements with the unique ones as teh judge does not care what comes after the unique elements in the returned array.

Q. If we were required to swap instead of in-place overwrite?
=> We can use the snowball technique.
`,"../dsa-notes/Arrays/Roman To Integer.md":`---
difficulty: Easy
topics: []
source: Leetcode
star: false
code: LeetCode/Roman_to_integer.cpp
---
[[LeetCode/Roman_to_integer.cpp]]
`,"../dsa-notes/Arrays/Rotate Array.md":`---
difficulty: Easy
topics: ["Arrays"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/rotate-array/description/"
code: LeetCode/rotate_array.cpp
---
[[LeetCode/rotate_array.cpp]]
[[Arrays]]

# Brute Force
Shift the elements one at a time

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

# Reversing
1. Reverse the string
2. Reverse first \`k\` elements
3. Reverse \`n-k\` elements

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

# Cyclic Dependency
Place each element to its right position, keeping track of the replaced element. This will form a cyclic graph where replacing one element, then keeping the replaced element to the correct position. 
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
\`\`\``,"../dsa-notes/Arrays/Rotate Image.md":`---
difficulty: Medium
topics: []
source: Leetcode
star: false
code: LeetCode/rotate_image.cpp
---
[[LeetCode/rotate_image.cpp]]
[Rotate image](https://leetcode.com/problems/rotate-image/submissions/924604845/?envType=study-plan&id=programming-skills-ii)   # - use two pointers to keep track of whether we are in the center or not and then loop over all elements (left and right)`,"../dsa-notes/Arrays/Set Matrix Zeroes.md":`---
difficulty: Medium
topics: []
source: Leetcode
star: false
---

[Set Matrix Zeroes - LeetCode](https://leetcode.com/problems/set-matrix-zeroes/?envType=study-plan-v2&id=programming-skills)  # 
- use a hash map to keep a track of all the cells that have a 0 in the original array
now use the map to set the rows and columns of that cell as zero.
`,"../dsa-notes/Arrays/Spiral Matrix.md":`---
difficulty: Medium
topics: []
source: Leetcode
star: false
code: LeetCode/spiral_matrix.cpp
---
[[LeetCode/spiral_matrix.cpp]]
[Spiral Matrix](https://leetcode.com/problems/spiral-matrix/?envType=study-plan&id=programming-skills-ii)   # - Use three pointers - row, col and ne to track which row and col were visited. We can also resize a vector to elemenate double counting.`,"../dsa-notes/Arrays/Stones on the table.md":`---
difficulty: Easy
topics: ["Arrays"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/266/A"
---

[[Arrays]]

`,"../dsa-notes/Arrays/Two Sum II - Input Array Is Sorted.md":`---
difficulty: Medium
topics:
  - Arrays
  - Binary Search
  - Two Pointers
source: Leetcode
star: false
link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
date: 2026-05-18
---

[[Arrays]] [[Binary Search]] [[Two Pointers]]

# Problem

Two sum but with sorted array

# Approach
## Binary Search
We can fix a left pointer and search in the right side of the array, if the $target - numbers[l]$ is greater than $numbers[l]$ then there is no possible solution.

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
- Time: $O(nlogn)$
- Space: $O(1)$
## Two Pointers
As the array is sorted, we can start on the opposite end and make it to the middle
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
- Space: $O(1)$`,"../dsa-notes/Arrays/Valid Sudoku.md":`---
difficulty: Medium
topics:
  - Arrays
source: Leetcode
star: false
link: https://leetcode.com/problems/valid-sudoku/description/
date: 2026-05-18
code: LeetCode/Valid_sudoku.cpp
---
[[LeetCode/Valid_sudoku.cpp]]
[[Arrays]]
# Problem
Validate if the matrix is a correct sudoku
# Approach
Brute force, just validate if a number is repeated in a row, column and a $3*3$ matrix. Main problem is figuring out the indices of the $3*3$ matrix.
# Code

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

# Complexity
- Time: $O(9^3)$ = $O(1)$ (fixed 9×9 board)
- Space: $O(1)$
`,"../dsa-notes/Arrays/Validate Binary Search Tree.md":`---
difficulty: Medium
topics: []
source: Leetcode
star: false
code: LeetCode/validate_binary_search_tree.cpp
---
[[LeetCode/validate_binary_search_tree.cpp]]
## Recursive
Recursive approach with tightening bounds as we traverse the tree. 
The left child will be smaller than the root but larger than the last node where we took a right child. The right child will be smaller than the last node where we took a left child and smaller than the root.
\`\`\`cpp
bool helper(TreeNode* root, long low, long high) {
	if (!root) return true;
	if (root->val <= low || root->val >= high) return false;
	return helper(root->left, low, root->val) && 
		helper(root->right, root->val, high);
}

bool isValidBST(TreeNode* root) {
	return helper(root, LONG_MIN, LONG_MAX);
}
\`\`\`

## Inorder Traversal
BST is strictly increasing in an inorder traversal.
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

Prev needs to be passed by reference so that the value of previous can backpropagate. Not passing it by reference will make copies and it wont backpropagate.`,"../dsa-notes/Backtracking/Combination Sum.md":`---
difficulty: Medium
topics: ["Backtracking"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/combination-sum/description/"
---

[[Backtracking]]

\`\`\`cpp
	vector<vector<int>> ans;
    void combine(vector<int>& candidates, vector<int> &sol, int idx, int target){
        if(target == 0) {ans.push_back(sol); return;}
        if(target < 0 || idx >= candidates.size())
            return;
        
        sol.push_back(candidates[idx]);
        combine(candidates, sol, idx, target - candidates[idx]);
        sol.pop_back();
        combine(candidates, sol, idx+1, target);
    }

    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<int> sol;
        combine(candidates, sol, 0, target);
        return ans;
    }
\`\`\`
`,"../dsa-notes/Backtracking/Word Search.md":`---
difficulty: Medium
topics: ["Backtracking"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/word-search/description/"
---

[[Backtracking]]

\`\`\`cpp
    vector<int> dx ={1, -1, 0, 0};
    vector<int> dy = {0, 0, 1, -1};

    bool solve(vector<vector<char>>& board, vector<vector<bool>> &vis, int idx, int x, int y, string& word){
        if(idx >= word.size())
            return true;
        if(x >= board.size() || x < 0 || y >= board[0].size() || y < 0) return false;
        if(vis[x][y] || board[x][y] != word[idx]) return false;

        vis[x][y] = true;
        for(int i = 0; i < 4; i++){
            int nx = x + dx[i];
            int ny = dy[i] + y;

            if(solve(board, vis, idx+1, nx, ny, word)) return true;
        }
        vis[x][y] = false;
        return false;
    }

    bool exist(vector<vector<char>>& board, string word) {
        vector<vector<bool>> vis(board.size(), vector<bool> (board[0].size(), 0));

        for(int i = 0; i < board.size(); i++) {
            for(int j = 0; j < board[0].size(); j++){
                if(board[i][j] == word[0] && solve(board, vis, 0, i, j, word))
                    return true;
            }
        }

        return false;
    }
\`\`\`
`,"../dsa-notes/Binary Search/Find Minimum in Rotated Sorted Array.md":`---
difficulty: Medium
topics: ["Binary Search"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"
---

[[Binary Search]]

Inflection Point - point where the array has a dip - \\[4, 5, 6, 1, 2, 3], here 1 is the inflection point as the array is increasing before and after 1.

As the list is sorted in ascending order, anytime left pointer is smaller than right pointer, we will be at the inflection point.

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

`,"../dsa-notes/Binary Search/Longest Valid Obstacle Course.md":`---
difficulty: Hard
topics: ["Binary Search", "Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/"
---

[[Binary Search]] [[Dynamic Programming]]

# Problem
You want to build some obstacle courses. You are given a\xA0**0-indexed**\xA0integer array\xA0\`obstacles\`\xA0of length\xA0\`n\`, where\xA0\`obstacles[i]\`\xA0describes the height of the\xA0\`ith\`\xA0obstacle.

For every index\xA0\`i\`\xA0between\xA0\`0\`\xA0and\xA0\`n - 1\`\xA0(**inclusive**), find the length of the\xA0**longest obstacle course**\xA0in\xA0\`obstacles\`\xA0such that:

- You choose any number of obstacles between\xA0\`0\`\xA0and\xA0\`i\`\xA0**inclusive**.
- You must include the\xA0\`ith\`\xA0obstacle in the course.
- You must put the chosen obstacles in the\xA0**same order**\xA0as they appear in\xA0\`obstacles\`.
- Every obstacle (except the first) is\xA0**taller**\xA0than or the\xA0**same height**\xA0as the obstacle immediately before it.

Return\xA0_an array_\xA0\`ans\`\xA0_of length_\xA0\`n\`,\xA0_where_\xA0\`ans[i]\`\xA0_is the length of the\xA0**longest obstacle course**\xA0for index_\xA0\`i\`\xA0_as described above_.

# Solution
1. **DP Solution without optimization**
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

2. **Optimized Solution**
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
`,"../dsa-notes/Binary Search/Russian Doll Envelopes.md":`---
difficulty: Hard
topics: ["Binary Search", "Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/russian-doll-envelopes/"
---

[[Binary Search]] [[Dynamic Programming]]

# Problem 
You are given a 2D array of integers\xA0\`envelopes\`\xA0where\xA0\`envelopes[i] = [wi, hi]\`\xA0represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return\xA0_the maximum number of envelopes you can Russian doll (i.e., put one inside the other)_.

**Note:**\xA0You cannot rotate an envelope.

# Solution
This problem can be converted into the [[Longest Increasing Subsequence]] problem by cleverly sorting the envelopes array.
We have to sort the envelopes array such that the widths are increasing and the heights are decreasing to convert it to the LIS problem.

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

The reason to do that is that the envelopes array after being sorted in increasing order of both width and height will contain duplicates if LIS is performed. So height needs to be in the decreasing order so that after selecting the largest height the smaller one is skipped.`,"../dsa-notes/Binary Search/Search in rotated sorted array.md":`---
difficulty: Medium
topics: ["Binary Search"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
---

[[Binary Search]]

At a given time, two of \`l\`, \`m\` and \`r\` belong to the same side of the inflection point. Inflection point in - [[Find Minimum in Rotated Sorted Array]]

So, when we find the inflection point, we can just eliminate one half of the array.
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
`,"../dsa-notes/Bit Manipulation/Add Binary.md":`---
difficulty: Easy
topics: ["Bit Manipulation"]
source: Leetcode
star: false
---

[[Bit Manipulation]]

 - Instead of converting to integer, add them in string for only by using a carry variable

\`\`\`cpp
\xA0 \xA0 string addBinary(string a, string b) {

\xA0 \xA0 \xA0 \xA0 int i = a.size() - 1;

\xA0 \xA0 \xA0 \xA0 int j = b.size() - 1;

\xA0 \xA0 \xA0 \xA0 int carry = 0;

\xA0 \xA0 \xA0 \xA0 string res = "";

  

\xA0 \xA0 \xA0 \xA0 while(i >= 0 || j >= 0 || carry > 0){

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 carry += (i>=0)?a[i--] - '0':0;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 carry += (j >= 0)?b[j--] - '0':0;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 res = char(carry%2 + '0') + res;

\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 carry/=2;

\xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 return res;

\xA0 \xA0 }
\`\`\`
`,"../dsa-notes/Dynamic Programming/Buy and Sell Stock IV.md":`---
difficulty: Hard
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv"
---

[[Dynamic Programming]]

# Problem
More generalised version of [[Buy and Sell stock III]]. Instead of 2 transactions, we can do atmost k transactions.

# Solution
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
`,"../dsa-notes/Dynamic Programming/Buy and Sell Stock with cooldown.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "Recursion"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
---

[[Dynamic Programming]] [[Recursion]]

# Problem
You are given an array\xA0\`prices\`\xA0where\xA0\`prices[i]\`\xA0is the price of a given stock on the\xA0\`ith\`\xA0day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

- After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

**Note:**\xA0You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

# Solution
This problem is related to the [[Buy and sell stock II]] problem, but with a cooldown. 

###  
The recursive solution is simple, we just skip the next element if we sell a stock on the current one.
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


###  Approach
For the DP table approach we need to maintain states, that is we can have two states - either we are selling stock or we can buy stock.
So we maintain a dp table where one column is the index and the other is the state we are in on that index.

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
Here, 0th column in the table denotes that we can buy stock and the 1st column denotes we can sell`,"../dsa-notes/Dynamic Programming/Buy and Sell stock III.md":`---
difficulty: Hard
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii"
---

[[Dynamic Programming]]

# Problem 
You are given an array\xA0\`prices\`\xA0where\xA0\`prices[i]\`\xA0is the price of a given stock on the\xA0\`ith\`\xA0day.

Find the maximum profit you can achieve. You may complete\xA0**at most two transactions**.

**Note:**\xA0You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

# Solution
Similar to [[Buy and Sell Stock with cooldown]] but we dont have a cooldown, instead we have a limited number of transactions available.
To tackle this we can use a 3D DP Table where there are 3 Dimensions - the index, the state i.e. buy or sell and the number of transactions we have left.

But since we only ever use the previous elements answers in the dp approach, we only need 2 2D tables - Prev and Curr.
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
`,"../dsa-notes/Dynamic Programming/Buy and sell stock II.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "Greedy"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
---

[[Dynamic Programming]] [[Greedy]]

# Problem

You are given an integer array\xA0\`prices\`\xA0where\xA0\`prices[i]\`\xA0is the price of a given stock on the\xA0\`ith\`\xA0day.

On each day, you may decide to buy and/or sell the stock. You can only hold\xA0**at most one**\xA0share of the stock at any time. However, you can buy it then immediately sell it on the\xA0**same day**.

Find and return\xA0_the\xA0**maximum**\xA0profit you can achieve_.

# Solution

For maximum profit we will have to buy every time the price is low and sell at the subsequent time when it is high, other wise we will miss some intervals.

\`\`\`cpp
int maxProfit(vector<int>& prices) {
        int ans = 0;int n = prices.size();
        for(int i = 1; i < n; i++){
            if(prices[i-1] < prices[i])
                ans += prices[i] - prices[i-1];
        }
        return ans;
}
\`\`\``,"../dsa-notes/Dynamic Programming/Buy and sell stock with transaction fee.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
---

[[Dynamic Programming]]

# Problem
You are given an array\xA0\`prices\`\xA0where\xA0\`prices[i]\`\xA0is the price of a given stock on the\xA0\`ith\`\xA0day, and an integer\xA0\`fee\`\xA0representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

**Note:**

- You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
- The transaction fee is only charged once for each stock purchase and sale.

# Solution
The solution is very similar to the [[Buy and Sell Stock with cooldown]] solution, except we don't skip the next element after selling and we also need to subtract the transactino fee from the profit on every sale.

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
`,"../dsa-notes/Dynamic Programming/Climbing Stairs.md":`---
difficulty: Easy
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/climbing-stairs/?envType=study-plan-v2&id=dynamic-programming"
code: LeetCode/Climbing Stairs.cpp
---
[[LeetCode/Climbing Stairs.cpp]]
[[Dynamic Programming]]

 Use a hash map to keep track of the values that have already been calculated, like we dont need to calculate the answer if n = 1, n = 2. So we store these in the hash map and use them when n is equal to these values. If n is equal to some number which is not yet in the map we calculate it and store it in the map for future reference. This way we dont need to calculate all the values of n <= n again and again.
eg- if n == 8, then one branch will calculate n == 7 and another will do n == 6. Now both branches will eventually need to calculate n == 5. But if n == 7 branch reaches n == 5 first, then we can just memorise the value of n == 5 and use it when n == 6 branch reaches n == 5.
`,"../dsa-notes/Dynamic Programming/Coin Change.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "BFS"]
source: Leetcode
star: false
---

[[Dynamic Programming]] [[BFS]]

[Coin Change]([Coin Change - LeetCode](https://leetcode.com/problems/coin-change/submissions/934571154/)) 
use an array to keep track of the number of coins required for each amount from 0 to amount called dp. Traverse this array while checking the coins array simoultaneously and take the minimum of the number of coins required.`,"../dsa-notes/Dynamic Programming/Delete Operation for Two Strings.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/delete-operation-for-two-strings/description/"
---

[[Dynamic Programming]]

# Problem
Given two strings\xA0\`word1\`\xA0and\xA0\`word2\`, return\xA0_the minimum number of\xA0**steps**\xA0required to make_\xA0\`word1\`\xA0_and_\xA0\`word2\`\xA0_the same_.

In one\xA0**step**, you can delete exactly one character in either string.

# Solution
This problem is the same as [[Longest Common Subsequence]] problem, except we return a different thing.

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
`,"../dsa-notes/Dynamic Programming/Delete and Earn.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
code: LeetCode/Delete_and_earn.cpp
---
[[LeetCode/Delete_and_earn.cpp]]
[[Dynamic Programming]]

[[House Robber]] 
This problem is very similar to the house robber problem, here if the nums array is converted to a array with only unique elements, with the frequencies of those elements stored in a hash-map, we can see that if two consecutive elements in the array differ by only one, then we can only chose one of them and not both. This case makes it essentially the same as the house robber problem with an exception of the other case where consecutive elements differ by more than one in which case we can always take both of them.

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
\`\`\``,"../dsa-notes/Dynamic Programming/Diameter of Tree.md":`---
difficulty: Easy
topics: ["Recursion", "Dynamic Programming"]
source: Standard
star: false
---

[[Recursion]] [[Dynamic Programming]]

# Problem
The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two end nodes. The diagram below shows two trees each with diameter nine, the leaves that form the ends of the longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes).

# Solution

The diameter can either pass through a node and move up, or it can be the left subtree + right subtree + node

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
`,"../dsa-notes/Dynamic Programming/Distinct Subsequences.md":`---
difficulty: Hard
topics: ["Dynamic Programming"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/distinct-subsequences/description/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/distinct_subsequences.cpp
---
[[LeetCode/distinct_subsequences.cpp]]
[[Dynamic Programming]]

# Problem

Given two strings\xA0\`s\`\xA0and\xA0\`t\`, return\xA0_the number of distinct_\xA0**_subsequences** \xA0_of_\xA0\`s\`\xA0_which equals_\xA0\`t\`.
The test cases are generated so that the answer fits on a 32-bit signed integer.

# Solution

This problem is a variation of the [[Longest Common Subsequence]] question. Here since we have to match string \`t\` to a subsequence of \`s\`, we won't consider a case where we skip a letter of \`t\`. And to count the number of subsequences, we just add the cases where the characters match to the ones where we dont include that character.

unsigned long long int is used because the test cases get very large but the solution is under the int range so we have no issues returning int.

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
\`\`\``,"../dsa-notes/Dynamic Programming/Domino and Tromino Tiling.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/domino-and-tromino-tiling/description/?envType=study-plan-v2&envId=dynamic-programming"
---

[[Dynamic Programming]]

# Problem
You have two types of tiles: a \`2 x 1\` domino shape and a tromino shape. You may rotate these shapes.

![](https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg)

Given an integer n, return _the number of ways to tile an_ \`2 x n\` _board_. Since the answer may be very large, return it **modulo** \`109 + 7\`.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

# Solution
This problem is more about pattern recognisation than dynamic programming, here the number of ways has a clear pattern to it and does not require much coding to write the answer

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

`,"../dsa-notes/Dynamic Programming/Edit Distance.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "Recursion"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/edit-distance/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/edit_distance.cpp
---
[[LeetCode/edit_distance.cpp]]
[[Dynamic Programming]] [[Recursion]]

Given two strings\xA0\`word1\`\xA0and\xA0\`word2\`, return\xA0_the minimum number of operations required to convert\xA0\`word1\`\xA0to\xA0\`word2\`_.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character

# Solution

This Problem is similar to the [[Minimum Number of Deletions and Insertions]] except here we have the option to delete as well.

So we have the base case where either one of the strings is empty, so we will have to insert characters equal to the length of the non empty string.
Now if two characters are equal no change is required, if they aren't then we calculate the minimum of the cases where we replace, delete or insert character.
Now to delete a character we simply take a substring without the last char for word1 and keep word2 as it is.
For insert, we assume that we have inserted a character in word1 after the last char and we reduce the length of word2 by one since the last character got inserted to word1 and got matched
For replacement we assume we have replaced a character in word1 and matched it with word2 so we reduce the length of both word1 and word2 by one

# 
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

DP-Table
\`\`\`cpp
int minDistance(string word1, string word2)
{
    int m = word1.size(), n = word2.size();
    if(m == 0)
        return n;
    if(n == 0)
        return m;
    vector<int> prev(n + 1);
    for (int i = 0; i < n + 1; i++)
        prev[i] = i;
    vector<int> curr(n + 1);
    for (int i = 1; i < m + 1; i++)
    {
        curr[0] = i;
        for (int j = 1; j < n + 1; j++)
        {
            if(word1[i-1] == word2[j-1])
                curr[j] = prev[j-1];
            else
                curr[j] = 1 + min(min(prev[j-1], prev[j]), curr[j-1]);
        }
        prev = curr;
    }

    return curr[n];
}
\`\`\`
`,"../dsa-notes/Dynamic Programming/Fibonacci Number.md":`---
difficulty: Easy
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/fibonacci-number/?envType=study-plan-v2&id=dynamic-programming"
code: LeetCode/fibonacci_number.cpp
---
[[LeetCode/fibonacci_number.cpp]]
[[Dynamic Programming]]

the idea is same as [[Climbing Stairs]].`,"../dsa-notes/Dynamic Programming/House Robber.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
code: LeetCode/House_robber.cpp
---
[[LeetCode/House_robber.cpp]]
[[Dynamic Programming]]

[House Robber - LeetCode](https://leetcode.com/problems/house-robber/?envType=study-plan-v2&id=dynamic-programming) This Problem is like [[01 KnapSack]].  
**Recursive Approach with Memorization:**

The \`helper\` function uses a recursive approach to solve the problem, where it calculates the maximum amount that can be robbed starting from a given index in the \`nums\` array. It uses memoization to avoid redundant calculations.

The \`helper\` function takes three parameters: \`nums\` (the array of house values), \`index\` (the current index being considered), and \`memo\` (an array to store the calculated results for each index). 

At each index, the function checks if the result for that index has already been calculated and stored in the \`memo\` array. If so, it returns the stored result. Otherwise, it calculates the maximum amount that can be robbed either by robbing the current house and moving two steps ahead (\`nums[index] + helper(nums, index + 2, memo)\`), or by skipping the current house and moving one step ahead (\`helper(nums, index + 1, memo)\`). It then stores the maximum amount in the \`memo\` array for future reference and returns it.

The \`rob\` function initializes the \`memo\` array with \`-1\` values and calls the \`helper\` function with the initial parameters \`nums\` and \`index=0\`. It returns the maximum amount that can be robbed by calling the \`helper\` function.

**Recursive Approach with Better Space Complexity:**

The \`helper\` function uses a recursive approach to solve the problem, similar to the previous approach, but with better space complexity. It avoids creating new subarrays and instead uses indices (\`start\` and \`end\`) to represent the range of houses being considered.

The \`helper\` function takes four parameters: \`nums\` (the array of house values), \`start\` (the starting index of the current range), \`end\` (the ending index of the current range), and \`sum\` (the sum of values of previously robbed houses).

At each step, the function checks the base cases: if \`start >= end\`, it means there are no more houses to consider, so it returns 0. If there is only one house in the range (\`end - start == 1\`), it returns the sum of the house value and the \`sum\` parameter.

Otherwise, it recursively calculates the maximum amount that can be robbed either by robbing the current house and moving two steps ahead (\`nums[start] + helper(nums, start + 2, end, sum)\`),

\`\`\`cpp
int helper(vector<int> &nums, int index, vector<int> &memo)
// Memorisation
{

    if (index >= nums.size())

        return 0;

    if (memo[index] != -1)

        return memo[index];

    int robCurrent = nums[index] + helper(nums, index + 2, memo);

    int skipCurrent = helper(nums, index + 1, memo);

    int maxAmount = max(robCurrent, skipCurrent);

    memo[index] = maxAmount;

    return maxAmount;
}

int helper(vector<int> &nums, int start, int end, int sum)
// Recursion but with better space complexity
{

    if (start >= end)

        return 0;

    else if (end - start == 1)

        return sum + nums[start];

    else

        return max(sum + nums[start] + helper(nums, start + 2, end, sum), sum + helper(nums, start + 1, end, sum));
}

int robber(vector<int> &nums, int sum)
// Recursion with worse space complexity
{

    if (nums.size() == 0)
        return 0;

    else if (nums.size() == 1)

        return sum + nums[0];

    else
    {

        vector<int> nums1(nums.begin() + 1, nums.end());

        vector<int> nums2(nums.begin() + 2, nums.end());

        return max(sum + nums[0] + robber(nums2, sum), sum + robber(nums1, sum));
    }
}

int robber(vector<int> &nums)
{
    int n = nums.size();
    if (n == 0)
        return 0;
    else if (n == 1)
        return nums[0];

    vector<int> dp(n);
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);

    for (int i = 2; i < n; i++)
    {
        dp[i] = max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[n - 1];
}

int rob(vector<int> &nums)

{

    int n = nums.size();

    vector<int> memo(n, -1);

    return helper(nums, 0, memo);
}
\`\`\`
`,"../dsa-notes/Dynamic Programming/Longest Arithmetic Sequence of Given Difference.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference"
---

[[Dynamic Programming]]

# Problem 
Given an array and a difference, we need to find an AP in the array as a subsequence with the longest length.

# Solution
This problem is very similar to the [[Longest Increasing Subsequence]]. Except here we also need the number to be \`arr[i] + difference\`.
To make the algorithm faster we use a hash map to store all the previously calculated values to avoid looping twice

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

`,"../dsa-notes/Dynamic Programming/Longest Arithmetic Subsequence.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/longest-arithmetic-subsequence"
code: LeetCode/longest_arithmetic_subsequence.cpp
---
[[LeetCode/longest_arithmetic_subsequence.cpp]]
[[Dynamic Programming]]

# Problem
Given an array\xA0\`nums\`\xA0of integers, return\xA0_the length of the longest arithmetic subsequence in_\xA0\`nums\`.

**Note**\xA0that:

- A\xA0**subsequence**\xA0is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
- A sequence\xA0\`seq\`\xA0is arithmetic if\xA0\`seq[i + 1] - seq[i]\`\xA0are all the same value (for\xA0\`0 <= i < seq.length - 1\`).

# Solution


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
\`\`\``,"../dsa-notes/Dynamic Programming/Longest Increasing Subsequence-Abhinav-Victus.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "Recursion", "Greedy", "Binary Search"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/longest-increasing-subsequence/?envType=study-plan-v2&envId=dynamic-programming"
---

[[Dynamic Programming]] [[Recursion]] [[Greedy]] [[Binary Search]]

# Problem
Given an integer array nums, return the length of the longest strictly increasing 
subsequence.

# Solution
The recursive solution is very straight forward, we just need to start from the last element and check if the subsequent elements be taken in to the subsequence, they can be taken if they are smaller than the last taken element.

\`The time complexity will be of the order 2^n\` 
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
    // return 0;
    return help(nums, nums.size(), INT32_MAX);
}
\`\`\`

DP-Table
For DP, we just iterate from the last element, and for every element check every next element if they are larger or not and then add 1 to the subsequence containing them

\`\`\`cpp
int lengthOfLIS(vector<int> &nums)
{
    int n = nums.size();
    vector<int> ans(n);
    int maxi = INT32_MIN;
    for (int i = n - 1; i >= 0; i--)
    {
        int temp = 1;
        for (int j = n - 1; j > i; j--)
        {
            if (nums[i] < nums[j])
                temp = max(temp, ans[j] + 1);
        }
        ans[i] = temp;
        maxi = max(temp, maxi);
    }

    return maxi;
}
\`\`\`


We use binary search to find the element in the ans table which is the minimum element greater than or equal to the current element and replace it with the current element

\`\`\`cpp
int lengthOfLIS(vector<int> &nums)
{
	int n = nums.size();
	vector<int> ans;
	for(int i = 0; i < n; i++)
	{
		if(ans.size() == 0 || ans[ans.size() - 1] < nums[i])
			ans.push_back(nums[i]);
		else
		{
			auto it = lower_bound(ans.begin(), ans.end(), nums[i]);
			*it = nums[i];
		}
	}
	return t.size();
}
\`\`\`

`,"../dsa-notes/Dynamic Programming/Longest Increasing Subsequence.md":`---
difficulty: Medium
topics: ["Recursion", "Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/longest-increasing-subsequence/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/longest_increasing_subsequence.cpp
---
[[LeetCode/longest_increasing_subsequence.cpp]]
[[Recursion]] [[Dynamic Programming]]

# Problem
Given an integer array nums, return the length of the longest strictly increasing 
subsequence.

# Solution
The recursive solution is very straight forward, we just need to start from the last element and check if the subsequent elements be taken in to the subsequence, they can be taken if they are smaller than the last taken element.

\`The time complexity will be of the order 2^n\` 
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
    // return 0;
    return help(nums, nums.size(), INT32_MAX);
}
\`\`\`

DP-Table
For DP, we just iterate from the last element, and for every element check every next element if they are larger or not and then add 1 to the subsequence containing them

\`\`\`cpp
int lengthOfLIS(vector<int> &nums)
{
    int n = nums.size();
    vector<int> ans(n);
    int maxi = INT32_MIN;
    for (int i = n - 1; i >= 0; i--)
    {
        int temp = 1;
        for (int j = n - 1; j > i; j--)
        {
            if (nums[i] < nums[j])
                temp = max(temp, ans[j] + 1);
        }
        ans[i] = temp;
        maxi = max(temp, maxi);
    }

    return maxi;
}
\`\`\``,"../dsa-notes/Dynamic Programming/Maximal Square.md":`---
difficulty: Medium
topics: ["Matrix", "Recursion", "Dynamic Programming"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/maximal-square/submissions/963073692/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/maximal_square.cpp
---
[[LeetCode/maximal_square.cpp]]
[[Matrix]] [[Recursion]] [[Dynamic Programming]]

The basic idea is that we can consider each cell as the top left cell of a square, then we can check the right, down, and diagonally right cells of the current cell and see if they form a square, now we call this function again on the right, down, diag cells and check if they form a square with them as the top left cell of the square.

If the cell has a value of 1, then it automatically forms a square of atleast 1x1. 
So now, when the right, down and diag cells of the current cell also have a value greater than 0, say 1 for example, then the current sell will form a square of 1x1 atleast.

If a cell is the top left cell of a 3x3 square then we can be sure that the cells to the down right and diag to it are the top left cells of their respective 2x2 or more squares.

We have used this fact to make the DP table, in the table we are traversing the matrix in reverse order and checking the adjacent cells of the current cell. Now since the cells are being traversed in a reverse order, the sizes of the squares will progressively increase. So if a cell is part of a 2x2 square as the top left cell of that square, then we store the value 2 in it, this tells us the length of the square 
This is the basis of our memorisation.


## #  

![[Pasted image 20230603215658.png]]


##  

The code implements a solution to find the maximum square size within a given matrix. It uses dynamic programming (DP) and memorization techniques to optimize the solution.

The basic idea is to treat each cell in the matrix as the top-left cell of a square and check if the cells to the right, down, and diagonally right form a square. This is done recursively by calling the function on the right, down, and diagonal cells, considering them as the new top-left cells.

To optimize the solution, the code uses a DP table represented by a 1D vector named \`t\`. The table stores the lengths of the squares found so far. It is traversed in reverse order to progressively increase the sizes of the squares.

The algorithm starts by initializing variables such as \`m\` (number of rows in the matrix), \`n\` (number of columns in the matrix), \`maxSquareSize\` (maximum square size found so far), and \`prev\` (temporarily stores the previous value of \`t[j]\`).

The nested loops iterate through the matrix in reverse order. For each cell at position \`(i, j)\`, the code updates the DP table entry \`t[j]\` based on the value of \`matrix[i][j]\` and the neighboring cells.

If the cell is on the last row or last column (\`i == m - 1\` or \`j == n - 1\`), the value in \`t[j]\` is set to the corresponding value in \`matrix[i][j]\`. This means that if the cell has a value of 1, it forms a square of at least 1x1.

If the cell is not on the last row or last column and its value is not '0', the code calculates the new value for \`t[j]\`. It takes the minimum value among the current \`t[j]\`, the previous value \`prev\`, and the next value \`t[j + 1]\`. This accounts for the right, down, and diagonally right cells forming a square with the current cell as the top-left cell.

If the cell value is '0', it means it does not form a square, so the value of \`t[j]\` is set to 0.

After updating \`t[j]\`, the code checks if the new value is greater than \`maxSquareSize\`. If so, it updates \`maxSquareSize\` with the new value.

Finally, the function returns the square of \`maxSquareSize\`, which represents the area of the largest square found in the matrix.

The code is implemented in C++ and uses a \`vector<vector<char>>\` parameter to represent the matrix. The function \`maximalSquare\` takes this matrix as input and returns the maximum square size.

Overall, the code efficiently finds the maximum square size within the given matrix using dynamic programming and memorization techniques, resulting in an optimized solution.

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


`,"../dsa-notes/Dynamic Programming/Maximum Path Sum Node to Node.md":`---
difficulty: Medium
topics: ["Recursion", "Trees", "Dynamic Programming"]
source: GFG
star: false
link: "https://practice.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article"
---

[[Recursion]] [[Trees]] [[Dynamic Programming]]

# Problem
Given a binary tree,\xA0the task is to find the maximum path sum. The path may start and end at any node in the tree.

# Solution
Since we don't always need to go to the leaf, there can be a node which has a higher value than the left and right subtree maximum path sums

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

`,"../dsa-notes/Dynamic Programming/Min Cost Climbing Stairs.md":`---
difficulty: Easy
topics: ["Dynamic Programming"]
source: Leetcode
star: false
code: LeetCode/min_cost_climbing_stairs.cpp
---
[[LeetCode/min_cost_climbing_stairs.cpp]]
[[Dynamic Programming]]

[Min Cost Climbing Stairs - LeetCode](https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan-v2&id=dynamic-programming)
1.   - use a hash map to memorise previously calculated values for the respective numbers in the array cost. as the original funciton doesnt have a parameter for the index i, we need to create a new function which taked the cost array and an index i, the i^th index is the index for which we are calculating the minimum cost. This way we can calculate the minimum cost of n, n-1th element of cost array and take the minimum of those two to find the final cost.
2. Another way is to not use recursion but open up the recursion into a simple for loop. for each element with i>=2, we calculate min(cost[i-1], cost[i-2]) and add it to that elements cost, this does essentially the same thing as recursion but destroys the cost array in the process. To get the final answer we again take the minimum of cost of n-1 and nth element.`,"../dsa-notes/Dynamic Programming/Minimum ASCII Delete Sum for Two Strings.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
---

[[Dynamic Programming
# Problem
[Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
Given two strings\xA0\`s1\`\xA0and\xA0\`s2\`, return\xA0_the lowest\xA0**ASCII**\xA0sum of deleted characters to make two strings equal_.

# Solution

This problem is a variation of [[Longest Common Subsequence]] problem, here we add the ASCII number of that character to find the minimum delete value.

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
\`\`\``,"../dsa-notes/Dynamic Programming/Minimum Path Sum.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "Matrix"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/minimum-path-sum/?envType=study-plan-v2&envId=dynamic-programming"
---

[[Dynamic Programming]] [[Matrix]]

# # 
we create a solution matrix \`t\` which will hold the cost to reach every cell from the start.
The way we calculate it is, that for each cell we add -> \`min(grid[i-1][j], grid[i][j-1])\` to \`grid[i][j]\`.
This value gives the minimum of the cost to reach that cell as only the downward and rightward movements are allowed. This has a similar feel to the [[Unique Paths]] problem as here also we have to make a choice between going down or going right based on the minimum possible cost, but instead of traversing backward we are traversing forward here. However we can solve this problem by traversing backward as well.

## Forward traversal
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

## Backward Traversal
![[Pasted image 20230530173239.png]]

The backward solution is from Neetcode.`,"../dsa-notes/Dynamic Programming/Minimum cost for tickets.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/minimum-cost-for-tickets/?envType=study-plan-v2&envId=dynamic-programming"
---

[[Dynamic Programming]]

# Problem
You have planned some train travelling one year in advance. The days of the year in which you will travel are given as an integer array \`days\`. Each day is an integer from \`1\` to \`365\`.

Train tickets are sold in **three different ways**:

- a **1-day** pass is sold for \`costs[0]\` dollars,
- a **7-day** pass is sold for \`costs[1]\` dollars, and
- a **30-day** pass is sold for \`costs[2]\` dollars.

The passes allow that many days of consecutive travel.

- For example, if we get a **7-day** pass on day \`2\`, then we can travel for \`7\` days: \`2\`, \`3\`, \`4\`, \`5\`, \`6\`, \`7\`, and \`8\`.

Return _the minimum number of dollars you need to travel every day in the given list of days_.

# Solution


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

This is a simple problem which can be solved using a 1D array, its like the [[Leetcode/Coin Change|Coin Change]] problem.

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

Here for each day we check which cost will be the least and cache the solution into the array.`,"../dsa-notes/Dynamic Programming/Nth Tribonacci Number.md":`---
difficulty: Easy
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/n-th-tribonacci-number/?envType=study-plan-v2&id=dynamic-programming"
---

[[Dynamic Programming]]

`,"../dsa-notes/Dynamic Programming/Number Of Longest Increasing Subsequences.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/number_of_longest_increasing_subsequences.cpp
---
[[LeetCode/number_of_longest_increasing_subsequences.cpp]]
[[Dynamic Programming]]

# Problem
Given an integer array\xA0\`nums\`, return\xA0_the number of longest increasing subsequences._
**Notice**\xA0that the sequence has to be\xA0**strictly**\xA0increasing.

# Solution
This problem is an extended version of the [[Longest Increasing Subsequence]] problem. We use the same solution as in that problem but we have to count the number of ways in which the maximum occurs, so we define 2 new variables - the max_length and the ans. These keep track of the maximum length encountered so far and they also track how many times that length has appeared so far.

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
\`\`\``,"../dsa-notes/Dynamic Programming/Perfect Squares.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/perfect-squares/"
code: LeetCode/perfect_squares.cpp
---
[[LeetCode/perfect_squares.cpp]]
[[Dynamic Programming]]

# Problem
Given an integer\xA0\`n\`, return\xA0_the least number of perfect square numbers that sum to_\xA0\`n\`.

A\xA0**perfect square**\xA0is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example,\xA0\`1\`,\xA0\`4\`,\xA0\`9\`, and\xA0\`16\`\xA0are perfect squares while\xA0\`3\`\xA0and\xA0\`11\`\xA0are not.

# Solution
This problem is exactly the same as the [[Number Of Coins]] problem. Except here the array of coins is replaced by the array of numbers up to and including the root of the given number.

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
\`\`\``,"../dsa-notes/Dynamic Programming/Solving Questions with brainpwer.md":'---\ndifficulty: Medium\ntopics: ["Dynamic Programming"]\nsource: Leetcode\nstar: false\nlink: "https://leetcode.com/problems/solving-questions-with-brainpower"\n---\n\n[[Dynamic Programming]]\n\n# Problem\nYou are given a\xA0**0-indexed**\xA02D integer array\xA0`questions`\xA0where\xA0`questions[i] = [pointsi, brainpoweri]`.\n\nThe array describes the questions of an exam, where you have to process the questions\xA0**in order**\xA0(i.e., starting from question\xA0`0`) and make a decision whether to\xA0**solve**\xA0or\xA0**skip**\xA0each question. Solving question\xA0`i`\xA0will\xA0**earn**\xA0you\xA0`pointsi`\xA0points but you will be\xA0**unable**\xA0to solve each of the next\xA0`brainpoweri`\xA0questions. If you skip question\xA0`i`, you get to make the decision on the next question.\n\n- For example, given\xA0`questions = [[3, 2], [4, 3], [4, 4], [2, 5]]`:\n    - If question\xA0`0`\xA0is solved, you will earn\xA0`3`\xA0points but you will be unable to solve questions\xA0`1`\xA0and\xA0`2`.\n    - If instead, question\xA0`0`\xA0is skipped and question\xA0`1`\xA0is solved, you will earn\xA0`4`\xA0points but you will be unable to solve questions\xA0`2`\xA0and\xA0`3`.\n\nReturn\xA0_the\xA0**maximum**\xA0points you can earn for the exam_.\n\n# Solution\n\nThis question is an easy 1-D array type question, where we start from the last and take the max of either picking the question or not picking the question.\n\n```cpp\nlong long mostPoints(vector<vector<int>>& questions) {\n    int n = questions.size();\n    vector<long long> t(n + 1);\n    for(int i = n - 1; i >= 0; i--){\n        t[i] = max(questions[i][0] + ((i + questions[i][1] + 1 < n)?(t[i + questions[i][1] + 1]) : 0), t[i + 1]);\n    }\n\n    return t[0];\n}\n```\n',"../dsa-notes/Dynamic Programming/Uncrossed Lines.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/uncrossed-lines"
code: LeetCode/uncrossed_lines.cpp
---
[[LeetCode/uncrossed_lines.cpp]]
[[Dynamic Programming]]

# Problem
You are given two integer arrays\xA0\`nums1\`\xA0and\xA0\`nums2\`. We write the integers of\xA0\`nums1\`\xA0and\xA0\`nums2\`\xA0(in the order they are given) on two separate horizontal lines.

We may draw connecting lines: a straight line connecting two numbers\xA0\`nums1[i]\`\xA0and\xA0\`nums2[j]\`\xA0such that:

- \`nums1[i] == nums2[j]\`, and
- the line we draw does not intersect any other connecting (non-horizontal) line.

Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).

Return\xA0_the maximum number of connecting lines we can draw in this way_.

# Solution
This problem is just [[Longest Common Subsequence]] in a different form, the solution is exactly the same

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
\`\`\``,"../dsa-notes/Dynamic Programming/Unique Binary Search Trees II.md":`---
difficulty: Medium
topics: ["Recursion", "Dynamic Programming"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/unique-binary-search-trees-ii"
---

[[Recursion]] [[Dynamic Programming]]

# Problem
Given an integer\xA0\`n\`, our task is to return all unique BSTs (binary search trees) that have exactly\xA0\`n\`\xA0nodes of unique values from\xA0\`1\`\xA0to\xA0\`n\`.

# Solution
# approach. 
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

Simple permutation approach, where we assign each element as the root and then the elements to the left of it form the left subtree. In the left subtree, all the elements to the left of original node get to be the root of the left subtree which makes the left subtree a subproblem of the original problem. We cache all the results - the start and end point and the possibilities that it generates into a map.


DP-Table approach

This is a very good approach.
So we declare a 3D array t to store all the answers the first level denotes the starting node, the next level denotes the ending node and the third level houses the answers.
so we only ever call t\\[i]\\[j] and it returns the whole vector at the third level.

So, when start and end nodes are equal, the answer will always be a tree with only one element that is the base case.

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
\`\`\``,"../dsa-notes/Dynamic Programming/Unique Binary Search Trees.md":`---
difficulty: Medium
topics: ["Dynamic Programming"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/unique-binary-search-trees/description/?envType=study-plan-v2&envId=dynamic-programming"
---

[[Dynamic Programming]]

# Problem::
Given an integer\xA0\`n\`, return\xA0_the number of structurally unique\xA0**BST'**s (binary search trees) which has exactly_\xA0\`n\`\xA0_nodes of unique values from_\xA0\`1\`\xA0_to_\xA0\`n\`.

# Solution
This problem has the [[Catalan's Number]] as it's solution. for each number in 1-n, we have a choice, either it will be the node or not, then if its a node all the numbers to its left will be in the left subtree and they will have a choice to be the root of that subtree, same for the right subtree.

This adds up to the catalan's number

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
`,"../dsa-notes/Dynamic Programming/Unique Paths 2.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "Matrix"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/unique-paths-ii/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/unique_paths_2.cpp
---
[[LeetCode/unique_paths_2.cpp]]
[[Dynamic Programming]] [[Matrix]]

`,"../dsa-notes/Dynamic Programming/Unique Paths.md":`---
difficulty: Medium
topics: ["Matrix", "Recursion", "Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/unique-paths/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/unique_paths.cpp
---
[[LeetCode/unique_paths.cpp]]
[[Matrix]] [[Recursion]] [[Dynamic Programming]]
## Backtracking 
- The first solution is to use the usual backtracking logic used to find the number of combinations of given numbers. Assume each downward move to be represented by a 0 and each rightward move to be represented by 1. Then we can represent the movement of the bot by a string of 1's and 0's
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
Here \`size = m + n -2\` which is the number of steps the bot has to take.
![[Pasted image 20230530163239.png]]

## DP-Table 
The second solution is to use . In this solution we create a matrix of the size \`MxN\` and we traverse the matrix in reverse order, i.e. - we start from the finish point and move backward in row major fashion to the bot. In each cell we represent the number of ways we can reach the finish from that cell. Now, for each cell this number will be equal to the sum of the number of ways for the immediate right and bottom cells, as at any given cell the bot has only two choices - Down or Right.
This also means that the number of ways for all the cells in the bottom row and the right most column is 1, as they can only move in one direction. This gives the base of our dp.
\`\`\`cpp
vector<vector<int>> t(m, vector<int>(n, 0));
    for (int i = t.size() - 1; i >= 0; i--)
    {
        for (int j = t[0].size() - 1; j >= 0; j--)
        {
            if (i == t.size() - 1 || j == t[0].size() - 1)
                t[i][j] = 1;
            else
            {
                int x = 0, y = 0;
                if (i + 1 < t.size())
                    x = t[i + 1][j];
                if (j + 1 < t[0].size())
                    y = t[i][j + 1];
                t[i][j] = x + y;
            }
        }
    }
    return t[0][0];
\`\`\`

![[Pasted image 20230530163705.png]]

There is a significant performance difference between the backtracking solution (which recalculates a lot of the same values and also has a performance overhead for using the set data structure) and the DP solution (it doesn't recalculate and is a O(MxN) solution.)`,"../dsa-notes/Dynamic Programming/Word Break.md":`---
difficulty: Medium
topics: ["Dynamic Programming", "Recursion", "BFS"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/word-break/?envType=study-plan-v2&envId=dynamic-programming"
code: LeetCode/word_break.cpp
---
[[LeetCode/word_break.cpp]]
[[Dynamic Programming]] [[Recursion]] [[BFS]]

# Problem
Given a string\xA0\`s\`\xA0and a dictionary of strings\xA0\`wordDict\`, return\xA0\`true\`\xA0if\xA0\`s\`\xA0can be segmented into a space-separated sequence of one or more dictionary words.

**Note**\xA0that the same word in the dictionary may be reused multiple times in the segmentation.

# Solution

# 
We do as the question says, iterate over the array and at each point check if a break can be placed here, by checking that the substring before the break is in wordDict and the calling resursive function on the substring after the break.
We can optimise this be moving not by i++, but by using the length of the words in wordDict and by also using a memorisation table to eliminate recalculation.

\`\`\`cpp
//code
unordered_map<string, bool> memo;

bool check(string sub, vector<string> &wordDict)
{
    int n = wordDict.size();
    for (int i = 0; i < n; i++)
    {
        if (wordDict[i] == sub)
            return true;
    }

    return false;
}

bool wordBreak(string s, vector<string> &wordDict)
{
    memo.clear();
    return wordBreakHelp(s, wordDict);
}

bool wordBreakHelp(string s, vector<string> &wordDict)
{
    int n = s.size();
    if (n == 0)
        return true;
    else
    {
        if (memo.find(s) != memo.end())
            return memo[s];
        else
        {
            for (string word : wordDict)
            {
                if (word.size() <= n)
                    if (check(s.substr(0, word.size()), wordDict) && wordBreakHelp(s.substr(word.size(), n - word.size()), wordDict))
                        return memo[s] = true;
            }
            return memo[s] = false;
        }
    }
    return memo[s] = false;
}
\`\`\`




# 

Similar to the Recursive approach, we are going through the given string and check the substrings if they match or not, but here we are using a  to accomodate all the decisions.

\`\`\`cpp
class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> words(wordDict.begin(), wordDict.end());
        queue<int> queue;
        vector<bool> seen(s.length(), false);
        queue.push(0);
        
        while (!queue.empty()) {
            int start = queue.front();
            queue.pop();
            
            if (start == s.length()) {
                return true;
            }
            
            for (int end = start + 1; end <= s.length(); end++) {
                if (seen[end]) {
                    continue;
                }

                if (words.find(s.substr(start, end - start)) != words.end()) {
                    queue.push(end);
                    seen[end] = true;
                }
            }
        }
        
        return false;
    }
};
\`\`\`
`,"../dsa-notes/Graphs/Account Merge.md":`---
difficulty: Hard
topics: ["Graphs", "Disjoint Set Union"]
source: Standard
star: false
---

[[Graphs]] [[Disjoint Set Union]]

# Problem 
Given a list of accounts where each element accounts \\[ i ] is a list of strings, where the first element account \\[ i ]\\[ 0 ]  is a name, and the rest of the elements are emails representing emails of the account.
Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.
After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order.
Note: Accounts themselves can be returned in any order.

# Solution

Using [[Disjoint Set Union]] 

\`\`\`c++
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
\`\`\``,"../dsa-notes/Graphs/Alien Dictionary.md":`---
difficulty: Hard
topics: ["Graphs", "Topological Sort"]
source: Standard
star: true
link: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1"
---

[[Graphs]] [[Topological Sort]]

# Problem
Given a sorted dictionary of an alien language having N words and\xA0k starting alphabets of standard dictionary. Find the order of characters in the alien language.  
**Note:**\xA0Many orders may be\xA0possible for a particular test case, thus\xA0you may return any valid order and\xA0output will be 1 if the order of string returned by the function is correct else 0 denoting incorrect string returned.

# Solution
1. make a graph with every node representing each letter
2. add a directed edge between characters in the order of them appearing in the dict
3. do a [[Topological Sort]] on the graph

\`\`\`cpp
string findOrder(string dict[], int N, int K) {
    //code here
    vector<vector<int>> graph(K);
    vector<int> indegree(K, 0);
//Making the graph
    for(int i = 0; i < N-1; i++){
        string s1 = dict[i];
        string s2 = dict[i+1];
        int l = min(s1.size(), s2.size());
        int j = 0;
        while(j < l && s1[j] == s2[j])
            j++;
        
         if (j < s1.size() && j < s2.size()) {
            graph[s1[j] - 'a'].push_back(s2[j] - 'a');
            indegree[s2[j] - 'a']++;
        }
    }

	//Topo sort
    queue<int> q;
    
    for(int i = 0; i < K; i++)
        if(indegree[i] == 0)
            q.push(i);
            
    string ans = "";
    while(!q.empty()){
        int curr = q.front(); 
        q.pop();
        ans = ans + char(curr + 'a');
        for(int i = 0; i < graph[curr].size(); i++){
            indegree[graph[curr][i]]--;
            if(indegree[graph[curr][i]] == 0)
                q.push(graph[curr][i]);
        }    
    }
    
    for(int i = 0; i < K; i++)
        if(indegree[i] != 0)
            ans = ans + char(i + 'a');
            
    return ans;
}
\`\`\``,"../dsa-notes/Graphs/Bellman Ford Algorithm.md":`---
difficulty: Medium
topics: ["Graphs", "Bellman Ford"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1"
---

[[Graphs]] [[Bellman Ford]] [[Graphs]]

# Problem
Given a weighted, directed and connected graph of V vertices and E edges, Find the shortest distance of all the vertex's from the source vertex S. If a vertices can't be reach from the S then mark the distance as 10^8. Note: If the Graph contains a negative cycle then return an array consisting of only -1.

# Solution
Since the graphs can have a negative edge cycle, [[Dijkstra's Algorithm]] will not work as for every iteration the negative cycle will keep on reducing the distance and the queue will not become empty.
So we do exactly \`N-1\` number of iterations on the graph, and if on the \`Nth\` iteration the value of distance for a node changes we report that the graph has a negative edge cycle.

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
\`\`\``,"../dsa-notes/Graphs/Cheapest Flights Within K Stops.md":`---
difficulty: Medium
topics: ["Graphs", "Dijkstra"]
source: Standard
star: false
link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/"
---

[[Graphs]] [[Dijkstra]]

# Problem
There are \`n\` cities connected by some number of flights. You are given an array \`flights\` where \`flights[i] = [fromi, toi, pricei]\` indicates that there is a flight from city \`fromi\` to city \`toi\` with cost \`pricei\`.

You are also given three integers \`src\`, \`dst\`, and \`k\`, return _**the cheapest price** from_ \`src\` _to_ \`dst\` _with at most_ \`k\` _stops._ If there is no such route, return \`-1\`.

# Solution
Same as [[Dijkstra's Algorithm]] but here we don't need a priority queue and a normal queue is enough as our primary goal is to have at max K stops, so we want the queue to be ordered according to the number of stops. That will automatically happen as the number of stops increases by one after every node.
The time complexity of this question is \`E\` as there is no priority queue to take up an extra \`log(V)\` time.

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
\`\`\``,"../dsa-notes/Graphs/City With the Smallest Number of Neighbors at a Threshold Distance.md":`---
difficulty: Easy
topics: ["Graphs", "Floyd Warshall"]
source: Standard
star: false
link: "https://www.geeksforgeeks.org/problems/city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=city-with-the-smallest-number-of-neighbors-at-a-threshold-distance"
---

[[Graphs]] [[Floyd Warshall]]

# Problem
There are n\xA0cities numbered from 0\xA0to n-1. Given the array edges\xA0where\xA0**edges\\[i] = \\[fromi\xA0, toi ,weighti]**\xA0\xA0represents a bidirectional and weighted edge between cities fromi\xA0and toi, and given the integer distance Threshold. You need to find out a city\xA0with the smallest number of cities that are reachable through some path and whose distance is\xA0**at most**\xA0Threshold Distance, If there are multiple such cities, our answer will\xA0be the city with the greatest number.

# Solution
### Floyd Warshall
We first use [[Floyd Warshall Algorithm]] to find the distance between all the cities and then use a simple frequency count to find the desired city

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
\`\`\``,"../dsa-notes/Graphs/Clone Graph.md":`---
difficulty: Medium
topics: ["Graphs"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/clone-graph/description/"
---

[[Graphs]]

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
`,"../dsa-notes/Graphs/Detect Cycle in 2D Grid.md":`---
difficulty: Medium
topics: ["Graphs", "Matrix", "BFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/detect-cycles-in-2d-grid/description/"
---

[[Graphs]] [[Matrix]] [[BFS]]

# Problem
Given a 2D array of characters\xA0\`grid\`\xA0of size\xA0\`m x n\`, you need to find if there exists any cycle consisting of the\xA0**same value**\xA0in\xA0\`grid\`.

A cycle is a path of\xA0**length 4 or more**\xA0in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the\xA0**same value**\xA0of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle\xA0\`(1, 1) -> (1, 2) -> (1, 1)\`\xA0is invalid because from\xA0\`(1, 2)\`\xA0we visited\xA0\`(1, 1)\`\xA0which was the last visited cell.

Return\xA0\`true\`\xA0if any cycle of the same value exists in\xA0\`grid\`, otherwise, return\xA0\`false\`.

# Solution
Very similar to the [[Detect cycle in Undirected graph]] question, except here the cycles are character specific which makes it a bit tricky.
Solved using BFS, but a DFS Solution should also be possible
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
\`\`\``,"../dsa-notes/Graphs/Detect cycle in Undirected graph.md":`---
difficulty: Easy
topics: ["Graphs", "BFS", "DFS"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/"
---

[[Graphs]] [[BFS]] [[Cycle Detection]]

# Problem
Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not. Graph is in the form of adjacency list where adj[i] contains all the nodes ith node is having edge with.
# Solution
This question can be solved using both BFS and DFS, i've done it using bfs. So if a vertex is already visited and its not the parent vertex then we have a cycle.

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
\`\`\``,"../dsa-notes/Graphs/Dijkstra's Algorithm.md":`---
difficulty: Medium
topics:
  - Graphs
  - Dijkstra
source: Standard
star: false
link: https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1
---

[[Graphs]] [[Dijkstra]]

# Problem
Shortest path from single source

# Solution
### Works only when ->
	No negative edges in the graph
### Using Priority Queue
Starting from the source node, update the distances of the other nodes initially set to infinity. If the distance of a node is updated then it is pushed onto the priority queue.

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


### Using Sets
Same logic as Priority Queue

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
\`\`\``,"../dsa-notes/Graphs/Disjoint Set Union.md":`---
difficulty: Medium
topics: ["Graphs", "Disjoint Set Union"]
source: Standard
star: true
---

[[Graphs]] [[Disjoint Set Union]]

# Problem
Given a series of instructions asking to join two vertices, we join them and also serve answers to questions like if two nodes are already in the same component or not.

## DSU By Rank

The rank is not the same as height, every time a new node is attached to a component, the rank of the ultimate parent of that component goes up by one.

## DSU By Size
The size is similar to height but instead counts all the nodes in the current component for that particular parent, but doesn't go down when the component is attached to another node.

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
\`\`\``,"../dsa-notes/Graphs/Distance of nearest cell having 1.md":`---
difficulty: Medium
topics: ["Graphs", "Matrix", "BFS"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=distance-of-nearest-cell-having-1"
---

[[Graphs]] [[Matrix]] [[BFS]]

# Problem 
Given a binary grid of\xA0**n*m**. Find the distance of the nearest 1 in the grid\xA0for each cell.  
The distance is calculated as\xA0**|i1\xA0 - i2| + |j1\xA0- j2|**, where i1, j1\xA0are the row number and column number of the current cell, and i2, j2\xA0are the row number and column number of the nearest cell having value 1.\xA0There should be atleast one 1 in the grid.

# Solution
This problem is almost exactly the same as the [[Rotten Oranges]] problem, except here we replace time with distance.

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
\`\`\``,"../dsa-notes/Graphs/Eventual Safe States.md":`---
difficulty: Medium
topics: ["Graphs", "DFS", "BFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/find-eventual-safe-states/"
---

[[Graphs]] [[Cycle Detection]] [[BFS]]

# Problem
There is a directed graph of\xA0\`n\`\xA0nodes with each node labeled from\xA0\`0\`\xA0to\xA0\`n - 1\`. The graph is represented by a\xA0**0-indexed**\xA02D integer array\xA0\`graph\`\xA0where\xA0\`graph[i]\`\xA0is an integer array of nodes adjacent to node\xA0\`i\`, meaning there is an edge from node\xA0\`i\`\xA0to each node in\xA0\`graph[i]\`.

A node is a\xA0**terminal node**\xA0if there are no outgoing edges. A node is a\xA0**safe node**\xA0if every possible path starting from that node leads to a\xA0**terminal node**\xA0(or another safe node).

Return\xA0_an array containing all the\xA0**safe nodes**\xA0of the graph_. The answer should be sorted in\xA0**ascending**\xA0order.

# Solution
We can make two observations -
1. If a node is part of a cycle, they can never be safe
2. if a node leads to a cycle they can never be safe

so we use the [[Detect cycle in Undirected graph]] algorithm using DFS to find cycles and modify the safe nodes array

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


## Using BFS
Reverse the graph, now the nodes with indegree 0 are safe states so any node connected to them will have eventual safe state if we find them in [[Topological Sort]], i.e. if their parent is removed they should have indegree 0 as well

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
\`\`\``,"../dsa-notes/Graphs/Flood Fill.md":`---
difficulty: Easy
topics: ["Graphs", "Matrix", "DFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/flood-fill/"
---

[[Graphs]] [[Matrix]] [[DFS]]

# Problem
An image is represented by an\xA0\`m x n\`\xA0integer grid\xA0\`image\`\xA0where\xA0\`image[i][j]\`\xA0represents the pixel value of the image.

You are also given three integers\xA0\`sr\`,\xA0\`sc\`, and\xA0\`color\`. You should perform a\xA0**flood fill**\xA0on the image starting from the pixel\xA0\`image[sr][sc]\`.

To perform a\xA0**flood fill**, consider the starting pixel, plus any pixels connected\xA0**4-directionally**\xA0to the starting pixel of the same color as the starting pixel, plus any pixels connected\xA0**4-directionally**\xA0to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with\xA0\`color\`.

Return\xA0_the modified image after performing the flood fill_.

# Solution
Very similar to the [[Number Of Islands]] Problem, almost same solution

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
\`\`\``,"../dsa-notes/Graphs/Floyd Warshall Algorithm.md":`---
difficulty: Medium
topics: ["Graphs", "Floyd Warshall"]
source: Standard
star: false
---

[[Graphs]] [[Floyd Warshall]]

# Problem
##### Multi source shortest path algorithm
The problem is to find the shortest distances between every pair of vertices in a given\xA0**edge-weighted directed**\xA0graph. The graph is represented as an adjacency matrix of size\xA0**n\\*n**.\xA0**Matrix\\[i]\\[j]**\xA0denotes\xA0the weight of the edge from\xA0**i to j.**\xA0If\xA0**Matrix\\[i]\\[j]=-1,**\xA0it means there is no\xA0edge from\xA0**i to j.**  
**Do it in-place.**

# Solution
Represented as an adjacency matrix, we can find the distance between two nodes as 'distance of x and y via z'. So, we calculate this distance between all the pairs of nodes via all the remaining nodes and the minimum is kept as the final distance between that pair of nodes.


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

#### Negative cycles ->
If the graph contains a negative cycle, then in the final matrix there is going to be a pair \`i, j\` who have a distance < 0 between them

\`\`\`cpp
for(int i = 0; i < n; i++){
	for (int j = 0; j < n; j++){
		if(matrix[i][j] < 0)
			return 1;
	}
}
\`\`\``,"../dsa-notes/Graphs/Kahn's Algorithm.md":`---
difficulty: Medium
topics: ["Graphs", "Topological Sort"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/topological-sort/"
---

[[Graphs]] [[Topological Sort]]

# Problem
Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph.

# Solution
This algorithm is a way to find [[Topological Sort]] of a DAG. 


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
\`\`\``,"../dsa-notes/Graphs/Kruskal's Algorithm.md":`---
difficulty: Hard
topics: ["Graphs", "MST", "Disjoint Set Union"]
source: Standard
star: false
---

[[Graphs]] [[MST]] [[MST]] [[Disjoint Set Union]]

# Problem
This is an algorithm to find the [[Minimum Spanning Tree]] of a graph.

# Solution
Sort all the edges by their weight, now at each iteration choose the smallest edge and add it to the MST.
This algo uses [[Disjoint Set Union]] to find if the edge that is being chosen connects vertices which already are connected by any path in the MST or not

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
\`\`\``,"../dsa-notes/Graphs/Maximum Connected Group.md":`---
difficulty: Medium
topics: ["Graphs", "Disjoint Set Union"]
source: Standard
star: false
---

[[Graphs]] [[Disjoint Set Union]]

# Problem
You are given an n x n binary grid. A grid is said to be binary if every value in grid is either 1 or 0.

You can change at most one cell in grid from 0 to 1.

You need to find the largest group of connected  1's.

Two cells are said to be connected if both are adjacent to each other and both have same value.

# Solution
This problem is majorly just implementation and brute force use of the [[Disjoint Set Union]]. Here we flip all the zeroes and check if the resulting component is the largest or not.
We need to take care of duplicates as a zero can be surrounded by just one component so when checking the components in the 4 directions around
the zero we need to remember what components we have encountered so far, for that we can use the set data structure to keep track of the ultimate parent of each encountered 1 around the zero  

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

`,"../dsa-notes/Graphs/Minimum Spanning Tree.md":`---
difficulty: Medium
topics: ["Graphs", "MST"]
source: Standard
star: false
---

[[Graphs]] [[MST]] [[MST]] [[MST]]

#DSA-Theory 
### Spanning tree ->
A graph is a connected subgraph with all the vertices but no cycles.

### Mimimum ->
A spanning tree which has the minimum sum of all the edge weights

### Prim's Algorithm
We start with any node and add the edge incident onto it with the smallest weight to the MST along with the node attached to that edge. We then find the edge with the smallest edge weight in the new cluster (Important -> not only the new node but the whole cluster of nodes added till now)

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


### Kruskal's Algorithm
[[Kruskal's Algorithm]]
`,"../dsa-notes/Graphs/N-ary Tree Level Order Traversal.md":`---
difficulty: Medium
topics: ["Trees", "Graphs"]
source: Leetcode
star: false
---

[[Trees]] [[Graphs]] [N-ary  Level Order ](https://leetcode.com/problems/n-ary-tree-level-order-traversal/description/?envType=study-plan&id=programming-skills-ii) # # # #  - Normal level order traversal, extended for n-ary trees using vectors.`,"../dsa-notes/Graphs/New Year Transportation.md":`---
difficulty: Easy
topics: ["Graphs"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/500/A"
code: CodeForces/A_New_Year_Transportation.cpp
---
[[CodeForces/A_New_Year_Transportation.cpp]]
[[Graphs]]

In this problem I implemented the graph as a vector of pairs representing an  edge list sort of

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    int n, t;
    cin >> n >> t;
    vector<pair<int, int>> g(n, {0, 0});
    for (int i = 1; i < n; i++)
    {
        int x;
        cin >> x;
        g[i] = {i, x + i};
    }

    int i = 1;
    while (i != n)
    {
        if (i == t)
        {
            cout << "YES" << endl;
            return 0;
        }

        else
        {
            i = g[i].second;
        }
    }
    if (i == t)
    {
        cout << "YES" << endl;
        return 0;
    }
    cout << "NO" << endl;
    return 0;
}
\`\`\`
`,"../dsa-notes/Graphs/Number Of Islands II.md":`---
difficulty: Medium
topics: ["Graphs", "Disjoint Set Union"]
source: Standard
star: false
---

[[Graphs]] [[Disjoint Set Union]]

# Problem
You are given a\xA0**n,m**\xA0which means the row and column of the 2D matrix and an array of \xA0size k denoting the number of operations. Matrix elements is 0 if there is water or 1 if there is land. Originally, the 2D matrix is all 0 which means there is no land in the matrix. The array has k operator(s) and each operator has two integer A\\[i]\\[0], A\\[i]\\[1] means that you can change the cell\xA0matrix\\[A\\[i]\\[0]]\\[A\\[i]\\[1]] from sea to island. Return how many island are there in the matrix after each operation.You need to return an array of size\xA0**k**.  
**Note :**\xA0An island means group of 1s such that they share a common side.


# Solution
We use the [[Disjoint Set Union]] method to keep track of the islands merging. This is a standard implementation of the DSU problem and doesn't require much tweaking

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
`,"../dsa-notes/Graphs/Number Of Islands.md":`---
difficulty: Medium
topics: ["Graphs", "BFS", "DFS", "Matrix"]
source: Standard
star: false
link: "https://leetcode.com/problems/number-of-islands/"
---

[[Graphs]] [[BFS]] [[DFS]] [[Matrix]]

# Problem
Given an\xA0\`m x n\`\xA02D binary grid\xA0\`grid\`\xA0which represents a map of\xA0\`'1'\`s (land) and\xA0\`'0'\`s (water), return\xA0_the number of islands_.

An\xA0**island**\xA0is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

# Solution
Simple dfs solution, can be done using BFS too

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
\`\`\``,"../dsa-notes/Graphs/Number Of Provinces.md":`---
difficulty: Medium
topics: ["Graphs", "DFS", "Disjoint Set Union"]
source: Standard
star: false
link: "https://leetcode.com/problems/number-of-provinces/"
---

[[Graphs]] [[DFS]] [[Disjoint Set Union]]

# Problem
There are\xA0\`n\`\xA0cities. Some of them are connected, while some are not. If city\xA0\`a\`\xA0is connected directly with city\xA0\`b\`, and city\xA0\`b\`\xA0is connected directly with city\xA0\`c\`, then city\xA0\`a\`\xA0is connected indirectly with city\xA0\`c\`.

A\xA0**province**\xA0is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an\xA0\`n x n\`\xA0matrix\xA0\`isConnected\`\xA0where\xA0\`isConnected[i][j] = 1\`\xA0if the\xA0\`ith\`\xA0city and the\xA0\`jth\`\xA0city are directly connected, and\xA0\`isConnected[i][j] = 0\`\xA0otherwise.

Return\xA0_the total number of\xA0**provinces**_.

# Solution
Related to the [[Number Of Islands]] Problem, very similar solution but it is an undirected graph here so easier


## DFS
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


## DSU
This solution uses the [[Disjoint Set Union]]
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
\`\`\``,"../dsa-notes/Graphs/Number of Distinct Islands.md":`---
difficulty: Hard
topics: ["Graphs", "Matrix", "DFS"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/number-of-distinct-islands/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=number-of-distinct-islands"
---

[[Graphs]] [[Matrix]] [[DFS]]

# Problem
Given a boolean 2D matrix\xA0**grid**\xA0of size\xA0**n**\xA0*\xA0**m**. You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) forms an island. Two islands are considered to be distinct if and only if one island is not equal to another (not rotated or reflected).

# Solution
This problem is similar to the [[Number Of Islands]] problem, except here we need to maintain a set to store all the islands so that it automatically eliminates the copies.
To get the copies to be equal in value, we subtract the coordinates of the first discovered node from the rest of the nodes.

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
\`\`\``,"../dsa-notes/Graphs/Number of ways to arrive at destination.md":`---
difficulty: Medium
topics: ["Graphs", "Dijkstra"]
source: Standard
star: false
link: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
---

[[Graphs]] [[Dijkstra]]

# Problem
You are in a city that consists of \`n\` intersections numbered from \`0\` to \`n - 1\` with **bi-directional** roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.

You are given an integer \`n\` and a 2D integer array \`roads\` where \`roads[i] = [ui, vi, timei]\` means that there is a road between intersections \`ui\` and \`vi\` that takes \`timei\` minutes to travel. You want to know in how many ways you can travel from intersection \`0\` to intersection \`n - 1\` in the **shortest amount of time**.

Return _the **number of ways** you can arrive at your destination in the **shortest amount of time**_. Since the answer may be large, return it **modulo** \`109 + 7\`.

# Solution
Using the [[Dijkstra's Algorithm]] we can find the paths, but we need to add all the paths along the way. We can't just add the \`dst - 1\` nodes, as there can be multiple paths leading to them. So we need to sum up them all.

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
\`\`\``,"../dsa-notes/Graphs/Path With Minimum Effort.md":`---
difficulty: Medium
topics: ["Graphs", "Dijkstra"]
source: Standard
star: false
link: "https://leetcode.com/problems/path-with-minimum-effort/"
---

[[Graphs]] [[Dijkstra]]

# Problem
You are a hiker preparing for an upcoming hike. You are given \`heights\`, a 2D array of size \`rows x columns\`, where \`heights[row][col]\` represents the height of cell \`(row, col)\`. You are situated in the top-left cell, \`(0, 0)\`, and you hope to travel to the bottom-right cell, \`(rows-1, columns-1)\` (i.e.,\xA0**0-indexed**). You can move **up**, **down**, **left**, or **right**, and you wish to find a route that requires the minimum **effort**.

A route's **effort** is the **maximum absolute difference** in heights between two consecutive cells of the route.

Return _the minimum **effort** required to travel from the top-left cell to the bottom-right cell._

# Solution
Using the [[Dijkstra's Algorithm]] we can find the path with minimum effort, the only thing different is how we calculate the distance -> which will be the max(dis to parent, difference between height)

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
\`\`\``,"../dsa-notes/Graphs/Reorder Routes to Make All Paths Lead to the City Zero.md":`---
difficulty: Medium
topics: ["Graphs"]
source: Leetcode
star: false
---

[[Graphs]]

# Problem
There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections\\[i] = \\[ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.


# Solution
`,"../dsa-notes/Graphs/Rotten Oranges.md":`---
difficulty: Medium
topics: ["Graphs", "Matrix", "BFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/rotting-oranges/"
---

[[Graphs]] [[Matrix]] [[BFS]]

# Problem
You are given an\xA0\`m x n\`\xA0\`grid\`\xA0where each cell can have one of three values:

- \`0\`\xA0representing an empty cell,
- \`1\`\xA0representing a fresh orange, or
- \`2\`\xA0representing a rotten orange.

Every minute, any fresh orange that is\xA0**4-directionally adjacent**\xA0to a rotten orange becomes rotten.

Return\xA0_the minimum number of minutes that must elapse until no cell has a fresh orange_. If\xA0_this is impossible, return_\xA0\`-1\`.

# Solution
Similar to [[Flood Fill]]
We will do a bfs as we need to keep time, which is analogous to levels in this question.
First we will push all the nodes which are initially 0 into the queue as they will be starting the rotting process and any nodes in contact to them will be turned to rotten at time=1

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
\`\`\``,"../dsa-notes/Graphs/Shortest Distance in a Binary Maze.md":`---
difficulty: Medium
topics: ["Graphs", "BFS", "Matrix"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze-1655453161/1"
---

[[Graphs]] [[BFS]] [[Matrix]]

# Problem
Given a **n * m**\xA0matrix **grid** where each element can either be **0** or **1**. You\xA0need to find the shortest distance\xA0between a given source cell to a destination cell. The path can only be created out of a cell if its value is 1.\xA0

If the path is not possible between source cell and destination cell, then return **-1**.

**Note :**\xA0You can move into an adjacent cell if that adjacent cell is filled with element 1. Two cells are adjacent if they share a side. In other words,\xA0you can move in one of the four\xA0directions, Up, Down, Left\xA0and Right. The source and destination cell are based on the zero based indexing.

# Solution
Simple BFS from the source to the destination

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
\`\`\``,"../dsa-notes/Graphs/Shortest Path in Binary Matrix.md":`---
difficulty: Medium
topics: ["Graphs", "BFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/description/"
---

[[Graphs]] [[BFS]]

# Problem
Given an \`n x n\` binary matrix \`grid\`, return _the length of the shortest **clear path** in the matrix_. If there is no clear path, return \`-1\`.

A **clear path** in a binary matrix is a path from the **top-left** cell (i.e., \`(0, 0)\`) to the **bottom-right** cell (i.e., \`(n - 1, n - 1)\`) such that:

- All the visited cells of the path are \`0\`.
- All the adjacent cells of the path are **8-directional** connected (i.e., they are different and they share an edge or a corner).

The **length of a clear path** is the number of visited cells of this path.

# Solution
[[Shortest Distance in a Binary Maze]] exactly the same with a minor tweak.

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
\`\`\``,"../dsa-notes/Graphs/Shortest Path in DAG.md":`---
difficulty: Medium
topics: ["Graphs", "Topological Sort"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1"
---

[[Graphs]] [[Topological Sort]]

# Problem
Given a Directed Acyclic Graph of N vertices from 0 to N-1 and a 2D Integer array(or vector) edges\\[]\\[] of length M, where there is a directed edge from edge\\[i]\\[0] to edge\\[i]\\[1] with a distance of edge\\[i]\\[2] for all i.

Find the shortest path from src(0) vertex to all the vertices and if it is impossible to reach any vertex, then return -1 for that vertex.

# Solution
We do a [[Topological Sort]] on the graph and obtain an ordering, then we find the minimum distance
The Topological sort gives a sort of numbering we should follow while finding the minimum distance

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
\`\`\``,"../dsa-notes/Graphs/Shortest Path in Undirected Graph with unit weight.md":`---
difficulty: Easy
topics: ["Graphs", "BFS"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1"
---

[[Graphs]] [[BFS]]

# Problem
You are given an Undirected Graph having unit weight, Find the shortest path from src to all the vertex and if it is unreachable to reach any vertex, then return -1 for that vertex.

# Solution
Run a simple BFS, and update the distance array instead of the visited array.

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
\`\`\``,"../dsa-notes/Graphs/Shortest Path in Weighted undirected graph.md":`---
difficulty: Easy
topics: ["Graphs", "Dijkstra"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1"
---

[[Graphs]] [[Dijkstra]]

# Problem
Find the shortest path from 1 to n

# Solution
We use a tweaked version of [[Dijkstra's Algorithm]] where we also maintain a parents array

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
\`\`\``,"../dsa-notes/Graphs/Shortest Path with Alternating Colors.md":`---
difficulty: Medium
topics: ["Graphs", "BFS"]
source: Leetcode
star: false
code: LeetCode/Shortest_Path_with_Alternating_Colors.cpp
---
[[LeetCode/Shortest_Path_with_Alternating_Colors.cpp]]
[[Graphs]] [[BFS]]

Link :: [Leetcode](https://leetcode.com/problems/shortest-path-with-alternating-colors/description/?envType=study-plan-v2&envId=graph-theory)
# Problem
You are given an integer\xA0\`n\`, the number of nodes in a directed graph where the nodes are labelled from\xA0\`0\`\xA0to\xA0\`n - 1\`. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays\xA0\`redEdges\`\xA0and\xA0\`blueEdges\`\xA0where:

- \`redEdges[i] = [ai, bi]\`\xA0indicates that there is a directed red edge from node\xA0\`ai\`\xA0to node\xA0\`bi\`\xA0in the graph, and
- \`blueEdges[j] = [uj, vj]\`\xA0indicates that there is a directed blue edge from node\xA0\`uj\`\xA0to node\xA0\`vj\`\xA0in the graph.

Return an array\xA0\`answer\`\xA0of length\xA0\`n\`, where each\xA0\`answer[x]\`\xA0is the length of the shortest path from node\xA0\`0\`\xA0to node\xA0\`x\`\xA0such that the edge colors alternate along the path, or\xA0\`-1\`\xA0if such a path does not exist.

# Solution
This is a simple [[Dijkstra's Algorithm]] (even BFS as all edge weights are 1) on the graph where for each alternate step we choose from a different coloured edge. The whole BFS is run twice, once by considering that the 0th edge was blue and then by considering that it was red.

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

`,"../dsa-notes/Graphs/Surrounded Regions.md":`---
difficulty: Medium
topics: ["Graphs", "Matrix", "DFS", "BFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/surrounded-regions/"
---

[[Graphs]] [[Matrix]] [[DFS]] [[BFS]]

# Problem
Given an\xA0\`m x n\`\xA0matrix\xA0\`board\`\xA0containing\xA0\`'X'\`\xA0and\xA0\`'O'\`,\xA0_capture all regions that are 4-directionally\xA0surrounded by_\xA0\`'X'\`.

A region is\xA0**captured**\xA0by flipping all\xA0\`'O'\`s into\xA0\`'X'\`s in that surrounded region.

# Solution
The idea is that any cluster of O that contains an O which is at the boundary will survive, rest will get converted to X
\`\`\`cpp
void dfs(int i, int j, vector<vector<char>> &board, vector<vector<bool>> &visited){
    if(i < 0 || j < 0 || i >= board.size() || j >= board[0].size())
        return;
    if(board[i][j] == 'X')
        return;
    if(!visited[i][j]){
        visited[i][j] = true;
        dfs(i+1, j, board, visited);
        dfs(i-1, j, board, visited);
        dfs(i, j+1, board, visited);
        dfs(i, j-1, board, visited);
    }    
    
}

void solve(vector<vector<char>>& board) {
    int m = board.size();
    int n = board[0].size();
    vector<vector<bool>> visited(m, vector<bool>(n, 0));

    for(int i = 0; i < m; i++){
        if(board[i][0] == 'O' && !visited[i][0]){
            dfs(i, 0, board, visited);
        }
    }

    for(int j = 0; j < n; j++){
        if(board[0][j] == 'O' && !visited[0][j])
            dfs(0, j, board, visited);
    }
    for(int i = 0; i < m; i++){
        if(board[i][n-1] == 'O' && !visited[i][n-1]){
            dfs(i, n-1, board, visited);
        }
    }

    for(int j = 0; j < n; j++){
        if(board[m-1][j] == 'O' && !visited[m-1][j])
            dfs(m-1, j, board, visited);
    }


    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            if(visited[i][j] == true)
                board[i][j] = 'O';
            else
                board[i][j] = 'X';
        }
    }
}
\`\`\``,"../dsa-notes/Graphs/Topological Sort.md":`---
difficulty: Easy
topics: ["Graphs", "DFS", "Topological Sort"]
source: Standard
star: false
link: "https://practice.geeksforgeeks.org/problems/topological-sort/"
---

[[Graphs]] [[DFS]] [[Topological Sort]]

# Problem
Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph.
# Solution
To find a topological sort, we maintain a stack. whenever we visit a new node, after performing DFS we push the node onto the stack as all the neighbors of that node will already be on the stack due to the recursive nature of the DFS function
Then we pop the elements and store them in an array

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
`,"../dsa-notes/Graphs/Word Ladder I.md":`---
difficulty: Hard
topics: ["Graphs", "BFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/word-ladder/"
---

[[Graphs]] [[BFS]]

# Problem
A **transformation sequence** from word \`beginWord\` to word \`endWord\` using a dictionary \`wordList\` is a sequence of words \`beginWord -> s1 -> s2 -> ... -> sk\` such that:

- Every adjacent pair of words differs by a single letter.
- Every \`si\` for \`1 <= i <= k\` is in \`wordList\`. Note that \`beginWord\` does not need to be in \`wordList\`.
- \`sk == endWord\`

Given two words, \`beginWord\` and \`endWord\`, and a dictionary \`wordList\`, return _the **number of words** in the **shortest transformation sequence** from_ \`beginWord\` _to_ \`endWord\`_, or_ \`0\` _if no such sequence exists._

# Solution
So since each word differs by only one letter, we can do a BFS on the list looking for one letter changes.

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
\`\`\``,"../dsa-notes/Graphs/Word Ladder II.md":`---
difficulty: Hard
topics: ["Graphs", "BFS", "DFS"]
source: Standard
star: false
link: "https://leetcode.com/problems/word-ladder-ii/description/"
---

[[Graphs]] [[BFS]] [[DFS]]

# Problem 
This is a continuation of the [[Word Ladder I]] problem.
Here we have to return all shortest possible transformations.

# Solution
Store the level wise transformation, and don't delete words until there level is complete.

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



# Solution - 

In this solution we use DFS to do the sequence forming in reverse, i.e. we first find out how many steps it will take and what words are there on each step and then construct the sequence in the reverse order. This way we remove the unnecessary computations.

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
\`\`\``,"../dsa-notes/Greedy/Chat Room.md":`---
difficulty: Easy
topics: ["Greedy", "Strings"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/58/A"
code: CodeForces/A_Chat_room.cpp
---
[[CodeForces/A_Chat_room.cpp]]
[[Greedy]] [[Strings]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    string s;
    cin >> s;

    vector<char> chars = {'h', 'e', 'l', 'l', 'o'};
    int j = 0;
    for (auto i : s)
    {
        if (j >= 5)
        {
            break;
        }
        else if (i == chars[j])
            j++;
    }
    if (j >= 5)
        cout << "YES" << endl;
    else
        cout << "NO" << endl;
    return 0;
}
\`\`\``,"../dsa-notes/Greedy/Dragons.md":`---
difficulty: Easy
topics: ["Greedy", "Sorting"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/230/A"
code: CodeForces/A_Dragons.cpp
---
[[CodeForces/A_Dragons.cpp]]
[[Greedy]] [[Sorting]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    int s, n;
    cin >> s >> n;

    vector<pair<int, int>> dragons(n);
    for (int i = 0; i < n; i++)
    {
        cin >> dragons[i].first >> dragons[i].second;
    }

    sort(dragons.begin(), dragons.end(), [](pair<int, int> a, pair<int, int> b)
         { return a.first < b.first; });

    for (int i = 0; i < n; i++)
    {
        if (dragons[i].first < s)
            s += dragons[i].second;
        else
        {
            cout << "NO" << endl;
            return 0;
        }
    }
    cout<<"YES"<<endl;
    return 0;
}
\`\`\``,"../dsa-notes/Greedy/Elephant.md":`---
difficulty: Easy
topics: ["Greedy", "Math"]
source: CodeForces
star: false
code: CodeForces/A_Elephant.cpp
---
[[CodeForces/A_Elephant.cpp]]
[[Greedy]] [[Math]]

[Problem - 617A - Codeforces](https://codeforces.com/problemset/problem/617/A) #  # - count for 5 first then 4 then 3 then 2 then 1 and add them`,"../dsa-notes/Greedy/Maximum Length of Pair Chain.md":'---\ndifficulty: Medium\ntopics: ["Greedy", "Dynamic Programming"]\nsource: Leetcode\nstar: true\nlink: "https://leetcode.com/problems/maximum-length-of-pair-chain/"\n---\n\n[[Greedy]] [[Dynamic Programming]]\n\n# Problem\nYou are given an array of\xA0`n`\xA0pairs\xA0`pairs`\xA0where\xA0`pairs[i] = [lefti, righti]`\xA0and\xA0`lefti < righti`.\n\nA pair\xA0`p2 = [c, d]`\xA0**follows**\xA0a pair\xA0`p1 = [a, b]`\xA0if\xA0`b < c`. A\xA0**chain**\xA0of pairs can be formed in this fashion.\n\nReturn\xA0_the length longest chain which can be formed_.\n\nYou do not need to use up all the given intervals. You can select pairs in any order.\n\n# Solution\n1.  Programming\n	The dynamic programming solution is very similar to the [[Longest Increasing Subsequence]] solution. Here the only difference is that we first need to sort the pairs array to avoid missing out any pair as it allows rearranging the array.\n```cpp\nint findLongestChain(vector<vector<int>> &pairs)\n{\n	int n = pairs.size();\n	int max_length = 1;\n	sort(pairs.begin(), pairs.end());\n	vector<int> t(n, 1);\n	for (int i = n - 1; i >= 0; i--)\n	{\n		for (int j = i + 1; j < n; j++)\n		{\n			if (pairs[j][0] > pairs[i][1])\n			{\n				t[i] = max(t[i], 1 + t[j]);\n			}\n		}\n		max_length = max(max_length, t[i]);\n	}\n	return max_length;\n}\n```\n\n2. \n	In the greedy solution we use sorting to find an optimal answer. If we sort the pairs array based on the first element then we won\'t get a meaningful answer, but if we sort according to the second element we will get a way to find the answer. \n	Consider\xA0`pairA`\xA0and\xA0`pairB`, where\xA0`pairA`\xA0appears before\xA0`pairB`\xA0in the sorted pairs based on the second element. We want to figure out if it is always correct to pick\xA0`pairA`\xA0first if it comes before any other pair\xA0`pairB`.\n\n	Since\xA0`pairA`\xA0comes before\xA0`pairB`\xA0in the sorted list, it implies that\xA0`pairA[1] <= pairB[1]`. There are no guarantees on\xA0`pairA[0]`\xA0and\xA0`pairB[0]`.\n	\n	Now, if\xA0`pairA[1] < pairB[0]`, it\'s obvious that we should append\xA0`pairA`\xA0first. This is because after picking\xA0`pairA`\xA0we can still pick\xA0`pairB`.\n	\n	When\xA0`pairA[1] >= pairB[0]`, we have to choose carefully. It means that either we only append\xA0`pairA`\xA0to the chain, or we only append\xA0`pairB`\xA0to the chain. Appending either\xA0`pairA`\xA0or\xA0`pairB`\xA0will increment the length of the chain by\xA0`1`\xA0but will affect the next pair we can pick.\n	\n	The tail of the current chain would be\xA0`pairA[1]`\xA0if we choose\xA0`pairA`\xA0and would be\xA0`pairB[1]`\xA0if choose\xA0`pairB`. Since\xA0`pairA[1] < pairB[1]`\xA0(due to sorting), it is better to choose\xA0`pairA`\xA0first because that way we expose a smaller tail which has a better opportunity to append more future pairs.\n```cpp\nint findLongestChain(vector<vector<int>> &pairs)\n{\n    sort(pairs.begin(), pairs.end(), [](vector<int> a, vector<int> b)\n         { return a[1] < b[1]; });\n\n    int n = pairs.size();\n    int max_length = 0;\n    int prev = INT32_MIN;\n    for (int i = 0; i < n; i++)\n    {\n        if (pairs[i][0] > prev)\n        {\n            max_length++;\n            prev = pairs[i][1];\n        }\n    }\n\n    return max_length;\n}\n```',"../dsa-notes/Greedy/Smallest Range II.md":`---
difficulty: Medium
topics: ["Greedy"]
source: Leetcode
star: false
---

[[Greedy]]

[Smallest Range II]([Smallest Range II - LeetCode](https://leetcode.com/problems/smallest-range-ii/description/?envType=study-plan&id=programming-skills-ii))   # # - Sort the array. Now since the array is sorted the candidates for max will be - (a[n-1] - k) or a[i] + k and for min it will be a[0] + k or a[i+1] -k. we can use these 4 variables to arrive at the answer.  `,"../dsa-notes/Greedy/Team.md":`---
difficulty: Easy
topics: ["Greedy"]
source: CodeForces
star: false
code: CodeForces/A_Team.cpp
---
[[CodeForces/A_Team.cpp]]
[[Greedy]]

[Problem - 231A - Codeforces](https://codeforces.com/problemset/problem/231/A) # #  - take input of the three views on the problem and check if they add up to more than or equal to 2`,"../dsa-notes/Greedy/Watermelon.md":`---
difficulty: Easy
topics: ["Greedy", "Math"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/4/A"
code: CodeForces/A_Watermelon.cpp
---
[[CodeForces/A_Watermelon.cpp]]
[[Greedy]] [[Math]]

`,"../dsa-notes/Hash Maps/3Sum.md":`---
difficulty: Medium
topics: ["Hash Maps", "Two Pointers"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/3sum/description/"
---

[[Hash Maps]] [[Two Pointers]]

# Converting to [[Two Sum]]

## Hash Map
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

# Two Pointer based
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
\`\`\``,"../dsa-notes/Hash Maps/Boy Or Girl.md":`---
difficulty: Easy
topics: ["Hash Maps"]
source: CodeForces
star: false
code: CodeForces/A_Boy_or_Girl.cpp
---
[[CodeForces/A_Boy_or_Girl.cpp]]
[[Hash Maps]]

[Problem - 236A - Codeforces](https://codeforces.com/problemset/problem/236/A) #  - use a set to keep track of the unique words, however we can also use a hashmap to keep track of unique words. 
By checking if the word already exists in the hahsmap or not we verify the uniqueness of the word.`,"../dsa-notes/Hash Maps/Contains Duplicate.md":`---
difficulty: Easy
topics: ["Arrays", "Hash Maps"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/contains-duplicate/description/"
---

[[Arrays]] [[Hash Maps]]

# Map
\`\`\`cpp
bool containsDuplicate(vector<int>& nums) {
	unordered_map<int, bool> map;
	int n = nums.size();
	for(int i = 0; i < n; i++){
		if(map.find(nums[i]) != map.end())
			return true;
		map[nums[i]] = true;
	}

	return false;
}
\`\`\`

# Set
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
`,"../dsa-notes/Hash Maps/Two Sum.md":`---
difficulty: Easy
topics: ["Arrays", "Hash Maps"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/two-sum/description/"
---

[[Arrays]] [[Hash Maps]]

# Map
The array should contain the \`num\\[i\\]\` and the \`target - nums\\[i\\]\`
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
`,"../dsa-notes/Hash Maps/Valid Anagram.md":`---
difficulty: Easy
topics: ["Hash Maps", "Strings", "Arrays"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/valid-anagram/description/"
---

[[Hash Maps]] [[Strings]] [[Arrays]]

# Map
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

# Using Array
As the constraints say that it contains only the 26 lower case letter, we can use an array for better performance
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
\`\`\``,"../dsa-notes/Heap/Find Median from Data Stream.md":`---
difficulty: Hard
topics: ["Heap"]
source: Leetcode
star: false
---

[[Heap]]

using [[priority_queue]] we can create two heaps - small (max heap) and big (min heap)
they keep roughly half the elements added through the stream and we can get the median from them.

\`\`\`cpp
	priority_queue<int> small;
    priority_queue<int, vector<int> , greater<int>> big;
public:
    MedianFinder() {
        
    }
    
    void addNum(int num) {
        if(small.size() != 0 && num >= small.top())
            big.push(num);
        else small.push(num);

        if(small.size() > big.size() + 1){
            int val = small.top(); small.pop();
            big.push(val);
        }

        if(big.size() > small.size() + 1){
            int val = big.top(); big.pop();
            small.push(val);
        }
    }
    
    double findMedian() {
        if(small.size() > big.size() ) return small.top();
        else if (big.size() > small.size()) return big.top();
        else return (big.top() + small.top())/2.0;
    }
\`\`\`
`,"../dsa-notes/Heap/Top K Frequent Elements.md":`---
difficulty: Medium
topics: ["Arrays", "Hash Maps", "Heap"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/top-k-frequent-elements/description/"
---

[[Arrays]] [[Hash Maps]] [[Heap]]

n is the total number of elements, m is unique elements.
# Map
O(n + m log m) - (n for making the map, m log m for sorting)
1. Make a value - frequency map
2. Sort it in order of frequency
3. take the top k elements from the sort

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

# Min Heap
Instead of sorting, use a min heap to keep track of the frequencies
O(n + m log k) - (n for making map, log k * m for inserting m elements in a heap of size k, extracting k * log k)
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

# Bucket Sort
Instead of a heap, we use bucket sort.
O(n + m + k) - (n for making the map, m for inserting unique into buckets, k for taking out the k top frequencies)
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
`,"../dsa-notes/Linked Lists/Add Two Numbers.md":`---
difficulty: Medium
topics:
  - Linked Lists
  - Math
source: Leetcode
star: false
link: https://leetcode.com/problems/add-two-numbers/
date: 2026-06-27
---

[[Linked Lists]] [[Math]]

# Problem
Two non-empty linked lists represent non-negative integers stored in reverse order (LSB first). Add the two numbers and return the sum as a linked list in the same format.

# Approach
## Dummy Head + Carry
Digits are already LSB-first so traverse both lists simultaneously, summing digits and propagating carry. Dummy head avoids special-casing the first node. Loop continues while either list has nodes or carry is non-zero (handles overflow like 999 + 1).

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
- Time: $O(max(n, m))$
- Space: $O(max(n, m))$: output list
`,"../dsa-notes/Linked Lists/Copy List With Random Pointer.md":`---
difficulty: Medium
topics:
  - Linked Lists
  - Hash Maps
source: Leetcode
star: false
link: https://leetcode.com/problems/copy-list-with-random-pointer/
date: 2026-06-27
---

[[Linked Lists]] [[Hash Maps]]

# Problem
Deep copy a linked list where each node has a \`next\` and a \`random\` pointer. \`random\` can point to any node or null.

# Approach
## HashMap: Two Pass (Clean)
Build all copies first (pass 1), then wire \`next\` and \`random\` using the map (pass 2). \`mp[nullptr]\` returns \`nullptr\` by default via \`[]\` operator, so null-termination and null-random are handled implicitly.

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
- Time: O(n)
- Space: O(n)

## HashMap: Single Pass
Create copies on-demand during traversal. Check map before creating to avoid duplicates. Handles forward random pointers by pre-creating target nodes; they get wired correctly when traversal reaches them.

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
- Time: O(n)
- Space: O(n)
`,"../dsa-notes/Linked Lists/Find the Duplicate Number.md":`---
difficulty: Medium
topics:
  - Linked Lists
  - Arrays
  - Bit Manipulation
  - Binary Search
source: Leetcode
star: true
link: https://leetcode.com/problems/find-the-duplicate-number/
date: 2026-06-27
---

[[Linked Lists]] [[Arrays]] [[Bit Manipulation]] [[Binary Search]]

# Problem
Array of \`n+1\` integers where each integer is in \`[1, n]\`. Exactly one number is repeated. Find it without modifying the array and using O(1) extra space.

# Approach
## Floyd's Cycle Detection (Optimal)
Array has \`n+1\` elements, values in \`[1..n]\`. Treat each value as a pointer to an index. Since two indices must point to the same value (pigeonhole), following \`i → nums[i]\` creates a cycle. The cycle entry = duplicate.

Phase 1: find intersection (slow=1 step, fast=2 steps from index 0).
Phase 2: find cycle entry (one pointer from 0, one from intersection, both 1 step).

\`\`\`
index:  0  1  2  3  4
nums:  [3, 1, 3, 4, 2]
path: 0→3→4→2→3→4→... (cycle entry at 3)
\`\`\`

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
- Time: O(n)
- Space: O(1)

## Bit Manipulation
For each bit position, count how many numbers in \`[1..n]\` have that bit set (\`base\`) vs how many in \`nums\` have it set (\`actual\`). If \`actual > base\`, the duplicate has that bit set.

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
- Time: O(32n) = O(n)
- Space: O(1)

## Binary Search on Answer
Binary search over value range \`[1..n]\`. For mid, count elements in \`nums\` that are \`<= mid\`. If count \`> mid\`, duplicate is in \`[1..mid]\`; else in \`[mid+1..n]\`.

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
- Time: O(n log n)
- Space: O(1)`,"../dsa-notes/Linked Lists/Intersection Of Two Linked Lists.md":`---
difficulty: Easy
topics: ["Linked Lists"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/intersection-of-two-linked-lists/"
code: LeetCode/intersection_of_two_linked_lists.cpp
---
[[LeetCode/intersection_of_two_linked_lists.cpp]]
[[Linked Lists]]

We are given two heads of two singly linked lists which become one at a particular node. We need to find which node that is.

Since both the linked list will have unequal lengths, we can first calculate the length of both the linked lists and move the pointer forward in the longer one such that the length is now equal, since after intersection the length of the linked lists will be equal 

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
`,"../dsa-notes/Linked Lists/Linked List Cycle.md":`---
difficulty: Easy
topics: ["Linked Lists", "Two Pointers"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/linked-list-cycle/description/"
---

[[Linked Lists]] [[Two Pointers]]

## Floyd's Cycle Detection Algo
Have two pointers - \`fast\` and \`slow\`. One pointer moves at twice the speed of the other, so they are bound to meet each other if there is a cycle.

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

`,"../dsa-notes/Linked Lists/Merge Two Sorted Lists.md":`---
difficulty: Easy
topics: ["Linked Lists", "Two Pointers"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/merge-two-sorted-lists/description/"
---

[[Linked Lists]] [[Two Pointers]]

attach the smaller nodes till one of the lists finishes. 
Then just attach the remaining part of the remaining list at the end.

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
`,"../dsa-notes/Linked Lists/Merge k Sorted Lists.md":`---
difficulty: Hard
topics: ["Linked Lists"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/merge-k-sorted-lists/description/"
---

[[Linked Lists]]

Merging k lists is the same as merging two lists k-1 times. So use [[Merge Two Sorted Lists]] k-1 times and merge it. 

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
`,"../dsa-notes/Linked Lists/Remove Nth Node From End of List.md":`---
difficulty: Medium
topics: ["Linked Lists", "Stack", "Two Pointers"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/"
---

[[Linked Lists]] [[Stack]] [[Two Pointers]]

1. Stack - use a stack to store all the nodes and then pop n nodes from the top to reach the node before the node that needs to be removed.
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

2. Two Pointers - Maintain two pointers, one traverses the list with a delay of n+1 steps so that it points to the node before the one that needs to be deleted.

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
\`\`\``,"../dsa-notes/Linked Lists/Reorder List.md":`---
difficulty: Medium
topics: ["Linked Lists", "Stack", "Two Pointers"]
source: Leetcode
star: false
code: LeetCode/reorder_list.cpp
---
[[LeetCode/reorder_list.cpp]]
[[Linked Lists]] [[Stack]] [[Two Pointers]]

[Reorder List]([Reorder List - LeetCode](https://leetcode.com/problems/reorder-list/submissions/931432638/?envType=study-plan&id=programming-skills-ii)) 
1.  approach - fill a stack while traversing a linked list, so now the last element is on the top, now use the head and the stack to create an alternating linked list

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

2.  Pointer approach - Use a fast and slow pointer to find the mid part of the linked list Now [[Reverse Linked List]] the second half of the list and the use two pointers, first(head) and second(last) along with a temp pointer to create an alternating list.

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
\`\`\``,"../dsa-notes/Linked Lists/Reverse Linked List.md":`---
difficulty: Easy
topics: ["Linked Lists"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/reverse-linked-list/"
---

[[Linked Lists]]

Base Case - singleton list, empty linked list.
- \`newHead\` is the head of the reversed list
- redirect \`head->next->next\` to point back to \`head\`
- cutoff head to point to \`nullptr\` to avoid cycles.

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
`,"../dsa-notes/Math/Beautiful Year.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: false
code: CodeForces/A_Beautiful_Year.cpp
---
[[CodeForces/A_Beautiful_Year.cpp]]
[[Math]]

[Problem - 271A - Codeforces](https://codeforces.com/problemset/problem/271/A) #  - just increment by one and check if all the digits are distinct`,"../dsa-notes/Math/Bit++.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: false
code: CodeForces/A_Bit.cpp
---
[[CodeForces/A_Bit.cpp]]
[[Math]]

[Problem - 282A - Codeforces](https://codeforces.com/problemset/problem/282/A) #  - just check if the char at pos 1 of the input is a + or -  and do the operation on x.`,"../dsa-notes/Math/Buy a Shovel.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: false
code: CodeForces/A_Buy_a_Shovel.cpp
---
[[CodeForces/A_Buy_a_Shovel.cpp]]
[[Math]]

[Problem - 732A - Codeforces](https://codeforces.com/problemset/problem/732/A) #  - just multiply k by an integer and check if the value obtained is a multiple of 10 or a multiple of 10 with remainder r.`,"../dsa-notes/Math/Domino Piling.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: true
code: CodeForces/A_Domino_piling.cpp
---
[[CodeForces/A_Domino_piling.cpp]]
[[Math]]

[Problem - 50A - Codeforces](https://codeforces.com/problemset/problem/50/A) # # #  - if we want to find out the number of domino's we can add onto a matrix with the domino sixe being 2x1, the solution is just (m\\*n)/2.`,"../dsa-notes/Math/Lucky Division.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/122/A"
code: CodeForces/A_Lucky_Division.cpp
---
[[CodeForces/A_Lucky_Division.cpp]]
[[Math]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

bool isLucky(int x){
    while(x){
        int y = x%10;
        if(y != 4 && y!= 7)
            return false;
        x /= 10;
    }
    return true;
}

int main(){
    int n;
    cin>>n;

    for(int i = 1; i <= n; i++){
        if(isLucky(i))
            if(n%i == 0){
                cout<<"YES"<<endl;
                return 0;
            }
    }

    cout<<"NO"<<endl;

    return 0;
}
\`\`\`
`,"../dsa-notes/Math/Soldier and Bananas.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: false
code: CodeForces/A_Soldier_and_Bananas.cpp
---
[[CodeForces/A_Soldier_and_Bananas.cpp]]
[[Math]]

[Problem - 546A - Codeforces](https://codeforces.com/problemset/problem/546/A) #  - the find the total cost by the sum of first n integers formula and check.`,"../dsa-notes/Math/Theatre Square.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/1/A"
code: CodeForces/A_Theatre_Square.cpp
---
[[CodeForces/A_Theatre_Square.cpp]]
[[Math]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main(){
    int n, m, a;
    cin>>n>>m>>a;
    long long x = ceil(double(n)/double(a));
    long long y = ceil(double(m)/double(a));
    
    cout<<x*y<<endl;
    return 0;
}
\`\`\`

`,"../dsa-notes/Math/Young Physicist.md":`---
difficulty: Easy
topics: ["Math"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/69/A"
code: CodeForces/A_Young_Physicist.cpp
---
[[CodeForces/A_Young_Physicist.cpp]]
[[Math]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cin >> n;

    int x = 0, y = 0, z = 0;

    for (int i = 0; i < n; i++)
    {
        int xt;
        cin >> xt;
        x += xt;

        int yt;
        cin >> yt;
        y += yt;

        int zt;
        cin >> zt;
        z += zt;
    }
    cout << ((x != 0) ? "NO" : ((y != 0) ? "NO" : ((z != 0) ? "NO" : "YES")));

    return 0;
}
\`\`\``,"../dsa-notes/Sliding Window/Frequency of the Most Frequent Element.md":`---
difficulty: Medium
topics: ["Sliding Window"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/frequency-of-the-most-frequent-element"
---

[[Sliding Window]]

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

`,"../dsa-notes/Sliding Window/Longest Palindromic Sibstring.md":`---
difficulty: Medium
topics: ["Sliding Window"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/longest-palindromic-substring/?envType=study-plan-v2&envId=dynamic-programming"
---

[[Sliding Window]]

# Problem
Given a string s, return the longest palindromic substring in s.

# Solution
\`\`\`cpp
string longestPalindrome(string s) {
        string ans = s.substr(0,1);
        int max = 1;
        for(int i = 1; i < s.size(); i++){
	        //Odd length palindrome
            int l = i-1;
            int r = i+1;

            while(l >= 0 && r < s.size()){
                if(s[l] == s[r]){
                    if(r-l+1 > max){
                        ans = s.substr(l, r-l+1);
                        max = r-l+1;
                        l--; r++;
                    }
                    else{
                        l--;
                        r++;
                    }
                }
                else 
                    break;
            }

			//Even length palindrome
            l = i-1;
            r = i;
            while(l >= 0 && r < s.size()){
                if(s[l] == s[r]){
                    if(r-l+1 > max){
                        ans = s.substr(l, r-l+1);
                        max = r-l+1;
                        l--;r++;
                    }
                else{
                    l--;
                    r++;
                }
                }
                
                else
                    break;
            }
        }
        return ans;
    }
\`\`\`

`,"../dsa-notes/Sliding Window/Minimum Window Substring.md":`---
difficulty: Hard
topics: ["Sliding Window"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/minimum-window-substring/description/?envType=daily-question&envId=2024-02-04"
---

[[Sliding Window]]

# Problem
Given two strings\xA0\`s\`\xA0and\xA0\`t\`\xA0of lengths\xA0\`m\`\xA0and\xA0\`n\`\xA0respectively, return\xA0_the\xA0**minimum window**_\xA0**_substring_** \xA0_of_\xA0\`s\`\xA0_such that every character in_\xA0\`t\`\xA0_(**including duplicates**) is included in the window_. If there is no such substring, return\xA0_the empty string_\xA0\`""\`.The testcases will be generated such that the answer is\xA0**unique**.

# Solution
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

## Avoid memory limit exceed
`,"../dsa-notes/Sliding Window/Move Zeroes.md":`---
difficulty: Easy
topics: ["Sliding Window"]
source: Leetcode
star: true
---

[[Sliding Window]]

# Problem
Given an integer array\xA0\`nums\`, move all\xA0\`0\`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note**\xA0that you must do this in-place without making a copy of the array.

# Solution
Using the SNOWBALL METHOD we can move all the zeroes to the back.

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
`,"../dsa-notes/Sliding Window/Permutation In String.md":`---
difficulty: Medium
topics:
  - Sliding Window
  - Arrays
source: Leetcode
star: false
link: https://leetcode.com/problems/permutation-in-string/
date: 2026-05-20
---
[[Sliding Window]], [[Arrays]]


# Problem

if S2 contains a permutation of S1 as a substring

# Approach
Use arrays to track the frequency of $S1$ and the frequencies of characters in the substring of $S2$. Use \`memcmp\` to compare the arrays.
# Code

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

# Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Sliding Window/Sliding Window Maximum.md":`---
difficulty: Hard
topics:
  - Sliding Window
  - Two Pointers
  - Hash Maps
  - Deque
source: Leetcode
star: false
link: https://leetcode.com/problems/sliding-window-maximum/description/
date: 2026-05-22
---

[[Sliding Window]], [[Two Pointers]], [[Hash Maps]], [[Deque]]

# Problem

Return the array of maximums in a sliding window

# Approach
## Two Pointers

Keep a frequency map of all the elements in the window, if the frequency of the maximum goes to 0, scan the window for a new maximum.

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
- Time: $O(n*k)$
- Space: $O(k)$
## Deque
Maintain a deque, where the front element denotes the largest element still in the window.
SO, on a new element, we throw away all the elements in the window that are smaller than it, because the new element is larger than them and will leave the window later than them.
The front element is thrown away if it is outside the window

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
- Space: $O(n)$`,"../dsa-notes/Sliding Window/Subarray Product Less Than K.md":`---
difficulty: Medium
topics: ["Sliding Window"]
source: Leetcode
star: false
code: LeetCode/subarray_product_less_than_k.cpp
---
[[LeetCode/subarray_product_less_than_k.cpp]]
[[Sliding Window]]

[Subarray Product Less Than K]([Subarray Product Less Than K - LeetCode](https://leetcode.com/problems/subarray-product-less-than-k/?envType=study-plan&id=programming-skills-ii)) - Create a sliding window for the subarrays and check the multiplication, then if the multiplication is greater, move the left pointer. We calculate the number of subarrays as -> ans += right - left + 1. This is basically the breakdown of $n(n+1)/2$ which is the formula to get all subarrays.`,"../dsa-notes/Sorting/Group Anagrams.md":`---
difficulty: Medium
topics: ["Sorting"]
source: Leetcode
star: false
code: LeetCode/group_anagrams.cpp
---
[[LeetCode/group_anagrams.cpp]]
[[Sorting]]

 [Group Anagrams]([Group Anagrams - LeetCode](https://leetcode.com/problems/group-anagrams/?envType=study-plan&id=programming-skills-ii))   

Anagrams when sorted give the same word, so we sort every word in the array and store them accordingly in a map, which we then return in the form of an array of arrays.

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
\`\`\``,"../dsa-notes/Sorting/Helpful Maths.md":`---
difficulty: Easy
topics: ["Sorting"]
source: CodeForces
star: false
code: CodeForces/A_Helpful_Maths.cpp
---
[[CodeForces/A_Helpful_Maths.cpp]]
[[Sorting]]

[Problem - 339A - Codeforces](https://codeforces.com/problemset/problem/339/A) #   - put all the numbers in the vector and sort the vector, then print out the numbers seperated by a '+' sign.`,"../dsa-notes/Stack/Add Two Numbers II.md":`---
difficulty: Medium
topics: ["Stack", "Linked Lists"]
source: Leetcode
star: false
code: LeetCode/add_two_numbers_II.cpp
---
[[LeetCode/add_two_numbers_II.cpp]]
[[Stack]] [[Linked Lists]]

[Add Two Numbers II - LeetCode](https://leetcode.com/problems/add-two-numbers-ii/?envType=study-plan-v2&id=programming-skills)as the most significant digit is the first one, we need to add the linked lists in reverse order. The best way is to use stacks to store the lists as we traverse them and then use the stacks to add them and store them into a third linked list as the stack will automatically pop the items in the reverse order.`,"../dsa-notes/Stack/Baseball Game.md":`---
difficulty: Easy
topics: ["Stack"]
source: Leetcode
star: false
code: LeetCode/baseball_game.cpp
---
[[LeetCode/baseball_game.cpp]]
[[Stack]]

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings\xA0\`operations\`, where\xA0\`operations[i]\`\xA0is the\xA0\`ith\`\xA0operation you must apply to the record and is one of the following:

-   An integer\xA0\`x\`.
    -   Record a new score of\xA0\`x\`.
-   \`'+'\`.
    -   Record a new score that is the sum of the previous two scores.
-   \`'D'\`.
    -   Record a new score that is the double of the previous score.
-   \`'C'\`.
    -   Invalidate the previous score, removing it from the record.

Return\xA0_the sum of all the scores on the record after applying all the operations_.

The test cases are generated such that the answer and all intermediate calculations fit in a\xA0**32-bit**\xA0integer and that all operations are valid.


# Solution -
	I just looped through the string given and pushed all the integers into a stack, then if there was a C, I popped the last element. 
	If there is a +, add the last two elements.
	If there is a D, double the last element and record it

\`\`\`
int calPoints(vector<string> &operations)

{
\xA0 \xA0 stack<int> record;
\xA0 \xA0 for (int i = 0; i < operations.size(); i++)
\xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 if (operations[i] == "C")
\xA0 \xA0 \xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if (record.empty())
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 continue;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 else
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.pop();
\xA0 \xA0 \xA0 \xA0 }
\xA0 \xA0 \xA0 \xA0 else if (operations[i] == "D")
\xA0 \xA0 \xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if (record.empty())
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 continue;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 else
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 int num = record.top();
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 num *= 2;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.push(num);
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }

\xA0 \xA0 \xA0 \xA0 }
\xA0 \xA0 \xA0 \xA0 else if (operations[i] == "+")
\xA0 \xA0 \xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if (!record.empty())
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 int num1 = record.top();
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.pop();
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 int num2 = record.top();
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.pop();
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.push(num2);
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.push(num1);
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 int num = num1 + num2;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.push(num);
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }
\xA0 \xA0 \xA0 \xA0 }
\xA0 \xA0 \xA0 \xA0 else
\xA0 \xA0 \xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 int num = 0;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 bool negative = false;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 for (int j = 0; j < operations[i].size(); j++)
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 {
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if(operations[i][j] == '-' && j == 0){
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 negative = true;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 continue;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 num = num * 10 + operations[i][j] - '0';
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if(negative)
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 num *= -1;
\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 record.push(num);
\xA0 \xA0 \xA0 \xA0 }
\xA0 \xA0 }
\`\`\`
`,"../dsa-notes/Stack/Car Fleet.md":`---
difficulty: Medium
topics:
  - Stack
source: Leetcode
star: false
link: https://leetcode.com/problems/car-fleet/
date: 2026-05-30
---
# Problem
Cars of different speed travel to target, we need to find how many cars will reach the target together if overtaking isnt allowed. So the number of groups of cars moving at the same speed to the target
# Approach
1. Sort in ascending order, so now if a slower car is ahead we can detect
2. Use stack to track slower cars. If there is a slower car ahead then all the cars behind it will form a fleet with it
3. Pop until we find a slower car group compared to the currentcar
# Code
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
# Complexity
- Time: $O(nlogn)$ \`Sorting\`
- Space:$O(n)$
`,"../dsa-notes/Stack/Daily Temperatures.md":`---
difficulty: Medium
topics:
  - Stack
source: Leetcode
star: false
link: https://leetcode.com/problems/daily-temperatures/
date: 2026-05-28
---
[[Stack]]
# Problem
find the next greater element in an array
# Approach
check if current element is greater than the top, mark the tops next element as the current element and pop until we find the element which isnt smaller than current. Push the current element
# Code
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
# Complexity
- Time: $O(n)$
- Space: $O(n)$
`,"../dsa-notes/Stack/Evaluate Reverse Polish Notation.md":`---
difficulty: Medium
topics:
  - Stack
source: Leetcode
star: false
link: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
date: 2026-05-28
---
[[Stack]]
# Problem
postfix notation
# Approach
If we see a number, push down the stack
If we see an operator take two numbers from the stack and push down the result
# Code
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
# Complexity
- Time: $O(n)$
- Space:$O(n)$
`,"../dsa-notes/Stack/Longest Valid Parenthesis.md":`---
difficulty: Hard
topics: ["Sliding Window", "Monotonic Stack"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/longest-valid-parentheses/"
---

[[Sliding Window]] [[Monotonic Stack]]

# Problem
Given a string containing just the characters \`'('\` and \`')'\`, return _the length of the longest valid (well-formed) parentheses_ _substring_.

# Solution
Use a stack to store the indices of the opening brackets '(' and do the same thing as [[Longest Valid Parenthesis]] but just maintain an array to store the locations of all the valid parenthesis subsequences. 
Next just use sliding window to find the longest substring in the valid array

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
`,"../dsa-notes/Stack/Min Stack.md":`---
difficulty: Medium
topics:
  - Stack
source: Leetcode
star: false
link: https://leetcode.com/problems/min-stack/
date: 2026-05-25
---

[[Stack]]

# Problem

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

# Approach

Keep a stack to track what is the minimum so far in all the elements pushed to the main stack. the \`minstack\` gets pushed and poped at the same time as the main stack and has the min so far. kind of like a label of the "min currently" for all the elements in the main stack

# Code

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

# Complexity
- Time: $O(1)$
- Space: $O(n)$`,"../dsa-notes/Stack/Next Greater Element II.md":`---
difficulty: Medium
topics: ["Stack", "Monotonic Stack"]
source: Leetcode
star: false
---

[[Stack]] [[Monotonic Stack]]

[Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/?envType=study-plan&id=programming-skills-ii)   
	1. Trivial Solution - Use two nested fro loops to loop over the array in a cicular fashion and fin the next greatest element for each element.
	2. Optimised - Use one for loop that loops over the nums array twice (joining two nums arrays together, imaginary) and then use the stack to find the next greater element.`,"../dsa-notes/Strings/Borze.md":`---
difficulty: Easy
topics: ["Strings"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/32/B"
code: CodeForces/B_Borze.cpp
---
[[CodeForces/B_Borze.cpp]]
[[Strings]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    string s;
    cin >> s;
    string ans = "";
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '.')
            ans += '0';
        if (s[i] == '-')
        {
            if (s[i + 1] == '-')
                ans += '2';
            else
                ans += '1';
            i++;
        }
    }

    cout << ans << endl;
    return 0;
}
\`\`\``,"../dsa-notes/Strings/Dubstep.md":`---
difficulty: Easy
topics: ["Strings"]
source: CodeForces
star: false
code: CodeForces/A_Dubstep.cpp
---
[[CodeForces/A_Dubstep.cpp]]
[[Strings]]

[Problem - 208A - Codeforces](https://codeforces.com/problemset/problem/208/A)

 # 

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    string in;
    string out = "";
    cin >> in;

    int count = in.size();
    int w = 0;
    int b = 0;
    for (int i = 0; i < count; i++)
    {
        if (in[i] == 'W')
        {
            w = i;
            if (i + 1 < count && in[i + 1] == 'U')
            {
                if (i + 2 < count && in[i + 2] == 'B')
                {
                    b = i + 2;
                    i = i + 2;
                    if (out[out.size() - 1] != ' ')
                        out += " ";
                }
                else
                {
                    out += in[i];
                    out += in[i + 1];
                    i += 1;
                }
            }
            else
                out += in[i];
        }
        else
        {
            out += in[i];
        }
    }

    cout << out << endl;

    return 0;
}
\`\`\`

This is a usual question with string manipulation`,"../dsa-notes/Strings/K String.md":`---
difficulty: Easy
topics: ["Strings"]
source: CodeForces
star: false
code: CodeForces/A_k_String.cpp
---
[[CodeForces/A_k_String.cpp]]
[[Strings]]

[Problem - 219A - Codeforces](https://codeforces.com/problemset/problem/219/A)

#  # 

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    int k;
    cin >> k;
    string in;
    cin >> in;
    vector<int> f(26);
    int count = in.size();

    for (int i = 0; i < count; i++)
    {
        f[in[i] - 'a']++;
    }
    string out = "";
    vector<char> ch;
    for (int i = 0; i < 26; i++)
    {
        if (f[i] % k != 0 && f[i] != 0)
        {
            cout << -1 << endl;
            return 0;
        }
        else if (f[i] > 0)
            ch.push_back(i + 'a');
    }

    for (int y = 0; y < k; y++)
    {
        for (int i = 0; i < ch.size(); i++)
        {
            int x = f[ch[i] - 'a'] / k;
            for (int j = 0; j < x; j++)
            {
                out += ch[i];
            }
        }
    }

    cout << out << endl;
    return 0;
}
\`\`\`

Simple implementation problem`,"../dsa-notes/Strings/Nearly Lucky Number.md":`---
difficulty: Easy
topics: ["Strings", "Math"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/110/A"
code: CodeForces/A_Nearly_Lucky_Number.cpp
---
[[CodeForces/A_Nearly_Lucky_Number.cpp]]
[[Strings]] [[Math]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

bool isLucky(int x)
{
    if (x == 0)
        return false;
    while (x)
    {

        if (x % 10 != 4 && x % 10 != 7)
            return false;
        x /= 10;
    }
    return true;
}

int main()
{
    string n;
    cin >> n;

    int l = 0;
    for (auto i : n)
        if (i == '4' || i == '7')
            l++;

    if (isLucky(l))
        cout << "YES" << endl;
    else
        cout << "NO" << endl;

    return 0;
}
\`\`\`

`,"../dsa-notes/Strings/Petya and Strings.md":`---
difficulty: Easy
topics: ["Strings"]
source: CodeForces
star: false
code: CodeForces/A_Petya_and_Strings.cpp
---
[[CodeForces/A_Petya_and_Strings.cpp]]
[[Strings]]

[Problem - 112A - Codeforces](https://codeforces.com/problemset/problem/112/A) #  - just run a for loop and compare the toLower() of each character in the strings.`,"../dsa-notes/Strings/Robot Bounded in Circle.md":`---
difficulty: Medium
topics: ["Math", "Strings"]
source: Leetcode
star: false
code: LeetCode/robot_bounded_in_circle.cpp
---
[[LeetCode/robot_bounded_in_circle.cpp]]
[[Simulation]]

[Robot Bounded In Circle - LeetCode](https://leetcode.com/problems/robot-bounded-in-circle/?envType=study-plan-v2&id=programming-skills) #  # -  loop over the instructions string and according to each instruction - G,L,R. update a set of integers - x,y,dir
representing the coordinate of x,y and the direction of the robot with 0 = north and 3 = west.
if the x and y coordinates are 0 at the end of the loop, then the robot is already at the origin and hence completed a circle.
if the direction variable is anything other than 0, that means the robot can turn during the instruction set and hence it can form a circle.`,"../dsa-notes/Strings/Robot Return To Origin.md":`---
difficulty: Easy
topics: ["Strings", "Math"]
source: Leetcode
star: false
code: LeetCode/robot_return_to_origin.cpp
---
[[LeetCode/robot_return_to_origin.cpp]]
[[Strings]] [[Simulation]]

`,"../dsa-notes/Strings/Valid Palindrome.md":`---
difficulty: Easy
topics: ["Strings"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/valid-palindrome/description/"
---

[[Strings]]

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

Two pointers, checking if the character is alphanumeric and then checking if it is a palindrome.

# Using STL
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

\`\`\``,"../dsa-notes/Strings/Way Too Long Words.md":`---
difficulty: Easy
topics: ["Strings"]
source: CodeForces
star: false
code: CodeForces/A_Way_Too_Long_Words.cpp
---
[[CodeForces/A_Way_Too_Long_Words.cpp]]
[[Strings]]

[Problem - 71A - Codeforces](https://codeforces.com/problemset/problem/71/A) #  - check the length and print the appropriate string, we dont need to store the string as we can directly print it because cout doesn't add a new line and it is not distinguishable from cout if we printed a number or a string.`,"../dsa-notes/Strings/Word Capitalization.md":`---
difficulty: Easy
topics: ["Strings"]
source: CodeForces
star: false
code: CodeForces/A_Word_Capitalization.cpp
---
[[CodeForces/A_Word_Capitalization.cpp]]
[[Strings]]

[Problem - 281A - Codeforces](https://codeforces.com/problemset/problem/281/A) #  - use toupper() to capitalize the first letter and then print the string as it is.`,"../dsa-notes/Strings/Word.md":`---
difficulty: Easy
topics: ["Strings"]
source: CodeForces
star: false
link: "https://codeforces.com/problemset/problem/59/A"
code: CodeForces/A_Word.cpp
---
[[CodeForces/A_Word.cpp]]
[[Strings]]

\`\`\`cpp
# <bits/stdc++.h>

using namespace std;

int main()
{
    string s;
    cin >> s;

    int u = 0;
    int l = 0;
    string sl = "";
    string su = "";

    for (auto i : s)
    {
        if (i - 'a' < 0)
        {
            u++;
            su += i;
            sl += i - 'A' + 'a';
        }
        else
        {
            l++;
            sl += i;
            su += i - 'a' + 'A';
        }
    }

    if (l >= u)
        cout << sl;
    else
        cout << su;

    return 0;
}
\`\`\`
`,"../dsa-notes/Trees/Binary Tree Level Order Traversal.md":`---
difficulty: Medium
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/binary-tree-level-order-traversal/description/"
code: LeetCode/binary_tree_level_order_traversal.cpp
---
[[LeetCode/binary_tree_level_order_traversal.cpp]]
[[Trees]]

Maintain an array of each level and push the array to the ans array
\`\`\`cpp
vector<vector<int>> levelOrder(TreeNode* root) {
	vector<vector<int>> ans;
	if(!root) return ans;

	queue<TreeNode*> q;
	q.push(root);

	while(!q.empty()){
		int n = q.size();
		vector<int> curr;

		while(n--) {
			TreeNode* node = q.front(); q.pop();
			curr.push_back(node->val);
			if(node->left) q.push(node->left);
			if(node->right) q.push(node->right);
		}

		ans.push_back(curr);
	}

	return ans;
}
\`\`\`
`,"../dsa-notes/Trees/Binary Tree Maximum Path Sum.md":`---
difficulty: Hard
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/description/"
---

[[Trees]]

For each node we track two things ->

### Gain
The maximum sum you can get if you continue upwards, eg -> left child + current. we cant include right in this as that would not be a path upward.

### Path
The maximum possible sum at the current node -> left + right + current. This is what we return.

\`\`\`cpp
int path(TreeNode* root, int &c){
	if(!root) return 0;

	int left = max(0,path(root->left, c));
	int right = max(0,path(root->right, c));
	c = max(root->val + left + right, c);
	return max(left, right) + root->val;
}

int maxPathSum(TreeNode* root) {
	int c = INT_MIN;
	path(root, c);
	return c;
}
\`\`\`
`,"../dsa-notes/Trees/Construct Binary Tree from Preorder and Inorder Traversal.md":`---
difficulty: Medium
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/"
---

[[Trees]]

The first element of the preorder traversal is always the root node. The inorder traversal splits the bst into two halves - left and right.

\`\`\`cpp
unordered_map<int, int> inorderIdx;
    int preIdx;

    TreeNode* dfs(vector<int> &preorder, int left, int right){
        if(preorder.empty() || left > right) return nullptr;

        int mid = inorderIdx[preorder[preIdx]];
        TreeNode* root = new TreeNode(preorder[preIdx++]);
        root->left = dfs(preorder, left, mid -1);
        root->right = dfs(preorder, mid + 1, right);

        return root;
    }

public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        for(int i = 0; i < inorder.size(); i++){
            inorderIdx[inorder[i]] = i;
        }
        preIdx = 0;
        return dfs(preorder, 0, inorder.size()-1);
    }
\`\`\`
`,"../dsa-notes/Trees/House Robber III.md":`---
difficulty: Medium
topics: ["Recursion", "Trees", "Dynamic Programming"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/house-robber-iii"
---

[[Recursion]] [[Trees]] [[Dynamic Programming]]

# Problem
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called\xA0\`root\`.

Besides the\xA0\`root\`, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if\xA0**two directly-linked houses were broken into on the same night**.

Given the\xA0\`root\`\xA0of the binary tree, return\xA0_the maximum amount of money the thief can rob\xA0**without alerting the police**_.

# Solution
This problem is similar to the [[House Robber]] problem, the only difference being the data structure used to represent the houses. So we use the same approach here, but instead of having an iterative DP, we have recursion + memorisation.

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
\`\`\``,"../dsa-notes/Trees/Invert Binary Tree.md":`---
difficulty: Easy
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/invert-binary-tree/description/"
---

[[Trees]]

Invert the right and left, then place the inverted right to left and inverted left to right

\`\`\`cpp
TreeNode* invertTree(TreeNode* root) {
	if(root == nullptr) return nullptr;

	TreeNode* temp = root->left;
	root->left = invertTree(root->right);
	root->right = invertTree(temp);

	return root;
}
\`\`\`

`,"../dsa-notes/Trees/Kth Smallest Element in a BST.md":`---
difficulty: Medium
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/"
---

[[Trees]]

# Brute Force
Inorder traversal in a BST is always increasing in value, so make an array from the BST using inorder traversal and return the kth smallest element.

\`\`\`cpp
int inorder(TreeNode* root, int& k){
	if(!root) return -1;

	int l = inorder(root->left, k);
	if(l != -1) return l;

	k--;
	if(k == 0) return root->val;

	return inorder(root->right, k);
}

int kthSmallest(TreeNode* root, int k) {
	return inorder(root, k);
}
\`\`\`


`,"../dsa-notes/Trees/Linked List in Binary Tree.md":`---
difficulty: Medium
topics: ["Binary Search", "DFS", "Trees", "BFS", "Linked Lists"]
source: Leetcode
star: false
code: LeetCode/Linked_list_in_binary_tree.cpp
---
[[LeetCode/Linked_list_in_binary_tree.cpp]]
[[Binary Search]] [[DFS]] [[Trees]] [[BFS]] [[Linked Lists]]

 [ List in  ]([ List in   - LeetCode](https://leetcode.com/problems/linked-list-in-binary-tree/submissions/931286310/?envType=study-plan&id=programming-skills-ii))
	1. Using  - create a dfs algorithm which checks if the current root val and head val are equal and if they are equal then continue the search for head->next, root->left and right.
	2. Using bfs - Instead of searching on one side of the tree first, we use a queue to store the nodes of the tree and compare the value of the linked list with the elements in the queue, the algorithm remains the same its just the order in which the algorithm is used on different nodes.`,"../dsa-notes/Trees/Lowest Common Ancestor of a Binary Search Tree.md":`---
difficulty: Medium
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/"
---

[[Trees]]

The LCA will either be one of the nodes mentioned, or it will be the point where p and q are on opposite sides of the node because it is a binary search tree.

\`\`\`cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
	int low = min(p->val, q->val);
	int high = max(p->val, q->val);

	if(root->val > high) return lowestCommonAncestor(root->left, p, q);
	if(root->val < low) return lowestCommonAncestor(root->right, p, q);
	else return root;
}
\`\`\`
`,"../dsa-notes/Trees/Maximum Depth of Binary Tree.md":`---
difficulty: Easy
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/description/"
---

[[Trees]]

current node (1 length) + the max length between its children subtrees.

\`\`\`cpp
int maxDepth(TreeNode* root) {
	if(root == nullptr) return 0;

	return max(maxDepth(root->right), maxDepth(root->left)) + 1;
}
\`\`\`
`,"../dsa-notes/Trees/Same Tree.md":`---
difficulty: Easy
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/same-tree/description/"
---

[[Trees]]

Check if both are not null, then check if their values are different, now repeat for the subtrees.

\`\`\`cpp
bool isSameTree(TreeNode* p, TreeNode* q) {
	if(!p && !q)
		return true;
	if(!p || !q)
		return false;
	if (p->val != q->val)
		return false;
	return (isSameTree(p->left, q->left) && isSameTree(p->right, q->right));
}
\`\`\`
`,"../dsa-notes/Trees/Serialize and Deserialize Binary Tree.md":`---
difficulty: Hard
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/"
---

[[Trees]]

using [[stringstream]]

\`\`\`cpp
void se(TreeNode* root, ostringstream& out) {
        if(!root)
            out << "# ";
        else {
            out << root->val << " ";
            se(root->left, out);
            se(root->right, out);
        }
    }

    TreeNode* de(istringstream& in) {
        string val;
        in >> val;
        if(val == "#")
            return nullptr;
        TreeNode* root = new TreeNode(stoi(val));
        root->left = de(in);
        root->right = de(in);
        return root;
    }

public:

    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        ostringstream out;
        se(root, out);
        return out.str();
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        istringstream in(data);
        return de(in);
    }
\`\`\`
`,"../dsa-notes/Trees/Subtree of Another Tree.md":`---
difficulty: Easy
topics: ["Trees"]
source: Leetcode
star: false
link: "https://leetcode.com/problems/subtree-of-another-tree/description/"
---

[[Trees]]

Just iterate over the tree and check if subtree is the same as the subRoot tree using [[Same Tree]]

\`\`\`cpp
bool sameTree(TreeNode* t1, TreeNode* t2) {
	if(!t1 && !t2)  return true;
	if(!t1 || !t2) return false;
	if(t1->val != t2->val) return false;
	return sameTree(t1->left, t2->left) && sameTree(t2->right, t1->right);
}

bool isSubtree(TreeNode* root, TreeNode* subRoot) {
	if(!root && !subRoot) return true;
	if(!root || !subRoot) return false;
	return sameTree(root, subRoot) || isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
}
\`\`\`
`,"../dsa-notes/Trees/Time Needed to Inform All Employees.md":`---
difficulty: Medium
topics: ["DFS", "Trees"]
source: Leetcode
star: false
code: LeetCode/time_needed_to_inform_all_employees.cpp
---
[[LeetCode/time_needed_to_inform_all_employees.cpp]]
[[DFS]] [[Trees]]

 [Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/?envType=study-plan&id=programming-skills-ii) # #  # - We need to convert the given arrays into a tree form, possibly using an unordered map. The map will denote the manager subordinate relationship .Then apply  on the unordered map to find the time required to inform all the employees.`,"../dsa-notes/Two Pointers/Best Time to Buy and Sell Stock.md":`---
difficulty: Easy
topics: ["Two Pointers", "Sliding Window"]
source: Leetcode
star: false
---

[[Two Pointers]] [[Sliding Window]]

# Two Pointers
going from left to right, if we see an element which is smaller than the current left, then surely at any given day buying stocks on that day will give more profit than buying stocks on the current left for the elements after the current pointer. So we make the current pointer the new left, otherwise we compare the profit by subtracting prices between left and pointer.
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
`,"../dsa-notes/Two Pointers/Container with most water.md":`---
difficulty: Medium
topics: ["Two Pointers"]
source: Leetcode
star: true
link: "https://leetcode.com/problems/container-with-most-water/description/"
---

[[Two Pointers]]

# Two Pointers
Why are we moving the pointer which points to the smaller height? 
\`Area = smallerHeight * width\`
so, with each movement width will surely decrease, so moving the pointer with the larger height does not make sense as if the width is decreasing we have to ensure that the min height of the columns increases.
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
`,"../dsa-notes/Two Pointers/Trapping Rain Water.md":`---
difficulty: Hard
topics:
  - Arrays
  - Two Pointers
source: Leetcode
star: true
link: https://leetcode.com/problems/trapping-rain-water/
date: 2026-05-19
---
[[Two Pointers]] [[Arrays]]
# Problem

Find the water trapped between the walls in an array
# Approach
## Prefix and Suffix Maximum
Calculate the prefix and suffix max at a point to know the highest walls on left and right, then take the min of the highest on left and right walls to know the amount trapped.
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
## Two pointers
#### Naïve:
Use two pointers to point to the greatest height to the left and right of the current element. the height of the water trapped would be $min(height[l], height[r]) - height[curr]$ as the width is always 1. 
#### Code
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
#### Complexity
- Time: $O(n^2)$
- Space: $O(1)$
#### Optimised: 
So always, one side is the limiting factor. We can take the side which is smaller, compute the water for that side and move it inwards.
#### Code
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
- Space: $O(1)$`});function so(e){let t=e.match(/^---\n([\s\S]*?)\n---/);if(!t)return{};let n={},r=t[1].split(`
`),i=0;for(;i<r.length;){let e=r[i];if(!e.trim()){i++;continue}if(i+1<r.length&&/^\s+-/.test(r[i+1])){let t=e.replace(`:`,``).trim(),a=[];for(i++;i<r.length&&/^\s+-/.test(r[i]);)a.push(r[i].replace(/^\s+-\s*/,``).trim()),i++;n[t]=a}else{let t=e.indexOf(`: `);if(t!==-1){let r=e.slice(0,t).trim(),i=e.slice(t+2).trim();if(i.startsWith(`[`))try{n[r]=JSON.parse(i)}catch{n[r]=i}else n[r]=i}i++}}return n}function co(e){let t=e.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);return t?t[1].trim():e}var lo=Object.entries(oo).map(([e,t])=>{let n=so(t),r=e.match(/\/([^/]+)\.md$/)[1];return{title:r,slug:r.toLowerCase().replace(/\s+/g,`-`),difficulty:n.difficulty??`Medium`,topics:Array.isArray(n.topics)?n.topics:n.topics?[n.topics]:[],source:n.source??``,star:n.star===`true`||n.star===!0,link:n.link??``,date:n.date??`1970-01-01`,content:co(t)}}).sort((e,t)=>{let n={Easy:0,Medium:1,Hard:2};return(n[e.difficulty]??1)-(n[t.difficulty]??1)||e.title.localeCompare(t.title)}),uo=[...new Set(lo.flatMap(e=>e.topics))].sort(),fo=e=>lo.find(t=>t.slug===e),po={Easy:`text-accent-green border-accent-green/30 bg-accent-green/5`,Medium:`text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5`,Hard:`text-accent-orange border-accent-orange/30 bg-accent-orange/5`},L={Easy:lo.filter(e=>e.difficulty===`Easy`).length,Medium:lo.filter(e=>e.difficulty===`Medium`).length,Hard:lo.filter(e=>e.difficulty===`Hard`).length},mo=lo.filter(e=>e.star).slice(0,5),ho=mo.length?mo:lo.slice(0,5);function R(){return(0,k.jsxs)(Er,{id:`dsa`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between mb-8`,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text`,children:`DSA`}),(0,k.jsx)(O,{to:`/dsa`,className:`text-[11px] text-text-muted hover:text-accent link-animated transition-colors`,children:`all problems →`})]}),(0,k.jsxs)(`div`,{className:`flex gap-4 mb-8`,children:[[`Easy`,`Medium`,`Hard`].map(e=>(0,k.jsxs)(`div`,{className:`text-[11px] border rounded px-3 py-1.5 ${po[e]}`,children:[(0,k.jsx)(`span`,{className:`font-bold`,children:L[e]}),(0,k.jsx)(`span`,{className:`ml-1 opacity-70`,children:e})]},e)),(0,k.jsxs)(`div`,{className:`text-[11px] text-text-muted self-center ml-1`,children:[lo.length,` total`]})]}),(0,k.jsx)(`div`,{children:ho.map((e,t)=>(0,k.jsxs)(Dr,{index:t,as:e.link?`a`:`div`,href:e.link||void 0,target:e.link?`_blank`:void 0,rel:e.link?`noopener noreferrer`:void 0,className:`group flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0 hover:pl-1 transition-all duration-300`,children:[(0,k.jsx)(`span`,{className:`text-xs shrink-0 ${e.star?`text-accent-yellow`:`text-border/30`}`,children:`★`}),(0,k.jsx)(`span`,{className:`flex-1 min-w-0 text-xs text-text-secondary group-hover:text-text transition-colors truncate`,children:e.title}),(0,k.jsx)(`div`,{className:`hidden sm:flex gap-1.5 shrink-0`,children:e.topics.slice(0,2).map(e=>(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5`,children:e},e))}),(0,k.jsx)(`span`,{className:`text-[10px] border rounded px-2 py-0.5 shrink-0 ${po[e.difficulty]??po.Medium}`,children:e.difficulty})]},e.slug))})]})}var z=[{label:`email`,value:`abhi.gupta8802@gmail.com`,href:`mailto:abhi.gupta8802@gmail.com`,color:`hover:text-accent-orange`},{label:`github`,value:`github.com/Navknight`,href:`https://github.com/Navknight`,color:`hover:text-accent-green`},{label:`linkedin`,value:`linkedin.com/in/abhinav-gupta-iitt`,href:`https://www.linkedin.com/in/abhinav-gupta-iitt/`,color:`hover:text-accent-blue`}];function B(){return(0,k.jsxs)(Er,{id:`contact`,compact:!0,children:[(0,k.jsx)(`h2`,{className:`font-sans text-2xl font-bold text-text mb-2`,children:`Contact`}),(0,k.jsx)(`p`,{className:`text-xs text-text-secondary mb-8`,children:`Open to work, collaborations, and interesting conversations.`}),(0,k.jsx)(`div`,{className:`flex flex-col gap-4`,children:z.map(({label:e,value:t,href:n,color:r})=>(0,k.jsxs)(`a`,{href:n,target:n.startsWith(`http`)?`_blank`:void 0,rel:n.startsWith(`http`)?`noopener noreferrer`:void 0,className:`group flex items-baseline gap-4 transition-colors ${r}`,children:[(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted w-16 shrink-0 font-mono`,children:e}),(0,k.jsx)(`span`,{className:`text-sm text-text-secondary group-hover:text-inherit transition-colors font-mono link-animated`,children:t})]},e))})]})}function go(){return(0,k.jsx)(`footer`,{className:`page-container py-16 border-t border-border`,children:(0,k.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`p`,{className:`text-xs text-text-muted`,children:[`© `,new Date().getFullYear(),` Abhinav Gupta`]}),(0,k.jsx)(`p`,{className:`text-[10px] text-text-muted mt-1 opacity-60`,children:`Built with React + Vite. Keyboard-friendly.`})]}),(0,k.jsxs)(`div`,{className:`flex gap-5 text-xs`,children:[(0,k.jsx)(`a`,{href:`https://github.com/Navknight`,target:`_blank`,rel:`noopener noreferrer`,className:`text-text-muted hover:text-accent-green link-animated transition-colors`,children:`github`}),(0,k.jsx)(`a`,{href:`https://www.linkedin.com/in/abhinav-gupta-iitt/`,target:`_blank`,rel:`noopener noreferrer`,className:`text-text-muted hover:text-accent-blue link-animated transition-colors`,children:`linkedin`}),(0,k.jsx)(O,{to:`/dsa`,className:`text-text-muted hover:text-accent link-animated transition-colors`,children:`dsa`}),(0,k.jsx)(`a`,{href:`mailto:abhi.gupta8802@gmail.com`,className:`text-text-muted hover:text-accent-orange link-animated transition-colors`,children:`email`})]})]})})}function _o(){let[e,t]=(0,x.useState)(tr[0].watermark),[n,r]=(0,x.useState)(1);return(0,x.useEffect)(()=>{let n=()=>{let n=window.scrollY+window.innerHeight*.4;for(let i=tr.length-1;i>=0;i--){let a=document.getElementById(tr[i].id);if(a&&n>=a.offsetTop){e!==tr[i].watermark&&(r(0),setTimeout(()=>{t(tr[i].watermark),r(1)},150));break}}};return window.addEventListener(`scroll`,n,{passive:!0}),n(),()=>window.removeEventListener(`scroll`,n)},[e]),(0,k.jsx)(`div`,{className:`fixed left-[-1rem] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 transition-opacity duration-300 hidden md:block`,style:{opacity:n},children:(0,k.jsx)(`span`,{className:`font-sans text-[clamp(7rem,16vw,14rem)] font-bold text-watermark leading-none tracking-[-0.05em] whitespace-nowrap`,children:e})})}function vo(){let[e,t]=(0,x.useState)(0);return(0,x.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight;t(e>0?window.scrollY/e:0)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),e}function yo(){return(0,k.jsx)(`div`,{className:`scroll-progress`,style:{transform:`scaleX(${vo()})`}})}function bo({post:e}){return(0,k.jsxs)(O,{to:`/blog/${e.slug}`,className:`group flex gap-4 py-5 border-b border-border/50 last:border-b-0 transition-all duration-300 hover:pl-2`,children:[(0,k.jsx)(`div`,{className:`w-20 h-14 rounded overflow-hidden shrink-0`,children:e.image?(0,k.jsx)(`img`,{src:e.image,alt:e.title,className:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}):(0,k.jsx)(ro,{title:e.title,className:`w-full h-full`})}),(0,k.jsxs)(`div`,{className:`flex-1 min-w-0 flex flex-col justify-center`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between gap-3`,children:[(0,k.jsx)(`h2`,{className:`text-sm text-text-secondary group-hover:text-accent transition-colors duration-300 truncate`,children:e.title}),(0,k.jsx)(`time`,{className:`text-[10px] text-text-muted shrink-0`,children:new Date(e.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`})})]}),(0,k.jsx)(`p`,{className:`text-[11px] text-text-muted mt-0.5 truncate`,children:e.description}),e.tags.length>0&&(0,k.jsx)(`div`,{className:`flex gap-2 mt-1.5`,children:e.tags.map(e=>(0,k.jsxs)(`span`,{className:`text-[10px] text-accent-green`,children:[`#`,e]},e))})]})]})}function xo(){return(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-3xl`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-2xl font-bold text-text mb-2`,children:`Blog`}),(0,k.jsx)(`p`,{className:`text-xs text-text-secondary mb-10`,children:`Notes on systems, GPU architecture, browser internals, and security research.`}),$a.length===0?(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`No posts yet.`}):(0,k.jsx)(`div`,{children:$a.map(e=>(0,k.jsx)(bo,{post:e},e.slug))})]})}),(0,k.jsx)(go,{})]})}function So(){let e=new Map,t=[];for(let t of $a)e.set(`blog:${t.slug}`,{id:`blog:${t.slug}`,label:t.title.length>22?t.title.slice(0,22)+`…`:t.title,fullLabel:t.title,type:`blog`,url:`/blog/${t.slug}`,tags:t.tags,x:(Math.random()-.5)*40,y:(Math.random()-.5)*40,vx:0,vy:0,r:5});for(let t of lo)e.set(`dsa:${t.slug}`,{id:`dsa:${t.slug}`,label:t.title.length>24?t.title.slice(0,24)+`…`:t.title,fullLabel:t.title,type:`dsa`,url:`/dsa/${t.slug}`,tags:t.topics,x:(Math.random()-.5)*40,y:(Math.random()-.5)*40,vx:0,vy:0,r:4});let n=new Map;for(let t of e.values())for(let e of t.tags)n.set(e,(n.get(e)||0)+1);let r=[...n.entries()];r.forEach(([t,n],i)=>{let a=i/r.length*Math.PI*2;e.set(`topic:${t}`,{id:`topic:${t}`,label:t,fullLabel:t,type:`topic`,url:null,tags:[],x:Math.cos(a)*120,y:Math.sin(a)*120,vx:0,vy:0,r:2+Math.sqrt(n)*1.2})});for(let n of e.values())if(n.type!==`topic`)for(let e of n.tags)t.push({a:n.id,b:`topic:${e}`});return{nodes:[...e.values()],edges:t,nodeMap:e}}function V(e,t=40){let{nodes:n,edges:r,nodeMap:i}=So(),a=i.get(e);if(!a)return{nodes:[],edges:[],nodeMap:new Map};let o=new Set(r.filter(t=>t.a===e||t.b===e).map(t=>t.a===e?t.b:t.a)),s=new Set;for(let t of r)o.has(t.b)&&t.a!==e&&s.add(t.a),o.has(t.a)&&t.b!==e&&s.add(t.b);let c=[...s].filter(e=>{let t=i.get(e);return t&&t.type===a.type}),l=[...s].filter(e=>{let t=i.get(e);return t&&t.type!==a.type&&t.type!==`topic`}),u=new Set([e,...o,...c.slice(0,Math.floor(t*.6)),...l.slice(0,Math.floor(t*.4))]),d=n.filter(e=>u.has(e.id)).map(e=>({...e,x:(Math.random()-.5)*30,y:(Math.random()-.5)*30,vx:0,vy:0}));return{nodes:d,edges:r.filter(e=>u.has(e.a)&&u.has(e.b)),nodeMap:new Map(d.map(e=>[e.id,e]))}}function Co(e,t,n,{rep:r=900,slen:i=70,sk:a=.03,damp:o=.75,grav:s=.003}={}){for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let i=e[n].x-e[t].x,a=e[n].y-e[t].y,o=Math.sqrt(i*i+a*a)||1,s=r/(o*o);e[t].vx-=i/o*s,e[t].vy-=a/o*s,e[n].vx+=i/o*s,e[n].vy+=a/o*s}for(let e of t){let t=n.get(e.a),r=n.get(e.b);if(!t||!r)continue;let o=r.x-t.x,s=r.y-t.y,c=Math.sqrt(o*o+s*s)||1,l=(c-i)*a;t.vx+=o/c*l,t.vy+=s/c*l,r.vx-=o/c*l,r.vy-=s/c*l}let c=0;for(let t of e)t.vx=(t.vx-t.x*s)*o,t.vy=(t.vy-t.y*s)*o,t.x+=t.vx,t.y+=t.vy,c+=t.vx*t.vx+t.vy*t.vy;return c}function wo(){return document.documentElement.classList.contains(`light`)?{bg:`#e4e4e7`,blog:`#7c3aed`,dsa:`#15803d`,topic:`#a1a1aa`,edge:`rgba(0,0,0,0.07)`,edgeHi:`rgba(0,0,0,0.3)`,text:`#71717a`,textHi:`#18181b`,curRing:`#7c3aed`}:{bg:`#0a0a0a`,blog:`#c084fc`,dsa:`#4ade80`,topic:`#3f3f46`,edge:`rgba(255,255,255,0.05)`,edgeHi:`rgba(255,255,255,0.35)`,text:`#a1a1aa`,textHi:`#e4e4e7`,curRing:`#c084fc`}}function To(e,t,n,r,i,a,o,s,c,l){let u=wo();e.fillStyle=u.bg,e.fillRect(0,0,t,n);let d=new Set;if(s){d.add(s.id);for(let e of i)e.a===s.id&&d.add(e.b),e.b===s.id&&d.add(e.a)}let f=new Set([o]);for(let e of i)e.a===o&&f.add(e.b),e.b===o&&f.add(e.a);let p=t/2+c.x,m=n/2+c.y;for(let t of i){let n=a.get(t.a),r=a.get(t.b);if(!n||!r)continue;let i=t.a===o||t.b===o,c=s&&(t.a===s.id||t.b===s.id);e.beginPath(),e.moveTo(p+n.x*l,m+n.y*l),e.lineTo(p+r.x*l,m+r.y*l),e.strokeStyle=c||i?u.edgeHi:u.edge,e.lineWidth=c||i?1:.5,e.stroke()}for(let t of r){let n=t.id===o,r=t===s,i=s&&!d.has(t.id)&&!f.has(t.id),a=t.type===`blog`?u.blog:t.type===`dsa`?u.dsa:u.topic,c=t.r*l*(n?1.8:r?1.4:1),h=p+t.x*l,g=m+t.y*l;e.beginPath(),e.arc(h,g,c,0,Math.PI*2),e.fillStyle=i?a+`22`:n?a:a+`bb`,e.fill(),n&&(e.beginPath(),e.arc(h,g,c+3,0,Math.PI*2),e.strokeStyle=a+`66`,e.lineWidth=1.5,e.stroke())}e.font=`9px JetBrains Mono, monospace`;for(let t of r){if(t!==s&&t.id!==o&&!d.has(t.id))continue;let n=t.type===`blog`?u.blog:t.type===`dsa`?u.dsa:u.topic;e.fillStyle=t.id===o?n:u.text+`cc`,e.fillText(t.label,p+t.x*l+t.r*l+3,m+t.y*l+3)}}function Eo({nodeId:e}){let t=(0,x.useRef)(null),n=(0,x.useRef)(null),r=yt(),i=(0,x.useCallback)((e,r)=>{let i=n.current;if(!i)return null;let a=t.current,o=a.width/2+i.pan.x,s=a.height/2+i.pan.y,c=null,l=1/0;for(let t of i.nodes){let n=Math.hypot(t.x*i.scale-(e-o),t.y*i.scale-(r-s));n<t.r*i.scale+6&&n<l&&(l=n,c=t)}return c},[]);(0,x.useEffect)(()=>{let r=t.current,i=devicePixelRatio;r.width=r.offsetWidth*i,r.height=r.offsetHeight*i;let{nodes:a,edges:o,nodeMap:s}=V(e,35);for(let e=0;e<200;e++)Co(a,o,s,{rep:600,slen:50,sk:.04,damp:.72,grav:.004});n.current={nodes:a,edges:o,nodeMap:s,hover:null,raf:null,settled:!1,pan:{x:0,y:0},scale:1,dragging:!1,lastMouse:null};let c=n.current,l=0;function u(){c.settled||(Co(a,o,s,{rep:600,slen:50,sk:.04,damp:.72,grav:.004}),++l>150&&(c.settled=!0)),To(r.getContext(`2d`),r.width,r.height,a,o,s,e,c.hover,c.pan,c.scale),c.raf=requestAnimationFrame(u)}return c.raf=requestAnimationFrame(u),()=>cancelAnimationFrame(c.raf)},[e]);let a=(0,x.useCallback)(e=>{let r=n.current;if(!r)return;let a=t.current.getBoundingClientRect(),o=devicePixelRatio;r.dragging&&r.lastMouse&&(r.pan.x+=(e.clientX-r.lastMouse.x)*o,r.pan.y+=(e.clientY-r.lastMouse.y)*o),r.lastMouse={x:e.clientX,y:e.clientY},r.hover=i((e.clientX-a.left)*o,(e.clientY-a.top)*o),t.current.style.cursor=r.dragging?`grabbing`:r.hover?.url?`pointer`:`grab`},[i]),o=(0,x.useCallback)(e=>{let t=n.current;t&&(t.dragging=!0,t.lastMouse={x:e.clientX,y:e.clientY})},[]),s=(0,x.useCallback)(()=>{let e=n.current;e&&(e.hover=null,e.dragging=!1)},[]),c=(0,x.useCallback)(()=>{n.current&&(n.current.dragging=!1)},[]),l=(0,x.useCallback)(e=>{e.preventDefault();let t=n.current;t&&(t.scale=Math.max(.3,Math.min(5,t.scale*(e.deltaY<0?1.1:.91))))},[]);(0,x.useEffect)(()=>{let e=t.current;return e.addEventListener(`wheel`,l,{passive:!1}),()=>e.removeEventListener(`wheel`,l)},[l]);let u=(0,x.useCallback)(a=>{let o=n.current;if(!o||o.dragging)return;let s=t.current.getBoundingClientRect(),c=devicePixelRatio,l=i((a.clientX-s.left)*c,(a.clientY-s.top)*c);l?.url&&l.id!==e&&r(l.url)},[i,r,e]);return(0,k.jsxs)(`div`,{className:`border border-border rounded-lg overflow-hidden`,children:[(0,k.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-1.5 border-b border-border/50`,children:[(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted font-mono`,children:`connections`}),(0,k.jsx)(O,{to:`/graph`,className:`text-[10px] text-text-muted hover:text-accent-cyan transition-colors`,children:`full graph →`})]}),(0,k.jsx)(`canvas`,{ref:t,className:`w-full`,style:{height:180,cursor:`grab`},onMouseMove:a,onMouseDown:o,onMouseUp:c,onMouseLeave:s,onClick:u})]})}function Do(){let{slug:e}=xt(),t=eo(e);return(0,x.useEffect)(()=>{if(!t)return;let e=document.title;document.title=`${t.title} — Abhinav Gupta`;let n=(e,t,n=!1)=>{let r=n?`meta[property="${e}"]`:`meta[name="${e}"]`,i=document.querySelector(r);return i||(i=document.createElement(`meta`),n?i.setAttribute(`property`,e):i.setAttribute(`name`,e),document.head.appendChild(i)),i.setAttribute(`content`,t),i},r=`https://navknight.github.io/blog/${t.slug}`;return n(`description`,t.description),n(`og:title`,t.title,!0),n(`og:description`,t.description,!0),n(`og:url`,r,!0),n(`og:type`,`article`,!0),()=>{document.title=e}},[t]),(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-2xl`,children:[(0,k.jsxs)(O,{to:`/blog`,className:`inline-flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent link-animated transition-colors mb-8`,children:[(0,k.jsx)(pr,{size:12}),` all posts`]}),t?(0,k.jsxs)(`article`,{children:[(0,k.jsx)(`div`,{className:`rounded-lg overflow-hidden mb-8 h-56 md:h-72`,children:t.image?(0,k.jsx)(`img`,{src:t.image,alt:t.title,className:`w-full h-full object-cover`}):(0,k.jsx)(ro,{title:t.title,className:`w-full h-full`})}),(0,k.jsxs)(`header`,{className:`mb-10`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-xl font-bold text-text mb-3`,children:t.title}),(0,k.jsxs)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:[(0,k.jsx)(`time`,{className:`text-[11px] text-text-muted`,children:new Date(t.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`})}),(0,k.jsx)(`div`,{className:`flex gap-2`,children:t.tags.map(e=>(0,k.jsxs)(`span`,{className:`text-[10px] text-accent-green`,children:[`#`,e]},e))})]})]}),(0,k.jsx)(`div`,{className:`mb-8`,children:(0,k.jsx)(Eo,{nodeId:`blog:${t.slug}`})}),(0,k.jsx)(`div`,{className:`prose`,dangerouslySetInnerHTML:{__html:t.html}})]}):(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{className:`text-sm text-text-muted`,children:`Post not found.`}),(0,k.jsx)(O,{to:`/blog`,className:`text-xs text-text-muted hover:text-accent underline underline-offset-2 mt-3 inline-block`,children:`← Back to blog`})]})]})}),(0,k.jsx)(go,{})]})}var Oo={Easy:`text-accent-green border-accent-green/30 bg-accent-green/5`,Medium:`text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5`,Hard:`text-accent-orange border-accent-orange/30 bg-accent-orange/5`};function ko({active:e,onClick:t,children:n,activeClass:r}){return(0,k.jsx)(`button`,{onClick:t,className:`text-[11px] px-3 py-1 rounded border transition-colors ${e?r??`border-accent text-accent bg-accent/10`:`border-border/50 text-text-muted hover:border-border-hover hover:text-text-secondary`}`,children:n})}function Ao({p:e}){return(0,k.jsxs)(O,{to:`/dsa/${e.slug}`,className:`flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0 group hover:pl-1 transition-all duration-200`,children:[(0,k.jsx)(`span`,{className:`text-xs shrink-0 ${e.star?`text-accent-yellow`:`text-border/30`}`,children:`★`}),(0,k.jsx)(`span`,{className:`flex-1 min-w-0 text-sm text-text-secondary group-hover:text-text transition-colors truncate font-mono`,children:e.title}),(0,k.jsxs)(`div`,{className:`hidden sm:flex gap-1.5 shrink-0 max-w-[200px] overflow-hidden`,children:[e.topics.slice(0,2).map(e=>(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5 truncate`,children:e},e)),e.topics.length>2&&(0,k.jsxs)(`span`,{className:`text-[10px] text-text-muted self-center`,children:[`+`,e.topics.length-2]})]}),(0,k.jsx)(`span`,{className:`hidden md:block text-[10px] text-text-muted shrink-0 w-16 text-right`,children:e.source}),(0,k.jsx)(`span`,{className:`text-[10px] border rounded px-2 py-0.5 shrink-0 w-14 text-center ${Oo[e.difficulty]??Oo.Medium}`,children:e.difficulty}),e.link?(0,k.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,onClick:e=>e.stopPropagation(),className:`shrink-0 text-text-muted hover:text-accent-blue transition-colors`,title:`Open on LC/CF`,children:(0,k.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,k.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`})})}):(0,k.jsx)(`span`,{className:`w-3.5 shrink-0`})]})}function jo(){let[e,t]=(0,x.useState)(`All`),[n,r]=(0,x.useState)(`All`),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(``),c=(0,x.useMemo)(()=>lo.filter(t=>!(e!==`All`&&t.difficulty!==e||n!==`All`&&!t.topics.includes(n)||i&&!t.star||o&&!t.title.toLowerCase().includes(o.toLowerCase()))),[e,n,i,o]);return(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-3xl`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-2xl font-bold text-text mb-1`,children:`Problems`}),(0,k.jsxs)(`p`,{className:`text-xs text-text-secondary mb-8`,children:[lo.length,` problems across algorithms and data structures.`]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-2`,children:[[`All`,`Easy`,`Medium`,`Hard`].map(n=>(0,k.jsx)(ko,{active:e===n,onClick:()=>t(n),children:n},n)),(0,k.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),className:`text-[11px] px-3 py-1 rounded border border-border/50 bg-surface text-text-muted
                         focus:outline-none focus:border-accent transition-colors cursor-pointer`,children:[(0,k.jsx)(`option`,{value:`All`,children:`All Topics`}),uo.map(e=>(0,k.jsx)(`option`,{value:e,children:e},e))]}),(0,k.jsx)(ko,{active:i,onClick:()=>a(e=>!e),activeClass:`border-accent-yellow text-accent-yellow bg-accent-yellow/10`,children:`★ Starred`})]}),(0,k.jsxs)(`div`,{className:`mb-6 flex items-center gap-3`,children:[(0,k.jsx)(`input`,{type:`text`,placeholder:`search problems...`,value:o,onChange:e=>s(e.target.value),className:`text-[11px] px-3 py-1.5 rounded border border-border/50 bg-surface text-text-secondary
                         placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors w-56`}),(0,k.jsxs)(`span`,{className:`text-[11px] text-text-muted ml-auto`,children:[c.length,` / `,lo.length]})]}),c.length===0?(0,k.jsx)(`p`,{className:`text-xs text-text-muted py-8`,children:`No problems match.`}):(0,k.jsx)(`div`,{children:c.map(e=>(0,k.jsx)(Ao,{p:e},e.slug))})]})}),(0,k.jsx)(go,{})]})}var H=new Map(lo.map(e=>[e.title.toLowerCase(),e.slug]));function Mo(e){return e.replace(/\[\[([^\]]+)\]\]/g,(e,t)=>{if(t.includes(`/`))return`\`${t}\``;let n=t.toLowerCase();return H.has(n)?`[${t}](/dsa/${H.get(n)})`:uo.includes(t)?`[${t}](/dsa?topic=${encodeURIComponent(t)})`:`**${t}**`})}var No={Easy:`text-accent-green border-accent-green/30 bg-accent-green/5`,Medium:`text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5`,Hard:`text-accent-orange border-accent-orange/30 bg-accent-orange/5`};function Po(){let{slug:e}=xt(),t=fo(e);return t?(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`flex-1 pt-28 pb-24 px-6 flex flex-col items-center`,children:(0,k.jsxs)(`div`,{className:`w-full max-w-2xl`,children:[(0,k.jsx)(O,{to:`/dsa`,className:`text-[11px] text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1 mb-8`,children:`← all problems`}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-start gap-3 mb-2`,children:[(0,k.jsx)(`h1`,{className:`font-sans text-2xl font-bold text-text flex-1`,children:t.title}),t.star&&(0,k.jsx)(`span`,{className:`text-accent-yellow text-lg mt-1`,children:`★`})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 mb-8`,children:[(0,k.jsx)(`span`,{className:`text-[11px] border rounded px-2 py-0.5 ${No[t.difficulty]??No.Medium}`,children:t.difficulty}),(0,k.jsx)(`span`,{className:`text-[11px] text-text-muted`,children:t.source}),t.topics.map(e=>(0,k.jsx)(`span`,{className:`text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5`,children:e},e)),t.link&&(0,k.jsx)(`a`,{href:t.link,target:`_blank`,rel:`noopener noreferrer`,className:`ml-auto text-[11px] text-accent-blue hover:text-accent border border-accent-blue/30 hover:border-accent/30 rounded px-3 py-1 transition-colors`,children:`Open problem ↗`})]}),(0,k.jsx)(`div`,{className:`mb-8`,children:(0,k.jsx)(Eo,{nodeId:`dsa:${e}`})}),t.content?(0,k.jsx)(`div`,{className:`prose max-w-none`,dangerouslySetInnerHTML:{__html:I(Mo(t.content))}}):(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`No notes yet.`})]})}),(0,k.jsx)(go,{})]}):(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,k.jsx)(br,{}),(0,k.jsx)(`main`,{className:`section-wrap flex-1 pt-24`,children:(0,k.jsxs)(`div`,{className:`content-area`,children:[(0,k.jsx)(`p`,{className:`text-xs text-text-muted`,children:`Problem not found.`}),(0,k.jsx)(O,{to:`/dsa`,className:`text-xs text-accent hover:underline mt-4 inline-block`,children:`← back`})]})}),(0,k.jsx)(go,{})]})}function Fo(e,t,n,r,i,a,o,s,c){let l=wo();e.clearRect(0,0,t,n),e.fillStyle=l.bg,e.fillRect(0,0,t,n);let u=new Set;if(c){u.add(c.id);for(let e of i)e.a===c.id&&u.add(e.b),e.b===c.id&&u.add(e.a)}let d=t/2+o.x,f=n/2+o.y,p=(e,t)=>({x:e*s+d,y:t*s+f});for(let t of i){let n=a.get(t.a),r=a.get(t.b);if(!n||!r)continue;let i=c&&(t.a===c.id||t.b===c.id),o=p(n.x,n.y),s=p(r.x,r.y);e.beginPath(),e.moveTo(o.x,o.y),e.lineTo(s.x,s.y),e.strokeStyle=i?l.edgeHi:l.edge,e.lineWidth=i?1:.5,e.stroke()}for(let t of r){let n=p(t.x,t.y),r=t.r*s*(t===c?1.6:1),i=c&&!u.has(t.id),a=t.type===`blog`?l.blog:t.type===`dsa`?l.dsa:l.topic;e.beginPath(),e.arc(n.x,n.y,r,0,Math.PI*2),e.fillStyle=i?a+`22`:a+(t===c?`ff`:`bb`),e.fill(),t===c&&(e.beginPath(),e.arc(n.x,n.y,r+3,0,Math.PI*2),e.strokeStyle=a+`55`,e.lineWidth=1,e.stroke())}e.font=`10px JetBrains Mono, monospace`;for(let t of r){if(!(t===c||u.has(t.id)||t.type===`topic`&&t.r*s>6||s>2))continue;let n=p(t.x,t.y),r=t.r*s,i=c&&!u.has(t.id);e.fillStyle=(t===c?l.textHi:l.text)+(i?`44`:`dd`),e.fillText(t.label,n.x+r+4,n.y+3)}}function Io(){let e=(0,x.useRef)(null),t=(0,x.useRef)(null),n=yt(),r=(0,x.useCallback)(()=>{let{nodes:e,edges:n,nodeMap:r}=So();t.current={nodes:e,edges:n,nodeMap:r,pan:{x:0,y:0},scale:1,hover:null,settled:!1,dragging:!1,lastMouse:null,raf:null}},[]);(0,x.useEffect)(()=>{r();let n=e.current,i=t.current;for(let e=0;e<250;e++)Co(i.nodes,i.edges,i.nodeMap);i.settled=!1;let a=0;function o(){let e=n.width,t=n.height;if(!i.settled){let e=Co(i.nodes,i.edges,i.nodeMap);a++,(e<.02||a>300)&&(i.settled=!0)}Fo(n.getContext(`2d`),e,t,i.nodes,i.edges,i.nodeMap,i.pan,i.scale,i.hover),i.raf=requestAnimationFrame(o)}let s=()=>{n.width=n.offsetWidth*devicePixelRatio,n.height=n.offsetHeight*devicePixelRatio};return s(),window.addEventListener(`resize`,s),i.raf=requestAnimationFrame(o),()=>{cancelAnimationFrame(i.raf),window.removeEventListener(`resize`,s)}},[r]);let i=(0,x.useCallback)((n,r)=>{let i=t.current,a=e.current,o=a.width,s=a.height,c=(n*devicePixelRatio-o/2-i.pan.x)/i.scale,l=(r*devicePixelRatio-s/2-i.pan.y)/i.scale,u=null,d=1/0;for(let e of i.nodes){let t=Math.hypot(e.x-c,e.y-l);t<e.r+8/i.scale&&t<d&&(d=t,u=e)}return u},[]),a=(0,x.useCallback)(n=>{let r=t.current;r.dragging&&r.lastMouse&&(r.pan.x+=(n.clientX-r.lastMouse.x)*devicePixelRatio,r.pan.y+=(n.clientY-r.lastMouse.y)*devicePixelRatio,r.settled=!1),r.lastMouse={x:n.clientX,y:n.clientY};let a=e.current.getBoundingClientRect();r.hover=i(n.clientX-a.left,n.clientY-a.top),e.current.style.cursor=r.hover?.url?`pointer`:r.dragging?`grabbing`:`grab`},[i]),o=(0,x.useCallback)(e=>{t.current.dragging=!0,t.current.lastMouse={x:e.clientX,y:e.clientY}},[]),s=(0,x.useCallback)(()=>{t.current.dragging=!1},[]),c=(0,x.useCallback)(r=>{if(t.current.dragging)return;let a=e.current.getBoundingClientRect(),o=i(r.clientX-a.left,r.clientY-a.top);o?.url&&n(o.url)},[i,n]),l=(0,x.useCallback)(e=>{e.preventDefault();let n=t.current,r=e.deltaY<0?1.12:.89;n.scale=Math.max(.2,Math.min(8,n.scale*r))},[]);return(0,x.useEffect)(()=>{let t=e.current;return t.addEventListener(`wheel`,l,{passive:!1}),()=>t.removeEventListener(`wheel`,l)},[l]),(0,k.jsxs)(`div`,{className:`min-h-screen flex flex-col bg-bg`,children:[(0,k.jsx)(br,{}),(0,k.jsxs)(`div`,{className:`flex-1 flex flex-col pt-12`,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-5 px-6 py-3 border-b border-border/50 text-[10px] text-text-muted`,children:[(0,k.jsx)(`span`,{className:`font-mono`,children:`GRAPH`}),(0,k.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#c084fc] inline-block`}),`blog`]}),(0,k.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#4ade80] inline-block`}),`dsa`]}),(0,k.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#3f3f46] inline-block`}),`topic`]}),(0,k.jsx)(`span`,{className:`ml-auto opacity-60`,children:`scroll to zoom · drag to pan · click to open`}),(0,k.jsx)(O,{to:`/`,className:`hover:text-accent transition-colors`,children:`← home`})]}),(0,k.jsx)(`canvas`,{ref:e,className:`flex-1 w-full`,style:{cursor:`grab`},onMouseMove:a,onMouseDown:o,onMouseUp:s,onMouseLeave:s,onClick:c})]})]})}function Lo(){let[e,t]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{t(!0)},[]),nr(tr),(0,k.jsxs)(`div`,{className:`relative min-h-screen transition-opacity duration-700 ${e?`opacity-100`:`opacity-0`}`,children:[(0,k.jsx)(yo,{}),(0,k.jsx)(_o,{}),(0,k.jsx)(br,{}),(0,k.jsxs)(`main`,{children:[(0,k.jsx)(Sr,{}),(0,k.jsx)(Or,{}),(0,k.jsx)(Mr,{}),(0,k.jsx)(Ar,{}),(0,k.jsx)(Si,{}),(0,k.jsx)(ao,{}),(0,k.jsx)(R,{}),(0,k.jsx)(B,{})]}),(0,k.jsx)(go,{})]})}function Ro(){return(0,k.jsx)(Fn,{children:(0,k.jsxs)(qt,{children:[(0,k.jsx)(Gt,{path:`/`,element:(0,k.jsx)(Lo,{})}),(0,k.jsx)(Gt,{path:`/blog`,element:(0,k.jsx)(xo,{})}),(0,k.jsx)(Gt,{path:`/blog/:slug`,element:(0,k.jsx)(Do,{})}),(0,k.jsx)(Gt,{path:`/dsa`,element:(0,k.jsx)(jo,{})}),(0,k.jsx)(Gt,{path:`/dsa/:slug`,element:(0,k.jsx)(Po,{})}),(0,k.jsx)(Gt,{path:`/graph`,element:(0,k.jsx)(Io,{})})]})})}er.createRoot(document.getElementById(`root`)).render((0,k.jsx)(x.StrictMode,{children:(0,k.jsx)(Ro,{})}));