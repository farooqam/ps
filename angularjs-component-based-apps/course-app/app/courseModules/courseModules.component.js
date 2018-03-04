(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('courseModules',  {
        bindings: {
          course: '<'
        },
        templateUrl: 'courseModules/courseModules.component.html'
      });
  })();
  