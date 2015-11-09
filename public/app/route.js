app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  
  var home = {
      url: "/home",
      templateUrl: "app/modules/home/home.html",
      controller : "homeCtrl"
    }
    
  var resume = {
      url: "/resume",
      templateUrl: "app/modules/resume/resume.html",
      controller : "resumeCtrl"
    }
  
  var qa = {
      url: "/qa",
      templateUrl: "app/modules/qa/qa.html",
      controller : "qaCtrl"
    }
    
  var lab = {
      url: "/lab",
      templateUrl: "app/modules/lab/lab.html",
      controller : "labCtrl"
    }
  
  $stateProvider
    .state('home', home)
    .state('resume', resume)
    .state('qa', qa)
	  .state('lab', lab)
});