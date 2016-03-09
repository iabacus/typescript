( function() {
  'use strict';

  /********************************************************
   * json 메뉴 파일을 읽어서 root로 broadcast 해서 화면에 메뉴를 표시 한다.
   *********************************************************/
   angular.module('myNodeJsStyApp')
          .controller('menuCtl', menuCtl);

  menuCtl.$inject = ['$rootScope', '$scope', '$location' ];
  function menuCtl($rootScope, $scope, $location) {
    $scope.callProject = function(url) {
    $location.path('/' );
    var urlData = url;
    $rootScope.$broadcast('sendUrl', urlData);
    }
  };
})();
