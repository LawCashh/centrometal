angular.module("centrometalApp").config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/openproduct/:productId", {
            templateUrl: "./src/components/open-product/open-product.html",
            controller: "openProductController",
            controllerAs: "vm"
        })
        .otherwise({
            redirectTo: '/404'
        });
}]);
