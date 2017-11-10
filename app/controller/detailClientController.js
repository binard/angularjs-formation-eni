(function () {
    'use strict';

    angular
        .module('maBanque')
        .controller('DetailClientController', ['$scope', '$routeParams', '$location', 'DataRestService', DetailClientController])

    function DetailClientController($scope, $routeParams, $location, dataService) {

        var userId = $routeParams.userId;
        $scope.client = angular.copy(dataService.client(userId));

        $scope.deleteClient = function(){
            dataService.removeClient($scope.client.id).then(function(){
                $location.path('/list');
            });            
		};
    }

}());