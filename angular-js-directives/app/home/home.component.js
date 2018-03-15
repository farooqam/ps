(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('home',  {
        templateUrl: 'home/home.component.html',
        controller: [function(){
            var $ctrl = this;

            angular.extend($ctrl, {
                message: '',
                user: {
                    name: 'Farooq Mahmud',
                    contacted: false,
                    canContact: true,
                    shortBio: 'He is a cool guy!',
                    address: {
                        city: 'Redmond'
                    }
                }
            });

            angular.extend($ctrl, {
                $onInit: function() {
                    $ctrl.message = 'Hello';
                }
            });
        }]
      });
  })();
  