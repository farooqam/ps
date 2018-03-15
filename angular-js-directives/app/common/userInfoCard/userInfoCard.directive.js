(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('userInfoCard', function() {
            return {
                restrict: 'E',
                scope: {
                    user: '='
                },
                replace: true,
                templateUrl: 'common/userInfoCard/userInfoCard.directive.html',
                controller: ['$scope', function($scope){
                    $scope.contactUser = function(user) {
                        user.contacted = true;
                    },

                    $scope.undoContactUser = function(user) {
                        user.contacted = false;
                    }
                }]
            }
        });
  })();
  