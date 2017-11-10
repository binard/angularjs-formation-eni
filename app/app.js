(function (){
    "use strict"; // javascript 5, restriction, obligation de déclarer les variables

    if(![].find){
        Array.prototype.find = function(predicate, thisArg){
            for(var i =0; i < this.length; i++){
                if(predicate.apply(thisArg, [this[i], i, this])) { // thisArg.predicate(this[i], i , this)
                    return this[i];
                }
            }
            return undefined;
        }
    }

    //window.eni = window.eni || {};

    var app = angular.module("maBanque", ["ngRoute", "ui.bootstrap", "biblioDirectives"]);
    app.constant('API_URL', 'http://wildfly.westeurope.cloudapp.azure.com');

    app.run(['$rootScope', appRun]);

    function appRun ($rootScope){
        console.log('L\'application est prète');
        $rootScope.prenom = "Bernardus";
    }

    console.dir(app);
})();
