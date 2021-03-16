import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/authentication/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
    // form
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // reset password
  resetPassword() {
    const email = prompt('Enter E-mail to Reset Password !!');
    this.authService.ForgotPassword(email);
  }

  // get email
  get email() {
    return this.form.get('email');
  }
  
  // get password
  get password() {
    return this.form.get('password');
  }

}
