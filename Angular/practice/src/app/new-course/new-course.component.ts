import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  // form builder methos
    /*** 
      form = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormGroup({
          email: new FormControl(),
          phone: new FormControl()
        }),
        topics: new FormArray([])
      }); 
    */
  
  form;

  // form builder method
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  // add topic to array
  addTopic(topic: HTMLInputElement) {
    (this.topics as FormArray).push(new FormControl(topic.value))
    topic.value = '';
  }

  // remove topic
  removeTopic(topic: FormControl) {
    let index = this.topics['controls'].indexOf(topic);
    this.topics['removeAt'](index);
  }

  get topics() {
    return this.form.get('topics');
  }

}
