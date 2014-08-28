/**
 * Created by YINGCHIEH on 8/26/2014.
 */


var filterViewDirectiveConstructor = function () {

    var fackData = {"collection": {"version": "1.0", "href": "/recfilters", "template": {"data": [
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

    var app = angular.module('filterView.directive', []);


    //Directive
    app.directive('filterList', function () {
        return {
            restrict: 'E',
            scope: {
                datasource: '='
            },
            controller: function ($scope) {
                //json 變成 string
                $scope.stringify = JSON.stringify;

                //加密成html格式
                $scope.encodeURIComponent = encodeURIComponent;
            },
            templateUrl: '/RcordIndexSearch/recordIndexSearch/view/filterList.html'
        };
    });
}();








