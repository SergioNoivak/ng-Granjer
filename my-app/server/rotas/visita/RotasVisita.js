"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados_1 = require("../../PortadorDeConexaoBancoDeDados");
var RotasVisita = /** @class */ (function () {
    function RotasVisita() {
    }
    RotasVisita.init = function (app) {
        app.route('/cadastrar/visita').post(function (req, res) {
            console.log(req.body);
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            console.log("Em Cadastrar " + JSON.stringify(req.body));
            var sql = "INSERT INTO visita \n                        (nomeVisitante,\n                        motivo,\n                        dataVisita,\n                        horarioInicio,\n                        horarioFim,\n                        ultimoLocal,\n                        ultimoHorarioContato,\n                        empresaInstituicao)\n                        VALUES (" + "'" + req.body.nomeVisitante + "','" + req.body.motivo + "','" + req.body.dataVisita + "','" + req.body.horarioInicio + "','" + req.body.horarioFim + "','" + req.body.ultimoLocal + "','" + req.body.ultimoHorarioContato + "','" + req.body.empresaInstituicao + "')";
            console.log("A SQL::" + sql);
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record inserted");
            });
        });
        app.route('/exibir/visita/all').get(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            var sql = "SELECT * from visita";
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ resultado: result });
            });
        });
    };
    return RotasVisita;
}());
exports.RotasVisita = RotasVisita;
