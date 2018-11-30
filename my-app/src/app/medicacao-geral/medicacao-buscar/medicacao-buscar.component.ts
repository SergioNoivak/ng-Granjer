import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicacao-buscar',
  templateUrl: './medicacao-buscar.component.html',
  styleUrls: ['./medicacao-buscar.component.scss']
})
export class MedicacaoBuscarComponent implements OnInit {


  linhasDoCrud = [
    'Nome do medicamento',
    'Fornecedor'

]

  constructor() { }

  ngOnInit() {
  }

}
