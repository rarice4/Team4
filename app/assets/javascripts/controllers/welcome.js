#= require_self
#= require_tree ./controllers/helpFeed

angular.module("helpFeed", ['ngRoute'])

.config(['$routeProvider', ($routeProvider) ->
  # Route for /post
  $routeProvider.when('/posts/new', { templateUrl: '../assets/mainCreatePost.html', controller: 'CreatePostCtrl'})
  $routeProvider.when('/posts/:postId', { templateUrl: '../assets/mainPost.html', controller: 'PostCtrl'})
  $routeProvider.when('/posts/:postId/edit', { templateUrl: '../assets/mainEditPost.html', controller: 'EditPostCtrl'})
  $routeProvider.when('/posts/:postId/delete', { controller: 'DeletePostCtrl'})

  # Default route when there is nothing
  $routeProvider.otherwise({ templateUrl: '../assets/mainIndex.html', controller: 'IndexCtrl'})

])

Blog.config(["$httpProvider", (provider) ->
  provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
])
