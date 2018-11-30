import { Usuario } from '../../model/Usuario';
export class UsuarioDAO{


        public Cadastrar(usuario:Usuario,connection:any){

            console.log("Em Cadastrar "+JSON.stringify(usuario));
            var sql = `INSERT INTO Usuario (nomeUsuario,senha,email,tipoConta)VALUES (\'`+usuario.nomeUsuario+ `\',\'`+usuario.senha+ `\',\'`+usuario.email+ `\',`+1+`)`;
            console.log("A SQL::" +sql);              
              connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });

        }







}