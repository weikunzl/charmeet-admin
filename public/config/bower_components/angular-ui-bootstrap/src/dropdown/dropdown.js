angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(n,e){var o=null;this.open=function(e){o||(n.on("click",t),n.on("keydown",i)),o&&o!==e&&(o.isOpen=!1),o=e},this.close=function(e){o===e&&(o=null,n.off("click",t),n.off("keydown",i))};var t=function(n){if(o&&!(n&&"disabled"===o.getAutoClose()||n&&3===n.which)){var t=o.getToggleElement();if(!(n&&t&&t[0].contains(n.target))){var i=o.getDropdownElement();n&&"outsideClick"===o.getAutoClose()&&i&&i[0].contains(n.target)||(o.isOpen=!1,e.$$phase||o.$apply())}}},i=function(n){27===n.which?(o.focusToggleElement(),t()):o.isKeynavEnabled()&&-1!==[38,40].indexOf(n.which)&&o.isOpen&&(n.preventDefault(),n.stopPropagation(),o.focusDropdownEntry(n.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(n,e,o,t,i,r,d,l,p,u,a){var s,c,f=this,g=n.$new(),w=i.appendToOpenClass,h=i.openClass,m=angular.noop,O=o.onToggle?t(o.onToggle):angular.noop,b=!1,v=null,$=!1,D=p.find("body");e.addClass("dropdown"),this.init=function(){if(o.isOpen&&(c=t(o.isOpen),m=c.assign,n.$watch(c,function(n){g.isOpen=!!n})),angular.isDefined(o.dropdownAppendTo)){var i=t(o.dropdownAppendTo)(g);i&&(v=angular.element(i))}b=angular.isDefined(o.dropdownAppendToBody),$=angular.isDefined(o.keyboardNav),b&&!v&&(v=D),v&&f.dropdownMenu&&(v.append(f.dropdownMenu),e.on("$destroy",function(){f.dropdownMenu.remove()}))},this.toggle=function(n){return g.isOpen=arguments.length?!!n:!g.isOpen,angular.isFunction(m)&&m(g,g.isOpen),g.isOpen},this.isOpen=function(){return g.isOpen},g.getToggleElement=function(){return f.toggleElement},g.getAutoClose=function(){return o.autoClose||"always"},g.getElement=function(){return e},g.isKeynavEnabled=function(){return $},g.focusDropdownEntry=function(n){var o=f.dropdownMenu?angular.element(f.dropdownMenu).find("a"):e.find("ul").eq(0).find("a");switch(n){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===o.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=o.length-1}o[f.selectedOption].focus()},g.getDropdownElement=function(){return f.dropdownMenu},g.focusToggleElement=function(){f.toggleElement&&f.toggleElement[0].focus()},g.$watch("isOpen",function(o,t){if(v&&f.dropdownMenu){var i,p,c=l.positionElements(e,f.dropdownMenu,"bottom-left",!0);if(i={top:c.top+"px",display:o?"block":"none"},p=f.dropdownMenu.hasClass("dropdown-menu-right"),p?(i.left="auto",i.right=window.innerWidth-(c.left+e.prop("offsetWidth"))+"px"):(i.left=c.left+"px",i.right="auto"),!b){var $=l.offset(v);i.top=c.top-$.top+"px",p?i.right=window.innerWidth-(c.left-$.left+e.prop("offsetWidth"))+"px":i.left=c.left-$.left+"px"}f.dropdownMenu.css(i)}var D=v?v:e,C=D.hasClass(v?w:h);if(C===!o&&d[o?"addClass":"removeClass"](D,v?w:h).then(function(){angular.isDefined(o)&&o!==t&&O(n,{open:!!o})}),o)f.dropdownMenuTemplateUrl&&a(f.dropdownMenuTemplateUrl).then(function(n){s=g.$new(),u(n.trim())(s,function(n){var e=n;f.dropdownMenu.replaceWith(e),f.dropdownMenu=e})}),g.focusToggleElement(),r.open(g);else{if(f.dropdownMenuTemplateUrl){s&&s.$destroy();var M=angular.element('<ul class="dropdown-menu"></ul>');f.dropdownMenu.replaceWith(M),f.dropdownMenu=M}r.close(g),f.selectedOption=null}angular.isFunction(m)&&m(n,o)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(n,e,o,t){t.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(n,e,o,t){if(t&&!angular.isDefined(o.dropdownNested)){e.addClass("dropdown-menu");var i=o.templateUrl;i&&(t.dropdownMenuTemplateUrl=i),t.dropdownMenu||(t.dropdownMenu=e)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(n,e,o,t){if(t){e.addClass("dropdown-toggle"),t.toggleElement=e;var i=function(i){i.preventDefault(),e.hasClass("disabled")||o.disabled||n.$apply(function(){t.toggle()})};e.bind("click",i),e.attr({"aria-haspopup":!0,"aria-expanded":!1}),n.$watch(t.isOpen,function(n){e.attr("aria-expanded",!!n)}),n.$on("$destroy",function(){e.unbind("click",i)})}}}});