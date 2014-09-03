/**
 * Created by YINGCHIEH on 8/26/2014.
 */



var recorderIndexCollectionJsonAnalyes = function () {
    var DataClass = function (name, value, prompt, href) {
        this.name = name;
        this.value = value;
        this.prompt = prompt;
        this.href = href;

    }

    var LinkClass = function (rel, href) {
        this.rel = rel;
        this.href = href;

    }

    var isRELTemplateValidate=function (linkList, validateRelName,callback) {
        var result = false;
        angular.forEach(linkList, function (link) {
            if (link.rel) {

                if (link.rel.toUpperCase() === validateRelName.toUpperCase()) {
                    result = true;
                    return;
                }
                ;
            }
        })
        if (callback) {
            callback(result);
        }

        return result;
    }

    var getRELTemplateValidate=function (linkClass,validateRelName ,callback) {
        var result = {};

        angular.forEach(linkClass, function (link) {
            if (link.rel) {
                if (link.rel.toUpperCase() === validateRelName.toUpperCase()) {
                    result = link;
                    return link;
                }
                ;
            }
        })
        if (callback) {
            callback(result);
        }
        return result;
    }

     angular.module('log8k.collectionJsonAnalyer', [])
        .factory('collectionJsonAnalyer', function () {
            return{
                getDatasFromCollectionJson: function (collectionJson) {
                    var datas = new Array();
                    angular.forEach(collectionJson.collection.items, function (item) {
                        angular.forEach(item.data, function (detailItem) {
                            var data = new DataClass(detailItem.name, detailItem.value, detailItem.prompt, item.href);
                            datas.push(data);
                        })
                    })
                    return datas;
                },
                getLinkFromCollectionJson: function (collectionJson) {

                    return LinkConvertLinkClass(collectionJson.collection.links);
                },
                LinkConvertLinkClass: function (links) {
                    var linkResults = new Array();
                    angular.forEach(links, function (link) {
                        linkResults.push(new LinkClass(link.rel, link.href));
                    });
                    return linkResults;
                },
                isCreatorTemplate: function (linkList, callback) {

                    return isRELTemplateValidate(linkList,"creator",callback);
                },
                isEditTemplate:  function (linkList, callback) {

                    return isRELTemplateValidate(linkList,"edit",callback);
                },
                isValidatorTemplate:  function (linkList, callback) {

                    return isRELTemplateValidate(linkList,"validator",callback);
                },
                getCreatorLinkFromLinkClass: function (linkClass, callback) {
                    return getRELTemplateValidate(linkClass,"creator",callback);
                },
                getEditLinkFromLinkClass: function (linkClass, callback) {
                    return getRELTemplateValidate(linkClass,"edit",callback);
                },
                getValidatorLinkFromLinkClass: function (linkClass, callback) {
                    return getRELTemplateValidate(linkClass,"validator",callback);
                },
                getObjectMappingNameToValueFromDatas:function(name,datas)
                {
                    var result={};
                    angular.forEach(datas, function (data) {
                        if (data.name) {
                            if (data.name.toUpperCase() ===name.toUpperCase()) {
                                result=data;
                                return data;
                            }
                        }
                    })
                    return result;
                }

            }


        })


}();