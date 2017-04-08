angular.module('$movieApp.nowplayingCtrl', [])
	.controller('$nowplayingCtrl', ['$scope','$movieServ','$routeParams', function($scope,$movieServ,$routeParams){
		$routeParams.pageid=$routeParams.pageid||1;
		$scope.movie={};
		$scope.isloading=false;
		var start=($routeParams.pageid-1)*5;
		var aSotp=document.querySelectorAll('.paging>a')
		$movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters',{
			count:5,
			start: start
		},
			function(data){
				$scope.movie=data;
				$scope.prevPage=($routeParams.pageid-0)-1;

				if($routeParams.pageid==1){
					$routeParams.pageid=1;
					for (var i = 0; i < 2; i++) {
						aSotp[i].setAttribute('onclick','return false')
					};
					
				}
				$scope.nextPage=($routeParams.pageid-0)+1;
				$scope.pageCount=Math.ceil(data.total/5);
				$scope.total=data.total;
				$scope.pageid=$routeParams.pageid
				if($routeParams.pageid==$scope.pageCount){
					$routeParams.pageid=$scope.pageCount;
					for (var i = 2; i < 3; i++) {
						aSotp[i].setAttribute('onclick','return false')
					};
				}
				
				$scope.isloading=true;	
				$scope.$apply();
			})
	}])