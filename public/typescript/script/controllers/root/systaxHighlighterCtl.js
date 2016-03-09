
( function() {
   'use strict';
   angular.module('myNodeJsStyApp')
          .controller('systaxHighlighterCtl', systaxHighlighterCtl);

  systaxHighlighterCtl.$inject = ['$timeout'];
  function systaxHighlighterCtl ($timeout) {
      $timeout(function(){
      SyntaxHighlighter.autoloader.apply('', path(
      'py python              @shBrushPython.js'
      ));
      SyntaxHighlighter.all();
      });
  };
})();
