/**
 * Created by apple on 4/20/16.
 */
({
    appDir:'./config/',
    baseUrl: './',
    dir:'./dist/',
    paths:{
        //一些库文件
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'bootstrap': 'bower_components/bootstrap',
        'angular': 'bower_components/angular/angular.min',
        'angular-resource': 'bower_components/angular-resource/angular-resource',
        'angular-cookies': 'bower_components/angular-cookies/angular-cookies.min',
        'angular-translate': 'bower_components/angular-translate/angular-translate.min',
        'angular-translate-loader-static-files': 'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
        'ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'domReady':'bower_components/domReady/domReady',
        'ocLazyLoad':'bower_components/oclazyload/dist/ocLazyLoad.min',
        'angular-clipboard' : 'bower_components/angular-clipboard/angular-clipboard',
        'ui-grid' : 'bower_components/angular-ui-grid/ui-grid.min',
        //'ui.bootstrap' : 'bower_components/angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.12.0.min'
        'ui.bootstrap' : 'bower_components/angular-ui-bootstrap/dist/ui-bootstrap-tpls'
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
        'ui-grid':['angular']
    },
    deps:['js/bootstrap']
})