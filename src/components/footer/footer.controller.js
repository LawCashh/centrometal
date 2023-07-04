angular.module('centrometalApp').controller('footerController',['footerService', function(footerService) {
    var vm = this;
    footerService.getfooterData().then(function(response){
        vm.footerData = response.data;
        vm.logos = response.data.foot1;
    });
}]);