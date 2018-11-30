import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inspecao } from '../../../model/Inspecao';

@Injectable({
  providedIn: 'root'
})
export class InspecaoService {


  getMatrizes():any{

    return this.http.get<any>('http://localhost:8000/exibir/matriz/all')

  }


  enviar(inspecao:Inspecao)
  {
    this.http.post<any>('http://localhost:8000/cadastrar/inspecao',inspecao, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();  

  
  }

  getInspecoes():any{

    return this.http.get<any>('http://localhost:8000/exibir/inspecao/all')

  }



  constructor(private http:HttpClient) { }


}
