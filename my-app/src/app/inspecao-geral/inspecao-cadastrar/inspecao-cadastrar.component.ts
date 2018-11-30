import { Component, OnInit } from '@angular/core';
import { InspecaoService } from '../inspecao.service';
import { MatrizService } from '../../matriz-geral/matriz.service';
import { HttpClient } from '@angular/common/http';
import { Inspecao } from '../../../../model/Inspecao';

@Component({
  selector: 'app-inspecao-cadastrar',
  templateUrl: './inspecao-cadastrar.component.html',
  styleUrls: ['./inspecao-cadastrar.component.scss']
})
export class InspecaoCadastrarComponent implements OnInit {
      id_matriz:number = -1;
      motivo:string;
      procedimento:string;
      dataDaInspecao:string;
      hora:string;
      nomeInterventor:string;
  matrizes: [];
  constructor(private inspecaoService:InspecaoService, ) {    
    this.getMatrizes()

   }

   getMatrizes(){
     this.inspecaoService.getMatrizes().subscribe(GET=>{
      this.matrizes = GET['resultado'];
    });
   }

   cadastrarInspecao(){
    let inspecao:Inspecao = new Inspecao(this.id_matriz,this.motivo,this.procedimento,this.dataDaInspecao,this.nomeInterventor);
    inspecao.hora = this.hora;
    this.inspecaoService.enviar(inspecao);

   }
  ngOnInit() {
  

  }

}
