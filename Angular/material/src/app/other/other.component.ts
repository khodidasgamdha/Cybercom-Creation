import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // Snack bar
  openSnackBar() {
    this._snackBar.open('Snack Bar', 'Undo', {
      duration: 5000, //time
      horizontalPosition: 'center', // start, center, end, left, right
      verticalPosition: 'bottom' //bottom, top
    });
  }

  // tabs
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];

}