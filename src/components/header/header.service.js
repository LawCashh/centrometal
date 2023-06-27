angular.module('centrometalApp').service('headerService', function($http) {
    this.getheaderData = function() {
        return $http.get('http://localhost:3000/header');
    };

});
