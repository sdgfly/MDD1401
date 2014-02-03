function IfbCtrl ($scope) {
	//set the default active to null
	$scope.setActive = function (type) {
		$scope.homeActive = ' ';
		$scope.searchActive = ' ';
		$scope.previousActive = ' ';

		$scope[type + 'Active'] = 'active';
	}

}