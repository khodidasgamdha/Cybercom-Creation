import { AfterViewInit, Component, Input, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ContactService } from '../core/service/contact/contact.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewInit {

  @Input() ipStr;
  // @Output() opStr = new EventEmitter();

  public data = [];

  // service --------------------------------------------------
  // dependency Injection
  constructor(private contact: ContactService ) { }

  ngOnInit(): void {
    // store service data to local array
    this.data = this.contact.serviceWorks();
  }

  // custom pipe -----------------------------------------------
  mob = 'This is Custom Pipe...';

  // view Children ---------------------------------------------
  @ViewChildren(HomeComponent) date: QueryList<HomeComponent>;
  
  ngAfterViewInit() {
  //   console.log(this.date.toArray());
  //   this.date.toArray().forEach(element => {
  //     setInterval(() => {
  //       element.today = new Date()
  //     }, 1000.)
  //   })
    
  }

}
