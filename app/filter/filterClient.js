(function() {
    'use strict';

    angular
        .module('maBanque')
        .filter('filterClient', filterClient);

    function filterClient() {

        return function (clients, recherche) {
            
            recherche = recherche || "";

            return clients.filter(c => (c.nom + " " + c.prenom).toLowerCase().indexOf(recherche.toLowerCase()) >= 0 );
        }
    }
})();