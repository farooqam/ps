(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('userInfoCard', ['$log', function($log) {
            return {
                restrict: 'E',
                scope: {
                    user: '=',
                    initialState: '@',
                    remove: '&'
                },
                replace: true,
                templateUrl: 'common/userInfoCard/userInfoCard.directive.html',
                link: function($scope, $element, $attrs, $controller) {
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

                    $scope.removeCard = function(user) {
                        $log.info('userInfoCard directive removeCard called.');
                        $scope.remove({user: user});
                    }
                }
            }
        }]);
  })();
  