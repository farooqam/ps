(function () {
    'use strict';

    angular.module('rootModule')
        .directive('userTile', ['$log', function ($log) {
            return {
                restrict: 'E',
                scope: {
                    user: '='
                },
                templateUrl: 'user/userTile/userTile.directive.html',
                link: function($scope, $element, $attrs) {
                    angular.extend($scope, {
                        toggleUserSelect: function(user){
                            $log.info('toggleUserSelect called.');
                            user.selected = !user.selected
                        }
                    });
                }
                }
            
        }]);
})();