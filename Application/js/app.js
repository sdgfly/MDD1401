angular.module('ifb', [])
	.config(ifbRouter);

function ifbRouter ($routeProvider) {
	$routeProvider
		//Home page
		.when('/', {templateUrl: 'views/home.html'})
		//search page
		.when('/search', {templateUrl: 'views/search.html'})
		//previous searches page
		.when('/previous', {templateUrl: 'views/previous.html'})
		
}