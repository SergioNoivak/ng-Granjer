import { Component, OnInit } from '@angular/core';
import { CadastroMedicacaoService } from '../../cadastro-medicacao.service';
import { Medicacao } from '../../../../model/Medicacao';

@Component({
  selector: 'app-medicacao-cadastrar',
  templateUrl: './medicacao-cadastrar.component.html',
  styleUrls: ['./medicacao-cadastrar.component.scss']
})
export class MedicacaoCadastrarComponent implements OnInit {



  nome:string;
  fornecedor:string;
  
  fazerCadastro(){
    let medicacao:Medicacao = new Medicacao(this.nome,this.fornecedor);
    this.cadastroMedicacaoService.enviarMedicacao(medicacao);


  }


  constructor(private cadastroMedicacaoService:CadastroMedicacaoService) { }

  ngOnInit() {
  }

}
