import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('rndr') rdr: ElementRef; //take DOM refrence

  constructor(public router: Router, private render: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.render.setStyle(this.rdr.nativeElement, 'backgroundColor', 'cadetblue');
  }

  // logout
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return !!localStorage.getItem('currentUser');
  }
  
}
