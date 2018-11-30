import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


class ClasseTeste{
    public nome:string
} 




// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};
@Injectable({ 
  providedIn: 'root'
})
export class InicioService {

  data: any;

  constructor(private http:HttpClient,private https:HttpBackend) { }
      getAll(){  
        
        
      return this.http.get<any>('http://localhost:8000/teste') ;
      


}


metodo2(valor:any){
  this.http.post<any>('http://localhost:8000/teste',valor, 
  { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();  
}



}
