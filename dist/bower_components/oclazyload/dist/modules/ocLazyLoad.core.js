!function(e,n){"use strict";var r=["ng","oc.lazyLoad"],o={},t=[],i=[],u=[],a=[],s=e.noop,f={},d=[],c=e.module("oc.lazyLoad",["ng"]);c.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(c,l,p,m,v,y){function E(n,o,t){if(o){var i,a,c,l=[];for(i=o.length-1;i>=0;i--)if(a=o[i],e.isString(a)||(a=$(a)),a&&-1===d.indexOf(a)&&(!w[a]||-1!==u.indexOf(a))){var h=-1===r.indexOf(a);if(c=g(a),h&&(r.push(a),E(n,c.requires,t)),c._runBlocks.length>0)for(f[a]=[];c._runBlocks.length>0;)f[a].push(c._runBlocks.shift());e.isDefined(f[a])&&(h||t.rerun)&&(l=l.concat(f[a])),_(n,c._invokeQueue,a,t.reconfig),_(n,c._configBlocks,a,t.reconfig),s(h?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",a),o.pop(),d.push(a)}var p=n.getInstanceInjector();e.forEach(l,function(e){p.invoke(e)})}}function L(n,r){function t(n,r){var o,t=!0;return r.length&&(o=i(n),e.forEach(r,function(e){t=t&&i(e)!==o})),t}function i(n){return e.isArray(n)?M(n.toString()):e.isObject(n)?M(A(n)):e.isDefined(n)&&null!==n?M(n.toString()):n}var u=n[2][0],a=n[1],f=!1;e.isUndefined(o[r])&&(o[r]={}),e.isUndefined(o[r][a])&&(o[r][a]={});var d=function(e,n){o[r][a].hasOwnProperty(e)||(o[r][a][e]=[]),t(n,o[r][a][e])&&(f=!0,o[r][a][e].push(n),s("ocLazyLoad.componentLoaded",[r,a,e]))};if(e.isString(u))d(u,n[2][1]);else{if(!e.isObject(u))return!1;e.forEach(u,function(n,r){e.isString(n)?d(n,u[1]):d(r,n)})}return f}function _(n,r,o,i){if(r){var u,a,s,f;for(u=0,a=r.length;a>u;u++)if(s=r[u],e.isArray(s)){if(null!==n){if(!n.hasOwnProperty(s[0]))throw new Error("unsupported provider "+s[0]);f=n[s[0]]}var d=L(s,o);if("invoke"!==s[1])d&&e.isDefined(f)&&f[s[1]].apply(f,s[2]);else{var c=function(n){var r=t.indexOf(o+"-"+n);(-1===r||i)&&(-1===r&&t.push(o+"-"+n),e.isDefined(f)&&f[s[1]].apply(f,s[2]))};if(e.isFunction(s[2][0]))c(s[2][0]);else if(e.isArray(s[2][0]))for(var l=0,h=s[2][0].length;h>l;l++)e.isFunction(s[2][0][l])&&c(s[2][0][l])}}}}function $(n){var r=null;return e.isString(n)?r=n:e.isObject(n)&&n.hasOwnProperty("name")&&e.isString(n.name)&&(r=n.name),r}function O(n){if(!e.isString(n))return!1;try{return g(n)}catch(r){if(/No module/.test(r)||r.message.indexOf("$injector:nomod")>-1)return!1}}var w={},x={$controllerProvider:c,$compileProvider:p,$filterProvider:m,$provide:l,$injector:v,$animateProvider:y},b=!1,j=!1,S=[],D={};S.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(n){e.isDefined(n.modules)&&(e.isArray(n.modules)?e.forEach(n.modules,function(e){w[e.name]=e}):w[n.modules.name]=n.modules),e.isDefined(n.debug)&&(b=n.debug),e.isDefined(n.events)&&(j=n.events)},this._init=function(o){if(0===i.length){var t=[o],u=["ng:app","ng-app","x-ng-app","data-ng-app"],s=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,f=function(e){return e&&t.push(e)};e.forEach(u,function(n){u[n]=!0,f(document.getElementById(n)),n=n.replace(":","\\:"),"undefined"!=typeof o[0]&&o[0].querySelectorAll&&(e.forEach(o[0].querySelectorAll("."+n),f),e.forEach(o[0].querySelectorAll("."+n+"\\:"),f),e.forEach(o[0].querySelectorAll("["+n+"]"),f))}),e.forEach(t,function(n){if(0===i.length){var r=" "+o.className+" ",t=s.exec(r);t?i.push((t[2]||"").replace(/\s+/g,",")):e.forEach(n.attributes,function(e){0===i.length&&u[e.name]&&i.push(e.value)})}})}0!==i.length||(n.jasmine||n.mocha)&&e.isDefined(e.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");var d=function c(n){if(-1===r.indexOf(n)){r.push(n);var o=e.module(n);_(null,o._invokeQueue,n),_(null,o._configBlocks,n),e.forEach(o.requires,c)}};e.forEach(i,function(e){d(e)}),i=[],a.pop()};var A=function(n){try{return JSON.stringify(n)}catch(r){var o=[];return JSON.stringify(n,function(n,r){if(e.isObject(r)&&null!==r){if(-1!==o.indexOf(r))return;o.push(r)}return r})}},M=function(e){var n,r,o,t=0;if(0==e.length)return t;for(n=0,o=e.length;o>n;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t|=0;return t};this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(n,t,u,f,c){function l(e){var r=c.defer();return n.error(e.message),r.reject(e),r.promise}var p,m=f("ocLazyLoad");return b||(n={},n.error=e.noop,n.warn=e.noop,n.info=e.noop),x.getInstanceInjector=function(){return p?p:p=t.data("$injector")||e.injector()},s=function(e,r){j&&u.$broadcast(e,r),b&&n.info(e,r)},{_broadcast:s,_$log:n,_getFilesCache:function(){return m},toggleWatch:function(e){e?a.push(!0):a.pop()},getModuleConfig:function(n){if(!e.isString(n))throw new Error("You need to give the name of the module to get");return w[n]?e.copy(w[n]):null},setModuleConfig:function(n){if(!e.isObject(n))throw new Error("You need to give the module config object to set");return w[n.name]=n,n},getModules:function(){return r},isLoaded:function(n){var o=function(e){var n=r.indexOf(e)>-1;return n||(n=!!O(e)),n};if(e.isString(n)&&(n=[n]),e.isArray(n)){var t,i;for(t=0,i=n.length;i>t;t++)if(!o(n[t]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:$,_getModule:function(e){try{return g(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+A(e)+'" that you are trying to load does not exist. '+n.message),n}},moduleExists:O,_loadDependencies:function(n,r){var o,t,i,u=[],a=this;if(n=a._getModuleName(n),null===n)return c.when();try{o=a._getModule(n)}catch(s){return l(s)}return t=a.getRequires(o),e.forEach(t,function(o){if(e.isString(o)){var t=a.getModuleConfig(o);if(null===t)return void S.push(o);o=t,t.name=void 0}if(a.moduleExists(o.name))return i=o.files.filter(function(e){return a.getModuleConfig(o.name).files.indexOf(e)<0}),0!==i.length&&a._$log.warn('Module "',n,'" attempted to redefine configuration for dependency. "',o.name,'"\n Additional Files Loaded:',i),e.isDefined(a.filesLoader)?void u.push(a.filesLoader(o,r).then(function(){return a._loadDependencies(o)})):l(new Error("Error: New dependencies need to be loaded from external files ("+o.files+"), but no loader has been defined."));if(e.isArray(o)){var s=[];e.forEach(o,function(e){var n=a.getModuleConfig(e);null===n?s.push(e):n.files&&(s=s.concat(n.files))}),s.length>0&&(o={files:s})}else e.isObject(o)&&o.hasOwnProperty("name")&&o.name&&(a.setModuleConfig(o),S.push(o.name));if(e.isDefined(o.files)&&0!==o.files.length){if(!e.isDefined(a.filesLoader))return l(new Error('Error: the module "'+o.name+'" is defined in external files ('+o.files+"), but no loader has been defined."));u.push(a.filesLoader(o,r).then(function(){return a._loadDependencies(o)}))}}),c.all(u)},inject:function(n){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],t=this,u=c.defer();if(e.isDefined(n)&&null!==n){if(e.isArray(n)){var a=[];return e.forEach(n,function(e){a.push(t.inject(e,r,o))}),c.all(a)}t._addToLoadList(t._getModuleName(n),!0,o)}if(i.length>0){var s=i.slice(),f=function l(e){S.push(e),D[e]=u.promise,t._loadDependencies(e,r).then(function(){try{d=[],E(x,S,r)}catch(e){return t._$log.error(e.message),void u.reject(e)}i.length>0?l(i.shift()):u.resolve(s)},function(e){u.reject(e)})};f(i.shift())}else{if(r&&r.name&&D[r.name])return D[r.name];u.resolve()}return u.promise},getRequires:function(n){var o=[];return e.forEach(n.requires,function(e){-1===r.indexOf(e)&&o.push(e)}),o},_invokeQueue:_,_registerInvokeList:L,_register:E,_addToLoadList:h,_unregister:function(n){e.isDefined(n)&&e.isArray(n)&&e.forEach(n,function(e){o[e]=void 0})}}}],this._init(e.element(n.document))}]);var l=e.bootstrap;e.bootstrap=function(n,r,o){return e.forEach(r.slice(),function(e){h(e,!0,!0)}),l(n,r,o)};var h=function(n,r,o){(a.length>0||r)&&e.isString(n)&&-1===i.indexOf(n)&&(i.push(n),o&&u.push(n))},g=e.module;e.module=function(e,n,r){return h(e,!1,!0),g(e,n,r)},"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="oc.lazyLoad")}(angular,window);