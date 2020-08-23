angular.module('ifsp').controller('CursosController',
    function($scope) {
        $scope.total = 0;
        $scope.incrementa = function() {
            $scope.total++;
        };

        $scope.cursos = [
            { "_id": 1, "curso": "Análise e Desenvolvimento de Sistema", "coodernador": "fabio.teixeira@ifsp.edu.br" },
            { "_id": 2, "curso": "Administração", "coodernador": "gabriel.lemos@ifsp.edu.br" },
            { "_id": 3, "curso": "Engenharia", "coodernador": "romulo.icaro@ifsp.edu.br" },
        ];

        $scope.filtro = '';
    });