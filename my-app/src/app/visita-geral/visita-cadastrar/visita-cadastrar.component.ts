import { Component, OnInit } from '@angular/core';
import { Visita } from '../../../../model/Visita';
import { VisitaService } from '../visita.service';

@Component({
  selector: 'app-visita-cadastrar',
  templateUrl: './visita-cadastrar.component.html',
  styleUrls: ['./visita-cadastrar.component.scss']
})
export class VisitaCadastrarComponent implements OnInit {


   nomeVisitante: string;
   motivo: string;
   dataVisita: string;
   horarioInicio: string;
   horarioFim: string;
   ultimoLocal: string;
   ultimoHorarioContato: string;
   empresaInstituicao: string;

  constructor(private visitaService:VisitaService) { }



  cadastrarVisita(){

    let visita:Visita = new Visita(this.nomeVisitante,this.motivo,this.dataVisita,this.horarioInicio,this.horarioFim,this.ultimoLocal,this.ultimoHorarioContato,this.empresaInstituicao)

    this.visitaService.enviar(visita);
  }
  ngOnInit() {
  }

}
