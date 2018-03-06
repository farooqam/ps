(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('authorBio',  {
        bindings: {
          author: '<'
        },
        templateUrl: 'authorBio/authorBio.component.html'
      });
  })();