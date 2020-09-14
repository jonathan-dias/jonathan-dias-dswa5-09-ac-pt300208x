const contato = require("../routes/contato");

var contatos = [
    {_id: 1, nome: 'Fabio Teixeira', email: 'fabio.texeira@ifsp.edu.br'},
    {_id: 2, nome: 'Gabriel Lemos', email: 'gabriel.lemos@ifsp.edu.br'},
    {_id: 3, nome: 'Rogerio Ferreira', email: 'rogerio.ferreira@ifsp.edu.br'}
]

module.exports = function(){
    var controller = {};
    controller.listaContatos = function(req, res){
        res.json(contatos);
    };
    controller.obtemContato = function(req, res){
        console.log('Selecionou o contato: ' + req.params.id);
        var idContato = req.params.id;
        var contato = contatos.filter(function(contato){
            return contato._id == idContato;

        })[0];
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
    };
    controller.removeContato = function(req, res){
        var idContato = req.params.id;
        contatos = contatos.filter(function(contato){
            return contato._id != idContato;
        });
        res.send(204).end();
    }

    return controller;
}