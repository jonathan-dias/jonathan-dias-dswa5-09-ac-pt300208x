module.exports = function(app){
    var controller = app.controllers.curso;
    app.route('/cursos')
        .get(controller.listaCursos)
        .post(controller.salvaContato);
    app.route('/cursos/:id')
        .get(controller.obtemCurso)
        .delete(controller.removeCurso);
};