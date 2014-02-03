var app = angular.module('Ifb', [])
	.config(ifbRouter);

function ifbRouter ($routeProvider) {
	$routeProvider
		//Home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: ('HomeCtrl')
		})
		//search page
		.when('/search', {
			templateUrl: 'views/search.html',
			controller:('SearchCtrl')
		})
		//previous searches page
		.when('/previous', {
			templateUrl: 'views/previous.html',
			controller:('PreviousCtrl')
		})
		
}

