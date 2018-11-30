import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linha-de-cartoes',
  templateUrl: './linha-de-cartoes.component.html',
  styleUrls: ['./linha-de-cartoes.component.scss']
})
export class LinhaDeCartoesComponent implements OnInit {

@Input('urlDaImagem1')
urlDaImagem1:string;

@Input('titulo1')
titulo1:string;


@Input('rota1')
rota1:string;





@Input('urlDaImagem2')
urlDaImagem2:string;

@Input('titulo2')
titulo2:string;
@Input('rota2')
rota2:string;


@Input('urlDaImagem3')
urlDaImagem3:string;

@Input('titulo3')
titulo3:string;
@Input('rota3')
rota3:string;



  constructor() { }

  ngOnInit() {
  }

}
