(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('userInfoCard', ['$log', function($log) {
            return {
                restrict: 'E',
                scope: {
                    user: '=',
                    initialState: '@'
                },
                replace: true,
                templateUrl: 'common/userInfoCard/userInfoCard.directive.html',
                link: function($scope, $element, $attrs) {
                    $scope.collapsed = !($attrs.collapsed === undefined);
                    
                    $scope.contactUser = function(user) {
                        user.contacted = true;
                    }

                    $scope.undoContactUser = function(user) {
                        user.contacted = false;
                    }

                    $scope.collapseCard = function() {
                        $scope.collapsed = !$scope.collapsed;
                    }
                }
            }
        }]);
  })();
  