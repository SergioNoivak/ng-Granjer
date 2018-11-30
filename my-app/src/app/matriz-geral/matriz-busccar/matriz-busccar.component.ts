import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriz-busccar',
  templateUrl: './matriz-busccar.component.html',
  styleUrls: ['./matriz-busccar.component.scss']
})
export class MatrizBusccarComponent implements OnInit {


  linhasDoCrud = ['Data de nascimento',
                  'Data de entrada em reprodução',
                  'Quantidade de tetos funcionais',
                  'Status'
                ]


  constructor() { }

  ngOnInit() {
  }

}
