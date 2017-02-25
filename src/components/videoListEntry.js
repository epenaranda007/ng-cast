angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      title: '@',
      description: '@',
      thumbnail: '@'
    },
    // controllerAs: 'ctrl',
    // bindToController: true,

    templateUrl: 'src/templates/videoListEntry.html'
  };
});
