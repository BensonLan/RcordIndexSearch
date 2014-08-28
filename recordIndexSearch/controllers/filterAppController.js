/**
 * Created by YINGCHIEH on 8/19/2014. */


    var fakedata = {"collection": {"version": "1.0", "href": "/recfilters", "template": {"data": [
        {"name": "id", "value": ""},
        {"name": "title", "prompt": "title prompt", "value": ""},
        {"name": "condition", "prompt": "es filter script", "value": ""}
    ]}, "items": [
        {"href": "/recfilters/1001247", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001247"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001254", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001254"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001259", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001259"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001261", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001261"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001266", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001266"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001273", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001273"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001278", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001278"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001280", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001280"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001285", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001285"}
        ], "links": [
            {"href": "", "rel": ""}
        ]},
        {"href": "/recfilters/1001292", "data": [
            {"name": "title", "prompt": "filter's title", "value": "andytest", "href": "/recfilters/1001292"}
        ], "links": [
            {"href": "", "rel": ""}
        ]}
    ]}}

    var filterAppfactory = function ($q, $http) {
        return {
            getFakeData: function () {
                var deferred = $q.defer();
                deferred.resolve(fakedata)
                return deferred.promise;
            },
            get: function (url) {
                var deferred = $q.defer();
                $http.get(url).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    data = {};
                    deferred.resolve(data);
                });
                return  deferred.promise;
            },
            jsonp: function (url) {
                var deferred = $q.defer();
                $http.jsonp(url).success(function (data) {
                    deferred.resolve(data);
                }).error(function (data) {
                        data = {};
                        deferred.resolve(data);
                    }
                )
                return deferred.promise;
            }
        };
    }

    var app = angular.module('filterAppModule', ["filterView.directive"])
        .factory('filterAppFactory', ['$q', '$http', filterAppfactory]);

    app.controller('filterController', function (filterAppFactory, $scope) {
        var urlToGet = domainIP + "/recfilters";
        $scope.showCollectionJsonString = "";
        $scope.domainIP = domainIP;

        $scope.datas = [];
        $scope.cmdSearch = function ()
        {
            filterAppFactory.get(urlToGet).then(function (jsonCollection)
            {
                $scope.showCollectionJsonString = jsonCollection;
                $scope.datas = getDatasFromItems(jsonCollection);
            });
        }
    })



