angular.module('centrometalApp').service('homeService',['$http', function($http) {
    this.getakcijaproizvodiData = function() {
        return $http.get('http://localhost:3000/akcijaproizvodi');
    };
    this.getmainlistleftData = function() {
        return $http.get('http://localhost:3000/mainlistleft');
    };
    this.getmainlistlefticonsData = function() {
        return $http.get('http://localhost:3000/mainlistlefticons');
    }
    this.getnovoproizvodiData = function() {
        return $http.get('http://localhost:3000/novoproizvodi');
    };
    this.getpreporucujemoproizvodiData = function() {
        return $http.get('http://localhost:3000/preporucujemoproizvodi');
    };
    this.getrasprodajaproizvodiData = function() {
        return $http.get('http://localhost:3000/rasprodajaproizvodi');
    };
    this.getvruciproizvodiData = function() {
        return $http.get('http://localhost:3000/vruciproizvodi');
    };
    this.getreklamemainData = function() {
        return $http.get('http://localhost:3000/reklamemain');
    };
    this.gettestereData = function() {
        return $http.get('http://localhost:3000/testere');
    };

}]);
