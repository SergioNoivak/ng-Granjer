



import { PortadorDeConexaoBancoDeDados } from "./../../PortadorDeConexaoBancoDeDados";
import { UsuarioDAO } from "./../../classesDAO/UsuarioDAO";
import { MedicacaoDAO } from "../../classesDAO/MedicacaoDAO";
import { Medicacao } from '../../../model/Medicacao';

class RotasMedicacao{
    static init(app){

        app.route('/cadastrar/medicacao').post((req, res) => {
            console.log(req.body);
            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            console.log("Em Cadastrar "+JSON.stringify(req.body));
            var sql = `INSERT INTO Medicacao (nome,fornecedor)VALUES (\'`+req.body.nome+ `\',\'`+req.body.fornecedor+`\')`;
            console.log("A SQL::" +sql);              
            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            
            });

        
        

        app.route('/exibir/medicacao/all').get((req, res) => {

            let portadorDeConexaoBancoDeDados:PortadorDeConexaoBancoDeDados = new PortadorDeConexaoBancoDeDados();
            portadorDeConexaoBancoDeDados.CriarConexaoEConectar("localhost","root","snovak1808",3306,"ngGranjer")
            
            var sql = `SELECT * from Medicacao`;

            portadorDeConexaoBancoDeDados.connection.query(sql, function (err, result,fields) {
                if (err) throw err;
                
                  res.json({resultado:result})

                });
            })

            
        }
}
            
    
            




    
export{RotasMedicacao}
