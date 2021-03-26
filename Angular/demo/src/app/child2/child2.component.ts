import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login/login.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  name;
  constructor(private subject: LoginService) {

    // fetch name from service
    this.subject.userName.subscribe(uName => {
      this.name = uName;
    })
    
   }

  ngOnInit(): void {
  }

  // update name & set it in service
  updateName(nm) {
    this.subject.userName.next(nm);
  }

}
