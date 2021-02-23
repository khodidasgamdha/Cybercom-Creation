import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
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
