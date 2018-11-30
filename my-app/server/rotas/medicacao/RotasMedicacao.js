"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados_1 = require("./../../PortadorDeConexaoBancoDeDados");
var RotasMedicacao = /** @class */ (function () {
    function RotasMedicacao() {
    }
    RotasMedicacao.init = function (app) {
        app.route('/cadastrar/medicacao').post(function (req, res) {
            console.log(req.body);
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            console.log("Em Cadastrar " + JSON.stringify(req.body));
            var sql = "INSERT INTO Medicacao (nome,fornecedor)VALUES ('" + req.body.nome + "','" + req.body.fornecedor + "')";
            console.log("A SQL::" + sql);
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record inserted");
            });
        });
        app.route('/exibir/medicacao/all').get(function (req, res) {
            var portadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados_1.PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost", "root", "snovak1808", 3306, "ngGranjer");
            var sql = "SELECT * from Medicacao";
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ resultado: result });
            });
        });
    };
    return RotasMedicacao;
}());
exports.RotasMedicacao = RotasMedicacao;
