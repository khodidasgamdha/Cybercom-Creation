import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LoginService } from '../core/services/login/login.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewInit {

  name;
  @ContentChild('ab') abc: ElementRef; //take DOM refrence

  constructor(private subject: LoginService, private render: Renderer2) {
    
    // fetch name from service
    this.subject.userName.subscribe(uName => {
      this.name = uName;
    })
    
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // change Style of DOM Element
    this.render.setStyle(this.abc.nativeElement, 'backgroundColor', 'cadetblue');
  }

  // update name & set it in service
  updateName(nm) {
    this.subject.userName.next(nm);
  }

}
