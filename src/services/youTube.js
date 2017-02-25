angular.module('video-player')
.service('youTube', ['$http', function($http) {
  // TODO
  this.search = function(callback) {
    console.log('hello');
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: 'AIzaSyCbs-YSZJ_Ya37LFtEhfW7eayDyrJFJIMc', 
        q: 'angular', 
        maxResults: '5', 
        part: 'snippet'
      }
    }).then(function success(result) {
      console.log(result.data.items);
      //callback()
      //callback(data);
    });
  };

}]);


// this.getDefaultVideos = function($http) {
//     console.log('getDefaultVideos');
//     $http({
//       url: 'https://www.googleapis.com/youtube/v3/search',
//       method: 'GET',
//       contentType: 'application/json',
//       data: {key: 'AIzaSyCbs-YSZJ_Ya37LFtEhfW7eayDyrJFJIMc', q: 'angular', maxResults: '5', part: 'snippet'}
      

//     }).then(function success(data) {
//       console.log(data);
//       //callback(data);
//     });