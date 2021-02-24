import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(fb: FormBuilder, 
              private router: Router) {

    // form
    this.form = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    sessionStorage.setItem('admin','admin');
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
    if(sessionStorage.getItem('admin') && (this.userName.value == 'admin' && this.password.value == 'admin')) {
      this.router.navigate(['/page']);
      return true;
    }
    alert('Something went Wrong.. !!');
    this.router.navigate(['/login']);
    return false;
  }

}
