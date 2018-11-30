import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService } from '../cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private cadastroUsuarioService:CadastroUsuarioService) { }
  fazerCadastro(event){
      console.log(event.usuario);
      this.cadastroUsuarioService.enviarUsuario(event.usuario);


  }
  ngOnInit() {
  }

}
