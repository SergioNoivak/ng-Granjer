import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-usuario',
  templateUrl: './cartao-usuario.component.html',
  styleUrls: ['./cartao-usuario.component.scss']
})
export class CartaoUsuarioComponent implements OnInit {



  @Input('escopo')
    escopo:string;


  constructor() { }

  ngOnInit() {
  }

}
