angular.module('centrometalApp').filter('chunk', function() {
    return function(arrJson, chunkSize) {
        var newArr = [];
        var arr = arrJson;
        for (var i = 0; i < arr.length; i += chunkSize) {
            newArr.push(arr.slice(i, i + chunkSize));
        }
        return newArr;
    };
});