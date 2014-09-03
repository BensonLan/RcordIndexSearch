/**
 * Created by YINGCHIEH on 8/13/2014.
 */

var searchAppControllerAppConstructor = function () {
    var defaulCollection = {"collection": {"queries": [
        {"href": "/search", "rel": "search", "data": [
            {"name": "q", "value": ""}
        ]}
    ], "items": [
        {"href": "/upg5VFNbTi2zgZHXUey0ow", "data": [
            {"name": "test", "prompt": "test title", "value": "test"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/WJTuhBI3TnmpR9Bzj5HLwg", "data": [
            {"name": "title", "prompt": "filter's title"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/OHJ3IVc2SmCgl966sPgJoA", "data": [
            {"name": "title", "prompt": "filter's title"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/23", "data": [
            {"name": "title", "prompt": "filter's title", "value": "mytilte"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/'23'", "data": [
            {"name": "title", "prompt": "filter's title", "value": "mytilte"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/3321", "data": [
            {"name": "title", "prompt": "filter's title", "value": "test"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/_vNkqVa5QXet-pQVeRA3wQ", "data": [
            {"name": "title", "prompt": "filter's title"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/2", "data": [
            {"name": "title", "prompt": "filter's title", "value": "test"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/abc", "data": [
            {"name": "title", "prompt": "filter's title", "value": "mytilte"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/1234", "data": [
            {"name": "title", "prompt": "filter's title", "value": "test"}
        ], "links": [
            {"href": "", "rel": ""}
        ]}
    ], "version": "1.0", "links": [
        {"href": "/page/2", "rel": "next", "prompt": "Next"}
    ], "template": {"data": [
        {"name": "title", "prompt": "titel promt", "value": ""},
        {"name": "condition", "prompt": "es filter script", "value": ""}
    ]}, "href": "192.168.2.27/"}};

    var searchAppfactory = function ($q , $http) {

        return {
            getFakeData: function () {
                var deferred = $q.defer();
                deferred.resolve(defaulCollection)
                return deferred.promise;
            },
            get: function (url) {
                var deferred = $q.defer();
                $http.get(url).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    deferred.resolve(defaulCollection);
                });
                return  deferred.promise;
            },
            jsonp: function (url) {
                var deferred = $q.defer();
                $http.jsonp(url).success(function (data) {
                    deferred.resolve(data);
                }).error(function (data) {
                        deferred.resolve(defaulCollection);
                    }
                )
                return deferred.promise;
            }
        };
    }


    var app =
        angular
            .module('searchAppModule', ['detailOnSearch.Directive', 'kendo.directives'])
            .factory('searchAppFactory',searchAppfactory);


    app.controller('searchAppController', ['searchAppFactory', '$scope', function (searchAppFactory, $scope) {
        $scope.template = '<li> <a href="http://192.168.2.27:9000/filters{{dataItem.href}}" target="_blank" >{{dataItem.value}}</a></li>';
        var jsonplastString = "/?callback=JSON_CALLBACK";
        $scope.query = domainIP + "filters";
        $scope.notifySearchGrid = function () {
            if (isNaN($scope.selectType)) {
                $scope.selectType = false;
            }
            else {
                $scope.selectType = !$scope.selectType;
            }
        }

        //cmd
        $scope.cmdSearch = function () {
            var url = $scope.query;
            searchAppFactory.getFakeData().then(function (jsonCollection) {
                $scope.mainGridOptions.dataSource.data = getDatasFromCollectionJson(jsonCollection);
                $scope.dataCount = $scope.mainGridOptions.dataSource.data.length;
                $scope.notifySearchGrid();
            });


        };
        $scope.cmdClearList = function () {
            $scope.mainGridOptions.dataSource.data = [];
            $scope.dataCount = 0;
            $scope.notifySearchGrid();
        };
        $scope.onClick2 = function (dataItem) {
            alert(dataItem.href);
        };


        //grid
        $scope.mainGridOptions = {
            dataSource: {
                data: []
            },
            sortable: true,
            pageable: false,
            detailTemplate: kendo.template($("#template").html()),

            dataBound: function () {
                this.expandRow(this.tbody.find("tr.k-master-row").first());
            },
            columns: [
                {
                    field: "href", title: "href"
                }
                ,
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
            ]
        };
    }])
}();

