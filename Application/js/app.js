angular.module('ifb', [])
	.config(ifbRouter);

function ifbRouter ($routeProvider) {
	$routeProvider
		//Home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: ('homeCtrl')
		})
		//search page
		.when('/search', {
			templateUrl: 'views/search.html',
			controller:('searchCtrl')
		})
		//previous searches page
		.when('/previous', {
			templateUrl: 'views/previous.html',
			controller:('previousCtrl')
		})
		
}

function IfbCtrl ($scope) {
  //set the default active to null
  $scope.setActive = function (type) {
    $scope.homeActive = '';
    $scope.searchActive = '';
    $scope.previousActive = '';

    $scope[type + 'Active'] = 'active';
  }



}