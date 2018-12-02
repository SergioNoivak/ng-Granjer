import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  retorno;

  constructor( ) {


    

   }


   getThis(){

    return this.retorno;


   }

  ngOnInit() {

  }

  ngAfterViewInit(){

 

  }	


}
