(function(){
    'use strict';

    angular
        .module('maBanque')
        .filter('filterPager', filterPager)

    function filterPager(){

        return function(items, currentPage, itemsPerPage) {
            return items.slice(((currentPage-1)*itemsPerPage), ((currentPage)*itemsPerPage));
        }
    }

}());