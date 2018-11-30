
     class PortadorDeConexaoBancoDeDados {
      
        public mysql:any;
        public connection:any;

        constructor(){
            this.mysql= require('mysql');
        }



        Conectar(){

            this.connection.connect(function(err) {
                if (err) {
                  console.error('error connecting: ' + err.stack);
                  return;
                }
              
              });
        }

        CriarConexaoEConectar(host:string,user:string,password:string,port:number,database:string):any{
            this.connection = this.mysql.createConnection({
                host: host,
                user: user,
                password: password,
                port:port,
                database:database    
              });

                this.Conectar();
        }

        ExibirDados(query:string){

            this.connection.query(query, function (error, rows, fields) {
                if (error) throw error;
            
                if(rows){
                    rows.forEach(element => {
                        console.log(element.nome);
                    });
                }
            });
        }



        FinalizarConexao(){
            this.connection.end();
        }

    }
    
    export {PortadorDeConexaoBancoDeDados};
    