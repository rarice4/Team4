angular.module("helpFeed")
    .factory("helpFeedSvc", function ($rootScope, $log, $http) {

      var urlHelp = "http://localhost:3000";

      var getHelps = function () {
        return $http.get(urlHelp + "/" + "posts");
      };

      var getHelp = function (id) {
        return $http.get(urlHelp + "/" + id);
      };

      var addHelp = function (help) {
      $http.post(urlHelp + "/posts", help).then(function (response) {
        $rootScope.$broadcast("help:added");
        $log.info("help:added");
        });
      };

      return {
        getHelps: getHelps,
        getHelp: getHelp,
        addHelp: addHelp,
      };
    });
