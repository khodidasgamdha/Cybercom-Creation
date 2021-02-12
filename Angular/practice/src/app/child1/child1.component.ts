import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  public data = [];

  // dependency Injection
  constructor(private contact: ContactService ) { }

  ngOnInit(): void {
    // store service data to local array
    this.data = this.contact.serviceWorks();
  }

}
