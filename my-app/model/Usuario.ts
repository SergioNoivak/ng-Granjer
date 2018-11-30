export class Usuario{

    public email:string="";
    public nomeUsuario:string="";
    public tipoConta:string="";
    public senha:string="";
    

    constructor(email:string,nomeUsuario:string,tipoConta:string,senha:string){
            this.email=email;
            this.nomeUsuario=nomeUsuario;
            this.tipoConta=tipoConta;
            this.senha=senha;
    }
}