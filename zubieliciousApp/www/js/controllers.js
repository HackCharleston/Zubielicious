angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {
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
