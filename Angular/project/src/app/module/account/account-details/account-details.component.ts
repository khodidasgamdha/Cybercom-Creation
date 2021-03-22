import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    })
  }

  ngOnInit(): void {    
  }

  submit() {
    console.log(this.form.value);
  }

  get name() { return this.form.get('name') }
  get surname() { return this.form.get('surname') }
}
