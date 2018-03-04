(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('courseList',  {
        templateUrl: 'courseList/courseList.component.html',
        controller: ['apiBase', '$http', '$log',
          function(apiBase, $http, $log) {
            var $ctrl = this;

            angular.extend($ctrl, {
              courses: {}
            });

            angular.extend($ctrl, {
              $onInit: function() {
                $http.get(apiBase + '/courses')
                  .then(function(result) {
                    $log.info(result.data);
                    $ctrl.courses = result.data;
                  });
              }
            });
          }
        ]
      });
  })();
  