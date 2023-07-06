angular.module('centrometalApp').controller('headerController',['headerService', function(headerService) {
    var vm = this;

    function initHeader() {
        getheaderData();
    }

    initHeader();
    function getheaderData () {
        headerService.getheaderData().then(function(response){
            //console.log(response.data.nav1[0].naziv + "xd");
            vm.headerData = response.data;
        });
    }
}]);