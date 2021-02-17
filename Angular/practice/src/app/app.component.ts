import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ip = "From Parents...";
  
  // ng-container
  contactMethod = [
    { id: 1, name: 'Email1' },
    { id: 2, name: 'Email2' },
    { id: 3, name: 'Email3' },
    { id: 4, name: 'Email4' },
    { id: 5, name: 'Email5' }
  ];

}
