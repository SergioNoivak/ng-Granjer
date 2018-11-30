export class Inspecao{
    public id_matriz:number;
    public motivo:string;
    public procedimento:string;
    public dataDaInspecao:string;
    public hora:string;
    public nomeInterventor:string;

    constructor(id_matriz:number,motivo:string,procedimento:string,dataDaInspecao:string,nomeInterventor:string){
        this.id_matriz =id_matriz;
        this.motivo =motivo;
        this.procedimento =procedimento;
        this.dataDaInspecao =dataDaInspecao;
        this.nomeInterventor =nomeInterventor;
    }
}