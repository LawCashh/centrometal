angular.module("centrometalApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: './src/components/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
    })

}]);