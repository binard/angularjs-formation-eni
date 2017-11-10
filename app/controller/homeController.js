(function(){
    'use strict';

    angular
        .module('maBanque')
        .controller('HomeController', ['$scope', HomeController])

    function HomeController($scope){
        $scope.infoMessage = "Ceci est une alerte info";
        $scope.displayDetail = false;

        $scope.showMessage = function(){
            $scope.displayDetail = true;
        };
    }

}());