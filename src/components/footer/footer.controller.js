angular.module('centrometalApp').controller('footerController',['footerService', function(footerService) {
    var vm = this;

    function initFooter () {
        getfooterData();
    }
    initFooter();

    function getfooterData () {
        footerService.getfooterData().then(function(response){
            vm.footerData = response.data;
            vm.logos = response.data.foot1;
        });
    }
}]);