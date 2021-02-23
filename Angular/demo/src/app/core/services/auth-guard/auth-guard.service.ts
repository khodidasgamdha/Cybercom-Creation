import { Injectable } from '@angular/core';  
import { Router, CanActivate } from '@angular/router';  

@Injectable({ providedIn: 'root' })  

export class AuthGuard implements CanActivate {  

  constructor(private router: Router) { }  

  // check user is login or not
  canActivate() {  
    if (localStorage.getItem('currentUser')) {  
        return true;  
    }  
    this.router.navigate(['/login']);  
    return false;  
  }  

}