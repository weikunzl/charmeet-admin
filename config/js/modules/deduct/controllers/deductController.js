/**
 *
 */
define(function(){
    'use strict';

    return ['$scope','$stateParams','uiGridConstants','deductService','i18nService'
        , function($scope,$stateParams,uiGridConstants,deductService,i18nService){

            i18nService.setCurrentLang('zh-cn');
            $scope.monthAry = [1,2,3,4,5,6,7,8,9,10,11,12];
            $scope.yearAry = [];
            var tYear = new Date().getYear()+1900;
            $scope.yearAry.push(tYear);
            if(!$stateParams.page){
                $stateParams.page=1
            }
            var paginationOptions = {
                pageNumber: $stateParams.page,
                pageSize: 25,
                sort: null
            };


            for(var nYear = tYear-1;nYear>2010;nYear-- ){
                $scope.yearAry.push(nYear);
            }

            $scope.gridOptions = {
                enableSorting: true,
                paginationPageSizes: [25, 50, 75,100],
                paginationPageSize: 25,
                columnDefs: [
                    { name:'别名', field: 'aileName' ,enableCellEdit:false},
                    { name:'消费金额', field: 'shoppingCost',cellFilter:'currency',enableCellEdit:false },
                    { name:'消费类型', field: 'shoppingType',cellFilter: 'mapShoppingType',enableCellEdit:false},
                    { name:'消费时间', field: 'shoppingTime',cellFilter :"date:'yyyy-MM-dd'",enableCellEdit:false},
                    { name:'提成金额', field: 'earn', cellFilter:'currency',enableCellEdit:false},
                    { name:'提成状态', field: 'payflag', cellFilter:'mapPayflag',enableCellEdit:false,
                        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                            //console.log(grid.getCellValue(row,col));
                            var  value = grid.getCellValue(row,col);
                            if (value === 1) {
                                return 'text-warning';
                            }else if(value ===3){
                                return 'text-danger';
                            }else if (value===2){
                                return 'text-success';
                            }
                        }}
                ],
                data : [
                ],
                useExternalPagination : true,
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                    $scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
                        if (sortColumns.length == 0) {
                            paginationOptions.sort = null;
                        } else {
                            paginationOptions.sort = sortColumns[0].sort.direction;
                        }
                        getPage(paginationOptions);
                    });
                    gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                        paginationOptions.pageNumber = newPage;
                        paginationOptions.pageSize = pageSize;
                        $stateParams.page = newPage;
                        getPage(paginationOptions);
                    });
                }
            };

            var getPage = function(paramData1) {
                var paramData = paginationOptions;
                paramData.year = $scope.yearSelect;
                paramData.month = $scope.monthSelect;
                deductService.getDeductList(paramData).success(function (response) {
                    //console.log($scope.gridOptions)
                        //
                    //var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
                    if(response.data&&response.data.length>0){
                        $scope.gridOptions.data = response.data;//.slice(firstRow, firstRow + paginationOptions.pageSize);
                    }
                    $scope.gridOptions.totalItems = response.total;
                });
            };

            $scope.getPage = function(){
                getPage(paginationOptions);
            }

            $scope.enterPress = function(){
                if(event.keyCode = 13){
                    getPage(paginationOptions);
                }
            }
            getPage(paginationOptions);

            //统计金额
            $scope.noPayment = 0;
            $scope.waitPayment = 0;

            $scope.sumNoPayment = function(){
                var paramData = {};
                paramData.year = $scope.yearSelect;
                paramData.month = $scope.monthSelect;
                deductService.sumNoPayment(paramData).success(function (response) {
                    if(response){

                        $scope.noPayment =response.totalearn||0;
                    }
                });
            }
            $scope.sumWaitPayment = function(){
                var paramData = {};
                paramData.year = $scope.yearSelect;
                paramData.month = $scope.monthSelect;
                deductService.sumWaitPayment(paramData).success(function (response) {
                    if(response){

                        $scope.waitPayment =response.totalearn||0;
                    }
                });
            }
            $scope.sumWaitPayment();
            $scope.sumNoPayment();
        }]
})