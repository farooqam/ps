(function () {
  'use strict';

  angular.module('rootModule')
    .component('courseAuthorInfo',  {
      templateUrl: 'courseAuthorInfo/courseAuthorInfo.component.html',
      bindings: {
        authorId: '<'
      },
      controller: [
        function() {
          var $ctrl = this;

          angular.extend($ctrl, {
            $onInit: function() {
              $ctrl.author = {
                authorId: $ctrl.authorId
              };
            }
          });
        }
      ]
    });
})();
