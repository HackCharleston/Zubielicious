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
    console.log('activity selected' + act.name);
  };

})

.controller('PlaylistsCtrl', function ($scope, Activity) {

  //console.log($scope.activities);

})

.controller('PlaylistCtrl', function ($scope, $stateParams, Activity) {
  //$scope.activities = Activity.getData();
})

.controller('MapCtrl', function($scope, $ionicLoading) {
  google.maps.visualRefresh = true;

  $scope.$on('viewState.viewEnter', function(e, d) {
      console.log('View enter', e, d, $scope);
      var mapEl = angular.element(document.querySelector('.angular-google-map'));
      var iScope = mapEl.isolateScope();
      var map = iScope.map;
      google.maps.event.trigger(map, "resize");
  });

  $scope.$watch('theActivity', function (newVal, oldVal) {
    if (newVal != oldVal) {
      //var result
      $scope.map.center = {
        latitude : newVal.latitude,
        longitude: newVal.longitude
      };

      $scope.map.zoom = 18;
    }

  });

  $scope.selectLocation = function (loc) {
    $scope.selectedLocation = loc;
    console.log('selected location ' + loc.title);
    $scope.map.center = {
      latitude : loc.latitude,
      longitude: loc.longitude
    };
    $scope.map.zoom = 14;
  };


  $scope.map = {
      center: {
        latitude: 33.331674,
        longitude: -80.075843
      },
      bounds: {},
      zoom: 8,
      places: [
                //Wadmalaw Island, SC
                {
                    icon: 'img/smallLogo.png',
                    latitude: 32.681833,
                    longitude: -80.176347,
                    showWindow: false,
                    title: 'Wadmalaw Island'
                },
                //Sullivan's Island, SC
                {
                    icon: 'img/smallLogo.png',
                    latitude: 32.763232,
                    longitude: -79.836751,
                    showWindow: false,
                    title: 'Sullivan\'s Island'
                },
                //Four Hole Swamp, SC
                {
                    icon: 'img/smallLogo.png',
                    latitude: 33.535462,
                    longitude: -80.697699,
                    showWindow: false,
                    title: 'Four Hole Swamp'
                },
                //Ashley River, SC
                {
                    icon: 'img/smallLogo.png',
                    latitude: 32.837829,
                    longitude: -79.994796,
                    showWindow: false,
                    title: 'Ashley River'
                },
                //Ashem Farm, SC
                {
                    icon: 'img/smallLogo.png',
                    latitude: 33.836081,
                    longitude: -81.163725,
                    showWindow: false,
                    title: 'Ashem Farm'
                },
                //Angel Oak Preserve
                {
                    icon: 'img/smallLogo.png',
                    latitude: 32.716769,
                    longitude: -80.080808,
                    showWindow: false,
                    title: 'Angel Oak Preserve'
                }
            ],
            activities: [
                //Kayaking
                {
                    icon: 'img/markerBlue.png',
                    latitude: 32.706488,
                    longitude: -80.177695,
                    showWindow: false,
                    title: 'Kayaking'
                },
                //Walking Trails
                {
                    icon: 'img/markerBrown.png',
                    latitude: 32.663145,
                    longitude: -80.184733,
                    showWindow: false,
                    title: 'Walking Trails'
                },
                //Fishing
                {
                    icon: 'img/markerMustard.png',
                    latitude: 32.660182,
                    longitude: -80.145594,
                    showWindow: false,
                    title: 'Fishing'
                }
            ]
  };

  _.each($scope.map.markers, function (marker) {
        marker.closeClick = function () {
            marker.showWindow = false;
            $scope.$apply();
        };
        marker.onClicked = function () {
            marker.showWindow = true;
            $scope.$apply();
        };
    });
});
