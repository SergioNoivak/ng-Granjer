import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Visita } from '../../../model/Visita';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  enviar(visita:Visita)
  {
    this.http.post<any>('http://localhost:8000/cadastrar/visita',visita, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();  

  }


  getVisitas():any{

    return this.http.get<any>('http://localhost:8000/exibir/visita/all')

  }
  constructor(private http:HttpClient) { }
}
