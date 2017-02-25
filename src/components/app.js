angular.module('video-player')

.directive('app', function() {
  return {
    // TODO
    templateUrl: 'src/templates/app.html'
  };
})

.controller('VideoController', function($scope) {
  $scope.videoList = window.exampleVideoData;
  $scope.currentVideo = window.exampleVideoData[0];
});
