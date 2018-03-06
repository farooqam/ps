(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    var rootModule = angular.module('rootModule', [
        'ui.router'
    ]);


    rootModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
                name: 'course',
                url: '/courses/{courseId}',
                resolve: {
                    courseId: function($stateParams) {
                        return $stateParams.courseId;
                    }
                },
                template: '<course course-id="$resolve.courseId"></course>'
            },
            {
                name: 'course.modules',
                url: '/modules',
                template: '<course-modules course="$ctrl.course"></course-modules>'
            },
            {
                name: 'course.description',
                url: '/description',
                template: '<course-description course="$ctrl.course"></course-description>'
            },
            {
                name: 'course.discussion',
                url: '/discussion',
                template: '<course-discussion course="$ctrl.course"></course-discussion>'
            },
            {
                name: 'authors',
                url: '/authors',
                template: '<author-list></author-list>'
            },
            {
                name: 'author',
                url: '/authors/{authorId}',
                resolve: {
                    authorId: function($stateParams) {
                        return $stateParams.authorId;
                    }
                },
                template: '<course-author-info author-id="$resolve.authorId"></course-author-info>'
            },
            {
                name: 'author.bio',
                url: '/bio',
                template: '<author-bio author="$ctrl.author"></author-bio>'
            },
            {
                name: 'author.courses',
                url: '/courses',
                template: '<author-courses author="$ctrl.author"></author-courses>'
            },
        ];

        $urlRouterProvider.when('/courses/:courseId', '/courses/:courseId/description');
        $urlRouterProvider.otherwise('/');
        
        states.forEach(function(state) {
            $stateProvider.state(state);
        });
        

    }]);

    rootModule.value('componentBorders', true);
    rootModule.value('apiBase', 'http://pluralsightcourseviewer.azurewebsites.net/api/courseviewer');

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

