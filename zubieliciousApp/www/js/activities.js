angular.module('activities', ['ngResource']);
angular.module('activities')
  .factory('activities', function ($resource){
    var Activity = $resource('/data/activities.json', {},
      get: {
        method: 'GET'
      });


  });
