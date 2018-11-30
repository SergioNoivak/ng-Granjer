import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacina-buscar',
  templateUrl: './vacina-buscar.component.html',
  styleUrls: ['./vacina-buscar.component.scss']
})
export class VacinaBuscarComponent implements OnInit {

  linhasDoCrud = [
    'Nome da vacina',
    'Fornecedor'

]
  constructor() { }

  ngOnInit() {
  }

}
