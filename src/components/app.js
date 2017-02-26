angular.module('video-player')

.controller('AppCtrl', function(youTube) {
  
  this.searchService = youTube;

  this.searchResults = function(data) {
    this.videos = data;
    this.currentVideo = this.videos[0];
  }.bind(this);

  this.selectVideo = function(video) {
    this.currentVideo = video;
  }.bind(this);

  this.onClick = function(vid) {
    this.currentVideo = vid;
  };
  
  this.searchService.search('cars', this.searchResults);
})

.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});

