angular.module('ifsp').controller('ContatosController',
    function($scope) {
        $scope.total = 0;
        $scope.incrementa = function() {
            $scope.total++;
        };

        $scope.contatos = [
            { "_id": 1, "nome": "Fábio Teixeira", "email": "fabio.texeira@ifsp.edu.br" },
            { "_id": 2, "nome": "Gabriel Lemos", "email": "gabriel.lemos@ifsp.edu.br" },
            { "_id": 3, "nome": "Romulo Icaro", "email": "romulo.icaro@ifsp.edu.br" },
        ];

        $scope.filtro = '';
    });