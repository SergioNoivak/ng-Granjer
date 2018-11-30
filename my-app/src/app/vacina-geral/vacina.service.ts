import { Injectable } from '@angular/core';
import { Vacina } from '../../../model/Vacina';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  enviar(vacina:Vacina)
  {
    this.http.post<any>('http://localhost:8000/cadastrar/vacina',vacina, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();  

  }
  getVacinas():any{

    return this.http.get<any>('http://localhost:8000/exibir/vacina/all')

  }
 
  constructor(private http:HttpClient) { }
}
