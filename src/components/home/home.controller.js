angular.module('centrometalApp').controller('homeController',['homeService', 'chunkFilter', '$interval', '$location', function(homeService, chunkFilter, $interval, $location) {
    var vm = this;
    vm.myInterval = 2000;
    vm.goToProduct = function (productId) {
        $location.path('/openproduct/' + productId);
    };

    function initHome () {
        getakcijaproizvodiData();
        getmainlistleftData();
        getmainlistlefticonsData();
        getnovoproizvodiData();
        getpreporucujemoproizvodiData();
        getrasprodajaproizvodiData();
        getvruciproizvodiData();
        getreklamemainData();
        gettestereData();
    }
    initHome();

    function getakcijaproizvodiData () {
        homeService.getakcijaproizvodiData().then(function(response){
            vm.akcijaproizvodiData = response.data;
            vm.akcijaproizvodiDataChunked = chunkFilter(vm.akcijaproizvodiData, 4);
            vm.temp = angular.copy(vm.akcijaproizvodiData);
            vm.akcijaproizvodiDataFirstFour = vm.temp.slice(0,4);
            if (vm.akcijaproizvodiData.length > 4)
                vm.akcijaMoreThanFour = true;
            else vm.akcijaMoreThanFour = false;
        });
    }
    function getmainlistleftData() {
        homeService.getmainlistleftData().then(function(response){
            vm.mainlistleftData = response.data;
        });
    }
    function getmainlistlefticonsData () {
        homeService.getmainlistlefticonsData().then(function(response) {
            vm.mainlistlefticonsData = response.data;
        });
    }
    function getnovoproizvodiData () {
        homeService.getnovoproizvodiData().then(function(response){
            vm.novoproizvodiData = response.data;
            vm.novoproizvodiDataChunked = chunkFilter(vm.novoproizvodiData, 4);
            vm.temp = angular.copy(vm.novoproizvodiData);
            vm.novoproizvodiDataFirstFour = vm.temp.slice(0,4);
            if (vm.novoproizvodiData.length > 4)
                vm.novoMoreThanFour = true;
            else vm.novoMoreThanFour = false;
        });
    }

    function getpreporucujemoproizvodiData () {
        homeService.getpreporucujemoproizvodiData().then(function(response){
            vm.preporucujemoproizvodiData = response.data;
            vm.preporucujemoproizvodiDataChunked = chunkFilter(vm.preporucujemoproizvodiData, 4);
            vm.temp = angular.copy(vm.preporucujemoproizvodiData);
            vm.preporucujemoproizvodiDataFirstFour = vm.temp.slice(0,4);
            if (vm.preporucujemoproizvodiData.length > 4)
                vm.preporucujemoMoreThanFour = true;
            else vm.preporucujemoMoreThanFour = false;
        });
    }

    function getrasprodajaproizvodiData() {
        homeService.getrasprodajaproizvodiData().then(function(response){
            vm.rasprodajaproizvodiData = response.data;
            vm.rasprodajaproizvodiDataChunked = chunkFilter(vm.rasprodajaproizvodiData, 4);
            vm.temp = angular.copy(vm.rasprodajaproizvodiData);
            vm.rasprodajaproizvodiDataFirstFour = vm.temp.slice(0,4);
            if (vm.rasprodajaproizvodiData.length > 4)
                vm.rasprodajaMoreThanFour = true;
            else vm.rasprodajaMoreThanFour = false;
        });
    }

    function getvruciproizvodiData () {
        homeService.getvruciproizvodiData().then(function(response){
            vm.vruciproizvodiData = response.data;
            vm.vruciproizvodiDataChunked = chunkFilter(vm.vruciproizvodiData, 4);
            vm.temp = angular.copy(vm.vruciproizvodiData);
            vm.vruciproizvodiDataFirstFour = vm.temp.slice(0,4);
            if (vm.vruciproizvodiData.length > 4)
                vm.vruciMoreThanFour = true;
            else vm.vruciMoreThanFour = false;
        });
    }
    function getreklamemainData () {
        homeService.getreklamemainData().then(function(response){
            vm.reklamemainData = response.data;
        });
    }
    function gettestereData() {
        homeService.gettestereData().then(function(response){
            vm.testereData = response.data;
        });
    }


    vm.counter = 1;
    $interval(function(){
        // angular.element( document.querySelector( 'slide-radio-'+ counter ) ).checked = true;
        vm.segaButton = document.getElementById('slide-radio-' + vm.counter);
        if (vm.segaButton) vm.segaButton.checked = true;
        // document.getElementById('slide-radio-' + vm.counter).checked = true;
        vm.segaText = document.getElementById('sega_h2');
        if (vm.segaText) vm.segaText.innerText = "Šega " + vm.counter;
        // document.getElementById('sega_h2').innerText = "Šega " + vm.counter;
        vm.counter++;
        if (vm.counter > 4){
            vm.counter = 1;
        }
    }, 3000);

}]);