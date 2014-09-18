angular.module("helpFeed",
   ["ngRoute"])

.config(function ($routeProvider) {

   $routeProvider
        .when("/", {
            templateUrl: "../assets/main.html",
            controller: "helpFeedCtrl"
        })
        .when("/helpFeed", {
            templateUrl: "../assets/helpFeed.html",
            controller: "helpFeedCtrl"
        })
        .when("/helpFeed:id", {
            templateUrl: "../assets/helpShow.html",
            controller: "helpFeedCtrl"
        })
        .otherwise({
           redirectTo: "/"
         });
})
  .config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
  }]);
