import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login/login.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-reqres-login',
  templateUrl: './reqres-login.component.html',
  styleUrls: ['./reqres-login.component.css']
})
export class ReqresLoginComponent {

  form;

  // form builder method
  constructor(fb: FormBuilder, 
              private service: LoginService, 
              private router: Router) {
    
    // form
    this.form = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (localStorage.getItem('currentUser') !== null) {  
      this.router.navigate(['/login']);  
    }

  }

  // get userName
  get userName() {
    return this.form.get('userName');
  }
  
  // get password
  get password() {
    return this.form.get('password');
  }

  // login and get token
  login() {
    let data = { "email" : this.userName?.value, "password" : this.password?.value};

    this.service.addData(data)
      .subscribe((res:any) => {
        if(res.token) {
          console.log(res.token); // for showing purpose
          localStorage.setItem('currentUser', "loggedin");
          this.router.navigate(['/']);
        }
      },
      (error: Response) => {
        Observable.throw(error);
      })
  }
}