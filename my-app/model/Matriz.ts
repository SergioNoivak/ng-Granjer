export class Matriz{


    public Identificacao:string;
    public DatadeNascimento:string;
    public DataEntradaReproducao:string;
    public QuantidadeTetosFuncionais:number;
    public Status:string;

    constructor(Identificacao:string,DatadeNascimento:string,Status:string){
        this.Identificacao = Identificacao;
        this.DatadeNascimento = DatadeNascimento;
        this.Status = Status;
    }
}


