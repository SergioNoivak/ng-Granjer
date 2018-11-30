import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicacao } from '../../model/Medicacao';

@Injectable({
  providedIn: 'root'
})
export class ExibirGeralService {

  resultado:[];
  

  constructor(private http:HttpClient) {
   }

   getAllMedicao(){

    
     return this.http.get<any>('http://localhost:8000/exibir/medicacao/all');
   
  } 



}
