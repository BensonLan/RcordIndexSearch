/**
 * Created by YINGCHIEH on 8/19/2014. */


var fakedata = {"collection": {"version": "1.0", "href": "/recfilters", "links": [
    {"href": "/recfilters/template", "rel": "creator"}
], "items": [
    {"href": "/recfilters/1001002", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001002"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001007", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001007"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001014", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001014"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001021", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001021"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001019", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001019"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001026", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001026"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001033", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001033"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001038", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001038"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001045", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001045"}
    ], "links": [
        {"href": "", "rel": ""}
    ]},
    {"href": "/recfilters/1001040", "data": [
        {"name": "title", "prompt": "filter's title", "value": "Andy1001040"}
    ], "links": [
        {"href": "", "rel": ""}
    ]}
]}}


var app = angular.module('filterAppModule', ["filterView.directive", 'LogCollectionJasonService', 'log8k.collectionJsonAnalyer']);


app.controller('filterController', function (RecfilterCollectionJason, collectionJsonAnalyer, $scope) {
    var hrefToGet = "/recfilters";
    $scope.showCollectionJsonString = "";

    $scope.datas = [];
    $scope.cmdSearch = reGetFilters;
    $scope.openModal = false;

    var reGetFilters = function () {
        RecfilterCollectionJason.get(hrefToGet).then(function (jsonCollection) {
                $scope.showCollectionJsonString = jsonCollection;
                $scope.functionTemplate = jsonCollection.collection.links;
                $scope.datas = collectionJsonAnalyer.getDatasFromCollectionJson(jsonCollection);
            }
        );
    }


    $scope.reGetFilters = function (datasource) {
        RecfilterCollectionJason.get(hrefToGet).then(function (jsonCollection) {
                $scope.datasource = collectionJsonAnalyer.getDatasFromCollectionJson(jsonCollection)
            }
        );
    }

    var tempEditItemCollection = {};
    $scope.addItem = function () {

        $scope.functionTemplateForModal = $scope.functionTemplate;
        var href = collectionJsonAnalyer.getCreatorLinkFromLinkClass($scope.functionTemplate).href;
        RecfilterCollectionJason.get(href).then(function (jsonCollection) {
                $scope.inputCollection = jsonCollection.collection.template.data;
                tempEditItemCollection = jsonCollection;
            }
        );

        $scope.openModal = true;
    }

    var selectedFilter = {};
    $scope.selectFilterItemChange = function (selectedItem) {
        selectedFilter = selectedItem;
        RecfilterCollectionJason.get(selectedItem.href).then(function (jsonCollection) {

                $scope.functionTemplateForModal = jsonCollection.collection.links;

                collectionJsonAnalyer.getEditLinkFromLinkClass($scope.functionTemplateForModal, function (resultLinkClass) {
                    RecfilterCollectionJason.get(resultLinkClass.href).then(function (collectionJson) {
                        $scope.inputCollection = collectionJson.collection.template.data;
                        tempEditItemCollection = collectionJson;

                    })
                });
            }
        );
        $scope.openModal = true;
    }


    $scope.filterAddAction = function (data, fountionTemplate) {
        var result = {template: tempEditItemCollection.collection.template};
        RecfilterCollectionJason.post(tempEditItemCollection.collection.href, result);
        reGetFilters();
    }


    $scope.filterUpdateAction = function (data, fountionTemplate) {
        var result = {template: tempEditItemCollection.collection.template};
        RecfilterCollectionJason.put(tempEditItemCollection.collection.href, result);
        reGetFilters();
    }

    $scope.filterDeleteAction = function (data, fountionTemplate) {
        RecfilterCollectionJason.delete(selectedFilter.href);
        reGetFilters();
    }

    $scope.filterValidateAction = function (data, fountionTemplate) {

    }

    $scope.cmdSearch=function(searchWording)
    {

    }

    reGetFilters();

})



