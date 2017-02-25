angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      // title: '@',
      // description: '@',
      // thumbnail: '@'
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },

    templateUrl: 'src/templates/videoListEntry.html'
  };
});
