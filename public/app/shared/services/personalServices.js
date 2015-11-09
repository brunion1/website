app.factory('personalServices', function($http, $q, config){
	return{
		getBio : getBio,
		getProjects : getProjects,
		getResume : getResume,
		getQa : getQa
	}
	
	function getBio(){
		return $q(function(resolve, reject){
			$http.get(config.baseURL + config.bioURL).success(
				function(bio){
					resolve(bio);
				})
		});
	};
	
	function getProjects(){
		return $q(function(resolve, reject){
			$http.get(config.baseURL + config.labURL).success(
				function(projects){
					resolve(projects);
				})
		});
	};
	
	function getResume(){
		return $q(function(resolve, reject){
			$http.get(config.baseURL + config.resumeURL).success(
				function(resume){
					resolve(resume);
				})
		});
	};
	
	function getQa(){
		return $q(function(resolve, reject){
			$http.get(config.baseURL + config.qaURL).success(
				function(qa){
					resolve(qa);
				})
		});
	};
});