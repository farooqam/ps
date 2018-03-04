(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('courseHeading',  {
        bindings: {
          course: '<'
        },
        templateUrl: 'courseHeading/courseHeading.component.html'
      });
  })();