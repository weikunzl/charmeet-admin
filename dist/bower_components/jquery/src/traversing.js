define(["./core","./var/indexOf","./traversing/var/dir","./traversing/var/siblings","./traversing/var/rneedsContext","./core/init","./traversing/findFilter","./selector"],function(n,t,e,r,i){function u(n,t){for(;(n=n[t])&&1!==n.nodeType;);return n}var o=/^(?:parents|prev(?:Until|All))/,s={children:!0,contents:!0,next:!0,prev:!0};return n.fn.extend({has:function(t){var e=n(t,this),r=e.length;return this.filter(function(){for(var t=0;r>t;t++)if(n.contains(this,e[t]))return!0})},closest:function(t,e){for(var r,u=0,o=this.length,s=[],c=i.test(t)||"string"!=typeof t?n(t,e||this.context):0;o>u;u++)for(r=this[u];r&&r!==e;r=r.parentNode)if(r.nodeType<11&&(c?c.index(r)>-1:1===r.nodeType&&n.find.matchesSelector(r,t))){s.push(r);break}return this.pushStack(s.length>1?n.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?t.call(n(e),this[0]):t.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(t,e))))},addBack:function(n){return this.add(null==n?this.prevObject:this.prevObject.filter(n))}}),n.each({parent:function(n){var t=n.parentNode;return t&&11!==t.nodeType?t:null},parents:function(n){return e(n,"parentNode")},parentsUntil:function(n,t,r){return e(n,"parentNode",r)},next:function(n){return u(n,"nextSibling")},prev:function(n){return u(n,"previousSibling")},nextAll:function(n){return e(n,"nextSibling")},prevAll:function(n){return e(n,"previousSibling")},nextUntil:function(n,t,r){return e(n,"nextSibling",r)},prevUntil:function(n,t,r){return e(n,"previousSibling",r)},siblings:function(n){return r((n.parentNode||{}).firstChild,n)},children:function(n){return r(n.firstChild)},contents:function(t){return t.contentDocument||n.merge([],t.childNodes)}},function(t,e){n.fn[t]=function(r,i){var u=n.map(this,e,r);return"Until"!==t.slice(-5)&&(i=r),i&&"string"==typeof i&&(u=n.filter(i,u)),this.length>1&&(s[t]||n.uniqueSort(u),o.test(t)&&u.reverse()),this.pushStack(u)}}),n});