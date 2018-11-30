import { Component, OnInit } from '@angular/core';
import { InspecaoService } from './inspecao.service';
import { MatrizService } from '../matriz-geral/matriz.service';

@Component({
  selector: 'app-inspecao-geral',
  templateUrl: './inspecao-geral.component.html',
  styleUrls: ['./inspecao-geral.component.scss']
})
export class InspecaoGeralComponent implements OnInit {

  opcaoDoCRUD:string;


  constructor() {
    this.opcaoDoCRUD="Exibir";


   }


   alterarAba(event){

     this.opcaoDoCRUD=event.estado;
     console.log(this.opcaoDoCRUD)

   }
  ngOnInit() {

   
  }

}
