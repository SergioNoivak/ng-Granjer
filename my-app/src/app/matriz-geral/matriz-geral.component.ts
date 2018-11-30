import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriz-geral',
  templateUrl: './matriz-geral.component.html',
  styleUrls: ['./matriz-geral.component.scss']
})
export class MatrizGeralComponent implements OnInit {


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
