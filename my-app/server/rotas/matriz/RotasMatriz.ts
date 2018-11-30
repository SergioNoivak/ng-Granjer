import { PortadorDeConexaoBancoDeDados } from '../../PortadorDeConexaoBancoDeDados';


class RotasMatriz{
    static init(app){

        app.route('/cadastrar/matriz').post((req, res) => {
        
            
            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"nggranjer")
            
            var sql = `INSERT INTO matriz 
            
            (identificacao,
            dataNascimento,
            dataEntradaReproducao,
            quantidadeTetosFuncionais,
            status)VALUES (\'`+req.body.Identificacao+ `\',\'`+req.body.DatadeNascimento+`\',\'`+req.body.DataEntradaReproducao+`\',`+req.body.QuantidadeTetosFuncionais +`,\'`+req.body.Status+`\')`;
            console.log("A SQL::" +sql);              
            console.log("A req.body::" +JSON.stringify(req.body));              
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            
            });
              
            
            app.route('/exibir/matriz/all').get((req, res) => {

            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            
            var sql = `SELECT * from matriz`;

            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result,fields) {
                if (err) throw err;
                
                  res.json({resultado:result})

                });
            })

       
    }
}
export{RotasMatriz}
