import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login(userName: String, password: String) {
    if(userName == "admin" && password == "admin") {
      localStorage.setItem('currentUser', "loggedin");
      return true;
    }
  }

  logout() {
    localStorage.removeItem('curruntUser');
  }
  
  public get loggedIn(): boolean {
    return !!localStorage.getItem('curruntUser');
  }
}
