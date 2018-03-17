(function () {
    'use strict';

    angular.module('rootModule')
        .directive('handlePause', ['$parse', '$log', function ($parse, $log) {
            return {
                restrict: 'A',
                link: function ($scope, $element, $attrs) {
                    var fn = $parse($attrs['handlePause']);
                    
                    $element.on('pause', function (e) {
                        $log.info('video paused.');
                        $scope.$apply(function () {
                            fn($scope, {evt: e});
                        });
                    });
                }
            }
        }]);
})();
