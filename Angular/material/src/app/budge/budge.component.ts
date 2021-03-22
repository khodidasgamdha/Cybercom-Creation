import { Component } from '@angular/core';

@Component({
  selector: 'app-budge',
  templateUrl: './budge.component.html',
  styleUrls: ['./budge.component.css']
})
export class BudgeComponent {

  constructor() { }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
