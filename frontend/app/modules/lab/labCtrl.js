app.controller('labCtrl', function($scope, personalServices){
	//create service call for mongoDB
	personalServices.getProjects().then(
		function(projects){
			$scope.projects = projects;
		},
		function(message){
			
		}
	)
});