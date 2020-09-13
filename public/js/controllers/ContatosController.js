angular.module('ifsp').controller('ContatosController',
    function($resource, $scope) {
        $scope.contatos = [];
        $scope.filtro = '';
        var Contato = $resource('/contatos/:id');

        function buscaContatos() {
            Contato.query(
                function(contatos){
                    $scope.contatos = contatos;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de contatos");
                    console.log(erro);
                }
            );
        }
        buscaContatos();

        $scope.remove = function(contato){
            console.log(contato);
            Contato.delete({ id: contato._id},
                buscaContatos,
                function(erro){
                    console.log("Não fois possícel remover o contato");
                    console.log(erro);
                });
        };

       /* $scope.contatos = [
            { "_id": 1, "nome": "Fábio Teixeira", "email": "fabio.texeira@ifsp.edu.br" },
            { "_id": 2, "nome": "Gabriel Lemos", "email": "gabriel.lemos@ifsp.edu.br" },
            { "_id": 3, "nome": "Romulo Icaro", "email": "romulo.icaro@ifsp.edu.br" },
        ];*/

        
    });