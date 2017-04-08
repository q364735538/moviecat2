angular.module('$movieApp.searchCtrl', [])
	.controller('$searchCtrl', ['$scope','$movieServ','$routeParams', function($scope,$movieServ,$routeParams){
		$scope.searchName=$routeParams.searchName;
		$routeParams.pageid=$routeParams.pageid||1;
		$scope.movie={};
		$scope.isloading=false;	
		$scope.pageid=$routeParams.pageid
		var start=($routeParams.pageid-1)*5;
		var aSotp=document.querySelectorAll('.paging>a')
		$movieServ.jsonp('https://api.douban.com/v2/movie/search',{
			count:5,
			q:$scope.searchName,
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