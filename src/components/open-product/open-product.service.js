angular.module('centrometalApp').service('openProductService', ['openProductService', function($http, $routeParams) {
    let productId = $routeParams.productId;
    this.getproductData = function() {
        return $http.get('http://localhost:3000/' + productId);
    };
    this.getopenproductproizvodiData = function() {
        return $http.get('http://localhost:3000/openproductproizvodi');
    };
    this.getvideosData = function() {
        return $http.get('http:/localhost:3000/videos')
    }
}]);
