(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('authorList',  {
        templateUrl: 'authorList/authorList.component.html',
        controller: ['authorService', '$log',
          function(authorService, $log) {
            var $ctrl = this;

            angular.extend($ctrl, {
              authors: {}
            });

            angular.extend($ctrl, {
              $onInit: function() {
                authorService.getAllAuthors()
                .then(function(authors) {
                  $ctrl.authors = authors;
                });
              }
            });
          }]
      });
  })();
  