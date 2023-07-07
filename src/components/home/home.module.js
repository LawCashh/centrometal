angular.module("centrometalApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: './src/components/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
    })
        .when('/404', {
        templateUrl: './src/components/404/404.html'
    })
        .otherwise({
            redirectTo: '/404'
        });


}]);