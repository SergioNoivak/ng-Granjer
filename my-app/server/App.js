"use strict";
exports.__esModule = true;
var RotasMedicacao_1 = require("./rotas/medicacao/RotasMedicacao");
var RotasUsuario_1 = require("./rotas/usuario/RotasUsuario");
var RotasMatriz_1 = require("./rotas/matriz/RotasMatriz");
var RotasInspecao_1 = require("./rotas/inspecao/RotasInspecao");
var RotasVacina_1 = require("./rotas/vacina/RotasVacina");
var RotasVisita_1 = require("./rotas/visita/RotasVisita");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.port = 8000;
        this.app = require('express')();
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.json()); // support json encoded bodies
        this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
        this.configurarPrivilegios();
        this.configRoutes();
        this.app.listen(this.port, function () { return console.log("Example app listening on port " + _this.port + "!"); });
    }
    App.prototype.configRoutes = function () {
        RotasMedicacao_1.RotasMedicacao.init(this.app);
        RotasUsuario_1.RotasUsuario.init(this.app);
        RotasMatriz_1.RotasMatriz.init(this.app);
        RotasInspecao_1.RotasInspecao.init(this.app);
        RotasVacina_1.RotasVacina.init(this.app);
        RotasVisita_1.RotasVisita.init(this.app);
        this.app.route('/teste').get(function (req, res) {
            res.send({ name: "Eu vim em paz do servidor" });
        });
        this.app.route('/teste').post(function (req, res) {
            console.log(req.body);
        });
    };
    App.prototype.configurarPrivilegios = function () {
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
    };
    return App;
}());
exports.App = App;
