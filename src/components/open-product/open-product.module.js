angular.module("centrometalApp").config(function ($routeProvider) {
    $routeProvider
        .when("/open-product/:productId", {
            templateUrl: "./open-product.html",
            controller: "openProductController",
            controllerAs: "vm"
        })
        .otherwise({
            redirectTo: "/home"
        })
});
