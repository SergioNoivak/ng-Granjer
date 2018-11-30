import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartaoUsuarioComponent } from './cartao-usuario/cartao-usuario.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CartaoHomeComponent } from './cartao-home/cartao-home.component';
import { LinhaDeCartoesComponent } from './home/linha-de-cartoes/linha-de-cartoes.component';
import { MatrizGeralComponent } from './matriz-geral/matriz-geral.component';
import { MatrizCadastrarComponent } from './matriz-geral/matriz-cadastrar/matriz-cadastrar.component';
import { BotaoCRUDComponent } from './botao-crud/botao-crud.component';
import { MatrizExibirComponent } from './matriz-geral/matriz-exibir/matriz-exibir.component';
import { MatrizBusccarComponent } from './matriz-geral/matriz-busccar/matriz-busccar.component';
import { ContaGeralComponent } from './conta-geral/conta-geral.component';
import { MedicacaoGeralComponent } from './medicacao-geral/medicacao-geral.component';
import { MedicacaoCadastrarComponent } from './medicacao-geral/medicacao-cadastrar/medicacao-cadastrar.component';
import { MedicacaoExibirComponent } from './medicacao-geral/medicacao-exibir/medicacao-exibir.component';
import { MedicacaoBuscarComponent } from './medicacao-geral/medicacao-buscar/medicacao-buscar.component';
import { VacinaGeralComponent } from './vacina-geral/vacina-geral.component';
import { VacinaBuscarComponent } from './vacina-geral/vacina-buscar/vacina-buscar.component';
import { VacinaCadastrarComponent } from './vacina-geral/vacina-cadastrar/vacina-cadastrar.component';
import { VacinaExibirComponent } from './vacina-geral/vacina-exibir/vacina-exibir.component';
import { VisitaGeralComponent } from './visita-geral/visita-geral.component';
import { VisitaBuscarComponent } from './visita-geral/visita-buscar/visita-buscar.component';
import { VisitaCadastrarComponent } from './visita-geral/visita-cadastrar/visita-cadastrar.component';
import { VisitaExibirComponent } from './visita-geral/visita-exibir/visita-exibir.component';
import { InspecaoGeralComponent } from './inspecao-geral/inspecao-geral.component';
import { InspecaoBuscarComponent } from './inspecao-geral/inspecao-buscar/inspecao-buscar.component';
import { InspecaoCadastrarComponent } from './inspecao-geral/inspecao-cadastrar/inspecao-cadastrar.component';
import { InspecaoExibirComponent } from './inspecao-geral/inspecao-exibir/inspecao-exibir.component';
import { ExibirContaComponent } from './exibir-conta/exibir-conta.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CartaoUsuarioComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    CartaoHomeComponent,
    LinhaDeCartoesComponent,
    MatrizGeralComponent,
    MatrizCadastrarComponent,
    BotaoCRUDComponent,
    MatrizExibirComponent,
    MatrizBusccarComponent,
    ContaGeralComponent,
    MedicacaoGeralComponent,
    MedicacaoCadastrarComponent,
    MedicacaoExibirComponent,
    MedicacaoBuscarComponent,
    VacinaGeralComponent,
    VacinaBuscarComponent,
    VacinaCadastrarComponent,
    VacinaExibirComponent,
    VisitaGeralComponent,
    VisitaBuscarComponent,
    VisitaCadastrarComponent,
    VisitaExibirComponent,
    InspecaoGeralComponent,
    InspecaoBuscarComponent,
    InspecaoCadastrarComponent,
    InspecaoExibirComponent,
    ExibirContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
