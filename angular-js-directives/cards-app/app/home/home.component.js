(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('home',  {
        templateUrl: 'home/home.component.html',
        controller: [function(){
            var $ctrl = this;

            angular.extend($ctrl, {
                message: '',
                users: [
                    {
                        name: 'Farooq Mahmud',
                        contacted: false,
                        canContact: true,
                        shortBio: 'He is a cool guy!',
                        address: {
                            city: 'Redmond',
                            state: 'WA',
                            street: '123 Main St.'
                        }
                    },
                    {
                        name: 'Yasin Mahmud',
                        contacted: false,
                        canContact: true,
                        shortBio: 'He is a cool boy!',
                        address: {
                            city: 'Redmond',
                            state: 'WA',
                            street: '336 1st St.'
                        }
                    },
                    {
                        name: 'Noor Mahmud',
                        contacted: false,
                        canContact: true,
                        shortBio: 'She is a cool girl!',
                        address: {
                            city: 'Redmond',
                            state: 'WA',
                            street: '336 1st St.'
                        }
                    },
                    {
                        name: 'Emily Green',
                        contacted: false,
                        canContact: true,
                        shortBio: 'She is a cool girl!',
                        address: {
                            city: 'Redmond',
                            state: 'WA',
                            street: '1339 Glenview St.'
                        }
                    },
                    {
                        name: 'Andrew Green',
                        contacted: false,
                        canContact: true,
                        shortBio: 'He is a cool boy!',
                        address: {
                            city: 'Redmond',
                            state: 'WA',
                            street: '1339 Glenview St.'
                        }
                    }
                ]
                
            });

            angular.extend($ctrl, {
                $onInit: function() {
                    $ctrl.message = 'Hello';
                },
                removeCard: function(user) {
                    var index = $ctrl.users.indexOf(user);

                    if(index <= -1) {
                        return;
                    }

                    $ctrl.users.splice(index, 1);
                }
            });
        }]
      });
  })();
  