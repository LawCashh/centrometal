angular.module('centrometalApp', ['ngRoute', 'ui.bootstrap']);
angular.module("centrometalApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: './src/components/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
    })

}]);
angular.module("centrometalApp").config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/openproduct/:productId", {
            templateUrl: "./src/components/open-product/open-product.html",
            controller: "openProductController",
            controllerAs: "vm"
        })
        .otherwise({
            redirectTo: "/"
        })
}]);

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

angular.module('centrometalApp').service('openProductService', ['$http', '$routeParams', function($http, $routeParams) {
    var productId = $routeParams.productId;
    this.getproductData = function() {
        return $http.get('http://localhost:3000/' + productId);
    };
    this.getopenproductproizvodiData = function() {
        return $http.get('http://localhost:3000/openproductproizvodi');
    };
    this.getvideosData = function() {
        return $http.get('http://localhost:3000/videos');
    }
}]);

angular.module('centrometalApp').service('headerService',['$http', function($http) {
    this.getheaderData = function() {
        return $http.get('http://localhost:3000/header');
    };

}]);

angular.module('centrometalApp').service('footerService',['$http', function($http) {
    this.getfooterData = function() {
        return $http.get('http://localhost:3000/footer');
    };

}]);

angular.module('centrometalApp').controller('homeController',['homeService', 'chunkFilter', '$interval', '$location', function(homeService, chunkFilter, $interval, $location) {
    var vm = this;
    vm.myInterval = 2000;
    vm.goToProduct = function (productId) {
        $location.path('/openproduct/' + productId);
    };
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

    var counter = 1;
    $interval(function(){
        document.getElementById('slide-radio-' + counter).checked = true;
        document.getElementById('sega_h2').innerText = "Šega " + counter;
        counter++;
        if (counter > 4){
            counter = 1;
        }
    }, 3000);

}]);
angular.module("centrometalApp").controller("openProductController",['openProductService', 'chunkFilter', function (openProductService, chunkFilter) {
    var vm = this;
    openProductService.getproductData().then(function(response){
        vm.productData = response.data;
    });
    openProductService.getvideosData().then(function(response){
        vm.videosData = response.data;
    });
    openProductService.getopenproductproizvodiData().then(function(response){
        vm.openproductproizvodiData = response.data;
        vm.openproductproizvodiDataChunked = chunkFilter(vm.openproductproizvodiData, 4);
        vm.temp = angular.copy(vm.openproductproizvodiData);
        vm.openproductproizvodiDataFirstFour = vm.temp.slice(0,4);
        if (vm.openproductproizvodiData.length > 4)
            vm.openProductMoreThanFour = true;
        else vm.openProductMoreThanFour = false;
    });

    vm.leftsideButtonContentChange1 = function () {
        document.getElementById("leftside_content_change_button1").style.backgroundColor = "#00adef";
        document.getElementById("leftside_content_change_button2").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button3").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button4").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_p1").innerHTML =
            "Samostojeci: DA<br>Punjenje sprijeda: DA<br>" +
            "Elektronsko upravljanje: DA<br>" +
            "Kapacitet pranja: 9kg<br>" +
            "Kapacitet susenja: 7kg<br>" +
            "Broj okretaja centrifuge: 1400,00 okr/min<br>" +
            "Podesavanje centrifuge: DA<br>" +
            "Iskljucivanje centrifugiranja: DA<br>" +
            "Fuzzy logic: DA<br>" +
            "Automatsko prilagod. potrosnje vode: DA<br>" +
            "Senzorsko susenje: DA";
        document.getElementById("leftside_content_change_p2").innerHTML =
            "Odgoda pocetka rada: DA<br>" +
            "Rucni program: DA<br>" +
            "Brzi program: DA<br>" +
            "Energetski razred: A<br>" +
            "Ucinkovitost pranja: A<br>" +
            "Ucinkovitost centrifugiranja: A<br>" +
            "Potrosnja vode za susenje i pranje: 148,00 l<br>" +
            "Razina buke: 41,00 db(re 1pW)<br>" +
            "Razina buke centrifuge: 64,00dB(re 1pW)<br>" +
            "Visina: 85,00cm<br>" +
            "Sirina: 60,00cm";
    }
    vm.leftsideButtonContentChange2 = function () {
        document.getElementById("leftside_content_change_button2").style.backgroundColor = "#00adef";
        document.getElementById("leftside_content_change_button1").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button3").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button4").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_p1").innerHTML =
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2";
        document.getElementById("leftside_content_change_p2").innerHTML =
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2<br>" +
            "Lorem ipsum Lorem ipsum 2";
    }
    vm.leftsideButtonContentChange3 = function () {
        document.getElementById("leftside_content_change_button3").style.backgroundColor = "#00adef";
        document.getElementById("leftside_content_change_button2").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button1").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button4").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_p1").innerHTML =
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3";
        document.getElementById("leftside_content_change_p2").innerHTML =
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3<br>" +
            "Lorem ipsum Lorem ipsum 3";
    }
    vm.leftsideButtonContentChange4 = function () {
        document.getElementById("leftside_content_change_button4").style.backgroundColor = "#00adef";
        document.getElementById("leftside_content_change_button2").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button3").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_button1").style.backgroundColor = "#333333";
        document.getElementById("leftside_content_change_p1").innerHTML =
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4";
        document.getElementById("leftside_content_change_p2").innerHTML =
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4<br>" +
            "Lorem ipsum Lorem ipsum 4";
    }
    var myVideo1 = document.getElementById("video1");
    var myVideo2 = document.getElementById("video2");
    vm.playpause1 = function () {
        myVideo1.load();
        document.getElementById("playpause1_img").style.display = "inline-block";
    }

    vm.playpause2 = function () {
        myVideo2.load();
        document.getElementById("playpause2_img").style.display = "inline-block";
    }

    vm.playpause1_img = function() {
        document.getElementById("playpause1_img").style.display = "none";
        myVideo1.play();
    }

    vm.playpause2_img = function() {
        document.getElementById("playpause2_img").style.display = "none";
        myVideo2.play();
    }

}]);

angular.module('centrometalApp').controller('headerController',['headerService', function(headerService) {
    var vm = this;
    headerService.getheaderData().then(function(response){
        //console.log(response.data.nav1[0].naziv + "xd");
        vm.headerData = response.data;
    });

}]);
angular.module('centrometalApp').controller('footerController',['footerService', '$interval', function(footerService, $interval) {
    var vm = this;
    footerService.getfooterData().then(function(response){
        vm.footerData = response.data;
        vm.logos = response.data.foot1;
    });

}]);
angular.module('centrometalApp').filter('chunk', function() {
    return function(arrJson, chunkSize) {
        var newArr = [];
        var arr = arrJson;
        for (var i = 0; i < arr.length; i += chunkSize) {
            newArr.push(arr.slice(i, i + chunkSize));
        }
        return newArr;
    };
});