import { Component, OnInit } from '@angular/core';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-vacina-exibir',
  templateUrl: './vacina-exibir.component.html',
  styleUrls: ['./vacina-exibir.component.scss']
})
export class VacinaExibirComponent implements OnInit {
  linhasDoCrud = [
    'Nome da vacina',
    'Fornecedor'
]
vacinas = [];
  constructor(private vacinaService:VacinaService) {

    this.getVacinas();
   }

   getVacinas(){

      this.vacinaService.getVacinas().subscribe(GET=>{

            this.vacinas = GET['resultado'];
      })
   }
  ngOnInit() {
  }

}
