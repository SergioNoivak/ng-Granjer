import { Injectable } from '@angular/core';
import { Usuario } from 'model/Usuario';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};
@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  enviarUsuario(usuario:Usuario){
    this.http.post<any>('http://localhost:8000/cadastrar/usuario',usuario, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();  

  }




  constructor(private http:HttpClient) { }
}
