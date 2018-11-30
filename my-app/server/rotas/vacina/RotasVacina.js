"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados_1 = require("../../PortadorDeConexaoBancoDeDados");
var RotasVacina = /** @class */ (function () {
    function RotasVacina() {
    }
    RotasVacina.init = function (app) {
        app.route('/cadastrar/vacina').post(function (req, res) {
            console.log(req.body);
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            console.log("Em Cadastrar " + JSON.stringify(req.body));
            var sql = "INSERT INTO vacina (nome,fornecedor)VALUES ('" + req.body.nome + "','" + req.body.fornecedor + "')";
            console.log("A SQL::" + sql);
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record inserted");
            });
        });
        app.route('/exibir/vacina/all').get(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            var sql = "SELECT * from vacina";
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ resultado: result });
            });
        });
    };
    return RotasVacina;
}());
exports.RotasVacina = RotasVacina;
