angular.module("ui.bootstrap.demo").controller("TabsDemoCtrl",function(t,e){t.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2",disabled:!0}],t.alertMe=function(){setTimeout(function(){e.alert("You've selected the alert tab!")})},t.model={name:"Tabs"}});