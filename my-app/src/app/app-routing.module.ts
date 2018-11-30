import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { MatrizGeralComponent } from './matriz-geral/matriz-geral.component';
import { ContaGeralComponent } from './conta-geral/conta-geral.component';
import { MedicacaoGeralComponent } from './medicacao-geral/medicacao-geral.component';
import { VacinaGeralComponent } from './vacina-geral/vacina-geral.component';
import { VisitaGeralComponent } from './visita-geral/visita-geral.component';
import { InspecaoGeralComponent } from './inspecao-geral/inspecao-geral.component';
import { ExibirContaComponent } from './exibir-conta/exibir-conta.component';





const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent } ,   
  { path: 'matriz', component: MatrizGeralComponent },
  { path: 'conta', component: ContaGeralComponent },
  {path: 'medicacao', component: MedicacaoGeralComponent},
  {path: 'vacina', component: VacinaGeralComponent},
  {path: 'visita', component: VisitaGeralComponent} ,
  {path: 'inspecao', component: InspecaoGeralComponent}, 
  {path: 'exibir-conta', component: ExibirContaComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}