"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados_1 = require("../../PortadorDeConexaoBancoDeDados");
var RotasInspecao = /** @class */ (function () {
    function RotasInspecao() {
    }
    RotasInspecao.init = function (app) {
        app.route('/cadastrar/inspecao').post(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "nggranjer");
            var sql = "INSERT INTO inspecao (\n                id_matriz,\n                motivo,\n                procedimento,\n                dataDaInspecao,\n                hora,\n                nomeInterventor\n            )VALUES (" + req.body.id_matriz + ",'" + req.body.motivo + "','" + req.body.procedimento + "','" + req.body.dataDaInspecao + "','" + req.body.hora + "','" + req.body.nomeInterventor + "')";
            console.log("A SQL::" + sql);
            console.log("A req.body::" + JSON.stringify(req.body));
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record inserted");
            });
        });
        app.route('/exibir/inspecao/all').get(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            var sql = "SELECT * from inspecao";
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ resultado: result });
            });
        });
    };
    return RotasInspecao;
}());
exports.RotasInspecao = RotasInspecao;
