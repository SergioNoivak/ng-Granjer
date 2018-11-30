import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-home',
  templateUrl: './cartao-home.component.html',
  styleUrls: ['./cartao-home.component.scss']
})
export class CartaoHomeComponent implements OnInit {



  @Input('urlDaImagem')
  urlDaImagem:string;

  @Input('titulo')
  titulo:string;

  
  constructor() { }

  ngOnInit() {
  }

}
