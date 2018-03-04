(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('course',  {
        templateUrl: 'course/course.component.html',
        bindings: {
          courseId: '<'
        },
        controller: [
          function() {
            var $ctrl = this;

            angular.extend($ctrl, {
              $onInit: function() {
                $ctrl.course = {
                  courseId: $ctrl.courseId
                };
              }
            });
          }
        ]
      });
  })();
  