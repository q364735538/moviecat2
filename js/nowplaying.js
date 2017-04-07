angular.module('movieApp.nowplayingCtrl', [])
	.controller('nowplayingCtrl', ['$scope','$movieServ', function($scope,$movieServ){
		$scope.movie={};
		$movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters',
						{count: 20,start: 0},
						function(data){
							$scope.movie=data;
							$scope.$apply();
						})
	}])