import { Injectable } from '@angular/core';
import { Matriz } from '../../../model/Matriz';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatrizService {
    
  enviar(matriz:Matriz)
  {
    this.http.post<any>('http://localhost:8000/cadastrar/matriz',matriz, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();  

  
  }

  getAll(){
    return this.http.get<any>('http://localhost:8000/exibir/matriz/all');

  }


  constructor(private http:HttpClient) { 



  }
}
