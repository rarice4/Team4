#= require_self
#= require_tree ./controllers/helpFeed

angular.module("helpFeed",
   ["ngRoute"
    ])

.config(function ($routeProvider) {

   $routeProvider
        .when("/", {
           templateUrl: "../assets/helpFeed.html",
           controller: "helpFeedCtrl"
        })
        .when("/helpFeed", {
            templateUrl: "views/helpFeed.html",
            controller: "helpFeedCtrl"
        })
        .when("/helpFeed:id", {
            templateUrl: "views/helpShow.html",
            controller: "helpFeedCtrl"
        })
        .otherwise({
           redirectTo: "/"
         });
});
