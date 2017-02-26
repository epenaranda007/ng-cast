angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    console.log('hello');
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: '5', 
        key: $window.YOUTUBE_API_KEY, 
        videoEmbeddable: 'true'
      }
    }).then(function({data}) {
      if (callback) {
        console.log(callback);
        console.log('youTube service', data.items);
        callback(data.items);
      }
    });
  };

});