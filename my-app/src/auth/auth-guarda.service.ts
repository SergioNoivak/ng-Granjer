import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GuardaService } from './guarda.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardaService implements CanActivate {

  constructor(private guardaService:GuardaService,public router: Router) { }


  canActivate():boolean{

    if(!this.guardaService.isAuthenticated()){
      this.router.navigate(['']);
      return false;


    }

    return true;
    
  }
}
