/**
 * Created by YINGCHIEH on 9/1/2014.
 */
var filterEditorControllerConstructor=
    function(){
        var app=angular.module('LogCollectionJasonService',['ngResource'])
            .factory('RecfilterCollectionJason',function($q,$http){
               return {getFakeData: function () {
                    var deferred = $q.defer();
                    deferred.resolve(fakedata)
                    return deferred.promise;
                },
                get: function (href) {
                    var deferred = $q.defer();
                    $http.get(domainIP+href).success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    }).error(function (data, status, headers, config) {
                        data = {};
                        deferred.resolve(data);
                    });
                    return  deferred.promise;
                },
                jsonp: function (href) {
                    var deferred = $q.defer();
                    $http.jsonp(domainIP+href).success(function (data) {
                        deferred.resolve(data);
                    }).error(function (data) {
                            data = {};
                            deferred.resolve(data);
                        }
                    )
                    return deferred.promise;
                },
                   post:function(href,data)
                   {
                       var deferred = $q.defer();

                       var urlToGo=domainIP+href;
                       $http(
                               {
                                   method:"POST"
                                   ,data:data,
                                   url:urlToGo
                               }
                            )
                           .success(function(response)
                           {
                               deferred.resolve(response);
                           }).error(function(response)
                           {
                               deferred.error(response);
                           });
                       return deferred.promise;
                   },
                   put:function(href,data)
                   {
                       var deferred = $q.defer();
                        console.log(JSON.stringify(data));
                       var urlToGo=domainIP+href;
                       $http(
                           {
                               method:"PUT"
                               ,data:data,
                               url:urlToGo
                           }
                       )
                           .success(function(response)
                           {
                               deferred.resolve(response);
                           }).error(function(response)
                           {
                               deferred.error(response);
                           });
                       return deferred.promise;
                   },
                   delete:function(href)
                   {
                       var deferred = $q.defer();

                       var urlToGo=domainIP+href;
                       $http(
                           {
                               method:"DELETE"
                               ,url:urlToGo
                           }
                       ).success(function(response)
                           {
                               deferred.resolve(response);
                           }).error(function(response)
                           {
                               deferred.error(response);
                           });
                       return deferred.promise;
                   }

               }
            })

    }();