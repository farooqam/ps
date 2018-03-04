(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('courseDiscussion',  {
        bindings: {
          course: '<'
        },
        templateUrl: 'courseDiscussion/courseDiscussion.component.html'
      });
  })();