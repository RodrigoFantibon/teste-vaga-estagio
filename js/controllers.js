angular.module("cadClientes").controller("cadClientesController", function($scope, $http){   
    $scope.adicionar=[];      

    var carregaEmpresas = () => {    
        $http.get("http://localhost:3000/empresas").then(function (response) {
        $scope.adicionar = response.data
        });
    }
        carregaEmpresas ();
      

    $scope.adicionarCliente = (adiciona) => {      
      $http.post("http://localhost:3000/empresas", adiciona).then(function (response) {  
            $scope.adicionar.push(angular.copy(adiciona));
           console.log(response.data)
            });
        }     

        $scope.deleteCliente = (adiciona) => {      
            $http.post("http://localhost:3000/empresas", adiciona).then(function (response) {  
                delete $scope.adiciona;
                  });
              }     
});       