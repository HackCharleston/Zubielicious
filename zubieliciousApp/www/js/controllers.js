angular.module('starter.controllers', ['ionic'])

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
  };

})

.controller('PlaylistsCtrl', function ($scope, Activity) {

  //console.log($scope.activities);

})

.controller('PlaylistCtrl', function ($scope, $stateParams, Activity) {
  //$scope.activities = Activity.getData();
})

    .controller('MapCtrl', function($scope, $ionicLoading) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(43.07493,-89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener(document.getElementById('map'), 'mousedown', function(e) {
          e.preventDefault();
          return false;
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);

      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
    });
