(function() {
    'use strict';

    angular
        .module('maBanque')
        .directive('jbRangeDirective', RangeDirective);

    function RangeDirective() {

        var directive = {
            link: link,
            template: `
                <input type="range" ng-model="initial" class="form-control" min="1" max="{{max}}" />
                <span class=""></span>
            `,
            restrict: 'E',
            scope: {
                initial : "@",
                valeurmax: "=",
                max="@"
            }
        };
        return directive;
        
        function link(scope, element, attrs) {

        }
    }
})();