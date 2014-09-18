angular.module("helpFeed")
    .controller("helpFeedCtrl", function ($scope,$log,$location, $routeParams, $rootScope, $route, helpFeedSvc) {
      $scope.currentUser = currentUser;
      console.log($scope.currentUser);
      $scope.allposts = [];
      helpFeedSvc.getHelps().then(function (helps) {
        $scope.helps = helps.data;
      });

      helpFeedSvc.getHelp($scope.currentUser.id).then(function (response) {
        $scope.singleHelp = response.data;
      });


      $scope.addHelp = function (helpObj, id) {
        var newHelp = {
          date:new Date(),
          problem:helpObj.problem,
          landmark:helpObj.landmark,
          comments: []
        };
          helpFeedSvc.addHelp(newHelp,$scope.currentUser.id)
          $scope.allposts.push(newHelp);
          $log.info(newHelp);
          $scope.newHelp = {};
        };

    });
