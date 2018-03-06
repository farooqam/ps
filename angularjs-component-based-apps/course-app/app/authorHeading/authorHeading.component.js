(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('authorHeading',  {
        bindings: {
          author: '<'
        },
        templateUrl: 'authorHeading/authorHeading.component.html'
      });
  })();