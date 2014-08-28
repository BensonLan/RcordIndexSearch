/**
 * Created by YINGCHIEH on 8/27/2014.
 */
var filterEditorControllerConstructor = function () {


    var searchAppfactory = function ($q, $http) {
        return {

            get: function (url) {
                var deferred = $q.defer();
                $http.get(url).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    data = {"collection": {"queries": [
                        {"href": "/search", "rel": "search", "data": [
                            {"name": "q", "value": ""}
                        ]}
                    ], "items": [
                        {"href": "/upg5VFNbTi2zgZHXUey0ow", "data": [
                            {"name": "title", "prompt": "filter's title", "value": "test"}
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
                    deferred.resolve(data);
                });
                return  deferred.promise;
            }
        };
    }

    var app = angular.module('filterEditorModule', []).factory('AjaxCall', ['$q', '$http', searchAppfactory])




    app.controller('filterEditorController',[ '$scope','$routeParams','AjaxCall',function ($scope, $routeParams, AjaxCall) {
        $scope.decodeURIComponent = decodeURIComponent;
        $scope.data = angular.fromJson($routeParams.data);
        AjaxCall.get(domainIP + decodeURIComponent($scope.data.href)).then(function (jsonCollection) {
            $scope.filterJsonCollection = getDatasFromItems(jsonCollection);
        })
    }])
}();
