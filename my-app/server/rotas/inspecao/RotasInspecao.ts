import { PortadorDeConexaoBancoDeDados } from '../../PortadorDeConexaoBancoDeDados';


class RotasInspecao{
    static init(app){

        app.route('/cadastrar/inspecao').post((req, res) => {
        
            
            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"nggranjer")
            
            var sql = `INSERT INTO inspecao (
                id_matriz,
                motivo,
                procedimento,
                dataDaInspecao,
                hora,
                nomeInterventor
            )VALUES (`+req.body.id_matriz+ `,\'`+req.body.motivo+`\',\'`+req.body.procedimento+`\',\'`+req.body.dataDaInspecao +`\',\'`+req.body.hora+`\',\'`+req.body.nomeInterventor+`\')`;
            console.log("A SQL::" +sql);              
            console.log("A req.body::" +JSON.stringify(req.body));                              
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            
            });
              



            app.route('/exibir/inspecao/all').get((req, res) => {

                let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
                portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
                
                var sql = `SELECT * from inspecao`;
    
                portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result,fields) {
                    if (err) throw err;
                    
                      res.json({resultado:result})
    
                    });
                })

       
    }
}
export{RotasInspecao}
