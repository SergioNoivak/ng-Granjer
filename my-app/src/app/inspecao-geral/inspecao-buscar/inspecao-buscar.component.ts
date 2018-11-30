import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspecao-buscar',
  templateUrl: './inspecao-buscar.component.html',
  styleUrls: ['./inspecao-buscar.component.scss']
})
export class InspecaoBuscarComponent implements OnInit {
  linhasDoCrud = [
    'Matriz',
    'Motivo',
    'Procedimento realizado',
    'Data',
    'Hora',
    'Nome do interventor'
]

  constructor() { }

  ngOnInit() {
  }

}
