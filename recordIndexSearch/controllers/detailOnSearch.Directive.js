/**
 * Created by YINGCHIEH on 8/19/2014.
 */



var detailOnSearchConstructor = function () {

    var filtersOptions = {
        dataSource: {
            data: [
                {
                    Name: "預設篩選器",
                    Value: 0
                },
                {
                    Name: "A篩選器",
                    Value: 1
                },
                {
                    Name: "B篩選器",
                    Value: 2
                }
            ]
        },
        dataTextField: "Name",
        dataValueField: "Value"
    }

    var resultTemplateOptions = {
        dataSource: {
            data: [
                {
                    Name: "預設ResultTemplate",
                    Value: 0
                },
                {
                    Name: "A-ResultTemplate",
                    Value: 1
                },
                {
                    Name: "B-ResultTemplate",
                    Value: 2
                }
            ]
        },
        dataTextField: "Name",
        dataValueField: "Value"
    }

    var dateRangeOptions = {
        dataSource: {
            data: [
                {
                    Name: "不限時間",
                    Value: 0
                },
                {
                    Name: "過去 1 小時",
                    Value: 1
                },
                {
                    Name: "過去 24 小時",
                    Value: 2
                },
                {
                    Name: "過去 1 個月",
                    Value: 3
                },
                {
                    Name: "過去 3 個月",
                    Value: 4
                },
                {
                    Name: "自訂義時間範圍",
                    Value: 5
                }
            ]
        },
        dataTextField: "Name",
        dataValueField: "Value"
    }

    var app = angular.module('detailOnSearch.Directive', []);


    function dataInfoController($scope) {

    }

    function detailSearchConditonController($scope) {
        $scope.filtersOptions = filtersOptions;
        $scope.resultTemplateOptions = resultTemplateOptions;
        $scope.dateRangeOptions = dateRangeOptions;

        $scope.resultTemplateChange = function () {
            var item = $scope.selectedItemFormResultTemplate;
            var tempOptions = $scope.mainGridOptions;
            $scope.mainGridOptions.dataSource.data = $scope.mainGridOptions.dataSource.data;
            if (item == 0) {
                tempOptions.columns = [
                    {
                        field: "href", title: "href"
                    },
                    {
                        field: "name", title: "Name"
                    }
                    ,
                    {
                        field: "value", title: "Value"
                    }
                    ,
                    {
                        field: "template", title: "template",
                        template: kendo.template($("#hrefColumntemplate").html())
                    }
                ];
            }
            else if (item == 1) {
                tempOptions.columns = [
                    {
                        field: "href", title: "href"
                    }
                ];
            }
            else if (item == 2) {
                tempOptions.columns = [
                    {
                        field: "value", title: "Value"
                    }
                    ,
                    {
                        field: "template", title: "template",
                        template: kendo.template($("#hrefColumntemplate").html())
                    }
                ]
            }
            $scope.mainGridOptions = tempOptions;
            $scope.notifySearchGrid();
        }
        $scope.dateRangeChange = function () {
            if ($scope.selectedItemdateRange == 5) {
                $scope.modal.open();
            }
        }
    }

    function detailOnRecordIndexController($scope) {

        this.tabIndex = 1;
        this.selectTab = function (setTab) {
            this.tabIndex = setTab;
        }

        //判斷選擇的頁面 是否 等於 該tabIndex
        this.isSelected = function (checkTab) {
            return this.tabIndex === checkTab;
        };
    }

    //Directive
    app.directive('detailOnSearch', function () {
        return {
            restrict: 'E',
            templateUrl: '/RcordIndexSearch/recordIndexSearch/view/detailOnRecordIndex.html',
            controller: detailOnRecordIndexController,
            controllerAs: 'detailOnRecordIndexController'
        };
    });

    app.directive('detailDataCount', function () {
        return {
            restrict: 'E',
            templateUrl: '/RcordIndexSearch/recordIndexSearch/view/detailDataCount.html',
            controller: dataInfoController,
            controllerAs: 'dataInfoController'
        };
    });

    app.directive('detailSearchCondition', function () {
        return {
            restrict: 'E',
            templateUrl: '/RcordIndexSearch/recordIndexSearch/view/detailSearchCondition.html',
            controller: detailSearchConditonController,
            controllerAs: 'detailSearchConditonController'
        };
    });

    app.directive('detailElseTool', function () {
        return {
            restrict: 'E',
            templateUrl: '/RcordIndexSearch/recordIndexSearch/view/detailElseTool.html',
            controller: detailOnRecordIndexController,
            controllerAs: 'detailOnRecordIndexController'
        };
    });
}();


