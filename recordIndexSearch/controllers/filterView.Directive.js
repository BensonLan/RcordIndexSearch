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

    var app = angular.module('filterView.directive', ['log8k.collectionJsonAnalyer']);


    //Directive
    app.directive('filterList', function (collectionJsonAnalyer) {
        return {
            restrict: 'E',
            scope: {
                datasource: '=',
                functionTemplate:'=',
                selectedChange:'=',
                reflashAction: '=',
                addItemAction:'='
            },
            link: function (scope, element, attrs) {
                //json 變成 string
                scope.stringify = JSON.stringify;

                //加密成html格式
                scope.encodeURIComponent = encodeURIComponent;

                scope.reflash = function () {
                    scope.reflashAction(scope.datasource)
                };

                scope.addItem= function () {
                    scope.addItemAction();
                };

                scope.currentItemChange=function(selectedItem)
                {
                    scope.selectedChange(selectedItem);
                }


                scope.$watch("functionTemplate",function(newValue) {
                    if(newValue)
                    {
                        collectionJsonAnalyer.isCreatorTemplate(collectionJsonAnalyer.LinkConvertLinkClass(newValue),function(isCreator)
                        {
                            scope.isCreatorTemplate=isCreator;
                        });
                    }
                });
            },
            templateUrl: '/RcordIndexSearch/recordIndexSearch/view/filterList.html'
        };
    });


    app.directive('filterEditorModal', function (collectionJsonAnalyer) {
        return {
            restrict: 'E',
            scope: {
                open: '=',
                inputCollection:'=',
                functionTemplate:'=',
                validateAction:'=',
                addAction:'=',
                updateAction:'=',
                deleteAction:'=',
                closeAction:'='
            },
            link: function (scope, element, attrs) {

                var fountionTemplate={};
                scope.$watch("open",function(newValue) {
                    if(newValue)
                    {
                        scope.modal.open();
                    }
                });
                scope.isConditionError=false;
                scope.$watch("functionTemplate",function(newValue) {
                    if(newValue)
                    {
                        fountionTemplate=collectionJsonAnalyer.LinkConvertLinkClass(newValue);
                        collectionJsonAnalyer.isCreatorTemplate(fountionTemplate,function(isShow)
                        {
                            scope.isCreatorTemplate=isShow;
                        });
                        collectionJsonAnalyer.isEditTemplate(fountionTemplate,function(isShow)
                        {
                            scope.isEditTemplate=isShow;
                        });
                        collectionJsonAnalyer.isValidatorTemplate(fountionTemplate,function(isShow)
                        {
                            scope.isValidatorTemplate=isShow;
                        });

                    }
                });


                scope.cmdBtnValidate=function()
                {
                    if( scope.addAction)
                    {
                        scope.validateAction(scope.inputCollection);
                    }
                    scope.open=false;
                    scope.modal.close();
                };
                scope.cmdBtnAdd=function()
                {
                    if( scope.addAction)
                    {
                        scope.addAction(scope.inputCollection,collectionJsonAnalyer.getCreatorLinkFromLinkClass(fountionTemplate));
                    }
                    scope.open=false;
                    scope.modal.close();

                };
                scope.cmdBtnUpdate=function()
                {
                    if( scope.updateAction)
                    {
                        scope.updateAction(scope.inputCollection,fountionTemplate);
                    }
                    scope.open=false;
                    scope.modal.close();
                };
                scope.cmdBtnDelete=function()
                {
                    if (scope.deleteAction)
                    {
                        scope.deleteAction(scope.inputCollection,fountionTemplate);
                    }
                    scope.open=false;
                    scope.modal.close();
                };
                scope.cmdBtnClose=function()
                {
                    if (scope.closeAction)
                    {
                        scope.closeAction(scope.inputCollection);
                    }
                    scope.open=false;
                    scope.modal.close();

                };

                scope.getObjectMappingNameToValueFromDatas=collectionJsonAnalyer.getObjectMappingNameToValueFromDatas;



            },
            templateUrl: '/RcordIndexSearch/recordIndexSearch/view/filterEditorModal.html'
        };
    });

}();








