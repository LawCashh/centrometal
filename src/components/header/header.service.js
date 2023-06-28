angular.module('centrometalApp').service('headerService',['$http', function($http) {
    this.getheaderData = function() {
        return $http.get('http://localhost:3000/header');
    };

}]);
