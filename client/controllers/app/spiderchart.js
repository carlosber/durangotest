angular.module('app').controller('app_spiderchart', app_spiderchart);
function app_spiderchart($scope, app) {
    'use strict';
    app.init($scope);
    
    function onSwipe(algo){
        alert("test "+ algo);
    }
}