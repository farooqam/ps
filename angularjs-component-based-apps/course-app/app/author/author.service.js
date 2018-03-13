(function () {
    'use strict';
  
    angular.module('rootModule')
        .factory('authorService',['apiBase', '$http', '$log', function(apiBase, $http, $log) {
          var service = this;
          
          angular.extend(service, {
            getAllAuthors: function(){
                return $http.get(apiBase + '/authors')
                    .then(function(result) {
                        $log.info(result);
                        return result.data;
                    });
            },
            getAuthor: function(authorId) {
                return $http.get(apiBase + '/author/' + authorId)
                    .then(function(result) {
                        $log.info(result);
                        return result.data;
                    });
            }
          });

          return service;
        }]);
  })();
  