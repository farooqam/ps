(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('address', function() {
            return {
                restrict: 'E',
                scope: true,
                replace: true,
                templateUrl: 'common/address/address.directive.html',
                controller: ['$scope', function($scope){
                    $scope.$onInit = function() {
                        $scope.collapsed = false;
                    }

                    $scope.hideAddress = function() {
                        console.log('hideAddress - clicked');
                        $scope.collapsed = true;
                    }

                    $scope.showAddress = function() {
                        console.log('showAddress - clicked');
                        $scope.collapsed = false;
                    }

                }]
            }
        });
  })();
  