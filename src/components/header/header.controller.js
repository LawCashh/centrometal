angular.module('centrometalApp').controller('header', function(headerService) {
    let vm = this;
    headerService.getheaderData().then(function(response){
        vm.headerData = response.data;
    });

});