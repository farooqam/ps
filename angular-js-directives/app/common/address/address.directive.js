(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('address', ['$log', function($log) {
            return {
                restrict: 'E',
                scope: {
                    user: '='
                },
                replace: true,
                templateUrl: 'common/address/address.directive.html',
                link: function($scope, $element, $attrs) {
                    $scope.collapsed = false;

                    $scope.hideAddress = function() {
                        $scope.collapsed = true;
                    }

                    $scope.showAddress = function() {
                        $scope.collapsed = false;
                    }
                }
            }
        }]);
  })();
  