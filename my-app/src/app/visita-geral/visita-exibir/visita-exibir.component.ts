import { Component, OnInit } from '@angular/core';
import { VisitaService } from '../visita.service';

@Component({
  selector: 'app-visita-exibir',
  templateUrl: './visita-exibir.component.html',
  styleUrls: ['./visita-exibir.component.scss']
})
export class VisitaExibirComponent implements OnInit {
  linhasDoCrud = [
    'Nome de visitante',
'Motivo da visita',
'Data de visita',
'Horário de início',
'Horário de fim',
'Último local de contato com suínos',
'Último horário de contato com suínos',
'Empresa ou instituição do visitante'
]
visitas = [];
  constructor( private visitaService:VisitaService) {
        this.getVisitas();  
    
   }


   getVisitas(){
    this.visitaService.getVisitas().subscribe(GET=>{

      this.visitas = GET['resultado'];

    })
   }
  ngOnInit() {
  }

}
