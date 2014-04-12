angular.module('resources.activities', []);
angular.module('resources.activities')
  .factory('Activity', function ($http){
    var activityData = $http.get('/data/activities.json').success(function (response) {
      console.log('activities ' + JSON.stringify(response, undefined, 2));
      return response;
    });

    var Activity = {};

    Activity.getData = function () {
      return activityData;
    };

    return Activity;
  });
