(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('home',  {
        templateUrl: 'home/home.component.html',
        controller: ['$log', function($log){
            var $ctrl = this;

            angular.extend($ctrl, {
              messages: []
            });

            angular.extend($ctrl, {
              handlePause: function(e){
                $log.info(e);
                $ctrl.messages.push({text: 'video paused'});
              }
            });
        }]
      });
  })();
  