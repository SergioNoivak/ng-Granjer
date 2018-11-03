import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';





const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent }    
   

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}