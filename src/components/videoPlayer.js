angular.module('video-player')

.directive('videoPlayer', function() {
  return {

    scope: {
      video: '<',
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // console.log($scope);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
})

.filter('youtubeEmbedUrl', function($sce) {
  return function(videoId) {
    return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
  };
});