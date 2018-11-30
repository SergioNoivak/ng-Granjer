"use strict";
exports.__esModule = true;
var LigadorDeBanco = /** @class */ (function () {
    function LigadorDeBanco() {
        this.mysql = require('mysql');
    }
    LigadorDeBanco.prototype.CriarConexao = function (host, user, password, port, database) {
        var con = this.mysql.createConnection({
            host: host,
            user: user,
            password: password,
            port: port,
            database: database
        });
        con.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + con.threadId);
        });
        return con;
    };
    LigadorDeBanco.prototype.ExibirDados = function (connection, query) {
        connection.query(query, function (error, rows, fields) {
            if (error)
                throw error;
            if (rows) {
                rows.forEach(function (element) {
                    console.log(element.nome);
                });
            }
        });
    };
    LigadorDeBanco.prototype.FinalizarConexao = function (con) {
        con.end();
    };
    return LigadorDeBanco;
}());
exports.LigadorDeBanco = LigadorDeBanco;
