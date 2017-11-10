(function(){
    'use strict';

    angular.module('maBanque')
    .factory('DataRestService', ['$http', '$q', 'API_URL', DataRestService]);

    function DataRestService($http, $q, API_URL){

        var data = {clients: []};
        
        return {
            clients : function(){
                
                var deferred = $q.defer();
                
                $http({
                    url:API_URL+"/clients",
                    method:"get"
                }).then(function(res){
                    console.log(res.data);
                    data.clients = res.data;
                    deferred.resolve(data.clients);
                }, function(err){
                    console.warn("Erreur lors de la récupération des données");
                    deferred.reject(err);                        
                });

                return deferred.promise;
            },
            client : function(id){
                return data.clients.find(function(c){ return  c.id == id });
            },
            addClient : function(client){
                var deferred = $q.defer();

                $http({
                    url:API_URL+"/clients/0",
                    method:"post",
                    params: client
                }).then(function(res){
                    console.log(res.data);
                    deferred.resolve();
                }, function(err){
                    console.warn("Erreur lors de la création du client");
                    deferred.reject(err);                        
                });

                return deferred.promise;
            },
            updateClient: function(client){
                var deferred = $q.defer();

                $http({
                    url:API_URL+"/clients/" + client.id,
                    method:"put",
                    params: client
                }).then(function(res){
                    console.log(res.data);
                    deferred.resolve();
                }, function(err){
                    console.warn("Erreur lors de la mise à jour du client");
                    deferred.reject(err);                        
                });

                return deferred.promise;
            },
            removeClient : function(id){
                var deferred = $q.defer();

                $http({
                    url:API_URL+"/clients/" + id,
                    method:"delete"
                }).then(function(res){
                    console.log(res.data);
                    deferred.resolve();
                }, function(err){
                    console.warn("Erreur lors de la suppression du client");
                    deferred.reject(err);                        
                });

                return deferred.promise;
            }
        };
    }
}());