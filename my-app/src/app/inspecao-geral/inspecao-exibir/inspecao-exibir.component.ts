import { Component, OnInit } from '@angular/core';
import { InspecaoService } from '../inspecao.service';

@Component({
  selector: 'app-inspecao-exibir',
  templateUrl: './inspecao-exibir.component.html',
  styleUrls: ['./inspecao-exibir.component.scss']
})
export class InspecaoExibirComponent implements OnInit {
  linhasDoCrud = [
    'Matriz',
    'Motivo',
    'Procedimento realizado',
    'Data',
    'Hora',
    'Nome do interventor'
]

  inspecoes = [];


  constructor(private inspecaoService:InspecaoService) {


    this.getInspecoes();
   }


  getInspecoes(){

    this.inspecaoService.getInspecoes().subscribe(GET=>{
      this.inspecoes = GET['resultado'];


    })



  }




  ngOnInit() {
  }

}
