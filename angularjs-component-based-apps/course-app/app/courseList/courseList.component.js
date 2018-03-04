(function () {
    'use strict';
  
    angular.module('rootModule')
      .component('courseList',  {
        templateUrl: 'courseList/courseList.component.html',
        controller: [
          function() {
            angular.extend(this, {
              courseId: 0,
              $onInit: function() {
                this.courseId = 200;
              }
            });
          }
        ]
      });
  })();
  