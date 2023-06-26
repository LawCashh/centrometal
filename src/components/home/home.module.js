angular.module("centrometalApp").config(function($routeProvider){
    $routeProvider
        .when('/home', {
        templateUrl: './src/components/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
    });
});