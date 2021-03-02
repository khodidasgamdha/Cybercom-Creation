import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cruise-form',
  templateUrl: './cruise-form.component.html',
  styleUrls: ['./cruise-form.component.css']
})
export class CruiseFormComponent implements OnInit {

  form;
  curruntDate = new Date();
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      dateOfCruise: this.fb.array([ this.date() ]),
      participants: ['', Validators.required],
      food: [],
      contact: [],
      name: this.fb.array([ this.fullName() ]),
      email: ['', Validators.required],
      phone: this.fb.array([ this.number() ]),
      additional: []
    })

  }

  // date array function 
  date(): FormGroup {
    return this.fb.group({
      month: [],
      day: [],
      year: [],
      hour: [],
      minute: []
    })
  }

  // name array function
  fullName() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  // phone array function
  number() {
    return this.fb.group({
      code: ['', Validators.required],
      number: ['', Validators.required]
    })
  }

  // hour array
  hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // minutes array
  mimutes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  get dateOfCruise() {
    return this.form.get('dateOfCruise');
  }

  get participants() {
    return this.form.get('participants');
  }

  get food() {
    return this.form.get('food');
  }

  get contact() {
    return this.form.get('contact');
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

}
