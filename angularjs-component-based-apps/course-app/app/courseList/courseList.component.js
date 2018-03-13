(function () {
  'use strict';

  angular.module('rootModule')
    .component('courseList',  {
      templateUrl: 'courseList/courseList.component.html',
      controller: ['courseService', '$log',
        function(courseService, $log) {
          var $ctrl = this;

          angular.extend($ctrl, {
            courses: {}
          });

          angular.extend($ctrl, {
            $onInit: function() {
              courseService.getAllCourses()
                .then(function(courses) {
                  $ctrl.courses = courses;
                });
            }
          });
        }
      ]
    });
})();
