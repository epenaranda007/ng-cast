angular.module('video-player')
.directive('videoList', function() {
  return {

    scope: {
      videos: '<'
    },
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      $scope.ctrl = {};
      $scope.ctrl.videos = window.exampleVideoData;
      $scope.ctrl.onClick = function() {};
      console.log($scope.ctrl.videos);
    },
    templateUrl: 'src/templates/videoList.html' 
  };
});


