(function(){
    'use strict';

    angular
        .module('maBanque')
        .config(['$routeProvider', appConfig])

    function appConfig($routeProvider){

        $routeProvider.when("/", {
            templateUrl : "./app/view/home.html",
            controller: 'HomeController'
        })
        .when("/list", {
            templateUrl : "./app/view/list.html",
            controller: 'ClientController'
        })          
        .when("/detail/:userId", {
            templateUrl : "./app/view/detail.html",
            controller: 'DetailClientController'
        }) 
        .when("/edit/:userId?", {
            templateUrl : "./app/view/client-form.html",
            controller: 'ClientEditController'
        })                
        .otherwise({
            redirectTo : "/"
        });
    }

}());