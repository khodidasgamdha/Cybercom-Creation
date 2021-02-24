import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  // check login or not
  canActivate() {
    if(sessionStorage.getItem('admin')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
