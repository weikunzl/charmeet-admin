angular.module("ui.bootstrap.demo").controller("AlertDemoCtrl",function(e){e.alerts=[{type:"danger",msg:"Oh snap! Change a few things up and try submitting again."},{type:"success",msg:"Well done! You successfully read this important alert message."}],e.addAlert=function(){e.alerts.push({msg:"Another alert!"})},e.closeAlert=function(t){e.alerts.splice(t,1)}});