import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacina-geral',
  templateUrl: './vacina-geral.component.html',
  styleUrls: ['./vacina-geral.component.scss']
})
export class VacinaGeralComponent implements OnInit {
  
  opcaoDoCRUD:string;

  alterarAba(event){

    this.opcaoDoCRUD=event.estado;
    console.log(this.opcaoDoCRUD)

  }
  constructor() {     this.opcaoDoCRUD="Exibir";
}

  ngOnInit() {
  }

}
