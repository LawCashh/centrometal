angular.module('centrometalApp', ['ngRoute']);
angular.module("centrometalApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: './src/components/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
    })
        .when('/404', {
        templateUrl: './src/components/404/404.html'
    })
        .otherwise({
            redirectTo: '/404'
        });


}]);
angular.module("centrometalApp").config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/openproduct/:productId", {
            templateUrl: "./src/components/open-product/open-product.html",
            controller: "openProductController",
            controllerAs: "vm"
        })
        .otherwise({
            redirectTo: '/404'
        });
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

angular.module('centrometalApp').controller('headerController',['headerService', '$location', '$rootScope', function(headerService, $location, $rootScope) {
    var vm = this;
    function initHeader() {
        getheaderData();
    }

    initHeader();

    $rootScope.$on('$locationChangeSuccess', function(event, newUrl) {
        vm.is404Page = $location.path() === '/404';
    });
    function getheaderData () {
        headerService.getheaderData().then(function(response){
            //console.log(response.data.nav1[0].naziv + "xd");
            vm.headerData = response.data;
        });
    }
}]);
angular.module('centrometalApp').controller('footerController',['footerService', '$location', '$rootScope', function(footerService, $location, $rootScope) {
    var vm = this;
    function initFooter () {
        getfooterData();
    }
    initFooter();

    $rootScope.$on('$locationChangeSuccess', function(event, newUrl) {
        vm.is404Page = $location.path() === '/404';
    });
    function getfooterData () {
        footerService.getfooterData().then(function(response){
            vm.footerData = response.data;
            vm.logos = response.data.foot1;
        });
    }
}]);
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
angular.module("centrometalApp").controller("openProductController",['openProductService', 'chunkFilter',
    '$routeParams', '$location',
    function (openProductService, chunkFilter, $routeParams, $location) {
    var vm = this;

    function init(){
        getData();
        getvideosData();
        getopenproductproizvodiData();
    }

    init();


    function getData() {
        var productIds = ["1","2","3","4"];
        var productId = $routeParams.productId;
        //console.log(productId + "je productid i tip my je " + typeof(productId));
        if (productIds.includes(productId))
        openProductService.getproductData(productId)
            .then(function(response){
                vm.productData = response.data;
                vm.machines = vm.productData[0].slideurls;
                vm.prevArrow = "<img class='prevop' src='src/assets/images/open-product/leftside/left-arrow.png'>"
                vm.nextArrow = "<img class='nextop' src='src/assets/images/open-product/leftside/right-arrow.png'>"
            },function(){

            });
        else $location.path('/404');
    }
    function getvideosData () {
        openProductService.getvideosData().then(function(response){
            vm.videosData = response.data;
        });
    }

    function getopenproductproizvodiData () {
        openProductService.getopenproductproizvodiData().then(function(response){
            vm.openproductproizvodiData = response.data;
            vm.openproductproizvodiDataChunked = chunkFilter(vm.openproductproizvodiData, 4);
            vm.temp = angular.copy(vm.openproductproizvodiData);
            vm.openproductproizvodiDataFirstFour = vm.temp.slice(0,4);
            if (vm.openproductproizvodiData.length > 4)
                vm.openProductMoreThanFour = true;
            else vm.openProductMoreThanFour = false;
        });
    }


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
angular.module('centrometalApp').directive('slickSlider', function() {
    return {
        restrict: 'A',
        scope: {'data': '='},
        link: function(scope, element, attrs) {
            var isInitialized = false;
            scope.$watch('data', function(newVal, oldVal){
                if(newVal)
                if(newVal.length > 0 && !isInitialized){
                    $(element).slick(scope.$eval(attrs.slickSlider));
                    isInitialized = true;
                }
            })
        }
    };
});
