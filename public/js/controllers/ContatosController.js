angular.module('ifsp').controller('ContatosControllers',
    function($scope) {
        $scope.total = 0;
        $scope.incrementa = function() {
            $scope.total++;
        };

        $scope.contatos = [
            { "_id": 1, "nome": "Jonathan Dias", "email": "jonathan.dias@aluno.ifsp.edu.br" },
            { "_id": 2, "nome": "Gabriel Lemos", "email": "gabriel.lemos@aluno.ifsp.edu.br" },
            { "_id": 3, "nome": "Romulo Icaro", "email": "romulo.icaro@aluno.ifsp.edu.br" },
        ];

        $scope.filtro = '';
    });