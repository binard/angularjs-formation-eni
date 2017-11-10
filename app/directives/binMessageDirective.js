(function() {
    'use strict';

    angular
        .module('biblioDirectives', [])
        .directive('binMessage', binMessage);

    function binMessage() {

        var directive = {
            restrict: 'E',
            template: `
                <div class="alert alert-{{messageType}}" role="alert">            
                    <button type="button" class="close" ng-click="action()" aria-label="More"><span aria-hidden="true">+</span></button>
                    <div>
                        {{message}} {{deuxieme}}
                    </div>
                    <div>
                        <input type="text" ng-model="deuxieme" class="form-control" />
                    </div>
                </div>
            `,
            scope: {
                message: "@",
                messageType: "@",
                action: "&",
                deuxieme: "=?"
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function ControllerController () {
        
    }
})();