angular.module('centrometalApp').controller('homeController',['homeService', function(homeService) {
    var vm = this;
    homeService.getakcijaproizvodiData().then(function(response){
        vm.akcijaproizvodiData = response.data;
    });
    homeService.getmainlistleftData().then(function(response){
        vm.mainlistleftData = response.data;
    });
    homeService.getmainlistlefticonsData().then(function(response) {
        vm.mainlistlefticonsData = response.data;
    });
    homeService.getnovoproizvodiData().then(function(response){
        vm.novoproizvodiData = response.data;
    });
    homeService.getpreporucujemoproizvodiData().then(function(response){
        vm.preporucujemoproizvodiData = response.data;
    });
    homeService.getrasprodajaproizvodiData().then(function(response){
        vm.rasprodajaproizvodiData = response.data;
    });
    homeService.getvruciproizvodiData().then(function(response){
        vm.vruciproizvodiData = response.data;
    });
    homeService.getreklamemainData().then(function(response){
        vm.reklamemainData = response.data;
    });
    homeService.gettestereData().then(function(response){
        vm.testereData = response.data;
    });

}]);