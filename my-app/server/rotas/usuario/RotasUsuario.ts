import { PortadorDeConexaoBancoDeDados } from "./../../PortadorDeConexaoBancoDeDados";
import { UsuarioDAO } from "./../../classesDAO/UsuarioDAO";

class RotasUsuario{
    static init(app){

        app.route('/cadastrar/usuario').post((req, res) => {
            console.log(req.body);
            
            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            let usuarioDAO:UsuarioDAO = new UsuarioDAO();
        
            console.log("USUARIODAO req.body.usuario "+req.body.usuario);
            console.log("USUARIODAO req.body "+JSON.stringify(req.body));
            usuarioDAO.Cadastrar(req.body,portadorDeConexaoBancoDeDados.connection)
            portadorDeConexaoBancoDeDados.FinalizarConexao();
        
        
        });

        
    }
}
export{RotasUsuario}