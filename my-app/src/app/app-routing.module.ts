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
import { AuthGuardaService } from '../auth/auth-guarda.service';





const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuardaService]},
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent} ,   
  { path: 'matriz', component: MatrizGeralComponent,canActivate:[AuthGuardaService] },
  { path: 'conta', component: ContaGeralComponent,canActivate:[AuthGuardaService] },
  {path: 'medicacao', component: MedicacaoGeralComponent,canActivate:[AuthGuardaService]},
  {path: 'vacina', component: VacinaGeralComponent,canActivate:[AuthGuardaService]},
  {path: 'visita', component: VisitaGeralComponent,canActivate:[AuthGuardaService]} ,
  {path: 'inspecao', component: InspecaoGeralComponent,canActivate:[AuthGuardaService]}, 
  {path: 'exibir-conta', component: ExibirContaComponent,canActivate:[AuthGuardaService]}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}