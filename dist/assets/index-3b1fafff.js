function L0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function M0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tp={exports:{}},ia={},kp={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var os=Symbol.for("react.element"),U0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),j0=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),V0=Symbol.for("react.suspense"),H0=Symbol.for("react.memo"),W0=Symbol.for("react.lazy"),th=Symbol.iterator;function q0(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var Cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rp=Object.assign,Ap={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||Cp}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pp(){}Pp.prototype=jr.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||Cp}var uc=lc.prototype=new Pp;uc.constructor=lc;Rp(uc,jr.prototype);uc.isPureReactComponent=!0;var nh=Array.isArray,Np=Object.prototype.hasOwnProperty,cc={current:null},xp={key:!0,ref:!0,__self:!0,__source:!0};function Op(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Np.call(t,r)&&!xp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:os,type:e,key:s,ref:o,props:i,_owner:cc.current}}function K0(e,t){return{$$typeof:os,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===os}function G0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rh=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G0(""+e.key):t.toString(36)}function Qs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case os:case U0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Xa(o,0):r,nh(i)?(n="",e!=null&&(n=e.replace(rh,"$&/")+"/"),Qs(i,t,n,"",function(u){return u})):i!=null&&(dc(i)&&(i=K0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",nh(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Xa(s,a);o+=Qs(s,t,n,l,i)}else if(l=q0(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Xa(s,a++),o+=Qs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Rs(e,t,n){if(e==null)return e;var r=[],i=0;return Qs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function X0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Js={transition:null},Y0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Js,ReactCurrentOwner:cc};$.Children={map:Rs,forEach:function(e,t,n){Rs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rs(e,function(){t++}),t},toArray:function(e){return Rs(e,function(t){return t})||[]},only:function(e){if(!dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=jr;$.Fragment=$0;$.Profiler=j0;$.PureComponent=lc;$.StrictMode=B0;$.Suspense=V0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=cc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Np.call(t,l)&&!xp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:os,type:e.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:b0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:F0,_context:e},e.Consumer=e};$.createElement=Op;$.createFactory=function(e){var t=Op.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:z0,render:e}};$.isValidElement=dc;$.lazy=function(e){return{$$typeof:W0,_payload:{_status:-1,_result:e},_init:X0}};$.memo=function(e,t){return{$$typeof:H0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Js.transition;Js.transition={};try{e()}finally{Js.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return xe.current.useCallback(e,t)};$.useContext=function(e){return xe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};$.useEffect=function(e,t){return xe.current.useEffect(e,t)};$.useId=function(){return xe.current.useId()};$.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return xe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};$.useRef=function(e){return xe.current.useRef(e)};$.useState=function(e){return xe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return xe.current.useTransition()};$.version="18.2.0";kp.exports=$;var T=kp.exports;const Dp=M0(T),Q0=L0({__proto__:null,default:Dp},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=T,Z0=Symbol.for("react.element"),ew=Symbol.for("react.fragment"),tw=Object.prototype.hasOwnProperty,nw=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rw={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)tw.call(t,r)&&!rw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z0,type:e,key:s,ref:o,props:i,_owner:nw.current}}ia.Fragment=ew;ia.jsx=Lp;ia.jsxs=Lp;Tp.exports=ia;var I=Tp.exports,Wl={},Mp={exports:{}},Ge={},Up={exports:{}},$p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,M){var U=P.length;P.push(M);e:for(;0<U;){var ee=U-1>>>1,ae=P[ee];if(0<i(ae,M))P[ee]=M,P[U]=ae,U=ee;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],U=P.pop();if(U!==M){P[0]=U;e:for(var ee=0,ae=P.length,ks=ae>>>1;ee<ks;){var Tn=2*(ee+1)-1,Ga=P[Tn],kn=Tn+1,Cs=P[kn];if(0>i(Ga,U))kn<ae&&0>i(Cs,Ga)?(P[ee]=Cs,P[kn]=U,ee=kn):(P[ee]=Ga,P[Tn]=U,ee=Tn);else if(kn<ae&&0>i(Cs,U))P[ee]=Cs,P[kn]=U,ee=kn;else break e}}return M}function i(P,M){var U=P.sortIndex-M.sortIndex;return U!==0?U:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,p=3,g=!1,y=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=P)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function v(P){if(w=!1,m(P),!y)if(n(l)!==null)y=!0,qa(S);else{var M=n(u);M!==null&&Ka(v,M.startTime-P)}}function S(P,M){y=!1,w&&(w=!1,h(N),N=-1),g=!0;var U=p;try{for(m(M),f=n(l);f!==null&&(!(f.expirationTime>M)||P&&!ot());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,p=f.priorityLevel;var ae=ee(f.expirationTime<=M);M=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),m(M)}else r(l);f=n(l)}if(f!==null)var ks=!0;else{var Tn=n(u);Tn!==null&&Ka(v,Tn.startTime-M),ks=!1}return ks}finally{f=null,p=U,g=!1}}var C=!1,A=null,N=-1,x=5,O=-1;function ot(){return!(e.unstable_now()-O<x)}function Gr(){if(A!==null){var P=e.unstable_now();O=P;var M=!0;try{M=A(!0,P)}finally{M?Xr():(C=!1,A=null)}}else C=!1}var Xr;if(typeof d=="function")Xr=function(){d(Gr)};else if(typeof MessageChannel<"u"){var eh=new MessageChannel,D0=eh.port2;eh.port1.onmessage=Gr,Xr=function(){D0.postMessage(null)}}else Xr=function(){E(Gr,0)};function qa(P){A=P,C||(C=!0,Xr())}function Ka(P,M){N=E(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,qa(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var U=p;p=M;try{return P()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=p;p=P;try{return M()}finally{p=U}},e.unstable_scheduleCallback=function(P,M,U){var ee=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ee+U:ee):U=ee,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=U+ae,P={id:c++,callback:M,priorityLevel:P,startTime:U,expirationTime:ae,sortIndex:-1},U>ee?(P.sortIndex=U,t(u,P),n(l)===null&&P===n(u)&&(w?(h(N),N=-1):w=!0,Ka(v,U-ee))):(P.sortIndex=ae,t(l,P),y||g||(y=!0,qa(S))),P},e.unstable_shouldYield=ot,e.unstable_wrapCallback=function(P){var M=p;return function(){var U=p;p=M;try{return P.apply(this,arguments)}finally{p=U}}}})($p);Up.exports=$p;var iw=Up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=T,Ke=iw;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,Pi={};function Jn(e,t){Nr(e,t),Nr(e+"Capture",t)}function Nr(e,t){for(Pi[e]=t,e=0;e<t.length;e++)jp.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,sw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},sh={};function ow(e){return ql.call(sh,e)?!0:ql.call(ih,e)?!1:sw.test(e)?sh[e]=!0:(ih[e]=!0,!1)}function aw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lw(e,t,n,r){if(t===null||typeof t>"u"||aw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var hc=/[\-:]([a-z])/g;function fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hc,fc);ge[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hc,fc);ge[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hc,fc);ge[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lw(t,n,i,r)&&(n=null),r||i===null?ow(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,As=Symbol.for("react.element"),or=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),bp=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),oh=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=oh&&e[oh]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Ya;function ai(e){if(Ya===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ya=t&&t[1]||""}return`
`+Ya+e}var Qa=!1;function Ja(e,t){if(!e||Qa)return"";Qa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function uw(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=Ja(e.type,!1),e;case 11:return e=Ja(e.type.render,!1),e;case 1:return e=Ja(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case or:return"Portal";case Kl:return"Profiler";case mc:return"StrictMode";case Gl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bp:return(e.displayName||"Context")+".Consumer";case Fp:return(e._context.displayName||"Context")+".Provider";case gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:Yl(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Yl(e(t))}catch{}}return null}function cw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(t);case 8:return t===mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dw(e){var t=Vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){e._valueTracker||(e._valueTracker=dw(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ah(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wp(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function Jl(e,t){Wp(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zl(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zl(e,t,n){(t!=="number"||mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function _r(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(li(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function qp(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ns,Gp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ns=Ns||document.createElement("div"),Ns.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ns.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hw=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){hw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function Xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function Yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fw=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(e,t){if(t){if(fw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,Er=null,Ir=null;function dh(e){if(e=us(e)){if(typeof su!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ua(t),su(e.stateNode,e.type,t))}}function Qp(e){Er?Ir?Ir.push(e):Ir=[e]:Er=e}function Jp(){if(Er){var e=Er,t=Ir;if(Ir=Er=null,dh(e),t)for(e=0;e<t.length;e++)dh(t[e])}}function Zp(e,t){return e(t)}function em(){}var Za=!1;function tm(e,t,n){if(Za)return e(t,n);Za=!0;try{return Zp(e,t,n)}finally{Za=!1,(Er!==null||Ir!==null)&&(em(),Jp())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=ua(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ou=!1;if($t)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{ou=!1}function pw(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var vi=!1,go=null,vo=!1,au=null,mw={onError:function(e){vi=!0,go=e}};function gw(e,t,n,r,i,s,o,a,l){vi=!1,go=null,pw.apply(mw,arguments)}function vw(e,t,n,r,i,s,o,a,l){if(gw.apply(this,arguments),vi){if(vi){var u=go;vi=!1,go=null}else throw Error(_(198));vo||(vo=!0,au=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hh(e){if(Zn(e)!==e)throw Error(_(188))}function yw(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hh(i),e;if(s===r)return hh(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function rm(e){return e=yw(e),e!==null?im(e):null}function im(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=im(e);if(t!==null)return t;e=e.sibling}return null}var sm=Ke.unstable_scheduleCallback,fh=Ke.unstable_cancelCallback,ww=Ke.unstable_shouldYield,_w=Ke.unstable_requestPaint,te=Ke.unstable_now,Ew=Ke.unstable_getCurrentPriorityLevel,wc=Ke.unstable_ImmediatePriority,om=Ke.unstable_UserBlockingPriority,yo=Ke.unstable_NormalPriority,Iw=Ke.unstable_LowPriority,am=Ke.unstable_IdlePriority,sa=null,St=null;function Sw(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Cw,Tw=Math.log,kw=Math.LN2;function Cw(e){return e>>>=0,e===0?32:31-(Tw(e)/kw|0)|0}var xs=64,Os=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ui(a):(s&=o,s!==0&&(r=ui(s)))}else o=n&~i,o!==0?r=ui(o):s!==0&&(r=ui(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Rw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Aw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Rw(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lm(){var e=xs;return xs<<=1,!(xs&4194240)&&(xs=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function as(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Pw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function _c(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var b=0;function um(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cm,Ec,dm,hm,fm,uu=!1,Ds=[],rn=null,sn=null,on=null,Oi=new Map,Di=new Map,Gt=[],Nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function Jr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=us(t),t!==null&&Ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xw(e,t,n,r,i){switch(t){case"focusin":return rn=Jr(rn,e,t,n,r,i),!0;case"dragenter":return sn=Jr(sn,e,t,n,r,i),!0;case"mouseover":return on=Jr(on,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oi.set(s,Jr(Oi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Di.set(s,Jr(Di.get(s)||null,e,t,n,r,i)),!0}return!1}function pm(e){var t=Pn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=nm(n),t!==null){e.blockedOn=t,fm(e.priority,function(){dm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);iu=r,n.target.dispatchEvent(r),iu=null}else return t=us(n),t!==null&&Ec(t),e.blockedOn=n,!1;t.shift()}return!0}function mh(e,t,n){Zs(e)&&n.delete(t)}function Ow(){uu=!1,rn!==null&&Zs(rn)&&(rn=null),sn!==null&&Zs(sn)&&(sn=null),on!==null&&Zs(on)&&(on=null),Oi.forEach(mh),Di.forEach(mh)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,uu||(uu=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Ow)))}function Li(e){function t(i){return Zr(i,e)}if(0<Ds.length){Zr(Ds[0],e);for(var n=1;n<Ds.length;n++){var r=Ds[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Zr(rn,e),sn!==null&&Zr(sn,e),on!==null&&Zr(on,e),Oi.forEach(t),Di.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)pm(n),n.blockedOn===null&&Gt.shift()}var Sr=Vt.ReactCurrentBatchConfig,_o=!0;function Dw(e,t,n,r){var i=b,s=Sr.transition;Sr.transition=null;try{b=1,Ic(e,t,n,r)}finally{b=i,Sr.transition=s}}function Lw(e,t,n,r){var i=b,s=Sr.transition;Sr.transition=null;try{b=4,Ic(e,t,n,r)}finally{b=i,Sr.transition=s}}function Ic(e,t,n,r){if(_o){var i=cu(e,t,n,r);if(i===null)cl(e,t,r,Eo,n),ph(e,r);else if(xw(i,e,t,n,r))r.stopPropagation();else if(ph(e,r),t&4&&-1<Nw.indexOf(e)){for(;i!==null;){var s=us(i);if(s!==null&&cm(s),s=cu(e,t,n,r),s===null&&cl(e,t,r,Eo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cl(e,t,r,null,n)}}var Eo=null;function cu(e,t,n,r){if(Eo=null,e=yc(r),e=Pn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Eo=e,null}function mm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ew()){case wc:return 1;case om:return 4;case yo:case Iw:return 16;case am:return 536870912;default:return 16}default:return 16}}var en=null,Sc=null,eo=null;function gm(){if(eo)return eo;var e,t=Sc,n=t.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ls(){return!0}function gh(){return!1}function Xe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ls:gh,this.isPropagationStopped=gh,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Xe(Fr),ls=Y({},Fr,{view:0,detail:0}),Mw=Xe(ls),tl,nl,ei,oa=Y({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(tl=e.screenX-ei.screenX,nl=e.screenY-ei.screenY):nl=tl=0,ei=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),vh=Xe(oa),Uw=Y({},oa,{dataTransfer:0}),$w=Xe(Uw),Bw=Y({},ls,{relatedTarget:0}),rl=Xe(Bw),jw=Y({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fw=Xe(jw),bw=Y({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zw=Xe(bw),Vw=Y({},Fr,{data:0}),yh=Xe(Vw),Hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qw[e])?!!t[e]:!1}function kc(){return Kw}var Gw=Y({},ls,{key:function(e){if(e.key){var t=Hw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ww[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xw=Xe(Gw),Yw=Y({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Xe(Yw),Qw=Y({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Jw=Xe(Qw),Zw=Y({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),e1=Xe(Zw),t1=Y({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n1=Xe(t1),r1=[9,13,27,32],Cc=$t&&"CompositionEvent"in window,yi=null;$t&&"documentMode"in document&&(yi=document.documentMode);var i1=$t&&"TextEvent"in window&&!yi,vm=$t&&(!Cc||yi&&8<yi&&11>=yi),_h=String.fromCharCode(32),Eh=!1;function ym(e,t){switch(e){case"keyup":return r1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function s1(e,t){switch(e){case"compositionend":return wm(t);case"keypress":return t.which!==32?null:(Eh=!0,_h);case"textInput":return e=t.data,e===_h&&Eh?null:e;default:return null}}function o1(e,t){if(lr)return e==="compositionend"||!Cc&&ym(e,t)?(e=gm(),eo=Sc=en=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vm&&t.locale!=="ko"?null:t.data;default:return null}}var a1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a1[e.type]:t==="textarea"}function _m(e,t,n,r){Qp(r),t=Io(t,"onChange"),0<t.length&&(n=new Tc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wi=null,Mi=null;function l1(e){xm(e,0)}function aa(e){var t=dr(e);if(Hp(t))return e}function u1(e,t){if(e==="change")return t}var Em=!1;if($t){var il;if($t){var sl="oninput"in document;if(!sl){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),sl=typeof Sh.oninput=="function"}il=sl}else il=!1;Em=il&&(!document.documentMode||9<document.documentMode)}function Th(){wi&&(wi.detachEvent("onpropertychange",Im),Mi=wi=null)}function Im(e){if(e.propertyName==="value"&&aa(Mi)){var t=[];_m(t,Mi,e,yc(e)),tm(l1,t)}}function c1(e,t,n){e==="focusin"?(Th(),wi=t,Mi=n,wi.attachEvent("onpropertychange",Im)):e==="focusout"&&Th()}function d1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(Mi)}function h1(e,t){if(e==="click")return aa(t)}function f1(e,t){if(e==="input"||e==="change")return aa(t)}function p1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:p1;function Ui(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ql.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function kh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ch(e,t){var n=kh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function Sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tm(){for(var e=window,t=mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mo(e.document)}return t}function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m1(e){var t=Tm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sm(n.ownerDocument.documentElement,n)){if(r!==null&&Rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ch(n,s);var o=Ch(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var g1=$t&&"documentMode"in document&&11>=document.documentMode,ur=null,du=null,_i=null,hu=!1;function Rh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||ur==null||ur!==mo(r)||(r=ur,"selectionStart"in r&&Rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_i&&Ui(_i,r)||(_i=r,r=Io(du,"onSelect"),0<r.length&&(t=new Tc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function Ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},ol={},km={};$t&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function la(e){if(ol[e])return ol[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in km)return ol[e]=t[n];return e}var Cm=la("animationend"),Rm=la("animationiteration"),Am=la("animationstart"),Pm=la("transitionend"),Nm=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){Nm.set(e,t),Jn(t,[e])}for(var al=0;al<Ah.length;al++){var ll=Ah[al],v1=ll.toLowerCase(),y1=ll[0].toUpperCase()+ll.slice(1);vn(v1,"on"+y1)}vn(Cm,"onAnimationEnd");vn(Rm,"onAnimationIteration");vn(Am,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Pm,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Ph(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vw(r,t,void 0,e),e.currentTarget=null}function xm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ph(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ph(i,a,u),s=l}}}if(vo)throw e=au,vo=!1,au=null,e}function H(e,t){var n=t[vu];n===void 0&&(n=t[vu]=new Set);var r=e+"__bubble";n.has(r)||(Om(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),Om(n,e,r,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function $i(e){if(!e[Us]){e[Us]=!0,jp.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,ul("selectionchange",!1,t))}}function Om(e,t,n,r){switch(mm(t)){case 1:var i=Dw;break;case 4:i=Lw;break;default:i=Ic}n=i.bind(null,t,n,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tm(function(){var u=s,c=yc(n),f=[];e:{var p=Nm.get(e);if(p!==void 0){var g=Tc,y=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":g=Xw;break;case"focusin":y="focus",g=rl;break;case"focusout":y="blur",g=rl;break;case"beforeblur":case"afterblur":g=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jw;break;case Cm:case Rm:case Am:g=Fw;break;case Pm:g=e1;break;case"scroll":g=Mw;break;case"wheel":g=n1;break;case"copy":case"cut":case"paste":g=zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wh}var w=(t&4)!==0,E=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,h!==null&&(v=xi(d,h),v!=null&&w.push(Bi(d,v,m)))),E)break;d=d.return}0<w.length&&(p=new g(p,y,null,n,c),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==iu&&(y=n.relatedTarget||n.fromElement)&&(Pn(y)||y[Bt]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Pn(y):null,y!==null&&(E=Zn(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=vh,v="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=wh,v="onPointerLeave",h="onPointerEnter",d="pointer"),E=g==null?p:dr(g),m=y==null?p:dr(y),p=new w(v,d+"leave",g,n,c),p.target=E,p.relatedTarget=m,v=null,Pn(c)===u&&(w=new w(h,d+"enter",y,n,c),w.target=m,w.relatedTarget=E,v=w),E=v,g&&y)t:{for(w=g,h=y,d=0,m=w;m;m=ir(m))d++;for(m=0,v=h;v;v=ir(v))m++;for(;0<d-m;)w=ir(w),d--;for(;0<m-d;)h=ir(h),m--;for(;d--;){if(w===h||h!==null&&w===h.alternate)break t;w=ir(w),h=ir(h)}w=null}else w=null;g!==null&&Nh(f,p,g,w,!1),y!==null&&E!==null&&Nh(f,E,y,w,!0)}}e:{if(p=u?dr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var S=u1;else if(Ih(p))if(Em)S=f1;else{S=d1;var C=c1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=h1);if(S&&(S=S(e,u))){_m(f,S,n,c);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Zl(p,"number",p.value)}switch(C=u?dr(u):window,e){case"focusin":(Ih(C)||C.contentEditable==="true")&&(ur=C,du=u,_i=null);break;case"focusout":_i=du=ur=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Rh(f,n,c);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":Rh(f,n,c)}var A;if(Cc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else lr?ym(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(vm&&n.locale!=="ko"&&(lr||N!=="onCompositionStart"?N==="onCompositionEnd"&&lr&&(A=gm()):(en=c,Sc="value"in en?en.value:en.textContent,lr=!0)),C=Io(u,N),0<C.length&&(N=new yh(N,e,null,n,c),f.push({event:N,listeners:C}),A?N.data=A:(A=wm(n),A!==null&&(N.data=A)))),(A=i1?s1(e,n):o1(e,n))&&(u=Io(u,"onBeforeInput"),0<u.length&&(c=new yh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}xm(f,t)})}function Bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Io(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xi(e,n),s!=null&&r.unshift(Bi(e,s,i)),s=xi(e,t),s!=null&&r.push(Bi(e,s,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xi(n,s),l!=null&&o.unshift(Bi(n,l,a))):i||(l=xi(n,s),l!=null&&o.push(Bi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function xh(e){return(typeof e=="string"?e:""+e).replace(_1,`
`).replace(E1,"")}function $s(e,t,n){if(t=xh(t),xh(e)!==t&&n)throw Error(_(425))}function So(){}var fu=null,pu=null;function mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(e){return Oh.resolve(null).then(e).catch(T1)}:gu;function T1(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),yt="__reactFiber$"+br,ji="__reactProps$"+br,Bt="__reactContainer$"+br,vu="__reactEvents$"+br,k1="__reactListeners$"+br,C1="__reactHandles$"+br;function Pn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dh(e);e!==null;){if(n=e[yt])return n;e=Dh(e)}return t}e=n,n=e.parentNode}return null}function us(e){return e=e[yt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ua(e){return e[ji]||null}var yu=[],hr=-1;function yn(e){return{current:e}}function q(e){0>hr||(e.current=yu[hr],yu[hr]=null,hr--)}function V(e,t){hr++,yu[hr]=e.current,e.current=t}var gn={},ke=yn(gn),Ue=yn(!1),bn=gn;function xr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function To(){q(Ue),q(ke)}function Lh(e,t,n){if(ke.current!==gn)throw Error(_(168));V(ke,t),V(Ue,n)}function Dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,cw(e)||"Unknown",i));return Y({},n,r)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,bn=ke.current,V(ke,e),V(Ue,Ue.current),!0}function Mh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Dm(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,q(Ue),q(ke),V(ke,e)):q(Ue),V(Ue,n)}var Pt=null,ca=!1,hl=!1;function Lm(e){Pt===null?Pt=[e]:Pt.push(e)}function R1(e){ca=!0,Lm(e)}function wn(){if(!hl&&Pt!==null){hl=!0;var e=0,t=b;try{var n=Pt;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,ca=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),sm(wc,wn),i}finally{b=t,hl=!1}}return null}var fr=[],pr=0,Co=null,Ro=0,Ye=[],Qe=0,zn=null,xt=1,Ot="";function Cn(e,t){fr[pr++]=Ro,fr[pr++]=Co,Co=e,Ro=t}function Mm(e,t,n){Ye[Qe++]=xt,Ye[Qe++]=Ot,Ye[Qe++]=zn,zn=e;var r=xt;e=Ot;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-dt(t)+i|n<<i|r,Ot=s+e}else xt=1<<s|n<<i|r,Ot=e}function Ac(e){e.return!==null&&(Cn(e,1),Mm(e,1,0))}function Pc(e){for(;e===Co;)Co=fr[--pr],fr[pr]=null,Ro=fr[--pr],fr[pr]=null;for(;e===zn;)zn=Ye[--Qe],Ye[Qe]=null,Ot=Ye[--Qe],Ye[Qe]=null,xt=Ye[--Qe],Ye[Qe]=null}var We=null,ze=null,K=!1,ct=null;function Um(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,ze=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:xt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,ze=null,!0):!1;default:return!1}}function wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(K){var t=ze;if(t){var n=t;if(!Uh(e,t)){if(wu(e))throw Error(_(418));t=an(n.nextSibling);var r=We;t&&Uh(e,t)?Um(r,n):(e.flags=e.flags&-4097|2,K=!1,We=e)}}else{if(wu(e))throw Error(_(418));e.flags=e.flags&-4097|2,K=!1,We=e}}}function $h(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Bs(e){if(e!==We)return!1;if(!K)return $h(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mu(e.type,e.memoizedProps)),t&&(t=ze)){if(wu(e))throw $m(),Error(_(418));for(;t;)Um(e,t),t=an(t.nextSibling)}if($h(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=We?an(e.stateNode.nextSibling):null;return!0}function $m(){for(var e=ze;e;)e=an(e.nextSibling)}function Or(){ze=We=null,K=!1}function Nc(e){ct===null?ct=[e]:ct.push(e)}var A1=Vt.ReactCurrentBatchConfig;function lt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ao=yn(null),Po=null,mr=null,xc=null;function Oc(){xc=mr=Po=null}function Dc(e){var t=Ao.current;q(Ao),e._currentValue=t}function Eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){Po=e,xc=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(xc!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Po===null)throw Error(_(308));mr=e,Po.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var Nn=null;function Lc(e){Nn===null?Nn=[e]:Nn.push(e)}function Bm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,jt(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_c(e,n)}}function Bh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function No(e,t,n,r){var i=e.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(p=t,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(g,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(g,f,p):y,p==null)break e;f=Y({},f,p);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Hn|=o,e.lanes=o,e.memoizedState=f}}function jh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Fm=new Bp.Component().refs;function Iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var da={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=cn(e),s=Ut(r,i);s.payload=t,n!=null&&(s.callback=n),t=ln(e,s,i),t!==null&&(ht(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=cn(e),s=Ut(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ln(e,s,i),t!==null&&(ht(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=cn(e),i=Ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(ht(t,e,r,n),no(t,e,r))}};function Fh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ui(n,r)||!Ui(i,s):!0}function bm(e,t,n){var r=!1,i=gn,s=t.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=$e(t)?bn:ke.current,r=t.contextTypes,s=(r=r!=null)?xr(e,i):gn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=da,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function bh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&da.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Fm,Mc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=$e(t)?bn:ke.current,i.context=xr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Iu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&da.enqueueReplaceState(i,i.state,null),No(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Fm&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function js(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zh(e){var t=e._init;return t(e._payload)}function zm(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=dn(h,d),h.index=0,h.sibling=null,h}function s(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,v){return d===null||d.tag!==6?(d=wl(m,h.mode,v),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,v){var S=m.type;return S===ar?c(h,d,m.props.children,v,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&zh(S)===d.type)?(v=i(d,m.props),v.ref=ti(h,d,m),v.return=h,v):(v=lo(m.type,m.key,m.props,null,h.mode,v),v.ref=ti(h,d,m),v.return=h,v)}function u(h,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=_l(m,h.mode,v),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,v,S){return d===null||d.tag!==7?(d=Un(m,h.mode,v,S),d.return=h,d):(d=i(d,m),d.return=h,d)}function f(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wl(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case As:return m=lo(d.type,d.key,d.props,null,h.mode,m),m.ref=ti(h,null,d),m.return=h,m;case or:return d=_l(d,h.mode,m),d.return=h,d;case qt:var v=d._init;return f(h,v(d._payload),m)}if(li(d)||Yr(d))return d=Un(d,h.mode,m,null),d.return=h,d;js(h,d)}return null}function p(h,d,m,v){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(h,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case As:return m.key===S?l(h,d,m,v):null;case or:return m.key===S?u(h,d,m,v):null;case qt:return S=m._init,p(h,d,S(m._payload),v)}if(li(m)||Yr(m))return S!==null?null:c(h,d,m,v,null);js(h,m)}return null}function g(h,d,m,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(m)||null,a(d,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case As:return h=h.get(v.key===null?m:v.key)||null,l(d,h,v,S);case or:return h=h.get(v.key===null?m:v.key)||null,u(d,h,v,S);case qt:var C=v._init;return g(h,d,m,C(v._payload),S)}if(li(v)||Yr(v))return h=h.get(m)||null,c(d,h,v,S,null);js(d,v)}return null}function y(h,d,m,v){for(var S=null,C=null,A=d,N=d=0,x=null;A!==null&&N<m.length;N++){A.index>N?(x=A,A=null):x=A.sibling;var O=p(h,A,m[N],v);if(O===null){A===null&&(A=x);break}e&&A&&O.alternate===null&&t(h,A),d=s(O,d,N),C===null?S=O:C.sibling=O,C=O,A=x}if(N===m.length)return n(h,A),K&&Cn(h,N),S;if(A===null){for(;N<m.length;N++)A=f(h,m[N],v),A!==null&&(d=s(A,d,N),C===null?S=A:C.sibling=A,C=A);return K&&Cn(h,N),S}for(A=r(h,A);N<m.length;N++)x=g(A,h,N,m[N],v),x!==null&&(e&&x.alternate!==null&&A.delete(x.key===null?N:x.key),d=s(x,d,N),C===null?S=x:C.sibling=x,C=x);return e&&A.forEach(function(ot){return t(h,ot)}),K&&Cn(h,N),S}function w(h,d,m,v){var S=Yr(m);if(typeof S!="function")throw Error(_(150));if(m=S.call(m),m==null)throw Error(_(151));for(var C=S=null,A=d,N=d=0,x=null,O=m.next();A!==null&&!O.done;N++,O=m.next()){A.index>N?(x=A,A=null):x=A.sibling;var ot=p(h,A,O.value,v);if(ot===null){A===null&&(A=x);break}e&&A&&ot.alternate===null&&t(h,A),d=s(ot,d,N),C===null?S=ot:C.sibling=ot,C=ot,A=x}if(O.done)return n(h,A),K&&Cn(h,N),S;if(A===null){for(;!O.done;N++,O=m.next())O=f(h,O.value,v),O!==null&&(d=s(O,d,N),C===null?S=O:C.sibling=O,C=O);return K&&Cn(h,N),S}for(A=r(h,A);!O.done;N++,O=m.next())O=g(A,h,N,O.value,v),O!==null&&(e&&O.alternate!==null&&A.delete(O.key===null?N:O.key),d=s(O,d,N),C===null?S=O:C.sibling=O,C=O);return e&&A.forEach(function(Gr){return t(h,Gr)}),K&&Cn(h,N),S}function E(h,d,m,v){if(typeof m=="object"&&m!==null&&m.type===ar&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case As:e:{for(var S=m.key,C=d;C!==null;){if(C.key===S){if(S=m.type,S===ar){if(C.tag===7){n(h,C.sibling),d=i(C,m.props.children),d.return=h,h=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&zh(S)===C.type){n(h,C.sibling),d=i(C,m.props),d.ref=ti(h,C,m),d.return=h,h=d;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===ar?(d=Un(m.props.children,h.mode,v,m.key),d.return=h,h=d):(v=lo(m.type,m.key,m.props,null,h.mode,v),v.ref=ti(h,d,m),v.return=h,h=v)}return o(h);case or:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=_l(m,h.mode,v),d.return=h,h=d}return o(h);case qt:return C=m._init,E(h,d,C(m._payload),v)}if(li(m))return y(h,d,m,v);if(Yr(m))return w(h,d,m,v);js(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=wl(m,h.mode,v),d.return=h,h=d),o(h)):n(h,d)}return E}var Dr=zm(!0),Vm=zm(!1),cs={},Tt=yn(cs),Fi=yn(cs),bi=yn(cs);function xn(e){if(e===cs)throw Error(_(174));return e}function Uc(e,t){switch(V(bi,t),V(Fi,e),V(Tt,cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tu(t,e)}q(Tt),V(Tt,t)}function Lr(){q(Tt),q(Fi),q(bi)}function Hm(e){xn(bi.current);var t=xn(Tt.current),n=tu(t,e.type);t!==n&&(V(Fi,e),V(Tt,n))}function $c(e){Fi.current===e&&(q(Tt),q(Fi))}var G=yn(0);function xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function Bc(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var ro=Vt.ReactCurrentDispatcher,pl=Vt.ReactCurrentBatchConfig,Vn=0,X=null,ie=null,le=null,Oo=!1,Ei=!1,zi=0,P1=0;function ve(){throw Error(_(321))}function jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Fc(e,t,n,r,i,s){if(Vn=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?D1:L1,e=n(r,i),Ei){s=0;do{if(Ei=!1,zi=0,25<=s)throw Error(_(301));s+=1,le=ie=null,t.updateQueue=null,ro.current=M1,e=n(r,i)}while(Ei)}if(ro.current=Do,t=ie!==null&&ie.next!==null,Vn=0,le=ie=X=null,Oo=!1,t)throw Error(_(300));return e}function bc(){var e=zi!==0;return zi=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function nt(){if(ie===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(_(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function Vi(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Vn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,X.lanes|=c,Hn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ft(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,Hn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ft(s,t.memoizedState)||(Me=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Wm(){}function qm(e,t){var n=X,r=nt(),i=t(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,zc(Xm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Hi(9,Gm.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(_(349));Vn&30||Km(n,t,i)}return i}function Km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gm(e,t,n,r){t.value=n,t.getSnapshot=r,Ym(t)&&Qm(e)}function Xm(e,t,n){return n(function(){Ym(t)&&Qm(e)})}function Ym(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Qm(e){var t=jt(e,1);t!==null&&ht(t,e,1,-1)}function Vh(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},t.queue=e,e=e.dispatch=O1.bind(null,X,e),[t.memoizedState,e]}function Hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jm(){return nt().memoizedState}function io(e,t,n,r){var i=vt();X.flags|=e,i.memoizedState=Hi(1|t,n,void 0,r===void 0?null:r)}function ha(e,t,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&jc(r,o.deps)){i.memoizedState=Hi(t,n,s,r);return}}X.flags|=e,i.memoizedState=Hi(1|t,n,s,r)}function Hh(e,t){return io(8390656,8,e,t)}function zc(e,t){return ha(2048,8,e,t)}function Zm(e,t){return ha(4,2,e,t)}function eg(e,t){return ha(4,4,e,t)}function tg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ng(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,4,tg.bind(null,t,e),n)}function Vc(){}function rg(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ig(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sg(e,t,n){return Vn&21?(ft(n,t)||(n=lm(),X.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function N1(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{b=n,pl.transition=r}}function og(){return nt().memoizedState}function x1(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ag(e))lg(t,n);else if(n=Bm(e,t,n,r),n!==null){var i=Ne();ht(n,e,r,i),ug(n,t,r)}}function O1(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ag(e))lg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,o)){var l=t.interleaved;l===null?(i.next=i,Lc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Bm(e,t,i,r),n!==null&&(i=Ne(),ht(n,e,r,i),ug(n,t,r))}}function ag(e){var t=e.alternate;return e===X||t!==null&&t===X}function lg(e,t){Ei=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ug(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_c(e,n)}}var Do={readContext:tt,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},D1={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,tg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=x1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Vh,useDebugValue:Vc,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Vh(!1),t=e[0];return e=N1.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=vt();if(K){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ue===null)throw Error(_(349));Vn&30||Km(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Hh(Xm.bind(null,r,s,e),[e]),r.flags|=2048,Hi(9,Gm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=vt(),t=ue.identifierPrefix;if(K){var n=Ot,r=xt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=P1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L1={readContext:tt,useCallback:rg,useContext:tt,useEffect:zc,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:ml,useRef:Jm,useState:function(){return ml(Vi)},useDebugValue:Vc,useDeferredValue:function(e){var t=nt();return sg(t,ie.memoizedState,e)},useTransition:function(){var e=ml(Vi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:qm,useId:og,unstable_isNewReconciler:!1},M1={readContext:tt,useCallback:rg,useContext:tt,useEffect:zc,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:gl,useRef:Jm,useState:function(){return gl(Vi)},useDebugValue:Vc,useDeferredValue:function(e){var t=nt();return ie===null?t.memoizedState=e:sg(t,ie.memoizedState,e)},useTransition:function(){var e=gl(Vi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:qm,useId:og,unstable_isNewReconciler:!1};function Mr(e,t){try{var n="",r=t;do n+=uw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U1=typeof WeakMap=="function"?WeakMap:Map;function cg(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,Lu=r),Tu(e,t)},n}function dg(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tu(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Wh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Y1.bind(null,e,t,n),t.then(e,e))}function qh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var $1=Vt.ReactCurrentOwner,Me=!1;function Ae(e,t,n,r){t.child=e===null?Vm(t,null,n,r):Dr(t,e.child,n,r)}function Gh(e,t,n,r,i){n=n.render;var s=t.ref;return Tr(t,i),r=Fc(e,t,n,r,s,i),n=bc(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(K&&n&&Ac(t),t.flags|=1,Ae(e,t,r,i),t.child)}function Xh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Qc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,hg(e,t,s,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ui,n(o,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=dn(s,r),e.ref=t.ref,e.return=t,t.child=e}function hg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ui(s,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return ku(e,t,n,r,i)}function fg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(vr,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(vr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(vr,be),be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,V(vr,be),be|=r;return Ae(e,t,i,n),t.child}function pg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ku(e,t,n,r,i){var s=$e(n)?bn:ke.current;return s=xr(t,s),Tr(t,i),n=Fc(e,t,n,r,s,i),r=bc(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(K&&r&&Ac(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Yh(e,t,n,r,i){if($e(n)){var s=!0;ko(t)}else s=!1;if(Tr(t,i),t.stateNode===null)so(e,t),bm(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=$e(n)?bn:ke.current,u=xr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bh(t,o,r,u),Kt=!1;var p=t.memoizedState;o.state=p,No(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Ue.current||Kt?(typeof c=="function"&&(Iu(t,n,c,r),l=t.memoizedState),(a=Kt||Fh(t,n,a,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,jm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:lt(t.type,a),o.props=u,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=$e(n)?bn:ke.current,l=xr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&bh(t,o,r,l),Kt=!1,p=t.memoizedState,o.state=p,No(t,r,o,i);var y=t.memoizedState;a!==f||p!==y||Ue.current||Kt?(typeof g=="function"&&(Iu(t,n,g,r),y=t.memoizedState),(u=Kt||Fh(t,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,n,r,s,i)}function Cu(e,t,n,r,i,s){pg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Mh(t,n,!1),Ft(e,t,s);r=t.stateNode,$1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Dr(t,e.child,null,s),t.child=Dr(t,null,a,s)):Ae(e,t,a,s),t.memoizedState=r.state,i&&Mh(t,n,!0),t.child}function mg(e){var t=e.stateNode;t.pendingContext?Lh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lh(e,t.context,!1),Uc(e,t.containerInfo)}function Qh(e,t,n,r,i){return Or(),Nc(i),t.flags|=256,Ae(e,t,n,r),t.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Au(e){return{baseLanes:e,cachePool:null,transitions:null}}function gg(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(G,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ma(o,r,0,null),e=Un(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Au(n),t.memoizedState=Ru,e):Hc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return B1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dn(a,s):(s=Un(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ru,r}return s=e.child,e=s.sibling,r=dn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hc(e,t){return t=ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fs(e,t,n,r){return r!==null&&Nc(r),Dr(t,e.child,null,n),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function B1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=vl(Error(_(422))),Fs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ma({mode:"visible",children:r.children},i,0,null),s=Un(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Dr(t,e.child,null,o),t.child.memoizedState=Au(o),t.memoizedState=Ru,s);if(!(t.mode&1))return Fs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=vl(s,r,void 0),Fs(e,t,o,r)}if(a=(o&e.childLanes)!==0,Me||a){if(r=ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jt(e,i),ht(r,e,i,-1))}return Yc(),r=vl(Error(_(421))),Fs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Q1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ze=an(i.nextSibling),We=t,K=!0,ct=null,e!==null&&(Ye[Qe++]=xt,Ye[Qe++]=Ot,Ye[Qe++]=zn,xt=e.id,Ot=e.overflow,zn=t),t=Hc(t,r.children),t.flags|=4096,t)}function Jh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eu(e.return,t,n)}function yl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jh(e,n,t);else if(e.tag===19)Jh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yl(t,!0,n,null,s);break;case"together":yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j1(e,t,n){switch(t.tag){case 3:mg(t),Or();break;case 5:Hm(t);break;case 1:$e(t.type)&&ko(t);break;case 4:Uc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?gg(e,t,n):(V(G,G.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);V(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,fg(e,t,n)}return Ft(e,t,n)}var yg,Pu,wg,_g;yg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};wg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(Tt.current);var s=null;switch(n){case"input":i=Ql(e,i),r=Ql(e,r),s=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),s=[];break;case"textarea":i=eu(e,i),r=eu(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}nu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};_g=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F1(e,t,n){var r=t.pendingProps;switch(Pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return $e(t.type)&&To(),ye(t),null;case 3:return r=t.stateNode,Lr(),q(Ue),q(ke),Bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&($u(ct),ct=null))),Pu(e,t),ye(t),null;case 5:$c(t);var i=xn(bi.current);if(n=t.type,e!==null&&t.stateNode!=null)wg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ye(t),null}if(e=xn(Tt.current),Bs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yt]=t,r[ji]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)H(ci[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ah(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":uh(r,s),H("invalid",r)}nu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,a,e),i=["children",""+a]):Pi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Ps(r),lh(r,s,!0);break;case"textarea":Ps(r),ch(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=So)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yt]=t,e[ji]=r,yg(e,t,!1,!1),t.stateNode=e;e:{switch(o=ru(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)H(ci[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":ah(e,r),i=Ql(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),H("invalid",e);break;case"textarea":uh(e,r),i=eu(e,r),H("invalid",e);break;default:i=r}nu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ni(e,l):typeof l=="number"&&Ni(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",e):l!=null&&pc(e,s,l,o))}switch(n){case"input":Ps(e),lh(e,r,!1);break;case"textarea":Ps(e),ch(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?_r(e,!!r.multiple,s,!1):r.defaultValue!=null&&_r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)_g(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=xn(bi.current),xn(Tt.current),Bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(s=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:$s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return ye(t),null;case 13:if(q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ze!==null&&t.mode&1&&!(t.flags&128))$m(),Or(),t.flags|=98560,s=!1;else if(s=Bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[yt]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),s=!1}else ct!==null&&($u(ct),ct=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?se===0&&(se=3):Yc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Lr(),Pu(e,t),e===null&&$i(t.stateNode.containerInfo),ye(t),null;case 10:return Dc(t.type._context),ye(t),null;case 17:return $e(t.type)&&To(),ye(t),null;case 19:if(q(G),s=t.memoizedState,s===null)return ye(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ni(s,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=xo(e),o!==null){for(t.flags|=128,ni(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&te()>Ur&&(t.flags|=128,r=!0,ni(s,!1),t.lanes=4194304)}else{if(!r)if(e=xo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return ye(t),null}else 2*te()-s.renderingStartTime>Ur&&n!==1073741824&&(t.flags|=128,r=!0,ni(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=te(),t.sibling=null,n=G.current,V(G,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return Xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function b1(e,t){switch(Pc(t),t.tag){case 1:return $e(t.type)&&To(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),q(Ue),q(ke),Bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $c(t),null;case 13:if(q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(G),null;case 4:return Lr(),null;case 10:return Dc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var bs=!1,_e=!1,z1=typeof WeakSet=="function"?WeakSet:Set,R=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Nu(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Zh=!1;function V1(e,t){if(fu=_o,e=Tm(),Rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},_o=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,E=y.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),E);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Zh,Zh=!1,y}function Ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nu(t,n,s)}i=i.next}while(i!==r)}}function fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eg(e){var t=e.alternate;t!==null&&(e.alternate=null,Eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[ji],delete t[vu],delete t[k1],delete t[C1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ig(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}var he=null,ut=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Sg(e,t,n),n=n.sibling}function Sg(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 5:_e||gr(n,t);case 6:var r=he,i=ut;he=null,Ht(e,t,n),he=r,ut=i,he!==null&&(ut?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(ut?(e=he,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),Li(e)):dl(he,n.stateNode));break;case 4:r=he,i=ut,he=n.stateNode.containerInfo,ut=!0,Ht(e,t,n),he=r,ut=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nu(n,t,o),i=i.next}while(i!==r)}Ht(e,t,n);break;case 1:if(!_e&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Ht(e,t,n),_e=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new z1),t.forEach(function(r){var i=J1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,ut=!1;break e;case 3:he=a.stateNode.containerInfo,ut=!0;break e;case 4:he=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(he===null)throw Error(_(160));Sg(s,o,i),he=null,ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tg(t,e),t=t.sibling}function Tg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{Ii(3,e,e.return),fa(3,e)}catch(w){Q(e,e.return,w)}try{Ii(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wp(i,s),ru(a,o);var u=ru(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Yp(i,f):c==="dangerouslySetInnerHTML"?Gp(i,f):c==="children"?Ni(i,f):pc(i,c,f,u)}switch(a){case"input":Jl(i,s);break;case"textarea":qp(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?_r(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?_r(i,!!s.multiple,s.defaultValue,!0):_r(i,!!s.multiple,s.multiple?[]:"",!1))}i[ji]=s}catch(w){Q(e,e.return,w)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Q(e,e.return,w)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kc=te())),r&4&&tf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,at(t,e),_e=u):at(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(f=R=c;R!==null;){switch(p=R,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ii(4,p,p.return);break;case 1:gr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:gr(p,p.return);break;case 22:if(p.memoizedState!==null){rf(f);continue}}g!==null?(g.return=p,R=g):rf(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xp("display",o))}catch(w){Q(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(t,e),gt(e),r&4&&tf(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ig(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var s=ef(e);Du(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ef(e);Ou(e,a,o);break;default:throw Error(_(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H1(e,t,n){R=e,kg(e)}function kg(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=bs;var u=_e;if(bs=o,(_e=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?sf(i):l!==null?(l.return=o,R=l):sf(i);for(;s!==null;)R=s,kg(s),s=s.sibling;R=i,bs=a,_e=u}nf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):nf(e)}}function nf(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||fa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&jh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jh(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Li(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}_e||t.flags&512&&xu(t)}catch(p){Q(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function rf(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function sf(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fa(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var s=t.return;try{xu(t)}catch(l){Q(t,s,l)}break;case 5:var o=t.return;try{xu(t)}catch(l){Q(t,o,l)}}}catch(l){Q(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var W1=Math.ceil,Lo=Vt.ReactCurrentDispatcher,Wc=Vt.ReactCurrentOwner,et=Vt.ReactCurrentBatchConfig,j=0,ue=null,re=null,pe=0,be=0,vr=yn(0),se=0,Wi=null,Hn=0,pa=0,qc=0,Si=null,Le=null,Kc=0,Ur=1/0,At=null,Mo=!1,Lu=null,un=null,zs=!1,tn=null,Uo=0,Ti=0,Mu=null,oo=-1,ao=0;function Ne(){return j&6?te():oo!==-1?oo:oo=te()}function cn(e){return e.mode&1?j&2&&pe!==0?pe&-pe:A1.transition!==null?(ao===0&&(ao=lm()),ao):(e=b,e!==0||(e=window.event,e=e===void 0?16:mm(e.type)),e):1}function ht(e,t,n,r){if(50<Ti)throw Ti=0,Mu=null,Error(_(185));as(e,n,r),(!(j&2)||e!==ue)&&(e===ue&&(!(j&2)&&(pa|=n),se===4&&Xt(e,pe)),Be(e,r),n===1&&j===0&&!(t.mode&1)&&(Ur=te()+500,ca&&wn()))}function Be(e,t){var n=e.callbackNode;Aw(e,t);var r=wo(e,e===ue?pe:0);if(r===0)n!==null&&fh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fh(n),t===1)e.tag===0?R1(of.bind(null,e)):Lm(of.bind(null,e)),S1(function(){!(j&6)&&wn()}),n=null;else{switch(um(r)){case 1:n=wc;break;case 4:n=om;break;case 16:n=yo;break;case 536870912:n=am;break;default:n=yo}n=Dg(n,Cg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cg(e,t){if(oo=-1,ao=0,j&6)throw Error(_(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var r=wo(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=j;j|=2;var s=Ag();(ue!==e||pe!==t)&&(At=null,Ur=te()+500,Mn(e,t));do try{G1();break}catch(a){Rg(e,a)}while(1);Oc(),Lo.current=s,j=i,re!==null?t=0:(ue=null,pe=0,t=se)}if(t!==0){if(t===2&&(i=lu(e),i!==0&&(r=i,t=Uu(e,i))),t===1)throw n=Wi,Mn(e,0),Xt(e,r),Be(e,te()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!q1(i)&&(t=$o(e,r),t===2&&(s=lu(e),s!==0&&(r=s,t=Uu(e,s))),t===1))throw n=Wi,Mn(e,0),Xt(e,r),Be(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Rn(e,Le,At);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=Kc+500-te(),10<t)){if(wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gu(Rn.bind(null,e,Le,At),t);break}Rn(e,Le,At);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W1(r/1960))-r,10<r){e.timeoutHandle=gu(Rn.bind(null,e,Le,At),r);break}Rn(e,Le,At);break;case 5:Rn(e,Le,At);break;default:throw Error(_(329))}}}return Be(e,te()),e.callbackNode===n?Cg.bind(null,e):null}function Uu(e,t){var n=Si;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Le,Le=n,t!==null&&$u(t)),e}function $u(e){Le===null?Le=e:Le.push.apply(Le,e)}function q1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~qc,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function of(e){if(j&6)throw Error(_(327));kr();var t=wo(e,0);if(!(t&1))return Be(e,te()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=lu(e);r!==0&&(t=r,n=Uu(e,r))}if(n===1)throw n=Wi,Mn(e,0),Xt(e,t),Be(e,te()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Le,At),Be(e,te()),null}function Gc(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Ur=te()+500,ca&&wn())}}function Wn(e){tn!==null&&tn.tag===0&&!(j&6)&&kr();var t=j;j|=1;var n=et.transition,r=b;try{if(et.transition=null,b=1,e)return e()}finally{b=r,et.transition=n,j=t,!(j&6)&&wn()}}function Xc(){be=vr.current,q(vr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I1(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&To();break;case 3:Lr(),q(Ue),q(ke),Bc();break;case 5:$c(r);break;case 4:Lr();break;case 13:q(G);break;case 19:q(G);break;case 10:Dc(r.type._context);break;case 22:case 23:Xc()}n=n.return}if(ue=e,re=e=dn(e.current,null),pe=be=t,se=0,Wi=null,qc=pa=Hn=0,Le=Si=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return e}function Rg(e,t){do{var n=re;try{if(Oc(),ro.current=Do,Oo){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oo=!1}if(Vn=0,le=ie=X=null,Ei=!1,zi=0,Wc.current=null,n===null||n.return===null){se=1,Wi=t,re=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=qh(o);if(g!==null){g.flags&=-257,Kh(g,o,a,s,t),g.mode&1&&Wh(s,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Wh(s,u,t),Yc();break e}l=Error(_(426))}}else if(K&&a.mode&1){var E=qh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Kh(E,o,a,s,t),Nc(Mr(l,a));break e}}s=l=Mr(l,a),se!==4&&(se=2),Si===null?Si=[s]:Si.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=cg(s,l,t);Bh(s,h);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(un===null||!un.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=dg(s,a,t);Bh(s,v);break e}}s=s.return}while(s!==null)}Ng(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Ag(){var e=Lo.current;return Lo.current=Do,e===null?Do:e}function Yc(){(se===0||se===3||se===2)&&(se=4),ue===null||!(Hn&268435455)&&!(pa&268435455)||Xt(ue,pe)}function $o(e,t){var n=j;j|=2;var r=Ag();(ue!==e||pe!==t)&&(At=null,Mn(e,t));do try{K1();break}catch(i){Rg(e,i)}while(1);if(Oc(),j=n,Lo.current=r,re!==null)throw Error(_(261));return ue=null,pe=0,se}function K1(){for(;re!==null;)Pg(re)}function G1(){for(;re!==null&&!ww();)Pg(re)}function Pg(e){var t=Og(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Ng(e):re=t,Wc.current=null}function Ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=b1(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=F1(n,t,be),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function Rn(e,t,n){var r=b,i=et.transition;try{et.transition=null,b=1,X1(e,t,n,r)}finally{et.transition=i,b=r}return null}function X1(e,t,n,r){do kr();while(tn!==null);if(j&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Pw(e,s),e===ue&&(re=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zs||(zs=!0,Dg(yo,function(){return kr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=b;b=1;var a=j;j|=4,Wc.current=null,V1(e,n),Tg(n,e),m1(pu),_o=!!fu,pu=fu=null,e.current=n,H1(n),_w(),j=a,b=o,et.transition=s}else e.current=n;if(zs&&(zs=!1,tn=e,Uo=i),s=e.pendingLanes,s===0&&(un=null),Sw(n.stateNode),Be(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,e=Lu,Lu=null,e;return Uo&1&&e.tag!==0&&kr(),s=e.pendingLanes,s&1?e===Mu?Ti++:(Ti=0,Mu=e):Ti=0,wn(),null}function kr(){if(tn!==null){var e=um(Uo),t=et.transition,n=b;try{if(et.transition=null,b=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Uo=0,j&6)throw Error(_(331));var i=j;for(j|=4,R=e.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ii(8,c,s)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var p=c.sibling,g=c.return;if(Eg(c),c===u){R=null;break}if(p!==null){p.return=g,R=p;break}R=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ii(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,R=h;break e}R=s.return}}var d=e.current;for(R=d;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fa(9,a)}}catch(S){Q(a,a.return,S)}if(a===o){R=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,R=v;break e}R=a.return}}if(j=i,wn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(sa,e)}catch{}r=!0}return r}finally{b=n,et.transition=t}}return!1}function af(e,t,n){t=Mr(n,t),t=cg(e,t,1),e=ln(e,t,1),t=Ne(),e!==null&&(as(e,1,t),Be(e,t))}function Q(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=Mr(n,e),e=dg(t,e,1),t=ln(t,e,1),e=Ne(),t!==null&&(as(t,1,e),Be(t,e));break}}t=t.return}}function Y1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(se===4||se===3&&(pe&130023424)===pe&&500>te()-Kc?Mn(e,0):qc|=n),Be(e,t)}function xg(e,t){t===0&&(e.mode&1?(t=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):t=1);var n=Ne();e=jt(e,t),e!==null&&(as(e,t,n),Be(e,n))}function Q1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xg(e,n)}function J1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),xg(e,n)}var Og;Og=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,j1(e,t,n);Me=!!(e.flags&131072)}else Me=!1,K&&t.flags&1048576&&Mm(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=xr(t,ke.current);Tr(t,n),i=Fc(null,t,r,e,i,n);var s=bc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(s=!0,ko(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mc(t),i.updater=da,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=Cu(null,t,r,!0,s,n)):(t.tag=0,K&&s&&Ac(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=e_(r),e=lt(r,e),i){case 0:t=ku(null,t,r,e,n);break e;case 1:t=Yh(null,t,r,e,n);break e;case 11:t=Gh(null,t,r,e,n);break e;case 14:t=Xh(null,t,r,lt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),ku(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Yh(e,t,r,i,n);case 3:e:{if(mg(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,jm(e,t),No(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Mr(Error(_(423)),t),t=Qh(e,t,r,n,i);break e}else if(r!==i){i=Mr(Error(_(424)),t),t=Qh(e,t,r,n,i);break e}else for(ze=an(t.stateNode.containerInfo.firstChild),We=t,K=!0,ct=null,n=Vm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=Ft(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return Hm(t),e===null&&_u(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,mu(r,i)?o=null:s!==null&&mu(r,s)&&(t.flags|=32),pg(e,t),Ae(e,t,o,n),t.child;case 6:return e===null&&_u(t),null;case 13:return gg(e,t,n);case 4:return Uc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Gh(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,V(Ao,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!Ue.current){t=Ft(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ut(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Eu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Eu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=tt(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),Xh(e,t,r,i,n);case 15:return hg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),so(e,t),t.tag=1,$e(r)?(e=!0,ko(t)):e=!1,Tr(t,n),bm(t,r,i),Su(t,r,i,n),Cu(null,t,r,!0,e,n);case 19:return vg(e,t,n);case 22:return fg(e,t,n)}throw Error(_(156,t.tag))};function Dg(e,t){return sm(e,t)}function Z1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Z1(e,t,n,r)}function Qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e_(e){if(typeof e=="function")return Qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gc)return 11;if(e===vc)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Qc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ar:return Un(n.children,i,s,t);case mc:o=8,i|=8;break;case Kl:return e=Ze(12,n,t,i|2),e.elementType=Kl,e.lanes=s,e;case Gl:return e=Ze(13,n,t,i),e.elementType=Gl,e.lanes=s,e;case Xl:return e=Ze(19,n,t,i),e.elementType=Xl,e.lanes=s,e;case zp:return ma(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fp:o=10;break e;case bp:o=9;break e;case gc:o=11;break e;case vc:o=14;break e;case qt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ze(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Un(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function ma(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=zp,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function t_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jc(e,t,n,r,i,s,o,a,l){return e=new t_(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ze(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(s),e}function n_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lg(e){if(!e)return gn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if($e(n))return Dm(e,n,t)}return t}function Mg(e,t,n,r,i,s,o,a,l){return e=Jc(n,r,!0,e,i,s,o,a,l),e.context=Lg(null),n=e.current,r=Ne(),i=cn(n),s=Ut(r,i),s.callback=t??null,ln(n,s,i),e.current.lanes=i,as(e,i,r),Be(e,r),e}function ga(e,t,n,r){var i=t.current,s=Ne(),o=cn(i);return n=Lg(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,o),e!==null&&(ht(e,i,o,s),no(e,i,o)),o}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function r_(){return null}var Ug=typeof reportError=="function"?reportError:function(e){console.error(e)};function ed(e){this._internalRoot=e}va.prototype.render=ed.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ga(e,t,null,null)};va.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){ga(null,e,null,null)}),t[Bt]=null}};function va(e){this._internalRoot=e}va.prototype.unstable_scheduleHydration=function(e){if(e){var t=hm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&pm(e)}};function td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function i_(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bo(o);s.call(u)}}var o=Mg(t,r,e,0,null,!1,!1,"",uf);return e._reactRootContainer=o,e[Bt]=o.current,$i(e.nodeType===8?e.parentNode:e),Wn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Bo(l);a.call(u)}}var l=Jc(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=l,e[Bt]=l.current,$i(e.nodeType===8?e.parentNode:e),Wn(function(){ga(t,l,n,r)}),l}function wa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Bo(o);a.call(l)}}ga(t,o,e,i)}else o=i_(n,t,e,i,r);return Bo(o)}cm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(_c(t,n|1),Be(t,te()),!(j&6)&&(Ur=te()+500,wn()))}break;case 13:Wn(function(){var r=jt(e,1);if(r!==null){var i=Ne();ht(r,e,1,i)}}),Zc(e,1)}};Ec=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ne();ht(t,e,134217728,n)}Zc(e,134217728)}};dm=function(e){if(e.tag===13){var t=cn(e),n=jt(e,t);if(n!==null){var r=Ne();ht(n,e,t,r)}Zc(e,t)}};hm=function(){return b};fm=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};su=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ua(r);if(!i)throw Error(_(90));Hp(r),Jl(r,i)}}}break;case"textarea":qp(e,n);break;case"select":t=n.value,t!=null&&_r(e,!!n.multiple,t,!1)}};Zp=Gc;em=Wn;var s_={usingClientEntryPoint:!1,Events:[us,dr,ua,Qp,Jp,Gc]},ri={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},o_={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rm(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||r_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{sa=Vs.inject(o_),St=Vs}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(t))throw Error(_(200));return n_(e,t,null,n)};Ge.createRoot=function(e,t){if(!td(e))throw Error(_(299));var n=!1,r="",i=Ug;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jc(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,$i(e.nodeType===8?e.parentNode:e),new ed(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=rm(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Wn(e)};Ge.hydrate=function(e,t,n){if(!ya(t))throw Error(_(200));return wa(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!td(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ug;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mg(t,null,e,1,n??null,i,!1,s,o),e[Bt]=t.current,$i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new va(t)};Ge.render=function(e,t,n){if(!ya(t))throw Error(_(200));return wa(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ya(e))throw Error(_(40));return e._reactRootContainer?(Wn(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Gc;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ya(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return wa(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(e){console.error(e)}}$g(),Mp.exports=Ge;var a_=Mp.exports,cf=a_;Wl.createRoot=cf.createRoot,Wl.hydrateRoot=cf.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nn||(nn={}));const df="popstate";function l_(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Bu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bg(i)}return c_(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function u_(){return Math.random().toString(36).substr(2,8)}function hf(e,t){return{usr:e.state,key:e.key,idx:t}}function Bu(e,t,n,r){return n===void 0&&(n=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zr(t):t,{state:n,key:t&&t.key||r||u_()})}function Bg(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function c_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(qi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=nn.Pop;let E=c(),h=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:h})}function p(E,h){a=nn.Push;let d=Bu(w.location,E,h);n&&n(d,E),u=c()+1;let m=hf(d,u),v=w.createHref(d);try{o.pushState(m,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function g(E,h){a=nn.Replace;let d=Bu(w.location,E,h);n&&n(d,E),u=c();let m=hf(d,u),v=w.createHref(d);o.replaceState(m,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function y(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:Bg(E);return oe(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let w={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(df,f),l=E,()=>{i.removeEventListener(df,f),l=null}},createHref(E){return t(i,E)},createURL:y,encodeLocation(E){let h=y(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(E){return o.go(E)}};return w}var ff;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ff||(ff={}));function d_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zr(t):t,i=bg(r.pathname||"/",n);if(i==null)return null;let s=jg(e);h_(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=E_(s[a],T_(i));return o}function jg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=$n([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jg(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:w_(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Fg(s.path))i(s,o,l)}),t}function Fg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fg(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function h_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:__(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f_=/^:\w+$/,p_=3,m_=2,g_=1,v_=10,y_=-2,pf=e=>e==="*";function w_(e,t){let n=e.split("/"),r=n.length;return n.some(pf)&&(r+=y_),t&&(r+=m_),n.filter(i=>!pf(i)).reduce((i,s)=>i+(f_.test(s)?p_:s===""?g_:v_),r)}function __(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function E_(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=I_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:$n([i,c.pathname]),pathnameBase:N_($n([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=$n([i,c.pathnameBase]))}return s}function I_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=S_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=a[f]||"";o=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=k_(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function S_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function T_(e){try{return decodeURI(e)}catch(t){return nd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function k_(e,t){try{return decodeURIComponent(e)}catch(n){return nd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function bg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function C_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zr(e):e;return{pathname:n?n.startsWith("/")?n:R_(n,t):t,search:x_(r),hash:O_(i)}}function R_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function P_(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zr(e):(i=qi({},e),oe(!i.pathname||!i.pathname.includes("?"),El("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),El("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),El("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=C_(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const $n=e=>e.join("/").replace(/\/\/+/g,"/"),N_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function D_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zg=["post","put","patch","delete"];new Set(zg);const L_=["get",...zg];new Set(L_);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jo.apply(this,arguments)}const rd=T.createContext(null),M_=T.createContext(null),_a=T.createContext(null),Ea=T.createContext(null),Vr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Vg=T.createContext(null);function Ia(){return T.useContext(Ea)!=null}function Hg(){return Ia()||oe(!1),T.useContext(Ea).location}function Wg(e){T.useContext(_a).static||T.useLayoutEffect(e)}function id(){let{isDataRoute:e}=T.useContext(Vr);return e?G_():U_()}function U_(){Ia()||oe(!1);let e=T.useContext(rd),{basename:t,navigator:n}=T.useContext(_a),{matches:r}=T.useContext(Vr),{pathname:i}=Hg(),s=JSON.stringify(A_(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return Wg(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=P_(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:$n([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}function $_(e,t){return B_(e,t)}function B_(e,t,n){Ia()||oe(!1);let{navigator:r}=T.useContext(_a),{matches:i}=T.useContext(Vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Hg(),u;if(t){var c;let w=typeof t=="string"?zr(t):t;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||oe(!1),u=w}else u=l;let f=u.pathname||"/",p=a==="/"?f:f.slice(a.length)||"/",g=d_(e,{pathname:p}),y=V_(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:$n([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:$n([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?T.createElement(Ea.Provider,{value:{location:jo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nn.Pop}},y):y}function j_(){let e=K_(),t=D_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const F_=T.createElement(j_,null);class b_ extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Vr.Provider,{value:this.props.routeContext},T.createElement(Vg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z_(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(rd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Vr.Provider,{value:t},r)}function V_(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||oe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||F_);let p=t.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=f:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,T.createElement(z_,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(b_,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var qg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qg||{}),Fo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fo||{});function H_(e){let t=T.useContext(rd);return t||oe(!1),t}function W_(e){let t=T.useContext(M_);return t||oe(!1),t}function q_(e){let t=T.useContext(Vr);return t||oe(!1),t}function Kg(e){let t=q_(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function K_(){var e;let t=T.useContext(Vg),n=W_(Fo.UseRouteError),r=Kg(Fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function G_(){let{router:e}=H_(qg.UseNavigateStable),t=Kg(Fo.UseNavigateStable),n=T.useRef(!1);return Wg(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,jo({fromRouteId:t},s)))},[e,t])}function di(e){oe(!1)}function X_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1}=e;Ia()&&oe(!1);let a=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=zr(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:g="default"}=r,y=T.useMemo(()=>{let w=bg(u,a);return w==null?null:{location:{pathname:w,search:c,hash:f,state:p,key:g},navigationType:i}},[a,u,c,f,p,g,i]);return y==null?null:T.createElement(_a.Provider,{value:l},T.createElement(Ea.Provider,{children:n,value:y}))}function Y_(e){let{children:t,location:n}=e;return $_(ju(t),n)}new Promise(()=>{});function ju(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,ju(r.props.children,s));return}r.type!==di&&oe(!1),!r.props.index||!r.props.children||oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ju(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Q_="startTransition",mf=Q0[Q_];function J_(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=l_({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(f=>{u&&mf?mf(()=>l(f)):l(f)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(X_,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}var gf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(gf||(gf={}));var vf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vf||(vf={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Z_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Xg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Z_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new eE;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class eE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tE=function(e){const t=Gg(e);return Xg.encodeByteArray(t,!0)},bo=function(e){return tE(e).replace(/\./g,"")},Yg=function(e){try{return Xg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=()=>nE().__FIREBASE_DEFAULTS__,iE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},sE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yg(e[1]);return t&&JSON.parse(t)},Sa=()=>{try{return rE()||iE()||sE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Qg=e=>{var t,n;return(n=(t=Sa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Jg=e=>{const t=Qg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Zg=()=>{var e;return(e=Sa())===null||e===void 0?void 0:e.config},ev=e=>{var t;return(t=Sa())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[bo(JSON.stringify(n)),bo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function lE(){var e;const t=(e=Sa())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function uE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cE(){const e=Ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function rv(){try{return typeof indexedDB=="object"}catch{return!1}}function iv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function dE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="FirebaseError";class st extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=hE,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?fE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new st(i,a,r)}}function fE(e,t){return e.replace(pE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const pE=/\{\$([^}]+)}/g;function mE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ki(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(yf(s)&&yf(o)){if(!Ki(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function hi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function fi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function gE(e,t){const n=new vE(e,t);return n.subscribe.bind(n)}class vE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Il),i.error===void 0&&(i.error=Il),i.complete===void 0&&(i.complete=Il);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Il(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=1e3,_E=2,EE=4*60*60*1e3,IE=.5;function wf(e,t=wE,n=_E){const r=t*Math.pow(n,e),i=Math.round(IE*r*(Math.random()-.5)*2);return Math.min(EE,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return e&&e._delegate?e._delegate:e}class rt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new oE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kE(t))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=An){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=An){return this.instances.has(t)}getOptions(t=An){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=An){return this.component?this.component.multipleInstances?t:An:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TE(e){return e===An?void 0:e}function kE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new SE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const RE={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},AE=F.INFO,PE={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},NE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=PE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ta{constructor(t){this.name=t,this._logLevel=AE,this._logHandler=NE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?RE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const xE=(e,t)=>t.some(n=>e instanceof n);let _f,Ef;function OE(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DE(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sv=new WeakMap,Fu=new WeakMap,ov=new WeakMap,Sl=new WeakMap,sd=new WeakMap;function LE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(hn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&sv.set(n,e)}).catch(()=>{}),sd.set(t,e),t}function ME(e){if(Fu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Fu.set(e,t)}let bu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ov.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function UE(e){bu=e(bu)}function $E(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Tl(this),t,...n);return ov.set(r,t.sort?t.sort():[t]),hn(r)}:DE().includes(e)?function(...t){return e.apply(Tl(this),t),hn(sv.get(this))}:function(...t){return hn(e.apply(Tl(this),t))}}function BE(e){return typeof e=="function"?$E(e):(e instanceof IDBTransaction&&ME(e),xE(e,OE())?new Proxy(e,bu):e)}function hn(e){if(e instanceof IDBRequest)return LE(e);if(Sl.has(e))return Sl.get(e);const t=BE(e);return t!==e&&(Sl.set(e,t),sd.set(t,e)),t}const Tl=e=>sd.get(e);function jE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hn(o.result),l.oldVersion,l.newVersion,hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FE=["get","getKey","getAll","getAllKeys","count"],bE=["put","add","delete","clear"],kl=new Map;function If(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(kl.get(t))return kl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return kl.set(t,s),s}UE(e=>({...e,get:(t,n,r)=>If(t,n)||e.get(t,n,r),has:(t,n)=>!!If(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zu="@firebase/app",Sf="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Ta("@firebase/app"),HE="@firebase/app-compat",WE="@firebase/analytics-compat",qE="@firebase/analytics",KE="@firebase/app-check-compat",GE="@firebase/app-check",XE="@firebase/auth",YE="@firebase/auth-compat",QE="@firebase/database",JE="@firebase/database-compat",ZE="@firebase/functions",eI="@firebase/functions-compat",tI="@firebase/installations",nI="@firebase/installations-compat",rI="@firebase/messaging",iI="@firebase/messaging-compat",sI="@firebase/performance",oI="@firebase/performance-compat",aI="@firebase/remote-config",lI="@firebase/remote-config-compat",uI="@firebase/storage",cI="@firebase/storage-compat",dI="@firebase/firestore",hI="@firebase/firestore-compat",fI="firebase",pI="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="[DEFAULT]",mI={[zu]:"fire-core",[HE]:"fire-core-compat",[qE]:"fire-analytics",[WE]:"fire-analytics-compat",[GE]:"fire-app-check",[KE]:"fire-app-check-compat",[XE]:"fire-auth",[YE]:"fire-auth-compat",[QE]:"fire-rtdb",[JE]:"fire-rtdb-compat",[ZE]:"fire-fn",[eI]:"fire-fn-compat",[tI]:"fire-iid",[nI]:"fire-iid-compat",[rI]:"fire-fcm",[iI]:"fire-fcm-compat",[sI]:"fire-perf",[oI]:"fire-perf-compat",[aI]:"fire-rc",[lI]:"fire-rc-compat",[uI]:"fire-gcs",[cI]:"fire-gcs-compat",[dI]:"fire-fst",[hI]:"fire-fst-compat","fire-js":"fire-js",[fI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,Hu=new Map;function gI(e,t){try{e.container.addComponent(t)}catch(n){qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pt(e){const t=e.name;if(Hu.has(t))return qn.debug(`There were multiple attempts to register component ${t}.`),!1;Hu.set(t,e);for(const n of zo.values())gI(n,e);return!0}function _n(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new er("app","Firebase",vI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=pI;function av(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=Zg()),!n)throw fn.create("no-options");const s=zo.get(i);if(s){if(Ki(n,s.options)&&Ki(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new CE(i);for(const l of Hu.values())o.addComponent(l);const a=new yI(n,r,o);return zo.set(i,a),a}function ka(e=Vu){const t=zo.get(e);if(!t&&e===Vu&&Zg())return av();if(!t)throw fn.create("no-app",{appName:e});return t}function je(e,t,n){var r;let i=(r=mI[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qn.warn(a.join(" "));return}pt(new rt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="firebase-heartbeat-database",_I=1,Gi="firebase-heartbeat-store";let Cl=null;function lv(){return Cl||(Cl=jE(wI,_I,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gi)}}}).catch(e=>{throw fn.create("idb-open",{originalErrorMessage:e.message})})),Cl}async function EI(e){try{return await(await lv()).transaction(Gi).objectStore(Gi).get(uv(e))}catch(t){if(t instanceof st)qn.warn(t.message);else{const n=fn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qn.warn(n.message)}}}async function Tf(e,t){try{const r=(await lv()).transaction(Gi,"readwrite");await r.objectStore(Gi).put(t,uv(e)),await r.done}catch(n){if(n instanceof st)qn.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function uv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1024,SI=30*24*60*60*1e3;class TI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=SI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kf(),{heartbeatsToSend:n,unsentEntries:r}=kI(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kf(){return new Date().toISOString().substring(0,10)}function kI(e,t=II){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rv()?iv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await EI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Cf(e){return bo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(e){pt(new rt("platform-logger",t=>new zE(t),"PRIVATE")),pt(new rt("heartbeat",t=>new TI(t),"PRIVATE")),je(zu,Sf,e),je(zu,Sf,"esm2017"),je("fire-js","")}RI("");var AI="firebase",PI="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(AI,PI,"app");const NI=(e,t)=>t.some(n=>e instanceof n);let Rf,Af;function xI(){return Rf||(Rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return Af||(Af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cv=new WeakMap,Wu=new WeakMap,dv=new WeakMap,Rl=new WeakMap,od=new WeakMap;function DI(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(pn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&cv.set(n,e)}).catch(()=>{}),od.set(t,e),t}function LI(e){if(Wu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Wu.set(e,t)}let qu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function MI(e){qu=e(qu)}function UI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Al(this),t,...n);return dv.set(r,t.sort?t.sort():[t]),pn(r)}:OI().includes(e)?function(...t){return e.apply(Al(this),t),pn(cv.get(this))}:function(...t){return pn(e.apply(Al(this),t))}}function $I(e){return typeof e=="function"?UI(e):(e instanceof IDBTransaction&&LI(e),NI(e,xI())?new Proxy(e,qu):e)}function pn(e){if(e instanceof IDBRequest)return DI(e);if(Rl.has(e))return Rl.get(e);const t=$I(e);return t!==e&&(Rl.set(e,t),od.set(t,e)),t}const Al=e=>od.get(e);function BI(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const jI=["get","getKey","getAll","getAllKeys","count"],FI=["put","add","delete","clear"],Pl=new Map;function Pf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pl.get(t))return Pl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=FI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pl.set(t,s),s}MI(e=>({...e,get:(t,n,r)=>Pf(t,n)||e.get(t,n,r),has:(t,n)=>!!Pf(t,n)||e.has(t,n)}));const hv="@firebase/installations",ad="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=1e4,pv=`w:${ad}`,mv="FIS_v2",bI="https://firebaseinstallations.googleapis.com/v1",zI=60*60*1e3,VI="installations",HI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kn=new er(VI,HI,WI);function gv(e){return e instanceof st&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv({projectId:e}){return`${bI}/projects/${e}/installations`}function yv(e){return{token:e.token,requestStatus:2,expiresIn:KI(e.expiresIn),creationTime:Date.now()}}async function wv(e,t){const r=(await t.json()).error;return Kn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _v({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function qI(e,{refreshToken:t}){const n=_v(e);return n.append("Authorization",GI(t)),n}async function Ev(e){const t=await e();return t.status>=500&&t.status<600?e():t}function KI(e){return Number(e.replace("s","000"))}function GI(e){return`${mv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=vv(e),i=_v(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:mv,appId:e.appId,sdkVersion:pv},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ev(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:yv(u.authToken)}}else throw await wv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=/^[cdef][\w-]{21}$/,Ku="";function JI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ZI(e);return QI.test(n)?n:Ku}catch{return Ku}}function ZI(e){return YI(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Map;function Tv(e,t){const n=Ca(e);kv(n,t),eS(n,t)}function kv(e,t){const n=Sv.get(e);if(n)for(const r of n)r(t)}function eS(e,t){const n=tS();n&&n.postMessage({key:e,fid:t}),nS()}let On=null;function tS(){return!On&&"BroadcastChannel"in self&&(On=new BroadcastChannel("[Firebase] FID Change"),On.onmessage=e=>{kv(e.data.key,e.data.fid)}),On}function nS(){Sv.size===0&&On&&(On.close(),On=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="firebase-installations-database",iS=1,Gn="firebase-installations-store";let Nl=null;function ld(){return Nl||(Nl=BI(rS,iS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gn)}}})),Nl}async function Vo(e,t){const n=Ca(e),i=(await ld()).transaction(Gn,"readwrite"),s=i.objectStore(Gn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Tv(e,t.fid),t}async function Cv(e){const t=Ca(e),r=(await ld()).transaction(Gn,"readwrite");await r.objectStore(Gn).delete(t),await r.done}async function Ra(e,t){const n=Ca(e),i=(await ld()).transaction(Gn,"readwrite"),s=i.objectStore(Gn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Tv(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ud(e){let t;const n=await Ra(e.appConfig,r=>{const i=sS(r),s=oS(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ku?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function sS(e){const t=e||{fid:JI(),registrationStatus:0};return Rv(t)}function oS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Kn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=aS(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:lS(e)}:{installationEntry:t}}async function aS(e,t){try{const n=await XI(e,t);return Vo(e.appConfig,n)}catch(n){throw gv(n)&&n.customData.serverCode===409?await Cv(e.appConfig):await Vo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function lS(e){let t=await Nf(e.appConfig);for(;t.registrationStatus===1;)await Iv(100),t=await Nf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ud(e);return r||n}return t}function Nf(e){return Ra(e,t=>{if(!t)throw Kn.create("installation-not-found");return Rv(t)})}function Rv(e){return uS(e)?{fid:e.fid,registrationStatus:0}:e}function uS(e){return e.registrationStatus===1&&e.registrationTime+fv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS({appConfig:e,heartbeatServiceProvider:t},n){const r=dS(e,n),i=qI(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:pv,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ev(()=>fetch(r,a));if(l.ok){const u=await l.json();return yv(u)}else throw await wv("Generate Auth Token",l)}function dS(e,{fid:t}){return`${vv(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(e,t=!1){let n;const r=await Ra(e.appConfig,s=>{if(!Av(s))throw Kn.create("not-registered");const o=s.authToken;if(!t&&pS(o))return s;if(o.requestStatus===1)return n=hS(e,t),s;{if(!navigator.onLine)throw Kn.create("app-offline");const a=gS(s);return n=fS(e,a),a}});return n?await n:r.authToken}async function hS(e,t){let n=await xf(e.appConfig);for(;n.authToken.requestStatus===1;)await Iv(100),n=await xf(e.appConfig);const r=n.authToken;return r.requestStatus===0?cd(e,t):r}function xf(e){return Ra(e,t=>{if(!Av(t))throw Kn.create("not-registered");const n=t.authToken;return vS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fS(e,t){try{const n=await cS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Vo(e.appConfig,r),n}catch(n){if(gv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Vo(e.appConfig,r)}throw n}}function Av(e){return e!==void 0&&e.registrationStatus===2}function pS(e){return e.requestStatus===2&&!mS(e)}function mS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+zI}function gS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function vS(e){return e.requestStatus===1&&e.requestTime+fv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(e){const t=e,{installationEntry:n,registrationPromise:r}=await ud(t);return r?r.catch(console.error):cd(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(e,t=!1){const n=e;return await _S(n),(await cd(n,t)).token}async function _S(e){const{registrationPromise:t}=await ud(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(e){if(!e||!e.options)throw xl("App Configuration");if(!e.name)throw xl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw xl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function xl(e){return Kn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="installations",IS="installations-internal",SS=e=>{const t=e.getProvider("app").getImmediate(),n=ES(t),r=_n(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TS=e=>{const t=e.getProvider("app").getImmediate(),n=_n(t,Pv).getImmediate();return{getId:()=>yS(n),getToken:i=>wS(n,i)}};function kS(){pt(new rt(Pv,SS,"PUBLIC")),pt(new rt(IS,TS,"PRIVATE"))}kS();je(hv,ad);je(hv,ad,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="analytics",CS="firebase_id",RS="origin",AS=60*1e3,PS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new Ta("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new er("analytics","Analytics",NS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(e){if(!e.startsWith(dd)){const t=qe.create("invalid-gtag-resource",{gtagURL:e});return Fe.warn(t.message),""}return e}function Nv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function OS(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function DS(e,t){const n=OS("firebase-js-sdk-policy",{createScriptURL:xS}),r=document.createElement("script"),i=`${dd}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function LS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function MS(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await Nv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Fe.error(a)}e("config",i,s)}async function US(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Nv(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Fe.error(s)}}function $S(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await US(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await MS(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Fe.error(a)}}return i}function BS(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$S(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function jS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(dd)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=30,bS=1e3;class zS{constructor(t={},n=bS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const xv=new zS;function VS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function HS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:VS(r)},s=PS.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function WS(e,t=xv,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw qe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw qe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new GS;return setTimeout(async()=>{a.abort()},n!==void 0?n:AS),Ov({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Ov(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=xv){var s;const{appId:o,measurementId:a}=e;try{await qS(r,t)}catch(l){if(a)return Fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await HS(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!KS(u)){if(i.deleteThrottleMetadata(o),a)return Fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?wf(n,i.intervalMillis,FS):wf(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Fe.debug(`Calling attemptFetch again in ${c} millis`),Ov(e,f,r,i)}}function qS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(qe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function KS(e){if(!(e instanceof st)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class GS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function XS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(){if(rv())try{await iv()}catch(e){return Fe.warn(qe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Fe.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QS(e,t,n,r,i,s,o){var a;const l=WS(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Fe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Fe.error(g)),t.push(l);const u=YS().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);jS(s)||DS(s,c.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[RS]="firebase",p.update=!0,f!=null&&(p[CS]=f),i("config",c.measurementId,p),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(t){this.app=t}_delete(){return delete ki[this.app.options.appId],Promise.resolve()}}let ki={},Of=[];const Df={};let Ol="dataLayer",ZS="gtag",Lf,Dv,Mf=!1;function eT(){const e=[];if(nv()&&e.push("This is a browser extension environment."),dE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=qe.create("invalid-analytics-context",{errorInfo:t});Fe.warn(n.message)}}function tT(e,t,n){eT();const r=e.options.appId;if(!r)throw qe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(ki[r]!=null)throw qe.create("already-exists",{id:r});if(!Mf){LS(Ol);const{wrappedGtag:s,gtagCore:o}=BS(ki,Of,Df,Ol,ZS);Dv=s,Lf=o,Mf=!0}return ki[r]=QS(e,Of,Df,t,Lf,Ol,n),new JS(e)}function nT(e=ka()){e=De(e);const t=_n(e,Ho);return t.isInitialized()?t.getImmediate():rT(e)}function rT(e,t={}){const n=_n(e,Ho);if(n.isInitialized()){const i=n.getImmediate();if(Ki(t,n.getOptions()))return i;throw qe.create("already-initialized")}return n.initialize({options:t})}function iT(e,t,n,r){e=De(e),XS(Dv,ki[e.app.options.appId],t,n,r).catch(i=>Fe.error(i))}const Uf="@firebase/analytics",$f="0.10.0";function sT(){pt(new rt(Ho,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return tT(r,i,n)},"PUBLIC")),pt(new rt("analytics-internal",e,"PRIVATE")),je(Uf,$f),je(Uf,$f,"esm2017");function e(t){try{const n=t.getProvider(Ho).getImmediate();return{logEvent:(r,i,s)=>iT(n,r,i,s)}}catch(n){throw qe.create("interop-component-reg-failed",{reason:n})}}}sT();var oT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,hd=hd||{},L=oT||self;function Aa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function hs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function aT(e){return Object.prototype.hasOwnProperty.call(e,Dl)&&e[Dl]||(e[Dl]=++lT)}var Dl="closure_uid_"+(1e9*Math.random()>>>0),lT=0;function uT(e,t,n){return e.call.apply(e.bind,arguments)}function cT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Se(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=uT:Se=cT,Se.apply(null,arguments)}function Hs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function de(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function En(){this.s=this.s,this.o=this.o}var dT=0;En.prototype.s=!1;En.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dT!=0)&&aT(this)};En.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function fd(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Bf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Aa(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var hT=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",()=>{},t),L.removeEventListener("test",()=>{},t)}catch{}return e}();function Xi(e){return/^[\s\xa0]*$/.test(e)}function Pa(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function wt(e){return Pa().indexOf(e)!=-1}function pd(e){return pd[" "](e),e}pd[" "]=function(){};function fT(e,t){var n=ok;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var pT=wt("Opera"),Yi=wt("Trident")||wt("MSIE"),Mv=wt("Edge"),Gu=Mv||Yi,Uv=wt("Gecko")&&!(Pa().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge"))&&!(wt("Trident")||wt("MSIE"))&&!wt("Edge"),mT=Pa().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge");function $v(){var e=L.document;return e?e.documentMode:void 0}e:{var jf="",Ll=function(){var e=Pa();if(Uv)return/rv:([^\);]+)(\)|;)/.exec(e);if(Mv)return/Edge\/([\d\.]+)/.exec(e);if(Yi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(mT)return/WebKit\/(\S+)/.exec(e);if(pT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ll&&(jf=Ll?Ll[1]:""),Yi){var Ff=$v();if(Ff!=null&&Ff>parseFloat(jf))break e}}L.document&&Yi&&$v();function Qi(e,t){if(Te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Uv){e:{try{pd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:gT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Qi.$.h.call(this)}}de(Qi,Te);var gT={2:"touch",3:"pen",4:"mouse"};Qi.prototype.h=function(){Qi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var fs="closure_listenable_"+(1e6*Math.random()|0),vT=0;function yT(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++vT,this.fa=this.ia=!1}function Na(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function md(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function wT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Bv(e){const t={};for(const n in e)t[n]=e[n];return t}const bf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<bf.length;s++)n=bf[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function xa(e){this.src=e,this.g={},this.h=0}xa.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Yu(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new yT(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Xu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Lv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Na(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Yu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var gd="closure_lm_"+(1e6*Math.random()|0),Ml={};function Fv(e,t,n,r,i){if(r&&r.once)return zv(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Fv(e,t[s],n,r,i);return null}return n=wd(n),e&&e[fs]?e.O(t,n,hs(r)?!!r.capture:!!r,i):bv(e,t,n,!1,r,i)}function bv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=hs(i)?!!i.capture:!!i,a=yd(e);if(a||(e[gd]=a=new xa(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=_T(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)hT||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Hv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _T(){function e(n){return t.call(e.src,e.listener,n)}const t=ET;return e}function zv(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)zv(e,t[s],n,r,i);return null}return n=wd(n),e&&e[fs]?e.P(t,n,hs(r)?!!r.capture:!!r,i):bv(e,t,n,!0,r,i)}function Vv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Vv(e,t[s],n,r,i);else r=hs(r)?!!r.capture:!!r,n=wd(n),e&&e[fs]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Yu(s,n,r,i),-1<n&&(Na(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=yd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Yu(t,n,r,i)),(n=-1<e?t[e]:null)&&vd(n))}function vd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[fs])Xu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Hv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=yd(t))?(Xu(n,e),n.h==0&&(n.src=null,t[gd]=null)):Na(e)}}}function Hv(e){return e in Ml?Ml[e]:Ml[e]="on"+e}function ET(e,t){if(e.fa)e=!0;else{t=new Qi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&vd(e),e=n.call(r,t)}return e}function yd(e){return e=e[gd],e instanceof xa?e:null}var Ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(e){return typeof e=="function"?e:(e[Ul]||(e[Ul]=function(t){return e.handleEvent(t)}),e[Ul])}function ce(){En.call(this),this.i=new xa(this),this.S=this,this.J=null}de(ce,En);ce.prototype[fs]=!0;ce.prototype.removeEventListener=function(e,t,n,r){Vv(this,e,t,n,r)};function me(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Te(t,e);else if(t instanceof Te)t.target=t.target||e;else{var i=t;t=new Te(r,e),jv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ws(o,r,!0,t)&&i}if(o=t.g=e,i=Ws(o,r,!0,t)&&i,i=Ws(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ws(o,r,!1,t)&&i}ce.prototype.N=function(){if(ce.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Na(n[r]);delete e.g[t],e.h--}}this.J=null};ce.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ce.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ws(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Xu(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var _d=L.JSON.stringify;class IT{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ST(){var e=Ed;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class TT{constructor(){this.h=this.g=null}add(t,n){const r=Wv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Wv=new IT(()=>new kT,e=>e.reset());class kT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function CT(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function RT(e){L.setTimeout(()=>{throw e},0)}let Ji,Zi=!1,Ed=new TT,qv=()=>{const e=L.Promise.resolve(void 0);Ji=()=>{e.then(AT)}};var AT=()=>{for(var e;e=ST();){try{e.h.call(e.g)}catch(n){RT(n)}var t=Wv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Zi=!1};function Oa(e,t){ce.call(this),this.h=e||1,this.g=t||L,this.j=Se(this.qb,this),this.l=Date.now()}de(Oa,ce);k=Oa.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),me(this,"tick"),this.ga&&(Id(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Id(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}k.N=function(){Oa.$.N.call(this),Id(this),delete this.g};function Sd(e,t,n){if(typeof e=="function")n&&(e=Se(e,n));else if(e&&typeof e.handleEvent=="function")e=Se(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function Kv(e){e.g=Sd(()=>{e.g=null,e.i&&(e.i=!1,Kv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class PT extends En{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kv(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(e){En.call(this),this.h=e,this.g={}}de(es,En);var zf=[];function Gv(e,t,n,r){Array.isArray(n)||(n&&(zf[0]=n.toString()),n=zf);for(var i=0;i<n.length;i++){var s=Fv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Xv(e){md(e.g,function(t,n){this.g.hasOwnProperty(n)&&vd(t)},e),e.g={}}es.prototype.N=function(){es.$.N.call(this),Xv(this)};es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Da(){this.g=!0}Da.prototype.Ea=function(){this.g=!1};function NT(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function xT(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function yr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+DT(e,n)+(r?" "+r:"")})}function OT(e,t){e.info(function(){return"TIMEOUT: "+t})}Da.prototype.info=function(){};function DT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _d(n)}catch{return t}}var Hr={},Vf=null;function Td(){return Vf=Vf||new ce}Hr.Ta="serverreachability";function Yv(e){Te.call(this,Hr.Ta,e)}de(Yv,Te);function ts(e){const t=Td();me(t,new Yv(t))}Hr.STAT_EVENT="statevent";function Qv(e,t){Te.call(this,Hr.STAT_EVENT,e),this.stat=t}de(Qv,Te);function Pe(e){const t=Td();me(t,new Qv(t,e))}Hr.Ua="timingevent";function Jv(e,t){Te.call(this,Hr.Ua,e),this.size=t}de(Jv,Te);function ps(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var kd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},LT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cd(){}Cd.prototype.h=null;function Hf(e){return e.h||(e.h=e.i())}function MT(){}var ms={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rd(){Te.call(this,"d")}de(Rd,Te);function Ad(){Te.call(this,"c")}de(Ad,Te);var Qu;function La(){}de(La,Cd);La.prototype.g=function(){return new XMLHttpRequest};La.prototype.i=function(){return{}};Qu=new La;function gs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new es(this),this.P=UT,e=Gu?125:void 0,this.V=new Oa(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zv}function Zv(){this.i=null,this.g="",this.h=!1}var UT=45e3,Ju={},Wo={};k=gs.prototype;k.setTimeout=function(e){this.P=e};function Zu(e,t,n){e.L=1,e.v=Ua(bt(t)),e.s=n,e.S=!0,ey(e,null)}function ey(e,t){e.G=Date.now(),vs(e),e.A=bt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),ly(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Zv,e.g=Py(e.l,n?t:null,!e.s),0<e.O&&(e.M=new PT(Se(e.Pa,e,e.g),e.O)),Gv(e.U,e.g,"readystatechange",e.nb),t=e.I?Bv(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ts(),NT(e.j,e.u,e.A,e.m,e.W,e.s)}k.nb=function(e){e=e.target;const t=this.M;t&&_t(e)==3?t.l():this.Pa(e)};k.Pa=function(e){try{if(e==this.g)e:{const c=_t(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Gu||this.g&&(this.h.h||this.g.ja()||Gf(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?ts(3):ts(2)),Ma(this);var n=this.g.da();this.ca=n;t:if(ty(this)){var r=Gf(this.g);e="";var i=r.length,s=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Ci(this);var o="";break t}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xT(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xi(a)){var u=a;break t}}u=null}if(n=u)yr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ec(this,n);else{this.i=!1,this.o=3,Pe(12),Dn(this),Ci(this);break e}}this.S?(ny(this,c,o),Gu&&this.i&&c==3&&(Gv(this.U,this.V,"tick",this.mb),this.V.start())):(yr(this.j,this.m,o,null),ec(this,o)),c==4&&Dn(this),this.i&&!this.J&&(c==4?ky(this.l,this):(this.i=!1,vs(this)))}else rk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),Dn(this),Ci(this)}}}catch{}finally{}};function ty(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ny(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=$T(e,n),i==Wo){t==4&&(e.o=4,Pe(14),r=!1),yr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ju){e.o=4,Pe(15),yr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else yr(e.j,e.m,i,null),ec(e,i);ty(e)&&i!=Wo&&i!=Ju&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Pe(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ld(t),t.M=!0,Pe(11))):(yr(e.j,e.m,n,"[Invalid Chunked Response]"),Dn(e),Ci(e))}k.mb=function(){if(this.g){var e=_t(this.g),t=this.g.ja();this.C<t.length&&(Ma(this),ny(this,e,t),this.i&&e!=4&&vs(this))}};function $T(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Wo:(n=Number(t.substring(n,r)),isNaN(n)?Ju:(r+=1,r+n>t.length?Wo:(t=t.slice(r,r+n),e.C=r+n,t)))}k.cancel=function(){this.J=!0,Dn(this)};function vs(e){e.Y=Date.now()+e.P,ry(e,e.P)}function ry(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ps(Se(e.lb,e),t)}function Ma(e){e.B&&(L.clearTimeout(e.B),e.B=null)}k.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(OT(this.j,this.A),this.L!=2&&(ts(),Pe(17)),Dn(this),this.o=2,Ci(this)):ry(this,this.Y-e)};function Ci(e){e.l.H==0||e.J||ky(e.l,e)}function Dn(e){Ma(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Id(e.V),Xv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ec(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||tc(n.i,e))){if(!e.K&&tc(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Go(n),Fa(n);else break e;Dd(n),Pe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ps(Se(n.ib,n),6e3));if(1>=dy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ln(n,11)}else if((e.K||n.g==e)&&Go(n),!Xi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Pd(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,W(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ay(r,r.J?r.pa:null,r.Y),o.K){hy(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ma(a),vs(a)),r.g=o}else Sy(r);0<n.j.length&&ba(n)}else u[0]!="stop"&&u[0]!="close"||Ln(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ln(n,7):Od(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ts(4)}catch{}}function BT(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Aa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function jT(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Aa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function iy(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Aa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=jT(e),r=BT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var sy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Bn){this.h=e.h,qo(this,e.j),this.s=e.s,this.g=e.g,Ko(this,e.m),this.l=e.l;var t=e.i,n=new ns;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Wf(this,n),this.o=e.o}else e&&(t=String(e).match(sy))?(this.h=!1,qo(this,t[1]||"",!0),this.s=pi(t[2]||""),this.g=pi(t[3]||"",!0),Ko(this,t[4]),this.l=pi(t[5]||"",!0),Wf(this,t[6]||"",!0),this.o=pi(t[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}Bn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(mi(t,qf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(mi(t,qf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(mi(n,n.charAt(0)=="/"?VT:zT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",mi(n,WT)),e.join("")};function bt(e){return new Bn(e)}function qo(e,t,n){e.j=n?pi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ko(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Wf(e,t,n){t instanceof ns?(e.i=t,qT(e.i,e.h)):(n||(t=mi(t,HT)),e.i=new ns(t,e.h))}function W(e,t,n){e.i.set(t,n)}function Ua(e){return W(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function mi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,bT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function bT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var qf=/[#\/\?@]/g,zT=/[#\?:]/g,VT=/[#\?]/g,HT=/[#\?@]/g,WT=/#/g;function ns(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function In(e){e.g||(e.g=new Map,e.h=0,e.i&&FT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}k=ns.prototype;k.add=function(e,t){In(this),this.i=null,e=Wr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function oy(e,t){In(e),t=Wr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ay(e,t){return In(e),t=Wr(e,t),e.g.has(t)}k.forEach=function(e,t){In(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};k.ta=function(){In(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};k.Z=function(e){In(this);let t=[];if(typeof e=="string")ay(this,e)&&(t=t.concat(this.g.get(Wr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};k.set=function(e,t){return In(this),this.i=null,e=Wr(this,e),ay(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};k.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ly(e,t,n){oy(e,t),0<n.length&&(e.i=null,e.g.set(Wr(e,t),fd(n)),e.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Wr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function qT(e,t){t&&!e.j&&(In(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(oy(this,r),ly(this,i,n))},e)),e.j=t}var KT=class{constructor(e,t){this.g=e,this.map=t}};function uy(e){this.l=e||GT,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GT=10;function cy(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function dy(e){return e.h?1:e.g?e.g.size:0}function tc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Pd(e,t){e.g?e.g.add(t):e.h=t}function hy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}uy.prototype.cancel=function(){if(this.i=fy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function fy(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return fd(e.i)}var XT=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function YT(){this.g=new XT}function QT(e,t,n){const r=n||"";try{iy(e,function(i,s){let o=i;hs(i)&&(o=_d(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function JT(e,t){const n=new Da;if(L.Image){const r=new Image;r.onload=Hs(qs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Hs(qs,n,r,"TestLoadImage: error",!1,t),r.onabort=Hs(qs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Hs(qs,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function qs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function $a(e){this.l=e.ec||null,this.j=e.ob||!1}de($a,Cd);$a.prototype.g=function(){return new Ba(this.l,this.j)};$a.prototype.i=function(e){return function(){return e}}({});function Ba(e,t){ce.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Nd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}de(Ba,ce);var Nd=0;k=Ba.prototype;k.open=function(e,t){if(this.readyState!=Nd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rs(this)};k.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=Nd};k.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;py(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function py(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}k.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ys(this):rs(this),this.readyState==3&&py(this)}};k.Za=function(e){this.g&&(this.response=this.responseText=e,ys(this))};k.Ya=function(e){this.g&&(this.response=e,ys(this))};k.ka=function(){this.g&&ys(this)};function ys(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rs(e)}k.setRequestHeader=function(e,t){this.v.append(e,t)};k.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function rs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ZT=L.JSON.parse;function ne(e){ce.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=my,this.L=this.M=!1}de(ne,ce);var my="",ek=/^https?$/i,tk=["POST","PUT"];k=ne.prototype;k.Oa=function(e){this.M=e};k.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qu.g(),this.C=this.u?Hf(this.u):Hf(Qu),this.g.onreadystatechange=Se(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Kf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=Lv(tk,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yy(this),0<this.B&&((this.L=nk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.ua,this)):this.A=Sd(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Kf(this,s)}};function nk(e){return Yi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}k.ua=function(){typeof hd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,me(this,"timeout"),this.abort(8))};function Kf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,gy(e),ja(e)}function gy(e){e.F||(e.F=!0,me(e,"complete"),me(e,"error"))}k.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,me(this,"complete"),me(this,"abort"),ja(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ja(this,!0)),ne.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?vy(this):this.kb())};k.kb=function(){vy(this)};function vy(e){if(e.h&&typeof hd<"u"&&(!e.C[1]||_t(e)!=4||e.da()!=2)){if(e.v&&_t(e)==4)Sd(e.La,0,e);else if(me(e,"readystatechange"),_t(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(sy)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!ek.test(i?i.toLowerCase():"")}n=r}if(n)me(e,"complete"),me(e,"success");else{e.m=6;try{var s=2<_t(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",gy(e)}}finally{ja(e)}}}}function ja(e,t){if(e.g){yy(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||me(e,"ready");try{n.onreadystatechange=r}catch{}}}function yy(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}k.isActive=function(){return!!this.g};function _t(e){return e.g?e.g.readyState:0}k.da=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ZT(t)}};function Gf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case my:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function rk(e){const t={};e=(e.g&&2<=_t(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Xi(e[r]))continue;var n=CT(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}wT(t,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wy(e){let t="";return md(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function xd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wy(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):W(e,t,n))}function ii(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function _y(e){this.Ga=0,this.j=[],this.l=new Da,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ii("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ii("baseRetryDelayMs",5e3,e),this.hb=ii("retryDelaySeedMs",1e4,e),this.eb=ii("forwardChannelMaxRetries",2,e),this.xa=ii("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new uy(e&&e.concurrentRequestLimit),this.Ja=new YT,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=_y.prototype;k.ra=8;k.H=1;function Od(e){if(Ey(e),e.H==3){var t=e.W++,n=bt(e.I);if(W(n,"SID",e.K),W(n,"RID",t),W(n,"TYPE","terminate"),ws(e,n),t=new gs(e,e.l,t),t.L=2,t.v=Ua(bt(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=Py(t.l,null),t.g.ha(t.v)),t.G=Date.now(),vs(t)}Ry(e)}function Fa(e){e.g&&(Ld(e),e.g.cancel(),e.g=null)}function Ey(e){Fa(e),e.u&&(L.clearTimeout(e.u),e.u=null),Go(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function ba(e){if(!cy(e.i)&&!e.m){e.m=!0;var t=e.Na;Ji||qv(),Zi||(Ji(),Zi=!0),Ed.add(t,e),e.C=0}}function ik(e,t){return dy(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ps(Se(e.Na,e,t),Cy(e,e.C)),e.C++,!0)}k.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new gs(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Bv(s),jv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Iy(this,i,t),n=bt(this.I),W(n,"RID",e),W(n,"CVER",22),this.F&&W(n,"X-HTTP-Session-Id",this.F),ws(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(wy(s)))+"&"+t:this.o&&xd(n,this.o,s)),Pd(this.i,i),this.bb&&W(n,"TYPE","init"),this.P?(W(n,"$req",t),W(n,"SID","null"),i.aa=!0,Zu(i,n,null)):Zu(i,n,t),this.H=2}}else this.H==3&&(e?Xf(this,e):this.j.length==0||cy(this.i)||Xf(this))};function Xf(e,t){var n;t?n=t.m:n=e.W++;const r=bt(e.I);W(r,"SID",e.K),W(r,"RID",n),W(r,"AID",e.V),ws(e,r),e.o&&e.s&&xd(r,e.o,e.s),n=new gs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Iy(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Pd(e.i,n),Zu(n,r,t)}function ws(e,t){e.na&&md(e.na,function(n,r){W(t,r,n)}),e.h&&iy({},function(n,r){W(t,r,n)})}function Iy(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Se(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{QT(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Sy(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ji||qv(),Zi||(Ji(),Zi=!0),Ed.add(t,e),e.A=0}}function Dd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ps(Se(e.Ma,e),Cy(e,e.A)),e.A++,!0)}k.Ma=function(){if(this.u=null,Ty(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ps(Se(this.jb,this),e)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pe(10),Fa(this),Ty(this))};function Ld(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function Ty(e){e.g=new gs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=bt(e.wa);W(t,"RID","rpc"),W(t,"SID",e.K),W(t,"AID",e.V),W(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&W(t,"TO",e.qa),W(t,"TYPE","xmlhttp"),ws(e,t),e.o&&e.s&&xd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ua(bt(t)),n.s=null,n.S=!0,ey(n,e)}k.ib=function(){this.v!=null&&(this.v=null,Fa(this),Dd(this),Pe(19))};function Go(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function ky(e,t){var n=null;if(e.g==t){Go(e),Ld(e),e.g=null;var r=2}else if(tc(e.i,t))n=t.F,hy(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Td(),me(r,new Jv(r,n)),ba(e)}else Sy(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&ik(e,t)||r==2&&Dd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ln(e,5);break;case 4:Ln(e,10);break;case 3:Ln(e,6);break;default:Ln(e,2)}}}function Cy(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ln(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Se(e.pb,e);n||(n=new Bn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||qo(n,"https"),Ua(n)),JT(n.toString(),r)}else Pe(2);e.H=0,e.h&&e.h.za(t),Ry(e),Ey(e)}k.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Pe(2)):(this.l.info("Failed to ping google.com"),Pe(1))};function Ry(e){if(e.H=0,e.ma=[],e.h){const t=fy(e.i);(t.length!=0||e.j.length!=0)&&(Bf(e.ma,t),Bf(e.ma,e.j),e.i.i.length=0,fd(e.j),e.j.length=0),e.h.ya()}}function Ay(e,t,n){var r=n instanceof Bn?bt(n):new Bn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ko(r,r.m);else{var i=L.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Bn(null);r&&qo(s,r),t&&(s.g=t),i&&Ko(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&W(r,n,t),W(r,"VER",e.ra),ws(e,r),r}function Py(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ne(new $a({ob:!0})):new ne(e.va),t.Oa(e.J),t}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ny(){}k=Ny.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function it(e,t){ce.call(this),this.g=new _y(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Xi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new qr(this)}de(it,ce);it.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Pe(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ay(e,null,e.Y),ba(e)};it.prototype.close=function(){Od(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=_d(e),e=n);t.j.push(new KT(t.fb++,e)),t.H==3&&ba(t)};it.prototype.N=function(){this.g.h=null,delete this.j,Od(this.g),delete this.g,it.$.N.call(this)};function xy(e){Rd.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}de(xy,Rd);function Oy(){Ad.call(this),this.status=1}de(Oy,Ad);function qr(e){this.g=e}de(qr,Ny);qr.prototype.Ba=function(){me(this.g,"a")};qr.prototype.Aa=function(e){me(this.g,new xy(e))};qr.prototype.za=function(e){me(this.g,new Oy)};qr.prototype.ya=function(){me(this.g,"b")};function sk(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}de(Rt,sk);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $l(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Rt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)$l(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){$l(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){$l(this,r),i=0;break}}this.h=i,this.i+=t};Rt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function z(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var ok={};function Md(e){return-128<=e&&128>e?fT(e,function(t){return new z([t|0],0>t?-1:0)}):new z([e|0],0>e?-1:0)}function Et(e){if(isNaN(e)||!isFinite(e))return Cr;if(0>e)return fe(Et(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=nc;return new z(t,0)}function Dy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return fe(Dy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Et(Math.pow(t,8)),r=Cr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Et(Math.pow(t,s)),r=r.R(s).add(Et(o))):(r=r.R(n),r=r.add(Et(o)))}return r}var nc=4294967296,Cr=Md(0),rc=Md(1),Yf=Md(16777216);k=z.prototype;k.ea=function(){if(Je(this))return-fe(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:nc+r)*t,t*=nc}return e};k.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Dt(this))return"0";if(Je(this))return"-"+fe(this).toString(e);for(var t=Et(Math.pow(e,6)),n=this,r="";;){var i=Yo(n,t).g;n=Xo(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Dt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Dt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Je(e){return e.h==-1}k.X=function(e){return e=Xo(this,e),Je(e)?-1:Dt(e)?0:1};function fe(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new z(n,~e.h).add(rc)}k.abs=function(){return Je(this)?fe(this):this};k.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new z(n,n[n.length-1]&-2147483648?-1:0)};function Xo(e,t){return e.add(fe(t))}k.R=function(e){if(Dt(this)||Dt(e))return Cr;if(Je(this))return Je(e)?fe(this).R(fe(e)):fe(fe(this).R(e));if(Je(e))return fe(this.R(fe(e)));if(0>this.X(Yf)&&0>e.X(Yf))return Et(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Ks(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ks(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ks(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ks(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new z(n,0)};function Ks(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function si(e,t){this.g=e,this.h=t}function Yo(e,t){if(Dt(t))throw Error("division by zero");if(Dt(e))return new si(Cr,Cr);if(Je(e))return t=Yo(fe(e),t),new si(fe(t.g),fe(t.h));if(Je(t))return t=Yo(e,fe(t)),new si(fe(t.g),t.h);if(30<e.g.length){if(Je(e)||Je(t))throw Error("slowDivide_ only works with positive integers.");for(var n=rc,r=t;0>=r.X(e);)n=Qf(n),r=Qf(r);var i=sr(n,1),s=sr(r,1);for(r=sr(r,2),n=sr(n,2);!Dt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=sr(r,1),n=sr(n,1)}return t=Xo(e,i.R(t)),new si(i,t)}for(i=Cr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Et(n),o=s.R(t);Je(o)||0<o.X(e);)n-=r,s=Et(n),o=s.R(t);Dt(s)&&(s=rc),i=i.add(s),e=Xo(e,o)}return new si(i,e)}k.gb=function(e){return Yo(this,e).h};k.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new z(n,this.h&e.h)};k.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new z(n,this.h|e.h)};k.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new z(n,this.h^e.h)};function Qf(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new z(n,e.h)}function sr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new z(i,e.h)}it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;kd.NO_ERROR=0;kd.TIMEOUT=8;kd.HTTP_ERROR=6;LT.COMPLETE="complete";MT.EventType=ms;ms.OPEN="a";ms.CLOSE="b";ms.ERROR="c";ms.MESSAGE="d";ce.prototype.listen=ce.prototype.O;ne.prototype.listenOnce=ne.prototype.P;ne.prototype.getLastError=ne.prototype.Sa;ne.prototype.getLastErrorCode=ne.prototype.Ia;ne.prototype.getStatus=ne.prototype.da;ne.prototype.getResponseJson=ne.prototype.Wa;ne.prototype.getResponseText=ne.prototype.ja;ne.prototype.send=ne.prototype.ha;ne.prototype.setWithCredentials=ne.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=Et;z.fromString=Dy;var ak=z;const Jf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Ta("@firebase/firestore");function Ve(e,...t){if($r.logLevel<=F.DEBUG){const n=t.map($d);$r.debug(`Firestore (${_s}): ${e}`,...n)}}function Ud(e,...t){if($r.logLevel<=F.ERROR){const n=t.map($d);$r.error(`Firestore (${_s}): ${e}`,...n)}}function lk(e,...t){if($r.logLevel<=F.WARN){const n=t.map($d);$r.warn(`Firestore (${_s}): ${e}`,...n)}}function $d(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e="Unexpected state"){const t=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+e;throw Ud(t),new Error(t)}function ic(e,t){e||Bd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ie extends st{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(we.UNAUTHENTICATED))}shutdown(){}}class ck{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dk{constructor(t){this.t=t,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ic(typeof r.accessToken=="string"),new Ly(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ic(t===null||typeof t=="string"),new we(t)}}class hk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new hk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mk{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Ve("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ic(typeof n.token=="string"),this.R=n.token,new pk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=gk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function My(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Qo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Qo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zf,B;(B=Zf||(Zf={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ak([4294967295,4294967295],0);function Bl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(t,n,r=1e3,i=1.5,s=6e4){this._i=t,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&Ve("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new jd(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ie(Ee.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _k(e,t){if(Ud("AsyncQueue",`${t}: ${e}`),My(e))return new Ie(Ee.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=we.UNAUTHENTICATED,this.clientId=vk.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Ve("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Ve("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ie(Ee.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=_k(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Map;function Ik(e,t,n,r){if(t===!0&&r===!0)throw new Ie(Ee.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Sk(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Bd()}function Tk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ie(Ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sk(e);throw new Ie(Ee.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ie(Ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ie(Ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ik("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uy((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ie(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ie(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ie(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $y{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ie(Ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ie(Ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tp(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uk;switch(r.type){case"firstParty":return new fk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ie(Ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ep.get(n);r&&(Ve("ComponentProvider","Removing Datastore"),ep.delete(n),r.terminate())}(this),Promise.resolve()}}function kk(e,t,n,r={}){var i;const s=(e=Tk(e,$y))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&lk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=we.MOCK_USER;else{a=tv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Ie(Ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new we(u)}e._authCredentials=new ck(new Ly(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new wk(this,"async_queue_retry"),this.ou=()=>{const n=Bl();n&&Ve("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=Bl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=Bl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new Rr;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!My(t))throw t;Ve("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ud("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(t,n,r){this._u(),this.su.indexOf(t)>-1&&(n=0);const i=jd.createAndSchedule(this,t,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&Bd()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}class Rk extends $y{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Ck}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pk(this),this._firestoreClient.terminate()}}function Ak(e,t){const n=typeof e=="object"?e:ka(),r=typeof e=="string"?e:t||"(default)",i=_n(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jg("firestore");s&&kk(i,...s)}return i}function Pk(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new yk(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Uy(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Ek(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){_s=i})(tr),pt(new rt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Rk(new dk(r.getProvider("auth-internal")),new mk(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ie(Ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),je(Jf,"4.2.0",t),je(Jf,"4.2.0","esm2017")})();function Fd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function np(e){return e!==void 0&&e.enterprise!==void 0}class Nk{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function By(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xk=By,jy=new er("auth","Firebase",By());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Ta("@firebase/auth");function Ok(e,...t){Jo.logLevel<=F.WARN&&Jo.warn(`Auth (${tr}): ${e}`,...t)}function uo(e,...t){Jo.logLevel<=F.ERROR&&Jo.error(`Auth (${tr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,...t){throw bd(e,...t)}function kt(e,...t){return bd(e,...t)}function Dk(e,t,n){const r=Object.assign(Object.assign({},xk()),{[t]:n});return new er("auth","Firebase",r).create(t,{appName:e.name})}function bd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return jy.create(e,...t)}function D(e,t,...n){if(!e)throw bd(t,...n)}function Lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw uo(t),new Error(t)}function zt(e,t){e||Lt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Lk(){return rp()==="http:"||rp()==="https:"}function rp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lk()||nv()||"connection"in navigator)?navigator.onLine:!0}function Uk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,n){this.shortDelay=t,this.longDelay=n,zt(n>t,"Short delay should be less than long delay!"),this.isMobile=aE()||uE()}get(){return Mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(e,t){zt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new Es(3e4,6e4);function nr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Sn(e,t,n,r,i={}){return by(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ds(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Fy.fetch()(zy(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function by(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$k),t);try{const i=new jk(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gs(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dk(e,c,u);mt(e,c)}}catch(i){if(i instanceof st)throw i;mt(e,"network-request-failed",{message:String(i)})}}async function Is(e,t,n,r,i={}){const s=await Sn(e,t,n,r,i);return"mfaPendingCredential"in s&&mt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function zy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?zd(e.config,i):`${e.config.apiScheme}://${i}`}class jk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),Bk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(e,t,r);return i.customData._tokenResponse=n,i}async function Fk(e,t){return Sn(e,"GET","/v2/recaptchaConfig",nr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(e,t){return Sn(e,"POST","/v1/accounts:delete",t)}async function zk(e,t){return Sn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Vk(e,t=!1){const n=De(e),r=await n.getIdToken(t),i=Vd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ri(jl(i.auth_time)),issuedAtTime:Ri(jl(i.iat)),expirationTime:Ri(jl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jl(e){return Number(e)*1e3}function Vd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yg(n);return i?JSON.parse(i):(uo("Failed to decode base64 JWT payload"),null)}catch(i){return uo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hk(e){const t=Vd(e);return D(t,"internal-error"),D(typeof t.exp<"u","internal-error"),D(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof st&&Wk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Wk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Br(e,zk(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Xk(s.providerUserInfo):[],a=Gk(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function Kk(e){const t=De(e);await Zo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Gk(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Xk(e){return e.map(t=>{var{providerId:n}=t,r=Fd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(e,t){const n=await by(e,{},async()=>{const r=ds({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=zy(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){D(t.idToken,"internal-error"),D(typeof t.idToken<"u","internal-error"),D(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Hk(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return D(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Yk(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(D(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){D(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class jn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Fd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Br(this,this.stsTokenManager.getToken(this.auth,t));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Vk(this,t)}reload(){return Kk(this)}_assign(t){this!==t&&(D(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new jn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Br(this,bk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:S,providerData:C,stsTokenManager:A}=n;D(m&&A,t,"internal-error");const N=is.fromJSON(this.name,A);D(typeof m=="string",t,"internal-error"),Wt(f,t.name),Wt(p,t.name),D(typeof v=="boolean",t,"internal-error"),D(typeof S=="boolean",t,"internal-error"),Wt(g,t.name),Wt(y,t.name),Wt(w,t.name),Wt(E,t.name),Wt(h,t.name),Wt(d,t.name);const x=new jn({uid:m,auth:t,email:p,emailVerified:v,displayName:f,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:N,createdAt:h,lastLoginAt:d});return C&&Array.isArray(C)&&(x.providerData=C.map(O=>Object.assign({},O))),E&&(x._redirectEventId=E),x}static async _fromIdTokenResponse(t,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Zo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Map;function Mt(e){zt(e instanceof Function,"Expected a class definition");let t=ip.get(e);return t?(zt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ip.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Hy.type="NONE";const sp=Hy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t,n){return`firebase:${e}:${t}:${n}`}class Ar{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=co(this.userKey,i.apiKey,s),this.fullPersistenceKey=co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?jn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ar(Mt(sp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mt(sp);const o=co(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=jn._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ar(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ar(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ky(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xy(t))return"Blackberry";if(Yy(t))return"Webos";if(Hd(t))return"Safari";if((t.includes("chrome/")||qy(t))&&!t.includes("edge/"))return"Chrome";if(Gy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wy(e=Ce()){return/firefox\//i.test(e)}function Hd(e=Ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qy(e=Ce()){return/crios\//i.test(e)}function Ky(e=Ce()){return/iemobile/i.test(e)}function Gy(e=Ce()){return/android/i.test(e)}function Xy(e=Ce()){return/blackberry/i.test(e)}function Yy(e=Ce()){return/webos/i.test(e)}function za(e=Ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Qk(e=Ce()){var t;return za(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Jk(){return cE()&&document.documentMode===10}function Qy(e=Ce()){return za(e)||Gy(e)||Yy(e)||Xy(e)||/windows phone/i.test(e)||Ky(e)}function Zk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(e,t=[]){let n;switch(e){case"Browser":n=op(Ce());break;case"Worker":n=`${op(Ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(e,t={}){return Sn(e,"GET","/v2/passwordPolicy",nr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=6;class rC{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ap(this),this.idTokenSubscription=new ap(this),this.beforeStateQueue=new eC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Zo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Uk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?De(t):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&D(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await tC(this),n=new rC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new er("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mt(t)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Ok(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(e){return De(e)}class ap{constructor(t){this.auth=t,this.observer=null,this.addObserver=gE(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Zy(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sC().appendChild(r)})}function oC(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const aC="https://www.google.com/recaptcha/enterprise.js?render=",lC="recaptcha-enterprise",uC="NO_RECAPTCHA";class cC{constructor(t){this.type=lC,this.auth=rr(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Nk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;np(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(uC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&np(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Zy(aC+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ea(e,t,n,r=!1){const i=new cC(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(e,t){const n=_n(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ki(s,t??{}))return i;mt(i,"already-initialized")}return n.initialize({options:t})}function hC(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function fC(e,t,n){const r=rr(e);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=e0(t),{host:o,port:a}=pC(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mC()}function e0(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function pC(e){const t=e0(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lp(o)}}}function lp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function mC(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(t){return Lt("not implemented")}_linkToIdToken(t,n){return Lt("not implemented")}_getReauthenticationResolver(t){return Lt("not implemented")}}async function gC(e,t){return Sn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(e,t){return Is(e,"POST","/v1/accounts:signInWithPassword",nr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(e,t){return Is(e,"POST","/v1/accounts:signInWithEmailLink",nr(e,t))}async function yC(e,t){return Is(e,"POST","/v1/accounts:signInWithEmailLink",nr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Wd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ss(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ss(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ea(t,r,"signInWithPassword");return Fl(t,i)}else return Fl(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ea(t,r,"signInWithPassword");return Fl(t,s)}else return Promise.reject(i)});case"emailLink":return vC(t,{email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return gC(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yC(t,{idToken:n,email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(e,t){return Is(e,"POST","/v1/accounts:signInWithIdp",nr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="http://localhost";class Xn extends Wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Xn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Fd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Pr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Pr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Pr(t,n)}buildRequest(){const t={requestUri:wC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ds(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EC(e){const t=hi(fi(e)).link,n=t?hi(fi(t)).deep_link_id:null,r=hi(fi(e)).deep_link_id;return(r?hi(fi(r)).link:null)||r||n||t||e}class qd{constructor(t){var n,r,i,s,o,a;const l=hi(fi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=_C((i=l.mode)!==null&&i!==void 0?i:null);D(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=EC(t);try{return new qd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(t,n){return ss._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=qd.parseLink(n);return D(r,"argument-error"),ss._fromEmailAndCode(t,r.code,r.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends t0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ss{constructor(){super("facebook.com")}static credential(t){return Xn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Xn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ss{constructor(){super("github.com")}static credential(t){return Xn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ss{constructor(){super("twitter.com")}static credential(t,n){return Xn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(e,t){return Is(e,"POST","/v1/accounts:signUp",nr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await jn._fromIdTokenResponse(t,r,i),o=up(r);return new Yn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=up(r);return new Yn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function up(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends st{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ta.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ta(t,n,r,i)}}function n0(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ta._fromErrorAndOperation(e,s,t,r):s})}async function IC(e,t,n=!1){const r=await Br(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Yn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Br(e,n0(r,i,t,e),n);D(s.idToken,r,"internal-error");const o=Vd(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(e.uid===a,r,"user-mismatch"),Yn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(e,t,n=!1){const r="signIn",i=await n0(e,r,t),s=await Yn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function TC(e,t){return r0(rr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(e){const t=rr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function kC(e,t,n){var r;const i=rr(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ea(i,s,"signUpPassword");o=bl(i,u)}else o=bl(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ea(i,s,"signUpPassword");return bl(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&i0(e),u}),l=await Yn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function CC(e,t,n){return TC(De(e),Kr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&i0(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(e,t){return Sn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=De(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Br(r,RC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(e,t){return De(e).setPersistence(t)}function NC(e,t,n,r){return De(e).onIdTokenChanged(t,n,r)}function xC(e,t,n){return De(e).beforeAuthStateChanged(t,n)}const na="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(na,"1"),this.storage.removeItem(na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(){const e=Ce();return Hd(e)||za(e)}const DC=1e3,LC=10;class o0 extends s0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OC()&&Zk(),this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jk()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,LC):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},DC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}o0.type="LOCAL";const a0=o0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0 extends s0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}l0.type="SESSION";const u0=l0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Va(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await MC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Kd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function $C(e){Ct().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function BC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jC(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function FC(){return c0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="firebaseLocalStorageDb",bC=1,ra="firebaseLocalStorage",h0="fbase_key";class Ts{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ha(e,t){return e.transaction([ra],t?"readwrite":"readonly").objectStore(ra)}function zC(){const e=indexedDB.deleteDatabase(d0);return new Ts(e).toPromise()}function oc(){const e=indexedDB.open(d0,bC);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ra,{keyPath:h0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ra)?t(r):(r.close(),await zC(),t(await oc()))})})}async function cp(e,t,n){const r=Ha(e,!0).put({[h0]:t,value:n});return new Ts(r).toPromise()}async function VC(e,t){const n=Ha(e,!1).get(t),r=await new Ts(n).toPromise();return r===void 0?null:r.value}function dp(e,t){const n=Ha(e,!0).delete(t);return new Ts(n).toPromise()}const HC=800,WC=3;class f0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>WC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(FC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await BC(),!this.activeServiceWorker)return;this.sender=new UC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||jC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await oc();return await cp(t,na,"1"),await dp(t,na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>VC(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>dp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ha(i,!1).getAll();return new Ts(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f0.type="LOCAL";const qC=f0;new Es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(e,t){return t?Mt(t):(D(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends Wd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Pr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Pr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Pr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function GC(e){return r0(e.auth,new Gd(e),e.bypassAuthState)}function XC(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),SC(n,new Gd(e),e.bypassAuthState)}async function YC(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),IC(n,new Gd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return GC;case"linkViaPopup":case"linkViaRedirect":return YC;case"reauthViaPopup":case"reauthViaRedirect":return XC;default:mt(this.auth,"internal-error")}}resolve(t){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=new Es(2e3,1e4);class wr extends p0{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return D(t,this.auth,"internal-error"),t}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const t=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,QC.get())};t()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="pendingRedirect",ho=new Map;class ZC extends p0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ho.get(this.auth._key());if(!t){try{const r=await eR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ho.set(this.auth._key(),t)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eR(e,t){const n=rR(t),r=nR(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tR(e,t){ho.set(e._key(),t)}function nR(e){return Mt(e._redirectPersistence)}function rR(e){return co(JC,e.config.apiKey,e.name)}async function iR(e,t,n=!1){const r=rr(e),i=KC(r,t),o=await new ZC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=10*60*1e3;class oR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!aR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!m0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sR&&this.cachedEventUids.clear(),this.cachedEventUids.has(hp(t))}saveEventToCache(t){this.cachedEventUids.add(hp(t)),this.lastProcessedEventTime=Date.now()}}function hp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function m0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function aR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m0(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(e,t={}){return Sn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cR=/^https?/;async function dR(e){if(e.config.emulator)return;const{authorizedDomains:t}=await lR(e);for(const n of t)try{if(hR(n))return}catch{}mt(e,"unauthorized-domain")}function hR(e){const t=sc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cR.test(n))return!1;if(uR.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new Es(3e4,6e4);function fp(){const e=Ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function pR(e){return new Promise((t,n)=>{var r,i,s;function o(){fp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fp(),n(kt(e,"network-request-failed"))},timeout:fR.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)o();else{const a=oC("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(kt(e,"network-request-failed"))},Zy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw fo=null,t})}let fo=null;function mR(e){return fo=fo||pR(e),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new Es(5e3,15e3),vR="__/auth/iframe",yR="emulator/auth/iframe",wR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ER(e){const t=e.config;D(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zd(t,yR):`https://${e.config.authDomain}/${vR}`,r={apiKey:t.apiKey,appName:e.name,v:tr},i=_R.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ds(r).slice(1)}`}async function IR(e){const t=await mR(e),n=Ct().gapi;return D(n,e,"internal-error"),t.open({where:document.body,url:ER(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(e,"network-request-failed"),a=Ct().setTimeout(()=>{s(o)},gR.get());function l(){Ct().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TR=500,kR=600,CR="_blank",RR="http://localhost";class pp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AR(e,t,n,r=TR,i=kR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ce().toLowerCase();n&&(a=qy(u)?CR:n),Wy(u)&&(t=t||RR,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(Qk(u)&&a!=="_self")return PR(t||"",a),new pp(null);const f=window.open(t||"",a,c);D(f,e,"popup-blocked");try{f.focus()}catch{}return new pp(f)}function PR(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="__/auth/handler",xR="emulator/auth/handler",OR=encodeURIComponent("fac");async function mp(e,t,n,r,i,s){D(e.config.authDomain,e,"auth-domain-config-required"),D(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:tr,eventId:i};if(t instanceof t0){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",mE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(t instanceof Ss){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${OR}=${encodeURIComponent(l)}`:"";return`${DR(e)}?${ds(a).slice(1)}${u}`}function DR({config:e}){return e.emulator?zd(e,xR):`https://${e.authDomain}/${NR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="webStorageSupport";class LR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u0,this._completeRedirectFn=iR,this._overrideRedirectResult=tR}async _openPopup(t,n,r,i){var s;zt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mp(t,n,r,sc(),i);return AR(t,o,Kd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await mp(t,n,r,sc(),i);return $C(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await IR(t),r=new oR(t);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(zl,{type:zl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zl];o!==void 0&&n(!!o),mt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qy()||Hd()||za()}}const MR=LR;var gp="@firebase/auth",vp="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BR(e){pt(new rt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jy(e)},u=new iC(r,i,s,l);return hC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),pt(new rt("auth-internal",t=>{const n=rr(t.getProvider("auth").getImmediate());return(r=>new UR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(gp,vp,$R(e)),je(gp,vp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=5*60,FR=ev("authIdTokenMaxAge")||jR;let yp=null;const bR=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FR)return;const i=n==null?void 0:n.token;yp!==i&&(yp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zR(e=ka()){const t=_n(e,"auth");if(t.isInitialized())return t.getImmediate();const n=dC(e,{popupRedirectResolver:MR,persistence:[qC,a0,u0]}),r=ev("authTokenSyncURL");if(r){const s=bR(r);xC(n,s,()=>s(n.currentUser)),NC(n,o=>s(o))}const i=Qg("auth");return i&&fC(n,`http://${i}`),n}BR("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="firebasestorage.googleapis.com",v0="storageBucket",VR=2*60*1e3,HR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends st{constructor(t,n,r=0){super(Vl(t),`Firebase Storage: ${n} (${Vl(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Vl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var J;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(J||(J={}));function Vl(e){return"storage/"+e}function Xd(){const e="An unknown error occurred, please check the error payload for server response.";return new Z(J.UNKNOWN,e)}function WR(e){return new Z(J.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function qR(e){return new Z(J.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KR(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z(J.UNAUTHENTICATED,e)}function GR(){return new Z(J.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function XR(e){return new Z(J.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function YR(){return new Z(J.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QR(){return new Z(J.CANCELED,"User canceled the upload/download.")}function JR(e){return new Z(J.INVALID_URL,"Invalid URL '"+e+"'.")}function ZR(e){return new Z(J.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function eA(){return new Z(J.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+v0+"' property when initializing the app?")}function tA(){return new Z(J.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nA(){return new Z(J.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rA(e){return new Z(J.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ac(e){return new Z(J.INVALID_ARGUMENT,e)}function y0(){return new Z(J.APP_DELETED,"The Firebase app was deleted.")}function iA(e){return new Z(J.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ai(e,t){return new Z(J.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function oi(e){throw new Z(J.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=He.makeFromUrl(t,n)}catch{return new He(t,"")}if(r.path==="")return r;throw ZR(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},w=n===g0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",h=new RegExp(`^https?://${w}/${i}/${E}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<m.length;v++){const S=m[v],C=S.regex.exec(t);if(C){const A=C[S.indices.bucket];let N=C[S.indices.path];N||(N=""),r=new He(A,N),S.postModify(r);break}}if(r==null)throw JR(t);return r}}class sA{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,t.apply(null,E))}function f(E){i=setTimeout(()=>{i=null,e(g,l())},E)}function p(){s&&clearTimeout(s)}function g(E,...h){if(u){p();return}if(E){p(),c.call(null,E,...h);return}if(l()||o){p(),c.call(null,E,...h);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,f(m)}let y=!1;function w(E){y||(y=!0,p(),!u&&(i!==null?(E||(a=2),clearTimeout(i),f(0)):E||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function aA(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(e){return e!==void 0}function uA(e){return typeof e=="object"&&!Array.isArray(e)}function Yd(e){return typeof e=="string"||e instanceof String}function wp(e){return Qd()&&e instanceof Blob}function Qd(){return typeof Blob<"u"&&!lE()}function _p(e,t,n,r){if(r<t)throw ac(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw ac(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function w0(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Fn||(Fn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(t,n,r,i,s,o,a,l,u,c,f,p=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Xs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Fn.NO_ERROR,l=s.getStatus();if(!a||cA(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Fn.ABORT;r(!1,new Xs(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Xs(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lA(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Xd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?y0():QR();o(l)}else{const l=YR();o(l)}};this.canceled_?n(!1,new Xs(!1,null,!0)):this.backoffId_=oA(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&aA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xs{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function hA(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function fA(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function pA(e,t){t&&(e["X-Firebase-GMPID"]=t)}function mA(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function gA(e,t,n,r,i,s,o=!0){const a=w0(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return pA(u,t),hA(u,n),fA(u,s),mA(u,r),new dA(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yA(...e){const t=vA();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Qd())return new Blob(e);throw new Z(J.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wA(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(e){if(typeof atob>"u")throw rA("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hl{constructor(t,n){this.data=t,this.contentType=n||null}}function EA(e,t){switch(e){case It.RAW:return new Hl(_0(t));case It.BASE64:case It.BASE64URL:return new Hl(E0(e,t));case It.DATA_URL:return new Hl(SA(t),TA(t))}throw Xd()}function _0(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function IA(e){let t;try{t=decodeURIComponent(e)}catch{throw Ai(It.DATA_URL,"Malformed data URL.")}return _0(t)}function E0(e,t){switch(e){case It.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw Ai(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case It.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw Ai(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_A(t)}catch(i){throw i.message.includes("polyfill")?i:Ai(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class I0{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Ai(It.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function SA(e){const t=new I0(e);return t.base64?E0(It.BASE64,t.rest):IA(t.rest)}function TA(e){return new I0(e).contentType}function kA(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,n){let r=0,i="";wp(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(wp(this.data_)){const r=this.data_,i=wA(r,t,n);return i===null?null:new Zt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Zt(r,!0)}}static getBlob(...t){if(Qd()){const n=t.map(r=>r instanceof Zt?r.data_:r);return new Zt(yA.apply(null,n))}else{const n=t.map(o=>Yd(o)?EA(It.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(e){let t;try{t=JSON.parse(e)}catch{return null}return uA(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function RA(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function T0(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(e,t){return t}class Re{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||AA}}let Ys=null;function PA(e){return!Yd(e)||e.length<2?e:T0(e)}function k0(){if(Ys)return Ys;const e=[];e.push(new Re("bucket")),e.push(new Re("generation")),e.push(new Re("metageneration")),e.push(new Re("name","fullPath",!0));function t(s,o){return PA(o)}const n=new Re("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Re("size");return i.xform=r,e.push(i),e.push(new Re("timeCreated")),e.push(new Re("updated")),e.push(new Re("md5Hash",null,!0)),e.push(new Re("cacheControl",null,!0)),e.push(new Re("contentDisposition",null,!0)),e.push(new Re("contentEncoding",null,!0)),e.push(new Re("contentLanguage",null,!0)),e.push(new Re("contentType",null,!0)),e.push(new Re("metadata","customMetadata",!0)),Ys=e,Ys}function NA(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new He(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function xA(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return NA(r,e),r}function C0(e,t,n){const r=S0(t);return r===null?null:xA(e,r,n)}function OA(e,t,n,r){const i=S0(t);if(i===null||!Yd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=e.bucket,f=e.fullPath,p="/b/"+o(c)+"/o/"+o(f),g=Jd(p,n,r),y=w0({alt:"media",token:u});return g+y})[0]}function DA(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class R0{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(e){if(!e)throw Xd()}function LA(e,t){function n(r,i){const s=C0(e,i,t);return A0(s!==null),s}return n}function MA(e,t){function n(r,i){const s=C0(e,i,t);return A0(s!==null),OA(s,i,e.host,e._protocol)}return n}function P0(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=GR():i=KR():n.getStatus()===402?i=qR(e.bucket):n.getStatus()===403?i=XR(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function UA(e){const t=P0(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=WR(e.path)),s.serverResponse=i.serverResponse,s}return n}function $A(e,t,n){const r=t.fullServerUrl(),i=Jd(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new R0(i,s,MA(e,n),o);return a.errorHandler=UA(t),a}function BA(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function jA(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=BA(null,t)),r}function FA(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let v=0;v<2;v++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=jA(t,r,i),c=DA(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Zt.getBlob(f,r,p);if(g===null)throw tA();const y={name:u.fullPath},w=Jd(s,e.host,e._protocol),E="POST",h=e.maxUploadRetryTime,d=new R0(w,E,LA(e,n),h);return d.urlParams=y,d.headers=o,d.body=g.uploadData(),d.errorHandler=P0(t),d}class bA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw oi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw oi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw oi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class zA extends bA{initXhr(){this.xhr_.responseType="text"}}function N0(){return new zA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n){this._service=t,n instanceof He?this._location=n:this._location=He.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Qn(t,n)}get root(){const t=new He(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return T0(this._location.path)}get storage(){return this._service}get parent(){const t=CA(this._location.path);if(t===null)return null;const n=new He(this._location.bucket,t);return new Qn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw iA(t)}}function VA(e,t,n){e._throwIfRoot("uploadBytes");const r=FA(e.storage,e._location,k0(),new Zt(t,!0),n);return e.storage.makeRequestWithTokens(r,N0).then(i=>({metadata:i,ref:e}))}function HA(e){e._throwIfRoot("getDownloadURL");const t=$A(e.storage,e._location,k0());return e.storage.makeRequestWithTokens(t,N0).then(n=>{if(n===null)throw nA();return n})}function WA(e,t){const n=RA(e._location.path,t),r=new He(e._location.bucket,n);return new Qn(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(e){return/^[A-Za-z]+:\/\//.test(e)}function KA(e,t){return new Qn(e,t)}function x0(e,t){if(e instanceof Zd){const n=e;if(n._bucket==null)throw eA();const r=new Qn(n,n._bucket);return t!=null?x0(r,t):r}else return t!==void 0?WA(e,t):e}function GA(e,t){if(t&&qA(t)){if(e instanceof Zd)return KA(e,t);throw ac("To use ref(service, url), the first argument must be a Storage instance.")}else return x0(e,t)}function Ep(e,t){const n=t==null?void 0:t[v0];return n==null?null:He.makeFromBucketSpec(n,e)}function XA(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:tv(i,e.app.options.projectId))}class Zd{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=g0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VR,this._maxUploadRetryTime=HR,this._requests=new Set,i!=null?this._bucket=He.makeFromBucketSpec(i,this._host):this._bucket=Ep(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=He.makeFromBucketSpec(this._url,t):this._bucket=Ep(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){_p("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){_p("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Qn(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new sA(y0());{const o=gA(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Ip="@firebase/storage",Sp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="storage";function YA(e,t,n){return e=De(e),VA(e,t,n)}function QA(e){return e=De(e),HA(e)}function JA(e,t){return e=De(e),GA(e,t)}function ZA(e=ka(),t){e=De(e);const r=_n(e,O0).getImmediate({identifier:t}),i=Jg("storage");return i&&eP(r,...i),r}function eP(e,t,n,r={}){XA(e,t,n,r)}function tP(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Zd(n,r,i,t,tr)}function nP(){pt(new rt(O0,tP,"PUBLIC").setMultipleInstances(!0)),je(Ip,Sp,""),je(Ip,Sp,"esm2017")}nP();const rP={apiKey:"AIzaSyB5WFVjiTF-CVmspM1eIpDhcy3_tqnMa2g",authDomain:"invictus-026.firebaseapp.com",projectId:"invictus-026",storageBucket:"invictus-026.appspot.com",messagingSenderId:"562975682368",appId:"1:562975682368:web:a4b5a31b85c7743f0814a5",measurementId:"G-HYBKCZF0TX"},Wa=av(rP);nT(Wa);Ak(Wa);const po=zR(Wa);new Nt;const iP=ZA(Wa);PC(po,a0).then(()=>{console.log("Session persistence set successfully.")}).catch(e=>{console.error("Error setting session persistence:",e)});const sP=({setIsAuth:e,setUserData:t,isAuth:n})=>{const[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(!1),[u,c]=T.useState(""),[f,p]=T.useState(""),[g,y]=T.useState(""),[w,E]=T.useState(null),[h,d]=T.useState(""),m=id(),v=T.useRef(null),S=async()=>{if(!w)return;const x=JA(iP,`profileImages/${w.name}`);try{await YA(x,w);const O=await QA(x);d(O)}catch(O){alert(O)}},C=()=>{kC(po,r,s).then(x=>{l(!0),x.user,alert("Account created successfully")}).catch(x=>{x.code;const O=x.message;alert(O)})},A=()=>{AC(po.currentUser,{displayName:f,regNumber:g,fullName:u,photoURL:h}).then(()=>{alert("registration successful")}).catch(x=>{alert(x)})},N=()=>{CC(po,r,s).then(x=>{const O=x.user;t(O),localStorage.setItem("userData",O),e(!0),localStorage.setItem("isAuth","true"),m("/")}).catch(x=>{x.code;const O=x.message;alert(O)})};return I.jsx("div",{className:"flex justify-center items-center min-h-[100vh] text-center rxbg",children:a?I.jsxs("div",{className:"bg-[#ffffffee] p-4",children:[I.jsx("p",{className:"text-[2rem] font-semibold text-green-600 mb-8",children:"INVICTUS WEB APP"}),I.jsxs("div",{className:" flex flex-col",children:[I.jsx("label",{htmlFor:"fullName",className:"mt-2 text-[1rem] text-green-900 font-semibold",children:"Full Name"}),I.jsx("input",{type:"text",name:"fullName",value:u,className:"p-1 text-[1.2rem] rounded border border-green-900",placeholder:"full name on class list",onChange:x=>c(x.target.value)}),I.jsx("label",{htmlFor:"regNumber",className:"mt-2 text-[1rem] text-green-900 font-semibold",children:"Reg Number"}),I.jsx("input",{type:"",name:"regNumber",value:g,onChange:x=>y(x.target.value),className:"p-1 text-[1.2rem] rounded border border-green-900",placeholder:"reg number"}),I.jsx("label",{htmlFor:"username",className:"mt-2 text-[1rem] text-green-900 font-semibold",children:"Username"}),I.jsx("input",{type:"text",name:"username",value:f,onChange:x=>p(x.target.value),className:"p-1 text-[1.2rem] rounded border border-green-900",placeholder:"username or nickname"}),I.jsx("label",{htmlFor:"picture",className:"mt-2 text-[1rem] text-green-900 font-semibold",children:"Picture"}),I.jsx("input",{type:"file",name:"picture",accept:"image/*",className:"mb-4 w-full",id:"image",ref:v,onChange:x=>{E(x.target.files[0]),S()}}),h&&I.jsx(I.Fragment,{children:I.jsx("img",{src:h,alt:"profile picture",className:"m-auto w-2/3 p-4"})})]}),I.jsx("div",{className:"flex flex-col justify-center items-center gap-2",children:I.jsx("button",{className:" py-1 px-2 bg-green-600 rounded-md trans text-white hover:scale-110 font-semibold",onClick:()=>{A(),N()},children:"REGISTER"})})]}):I.jsxs("div",{className:"bg-[#ffffffee] p-4",children:[I.jsx("p",{className:"text-[2rem] font-semibold text-green-600 mb-8",children:"INVICTUS WEB APP"}),I.jsxs("div",{className:" flex flex-col",children:[I.jsx("label",{htmlFor:"email",className:" text-[1.2rem] text-green-900 font-semibold",children:"Email"}),I.jsx("input",{type:"email",name:"email",value:r,placeholder:"email",className:"p-2 text-[1.2rem] rounded bg-white border border-green-900",onChange:x=>{i(x.target.value)}}),I.jsx("label",{htmlFor:"password",className:"mt-2 text-[1.2rem] text-green-900 font-semibold",children:"Password"}),I.jsx("input",{type:"password",name:"password",className:"p-2 text-[1.2rem] rounded border border-green-900 mb-4",value:s,placeholder:"password",onChange:x=>{o(x.target.value)}})]}),I.jsxs("div",{className:"flex flex-col justify-center items-center gap-2",children:[I.jsx("button",{className:" py-1 px-2 bg-green-600 rounded-md trans text-white hover:scale-110 font-semibold",onClick:N,children:"LOGIN"}),I.jsx("button",{className:"  py-1 px-2 bg-green-600 rounded-md trans text-white hover:scale-110 font-semibold",onClick:C,children:"CREATE ACCOUNT"})]})]})})},oP=({userData:e,isAuth:t})=>(id(),I.jsx(I.Fragment,{})),aP=({isAuth:e,userData:t})=>{const n=id();return T.useEffect(()=>{!e&&n("/login")},[]),I.jsx("div",{children:"Dashboard"})},lP=()=>I.jsx("div",{children:"ExamList"}),uP=()=>{const[e,t]=T.useState(1200),[n,r]=T.useState(0),[i,s]=T.useState(50),[o,a]=T.useState(0);T.useState("");const l=Math.floor(e/60%60),u=Math.floor(e%60),c=Math.floor(e/60/60),f=()=>{const E=g.filter(h=>h.answered===!0);r(E.length)},p=(E,h)=>{const d=g.map((m,v)=>v===o?{...m,answered:!0,picked:h}:m);y(d),f()},[g,y]=T.useState([{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0},{question:"Sal sedativum is used in the treatment of ………………….",optionA:"Cancer",optionB:"Inflammatory disorder",optionC:"Goiter",optionD:"Infectious diseases",answer:"d",answered:!1,picked:0},{question:"Sodium salt of boric acid is called ………..",optionA:"Bomex",optionB:"Botex",optionC:"Borax",optionD:"None of the options",answer:"c",answered:!1,picked:0},{question:"The central atom in cytomib is…………………………….",optionA:"Sodium",optionB:"Potassium",optionC:"Boron",optionD:"Lithium",answer:"c",answered:!1,picked:0}]);T.useEffect(()=>{if(!(e<=0)){const E=setInterval(()=>{t(h=>h-1)},1e3);return()=>{clearInterval(E)}}},[e]);const w=E=>{const h=E.key.toUpperCase();h==="N"&&o!==i-1&&(a(d=>d+1),f()),h==="P"&&o!==0&&(a(d=>d-1),f()),h==="A"&&p(o,1),h==="B"&&p(o,2),h==="C"&&p(o,3),h==="D"&&p(o,4)};return T.useEffect(()=>(window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}),[o]),I.jsxs("div",{className:" p-4 pt-10 lg:flex justify-between gap-4",children:[I.jsxs("div",{className:"uppercase lg:w-[30%] hidden lg:block",children:[I.jsx("img",{src:"",alt:"",className:""}),I.jsx("p",{className:"",children:"Agbo Sobechukwu Malachy"}),I.jsx("p",{className:"",children:"2019/250258"}),I.jsx("p",{className:"",children:"pch232"}),I.jsx("p",{className:"",children:"time"}),I.jsxs("p",{className:" lowercase",children:[c," : ",l," : ",u]}),I.jsx("button",{children:"submit"})]}),I.jsxs("div",{className:"lg:w-[68%]",children:[I.jsxs("div",{className:"flex justify-between md:text-[1.5rem] text-[1.3rem] font-bold ",children:[I.jsxs("p",{className:"",children:["PCH232: ",o+1]}),"Answered: ",n," / ",i]}),I.jsx("div",{className:"lg:hidden",children:I.jsxs("p",{className:" font-semibold text-center text-[1.2rem]",children:[c," : ",l," : ",u]})}),I.jsx("div",{className:" my-10",children:g.map((E,h)=>I.jsxs("div",{className:`${h===o?"text-[1.1rem] flex flex-col gap-2":"hidden"}`,children:[I.jsx("p",{className:" font-semibold my-4",children:E.question}),I.jsxs("p",{className:"flex items-center cursor-pointer",onClick:()=>{p(h,1)},children:[I.jsx("span",{className:` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${E.picked===1?" bg-green-700":" bg-none"}`})," ",E.optionA]}),I.jsxs("p",{className:"flex items-center cursor-pointer",onClick:()=>{p(h,2)},children:[I.jsx("span",{className:` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${E.picked===2?" bg-green-700":" bg-none"}`})," ",E.optionB]}),I.jsxs("p",{className:"flex items-center cursor-pointer ",onClick:()=>{p(h,3)},children:[I.jsx("span",{className:` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${E.picked===3?" bg-green-700":" bg-none"}`})," ",E.optionC]}),I.jsxs("p",{className:"flex items-center cursor-pointer",onClick:()=>{p(h,4)},children:[I.jsx("span",{className:` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${E.picked===4?" bg-green-700":" bg-none"}`})," ",E.optionD]})]},h))}),I.jsxs("div",{className:"",children:[I.jsxs("div",{className:"flex justify-between md:mb-8 mb-4",children:[I.jsxs("div",{className:"",children:[I.jsx("button",{className:"py-2 md:px-8 px-4 mr-4 bg-red-900 text-white font-semibold rounded-md",onClick:()=>{f(),o!==0&&a(E=>E-1)},children:"back"}),I.jsx("button",{className:"py-2 md:px-8 px-4 bg-green-900 text-white font-semibold rounded-md",onClick:()=>{f(),o!==i-1&&a(E=>E+1)},children:"next"})]}),I.jsx("button",{className:"py-2 md:px-8 px-4 bg-red-700 text-white font-semibold rounded-md",onClick:()=>{f()},children:"submit"})]}),I.jsx("div",{className:"flex justify-between md:justify-normal md:gap-4 flex-wrap w-full py-4",children:g.map((E,h)=>I.jsxs("button",{className:`md:w-[50px] h-[50px] w-[18%] mb-2 md:mb-0 border trans hover:scale-105 rounded bg-white ${E.answered===!0&&" bg-green-900 text-white"}`,onClick:()=>{a(h),f()},children:[" ",h+1]},h))})]})]})]})};function cP(){const[e,t]=T.useState([]),[n,r]=T.useState(!1);return T.useEffect(()=>{const i=localStorage.getItem("isAuth"),s=localStorage.getItem("userData");t(s),r(i==="true"),console.log(n)},[]),I.jsxs("div",{className:"",children:[I.jsx(oP,{setIsAuth:r,userData:e,isAuth:n}),I.jsx("div",{className:"",children:I.jsxs(Y_,{children:[I.jsx(di,{path:"/",element:I.jsx(aP,{isAuth:n,setIsAuth:r,userData:e})}),I.jsx(di,{path:"/quiz",element:I.jsx(lP,{})}),I.jsx(di,{path:"/cbt-mode",element:I.jsx(uP,{})}),I.jsx(di,{path:"/login",element:I.jsx(sP,{setIsAuth:r,setUserData:t,isAuth:n})})]})})]})}Wl.createRoot(document.getElementById("root")).render(I.jsx(Dp.StrictMode,{children:I.jsx(J_,{children:I.jsx(cP,{})})}));
