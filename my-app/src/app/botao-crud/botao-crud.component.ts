import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-crud',
  templateUrl: './botao-crud.component.html',
  styleUrls: ['./botao-crud.component.scss']
})
export class BotaoCRUDComponent implements OnInit {


  @Output()
  eventoMudancaDeAba=new EventEmitter ();


  estado:string;

  constructor() {


  }


  clicouCadastrar(){
    this.eventoMudancaDeAba.emit({"estado" : "Cadastrar"});
  
  }
  clicouBusca(){

    this.eventoMudancaDeAba.emit({"estado" : "Busca"});

  }
  clicouExibir(){
    this.eventoMudancaDeAba.emit({"estado" : "Exibir"});
    
  }


  ngOnInit() {
  }

}
