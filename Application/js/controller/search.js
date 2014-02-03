function SearchCtrl($scope, $http) {
  //add the class active on the search link by running the setActive method
  //$scope.setActive('search');

  var results = 
    $http.jsonp('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84ad829261f6347dbfc4bf23fc1afdbd&tags=' + $scope.search + '&format=')
      .success(function(data){
        console.log('results');
      })

   

    
    results.error(function(data) {
      throw new Error('You broke it Jim it is now dead...');
    });
}