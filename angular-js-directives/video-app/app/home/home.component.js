(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('home',  {
        templateUrl: 'home/home.component.html',
        controller: [function(){
            var $ctrl = this;
        }]
      });
  })();
  