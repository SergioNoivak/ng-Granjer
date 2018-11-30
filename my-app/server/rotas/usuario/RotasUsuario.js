"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados_1 = require("./../../PortadorDeConexaoBancoDeDados");
var UsuarioDAO_1 = require("./../../classesDAO/UsuarioDAO");
var RotasUsuario = /** @class */ (function () {
    function RotasUsuario() {
    }
    RotasUsuario.init = function (app) {
        app.route('/cadastrar/usuario').post(function (req, res) {
            console.log(req.body);
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            var usuarioDAO = new UsuarioDAO_1.UsuarioDAO();
            console.log("USUARIODAO req.body.usuario " + req.body.usuario);
            console.log("USUARIODAO req.body " + JSON.stringify(req.body));
            usuarioDAO.Cadastrar(req.body, portadorDeConexaoBancoDeDados.connection);
            portadorDeConexaoBancoDeDados.FinalizarConexao();
        });
    };
    return RotasUsuario;
}());
exports.RotasUsuario = RotasUsuario;
