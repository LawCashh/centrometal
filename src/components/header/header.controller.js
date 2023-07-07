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