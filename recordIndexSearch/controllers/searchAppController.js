/**
 * Created by YINGCHIEH on 8/13/2014.
 */

var defaulCollection={"collection":{"queries":[{"href":"/search","rel":"search","data":[{"name":"q","value":""}]}],"items":[{"href":"/upg5VFNbTi2zgZHXUey0ow","data":[{"name":"test","prompt":"test title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/WJTuhBI3TnmpR9Bzj5HLwg","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/OHJ3IVc2SmCgl966sPgJoA","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/23","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/'23'","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/3321","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/_vNkqVa5QXet-pQVeRA3wQ","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/2","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/abc","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/1234","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]}],"version":"1.0","links":[{"href":"/page/2","rel":"next","prompt":"Next"}],"template":{"data":[{"name":"title","prompt":"titel promt","value":""},{"name":"condition","prompt":"es filter script","value":""}]},"href":"192.168.2.27/"}};


var searchAppfactory= function ($q,$http){
    return {
        getFakeData:function()
        {
            var deferred = $q.defer();
            deferred.resolve(defaulCollection)
            return deferred.promise;
        } ,
        get: function(url) {
            var deferred = $q.defer();
            $http.get(url).success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                data={"collection":{"queries":[{"href":"/search","rel":"search","data":[{"name":"q","value":""}]}],"items":[{"href":"/upg5VFNbTi2zgZHXUey0ow","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/WJTuhBI3TnmpR9Bzj5HLwg","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/OHJ3IVc2SmCgl966sPgJoA","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/23","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/'23'","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/3321","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/_vNkqVa5QXet-pQVeRA3wQ","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/2","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/abc","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/1234","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]}],"version":"1.0","links":[{"href":"/page/2","rel":"next","prompt":"Next"}],"template":{"data":[{"name":"title","prompt":"titel promt","value":""},{"name":"condition","prompt":"es filter script","value":""}]},"href":"192.168.2.27/"}};
                deferred.resolve(data);
            });
            return  deferred.promise;
        },
        jsonp: function(url) {
            var deferred = $q.defer();
            $http.jsonp(url).success(function(data)
            {
                deferred.resolve(data);

            }).error(function(data)
                {
                    data={"collection":{"queries":[{"href":"/search","rel":"search","data":[{"name":"q","value":""}]}],"items":[{"href":"/upg5VFNbTi2zgZHXUey0ow","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/WJTuhBI3TnmpR9Bzj5HLwg","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/OHJ3IVc2SmCgl966sPgJoA","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/23","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/'23'","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/3321","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/_vNkqVa5QXet-pQVeRA3wQ","data":[{"name":"title","prompt":"filter's title"}],"links":[{"href":"","rel":""}]},{"href":"/2","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]},{"href":"/abc","data":[{"name":"title","prompt":"filter's title","value":"mytilte"}],"links":[{"href":"","rel":""}]},{"href":"/1234","data":[{"name":"title","prompt":"filter's title","value":"test"}],"links":[{"href":"","rel":""}]}],"version":"1.0","links":[{"href":"/page/2","rel":"next","prompt":"Next"}],"template":{"data":[{"name":"title","prompt":"titel promt","value":""},{"name":"condition","prompt":"es filter script","value":""}]},"href":"192.168.2.27/"}};
                    deferred.resolve(data);
                }
            )
            return deferred.promise;
        }
    };
}

var app = angular.module('searchAppModule', ['kendo.directives','ngRoute']).config(['$httpProvider','$routeProvider', function($httpProvider,$routeProvider) {
    $httpProvider.defaults.timeout = 1;
    $routeProvider.when('/',
        {
            templateUrl:'/RcordIndexSearch/recordIndexSearch/view/detailDataCount.html',
            controller:'searchAppController'
        }).when('/detailDateRange',
        {
            templateUrl:'/RcordIndexSearch/recordIndexSearch/view/detailDateRange.html',
            controller:'searchAppController'
        }).when('/detailElseTool',
        {
            templateUrl:'/RcordIndexSearch/recordIndexSearch/view/detailElseTool.html',
            controller:'searchAppController'
        }).otherwise(
        {
            redirectTo:'/'
        })
}]).factory('AjaxCall',[ '$q','$http',searchAppfactory]);




app.controller('searchAppController',['AjaxCall','$scope',function(AjaxCall,$scope)
{
    $scope.template ='<li> <a href="http://192.168.2.27:9000/filters{{dataItem.href}}" target="_blank" >{{dataItem.value}}</a></li>';
    var jsonplastString="?callback=JSON_CALLBACK";
    $scope.query="http://192.168.2.27:9000/filters";

    //cmd
    $scope.cmdSearch= function ()
    {
        var url= $scope.query;

        AjaxCall.getFakeData().then(function(jsonCollection)
        {
            $scope.mainGridOptions.dataSource.data= getHrefFromItemsOfJsonCollection(jsonCollection);
            $scope.dataCount=$scope.mainGridOptions.dataSource.data.length;
        });
    }
    $scope.cmdClearList= function ()
    {
            $scope.mainGridOptions.dataSource.data= [];
            $scope.dataCount=0;
    }

    $scope.onClick2 = function(dataItem) {
        alert(dataItem.href);
    };

    var getHrefFromItemsOfJsonCollection=function(jsonCollection)
    {
        var results=[];
        var items= jsonCollection.collection.items;
        for(var index in items){

            for(var indexdown in items[index].data)
            {
                items[index].data[indexdown].href=items[index].href;
                results.push(items[index].data[indexdown])
            }
        }

        return results;
    }




    //grid
    $scope.mainGridOptions = {
        dataSource:
        {
            data:[]
        },
        sortable: true,
        pageable: false,
        detailTemplate:kendo.template($("#template").html()),

        dataBound: function() {
            this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
        columns:[
            {
                field:"href"
                ,title:"href"
            }
            ,
            {
                field:"name"
                ,title:"Name"
            }
            ,
            {
                field:"value"
                ,title:"Value"
            }
            ,
            {
                field:"template"
                ,title:"template",
                template:kendo.template($("#hrefColumntemplate").html())
            }
        ]
    };
}])
