define([],function(){"use strict";return["$http",function(t){return{doGetUserBankInfo:function(){return t.get(config.host+"/withdrawal/doGetUserBankInfo")},doUpdateUser:function(n){return t.post(config.host+"/withdrawal/doUpdateUser",n)},applyPayMoney:function(n){return t.post(config.host+"/withdrawal/doApplyPayMoney",n)}}}]});