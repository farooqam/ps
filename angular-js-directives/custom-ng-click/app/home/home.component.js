(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('home',  {
        templateUrl: 'home/home.component.html',
        controller: ['$log', function($log){
            var $ctrl = this;

            angular.extend($ctrl, {
              message: 'I have not been clicked.',
              user1: {
                name: 'Farooq Mahmud',
                selected: false
              }
            });

            angular.extend($ctrl, {
              handleClick: function() {
                $ctrl.message = 'I have been clicked!';
              }
            });

            angular.extend($ctrl, {
              toggleUserSelect: function(user){
                  $log.info('toggleUserSelect called.');
                  user.selected = !user.selected
              }
            });

        }]
      });
  })();
  