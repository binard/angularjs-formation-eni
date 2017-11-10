(function(){
    'use strict';

    angular
        .module('maBanque')
        .controller('ClientEditController', ['$scope', '$routeParams', '$location', 'DataRestService', ClientEditController])

    function ClientEditController($scope, $routeParams, $location, dataService){
        
        var userId = $routeParams.userId;
        $scope.client = userId ? angular.copy(dataService.client(userId)) : {};

        // angular.toJson // dans les controller à la place de parse
        // angular.fromJson // dans les controller à la place du stringify

        $scope.save = function(){
            if($scope.client.id){
                // Edition client
                dataService.updateClient(angular.copy($scope.client)).then(function(){
                    $location.path('/list/');
                });; // nettoyage des objets avec l'angular copy
            }
            else{
                // Nouveau client
                dataService.addClient(angular.copy($scope.client)).then(function(){
                    $location.path('/list/');
                });
            }
            
        }
    }

}());