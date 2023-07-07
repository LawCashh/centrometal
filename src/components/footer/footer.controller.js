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