export class Visita {
  public nomeVisitante: string;
  public motivo: string;
  public dataVisita: string;
  public horarioInicio: string;
  public horarioFim: string;
  public ultimoLocal: string;
  public ultimoHorarioContato: string;
  public empresaInstituicao: string;

  constructor(nomeVisitante: string,
    motivo: string,
    dataVisita: string,
    horarioInicio: string,
    horarioFim: string,
    ultimoLocal: string,
    ultimoHorarioContato: string,
    empresaInstituicao: string,
  ) {
    this.motivo = motivo;
    this.dataVisita = dataVisita;
    this.horarioInicio = horarioInicio;
    this.horarioFim = horarioFim;
    this.ultimoLocal = ultimoLocal;
    this.ultimoHorarioContato = ultimoHorarioContato;
    this.empresaInstituicao = empresaInstituicao;
    this.nomeVisitante = nomeVisitante;
  }




}
