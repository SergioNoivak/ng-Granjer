import { Medicacao } from '../../model/Medicacao';


export class MedicacaoDAO{



        public static Cadastrar(medicacao:Medicacao,connection:any){

            console.log("Em Cadastrar "+JSON.stringify(medicacao));
            var sql = `INSERT INTO Medicacao (nome,fornecedor)VALUES (\'`+medicacao.nome+ `\',\'`+medicacao.fornecedor+`\')`;
            console.log("A SQL::" +sql);              
              connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
        }



        async main(){






        }
        public static  getAll(connection:any){
        
          




            var promise = new Promise((resolve,reject)=>{
              

              });


                Promise.all([promise]).then((v)=>{


                    return v;

                }



                )

                return promise;
            
              
          }


}


