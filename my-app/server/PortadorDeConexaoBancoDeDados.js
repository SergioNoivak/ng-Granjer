"use strict";
exports.__esModule = true;
var PortadorDeConexaoBancoDeDados = /** @class */ (function () {
    function PortadorDeConexaoBancoDeDados() {
        this.mysql = require('mysql');
    }
    PortadorDeConexaoBancoDeDados.prototype.Conectar = function () {
        this.connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
        });
    };
    PortadorDeConexaoBancoDeDados.prototype.CriarConexaoEConectar = function (host, user, password, port, database) {
        this.connection = this.mysql.createConnection({
            host: host,
            user: user,
            password: password,
            port: port,
            database: database
        });
        this.Conectar();
    };
    PortadorDeConexaoBancoDeDados.prototype.ExibirDados = function (query) {
        this.connection.query(query, function (error, rows, fields) {
            if (error)
                throw error;
            if (rows) {
                rows.forEach(function (element) {
                    console.log(element.nome);
                });
            }
        });
    };
    PortadorDeConexaoBancoDeDados.prototype.FinalizarConexao = function () {
        this.connection.end();
    };
    return PortadorDeConexaoBancoDeDados;
}());
exports.PortadorDeConexaoBancoDeDados = PortadorDeConexaoBancoDeDados;
