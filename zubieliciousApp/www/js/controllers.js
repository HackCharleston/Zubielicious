angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {

  $scope.locationsActive = true;
  $scope.typesActive = false;

  $scope.types = [
    {name: 'Canoeing'},
    {name: 'Fishing'},
    {name: 'Hunting'},
    {name: 'Animal Watching'},
    {name: 'Birding'},
    {name: 'Swimming'},
    {name: 'Kayaking'},
    {name: 'Paddle Boarding'},
    {name: 'Historical POI'},
    {name: 'You Pick Agriculture'},
    {name: 'Swimming'},
    {name: 'Surfing'},
    {name: 'Hiking'},
    {name: 'Biking'},
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

  $scope.showLocations = function () {
    $scope.locationsActive = true;
    $scope.typesActive = false;
  };

  $scope.showTypes = function () {
    $scope.locationsActive = false;
    $scope.typesActive = true;
  };

})

.controller('PlaylistsCtrl', function ($scope, Activity) {
  Activity.getData().success(function (data) {
    $scope.activities = data;
  });
  //console.log($scope.activities);

})

.controller('PlaylistCtrl', function ($scope, $stateParams, Activity) {
  $scope.activities = Activity.getData();
});
