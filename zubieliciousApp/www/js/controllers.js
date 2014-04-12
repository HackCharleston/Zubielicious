angular.module('starter.controllers', ['ionic', 'google-maps'])

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

      $scope.range = function(n) {
        return new Array(n);
    };

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
  $scope.$on('viewState.viewEnter', function(e, d) {
      console.log('View enter', e, d, $scope);
      var mapEl = angular.element(document.querySelector('.angular-google-map'));
      var iScope = mapEl.isolateScope();
      var map = iScope.map;
      google.maps.event.trigger(map, "resize");
  });

  $scope.map = {
      center: {
        latitude: 33.331674,
        longitude: -80.075843
      },
      bounds: {},
      zoom: 8,
      markers: [
                //Wadmalaw Island, SC
                {
                    icon: 'img/markerGreen.png',
                    latitude: 32.681833,
                    longitude: -80.176347,
                    showWindow: true,
                    title: 'Wadmalaw Island'
                },
                //Sullivan's Island, SC
                {
                    icon: 'img/markerGreen.png',
                    latitude: 32.763232,
                    longitude: -79.836751,
                    showWindow: false,
                    title: 'Sullivan\'s Island'
                },
                //Four Hole Swamp, SC
                {
                    icon: 'img/markerGreen.png',
                    latitude: 33.535462,
                    longitude: -80.697699,
                    showWindow: false,
                    title: 'Four Hole Swamp'
                },
                //Ashley River, SC
                {
                    icon: 'img/markerGreen.png',
                    latitude: 32.837829,
                    longitude: -79.994796,
                    showWindow: false,
                    title: 'Ashley River'
                },
                //Ashem Farm, SC
                {
                    icon: 'img/markerGreen.png',
                    latitude: 33.836081,
                    longitude: -81.163725,
                    showWindow: false,
                    title: 'Ashem Farm'
                },
                //Angel Oak Preserve
                {
                    icon: 'img/markerGreen.png',
                    latitude: 32.716769,
                    longitude: -80.080808,
                    showWindow: false,
                    title: 'Angel Oak Preserve'
                }
            ]
  };

  _.each($scope.map.markers, function (marker) {
        marker.closeClick = function () {
            marker.showWindow = false;
            $scope.$apply();
        };
        marker.onClicked = function () {
            onMarkerClicked(marker);
        };
    });

  var onMarkerClicked = function (marker) {
        marker.showWindow = true;
        $scope.$apply();
        //window.alert("Marker: lat: " + marker.latitude + ", lon: " + marker.longitude + " clicked!!")
    };
});
