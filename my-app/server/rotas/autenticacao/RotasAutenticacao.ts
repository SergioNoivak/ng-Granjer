import { PortadorDeConexaoBancoDeDados } from '../../PortadorDeConexaoBancoDeDados';


export class RotasAutenticacao{
    static init(app){

        app.route('/autenticar').post((req, res) => {

            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            
            var sql = `SELECT count(*) as numeroLinhas FROM usuario WHERE nomeUsuario= \'`+req.body.usuario.nomeUsuario+`\' AND senha=\'`+req.body.usuario.senha+`\';`;
            
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result,fields) {
                if (err) throw err;
                
                    console.log(result);
                  res.json({resultado:result})

                });
            })

        }


    

              





       
    }

