



import { PortadorDeConexaoBancoDeDados } from "../../PortadorDeConexaoBancoDeDados";

export class RotasVacina{
    static init(app){

        app.route('/cadastrar/vacina').post((req, res) => {
            console.log(req.body);
            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            console.log("Em Cadastrar "+JSON.stringify(req.body));
            var sql = `INSERT INTO vacina (nome,fornecedor)VALUES (\'`+req.body.nome+ `\',\'`+req.body.fornecedor+`\')`;
            console.log("A SQL::" +sql);              
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            
            });

        
        

        app.route('/exibir/vacina/all').get((req, res) => {

            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            
            var sql = `SELECT * from vacina`;

            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result,fields) {
                if (err) throw err;
                
                  res.json({resultado:result})

                });
            })

            
        }
}
            
    
            




    
