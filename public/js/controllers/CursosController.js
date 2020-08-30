angular.module('ifsp').controller('CursosController',
    function($resource, $scope) {
        $scope.cursos = [];
        $scope.filtro = '';
        var Curso = $resource('/cursos');
        function buscaCursos() {
            Curso.query(
                function(cursos){
                    $scope.cursos = cursos;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de cursos");
                    console.log(erro);
                }
            );
        }
        buscaCursos();

        $scope.cursos = [
            { "_id": 1, "curso": "Análise e Desenvolvimento de Sistema", "coordenador": "fabio.teixeira@ifsp.edu.br" },
            { "_id": 2, "curso": "Administração", "coordenador": "gabriel.lemos@ifsp.edu.br" },
            { "_id": 3, "curso": "Engenharia", "coordenador": "romulo.icaro@ifsp.edu.br" },
        ];

    });