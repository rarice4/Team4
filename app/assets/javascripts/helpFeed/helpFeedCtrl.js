angular.module("helpFeed")
    .controller("helpFeedCtrl", function ($scope,$log,$location, $routeParams, $rootScope, $route, helpFeedSvc) {

      helpFeedSvc.getHelps().then(function (helps) {
        $scope.helps = helps.data;
      });

      helpFeedSvc.getHelp($routeParams.id).then(function (response) {
        $scope.singleHelp = response.data;
      });

      $scope.addHelp = function (help) {
          helpFeedSvc.addHelp({
            date:new Date(),
            problem:help.problem,
            landmark:help.landmark,
            comments: []
          })
          $scope.helps.push(newHelp);
          $log.info(help);
          $scope.help = {};
        };

    });
