angular.module('centrometalApp').controller('homeController',['homeService', 'chunkFilter', '$interval', '$location', '$q', '$timeout', function(homeService, chunkFilter, $interval, $location, $q, $timeout) {
    var vm = this;
    vm.myInterval = 2000;
    vm.isLoading = true;
    vm.goToProduct = function (productId) {
        var productIds = [1,2,3,4];
        //console.log(productId + "je home productid i tip my je " + typeof(productId));
        if (productIds.includes(productId))
        $location.path('/openproduct/' + productId);
        else $location.path('/404');
    };

    function initHome () {
        //getakcijaproizvodiData();
        getmainlistleftData();
        getmainlistlefticonsData();
        //getnovoproizvodiData();
        //getpreporucujemoproizvodiData();
        //getrasprodajaproizvodiData();
        //getvruciproizvodiData();
        getreklamemainData();
        gettestereData();
    }
    initHome();

    var promises = [
        delay(2000).then(getakcijaproizvodiData),
        //delay(2000).then(getmainlistleftData),
        //delay(2000).then(getmainlistlefticonsData),
        delay(2000).then(getnovoproizvodiData),
        delay(2000).then(getpreporucujemoproizvodiData),
        delay(2000).then(getrasprodajaproizvodiData),
        delay(2000).then(getvruciproizvodiData),
        //delay(2000).then(getreklamemainData),
        //delay(2000).then(gettestereData)
    ];

    function delay(ms) {
        return $timeout(function() {
        }, ms);
    }

    $q.all(promises).then(function() {
        vm.isLoading = false;
    });

    function getakcijaproizvodiData () {
        homeService.getakcijaproizvodiData().then(function(response){
            vm.akcijaproizvodiData = response.data;
            vm.akcijaproizvodiDataChunked = chunkFilter(vm.akcijaproizvodiData, 4);
            vm.temp = angular.copy(vm.akcijaproizvodiData);
            vm.akcijaproizvodiDataFirstFour = vm.temp.slice(0,4);
            if (vm.akcijaproizvodiData.length > 4)
                vm.akcijaMoreThanFour = true;
            else vm.akcijaMoreThanFour = false;
        }).catch(function(error) {
            vm.akcijaproizvodiData = [];
        });
    }
    function getmainlistleftData() {
        homeService.getmainlistleftData().then(function(response){
            vm.mainlistleftData = response.data;
        }).catch(function(error) {
            vm.mainlistleftData = [];
        });
    }
    function getmainlistlefticonsData () {
        homeService.getmainlistlefticonsData().then(function(response) {
            vm.mainlistlefticonsData = response.data;
        }).catch(function(error) {
            vm.mainlistlefticonsData = [];
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
        }).catch(function(error) {
            vm.novoproizvodiData = [];
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
        }).catch(function(error) {
            vm.preporucujemoproizvodiData = [];
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
        }).catch(function(error) {
            vm.rasprodajaproizvodiData = [];
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
        }).catch(function(error) {
            vm.vruciproizvodiData = [];
        });
    }
    function getreklamemainData () {
        homeService.getreklamemainData().then(function(response){
            vm.reklamemainData = response.data;
        }).catch(function(error) {
            vm.reklamemainData = [];
        });
    }
    function gettestereData() {
        homeService.gettestereData().then(function(response){
            vm.testereData = response.data;
        }).catch(function(error) {
            vm.testereData = [];
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