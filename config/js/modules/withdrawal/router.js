define(function(){

    'use strict';
    	return {
    		stateId :'withdrawal',
            config : {
                    url: '/withdrawal',
                    templateUrl: 'js/modules/withdrawal/views/withdrawal.html',
                    controller: 'withdrawalController'
                    //  resolve: {
                    //     loadPlugin: function ($ocLazyLoad) {
                    //         return $ocLazyLoad.load([
                    //             {
                    //                 name: 'test',
                    //                 files: []
                    //             }
                    //         ]);
                    //     }
                    // }
                }
    	};
})