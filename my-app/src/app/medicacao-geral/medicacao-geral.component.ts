import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicacao-geral',
  templateUrl: './medicacao-geral.component.html',
  styleUrls: ['./medicacao-geral.component.scss']
})
export class MedicacaoGeralComponent implements OnInit {

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
