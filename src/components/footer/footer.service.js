angular.module('centrometalApp').service('footerService', function($http) {
    this.getfooterData = function() {
        return $http.get('http://localhost:3000/footer');
    };

});
