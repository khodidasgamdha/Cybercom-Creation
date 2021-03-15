import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/authentication/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
    // form
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // get userName
  get userName() {
    return this.form.get('userName');
  }
  
  // get password
  get password() {
    return this.form.get('password');
  }

}
