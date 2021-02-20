import { Component, OnInit } from '@angular/core';  
import { AuthenticationService } from '../../service/authentication.service';  
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: String;
  password: String;

  constructor(private auth: AuthenticationService, private router: Router) { 
    if(this.auth.loggedIn) {
      this.router.navigate(['home']);
    }
  }

  login(): void {
    if(this.userName != '' && this.password != '') {
      if(this.auth.login(this.userName, this.password)) {
        this.router.navigate(['home']);
      }
      else {
        Swal.fire({
          title: 'Oops...', 
          text: 'UserName or Password is Wrong!', 
          icon: 'error'
        })
      }
    }
  }

}
