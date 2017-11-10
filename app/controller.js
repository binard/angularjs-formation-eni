(function (){    
    var app = angular.module("maBanque");
    app.constant("myPrenom", "Michel");

    app.controller("demoController", ["$scope", "myPrenom", function demoController($scope, myFirstname){
        $scope.message = "Ma première app angular js ";
        $scope.InfoMessage = "";
        $scope.prenom = "Alain";
        var _username = myFirstname;
        $scope.username = function(newValue) {
            _username = angular.isDefined(newValue) ? newValue.toUpperCase() : _username;
            return _username;
        }

        $scope.test = function(){
            $scope.message = $scope.message = $scope.message.toUpperCase();
        };
    }]);
})();