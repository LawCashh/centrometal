angular.module("centrometalApp",["ngRoute"]),angular.module("centrometalApp").config(["$routeProvider",function(t){t.when("/",{templateUrl:"./src/components/home/home.html",controller:"homeController",controllerAs:"vm"})}]),angular.module("centrometalApp").config(["$routeProvider",function(t){t.when("/openproduct/:productId",{templateUrl:"./src/components/open-product/open-product.html",controller:"openProductController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}]),angular.module("centrometalApp").service("homeService",["$http",function(t){this.getakcijaproizvodiData=function(){return t.get("http://localhost:3000/akcijaproizvodi")},this.getmainlistleftData=function(){return t.get("http://localhost:3000/mainlistleft")},this.getmainlistlefticonsData=function(){return t.get("http://localhost:3000/mainlistlefticons")},this.getnovoproizvodiData=function(){return t.get("http://localhost:3000/novoproizvodi")},this.getpreporucujemoproizvodiData=function(){return t.get("http://localhost:3000/preporucujemoproizvodi")},this.getrasprodajaproizvodiData=function(){return t.get("http://localhost:3000/rasprodajaproizvodi")},this.getvruciproizvodiData=function(){return t.get("http://localhost:3000/vruciproizvodi")},this.getreklamemainData=function(){return t.get("http://localhost:3000/reklamemain")},this.gettestereData=function(){return t.get("http://localhost:3000/testere")}}]),angular.module("centrometalApp").service("openProductService",["openProductService",function(t,o){let e=o.productId;this.getproductData=function(){return t.get("http://localhost:3000/"+e)},this.getopenproductproizvodiData=function(){return t.get("http://localhost:3000/openproductproizvodi")},this.getvideosData=function(){return t.get("http:/localhost:3000/videos")}}]),angular.module("centrometalApp").service("footerService",["$http",function(t){this.getfooterData=function(){return t.get("http://localhost:3000/footer")}}]),angular.module("centrometalApp").service("headerService",["$http",function(t){this.getheaderData=function(){return t.get("http://localhost:3000/header")}}]),angular.module("centrometalApp").controller("homeController",["homeService",function(t){var o=this;t.getakcijaproizvodiData().then(function(t){o.akcijaproizvodiData=t.data}),t.getmainlistleftData().then(function(t){o.mainlistleftData=t.data}),t.getmainlistlefticonsData().then(function(t){o.mainlistlefticonsData=t.data}),t.getnovoproizvodiData().then(function(t){o.novoproizvodiData=t.data}),t.getpreporucujemoproizvodiData().then(function(t){o.preporucujemoproizvodiData=t.data}),t.getrasprodajaproizvodiData().then(function(t){o.rasprodajaproizvodiData=t.data}),t.getvruciproizvodiData().then(function(t){o.vruciproizvodiData=t.data}),t.getreklamemainData().then(function(t){o.reklamemainData=t.data}),t.gettestereData().then(function(t){o.testereData=t.data})}]),angular.module("centrometalApp").controller("openProductController",["openProductService",function(t){var o=this;t.getproductData().then(function(t){o.productData=t.data}),t.getvideosData().then(function(t){o.videosData=t.data}),t.getopenproductproizvodiData().then(function(t){o.openproductproizvodiData=t.data})}]),angular.module("centrometalApp").controller("footerController",["footerService","$interval",function(t,o){var e=this;t.getfooterData().then(function(t){e.footerData=t.data})}]),angular.module("centrometalApp").controller("headerController",["headerService",function(t){var o=this;t.getheaderData().then(function(t){o.headerData=t.data})}]),angular.module("centrometalApp").filter("chunk",function(){return function(t,o){for(var e=[],a=0;a<t.length;a+=o)e.push(t.slice(a,a+o));return e}});