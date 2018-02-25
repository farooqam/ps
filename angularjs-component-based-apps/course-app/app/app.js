(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    var rootModule = angular.module('rootModule', [
        'ui.router'
    ]);


    rootModule.config(['$stateProvider', function ($stateProvider) {
        var states = [
            {
                name: 'home',
                url: '',
                template: '<home></home>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'courses',
                url: '/courses',
                template: '<course-list></course-list>'
            },
            {
                name: 'authors',
                url: '/authors',
                template: '<author-list></author-list>'
            }
        ];

        states.forEach(function(state) {
            $stateProvider.state(state);
        });
        

    }]);

    rootModule.value('componentBorders', true);

    rootModule.run(function (componentBorders) {
        if (componentBorders) {
            if (rootModule._invokeQueue) {
                rootModule._invokeQueue.forEach(function (item) {
                    if (item[1] == 'component') {
                        var componentName = item[2][0];
                        var componentProperties = item[2][1];
                        if (componentProperties.templateUrl) {
                            var templateUrl = componentProperties.templateUrl;
                            delete componentProperties.templateUrl;
                            componentProperties.template = '<div class="debug-component-borders"><b class="debug-component-name">' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                        }
                        else {
                            var template = '<div class="component-borders">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                            componentProperties.template = template;
                        }
                    }
                });
            }
        }
    });
})();

