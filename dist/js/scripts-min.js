angular.module("centrometalApp",["ngRoute"]),angular.module("centrometalApp").config(["$routeProvider",function(t){t.when("/openproduct/:productId",{templateUrl:"./src/components/open-product/open-product.html",controller:"openProductController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}]),angular.module("centrometalApp").config(["$routeProvider",function(t){t.when("/",{templateUrl:"./src/components/home/home.html",controller:"homeController",controllerAs:"vm"})}]),angular.module("centrometalApp").service("footerService",["$http",function(t){this.getfooterData=function(){return t.get("http://localhost:3000/footer")}}]),angular.module("centrometalApp").service("headerService",["$http",function(t){this.getheaderData=function(){return t.get("http://localhost:3000/header")}}]),angular.module("centrometalApp").service("openProductService",["openProductService",function(t,o){let a=o.productId;this.getproductData=function(){return t.get("http://localhost:3000/"+a)},this.getopenproductproizvodiData=function(){return t.get("http://localhost:3000/openproductproizvodi")},this.getvideosData=function(){return t.get("http:/localhost:3000/videos")}}]),angular.module("centrometalApp").service("homeService",["$http",function(t){this.getakcijaproizvodiData=function(){return t.get("http://localhost:3000/akcijaproizvodi")},this.getmainlistleftData=function(){return t.get("http://localhost:3000/mainlistleft")},this.getmainlistlefticonsData=function(){return t.get("http://localhost:3000/mainlistlefticons")},this.getnovoproizvodiData=function(){return t.get("http://localhost:3000/novoproizvodi")},this.getpreporucujemoproizvodiData=function(){return t.get("http://localhost:3000/preporucujemoproizvodi")},this.getrasprodajaproizvodiData=function(){return t.get("http://localhost:3000/rasprodajaproizvodi")},this.getvruciproizvodiData=function(){return t.get("http://localhost:3000/vruciproizvodi")},this.getreklamemainData=function(){return t.get("http://localhost:3000/reklamemain")},this.gettestereData=function(){return t.get("http://localhost:3000/testere")}}]),angular.module("centrometalApp").controller("footerController",["footerService","$interval",function(t,o){var a=this;t.getfooterData().then(function(t){a.footerData=t.data})}]),angular.module("centrometalApp").controller("headerController",["headerService",function(t){var o=this;t.getheaderData().then(function(t){o.headerData=t.data})}]),angular.module("centrometalApp").controller("openProductController",["openProductService",function(t){var o=this;t.getproductData().then(function(t){o.productData=t.data}),t.getvideosData().then(function(t){o.videosData=t.data}),t.getopenproductproizvodiData().then(function(t){o.openproductproizvodiData=t.data})}]),angular.module("centrometalApp").controller("homeController",["homeService","chunkFilter",function(t,o){var a=this;t.getakcijaproizvodiData().then(function(t){a.akcijaproizvodiData=t.data,a.akcijaproizvodiDataChunked=o(a.akcijaproizvodiData,4),a.temp=angular.copy(a.akcijaproizvodiData),a.akcijaproizvodiDataFirstFour=a.temp.slice(0,4),a.akcijaproizvodiData.length>4?a.akcijaMoreThanFour=!0:a.akcijaMoreThanFour=!1}),t.getmainlistleftData().then(function(t){a.mainlistleftData=t.data}),t.getmainlistlefticonsData().then(function(t){a.mainlistlefticonsData=t.data}),t.getnovoproizvodiData().then(function(t){a.novoproizvodiData=t.data,a.novoproizvodiDataChunked=o(a.novoproizvodiData,4),a.temp=angular.copy(a.novoproizvodiData),a.novoproizvodiDataFirstFour=a.temp.slice(0,4),a.novoproizvodiData.length>4?a.novoMoreThanFour=!0:a.novoMoreThanFour=!1}),t.getpreporucujemoproizvodiData().then(function(t){a.preporucujemoproizvodiData=t.data,a.preporucujemoproizvodiDataChunked=o(a.preporucujemoproizvodiData,4),a.temp=angular.copy(a.preporucujemoproizvodiData),a.preporucujemoproizvodiDataFirstFour=a.temp.slice(0,4),a.preporucujemoproizvodiData.length>4?a.preporucujemoMoreThanFour=!0:a.preporucujemoMoreThanFour=!1}),t.getrasprodajaproizvodiData().then(function(t){a.rasprodajaproizvodiData=t.data,a.rasprodajaproizvodiDataChunked=o(a.rasprodajaproizvodiData,4),a.temp=angular.copy(a.rasprodajaproizvodiData),a.rasprodajaproizvodiDataFirstFour=a.temp.slice(0,4),a.rasprodajaproizvodiData.length>4?a.rasprodajaMoreThanFour=!0:a.rasprodajaMoreThanFour=!1}),t.getvruciproizvodiData().then(function(t){a.vruciproizvodiData=t.data,a.vruciproizvodiDataChunked=o(a.vruciproizvodiData,4),a.temp=angular.copy(a.vruciproizvodiData),a.vruciproizvodiDataFirstFour=a.temp.slice(0,4),a.vruciproizvodiData.length>4?a.vruciMoreThanFour=!0:a.vruciMoreThanFour=!1}),t.getreklamemainData().then(function(t){a.reklamemainData=t.data}),t.gettestereData().then(function(t){a.testereData=t.data})}]),angular.module("centrometalApp").filter("chunk",function(){return function(t,o){for(var a=[],e=t,r=0;r<e.length;r+=o)a.push(e.slice(r,r+o));return a}});