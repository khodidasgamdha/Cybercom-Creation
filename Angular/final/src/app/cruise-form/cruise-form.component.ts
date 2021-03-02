import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cruise-form',
  templateUrl: './cruise-form.component.html',
  styleUrls: ['./cruise-form.component.css']
})
export class CruiseFormComponent implements OnInit {

  form;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      date:['',Validators.required],
      participants: ['', [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]],
      food: [],
      contact: [],
      name: this.fb.array([ this.fullName() ]),
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: this.fb.array([ this.number() ]),
      additional: []
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

  // on submit method
  onSubmit(){
    alert("Data Send Successfully !!");
    console.log(this.form.value);
  }

  // get controls
  get date() {return this.form.get('date');}
  get participants() {return this.form.get('participants');}
  get food() {return this.form.get('food');}
  get contact() {return this.form.get('contact');}
  get name() {return this.form.get('name');}
  get email() {return this.form.get('email');}
  get phone() {return this.form.get('phone');}

}
