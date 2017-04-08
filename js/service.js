
angular.module('$movieApp.service', [])
	.service('$movieServ',function(){
		this.jsonp=function(url,params,callback){
			 //2. 拼接url https://api.douban.com/v2/movie/in_theaters?count=1&start=0&callback=aa
			 var script=document.createElement("script");
			 url+='?';
			 for(var k in params){
			 	url+=k+'='+params[k]+'&';
			 }
			 url+="callback=aa";
			 script.src=url;
			 document.body.appendChild(script);
			 window.aa=function (data){
			 	callback(data);
			 	document.body.removeChild(script)
			 }
		}
	})