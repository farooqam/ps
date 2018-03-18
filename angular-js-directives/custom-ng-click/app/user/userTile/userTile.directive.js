(function () {
    'use strict';

    angular.module('rootModule')
        .directive('userTile', ['$log', function ($log) {
            return {
                restrict: 'E',
                scope: {
                    user: '='
                },
                templateUrl: 'user/userTile/userTile.directive.html'
                }
            
        }]);
})();