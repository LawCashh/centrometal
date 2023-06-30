angular.module('centrometalApp').controller('footerController',['footerService', '$interval', function(footerService, $interval) {
    var vm = this;
    footerService.getfooterData().then(function(response){
        vm.footerData = response.data;
        vm.logos = response.data.foot1;
    });
}]);