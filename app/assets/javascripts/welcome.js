angular.module("helpFeed",
   ["ngRoute"])

.config(function ($routeProvider) {

   $routeProvider
        .when("/users/:id", {
            templateUrl: "../assets/helpFeed.html",
            controller: "helpFeedCtrl"
        })
        .otherwise({
           redirectTo: "/"
         });
})
  .config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
  }]);
