//= require_self
//= require_tree ./controllers/



angular
.module("helpFeed", ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
// Route for /post
$routeProvider
  .when('/', {
    templateUrl: '../assets/helpFeed.html',
    controller: 'helpFeedCtrl'
    })
  .when('/helpFeed/:id', {
    templateUrl: '../assets/helpShow.html',
    controller: 'helpFeedCtrl'
    })

// Default route when there is nothing
  .otherwise({
    redirectTo: "/helpFeed"
    });

}])
.config(["$httpProvider", function(provider) {
  provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);
