"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados_1 = require("../../PortadorDeConexaoBancoDeDados");
var RotasMatriz = /** @class */ (function () {
    function RotasMatriz() {
    }
    RotasMatriz.init = function (app) {
        app.route('/cadastrar/matriz').post(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "nggranjer");
            var sql = "INSERT INTO matriz \n            \n            (identificacao,\n            dataNascimento,\n            dataEntradaReproducao,\n            quantidadeTetosFuncionais,\n            status)VALUES ('" + req.body.Identificacao + "','" + req.body.DatadeNascimento + "','" + req.body.DataEntradaReproducao + "'," + req.body.QuantidadeTetosFuncionais + ",'" + req.body.Status + "')";
            console.log("A SQL::" + sql);
            console.log("A req.body::" + JSON.stringify(req.body));
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record inserted");
            });
        });
        app.route('/exibir/matriz/all').get(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            var sql = "SELECT * from matriz";
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ resultado: result });
            });
        });
    };
    return RotasMatriz;
}());
exports.RotasMatriz = RotasMatriz;
