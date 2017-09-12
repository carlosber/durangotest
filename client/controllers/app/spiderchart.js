angular.module('app').controller('app_spiderchart', app_spiderchart);
function app_spiderchart($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.onSwipe = function(algo){
        console.log("test");
        algo.rotate(30);
    }
}