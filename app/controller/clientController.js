(function() {
	'use strict';

	angular
		.module('maBanque')
		.controller('ClientController', ["$scope", "DataRestService", ClientController]);

	function ClientController($scope, dataService, pagerService) {
		$scope.clients = [];
		$scope.currentPage = 1;

		dataService.clients().then(function(clients){
			$scope.clients = clients;
			console.log(clients.length);
			$scope.limit = 10;
			$scope.max = clients.length;
			$scope.currentPage = 1;
		});
	}
})();