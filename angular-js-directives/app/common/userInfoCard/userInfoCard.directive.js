(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('userInfoCard', function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'common/userInfoCard/userInfoCard.directive.html'
            }
        });
  })();
  