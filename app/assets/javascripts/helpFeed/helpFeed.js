angular.module("helpFeed",
   ["ngRoute"
    ])

.config(function ($routeProvider) {

   $routeProvider
        .when("/helpFeed", {
            templateUrl: "views/welcome/index.html.erb",
            controller: "helpFeedCtrl"
        })
        .when("/helpFeed:id", {
            templateUrl: "views/posts/show.html.erb",
            controller: "helpFeedCtrl"
        })
        .otherwise({
           redirectTo: "/"
         });
});
