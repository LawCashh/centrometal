angular.module("centrometalApp").controller("openProductController", function (openProductService) {
    let vm = this;
    openProductService.getproductData().then(function(response){
        vm.productData = response.data;
    });
    openProductService.getvideosData().then(function(response){
        vm.videosData = response.data;
    });
    openProductService.getopenproductproizvodiData().then(function(response){
        vm.openproductproizvodiData = response.data;
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
});
