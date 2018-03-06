(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('authorCourses',  {
        bindings: {
          author: '<'
        },
        templateUrl: 'authorCourses/authorCourses.component.html'
      });
  })();