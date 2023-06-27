angular.module('centrometalApp').controller('footer', function(footerService) {
    let vm = this;
    footerService.getfooterData().then(function(response){
        vm.footerData = response.data;
    });

});