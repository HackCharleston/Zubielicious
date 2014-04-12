angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, Activity) {

  $scope.types = [
    //{name: 'Canoeing'},
    {name: 'Fishing'},
    // {name: 'Hunting'},
    // {name: 'Animal Watching'},
    // {name: 'Birding'},
    // {name: 'Swimming'},
    {name: 'Kayaking'},
    // {name: 'Paddle Boarding'},
    // {name: 'Historical POI'},
    // {name: 'You Pick Agriculture'},
    // {name: 'Swimming'},
    // {name: 'Surfing'},
    // {name: 'Hiking'},
    // {name: 'Biking'},
    {name: 'Walking Trails'}
  ];

  $scope.locations = [
    {name: 'Wadmalaw Island'},
    {name: 'Sullivan\'s Island'},
    {name: 'Four Holes Swamp'},
    {name: 'Ashley River'},
    {name: 'Ashem Farm'},
    {name: 'Angel Oak Preserve'},
  ];

  Activity.getData().success(function (data) {
    $scope.activities = data;
  });

  $scope.selectActivity = function (act) {
    $scope.theActivity = act;
  }

})

.controller('PlaylistsCtrl', function ($scope, Activity) {

  //console.log($scope.activities);

})

.controller('PlaylistCtrl', function ($scope, $stateParams, Activity) {
  //$scope.activities = Activity.getData();
});
