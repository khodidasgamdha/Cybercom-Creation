import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../../core/services/can-deactivate/can-deactivate.guard';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements CanComponentDeactivate {

  constructor() { }

  canDeactivate(): Observable<boolean> | boolean {
    return confirm(`Are you sure you want to Navigate ? \n Press 'OK' if Yes `);
  }
  
}