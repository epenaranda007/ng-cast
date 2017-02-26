angular.module('video-player')

.directive('videoList', function() {
  return {

    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      //console.log($scope);
    },
    templateUrl: 'src/templates/videoList.html' 
  };
});


