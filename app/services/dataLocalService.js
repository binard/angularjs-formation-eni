(function() {
    'use strict';

    angular.module('maBanque')
           .factory('DataLocalService', [DataLocalService]);

    function DataLocalService() {
        var data = [];
        
        function load(){            
            data = JSON.parse(localStorage.data);
        }

        function save(){
            localStorage['data'] = angular.toJson(data); // ne pas utiliser stringify
        }

        function removeClient(id) {
            data.clients = data.clients.filter(function(c){return  c.id !== id })
            save();
            return data.clients;     
        }        

        function addClient(client){
            if(!client.Id){
                var maxId = Math.max.apply(Math,data.clients.map(function(cli){return cli.id;}));
                client.id = maxId + 1;
            }
            data.clients.push(client);
            save();
            return client.id;
        }        

        load();

        return {
            clients : function(){
                return data.clients;
            },
            client : function(id){
                return data.clients.find(function(c){ return  c.id == id });
            },
            addClient : addClient,
            updateClient: function(client){
                removeClient(client.id);
                addClient(client);
                save();
            },
            removeClient : removeClient
        };
    }
})();