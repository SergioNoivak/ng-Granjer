import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  retorno;

  constructor( private inicioService:InicioService) {

    console.log("PASSOU")
     this.inicioService.getAll().subscribe(GET=> this.retorno = GET['resultado']);
    

   }

   fazerAtualizacao(){

    console.log("iii")
    this.inicioService.metodo2({"KAkakaak":"ajajajaajaj"});


   }

   getThis(){

    return this.retorno;


   }

  ngOnInit() {

  }

  ngAfterViewInit(){

 

  }	


}
