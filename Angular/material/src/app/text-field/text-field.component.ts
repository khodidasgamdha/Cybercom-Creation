import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// Error when invalid control is dirty, touched, or submitted -- email required
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent{

  value = 'Clear me'  //click to clear
  hide = true;  // password
  constructor() {}

  // form control - email required
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // for instance error show - email required
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher(); //email required
  
  // size changs
  fontSizeControl = new FormControl(16, Validators.min(10));

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }
}
