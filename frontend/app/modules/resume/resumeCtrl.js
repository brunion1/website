app.controller('resumeCtrl', function($scope, personalServices){
	//create service call for mongoDB
	personalServices.getResume().then(
		function(resume){
			$scope.resume = resume;
		},
		function(message){
			
		}
	)
});