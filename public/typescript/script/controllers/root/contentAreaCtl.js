/********************************************************
 * contents 영역에 html  파일을 로딩 한다.
 *********************************************************/
( function() {
   'use strict';
  angular.module('myNodeJsStyApp')
         .controller('contentAreaCtl', contentAreaCtl);

  contentAreaCtl.$inject = ['$scope', '$location', '$routeParams', '$http', '$timeout'];
  function contentAreaCtl ($scope, $location, $routeParams, $http, $timeout  ){

    $scope.template = {
      includeLink1 : 'views/home.html'
    };

    $scope.$on('sendUrl',function(scope, getUrl){
      $scope.includeHtml(getUrl);
    });

    $scope.includeHtml = function(getUrl) {
      $scope.template = {
        includeLink1 : getUrl
      };

      ($timeout(function(){
        SyntaxHighlighter.autoloader.apply('', path(
          'js jscript javascript  @shBrushJScript.js',
          'css                    @shBrushCss.js',
          'text plain             @shBrushPlain.js'
        ));
        SyntaxHighlighter.all();
      },500));
    }
  };
})();
