
import { RotasMedicacao } from "./rotas/medicacao/RotasMedicacao";
import { RotasUsuario } from "./rotas/usuario/RotasUsuario";
import { RotasMatriz } from "./rotas/matriz/RotasMatriz";
import { RotasInspecao } from "./rotas/inspecao/RotasInspecao";
import { RotasVacina } from './rotas/vacina/RotasVacina';
import { RotasVisita } from './rotas/visita/RotasVisita';
import { RotasAutenticacao } from "./rotas/autenticacao/RotasAutenticacao";

    class App{
    public app:any;
    public port:number = 8000;

    public constructor () {

        this.app = require('express')();
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.json()); // support json encoded bodies
        this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
        this.configurarPrivilegios();
        this.configRoutes();
        this.app.listen(this.port, () => console.log(`Example app listening on port ${this.port}!`))
    
    }

    configRoutes(){

        RotasMedicacao.init(this.app);
        RotasUsuario.init(this.app);
        RotasMatriz.init(this.app);
        RotasInspecao.init(this.app);
        RotasVacina.init(this.app); 
        RotasVisita.init(this.app);
        RotasAutenticacao.init(this.app);
       
    }
    configurarPrivilegios(){

        this.app.use(function (req, res, next) {
        
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);

            next();
        });
    }

}

export {App};





