app.controller('qaCtrl', function($scope, personalServices){
	//create service call for mongoDB
	personalServices.getQa().then(
		function(qaInfo){
			$scope.qaInfo = qaInfo;
		},
		function(message){
			
		}
	)
});