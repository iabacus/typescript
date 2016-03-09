
( function() {
   'use strict';
   angular.module('myNodeJsStyApp')
          .directive('topMenu', topMenu);


  function topMenu() {
    return {
      template: function() {
          var source = builddata();
          strEleemnt = '<div class="collapse navbar-collapse navbar-ex1-collapse" ng-controller="menuCtl" >';
          strEleemnt += "<ul class='nav navbar-nav'>"
          buildUL(source);
          strEleemnt += '</ul>'
          strEleemnt += '</div>'
          return strEleemnt
        }
    }
  };
})();
