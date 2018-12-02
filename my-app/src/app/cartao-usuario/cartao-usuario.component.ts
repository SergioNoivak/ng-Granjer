import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'model/Usuario';
import { InicioService } from '../inicio/inicio.service';
import { Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';




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
  public situacao=false;

  constructor(private inicioService:InicioService,private router:Router) {
   }
  clicouCadastrarUsuario(){

    let usuario:Usuario = new Usuario(this.email,this.nomeUsuario,this.tipoConta,this.senha);
    this.clicouCadastrar.emit({"usuario":usuario});
  }

  autenticar(){

    let usuario:Usuario = new Usuario(this.email,this.nomeUsuario,this.tipoConta,this.senha);
    this.inicioService.buscarUsuario(usuario).subscribe((GET)=>{

      
      if(GET.resultado[0].numeroLinhas>0){
        
        this.situacao=true;
        localStorage.setItem('token','true');
        this.router.navigate(['/home']) 
      }
      else{
        alert('Dados Inválidos')
      }
    
    })

  }
  ngOnInit() {
  }

}
