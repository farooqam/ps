(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('handlePause', ['$log', function($log) {
            return {
                restrict: 'A',
                scope: {
                    handlePause: '&'
                },
                link: function($scope, $element, $attrs) {
                  $element.on('pause', function(e) {
                      $log.info('video paused.');
                    $scope.$apply(function() {
                        $scope.handlePause();
                    });
                  });
                }
            }
        }]);
  })();
  