angular.module("helpFeed",
   ["ngRoute"
    ])

.config(function ($routeProvider) {

   $routeProvider
        .when("/", {
           templateUrl: "",
           controller: "helpFeedCtrl"
        })
        .when("/helpFeed", {
            templateUrl: "views/helpView/helpFeed.html",
            controller: "helpFeedCtrl"
        })
        .when("/helpFeed:id", {
            templateUrl: "views/helpView/helpShow.html",
            controller: "helpFeedCtrl"
        })
        .otherwise({
           redirectTo: "/"
         });
});
