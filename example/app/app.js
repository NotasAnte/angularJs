//etiqueta app, [] modulos añadidos --> ng-app="App"
angular.module("App", []);
//controlador de app--> ng-controller="AppController"
angular.module("App").controller("AppController", function($scope, $http){
	//variable nombre
	let contadorId=2;
	$scope.nombre = "Alberto";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			mensaje	: "buen trabajo",
			username: "Marulanda",
			id		: 1
		},
		{
			mensaje	: "buen trabajo hijoeputa",
			username: "Raúl",
			id		: 2
		}
	];

	$scope.agragarComentario = function(){
		if($scope.nuevoComentario!=undefined && $scope.nuevoComentario!= null && $scope.nuevoComentario.mensaje!=undefined && $scope.nuevoComentario.username!=undefined){
			contadorId++;
			$scope.nuevoComentario.id = contadorId;
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		}else{

		}
	}
	$scope.eliminarComentario = function(id){
		for (var i = 0; i < $scope.comentarios.length; i++) {
	        if ($scope.comentarios[i].id === id) {
	            $scope.comentarios.splice(i, 1);
	            i--;
	        }
	    }
	}

//agragamos comentarios
	$scope.posts = {};
	$http.get('http://jsonplaceholder.typicode.com/comments').then(successCallback, errorCallback);
		function successCallback(response){
		    //success code
		    $scope.posts = response.data;
		}
		function errorCallback(error){
		    //error code
		}
	

});

//modelo vista vista modelo MVVM vista moelo - $scope 