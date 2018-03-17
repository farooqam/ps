(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('home',  {
        templateUrl: 'home/home.component.html',
        controller: ['$log', function($log){
            var $ctrl = this;

            angular.extend($ctrl, {
              message: 'I have not been clicked.'
            });

            angular.extend($ctrl, {
              handleClick: function() {
                $ctrl.message = 'I have been clicked!';
              }
            });
        }]
      });
  })();
  