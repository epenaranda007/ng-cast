angular.module('video-player')

.directive('app', function() {
  return {
    // TODO
    templateUrl: 'src/templates/app.html'
  };
})

.controller('AppController', function($scope, youTube) {
  $scope.current = window.exampleVideoData[0];
  $scope.videos = window.exampleVideoData;
  $scope.data = youTube.fetch();
  $scope.onClick = function(vid) {
    $scope.current = vid;
  };
});
