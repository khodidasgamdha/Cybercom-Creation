import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../username.validation';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{ 

  // form Group
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',
        [ Validators.required,       // error
          Validators.minLength(3),   // error    
          Validators.maxLength(10),  // error     
          UsernameValidators.cannotContainSpace ],
        UsernameValidators.shouldBeUnique),   // Asynchronous operations
      password: new FormControl('', Validators.required)
    })
  });

  // get username
  get username() {
    return this.form.get('account.username');
  }

  // on submit put error
  login() {
    // let isValid = authService.login(this.form.value);
    // if(!isValid) {
    this.form.setErrors({
      invalidLogin: true
    });
    // }
  }

}
