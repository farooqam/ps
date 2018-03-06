(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('authorList',  {
        templateUrl: 'authorList/authorList.component.html',
        controller: ['apiBase', '$http', '$log',
          function(apiBase, $http, $log) {
            var $ctrl = this;

            angular.extend($ctrl, {
              authors: {}
            });

            angular.extend($ctrl, {
              $onInit: function() {
                $http.get(apiBase + '/authors')
                  .then(function(result) {
                    $log.info(result.data);
                    $ctrl.authors = result.data;
                  });
              }
            });
          }]
      });
  })();
  