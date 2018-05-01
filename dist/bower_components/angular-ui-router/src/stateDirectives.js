function parseStateRef(t,e){var a,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t=e+"("+r[1]+")"),a=t.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!a||4!==a.length)throw new Error("Invalid state ref '"+t+"'");return{state:a[1],paramExpr:a[3]||null}}function stateContext(t){var e=t.parent().inheritedData("$uiView");return e&&e.state&&e.state.name?e.state:void 0}function getTypeInfo(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),a="FORM"===t[0].nodeName;return{attr:a?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!a}}function clickHook(t,e,a,r,i){return function(n){var c=n.which||n.button,o=i();if(!(c>1||n.ctrlKey||n.metaKey||n.shiftKey||t.attr("target"))){var u=a(function(){e.go(o.state,o.params,o.options)});n.preventDefault();var s=r.isAnchor&&!o.href?1:0;n.preventDefault=function(){s--<=0&&a.cancel(u)}}}}function defaultOpts(t,e){return{relative:stateContext(t)||e.$current,inherit:!0}}function $StateRefDirective(t,e){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(a,r,i,n){var c=parseStateRef(i.uiSref,t.current.name),o={state:c.state,href:null,params:null},u=getTypeInfo(r),s=n[1]||n[0];o.options=extend(defaultOpts(r,t),i.uiSrefOpts?a.$eval(i.uiSrefOpts):{});var f=function(e){e&&(o.params=angular.copy(e)),o.href=t.href(c.state,o.params,o.options),s&&s.$$addStateInfo(c.state,o.params),null!==o.href&&i.$set(u.attr,o.href)};c.paramExpr&&(a.$watch(c.paramExpr,function(t){t!==o.params&&f(t)},!0),o.params=angular.copy(a.$eval(c.paramExpr))),f(),u.clickable&&r.bind("click",clickHook(r,t,e,u,function(){return o}))}}}function $StateRefDynamicDirective(t,e){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(a,r,i,n){function c(e){l.state=e[0],l.params=e[1],l.options=e[2],l.href=t.href(l.state,l.params,l.options),u&&u.$$addStateInfo(l.state,l.params),l.href&&i.$set(o.attr,l.href)}var o=getTypeInfo(r),u=n[1]||n[0],s=[i.uiState,i.uiStateParams||null,i.uiStateOpts||null],f="["+s.map(function(t){return t||"null"}).join(", ")+"]",l={state:null,params:null,options:null,href:null};a.$watch(f,c,!0),c(a.$eval(f)),o.clickable&&r.bind("click",clickHook(r,t,e,o,function(){return l}))}}}function $StateRefActiveDirective(t,e,a){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(e,r,i,n){function c(e,a,i){var n=t.get(e,stateContext(r)),c=o(e,a);m.push({state:n||{name:e},params:a,hash:c}),h[c]=i}function o(t,a){if(!isString(t))throw new Error("state should be a string");return isObject(a)?t+toJson(a):(a=e.$eval(a),isObject(a)?t+toJson(a):t)}function u(){for(var t=0;t<m.length;t++)l(m[t].state,m[t].params)?s(r,h[m[t].hash]):f(r,h[m[t].hash]),p(m[t].state,m[t].params)?s(r,v):f(r,v)}function s(t,e){n(function(){t.addClass(e)})}function f(t,e){t.removeClass(e)}function l(e,a){return t.includes(e.name,a)}function p(e,a){return t.is(e.name,a)}var v,$,m=[],h={};v=a(i.uiSrefActiveEq||"",!1)(e);try{$=e.$eval(i.uiSrefActive)}catch(S){}$=$||a(i.uiSrefActive||"",!1)(e),isObject($)&&forEach($,function(a,r){if(isString(a)){var i=parseStateRef(a,t.current.name);c(i.state,e.$eval(i.paramExpr),r)}}),this.$$addStateInfo=function(t,e){isObject($)&&m.length>0||(c(t,e,$),u())},e.$on("$stateChangeSuccess",u),u()}]}}$StateRefDirective.$inject=["$state","$timeout"],$StateRefDynamicDirective.$inject=["$state","$timeout"],$StateRefActiveDirective.$inject=["$state","$stateParams","$interpolate"],angular.module("ui.router.state").directive("uiSref",$StateRefDirective).directive("uiSrefActive",$StateRefActiveDirective).directive("uiSrefActiveEq",$StateRefActiveDirective).directive("uiState",$StateRefDynamicDirective);