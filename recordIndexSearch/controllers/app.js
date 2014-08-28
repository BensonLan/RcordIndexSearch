/**
 * Created by YINGCHIEH on 8/13/2014.
 */

domainIP = "http://rd1-andy-08r2:9000"

var appConstructor = function () {

    var app = angular.module('appModule', ['searchAppModule', 'filterAppModule', 'filterEditorModule', 'ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/',
                {
                    templateUrl: '/RcordIndexSearch/recordIndexSearch/view/searchApp.html',
                    controller: 'searchAppController'
                }).when('/filter',
                {
                    templateUrl: '/RcordIndexSearch/recordIndexSearch/view/filterApp.html',
                    controller: 'filterController'
                }).when("/filterEditor/:data",
                {
                    templateUrl: '/RcordIndexSearch/recordIndexSearch/view/filterEditorApp.html',
                    controller: 'filterEditorController'
                })

            /*         .otherwise(
             {
             redirectTo:'/'
             } )*/

        }]);
    app.controller('appController', ['$location', function ($location) {
        $location.url("/filter");
    }])
}();

