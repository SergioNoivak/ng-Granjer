import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visita-buscar',
  templateUrl: './visita-buscar.component.html',
  styleUrls: ['./visita-buscar.component.scss']
})
export class VisitaBuscarComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
