import { Component, OnInit } from '@angular/core';
import { MatrizService } from '../matriz.service';

@Component({
  selector: 'app-matriz-exibir',
  templateUrl: './matriz-exibir.component.html',
  styleUrls: ['./matriz-exibir.component.scss']
})
export class MatrizExibirComponent implements OnInit {

  linhasDoCrud = ['identificação','Data de nascimento',
  'Data de entrada em reprodução',
  'Quantidade de tetos funcionais',
  'Status'
]

  resultados = [];


  constructor(private matrizService:MatrizService) { 
    this.getAll();

  }


  getAll(){

      this.matrizService.getAll().subscribe(GET=>{

        this.resultados = GET['resultado'];      });




  }



  ngOnInit() {
  }

}
