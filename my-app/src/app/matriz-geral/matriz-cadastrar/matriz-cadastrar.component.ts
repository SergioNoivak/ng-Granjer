import { Component, OnInit } from '@angular/core';
import { MatrizService } from '../matriz.service';
import { Matriz } from '../../../../model/Matriz';

@Component({
  selector: 'app-matriz-cadastrar',
  templateUrl: './matriz-cadastrar.component.html',
  styleUrls: ['./matriz-cadastrar.component.scss']
})
export class MatrizCadastrarComponent implements OnInit {



  Identificacao:any;
  DatadeNascimento:any;
  DataEntradaReproducao:any;
  QuantidadeTetosFuncionais:any;
  Status:any;


  constructor(private matrizService:MatrizService) { 

    
  } 

  ngOnInit() {

  }



  cadastrarMatriz(){
    

    let matriz = new Matriz(this.Identificacao,this.DatadeNascimento,this.Status);
    matriz.QuantidadeTetosFuncionais = this.QuantidadeTetosFuncionais;
    matriz.DataEntradaReproducao=this.DataEntradaReproducao;
    
    this.matrizService.enviar(matriz);
  }

  

}
