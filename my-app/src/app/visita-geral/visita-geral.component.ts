import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visita-geral',
  templateUrl: './visita-geral.component.html',
  styleUrls: ['./visita-geral.component.scss']
})
export class VisitaGeralComponent implements OnInit {
 
  opcaoDoCRUD:string;
  alterarAba(event){

    this.opcaoDoCRUD=event.estado;
    console.log(this.opcaoDoCRUD)

  }
  constructor() {this.opcaoDoCRUD="Exibir" }

  ngOnInit() {
  }

}
