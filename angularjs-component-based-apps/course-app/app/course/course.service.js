(function () {
    'use strict';
  
    angular.module('rootModule')
        .factory('courseService',['apiBase', '$http', '$log', function(apiBase, $http, $log) {
          var service = this;
          
          angular.extend(service, {
            getAllCourses: function(){
                return $http.get(apiBase + '/courses')
                    .then(function(result) {
                        $log.info(result);
                        return result.data;
                    });
            },
            getCourse: function(courseId) {
                return $http.get(apiBase + '/course/' + courseId + '/full')
                    .then(function(result) {
                        $log.info(result);                        
                        return result.data;
                    });
            }
          });

          return service;
        }]);
  })();
  