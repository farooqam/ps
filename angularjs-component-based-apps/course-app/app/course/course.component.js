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
            angular.extend(this, {
              $onInit: function() {
                this.course = {
                  courseId: this.courseId
                };
              }
            });
          }
        ]
      });
  })();
  