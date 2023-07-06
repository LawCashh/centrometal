angular.module("centrometalApp").controller("openProductController",['openProductService', 'chunkFilter','$routeParams',
    function (openProductService, chunkFilter, $routeParams) {
    var vm = this;

    function init(){
        getData();
        getvideosData();
        getopenproductproizvodiData();
    }

    init();


    function getData() {

        var productId = $routeParams.productId;
        openProductService.getproductData(productId)
            .then(function(response){
                vm.productData = response.data;
                vm.machines = vm.productData[0].slideurls;
                vm.prevArrow = "<img class='prevop' src='src/assets/images/open-product/leftside/left-arrow.png'>"
                vm.nextArrow = "<img class='nextop' src='src/assets/images/open-product/leftside/right-arrow.png'>"
            },function(){

            });
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
