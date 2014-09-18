angular.module("helpFeed")
    .controller("helpFeedCtrl", function ($scope,$log,$location, $routeParams, $rootScope, $route, helpFeedSvc) {
      $scope.currentUser = currentUser;
      console.log($scope.currentUser);
      $scope.helps = [];
      helpFeedSvc.getHelps().then(function (helps) {
        $scope.helps = helps.data;
      });

      helpFeedSvc.getHelp($scope.currentUser.id).then(function (response) {
        $scope.singleHelp = response.data;
      });


      $scope.addHelp = function (helpObj) {
        var newHelp = {
          date:new Date(),
          problem:helpObj.problem,
          landmark:helpObj.landmark,
          comments: []
        };
          helpFeedSvc.addHelp(newHelp,$scope.currentUser.id)
          $scope.helps.push(newHelp);
          $log.info(newHelp);
          $scope.newHelp = {};
        };

    });
