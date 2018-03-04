(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('courseDescription',  {
        bindings: {
          course: '<'
        },
        templateUrl: 'courseDescription/courseDescription.component.html'
      });
  })();