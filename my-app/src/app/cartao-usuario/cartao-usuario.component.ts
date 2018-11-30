import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'model/Usuario';




@Component({
  selector: 'app-cartao-usuario',
  templateUrl: './cartao-usuario.component.html',
  styleUrls: ['./cartao-usuario.component.scss']
})
export class CartaoUsuarioComponent implements OnInit {



  @Input('escopo')
    escopo:string;


  @Output()
  clicouCadastrar=new EventEmitter ();


  public email:string="";
  public nomeUsuario:string="";
  public tipoConta:string="";
  public senha:string="";



  constructor() {


    
   }


  clicouCadastrarUsuario(){

    let usuario:Usuario = new Usuario(this.email,this.nomeUsuario,this.tipoConta,this.senha);
    this.clicouCadastrar.emit({"usuario":usuario});
  }

 
  ngOnInit() {
  }

}
