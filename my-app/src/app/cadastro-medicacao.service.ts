import { Injectable } from '@angular/core';
import { Medicacao } from 'model/Medicacao';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};
@Injectable({
  providedIn: 'root'
})
export class CadastroMedicacaoService {

  enviarMedicacao(medicacao:Medicacao){
    this.http.post<any>('http://localhost:8000/cadastrar/medicacao',medicacao, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();  
  }

  constructor(private http:HttpClient) { }
}
