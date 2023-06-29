angular.module('centrometalApp').controller('homeController',['homeService', 'chunkFilter', function(homeService, chunkFilter) {
    var vm = this;
    homeService.getakcijaproizvodiData().then(function(response){
        vm.akcijaproizvodiData = response.data;
        vm.akcijaproizvodiDataChunked = chunkFilter(vm.akcijaproizvodiData, 4);
        vm.temp = angular.copy(vm.akcijaproizvodiData);
        vm.akcijaproizvodiDataFirstFour = vm.temp.slice(0,4);
        if (vm.akcijaproizvodiData.length > 4)
        vm.akcijaMoreThanFour = true;
        else vm.akcijaMoreThanFour = false;
    });
    homeService.getmainlistleftData().then(function(response){
        vm.mainlistleftData = response.data;
    });
    homeService.getmainlistlefticonsData().then(function(response) {
        vm.mainlistlefticonsData = response.data;
    });
    homeService.getnovoproizvodiData().then(function(response){
        vm.novoproizvodiData = response.data;
        vm.novoproizvodiDataChunked = chunkFilter(vm.novoproizvodiData, 4);
        vm.temp = angular.copy(vm.novoproizvodiData);
        vm.novoproizvodiDataFirstFour = vm.temp.slice(0,4);
        if (vm.novoproizvodiData.length > 4)
            vm.novoMoreThanFour = true;
        else vm.novoMoreThanFour = false;
    });
    homeService.getpreporucujemoproizvodiData().then(function(response){
        vm.preporucujemoproizvodiData = response.data;
        vm.preporucujemoproizvodiDataChunked = chunkFilter(vm.preporucujemoproizvodiData, 4);
        vm.temp = angular.copy(vm.preporucujemoproizvodiData);
        vm.preporucujemoproizvodiDataFirstFour = vm.temp.slice(0,4);
        if (vm.preporucujemoproizvodiData.length > 4)
            vm.preporucujemoMoreThanFour = true;
        else vm.preporucujemoMoreThanFour = false;
    });
    homeService.getrasprodajaproizvodiData().then(function(response){
        vm.rasprodajaproizvodiData = response.data;
        vm.rasprodajaproizvodiDataChunked = chunkFilter(vm.rasprodajaproizvodiData, 4);
        vm.temp = angular.copy(vm.rasprodajaproizvodiData);
        vm.rasprodajaproizvodiDataFirstFour = vm.temp.slice(0,4);
        if (vm.rasprodajaproizvodiData.length > 4)
            vm.rasprodajaMoreThanFour = true;
        else vm.rasprodajaMoreThanFour = false;
    });
    homeService.getvruciproizvodiData().then(function(response){
        vm.vruciproizvodiData = response.data;
        vm.vruciproizvodiDataChunked = chunkFilter(vm.vruciproizvodiData, 4);
        vm.temp = angular.copy(vm.vruciproizvodiData);
        vm.vruciproizvodiDataFirstFour = vm.temp.slice(0,4);
        if (vm.vruciproizvodiData.length > 4)
            vm.vruciMoreThanFour = true;
        else vm.vruciMoreThanFour = false;
    });
    homeService.getreklamemainData().then(function(response){
        vm.reklamemainData = response.data;
    });
    homeService.gettestereData().then(function(response){
        vm.testereData = response.data;
    });

}]);