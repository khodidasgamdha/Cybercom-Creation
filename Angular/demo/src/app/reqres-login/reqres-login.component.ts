import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reqres-login',
  templateUrl: './reqres-login.component.html',
  styleUrls: ['./reqres-login.component.css']
})
export class ReqresLoginComponent {

  form;

  // form builder method
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // get userName
  get userName() {
    return this.form.get('userName');
  }
  
  // get password
  get password() {
    return this.form.get('password');
  }

  login(userName, password) {
    console.log(userName, password);
  }

}
