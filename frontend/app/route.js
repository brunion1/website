app.config(function($routeProvider, $httpProvider){
	$routeProvider.
		when('/resume', {
			templateUrl: 'app/modules/resume/resume.html',
			controller: 'resumeCtrl'
		}).
		when('/lab', {
			templateUrl: 'app/modules/lab/lab.html',
			controller: 'labCtrl'
		}).
		when('/qa', {
			templateUrl: 'app/modules/qa/qa.html',
			controller: 'qaCtrl'
		}).
		when('/home', {
			templateUrl: 'app/modules/home/home.html',
			controller: 'homeCtrl'
		}).
		otherwise({
			redirectTo: '/home'
		});
		
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
});