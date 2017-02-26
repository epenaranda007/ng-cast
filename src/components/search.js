angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      service: '<',
      result: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'searchCtrl',
    
    templateUrl: 'src/templates/search.html'
  };
})

.controller('searchCtrl', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
});
