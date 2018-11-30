import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../../../model/Vacina';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-vacina-cadastrar',
  templateUrl: './vacina-cadastrar.component.html',
  styleUrls: ['./vacina-cadastrar.component.scss']
})
export class VacinaCadastrarComponent implements OnInit {

  constructor(private vacinaService:VacinaService) { }

  ngOnInit() {
  }

  nome:string;
  fornecedor:string;
  
  cadastrarVacina(){
    let vacina:Vacina = new Vacina(this.nome);
    vacina.fornecedor = this.fornecedor;
    this.vacinaService.enviar(vacina);

  }

}
