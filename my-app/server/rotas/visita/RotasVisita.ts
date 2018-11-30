import { PortadorDeConexaoBancoDeDados } from "../../PortadorDeConexaoBancoDeDados";

export class RotasVisita{
    static init(app){

        app.route('/cadastrar/visita').post((req, res) => {
            console.log(req.body);
            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            console.log("Em Cadastrar "+JSON.stringify(req.body));
            var sql = `INSERT INTO visita 
                        (nomeVisitante,
                        motivo,
                        dataVisita,
                        horarioInicio,
                        horarioFim,
                        ultimoLocal,
                        ultimoHorarioContato,
                        empresaInstituicao)
                        VALUES (` + `\'`+req.body.nomeVisitante+ `\',\'`+req.body.motivo+ `\',\'`+req.body.dataVisita+ `\',\'`+req.body.horarioInicio+ `\',\'`+req.body.horarioFim+ `\',\'`+req.body.ultimoLocal+ `\',\'`+req.body.ultimoHorarioContato+ `\',\'`+req.body.empresaInstituicao+`\')`;
            console.log("A SQL::" +sql);              
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            
            });


        app.route('/exibir/visita/all').get((req, res) => {

            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            
            var sql = `SELECT * from visita`;

            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result,fields) {
                if (err) throw err;
                
                  res.json({resultado:result})

                });
            })

        }
}
            
    
            




    
