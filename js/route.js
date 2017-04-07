angular.module('movieApp.route', ['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider
		    .when('/',{
		    	templateUrl:'tmps/index-tmp.html'
		    })
		    .when('/later',{
		    	templateUrl:'tmps/later-tmp.html',
		    	controller:'laterCtrl'
		    })
		    .when('/nowplaying',{
		    	templateUrl:'tmps/nowplaying-tmp.html',
		    	controller:'nowplayingCtrl'
		    })
		    .when('/top250',{
		    	templateUrl:'tmps/top250-tmp.html',
		    	controller:'top250Ctrl'
		    })
	}])