import { Component, OnInit } from '@angular/core';
import { ExibirGeralService } from '../../exibir-geral.service';

@Component({
  selector: 'app-medicacao-exibir',
  templateUrl: './medicacao-exibir.component.html',
  styleUrls: ['./medicacao-exibir.component.scss']
})
export class MedicacaoExibirComponent implements OnInit {
  linhasDoCrud = [
    'Nome do medicamento',
    'Fornecedor'

]

resultados:[]

  constructor(private exibirGeralService:ExibirGeralService) {

     exibirGeralService.getAllMedicao().subscribe(GET=>{

        this.resultados = GET['resultado'];        

     });
     
   }

  ngOnInit() {



      



  }

}
