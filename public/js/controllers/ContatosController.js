angular.module('ifsp').controller('ContatosController',
    function(Contato, $scope) {
        $scope.contatos = [];
        $scope.filtro = '';

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
                    console.log("Não foi possível remover o contato");
                    console.log(erro);
                    $scope.mensagem = { texto: "Não foi possível remover o contato"}
                });
        };
    });