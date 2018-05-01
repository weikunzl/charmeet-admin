require.config({
    paths:{
        //一些库文件
        'jquery': 'http://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min',
        'bootstrap': 'bower_components/bootstrap',
        'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.min',
        'angular-resource': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular-resource.min',
        'angular-cookies': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular-cookies.min',
        'angular-translate': 'https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.11.0/angular-translate.min',
        'angular-translate-loader-static-files': 'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
        'ui-router': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min',
        'domReady':'bower_components/domReady/domReady',
        'ocLazyLoad':'https://cdnjs.cloudflare.com/ajax/libs/oclazyload/1.0.9/ocLazyLoad.min',
        'angular-clipboard' : 'https://cdnjs.cloudflare.com/ajax/libs/angular-clipboard/1.4.2/angular-clipboard.min',
        'ui-grid' : 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/3.1.1/ui-grid.min',
        //'ui.bootstrap' : 'bower_components/angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.12.0.min'
        'ui.bootstrap' : 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.3.3/ui-bootstrap-tpls.min',
        //'ngAnimate':'bower_components/ngAnimate/js/angular-animate.min',
        'angular-loading-bar' : 'bower_components/angular-loading-bar/build/loading-bar.min'
        //js文件
        //'bootstrap': "../scripts/bootstrap",
        //.....以及其他的js文件，这里省略
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'bootstrap/bootstrap.min':['jquery'],
        'bootstrap/ui-bootstrap-tpls-0.12.0':['jquery'],
        'ui-router':{
            deps:['angular'],
            exports: 'ui-router'
        },
        'js/common/menu/appMenuDirective':['angular'],
        'angular-clipboard':['angular'],
        'angular-resource':['angular'],
        'angular-cookies':['angular'],
        'angular-translate':['angular'],
        'angular-translate-loader-static-files':['angular','angular-translate'],
        'ui.bootstrap':['angular'],
        'ocLazyLoad':['angular'],
        'ui-grid':['angular'],
        'angular-loading-bar':['angular']
    },
    deps:['js/bootstrap'],waitSeconds: 60
    //urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
