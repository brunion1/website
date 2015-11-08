app.controller('homeCtrl', function($scope, personalServices){
	//create service call for mongoDB
	personalServices.getBio().then(
		function(bio){
			$scope.bio = bio;
		},
		function(message){
			
		}
	)
});