angular.module('app').controller('app_spiderchart', app_spiderchart);
function app_spiderchart($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.onSwipe = function(algo){
        console.log("test");
        var r = 30;
         $algo.css({
                    '-moz-transform': r,
                    '-webkit-transform': r,
                    '-o-transform': r,
                    '-ms-transform': r
                });
    }
}