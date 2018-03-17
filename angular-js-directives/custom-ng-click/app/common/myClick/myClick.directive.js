(function () {
    'use strict';

    angular.module('rootModule')
        .directive('myClick', ['$parse', '$log', function ($parse, $log) {
            return {
                restrict: 'A',
                link: function ($scope, $element, $attrs) {
                    var fn = $parse($attrs['myClick']);
                    
                    $element.on('click', function() {
                        $scope.$apply(function() {
                            fn($scope);
                        });
                    });
                }
            }
        }]);
})();