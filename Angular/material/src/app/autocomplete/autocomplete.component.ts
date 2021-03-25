import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  name: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: string[] = ['One', 'Two', 'Three'];

}
