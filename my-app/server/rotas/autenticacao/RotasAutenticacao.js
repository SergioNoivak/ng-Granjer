"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados_1 = require("../../PortadorDeConexaoBancoDeDados");
var RotasAutenticacao = /** @class */ (function () {
    function RotasAutenticacao() {
    }
    RotasAutenticacao.init = function (app) {
        app.route('/autenticar').post(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            var sql = "SELECT count(*) as numeroLinhas FROM usuario WHERE nomeUsuario= '" + req.body.usuario.nomeUsuario + "' AND senha='" + req.body.usuario.senha + "';";
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result);
                res.json({ resultado: result });
            });
        });
    };
    return RotasAutenticacao;
}());
exports.RotasAutenticacao = RotasAutenticacao;
