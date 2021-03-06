angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope) {

})


.controller('AdministradoresCtrl', function($scope, Administradores) {
    $scope.busca = '';
    $scope.administradores = Administradores.all();

    $scope.limparBusca = function(){
        $scope.busca = '';
    }

    $scope.remove = function(administrador) {
      Administradores.remove(administrador);
    };
})

.controller('AdministradorDetailCtrl', function($scope, $stateParams, Administradores, $location) {
    $scope.administrador = Administradores.get($stateParams.administradorId);

    $scope.salvarAdministrador = function(){

      //alert("salvo de mentira...");
      //$location.path("tab/administradores");
  }
})

.controller("ParametroCtrl", function($scope, Parametro){
  $scope.parametro = Parametro.get(0);

  $scope.salvarParametro = function(){
    alert($scope.parametro.tolerancia);
  }
});
