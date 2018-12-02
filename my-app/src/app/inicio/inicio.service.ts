import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http:HttpClient) { 

    

  }

  buscarUsuario(usuario:Usuario):any{

    return this.http.post<any>('http://localhost:8000/autenticar',{usuario:usuario})

  }




}
