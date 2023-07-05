angular.module('centrometalApp').service('openProductService', ['$http', '$routeParams', function($http, $routeParams) {
    this.getproductData = function(productId) {
        return $http.get('http://localhost:3000/' + productId);
    };
    this.getopenproductproizvodiData = function() {
        return $http.get('http://localhost:3000/openproductproizvodi');
    };
    this.getvideosData = function() {
        return $http.get('http://localhost:3000/videos');
    }
}]);
